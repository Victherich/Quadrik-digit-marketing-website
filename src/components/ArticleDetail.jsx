// import React, { useEffect } from 'react'; // Import useEffect
// import styled, { keyframes } from 'styled-components';
// import { FaAngleLeft } from 'react-icons/fa';
// import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
// import { qdmBlogArticles } from './QDM_Blog'; // Import the articles data
// import { useSelector } from 'react-redux';

// // Animation (reusing fadeIn)
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const ArticleDetailContainer = styled.div`
//   animation: ${fadeIn} 0.8s ease-out;
//   padding: 3rem 2rem;
//   max-width: 900px;
//   margin: 0 auto;
//   background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
//   color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#1e293b')};
//   min-height: calc(100vh - 6rem); /* Adjust for padding and ensure full height */
// `;

// const BackButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   background: none;
//   border: none;
//   color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
//   font-size: 1.1rem;
//   cursor: pointer;
//   margin-bottom: 2rem;
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   }

//   svg {
//     font-size: 1.3rem;
//   }
// `;

// const ArticleImage = styled.img`
//   width: 100%;
//   max-height: 400px;
//   object-fit: cover;
//   border-radius: 12px;
//   margin-bottom: 2rem;
//   box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
// `;

// const ArticleTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   margin-bottom: 1.5rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
//   @media (max-width: 480px) {
//     font-size: 1.8rem;
//   }
// `;

// const ArticleMeta = styled.div`
//   font-size: 0.95rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#94a3b8' : '#64748b')};
//   margin-bottom: 2rem;
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;

//   span {
//       display: inline-block;
//       padding: 0.3rem 0.7rem;
//       background-color: ${({ theme }) => (theme === 'dark' ? '#334155' : '#e0f2f7')};
//       color: ${({ theme }) => (theme === 'dark' ? '#94a3b8' : '#007bb6')};
//       border-radius: 6px;
//       font-weight: 600;
//   }
// `;

// const ArticleContent = styled.div`
//   font-size: 1.1rem;
//   line-height: 1.8;

//   p {
//     margin-bottom: 1.5rem;
//     color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
//   }

//   /* Note: Removed h2/h3 and ul/li styles as content is now a single paragraph */
//   /* If you decide to add more complex content, you can reintroduce them. */

//   b, strong {
//       color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e293b')};
//   }
// `;

// const ArticleDetail = () => { // theme is passed as a prop from AppRouter
// const theme = useSelector((state) => state.theme);

//   const { articleId } = useParams(); // Get articleId from URL parameters
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   // Find the article based on the ID from the URL
//   const article = qdmBlogArticles.find(art => art.id === articleId);

//   useEffect(() => {
//     // Scroll to top when component mounts (or when articleId changes)
//     window.scrollTo(0, 0);
//   }, [articleId]);

//   if (!article) {
//     // Handle case where article is not found (e.g., 404 page or redirect)
//     return (
//       <ArticleDetailContainer theme={theme === true ? 'light' : 'dark'}>
//         <BackButton onClick={() => navigate('/blog')} theme={theme === true ? 'light' : 'dark'}>
//           <FaAngleLeft /> Back to Articles
//         </BackButton>
//         <ArticleTitle theme={theme === true ? 'light' : 'dark'}>Article Not Found</ArticleTitle>
//         <ArticleContent theme={theme === true ? 'light' : 'dark'}>
//           <p>The article you are looking for does not exist or has been moved.</p>
//         </ArticleContent>
//       </ArticleDetailContainer>
//     );
//   }

//   // A simple way to get a "read time"
//   const wordCount = article.fullContent.split(/\s+/).length;
//   const readingTime = Math.ceil(wordCount / 200); // Average reading speed is 200 words per minute

//   return (
//     <ArticleDetailContainer theme={theme}>
//       <BackButton onClick={() => navigate('/blog')} theme={theme}>
//         <FaAngleLeft /> Back to Articles
//       </BackButton>

//       {/* {article.imageUrl && <ArticleImage src={article.imageUrl} alt={article.title} />} */}

//       <ArticleTitle theme={theme}>{article.title}</ArticleTitle>
//       <ArticleMeta theme={theme}>
//         <span>{article.category}</span>
//         <span>{readingTime} min read</span>
//       </ArticleMeta>
//       <ArticleContent theme={theme} dangerouslySetInnerHTML={{ __html: article.fullContent }} />
//     </ArticleDetailContainer>
//   );
// };

// export default ArticleDetail;

// import React, { useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaAngleLeft } from 'react-icons/fa';
// import { useParams, useNavigate } from 'react-router-dom';
// import { qdmBlogArticles } from './QDM_Blog';
// import { useSelector } from 'react-redux'; // Keep this import

// // Animation (reusing fadeIn)
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const ArticleDetailContainer = styled.div`
//   animation: ${fadeIn} 0.8s ease-out;
//   padding: 3rem 2rem;
//   width: 100%;
//   padding-top:100px;
//   margin: 0 auto;
//   background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
//   color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#1e293b')};
//   min-height: calc(100vh - 6rem); /* Adjust for padding and ensure full height */
// `;

// const BackButton = styled.p`
// //   display: inline-flex;
// //   align-items: center;
//   gap: 0.5rem;
//   background: none;
//   border: none;
//   color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
//   font-size: 1.1rem;
//   cursor: pointer;
//   margin-bottom: 0 auto;
//   text-align:center;
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   }

//   svg {
//     font-size: 1.3rem;
//   }
// `;

// const ArticleImage = styled.img`
//   width: 100%;
//   max-height: 400px;
//   object-fit: cover;
//   border-radius: 12px;
//   margin-bottom: 2rem;
//   box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
// `;

// const ArticleTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   margin-bottom: 1.5rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#7611D1')};

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
//   @media (max-width: 480px) {
//     font-size: 1.8rem;
//   }
// `;

// const ArticleMeta = styled.div`
//   font-size: 0.95rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#94a3b8' : '#64748b')};
//   margin-bottom: 2rem;
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;

//   span {
//       display: inline-block;
//       padding: 0.3rem 0.7rem;
//       background-color: ${({ theme }) => (theme === 'dark' ? '#334155' : '#e0f2f7')};
//       color: ${({ theme }) => (theme === 'dark' ? '#94a3b8' : '#007bb6')};
//       border-radius: 6px;
//       font-weight: 600;
//   }
// `;

// const ArticleContent = styled.div`
//   font-size: 1.1rem;
//   line-height: 1.8;

//   p {
//     margin-bottom: 1.5rem;
//     color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
//   }

//   b, strong {
//       color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e293b')};
//   }
// `;

// const ArticleDetail = () => {
//   const isLightMode = useSelector((state) => state.theme); // isLightMode will be true or false
//   const themeMode = isLightMode ? 'light' : 'dark'; // Convert boolean to string

//   const { articleId } = useParams();
//   const navigate = useNavigate();

//   const article = qdmBlogArticles.find(art => art.id === articleId);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [articleId]);

//   if (!article) {
//     return (
//       <ArticleDetailContainer theme={themeMode}> {/* Pass themeMode */}
//         <BackButton onClick={() => navigate('/blogs')} theme={themeMode}> {/* Pass themeMode */}
//           <FaAngleLeft /> Back to Articles
//         </BackButton>
//         <ArticleTitle theme={themeMode}>Article Not Found</ArticleTitle> {/* Pass themeMode */}
//         <ArticleContent theme={themeMode}> {/* Pass themeMode */}
//           <p>The article you are looking for does not exist or has been moved.</p>
//         </ArticleContent>
//       </ArticleDetailContainer>
//     );
//   }

//   const wordCount = article.fullContent.split(/\s+/).length;
//   const readingTime = Math.ceil(wordCount / 200);

//   return (
//     <ArticleDetailContainer theme={themeMode}> {/* Pass themeMode */}
    

//       {/* {article.imageUrl && <ArticleImage src={article.imageUrl} alt={article.title} />} */}

//       <ArticleTitle theme={themeMode}>{article.title}</ArticleTitle> {/* Pass themeMode */}
//       <ArticleMeta theme={themeMode}> {/* Pass themeMode */}
//         <span>{article.category}</span>
//         <span>{readingTime} min read</span>
//       </ArticleMeta>
//       <ArticleContent theme={themeMode} dangerouslySetInnerHTML={{ __html: article.fullContent }} /> {/* Pass themeMode */}
//       <BackButton onClick={() => navigate('/blogs')} theme={themeMode}> {/* Pass themeMode */}
//         <FaAngleLeft /> Back to Articles
//       </BackButton>
    
//     </ArticleDetailContainer>
//   );
// };

// export default ArticleDetail;



import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Firebase imports
import { db } from '../firebaseConfig'; // Ensure this path is correct
import { doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'; // For loading and error notifications


// Animation (reusing fadeIn)
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ArticleDetailContainer = styled.div`
  animation: ${fadeIn} 0.8s ease-out;
  padding: 3rem 2rem;
  width: 100%;
 
  padding-top: 100px;
  margin: 0 auto;
  background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
  color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#1e293b')};
  min-height: calc(100vh - 6rem); /* Adjust for padding and ensure full height */

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 80px;
  }
`;

const BackButton = styled.button` /* Changed to button for semantic correctness */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 2rem; /* Add some space below the button */
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  }

  svg {
    font-size: 1.3rem;
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  background-color: #e0e0e0; /* Placeholder background */
`;

const ArticleTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#7611D1')};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ArticleMeta = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => (theme === 'dark' ? '#94a3b8' : '#64748b')};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  /* No longer showing category as it's not in Firestore by default.
     If you add 'category' to your Firestore blog documents, uncomment and adapt this. */
  /* span {
      display: inline-block;
      padding: 0.3rem 0.7rem;
      background-color: ${({ theme }) => (theme === 'dark' ? '#334155' : '#e0f2f7')};
      color: ${({ theme }) => (theme === 'dark' ? '#94a3b8' : '#007bb6')};
      border-radius: 6px;
      font-weight: 600;
  } */
`;

const ArticleContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
  }

  b, strong {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e293b')};
  }
`;

const ArticleDetail = () => {
  const isLightMode = useSelector((state) => state.theme);
  const themeMode = isLightMode ? 'light' : 'dark';

  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when articleId changes
    const fetchArticle = async () => {
      setLoading(true);
      Swal.fire({
        title: 'Loading Article...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        const docRef = doc(db, 'blogs', articleId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() });
          Swal.close();
        } else {
          Swal.fire('Not Found', 'The requested article does not exist.', 'error');
          setArticle(null);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        Swal.fire('Error', 'Failed to load article. Please try again later.', 'error');
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]); // Re-fetch whenever articleId changes

  if (loading) {
    return (
      <ArticleDetailContainer theme={themeMode}>
        {/* SweetAlert handles loading, but can have a fallback here */}
        <p style={{ textAlign: 'center', color: themeMode === 'dark' ? '#cbd5e1' : '#475569' }}>Loading...</p>
      </ArticleDetailContainer>
    );
  }

  if (!article) {
    return (
      <ArticleDetailContainer theme={themeMode}>
        <BackButton onClick={() => navigate('/blogs')} theme={themeMode}>
          <FaAngleLeft /> Back to Articles
        </BackButton>
        <ArticleTitle theme={themeMode}>Article Not Found</ArticleTitle>
        <ArticleContent theme={themeMode}>
          <p>The article you are looking for does not exist or has been moved.</p>
        </ArticleContent>
      </ArticleDetailContainer>
    );
  }

  // Calculate reading time based on mainArticle content
  const wordCount = article.mainArticle?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed 200 words per minute

  return (
    <ArticleDetailContainer theme={themeMode}>
      <BackButton onClick={() => navigate('/blogs')} theme={themeMode}>
        <FaAngleLeft /> Back to Articles
      </BackButton>

      {article.imageUrl && <ArticleImage src={article.imageUrl} alt={article.title || 'Blog Post'} />}

      <ArticleTitle theme={themeMode}>{article.title || 'Untitled Article'}</ArticleTitle>
      <ArticleMeta theme={themeMode}>
        {/* If you add 'category' to your Firestore blog documents, you can uncomment this */}
        {/* {article.category && <span>{article.category}</span>} */}
        <span>{readingTime} min read</span>
      </ArticleMeta>
      <ArticleContent theme={themeMode} dangerouslySetInnerHTML={{ __html: article.mainArticle || '<p>No content available for this article.</p>' }} />
      
      <BackButton onClick={() => navigate('/blogs')} theme={themeMode} style={{ marginTop: '3rem' }}>
        <FaAngleLeft /> Back to Articles
      </BackButton>
    </ArticleDetailContainer>
  );
};

export default ArticleDetail;