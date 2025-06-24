
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebaseConfig'; // Ensure this path is correct
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
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
  cancelButtonBg: '#9DA6B2',
  cancelButtonHover: '#7F8C9A',
  inputBackground: '#F8FAFC',
  inputBorder: '#CBD5E1',
  inputFocusBorder: '#4A90E2',
  inputTextColor: '#333333',
  inputPlaceholder: '#9DA6B2',
};

// --- Styled Components ---

const FormCard = styled.div`
  background-color: ${adminThemeColors.cardBackground};
  border: 1px solid ${adminThemeColors.cardBorder};
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
  color: ${adminThemeColors.mainText};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: ${adminThemeColors.mainText};
  font-size: 1.05rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: ${adminThemeColors.inputBackground};
  color: ${adminThemeColors.inputTextColor};
  border: 1px solid ${adminThemeColors.inputBorder};
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    border-color: ${adminThemeColors.inputFocusBorder};
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }

  &::placeholder {
    color: ${adminThemeColors.inputPlaceholder};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background-color: ${adminThemeColors.inputBackground};
  color: ${adminThemeColors.inputTextColor};
  border: 1px solid ${adminThemeColors.inputBorder};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 250px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    border-color: ${adminThemeColors.inputFocusBorder};
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }

  &::placeholder {
    color: ${adminThemeColors.inputPlaceholder};
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
    button {
      width: 100%;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: ${adminThemeColors.accent};
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${adminThemeColors.accentHover};
  }
`;

const CancelButton = styled.button`
  background-color: ${adminThemeColors.cancelButtonBg};
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${adminThemeColors.cancelButtonHover};
  }
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px; /* Adjust as needed */
  margin-top: 1rem;
  border-radius: 8px;
  object-fit: contain; /* Ensures the whole image is visible */
  border: 1px solid ${adminThemeColors.cardBorder}; /* Optional: Add a border */
`;


// --- ServiceForm Component ---

const OfferForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    itemsInput: '', // This will hold the newline-separated string of items
    description: '',   // NEW: Field for the direct image URL
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        itemsInput: initialData.items ? initialData.items.join('\n') : '',
        description: initialData.description || '', // Set initial imageUrl
      });
    } else {
      setFormData({
        title: '',
        itemsInput: '',
        description: '', // Clear for new entry
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Saving Service...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const itemsArray = formData.itemsInput
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '');

      const serviceData = {
        title: formData.title,
        items: itemsArray,
        description: formData.description, // Save the directly entered image URL
      };

      if (initialData && initialData.id) {
        // Update existing service
        await updateDoc(doc(db, 'packages', initialData.id), {
          ...serviceData,
          updatedAt: serverTimestamp(), // Update timestamp
        });
        Swal.fire('Updated!', 'Package updated successfully.', 'success');
      } else {
        // Add new service
        await addDoc(collection(db, 'packages'), {
          ...serviceData,
          createdAt: serverTimestamp(), // Add creation timestamp
        });
        Swal.fire('Created!', 'New package added successfully.', 'success');
      }
      onSave(); // Call onSave to close form and refresh list
    } catch (error) {
      console.error('Error saving service:', error);
      Swal.fire('Error', `Failed to save service: ${error.message}`, 'error');
    }
  };

  return (
    <FormCard>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="serviceTitle">Package Title (e.g., Social Media & Digital Marketing)</Label>
          <Input
            id="serviceTitle"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the main service category title"
            required
          />
        </FormGroup>

           <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <Input
            id="description"
            type="text" // Use type="url" for better browser validation
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="description"
          />
          
 </FormGroup>
        <FormGroup style={{marginTop:"20px"}}>
          <Label htmlFor="serviceItems">Package List Items (one item per line)</Label>
          <TextArea
            id="serviceItems"
            name="itemsInput"
            value={formData.itemsInput}
            onChange={handleChange}
            placeholder={`Enter each service item on a new line, e.g.:
• Social Media Management (Facebook, Instagram, etc.)
• Facebook & Instagram Ads
• Google Ads Campaigns
• Brand Awareness Campaigns`}
            required
          />
        </FormGroup>

        {/* --- NEW IMAGE URL FIELD --- */}
     
          {/* {formData.imageUrl && ( // Display image preview if a URL is entered
            <ImagePreview src={formData.imageUrl} alt="Service Image Preview" />
          )} */}
       
        {/* --- END NEW IMAGE URL FIELD --- */}

        <FormActions>
          <CancelButton type="button" onClick={onCancel}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit">{initialData ? 'Update Service' : 'Create Service'}</SubmitButton>
        </FormActions>
      </form>
    </FormCard>
  );
};

export default OfferForm;







