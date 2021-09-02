import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faBook,
  faCalendarAlt,
  faClock,
  faComments,
  faDraftingCompass,
  faEllipsisH,
  faEnvelope,
  faGraduationCap,
  faHatWizard,
  faHeadset,
  faHome,
  faLaptopCode,
  faMapPin,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageProps } from 'gatsby';
import React from 'react';
import { useFela } from 'react-fela';

import {
  BlogCard,
  Button,
  Col,
  Container,
  CourseCard,
  CourseCategoryCard,
  EducationFact,
  Fact,
  FeedbackCard,
  FeedbackGallery,
  Footer,
  FooterSocialIcon,
  Gallery,
  Header,
  Input,
  InstructorFact,
  LogoWhite,
  Row,
  SearchInput,
  SectionSubtitle,
  SectionTitle,
  SubpageHeader,
} from './components';
import { InstructorCard } from './components/InstructordCard';
import {
  blogPosts,
  courseCategories,
  courses,
  instructors,
  questions,
} from './data';
import heroImage from './images/hero.webp';
import company1 from './images/partners/company1.png';
import company2 from './images/partners/company2.png';
import company3 from './images/partners/company3.png';
import company4 from './images/partners/company4.png';
import company5 from './images/partners/company5.png';
import imageTag from './images/tag.png';
import { breakpoint, colors, fontFamily } from './theme';
import { Rule } from './types';
import p83 from './images/83.png';
import listCheck from './images/listCheck.png';
import { getRandomNumber } from './getRandom';
import { Question } from './components/Question';

const aboutMeDescription = () => ({
  backgroundColor: '#fff',
  width: '100%',
  padding: '60px',
  '& h3': {
    fontFamily: fontFamily.roboto,
    fontSize: '30px',
    marginTop: 0,
  },
  '& p': {
    lineHeight: '28px',
    color: '#708389',
  },
});

const founderContentStyle: Rule = () => ({
  color: '#708389',
  width: '100%',
  textAlign: 'center',
  '& h3': {
    fontFamily: fontFamily.roboto,
    fontSize: '24px',
    fontWeight: 700,
    color: colors.text,
    marginBottom: 0,
  },
  '& h4': {
    fontWeight: 400,
    color: colors.orange,
    fontSize: '14px',
  },
  '& p': {
    fontSize: '15px',
    marginBottom: 0,
  },
});

const aboutMeImgStyle: Rule = () => ({
  width: '215px',
  height: '215px',
  borderRadius: '215px',
  display: 'block',
});

const aboutMeSectionStyle: Rule = () => ({
  backgroundColor: '#eaf4f7',
  padding: '130px 0 130px',
});

const aboutMeCard: Rule = () => ({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px',
});

const contactForm: Rule = () => ({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px',
  marginTop: '30px',
  marginBottom: '30px',
  [breakpoint.md]: {
    marginBottom: 0,
  },
});

const Faq: React.FC<PageProps> = () => {
  const { css } = useFela();

  return (
    <main>
      <Header />
      <SubpageHeader title="Faq" subtitle="Home > Faq" />
      <section className={css(aboutMeSectionStyle)}>
        <Container>
          <Row>
            <Col md={4} style={{ flexDirection: 'column' }}>
              <div className={css(aboutMeCard)}>
                <img
                  src={`https://picsum.photos/215`}
                  alt="something"
                  className={css(aboutMeImgStyle)}
                />
                <div className={css(founderContentStyle)}>
                  <h3>Somalia D Silva</h3>
                  <h4>CEO & Founder</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusan umdolremque laudantium totam rem aperiam
                    eaque ipsa quae ab illoinventore veritati quasi{' '}
                  </p>
                </div>
              </div>

              <div className={css(contactForm)}>
                <Input placeholder="Your Name" icon={faUser} />
                <Input placeholder="Your Email" icon={faEnvelope} />
                <Input
                  placeholder="Write Message"
                  icon={faEnvelope}
                  style={{ height: 130 }}
                  as="textarea"
                />
                <Button type="orange" width="100%">
                  send message &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </Col>
            <Col md={8}>
              <div className={css(aboutMeDescription)}>
                <h3>Frequently Asked Questions</h3>
                <div>
                  {questions.map((title) => (
                    <Question title={title} />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default Faq;
