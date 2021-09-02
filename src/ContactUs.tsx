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
  faEnvelopeOpen,
  faGraduationCap,
  faHatWizard,
  faHeadset,
  faHome,
  faLaptopCode,
  faMapMarker,
  faMapMarkerAlt,
  faMapPin,
  faPhone,
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
import map from './images/map.png';
import { breakpoint, colors, fontFamily } from './theme';
import { Rule } from './types';
import p83 from './images/83.png';
import listCheck from './images/listCheck.png';
import { getRandomNumber } from './getRandom';
import { Question } from './components/Question';

const mapStyle = () => ({
  '& img': {
    width: '100%',
    display: 'block',
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

const contactItem: Rule = () => ({
  marginTop: '25px',
  position: 'relative',
  paddingLeft: '70px',
  '& h5': {
    color: colors.text,
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '28px',
    margin: 0,
  },
  '& p': {
    colors: colors.text,
    marginTop: 0,
  },
});

const contactItemIcon: Rule = () => ({
  backgroundColor: colors.orange,
  color: 'white',
  fontSize: '22px',
  height: '50px',
  width: '50px',
  borderRadius: '25px',
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 0,
});

const aboutMeSectionStyle: Rule = () => ({
  backgroundColor: '#eaf4f7',
  padding: '130px 0 130px',
});

const contactFormSectionStyle: Rule = () => ({
  backgroundColor: '#eaf4f7',
  padding: '0 0 130px',
});

const quickContact: Rule = () => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '& p': {
    color: colors.textLightGrey,
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '28px',
  },
  [breakpoint.md]: {
    padding: '0 60px 0 0',
  },
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
});

const Faq: React.FC<PageProps> = () => {
  const { css } = useFela();

  return (
    <main>
      <Header />
      <SubpageHeader title="Contact Us" subtitle="Home > Contact Us" />
      <section className={css(aboutMeSectionStyle)}>
        <Container>
          <Row>
            <Col md={5} sm={7} style={{ flexDirection: 'column' }}>
              <div className={css(quickContact)}>
                <SectionSubtitle align="left">Quick Contact</SectionSubtitle>
                <SectionTitle
                  customStyle={{ marginBottom: '35px' }}
                  align="left"
                >
                  Get In Touch{' '}
                </SectionTitle>
                <p>
                  Sed ut perspiciati unde omnis iste natus error sit voluptatem
                  accusanc doloremque laudantium totam rem aperiam eaque ipsa
                  quae
                </p>
                <div className={css(contactItem)}>
                  <div className={css(contactItemIcon)}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <h5>Locations</h5>
                  <p>250 Main Street, New York</p>
                </div>
                <div className={css(contactItem)}>
                  <div className={css(contactItemIcon)}>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                  </div>
                  <h5>Email Us</h5>
                  <p>support@gmail.com</p>
                </div>
                <div className={css(contactItem)}>
                  <div className={css(contactItemIcon)}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <h5>Phone Us</h5>
                  <p>+012 (345) 6789 99</p>
                </div>
              </div>
            </Col>
            <Col md={7} sm={5}>
              <div className={css(mapStyle)}>
                <img src={map} alt="Map" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={css(contactFormSectionStyle)}>
        <Container>
          <div>
            <SectionSubtitle>Get In Touch</SectionSubtitle>
            <SectionTitle>Leave Us Message</SectionTitle>

            <Row>
              <Col sm={4}>
                <Input placeholder="Full Name" icon={faUser} />
              </Col>
              <Col sm={4}>
                <Input placeholder="Email Address" icon={faEnvelope} />
              </Col>
              <Col sm={4}>
                <Input placeholder="Phone" icon={faPhone} />
              </Col>
              <Col sm={12}>
                <Input
                  placeholder="Write Message"
                  as="textarea"
                  style={{ height: 180 }}
                />
              </Col>
            </Row>
            <div>
              <Button type="orange" size="xl">
                send message &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default Faq;
