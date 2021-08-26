import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faBook,
  faEllipsisH,
  faGraduationCap,
  faHeadset,
  faLaptopCode,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageProps } from 'gatsby';
import React from 'react';
import { useFela } from 'react-fela';

import {
  Button,
  Col,
  Container,
  CourseCard,
  CourseCategoryCard,
  Fact,
  FeedbackCard,
  FeedbackGallery,
  FooterSocialIcon,
  Gallery,
  Header,
  InstructorFact,
  LogoWhite,
  Row,
  SearchInput,
  SectionSubtitle,
  SectionTitle,
} from './components';
import { InstructorCard } from './components/InstructordCard';
import { courseCategories, courses, instructors } from './data';
import heroImage from './images/hero.webp';
import company1 from './images/partners/company1.png';
import company2 from './images/partners/company2.png';
import company3 from './images/partners/company3.png';
import company4 from './images/partners/company4.png';
import company5 from './images/partners/company5.png';
import { colors, fontFamily } from './theme';
import { Rule } from './types';

const heroStyle: Rule = () => ({
  backgroundColor: '#eaf4f7',
  paddingTop: '32px',
});

const heroContentStyle: Rule = () => ({
  marginTop: '180px',
  marginBottom: '264px',
});

const welcomeTextStyle: Rule = () => ({
  color: colors.orange,
  fontSize: '18px',
  fontWeight: 600,
});

const welcomeTextIconStyle: Rule = () => ({
  marginRight: '15px',
  verticalAlign: '-0.15em',
});

const heroTitleStyle: Rule = () => ({
  fontSize: '80px',
  lineHeight: '85px',
  fontWeight: 900,
  color: colors.text,
  marginTop: '35px',
  fontFamily: fontFamily.roboto,
});

const heroSearchStyle: Rule = () => ({
  marginTop: '50px',
});

const heroSupportStyle: Rule = () => ({
  marginTop: '45px',
  display: 'flex',
  position: 'relative',
});

const heroSupportTextStyle: Rule = () => ({
  fontSize: '15px',
  lineHeight: '25px',
  color: colors.textGrey,
  fontWeight: 500,
  paddingRight: '60px',
  borderRight: `3px solid ${colors.orange}`,
  flex: 1,
});

const heroSupportNumberStyle: Rule = () => ({
  flex: 1,
  paddingLeft: '112px',
  position: 'relative',
});

const heroOnlineSupportTitleStyle: Rule = () => ({
  paddingLeft: '60px',
  textTransform: 'uppercase',
  color: '#667e85',
  fontWeight: 700,
  fontSize: '13px',
});

const heroOnlineSupportNumberStyle: Rule = () => ({
  paddingLeft: '60px',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '18px',
  fontFamily: fontFamily.roboto,
});

const heroSupportIconStyle: Rule = () => ({
  position: 'absolute',
  color: colors.orange,
  fontSize: '38px',
  top: '-4px',
});

const heroImageStyle: Rule = () => ({
  position: 'absolute',
  right: '-23%',
  bottom: 0,
  height: '900px',
  width: '756px',
  zIndex: 0,
  '> img': {
    maxHeight: '100%',
  },
});

const factsContainerStyle: Rule = () => ({
  position: 'absolute',
  width: '100%',
  bottom: '-50px',
  left: 0,
});

const heroContainerStyle = {
  position: 'relative',
};

const categoriesSectionStyle: Rule = () => ({
  marginTop: '170px',
  marginBottom: '100px',
});

const availableCoursesStyle: Rule = () => ({
  backgroundColor: '#062a35',
  padding: '130px 0',
});

const galleryStyle: Rule = () => ({
  padding: '130px 0 100px',
});

const instructorsSectionStyle: Rule = () => ({
  backgroundColor: '#eaf4f7',
  padding: '130px 0',
});

const feedbackSectionStyle: Rule = () => ({
  backgroundColor: '#062a35',
  padding: '130px 0',
});

const careerSection: Rule = () => ({
  backgroundColor: '#eaf4f7',
  padding: '130px 0',
});

const careerImages: Rule = () => ({
  position: 'relative',
});

const careerSmallImage: Rule = () => ({
  position: 'absolute',
  width: '330px',
  height: '351px',
  bottom: '-60px',
  right: '-120px',
});

const instructorDescription: Rule = () => ({
  color: colors.textLightGrey,
  fontSize: '15px',
  lineHeight: '28px',
  marginBottom: '50px',
});

const clientSection: Rule = () => ({
  backgroundColor: colors.orange,
  padding: '80px 0',
});

const clientLogosStyle: Rule = () => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const footerStyle: Rule = () => ({
  backgroundColor: '#0b2e39',
  padding: '60px 0 45px',
});

const copyrightStyle: Rule = () => ({
  fontFamily: fontFamily.roboto,
  color: '#94a7b5',
  fontSize: '15px',
  padding: '22px',
  textAlign: 'center',
  backgroundColor: '#0c3542',
  marginTop: '60px',
});

const footerSeparatorContainerStyle: Rule = () => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '60px 0',
});

const footerSeparatorStyle: Rule = () => ({
  backgroundColor: colors.orange,
  height: '2px',
  width: '200px',
});

const Home: React.FC<PageProps> = () => {
  const { css } = useFela();

  return (
    <main>
      <div className={css(heroStyle)}>
        <Container customStyle={heroContainerStyle}>
          <div className={css(heroImageStyle)}>
            <img src={heroImage} alt="Hero" />
          </div>
          <Header />
          <Row>
            <Col md={7}>
              <div className={css(heroContentStyle)}>
                <div className={css(welcomeTextStyle)}>
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    className={css(welcomeTextIconStyle)}
                  />
                  Welcome To EduPlus
                </div>
                <div className={css(heroTitleStyle)}>
                  More than 1200 Online Courses
                </div>
                <div className={css(heroSearchStyle)}>
                  <SearchInput />
                </div>
                <div className={css(heroSupportStyle)}>
                  <div className={css(heroSupportTextStyle)}>
                    Sed ut perspiciatis unde omnis natus error sit voluptatem{' '}
                  </div>
                  <div className={css(heroSupportNumberStyle)}>
                    <div className={css(heroOnlineSupportTitleStyle)}>
                      Online support
                    </div>
                    <div className={css(heroOnlineSupportNumberStyle)}>
                      +012 (345) 6789
                    </div>
                    <div className={css(heroSupportIconStyle)}>
                      <FontAwesomeIcon icon={faHeadset} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className={css(factsContainerStyle)}>
            <Row>
              <Col md={3}>
                <Fact
                  icon={faUsers}
                  title="3045+"
                  subtitle="Satisfied Students"
                />
              </Col>
              <Col md={3}>
                <Fact
                  icon={faBook}
                  title="7852+"
                  subtitle="Available Courses"
                />
              </Col>
              <Col md={3}>
                <Fact
                  icon={faGraduationCap}
                  title="9862+"
                  subtitle="Graduate Students"
                />
              </Col>
              <Col md={3}>
                <Fact
                  icon={faLaptopCode}
                  title="8963+"
                  subtitle="Active Courses"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <section className={css(categoriesSectionStyle)}>
        <Container>
          <SectionSubtitle>Popular Categories</SectionSubtitle>
          <SectionTitle>Course Categories</SectionTitle>
          <Row>
            {courseCategories.map(({ title, description }) => (
              <Col md={3}>
                <CourseCategoryCard
                  title={title}
                  description={description}
                  key={title}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className={css(availableCoursesStyle)}>
        <Container>
          <SectionSubtitle>Popular Courses</SectionSubtitle>
          <SectionTitle color="white">Available Courses</SectionTitle>
          <Row>
            {courses.map((course) => (
              <Col md={4}>
                <CourseCard {...course} key={course.title} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className={css(galleryStyle)}>
        <Container>
          <SectionSubtitle>Photo & Album</SectionSubtitle>
          <SectionTitle>Campus Gallery</SectionTitle>
          <Gallery />
        </Container>
      </section>
      <section className={css(instructorsSectionStyle)}>
        <Container>
          <SectionSubtitle>Team Members</SectionSubtitle>
          <SectionTitle>Expert Instructors</SectionTitle>
          <Row>
            {instructors.map((instructor) => (
              <Col md={3} key={instructor.title}>
                <InstructorCard {...instructor} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className={css(feedbackSectionStyle)}>
        <Container>
          <SectionSubtitle>Students Feedback</SectionSubtitle>
          <SectionTitle color="white">What Our Students Say</SectionTitle>
          <Row>
            <Col md={6}>
              <FeedbackCard />
            </Col>
            <Col md={6}>
              <FeedbackGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={css(careerSection)}>
        <Container>
          <Row>
            <Col md={7}>
              <div className={css(careerImages)}>
                <img src="https://picsum.photos/500" alt="career big" />
                <img
                  src="https://picsum.photos/330"
                  alt="career small"
                  className={css(careerSmallImage)}
                />
              </div>
            </Col>
            <Col md={5}>
              <div>
                <SectionSubtitle align="left">Build A Career</SectionSubtitle>
                <SectionTitle
                  customStyle={{ marginBottom: '35px' }}
                  align="left"
                >
                  Become an Instructor
                </SectionTitle>
                <p className={css(instructorDescription)}>
                  Sed ut perspiciati unde omnis iste natus error sit voluptatem
                  accusanc tium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quasi architecto
                  beatae vitae dicta sun
                </p>
                <div>
                  <InstructorFact />
                </div>
                <Row style={{ marginTop: 50 }}>
                  <Col md={6}>
                    <Button width="100%" type="orange">
                      join with us &nbsp;&nbsp;
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button width="100%" type="white">
                      Become a Partner
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={css(clientSection)}>
        <Container>
          <div className={css(clientLogosStyle)}>
            <img src={company1} alt="partner 1" />
            <img src={company2} alt="partner 2" />
            <img src={company3} alt="partner 3" />
            <img src={company4} alt="partner 4" />
            <img src={company5} alt="partner 5" />
          </div>
        </Container>
      </section>
      <footer className={css(footerStyle)}>
        <Row>
          <Col md={3}>
            <LogoWhite />
          </Col>
          <Col md={1}></Col>
          <Col md={2}>
            <FooterSocialIcon
              icon={faFacebookF}
              title="Facebook"
              color="#1771e6"
            />
          </Col>
          <Col md={2}>
            <FooterSocialIcon
              icon={faTwitter}
              title="Twitter"
              color="#1da1f2"
            />
          </Col>
          <Col md={2}>
            <FooterSocialIcon
              icon={faYoutube}
              title="YouTube"
              color="#ff0000"
            />
          </Col>
          <Col md={2}>
            <FooterSocialIcon
              icon={faInstagram}
              title="Instagram"
              color="#de0e88"
            />
          </Col>
        </Row>
        <div className={css(footerSeparatorContainerStyle)}>
          <div className={css(footerSeparatorStyle)} />
        </div>
        <div className={css(copyrightStyle)}>
          Copyright © 2020{' '}
          <span style={{ color: 'white' }}>
            <b>Edu</b>Plus
          </span>{' '}
          All Rights Reserved.
        </div>
      </footer>
    </main>
  );
};

export default Home;
