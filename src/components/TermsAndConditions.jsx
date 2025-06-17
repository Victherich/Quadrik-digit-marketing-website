
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux'; // Assuming Redux is used for theme management

// Animations (keeping these consistent)
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

// --- Refined Theme Colors (Consistent with About Us page) ---
const themeColors = {
  // Dark Mode Colors
  dark: {
    backgroundGradient: 'linear-gradient(180deg, #1A202C, #2D3748)', // Soft dark gradient
    textColor: '#E2E8F0',                                         // Light gray for text
    titleColor: '#FDE910',                                      // Soft blue for titles/accents
    headingColor: '#FDE910',                                      // Soft blue for section headings
    cardBackground: '#2D3748',                                    // Slightly lighter dark for card
    cardBorder: 'rgba(255,255,255,0.1)',                          // Subtle white border
    shadow: 'rgba(0,0,0,0.4)',
  },
  // Light Mode Colors (Not too shouty)
  light: {
    backgroundGradient: 'linear-gradient(180deg, #FDFDFD, #F0F2F5)', // Very subtle light gradient
    textColor: '#4A5568',                                          // Muted dark gray for text
    titleColor: '#7611D1' ,                                         // Moderate blue for main title
    headingColor: '#7611D1' ,                                       // Moderate blue for section headings
    cardBackground: '#FFFFFF',                                     // Pure white for card
    cardBorder: '#E0E6ED',                                         // Soft light gray border
    shadow: 'rgba(0,0,0,0.15)',
  },
};

// Styled Components
const TermsContainer = styled.div`
  animation: ${fadeIn} 1s ease;
  background: ${({ themeMode }) => themeColors[themeMode].backgroundGradient};
  color: ${({ themeMode }) => themeColors[themeMode].textColor};
  padding: 100px 5px; /* Generous padding */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align content to the top */


  @media (max-width: 768px) {
    padding: 100px 5px;
    align-items: flex-start;
  }
`;

const TermsCard = styled.div`
  background: ${({ themeMode }) => themeColors[themeMode].cardBackground};
  border: 1px solid ${({ themeMode }) => themeColors[themeMode].cardBorder};
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 900px; /* Wider card for document-like feel */
  width: 100%;
  box-shadow: 0px 8px 20px ${({ themeMode }) => themeColors[themeMode].shadow};
  line-height: 1.7; /* Improved readability */

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ themeMode }) => themeColors[themeMode].titleColor};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 1.6rem;
  color: ${({ themeMode }) => themeColors[themeMode].headingColor};
  margin-top: 1.8rem;
  margin-bottom: 0.8rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  color: ${({ themeMode }) => themeColors[themeMode].textColor};
  margin-bottom: 0.8rem; /* Spacing between paragraphs */

  strong {
    font-weight: bold;
    color: ${({ themeMode }) => themeMode === 'dark' ? '#E2E8F0' : '#333333'}; /* Ensure strong text stands out */
  }
`;

const UnorderedList = styled.ul`
  list-style: disc; /* Use standard disc bullets */
  margin-left: 1.5rem;
  margin-bottom: 0.8rem;
  
  li {
    font-size: 1.05rem;
    color: ${({ themeMode }) => themeColors[themeMode].textColor};
    margin-bottom: 0.4rem; /* Spacing between list items */
  }
`;

const TermsAndConditions = () => {
  const isLightMode = useSelector((state) => state.theme); // Assuming state.theme is boolean (true for light)
  const themeMode = isLightMode ? 'light' : 'dark'; // Map boolean to 'light' or 'dark' string

  return (
    <TermsContainer themeMode={themeMode}>
      <TermsCard themeMode={themeMode}>
        <MainTitle themeMode={themeMode}>Quadrik Digit Marketing Management FZ-LLC</MainTitle>
        <MainTitle themeMode={themeMode} as="h2" style={{ fontSize: '1.8rem', marginTop: '-1.5rem' }}>Terms & Conditions</MainTitle> {/* Subtitle effect */}

        <SectionHeading themeMode={themeMode}>1. Introduction</SectionHeading>
        <Paragraph themeMode={themeMode}>
          These Terms & Conditions govern all services provided by <strong>Quadrik Digit Marketing Management FZ-LLC</strong> ('Company', 'we', 'us') to its clients ('Client', 'you') and comply with applicable UAE laws. By engaging with our services, you agree to abide by these terms.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>2. Scope of Services</SectionHeading>
        <Paragraph themeMode={themeMode}>
          We offer digital marketing services including but not limited to:
        </Paragraph>
        <UnorderedList themeMode={themeMode}>
          <li>Social Media Management</li>
          <li>Facebook/Instagram Ads</li>
          <li>Website Development</li>
          <li>Content Creation</li>
          <li>Brand Identity Design</li>
          <li>E-commerce Store Setup</li>
          <li>Campaign Strategy & Consulting</li>
        </UnorderedList>
        <Paragraph themeMode={themeMode}>
          A detailed Scope of Work (SOW) will be attached to each client agreement.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>3. Service Delivery & Timelines</SectionHeading>
        <Paragraph themeMode={themeMode}>
          All project timelines are estimates unless otherwise stated. Delays due to late client input may affect delivery. Work begins only upon receipt of agreed deposit or payment.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>4. Payment Terms</SectionHeading>
        <Paragraph themeMode={themeMode}>
          Prices are in <strong>AED</strong>. A <strong>50% deposit</strong> is required before starting any project. Balance is due upon completion, before final delivery. No refunds on services already initiated. Accepted methods: bank transfer, online gateway, or cheque.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>5. Intellectual Property</SectionHeading>
        <Paragraph themeMode={themeMode}>
          Creative assets remain property of Quadrik Digit until full payment. Upon final payment, ownership transfers to the Client, excluding third-party assets. We may showcase completed work in our portfolio.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>6. Confidentiality</SectionHeading>
        <Paragraph themeMode={themeMode}>
          Both parties agree to maintain confidentiality of shared materials. No disclosure to third parties without written consent.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>7. Client Responsibilities</SectionHeading>
        <Paragraph themeMode={themeMode}>
          Client must provide timely materials and feedback. Submitted content must be original or licensed. Client cooperation is required for smooth execution.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>8. Limitation of Liability</SectionHeading>
        <Paragraph themeMode={themeMode}>
          Quadrik is not liable for indirect or consequential losses. Liability is limited to the paid service fee. Advertising results are not guaranteed but best practices are followed.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>9. Termination</SectionHeading>
        <Paragraph themeMode={themeMode}>
          Either party may terminate with 7 days' notice. Work completed must be paid for. No refund on partially delivered work.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>10. Legal Jurisdiction</SectionHeading>
        <Paragraph themeMode={themeMode}>
          These terms are governed by UAE laws. Disputes fall under UAE courts or the relevant Free Zone Authority. Arbitration may be pursued before litigation.
        </Paragraph>

        <SectionHeading themeMode={themeMode}>11. Amendments</SectionHeading>
        <Paragraph themeMode={themeMode}>
          We reserve the right to update these terms at any time. Changes will be posted on our website or sent directly to clients.
        </Paragraph>
      </TermsCard>
    </TermsContainer>
  );
};

export default TermsAndConditions;