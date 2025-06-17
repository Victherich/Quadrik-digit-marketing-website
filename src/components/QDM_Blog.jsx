


// import React, { useState, useEffect, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaNewspaper, FaArrowRight } from 'react-icons/fa';
// import Hero4 from './Hero4';
// import { useSelector } from 'react-redux';
// import Hero5 from './Hero5';

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

// const ContentSection = styled.div`
//   padding: 2rem;
// `;

// const Section = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 2rem;
//   margin-bottom: 2rem;
//   width: 100%;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const Article = styled.div`
//   flex: 1;
//   min-width: 280px;
//   max-width: 600px;
//   width: 100%;
//   background: rgba(255, 255, 255, 0.1);
//   border-radius: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   padding: 1.5rem;
//   animation: ${fadeIn} 1s ease;

//   &:hover {
//     transform: translateY(-5px);
//     transition: transform 0.3s ease;
//   }

//   @media (max-width: 320px) {
//     min-width: 260px;
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
//   const theme = useSelector((state) => state.theme);

//   // Fallback articles in case API fails
//   const fallbackArticles = [
//     {
//       title: 'Electric Cars: Revolutionizing the Auto Industry',
//       description:
//         'Electric vehicles are becoming mainstream, with major automakers investing heavily in EV technology.',
//       url: 'https://example.com/electric-cars',
//     },
//     {
//       title: 'AI in Automotive: The Future of Self-Driving Cars',
//       description:
//         'Artificial intelligence is powering autonomous vehicles, promising safer and more efficient transportation.',
//       url: 'https://example.com/ai-autonomous-cars',
//     },
//     {
//       title: 'The Rise of Hybrid Vehicles in 2025',
//       description:
//         'Hybrid cars offer the perfect balance of fuel efficiency and reduced emissions, gaining popularity worldwide.',
//       url: 'https://example.com/hybrid-vehicles',
//     },
//     {
//       title: 'Top 10 Innovations in Car Technology for 2025',
//       description:
//         'From advanced safety features to connected car ecosystems, here are the top innovations to watch.',
//       url: 'https://example.com/car-tech-innovations',
//     },
//   ];

//   const [newsArticles, setNewsArticles] = useState(fallbackArticles);



//   useEffect(() => {
//     const fetchNews = async () => {
//         const url = `https://www.reddit.com/r/technology/top.json?limit=10`;

//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error('Failed to fetch news articles from Reddit');
//             const data = await response.json();

//             // Extract relevant fields (e.g., title, url, thumbnail, etc.)
//             const articles = data.data.children.map((post) => ({
//                 title: post.data.title,
//                 url: post.data.url,
//                 thumbnail: post.data.thumbnail !== 'self' ? post.data.thumbnail : null, // Use only valid thumbnails
//                 score: post.data.score,
//                 subreddit: post.data.subreddit,
//             }));

//             if (articles.length > 0) {
//                 setNewsArticles(articles);
//             } else {
//                 setNewsArticles(fallbackArticles); // Handle case with no articles
//             }
//         } catch (error) {
//             console.error('Error fetching news from Reddit:', error);
//             setNewsArticles(fallbackArticles);
//         }
//     };

//     fetchNews();
// }, []);


//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       {/* Hero Section */}
//       <Hero5/>

//       {/* News Content */}
//       <ContentSection>
//         <Section>
//           {newsArticles.slice(0, 4).map((article, index) => (
//             <Article key={index}>
//               <IconWrapper>
//                 <FaNewspaper />
//               </IconWrapper>
//               <ArticleTitle theme={theme === true ? 'light' : 'dark'}>
//                 {article.title}
//               </ArticleTitle>
//               <ArticleText>{article.description}</ArticleText>
//               <Button href={article.url} target="_blank">
//                 Read More <FaArrowRight />
//               </Button>
//             </Article>
//           ))}
//         </Section>
//       </ContentSection>
//     </Container>
//   );
// };

// export default AutoTrendingNews;

// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaBullhorn, FaLightbulb, FaLaptopCode, FaCameraRetro, FaArrowRight } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// import blogbg from '../Images4/blogbg.jpg'

// // --- Article Data (Updated fullContent to be a single paragraph) ---
// const qdmBlogArticles = [
//   {
//     id: 'trends-2025',
//     icon: <FaBullhorn />,
//     category: "Digital Marketing",
//     title: "5 Essential Digital Marketing Trends for 2025",
//     excerpt: "Stay ahead of the curve! Discover the top digital marketing trends shaping 2025, from AI-powered personalization to interactive content strategies.",
//     imageUrl: "https://images.unsplash.com/photo-1542744173-0450cd32431b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     fullContent: `<p>The digital marketing landscape is in constant flux, with 2025 bringing pivotal changes that demand attention for sustained business growth. Hyper-personalization, driven by advanced AI, will deliver highly tailored content and ad experiences, boosting conversions. Conversational marketing through sophisticated chatbots will enable real-time engagement and sales directly within messaging platforms. Immersive and interactive content, like AR filters and 360-degree videos, will create memorable user journeys, moving beyond static formats. Data privacy and ethical data usage are becoming core brand pillars, fostering trust amidst increasing regulations and consumer awareness. Finally, marketing efforts highlighting sustainability and ethical practices will resonate deeply with conscious consumers, building loyalty beyond product features. Integrating these key trends is crucial for businesses aiming to lead and adapt effectively in the future digital economy.</p>`,
//   },
//   {
//     id: 'brand-identity-uae',
//     icon: <FaLightbulb />,
//     category: "Branding",
//     title: "Crafting an Unforgettable Brand Identity in the UAE",
//     excerpt: "Your brand is more than just a logo. Learn how to build a compelling brand identity that resonates with your target audience in the competitive UAE market.",
//     imageUrl: "https://images.unsplash.com/photo-1563729792439-d375d50694e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     fullContent: `<p>In the vibrant and highly competitive market of the UAE, establishing a powerful brand identity is no longer merely an advantage but a fundamental requirement for success. A well-defined brand identity encompasses all visual and verbal elements, from your logo and color schemes to typography and messaging, collectively communicating your brand's unique personality, core values, and ultimate purpose. Key considerations for the UAE market include cultural sensitivity and local relevance, ensuring your brand resonates authentically while maintaining global appeal. Uniqueness and clear differentiation are paramount to stand out amidst fierce competition, effectively showcasing why customers should choose you. Consistent application of your brand across all touchpoints – digital and physical – is vital for a cohesive customer experience. Furthermore, an impactful brand identity must forge an emotional connection with its audience, building trust and fostering a sense of belonging. Finally, a polished and professional identity inherently signals quality and reliability, creating a strong first impression in a market that values excellence.</p>`,
//   },
//   {
//     id: 'high-converting-landing-page',
//     icon: <FaLaptopCode />,
//     category: "Web Development",
//     title: "The Power of a High-Converting Landing Page",
//     excerpt: "Is your website working for you? Understand why a well-designed landing page is crucial for converting visitors into valuable leads and customers.",
//     imageUrl: "https://images.unsplash.com/photo-1581373504381-1250269f8c05?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     fullContent: `<p>In the dynamic realm of digital marketing, a landing page transcends a mere web page; it functions as a highly specialized instrument meticulously crafted for one singular objective: conversion. A meticulously designed, high-converting landing page possesses the remarkable capacity to transform casual website visitors into valuable leads, eager subscribers, or dedicated customers, representing a direct pipeline to business growth. Such a page is distinguished by a clear and compelling headline that instantly communicates its unique selling proposition, coupled with a laser-focused value proposition that articulates benefits in user-centric language. A prominent, action-oriented Call to Action (CTA) guides the user to the next step, while engaging visuals enhance appeal and trust. Crucially, the inclusion of trust signals like testimonials and client logos builds credibility, and the deliberate minimization of distractions ensures the user remains focused on the primary conversion goal. Ultimately, a strategically optimized landing page is an indispensable asset for any business aiming to maximize its online presence and achieve tangible results from its traffic.</p>`,
//   },
//   {
//     id: 'short-form-video',
//     icon: <FaCameraRetro />,
//     category: "Content Creation",
//     title: "Mastering Short-Form Video for Social Media Success",
//     excerpt: "From TikTok to Instagram Reels, short-form video is king. Uncover strategies to create engaging video content that captures attention and drives engagement.",
//     imageUrl: "https://images.unsplash.com/photo-1616465492984-ff5345c85303?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     fullContent: `<p>The undeniable ascendancy of platforms like TikTok, alongside the widespread adoption of Instagram Reels and YouTube Shorts, has firmly established short-form video as a dominant force in contemporary social media marketing. Its inherently fast-paced and highly engaging nature perfectly aligns with modern attention spans, making it an incredibly effective tool for brands. This format offers high engagement, with concise, dynamic videos quickly grabbing attention and encouraging shares due to their algorithmic preference on platforms. It's also remarkably versatile, serving purposes from rapid product demonstrations and behind-the-scenes glimpses to quick tips and entertaining challenges. To master short-form video, it's vital to hook viewers within the first 3-5 seconds using compelling visuals or surprising facts, maintain conciseness by delivering messages efficiently, wisely embrace and adapt trending sounds or formats to your brand's voice, and utilize text overlays for accessibility and clarity. A strong, implicit or explicit, call to action is crucial, and despite the emphasis on spontaneity, high-quality production ensures your visuals are crisp and appealing, ultimately driving engagement and aligning with broader brand strategies.</p>`,
//   },
//   {
//     id: 'demystifying-seo',
//     icon: <FaBullhorn />,
//     category: "SEO",
//     title: "Demystifying SEO: Your Guide to Ranking Higher on Google",
//     excerpt: "Feeling lost in SEO jargon? This article breaks down the essentials of Search Engine Optimization to help your website climb the Google ranks.",
//     imageUrl: "https://images.unsplash.com/photo-1557426172-a0b41e3a6c90?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     fullContent: `<p>Search Engine Optimization (SEO) may appear intricate, but fundamentally, it is the strategic process of enhancing your website's visibility to individuals actively seeking your products or services online. Achieving higher rankings in Search Engine Results Pages (SERPs), such as Google, directly correlates with an increased likelihood of prospective customers discovering your business, thereby attracting highly qualified leads who are already demonstrating intent. The bedrock of effective SEO lies in meticulous keyword research, identifying the precise terms your target audience utilizes in their online searches, often aided by specialized tools to pinpoint high-volume and relevant phrases. On-Page SEO involves optimizing elements directly on your site, including integrating keywords into titles, headings, and content, ensuring mobile-friendliness, and providing an optimal user experience. Conversely, Off-Page SEO encompasses external activities like strategic link building, where reputable external websites link back to yours, signaling authority to search engines. Technical SEO ensures search engine crawlers can efficiently access, index, and understand your site, involving aspects like site speed and structured data. Crucially, Google prioritizes high-quality, relevant content that genuinely addresses user queries, making consistent creation of informative blog posts and guides indispensable. While a long-term endeavor, SEO's rewards in terms of organic traffic and business growth are substantial, making it an essential component of any robust digital marketing strategy.</p>`,
//   },
//   {
//     id: 'building-community',
//     icon: <FaLightbulb />,
//     category: "Social Media",
//     title: "Building Community: Beyond Just Likes and Followers",
//     excerpt: "Learn how to foster genuine connections and build a loyal online community for your brand, turning followers into advocates.",
//     imageUrl: "https://images.unsplash.com/photo-1618683528246-8809e6c4e09f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     fullContent: `<p>In the contemporary social media landscape, merely accumulating likes and followers represents an initial, foundational step; the true measure of success lies in cultivating a deeply engaged and fiercely loyal community around your brand. A robust brand community effectively transforms passive consumers into active, vocal advocates, providing invaluable long-term benefits. This deep-seated loyalty translates into higher customer retention, as community members develop a profound sense of belonging. Furthermore, a thriving community serves as an authentic and invaluable source of immediate feedback and insights, empowering continuous improvement of products and services. Crucially, engaged community members become organic promoters, readily sharing your content and significantly extending your brand's reach without additional marketing expenditure. Ultimately, these loyal individuals evolve into powerful brand advocates, passionately championing your offerings and influencing others. Strategies for fostering such a vibrant online community include active listening to audience sentiments, consistently facilitating two-way conversations rather than one-way broadcasting, providing exclusive value to make members feel privileged, creating dedicated safe spaces for interaction, maintaining an authentic and human brand presence, and consistently celebrating community contributions to reinforce their integral role in your brand's narrative. While community building demands sustained effort, the resultant long-term benefits in terms of brand growth and resilience are immeasurable.</p>`,
//   },
// ];
// // --- End Article Data ---

// // Define animations (keeping these as they are good)
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Styled components (Minor adjustments for blog context)
// const Container = styled.div`
//   background: ${({ theme }) =>
//     theme === 'dark'
//       ? 'linear-gradient(90deg, #0f172a, #1e293b)'
//       : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   font-family: 'Arial', sans-serif;
//   padding-bottom: 3rem;
//   min-height: 100vh;
// `;

// const BlogHeroSection = styled.div`
//   padding: 4rem 2rem;
//   text-align: center;
//   background-image: ${({ theme }) =>
//     theme === 'dark'
//       ? `linear-gradient(180deg, rgba(30, 41, 59, 0.0), rgba(15, 23, 42, 0.95)), url(${blogbg})`
//       : `linear-gradient(180deg, rgba(248, 250, 252, 0.0), rgba(226, 232, 240, 0.95)), url(${blogbg})`};
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   border-bottom: 1px solid ${({ theme }) => (theme === 'dark' ? '#334155' : '#cbd5e1')};
// `;


// const BlogHeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'white')};
//   margin-bottom: 1rem;
//   animation: ${fadeIn} 1s ease;
//   padding: 100px 10px;

//   text-shadow: ${({ theme }) =>
//     theme === 'dark'
//       ? '2px 2px 8px rgba(0, 0, 0, 0.9)'
//       : '2px 2px 8px rgba(150, 150, 150, 0.9)'};

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 2rem;
//   }
// `;


// const BlogHeroSubtitle = styled.p`
//   font-size: 1.5rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
//   animation: ${fadeIn} 1.2s ease;

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
// `;

// const BlogContentSection = styled.div`
//   padding: 3rem 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const ArticlesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2.5rem;
//   justify-content: center;
//   width: 100%;
// `;

// const BlogArticleCard = styled.div`
//   background: ${({ theme }) => (theme === 'dark' ? '#1f2937' : '#ffffff')};
//   border-radius: 12px;
//   box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
//   padding: 2rem;
//   animation: ${fadeIn} 1s ease;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.25);
//   }

//   @media (max-width: 480px) {
//     padding: 1.5rem;
//   }
// `;

// const ArticleIconWrapper = styled.div`
//   font-size: 2.5rem;
//   margin-bottom: 1.2rem;
//   color: #7611D1;
//   text-align: center;
// `;

// const ArticleCategory = styled.span`
//   display: inline-block;
//   background-color: ${({ theme }) => (theme === 'dark' ? '#334155' : '#e0f2f7')};
//   color: ${({ theme }) => (theme === 'dark' ? '#94a3b8' : '#007bb6')};
//   padding: 0.4rem 0.8rem;
//   border-radius: 6px;
//   font-size: 0.85rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
// `;

// const ArticleTitle = styled.h3`
//   font-size: 1.6rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#1e293b')};
// `;

// const ArticleExcerpt = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
//   margin-bottom: 1.5rem;
//   flex-grow: 1;
// `;

// const ReadMoreLink = styled(Link)` /* Use styled(Link) */
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: auto;
//   padding: 0.9rem 1.8rem;
//   font-size: 1rem;
//   font-weight: 600;
//   color: #ffffff;
//   background: #7611D1;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   text-decoration: none;
//   transition: background 0.3s ease, transform 0.3s ease;

//   &:hover {
//     background: #eab308;
//     transform: translateY(-2px);
//   }

//   svg {
//     margin-left: 0.8rem;
//   }
// `;


// const QDM_Blog = () => {
//   const theme = useSelector((state) => state.theme);

//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       <BlogHeroSection theme={theme === true ? 'light' : 'dark'}>
//         <BlogHeroTitle theme={theme === true ? 'light' : 'dark'}>
//           QDM Insights: Your Digital Marketing Compass
//         </BlogHeroTitle>
//         <BlogHeroSubtitle theme={theme === true ? 'light' : 'dark'}>
//           Stay informed with the latest trends, strategies, and tips from the experts at Quadrik Digit Marketing.
//         </BlogHeroSubtitle>
//       </BlogHeroSection>

//       <BlogContentSection>
//         <ArticlesGrid>
//           {qdmBlogArticles.map((article) => (
//             <BlogArticleCard key={article.id} theme={theme === true ? 'light' : 'dark'}>
//               <ArticleIconWrapper>
//                 {article.icon}
//               </ArticleIconWrapper>
//               <ArticleCategory theme={theme === true ? 'light' : 'dark'}>{article.category}</ArticleCategory>
//               <ArticleTitle theme={theme === true ? 'light' : 'dark'}>
//                 {article.title}
//               </ArticleTitle>
//               <ArticleExcerpt theme={theme === true ? 'light' : 'dark'}>
//                 {article.excerpt}
//               </ArticleExcerpt>
//               {/* Use Link to navigate to the individual article page */}
//               <ReadMoreLink to={`/blog/${article.id}`}>
//                 Read More <FaArrowRight />
//               </ReadMoreLink>
//             </BlogArticleCard>
//           ))}
//         </ArticlesGrid>
//       </BlogContentSection>
//     </Container>
//   );
// };

// export { qdmBlogArticles }; // Export articles so ArticleDetail can access them
// export default QDM_Blog;







import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'; // Only FaArrowRight is needed now
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Firebase imports
import { db } from '../firebaseConfig'; // Ensure this path is correct
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Swal from 'sweetalert2'; // For loading and error notifications

import blogbg from '../Images4/blogbg.jpg'

// Define animations (keeping these as they are good)
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components (Minor adjustments for blog context)
const Container = styled.div`
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(90deg, #0f172a, #1e293b)'
      : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  font-family: 'Arial', sans-serif;
  padding-bottom: 3rem;
  min-height: 100vh;
`;

const BlogHeroSection = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-image: ${({ theme }) =>
    theme === 'dark'
      ? `linear-gradient(180deg, rgba(30, 41, 59, 0.0), rgba(15, 23, 42, 0.95)), url(${blogbg})`
      : `linear-gradient(180deg, rgba(248, 250, 252, 0.0), rgba(226, 232, 240, 0.95)), url(${blogbg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  border-bottom: 1px solid ${({ theme }) => (theme === 'dark' ? '#334155' : '#cbd5e1')};
`;


const BlogHeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'white')};
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease;
  padding: 100px 10px;

  text-shadow: ${({ theme }) =>
    theme === 'dark'
      ? '2px 2px 8px rgba(0, 0, 0, 0.9)'
      : '2px 2px 8px rgba(150, 150, 150, 0.9)'};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;


const BlogHeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
  animation: ${fadeIn} 1.2s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BlogContentSection = styled.div`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  justify-content: center;
  width: 100%;
`;

const BlogArticleCard = styled.div`
  background: ${({ theme }) => (theme === 'dark' ? '#1f2937' : '#ffffff')};
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  padding: 1.5rem; /* Reduced padding slightly for image */
  animation: ${fadeIn} 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden; /* Ensures image corners are rounded */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ArticleImage = styled.img`
  width: calc(100% + 3rem); /* Make it span full width of card */
  margin: -1.5rem -1.5rem 1.5rem -1.5rem; /* Negative margins to push it to edges */
  height: 200px; /* Fixed height for consistent look */
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #e0e0e0; /* Placeholder background */
`;

// Original ArticleIconWrapper and ArticleCategory removed as they don't map to Firestore data fields directly.
// If you want to categorize/iconify, you'd need to add those fields to your Firestore 'blogs' collection.

const ArticleTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.8rem; /* Adjusted margin */
  color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#1e293b')};
`;

const ArticleExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
  margin-bottom: 1.5rem;
  flex-grow: 1;
  /* Limit excerpt to 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 0.9rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: #7611D1;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #eab308;
    transform: translateY(-2px);
  }

  svg {
    margin-left: 0.8rem;
  }
`;

const NoBlogsMessage = styled.p`
  text-align: center;
  grid-column: 1 / -1; /* Span across all columns */
  color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#475569')};
  font-size: 1.1rem;
  padding: 2rem;
  background-color: ${({ theme }) => (theme === 'dark' ? '#1f2937' : '#ffffff')};
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;


const QDM_Blog = () => {
  const theme = useSelector((state) => state.theme);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    Swal.fire({
      title: 'Fetching Blog Posts...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc')); // Order by creation date
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        // Convert Firestore Timestamp to JS Date if necessary for client-side display
        createdAt: doc.data().createdAt?.toDate ? doc.data().createdAt.toDate() : doc.data().createdAt,
      }));
      setBlogs(data);
      Swal.close();
    } catch (error) {
      console.error('Error fetching blogs:', error);
      Swal.fire('Error', 'Failed to fetch blog posts. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Container theme={theme === true ? 'light' : 'dark'}>
      <BlogHeroSection theme={theme === true ? 'light' : 'dark'}>
        <BlogHeroTitle theme={theme === true ? 'light' : 'dark'}>
          QDM Insights: Your Digital Marketing Compass
        </BlogHeroTitle>
        <BlogHeroSubtitle theme={theme === true ? 'light' : 'dark'}>
          Stay informed with the latest trends, strategies, and tips from the experts at Quadrik Digit Marketing.
        </BlogHeroSubtitle>
      </BlogHeroSection>

      <BlogContentSection>
        {loading ? (
          // SweetAlert handles loading, but can add a fallback message here
          <NoBlogsMessage theme={theme === true ? 'light' : 'dark'}>Loading blog posts...</NoBlogsMessage>
        ) : blogs.length > 0 ? (
          <ArticlesGrid>
            {blogs.map((article) => (
              <BlogArticleCard key={article.id} theme={theme === true ? 'light' : 'dark'}>
                {article.imageUrl && ( // Conditionally render image if URL exists
                  <ArticleImage src={article.imageUrl} alt={article.title || 'Blog Post'} />
                )}
                {/* Removed ArticleIconWrapper and ArticleCategory as they are not in Firestore data */}
                <ArticleTitle theme={theme === true ? 'light' : 'dark'}>
                  {article.title || 'Untitled Blog'}
                </ArticleTitle>
                <ArticleExcerpt theme={theme === true ? 'light' : 'dark'}>
                  {article.excerpt || 'No excerpt provided.'}
                </ArticleExcerpt>
                <ReadMoreLink to={`/blog/${article.id}`}>
                  Read More <FaArrowRight />
                </ReadMoreLink>
              </BlogArticleCard>
            ))}
          </ArticlesGrid>
        ) : (
          <NoBlogsMessage theme={theme === true ? 'light' : 'dark'}>
            No blog posts published yet. Check back soon!
          </NoBlogsMessage>
        )}
      </BlogContentSection>
    </Container>
  );
};

// We no longer export qdmBlogArticles as it's not hardcoded
export default QDM_Blog;