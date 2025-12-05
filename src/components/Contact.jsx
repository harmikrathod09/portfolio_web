// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { FiMail, FiPhone, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
// import { SiLeetcode, SiHackerrank } from "react-icons/si";


// const ContactSection = styled.section`
//   padding: 8rem 5%;
//   background: ${props => props.theme.primary};
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
// `;

// const Container = styled.div`
//   max-width: 1400px;
//   margin: 0 auto;
//   width: 100%;
// `;

// const SectionTitle = styled(motion.h2)`
//   font-size: 3rem;
//   font-weight: 700;
//   color: ${props => props.theme.accent};
//   margin-bottom: 1rem;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const SectionSubtitle = styled(motion.p)`
//   font-size: 1.2rem;
//   color: ${props => props.theme.textSecondary};
//   text-align: center;
//   margin-bottom: 4rem;
// `;

// const ContactGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2rem;
//   margin-top: 4rem;
// `;

// const ContactCard = styled(motion.a)`
//   background: rgba(214, 164, 99, 0.05);
//   border: 1px solid rgba(214, 164, 99, 0.2);
//   border-radius: 20px;
//   padding: 2.5rem;
//   text-align: center;
//   text-decoration: none;
//   backdrop-filter: blur(10px);
//   transition: all 0.3s ease;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;

//   &:hover {
//     transform: translateY(-10px);
//     border-color: ${props => props.theme.accent};
//     box-shadow: 0 20px 40px rgba(214, 164, 99, 0.2);
//     background: rgba(214, 164, 99, 0.1);
//   }
// `;

// const ContactIcon = styled.div`
//   width: 70px;
//   height: 70px;
//   background: linear-gradient(135deg, ${props => props.theme.accent} 0%, ${props => props.theme.primary} 100%);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 2rem;
//   color: ${props => props.theme.text};
//   box-shadow: 0 10px 30px rgba(214, 164, 99, 0.3);
// `;

// const ContactLabel = styled.h3`
//   font-size: 1.2rem;
//   color: ${props => props.theme.accent};
//   margin: 0;
//   font-weight: 700;
// `;

// const ContactValue = styled.p`
//   font-size: 1rem;
//   color: ${props => props.theme.textSecondary};
//   margin: 0;
//   word-break: break-all;
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
//   margin-top: 3rem;
//   flex-wrap: wrap;
// `;

// const SocialLink = styled(motion.a)`
//   width: 60px;
//   height: 60px;
//   background: rgba(214, 164, 99, 0.1);
//   border: 2px solid rgba(214, 164, 99, 0.3);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${props => props.theme.accent};
//   font-size: 1.5rem;
//   text-decoration: none;
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(214, 164, 99, 0.2);
//     border-color: ${props => props.theme.accent};
//     transform: translateY(-5px);
//     box-shadow: 0 10px 25px rgba(214, 164, 99, 0.3);
//   }
// `;

// const Contact = () => {
//   const contactInfo = [
//     { icon: FiInstagram, 
//       label: 'Instagram', 
//       href: 'https://instagram.com/iamharmikrathod' 
//     },
//     {
//       icon: FiMail,
//       label: 'Email',
//       value: 'harmikrathod56@gmail.com',
//       href: 'mailto:harmikrathod56@gmail.com'
//     },
//     {
//       icon: FiPhone,
//       label: 'Phone',
//       value: '+91 9723975805',
//       href: 'tel:+919723975805'
//     },
//     {
//       icon: FiLinkedin,
//       label: 'LinkedIn',
//       value: 'linkedin.com/in/harmikrathod',
//       href: 'https://linkedin.com/in/harmikrathod'
//     },
//     {
//       icon: FiGithub,
//       label: 'GitHub',
//       value: 'github.com/harmikrathod09',
//       href: 'https://github.com/harmikrathod09'
//     }
//   ];



//   const socialLinks = [
//     { icon: FiGithub, label: 'GitHub', href: 'https://github.com/harmikrathod09' },
//     { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/harmikrathod' },
//     { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/harmikrathod' },
//     { icon: SiHackerrank, label: 'HackerRank', href: 'https://hackerrank.com/harmikrathod56' }
//   ];

//   return (
//     <ContactSection id="contact">
//       <Container>
//         <SectionTitle
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Get In Touch
//         </SectionTitle>
//         <SectionSubtitle
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Let's connect and build something amazing together
//         </SectionSubtitle>

//         <ContactGrid>
//           {contactInfo.map((contact, index) => (
//             <ContactCard
//               key={index}
//               href={contact.href}
//               target={contact.href.startsWith('http') ? '_blank' : undefined}
//               rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <ContactIcon>{contact.icon}</ContactIcon>
//               <ContactLabel>{contact.label}</ContactLabel>
//               <ContactValue>{contact.value}</ContactValue>
//             </ContactCard>
//           ))}
//         </ContactGrid>

//         <SocialLinks>
//           {socialLinks.map((social, index) => (
//             <SocialLink
//               key={index}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {social.icon}
//             </SocialLink>
//           ))}
//         </SocialLinks>
//       </Container>
//     </ContactSection>
//   );
// };

// export default Contact;

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const ContactSection = styled.section`
  padding: 8rem 5%;
  background: ${props => props.theme.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.accent};
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ContactCard = styled(motion.a)`
  background: rgba(214, 164, 99, 0.05);
  border: 1px solid rgba(214, 164, 99, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-10px);
    border-color: ${props => props.theme.accent};
    box-shadow: 0 20px 40px rgba(214, 164, 99, 0.2);
    background: rgba(214, 164, 99, 0.1);
  }
`;

const ContactIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, ${props => props.theme.accent} 0%, ${props => props.theme.primary} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${props => props.theme.text};
  box-shadow: 0 10px 30px rgba(214, 164, 99, 0.3);
`;

const ContactLabel = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.accent};
  margin: 0;
  font-weight: 700;
`;

const ContactValue = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textSecondary};
  margin: 0;
  word-break: break-all;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 60px;
  height: 60px;
  background: rgba(214, 164, 99, 0.1);
  border: 2px solid rgba(214, 164, 99, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.accent};
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(214, 164, 99, 0.2);
    border-color: ${props => props.theme.accent};
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(214, 164, 99, 0.3);
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
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's connect and build something amazing together
        </SectionSubtitle>

        <ContactGrid>
          {contactInfo.map((contact, index) => (
            <ContactCard
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
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
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
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
