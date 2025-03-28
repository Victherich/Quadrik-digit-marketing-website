



// import React, { useState, useEffect, useContext, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaNewspaper, FaArrowRight } from 'react-icons/fa';
// import { Context } from './Context'; // Assuming you have a theme context
// import car1 from '../Images/car1.jpeg';
// import car2 from '../Images/car2.jpeg';
// import car3 from '../Images/car3.jpeg';
// import Hero4 from './Hero4';
// import { useSelector } from 'react-redux';

// // Define animations
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slide = keyframes`
//   from {
//     transform: translateX(100%);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// `;

// // Styled components
// const Container = styled.div`
//   background: ${({ theme }) =>
//     theme === 'dark'
//       ? 'linear-gradient(90deg, #0f172a, #1e293b)'
//       : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   font-family: Arial, sans-serif;
// `;

// const HeroSection = styled.div`
//   width: 100%;
//   height: 300px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#e2e8f0')};
// `;

// const SlidingImages = styled.div`
//   display: flex;
//   position: absolute;
//   width: 300%;
//   animation: ${slide} 20s linear infinite;
// `;

// const CarImage = styled.img`
//   width: 100%;
//   max-height: 300px;
//   object-fit: cover;
// `;

// const ContentSection = styled.div`
//   padding: 2rem;
// `;

// const Section = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content:center;

//   gap: 2rem;
//   margin-bottom: 2rem;
//   width:100%;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items:center;
//   }
// `;

// const Article = styled.div`
//   flex: 1;
//   min-width: 280px;
//   max-width: 600px;
//   width:100%;
//   background: rgba(255, 255, 255, 0.1);
//   border-radius: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   padding: 1.5rem;
//   animation: ${fadeIn} 1s ease;

//   &:hover {
//     transform: translateY(-5px);
//     transition: transform 0.3s ease;
//   }

//   @media (max-width:320px){
//     min-width:260px;
//   }



// `;

// const IconWrapper = styled.div`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #fbbf24;
// `;

// const ArticleTitle = styled.h2`
//   font-size: 1.1rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#f4f4f4' : '#1e293b')};
// `;

// const ArticleText = styled.p`
//   font-size: 0.9rem;
//   line-height: 1.5;
//   font-style: italic;
// `;

// const Button = styled.a`
//   display: inline-block;
//   margin-top: 1rem;
//   padding: 0.8rem 1.5rem;
//   font-size: 1rem;
//   font-weight: bold;
//   color: #ffffff;
//   background: #fbbf24;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   text-decoration: none;
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     background: #eab308;
//   }

//   svg {
//     margin-left: 0.5rem;
//   }
// `;

// const AutoTrendingNews = () => {
//   // const { theme } = useContext(Context); // Access theme context
// const theme = useSelector((state)=>state.theme)

// const fallbackArticles = [
//   {
//     title: 'Electric Cars: Revolutionizing the Auto Industry',
//     description:
//       'Electric vehicles are becoming mainstream, with major automakers investing heavily in EV technology.',
//     url: 'https://example.com/electric-cars',
//   },
//   {
//     title: 'AI in Automotive: The Future of Self-Driving Cars',
//     description:
//       'Artificial intelligence is powering autonomous vehicles, promising safer and more efficient transportation.',
//     url: 'https://example.com/ai-autonomous-cars',
//   },
//   {
//     title: 'The Rise of Hybrid Vehicles in 2025',
//     description:
//       'Hybrid cars offer the perfect balance of fuel efficiency and reduced emissions, gaining popularity worldwide.',
//     url: 'https://example.com/hybrid-vehicles',
//   },
//   {
//     title: 'Top 10 Innovations in Car Technology for 2025',
//     description:
//       'From advanced safety features to connected car ecosystems, here are the top innovations to watch.',
//     url: 'https://example.com/car-tech-innovations',
//   },
// ];






//   const [newsArticles, setNewsArticles] = useState(fallbackArticles);
//   const observer = useRef(null);

//   useEffect(() => {
//     // Fetch Google News or any other news API (Example with NewsAPI)
//     const fetchNews = async () => {
//       const apiKey = '6391618f1cbe4c9488ea70a4b5973ba3'; // Replace with your actual API Key
//       const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setNewsArticles(data.articles); // Set the fetched articles
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, []);

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const element = entry.target;

//           if (element.tagName === 'H2') {
//             element.classList.add(
//               'animate__animated',
//               'animate__rollIn',
//               'animate__slower'
//             );
//           } else if (element.tagName === 'P') {
//             element.classList.add(
//               'animate__animated',
//               'animate__rollIn',
//               'animate__slower'
//             );
//           }

//           // Stop observing the element after animation is triggered
//           observer.current.unobserve(element);
//         }
//       });
//     };

//     observer.current = new IntersectionObserver(handleIntersection, {
//       threshold: 0.3, // Trigger when 30% of the element is visible
//     });

//     const headings = document.querySelectorAll('h2');
//     const paragraphs = document.querySelectorAll('p');

//     headings.forEach((heading) => observer.current.observe(heading));
//     paragraphs.forEach((paragraph) => observer.current.observe(paragraph));

//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, []);

//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       {/* Hero Section */}
//       <Hero4 />

//       {/* News Content */}
//       <ContentSection>
//         <Section>
          
//           {  newsArticles?.slice(0, 4).map((article, index) => (
//               <Article key={index}>
//                 <IconWrapper>
//                   <FaNewspaper />
//                 </IconWrapper>
//                 <ArticleTitle theme={theme === true ? 'light' : 'dark'}>
//                   {article.title}
//                 </ArticleTitle>
//                 <ArticleText>{article.description}</ArticleText>
//                 <Button href={article.url} target="_blank">
//                   Read More <FaArrowRight />
//                 </Button>
//               </Article>
//             ))
//           }
//         </Section>
//       </ContentSection>
//     </Container>
//   );
// };

// export default AutoTrendingNews;





import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaNewspaper, FaArrowRight } from 'react-icons/fa';
import Hero4 from './Hero4';
import { useSelector } from 'react-redux';
import Hero5 from './Hero5';

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slide = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Styled components
const Container = styled.div`
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(90deg, #0f172a, #1e293b)'
      : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  font-family: Arial, sans-serif;
`;

const ContentSection = styled.div`
  padding: 2rem;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Article = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  animation: ${fadeIn} 1s ease;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }

  @media (max-width: 320px) {
    min-width: 260px;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fbbf24;
`;

const ArticleTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#f4f4f4' : '#1e293b')};
`;

const ArticleText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  font-style: italic;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background: #fbbf24;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #eab308;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const AutoTrendingNews = () => {
  const theme = useSelector((state) => state.theme);

  // Fallback articles in case API fails
  const fallbackArticles = [
    {
      title: 'Electric Cars: Revolutionizing the Auto Industry',
      description:
        'Electric vehicles are becoming mainstream, with major automakers investing heavily in EV technology.',
      url: 'https://example.com/electric-cars',
    },
    {
      title: 'AI in Automotive: The Future of Self-Driving Cars',
      description:
        'Artificial intelligence is powering autonomous vehicles, promising safer and more efficient transportation.',
      url: 'https://example.com/ai-autonomous-cars',
    },
    {
      title: 'The Rise of Hybrid Vehicles in 2025',
      description:
        'Hybrid cars offer the perfect balance of fuel efficiency and reduced emissions, gaining popularity worldwide.',
      url: 'https://example.com/hybrid-vehicles',
    },
    {
      title: 'Top 10 Innovations in Car Technology for 2025',
      description:
        'From advanced safety features to connected car ecosystems, here are the top innovations to watch.',
      url: 'https://example.com/car-tech-innovations',
    },
  ];

  const [newsArticles, setNewsArticles] = useState(fallbackArticles);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const apiKey = '6391618f1cbe4c9488ea70a4b5973ba3'; // Replace with your actual API Key
  //     const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) throw new Error('Failed to fetch news articles');
  //       const data = await response.json();

  //       if (data?.articles?.length > 0) {
  //         setNewsArticles(data.articles);
  //       } else {
  //         setNewsArticles(fallbackArticles);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching news:', error);
  //       setNewsArticles(fallbackArticles);
  //     }
  //   };

  //   fetchNews();
  // }, []);



  useEffect(() => {
    const fetchNews = async () => {
        const url = `https://www.reddit.com/r/technology/top.json?limit=10`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch news articles from Reddit');
            const data = await response.json();

            // Extract relevant fields (e.g., title, url, thumbnail, etc.)
            const articles = data.data.children.map((post) => ({
                title: post.data.title,
                url: post.data.url,
                thumbnail: post.data.thumbnail !== 'self' ? post.data.thumbnail : null, // Use only valid thumbnails
                score: post.data.score,
                subreddit: post.data.subreddit,
            }));

            if (articles.length > 0) {
                setNewsArticles(articles);
            } else {
                setNewsArticles(fallbackArticles); // Handle case with no articles
            }
        } catch (error) {
            console.error('Error fetching news from Reddit:', error);
            setNewsArticles(fallbackArticles);
        }
    };

    fetchNews();
}, []);


  return (
    <Container theme={theme === true ? 'light' : 'dark'}>
      {/* Hero Section */}
      <Hero5/>

      {/* News Content */}
      <ContentSection>
        <Section>
          {newsArticles.slice(0, 4).map((article, index) => (
            <Article key={index}>
              <IconWrapper>
                <FaNewspaper />
              </IconWrapper>
              <ArticleTitle theme={theme === true ? 'light' : 'dark'}>
                {article.title}
              </ArticleTitle>
              <ArticleText>{article.description}</ArticleText>
              <Button href={article.url} target="_blank">
                Read More <FaArrowRight />
              </Button>
            </Article>
          ))}
        </Section>
      </ContentSection>
    </Container>
  );
};

export default AutoTrendingNews;
