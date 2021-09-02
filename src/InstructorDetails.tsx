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
  faGraduationCap,
  faHatWizard,
  faHeadset,
  faHome,
  faLaptopCode,
  faMapPin,
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
  InstructorFact,
  LogoWhite,
  Row,
  SearchInput,
  SectionSubtitle,
  SectionTitle,
  SubpageHeader,
} from './components';
import { InstructorCard } from './components/InstructordCard';
import { blogPosts, courseCategories, courses, instructors } from './data';
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

const factsContainerStyle: Rule = () => ({
  [breakpoint.md]: {
    position: 'absolute',
    width: '100%',
    bottom: '-50px',
    left: 0,
  },
});

const categoriesSectionStyle: Rule = () => ({
  marginTop: '60px',
  marginBottom: '60px',
  [breakpoint.md]: {
    marginTop: '170px',
    marginBottom: '100px',
  },
});

const instructorsSectionStyle: Rule = () => ({
  backgroundColor: '#fff',
  padding: '60px 0',
  [breakpoint.md]: {
    padding: '130px 0',
  },
});

const feedbackSectionStyle: Rule = () => ({
  backgroundColor: '#062a35',
  padding: '60px 0',
  [breakpoint.md]: {
    padding: '130px 0',
  },
});

const careerSection: Rule = () => ({
  padding: '60px 0',
  position: 'relative',
  [breakpoint.md]: {
    padding: '130px 0 0',
  },
});

const careerSectionContainer: Rule = () => ({
  position: 'relative',
  paddingBottom: '230px',
});

const careerImages: Rule = () => ({
  position: 'relative',
  marginBottom: '30px',
  [breakpoint.md]: {
    marginBottom: '0',
  },
  '> img': {
    maxWidth: '100%',
  },
});

const careerSmallImage: Rule = () => ({
  position: 'absolute',
  width: '330px',
  height: '300px',
  bottom: '0px',
  right: '-120px',
  display: 'none',
  [breakpoint.md]: {
    display: 'block',
  },
});

const careerImageTag: Rule = () => ({
  position: 'absolute',
  top: '250px',
  right: '120px',
  display: 'none',
  [breakpoint.md]: {
    display: 'block',
  },
});

const instructorDescription: Rule = () => ({
  color: colors.textLightGrey,
  fontSize: '15px',
  lineHeight: '28px',
  marginBottom: '50px',
});

const factContainer = () => ({
  marginBottom: '30px',
  [breakpoint.md]: {
    marginBottom: '0',
  },
});

const feedbackCardContainer = () => ({
  justifyContent: 'center',
  [breakpoint.md]: {
    justifyContent: 'flex-start',
  },
});

const InstructorFactStyle = () => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '80px',
  position: 'relative',
  borderBottom: '1px solid #e4e4e4',
  paddingBottom: '40px',
  marginBottom: '40px',
});

const factIcon = () => ({
  fontSize: '20px',
  color: 'white',
  background: '#3662ff',
  position: 'absolute',
  width: '55px',
  height: '55px',
  left: 0,
  borderRadius: '30px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const factTitle = () => ({
  fontSize: '22px',
  fontWeight: 700,
  fontFamily: fontFamily.roboto,
  margin: 0,
});

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

const aboutSocialIcons: Rule = () => ({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '40px',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  '& a > div': {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    fontSize: '18px',
  },
});

const aboutMeContentStyle: Rule = () => ({
  color: '#708389',
  width: '100%',
  '& h3': {
    fontFamily: fontFamily.roboto,
    fontSize: '24px',
    fontWeight: 700,
    color: colors.text,
  },
  '& p': {
    fontSize: '15px',
  },
});

const aboutMeImgStyle: Rule = () => ({
  width: '100%',
  height: 'auto',
  display: 'block',
});

const aboutMeSectionStyle: Rule = () => ({
  backgroundColor: '#eaf4f7',
  padding: '130px 0 30px',
});

const blogSectionStyle: Rule = () => ({
  backgroundColor: 'white',
  padding: '0 0 130px',
  marginTop: '80px',
});

const aboutMeCard: Rule = () => ({
  backgroundColor: '#fff',
  width: '100%',
  marginBottom: '30px',
  [breakpoint.md]: {
    marginBottom: 0,
  },
});

const aboutMetaStyle: Rule = () => ({
  display: 'flex',
  padding: '30px 0 0',
  color: '#708389',
  fontSize: '15px',
  marginTop: '30px',
  borderTop: '1px solid #e4e4e4',
});

const certificationsStyle: Rule = () => ({
  backgroundColor: '#fff',
  width: '100%',
  padding: '60px',
  marginTop: '30px',
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

const educationFactsStyle: Rule = () => ({
  backgroundColor: '#fff',
  width: '100%',
  padding: '60px',
  marginTop: '30px',
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

const certificationImagesStyle: Rule = () => ({
  '& img': {
    width: '30%',
    marginRight: '3%',
    height: '100px',
  },
});

const Home: React.FC<PageProps> = () => {
  const { css } = useFela();

  return (
    <main>
      <Header />
      <SubpageHeader
        title="Instructor Details"
        subtitle="Home > Instructor Details"
      />
      <section className={css(aboutMeSectionStyle)}>
        <Container>
          <Row>
            <Col md={5}>
              <div className={css(aboutMeCard)}>
                <img
                  src={`https://picsum.photos/470/400`}
                  alt="someone"
                  className={css(aboutMeImgStyle)}
                />
                <div style={{ padding: '30px' }}>
                  <Row>
                    <Col sm={7} xs={8}>
                      <div className={css(aboutMeContentStyle)}>
                        <h3>Somalia D Silva</h3>
                        <p>Math Teacher</p>
                        <div className={css(aboutMetaStyle)}>
                          <div>
                            <FontAwesomeIcon
                              icon={faBook}
                              color={colors.orange}
                            />{' '}
                            750+ Courses
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={5} xs={4}>
                      <div style={{ width: '100%' }}>
                        <div className={css(aboutSocialIcons)}>
                          <FooterSocialIcon
                            icon={faFacebookF}
                            color="#1771e6"
                          />
                          <FooterSocialIcon icon={faTwitter} color="#1da1f2" />
                        </div>
                        <div className={css(aboutSocialIcons)}>
                          <FooterSocialIcon icon={faYoutube} color="#ff0000" />
                          <FooterSocialIcon
                            icon={faInstagram}
                            color="#de0e88"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className={css(aboutMeDescription)}>
                <h3>About Me</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantioloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit
                </p>
                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet consectetur adipisci velit
                </p>
                <Row style={{ marginTop: '30px' }}>
                  <Col sm={6}>
                    <Fact
                      icon={faUsers}
                      title="3045+"
                      subtitle="Satisfied Students"
                      style={{ boxShadow: 'none' }}
                    />
                  </Col>
                  <Col sm={6}>
                    <Fact
                      icon={faBook}
                      title="7852+"
                      subtitle="Available Courses"
                      style={{ boxShadow: 'none' }}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className={css(certificationsStyle)}>
                <h3>Certifications</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit accus
                  tioloreme laudantium totam rem aperiam eaque ipsa quae ab illo
                  inventoresy veritatis quasi architecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur
                </p>
                <div className={css(certificationImagesStyle)}>
                  <img
                    src={`https://picsum.photos/seed/${getRandomNumber(
                      1,
                      1000,
                    )}/150/100`}
                    alt="cerificate"
                  />

                  <img
                    src={`https://picsum.photos/seed/${getRandomNumber(
                      1,
                      1000,
                    )}/150/100`}
                    alt="cerificate"
                  />

                  <img
                    src={`https://picsum.photos/seed/${getRandomNumber(
                      1,
                      1000,
                    )}/150/100`}
                    alt="cerificate"
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={css(educationFactsStyle)}>
                <h3>Educations</h3>
                <Row style={{ marginTop: '30px' }}>
                  <Col sm={6}>
                    <EducationFact
                      icon={faGraduationCap}
                      title="World University"
                      subtitle="Computer Science"
                    />
                  </Col>
                  <Col sm={6}>
                    <EducationFact
                      icon={faGraduationCap}
                      title="World University"
                      subtitle="Web Development"
                    />
                  </Col>
                </Row>
                <h3 style={{ marginTop: 50 }}>Experience</h3>
                <Row style={{ marginTop: '30px' }}>
                  <Col sm={6}>
                    <EducationFact
                      icon={faDraftingCompass}
                      title="Graphics Designer"
                      subtitle="Behance.net"
                    />
                  </Col>
                  <Col sm={6}>
                    <EducationFact
                      icon={faDraftingCompass}
                      title="Web Developer"
                      subtitle="Themeforest.net"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={css(blogSectionStyle)}>
        <Container>
          <SectionTitle>Popular Courses</SectionTitle>
          <Row>
            {courses.slice(0, 6).map((course) => (
              <Col md={4} sm={6}>
                <CourseCard {...course} key={course.title} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
