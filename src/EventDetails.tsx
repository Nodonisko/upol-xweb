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
  faEllipsisH,
  faGraduationCap,
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
  padding: '80px 0 130px',
  border: '1px solid #e4e4e4',
  marginTop: '80px',
});

const eventDetailBodyStyle: Rule = () => ({
  color: '#708389',
  '& h3': {
    fontSize: '35px',
    fontWeight: 700,
    color: colors.text,
    fontFamily: fontFamily.roboto,
  },
  '& ul': {
    paddingLeft: 0,
    listStyle: 'none',
  },
  '& li': {
    padding: '10px 0 10px 50px',
    backgroundImage: `url('${listCheck}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    color: '#062a35',
    fontWeight: 500,
  },
});

const blogMetaStyle: Rule = () => ({
  display: 'flex',
  padding: '20px 0',
  color: '#708389',
  fontSize: '15px',
});

const Home: React.FC<PageProps> = () => {
  const { css } = useFela();

  return (
    <main>
      <Header />
      <SubpageHeader title="Event Details" subtitle="Home > Event Details" />

      <Container>
        <div className={css(eventDetailBodyStyle)}>
          <h3>Annual Conference 2020</h3>
          <div className={css(blogMetaStyle)}>
            <div>
              <FontAwesomeIcon icon={faCalendarAlt} color={colors.orange} /> 25
              November 2020
            </div>
            <div style={{ marginLeft: 18 }}>
              <FontAwesomeIcon icon={faClock} color={colors.orange} /> Sat -
              Friday, 08 am - 09 pm
            </div>
            <div style={{ marginLeft: 18 }}>
              <FontAwesomeIcon icon={faMapPin} color={colors.orange} /> 250 Main
              Street, USA
            </div>
            <div style={{ marginLeft: 18 }}>
              <FontAwesomeIcon icon={faHome} color={colors.orange} /> New York
              Museum
            </div>
          </div>
          <div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi archite cto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla
            </p>
            <img src={`https://picsum.photos/1170/670`} alt="something" />
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasur d ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi archite
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est
            </p>
            <Row>
              <Col md={6}>
                <div>
                  <h3>Importance Of Events</h3>
                  <p>
                    No one rejects, dislikes, or avoids pleasure itself because
                    it is pleasure but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which
                    toil and pain can procure him some great pleasure.
                  </p>
                  <ul>
                    <li>
                      Creating Secure Password Flows With NodeJS And MySQL
                    </li>
                    <li>
                      Make Honest Design Work For Digital Business With Ethical
                      Design
                    </li>
                    <li>
                      Building An E-Commerce Site With October CMS Shopaholic
                    </li>
                    <li>
                      Smashing Podcast Episode 11 With Eduardo Bouças What Is
                      Sourcebit?
                    </li>
                    <li>
                      Avoid Keyboard Event-Related Bugs Browser-Based
                      Transliteration
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src={`https://picsum.photos/570/420`}
                  alt="something"
                  style={{ marginTop: 30 }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Container>

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
