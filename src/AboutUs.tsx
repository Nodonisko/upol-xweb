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
  BlogCard,
  Button,
  Col,
  Container,
  CourseCard,
  CourseCategoryCard,
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
import p79 from './images/79.png';

const factsContainerStyle: Rule = () => ({
  [breakpoint.md]: {
    position: 'absolute',
    width: '100%',
    bottom: '-50px',
    left: 0,
    marginTop: 0,
  },
  marginTop: '30px',
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
  width: '100%',
  [breakpoint.md]: {
    marginBottom: '0',
    width: 'auto',

    '> img': {
      maxWidth: '100%',
      width: 'auto',
      height: 'auto',
    },
  },
  '> img': {
    width: '100%',
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

const factDescription = () => ({
  color: colors.textLightGrey,
  fontSize: '15px',
  lineHeight: '28px',
  marginBottom: 0,
});

const instructorSecondFact = () => ({
  marginTop: '30px',
  [breakpoint.md]: { border: 0, marginBottom: 0, paddingBottom: 0 },
});

const whoWeAreStyle: Rule = () => ({
  backgroundColor: colors.background,
  padding: '130px 0',
});

const whoWeAreText: Rule = () => ({
  color: colors.textLightGrey,
});

const goalStyle: Rule = () => ({
  flexDirection: 'column',
  fontFamily: fontFamily.roboto,
  fontSize: '18px',
  fontWeight: 700,
  marginTop: '30px',
});

const goalImageStyle: Rule = () => ({
  display: 'block',
  marginBottom: '15px',
});

const blogSectionStyle: Rule = () => ({
  backgroundColor: 'white',
  padding: '130px 0',
});

const Home: React.FC<PageProps> = () => {
  const { css } = useFela();

  return (
    <main>
      <Header />
      <SubpageHeader title="About us" subtitle="Home > About us" />
      <section className={css(careerSection)}>
        <Container className={css(careerSectionContainer)}>
          <Row>
            <Col md={7}>
              <div className={css(careerImages)}>
                <img src="https://picsum.photos/500" alt="career big" />
                <img
                  src="https://picsum.photos/330"
                  alt="career small"
                  className={css(careerSmallImage)}
                />
                <img
                  src={imageTag}
                  alt="25 years"
                  className={css(careerImageTag)}
                />
              </div>
            </Col>
            <Col md={5}>
              <div>
                <SectionSubtitle align="left">
                  Introduced About EduPlus
                </SectionSubtitle>
                <SectionTitle
                  customStyle={{ marginBottom: '35px' }}
                  align="left"
                >
                  Welcome To EduPlus
                </SectionTitle>
                <p className={css(instructorDescription)}>
                  Sed ut perspiciati unde omnis iste natus error sit voluptatem
                  accusanc tium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quasi architecto
                  beatae vitae dicta sun
                </p>
                <div>
                  <div
                    className={css(InstructorFactStyle)}
                    style={{ paddingRight: 15 }}
                  >
                    <div className={css(factIcon)}>
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <h5 className={css(factTitle)}>Digitalization</h5>
                    <p className={css(factDescription)}>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur vels
                    </p>
                  </div>
                  <div
                    className={`${css(InstructorFactStyle)} ${css(
                      instructorSecondFact,
                    )}`}
                  >
                    <div className={css(factIcon)}>
                      <FontAwesomeIcon icon={faBook} />
                    </div>
                    <h5 className={css(factTitle)}>Book Friendly</h5>
                    <p className={css(factDescription)}>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur vels
                    </p>
                  </div>
                </div>
                <Row style={{ marginTop: 50 }}>
                  <Col sm={6}>
                    <Button width="100%" type="orange">
                      Learn more &nbsp;&nbsp;
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className={css(factsContainerStyle)}>
            <Row>
              <Col md={3} sm={6} className={css(factContainer)}>
                <Fact
                  icon={faUsers}
                  title="3045+"
                  subtitle="Satisfied Students"
                />
              </Col>
              <Col md={3} sm={6} className={css(factContainer)}>
                <Fact
                  icon={faBook}
                  title="7852+"
                  subtitle="Available Courses"
                />
              </Col>
              <Col md={3} sm={6} className={css(factContainer)}>
                <Fact
                  icon={faGraduationCap}
                  title="9862+"
                  subtitle="Graduate Students"
                />
              </Col>
              <Col md={3} sm={6} className={css(factContainer)}>
                <Fact
                  icon={faLaptopCode}
                  title="8963+"
                  subtitle="Active Courses"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className={css(whoWeAreStyle)}>
        <Container>
          <Row>
            <Col md={4} sm={6}>
              <div>
                <SectionSubtitle align="left">Who We Are</SectionSubtitle>
                <SectionTitle
                  customStyle={{ marginBottom: '35px' }}
                  align="left"
                >
                  Institute Goals
                </SectionTitle>
                <p className={css(whoWeAreText)}>
                  Sed ut perspiciat unde omnis iste natus voluptate accusantium
                  doloremque laudantium totam rem ape riam eaque ipsa quae ab
                  illo inventore{' '}
                </p>
                <Row>
                  <Col xs={6} className={css(goalStyle)}>
                    <div>
                      <img
                        src={p83}
                        alt="83%"
                        className={css(goalImageStyle)}
                      />
                      Enginering Studies
                    </div>
                  </Col>
                  <Col xs={6} className={css(goalStyle)}>
                    <div>
                      <img
                        src={p79}
                        alt="79%"
                        className={css(goalImageStyle)}
                      />
                      General & Other Studies
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={7} sm={6}>
              <img
                src="https://picsum.photos/670/380"
                alt="Who we are"
                style={{ width: '100%' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={css(instructorsSectionStyle)}>
        <Container>
          <SectionSubtitle>Team Members</SectionSubtitle>
          <SectionTitle>Expert Instructors</SectionTitle>
          <Row>
            {instructors.map((instructor) => (
              <Col
                md={3}
                sm={6}
                key={instructor.title}
                style={{ justifyContent: 'center' }}
              >
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
            <Col md={6} className={css(feedbackCardContainer)}>
              <FeedbackCard />
            </Col>
            <Col md={6} className={css(feedbackCardContainer)}>
              <FeedbackGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={css(blogSectionStyle)}>
        <Container>
          <SectionSubtitle>Artices & Tipes</SectionSubtitle>
          <SectionTitle>Latest News & Blog</SectionTitle>
          <Row>
            {blogPosts.map((post) => (
              <Col md={4} sm={6} key={post.title}>
                <BlogCard {...post} />
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
