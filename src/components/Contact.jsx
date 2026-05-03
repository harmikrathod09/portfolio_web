import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const ContactSection = styled.section`
  padding: 100px 5% 60px;
  background: transparent;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: -2px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }
`;


const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  text-align: center;
  margin-bottom: 6rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.2rem;
  margin-top: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


const ContactCard = styled(motion.a).attrs({ className: 'glass-card' })`
  padding: 2rem 1rem;

  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  &:hover {
    .icon-box {
      background: white;
      color: black;
      transform: scale(1.1) rotate(5deg);
    }
  }
`;


const ContactIcon = styled.div.attrs({ className: 'icon-box' })`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ContactLabel = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin: 0;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const ContactValue = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textSecondary};
  margin: 0;
  word-break: break-all;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 6rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: black;
    border-color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  }
`;


const Contact = () => {
  const contactInfo = [
    {
      icon: FiInstagram,
      label: 'Instagram',
      value: '@iamharmikrathod',
      href: 'https://instagram.com/iamharmikrathod'
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'harmikrathod56@gmail.com',
      href: 'mailto:harmikrathod56@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 9723975805',
      href: 'tel:+919723975805'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/harmikrathod',
      href: 'https://linkedin.com/in/harmikrathod'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'github.com/harmikrathod09',
      href: 'https://github.com/harmikrathod09'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/harmikrathod09' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/harmikrathod' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/harmikrathod' },
    { icon: SiHackerrank, label: 'HackerRank', href: 'https://hackerrank.com/harmikrathod56' }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm currently open to new opportunities and collaborations.
        </SectionSubtitle>

        <ContactGrid>
          {contactInfo.map((contact, index) => (
            <ContactCard
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ContactIcon>
                <contact.icon />
              </ContactIcon>
              <ContactLabel>{contact.label}</ContactLabel>
              <ContactValue>{contact.value}</ContactValue>
            </ContactCard>
          ))}
        </ContactGrid>

        <SocialLinks>
          {socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon />
            </SocialLink>
          ))}
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

export default Contact;
