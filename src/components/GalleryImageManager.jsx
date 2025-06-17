import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebaseConfig'; // Ensure this path is correct
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';

// --- Light Theme Colors (Consistent with Admin Dashboard) ---
const adminThemeColors = {
  mainBackground: '#F5F7FA',
  cardBackground: '#FFFFFF',
  cardBorder: '#E0E6ED',
  mainText: '#333333',
  secondaryText: '#666666',
  accent: '#4A90E2',
  accentHover: '#3A7DCF',
  danger: '#E74C3C',
  dangerHover: '#C0392B',
  headerColor: '#2c3e50',
  buttonText: '#FFFFFF',
  inputBackground: '#F8FAFC', // Added for consistency
  inputBorder: '#CBD5E1',     // Added for consistency
  inputTextColor: '#333333',  // Added for consistency
};

// --- Styled Components ---

const PageContainer = styled.div`
  background-color: ${adminThemeColors.mainBackground};
  min-height: 100vh;
  padding: 3rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: ${adminThemeColors.mainText};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  color: ${adminThemeColors.headerColor};
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.p`
  color: ${adminThemeColors.secondaryText};
  font-size: 1rem;
`;

const UploadSection = styled.div`
  background-color: ${adminThemeColors.cardBackground};
  border: 1px solid ${adminThemeColors.cardBorder};
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  margin: 0 auto 3rem auto; /* Center and add bottom margin */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// --- NEWLY ADDED STYLED COMPONENTS ---
const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: ${adminThemeColors.mainText};
  font-size: 1.05rem;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px; /* Adjust as needed */
  margin-top: 1rem;
  border-radius: 8px;
  object-fit: contain; /* Ensures the whole image is visible */
  border: 1px solid ${adminThemeColors.cardBorder}; /* Optional: Add a border */
  display: block; /* Ensures it takes its own line */
`;
// --- END NEWLY ADDED STYLED COMPONENTS ---


const FileInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: ${adminThemeColors.inputBackground};
  color: ${adminThemeColors.inputTextColor};
  border: 1px solid ${adminThemeColors.inputBorder};
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    border-color: ${adminThemeColors.accent};
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }

  &::file-selector-button {
    font-weight: 600;
    color: ${adminThemeColors.mainText};
    background-color: #e0e0e0;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c2c2c2;
    }
  }
`;

const UploadButton = styled.button`
  background-color: ${adminThemeColors.accent};
  color: ${adminThemeColors.buttonText};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: ${adminThemeColors.secondaryText};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${adminThemeColors.accentHover};
  }
`;

const ImageGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageCard = styled.div`
  background-color: ${adminThemeColors.cardBackground};
  border: 1px solid ${adminThemeColors.cardBorder};
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden; /* Ensures image fits within border-radius */
`;

const DisplayImage = styled.img`
  width: 100%;
  height: 180px; /* Consistent height for images */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #f0f0f0; /* Placeholder background */
`;

const ImageInfo = styled.p`
  font-size: 0.9rem;
  color: ${adminThemeColors.secondaryText};
  margin-bottom: 1rem;
  word-break: break-all; /* Allow long URLs to wrap */
  text-align: center;
`;

const DeleteButton = styled.button`
  background-color: ${adminThemeColors.danger};
  color: ${adminThemeColors.buttonText};
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${adminThemeColors.dangerHover};
  }
`;

const NoImagesMessage = styled.p`
  text-align: center;
  grid-column: 1 / -1; /* Span across all columns */
  color: ${adminThemeColors.secondaryText};
  font-size: 1.1rem;
  padding: 2rem;
  background-color: ${adminThemeColors.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

// --- ImageManager Component ---

const GalleryImageManager = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // Function to fetch all image URLs from Firestore
  const fetchImages = async () => {
    setLoading(true);
    Swal.fire({
      title: 'Loading Images...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const q = query(collection(db, 'uploaded_images2'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedImages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate ? doc.data().createdAt.toDate() : doc.data().createdAt,
      }));
      setImages(fetchedImages);
      Swal.close();
    } catch (error) {
      console.error('Error fetching images:', error);
      Swal.fire('Error', 'Failed to fetch images.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(); // Fetch images on component mount
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Function to upload image to Cloudinary and save URL to Firestore
  const handleUpload = async () => {
    if (!selectedFile) {
      Swal.fire('Warning', 'Please select an image file first!', 'warning');
      return;
    }

    setUploading(true);
    Swal.fire({
      title: 'Uploading Image...',
      text: 'This might take a moment...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      // 1. Upload to Cloudinary
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'quadrik_digit_marketing_website'); // Replace with your upload preset
      formData.append('cloud_name', 'dardewp42'); // Replace with your cloud name

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dardewp42/image/upload`, // Use your cloud name here
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Cloudinary upload failed');
      }

      const imageUrl = data.secure_url;

      // 2. Save URL to Firestore
      await addDoc(collection(db, 'uploaded_images2'), {
        url: imageUrl,
        createdAt: serverTimestamp(),
      });

      Swal.fire('Success!', 'Image uploaded and URL saved!', 'success');
      setSelectedFile(null); // Clear selected file
      fetchImages(); // Refresh the list of images
    } catch (error) {
      console.error('Upload error:', error);
      Swal.fire('Error', `Image upload failed: ${error.message}`, 'error');
    } finally {
      setUploading(false);
    }
  };

  // Function to delete only the URL from Firestore (image remains on Cloudinary)
  const handleDelete = async (imageId, imageUrl) => {
    Swal.fire({
      title: `Are you sure you want to delete this?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: adminThemeColors.danger,
      cancelButtonColor: adminThemeColors.secondaryText,
      confirmButtonText: 'Yes, delete!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleting URL...',
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });
        try {
          await deleteDoc(doc(db, 'uploaded_images2', imageId));
          Swal.fire('Deleted!', 'Image URL deleted from database.', 'success');
          fetchImages(); // Refresh the list
        } catch (error) {
          console.error('Error deleting URL:', error);
          Swal.fire('Error', 'Failed to delete image URL.', 'error');
        }
      }
    });
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Title>Image Asset Manager</Title>
        <Subtitle>Upload images and manage their URLs.</Subtitle>
      </HeaderContainer>

      <UploadSection>
        <Label htmlFor="imageUploadInput">Select Image to Upload</Label> {/* Used Label */}
        <FileInput
          id="imageUploadInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <ImagePreview src={URL.createObjectURL(selectedFile)} alt="Selected File Preview" /> /* Used ImagePreview */
        )}
        <UploadButton onClick={handleUpload} disabled={!selectedFile || uploading}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </UploadButton>
      </UploadSection>

      <HeaderContainer style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <Title style={{ fontSize: '1.8rem' }}>Uploaded Images</Title>
      </HeaderContainer>

      {loading ? (
        <NoImagesMessage>Loading images...</NoImagesMessage>
      ) : images.length > 0 ? (
        <ImageGrid>
          {images.map((img) => (
            <ImageCard key={img.id}>
              <DisplayImage src={img.url} alt="Uploaded Asset" />
              <ImageInfo><strong>URL:</strong> {img.url}</ImageInfo>
              <ImageInfo><strong>Uploaded:</strong> {img.createdAt ? new Date(img.createdAt).toLocaleString() : 'N/A'}</ImageInfo>
              <DeleteButton onClick={() => handleDelete(img.id, img.url)}>Delete</DeleteButton>
            </ImageCard>
          ))}
        </ImageGrid>
      ) : (
        <NoImagesMessage>No images found in the database. Upload one above!</NoImagesMessage>
      )}
    </PageContainer>
  );
};

export default GalleryImageManager;