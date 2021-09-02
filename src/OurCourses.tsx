import { PageProps } from 'gatsby';
import React from 'react';
import { useFela } from 'react-fela';

import {
  BlogCard,
  Col,
  Container,
  CourseCard,
  Footer,
  Header,
  Row,
  SectionSubtitle,
  SectionTitle,
  SubpageHeader,
} from './components';
import { InstructorCard } from './components/InstructordCard';
import { blogPosts, courseCategoryTags, courses, instructors } from './data';
import { breakpoint, colors } from './theme';
import { Rule } from './types';

const coursesSectionStyle: Rule = () => ({
  marginTop: '60px',
  marginBottom: '60px',
  [breakpoint.md]: {
    marginTop: '170px',
    marginBottom: '100px',
  },
});

const instructorsSectionStyle: Rule = () => ({
  backgroundColor: colors.background,
  padding: '60px 0',
  [breakpoint.md]: {
    padding: '130px 0',
  },
});

const blogSectionStyle: Rule = () => ({
  backgroundColor: 'white',
  padding: '130px 0',
});

const courseCategoriesStyle: Rule = () => ({
  justifyContent: 'center',
  display: 'flex',
  marginBottom: '50px',
  flexWrap: 'wrap',
});

const courseCategoryTagStyle: Rule = () => ({
  padding: '3px 15px',
  fontWeight: 500,
  color: '#062a35',
  cursor: 'pointer',
  marginRight: '10px',

  '&:hover': {
    backgroundColor: colors.orange,
    borderRadius: '14px',
    color: 'white',
  },
});

const courseCategoryTagStyleActive: Rule = () => ({
  backgroundColor: colors.orange,
  borderRadius: '14px',
  color: 'white',
});

const OurCourses: React.FC<PageProps> = () => {
  const { css } = useFela();

  return (
    <main>
      <Header />
      <SubpageHeader title="Our Courses" subtitle="Home > Courses" />

      <section className={css(coursesSectionStyle)}>
        <Container>
          <div className={css(courseCategoriesStyle)}>
            {courseCategoryTags.map((categoryTag, index) => (
              <div
                className={`${css(courseCategoryTagStyle)} ${
                  index === 0 ? css(courseCategoryTagStyleActive) : ''
                }`}
              >
                {categoryTag}
              </div>
            ))}
          </div>
          <Row>
            {courses.map((course) => (
              <Col md={3} sm={6}>
                <CourseCard {...course} key={course.title} />
              </Col>
            ))}
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

export default OurCourses;
