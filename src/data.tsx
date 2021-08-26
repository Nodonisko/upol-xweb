import image1 from './images/gallery/image1.jpg';
import image10 from './images/gallery/image10.jpg';
import image11 from './images/gallery/image11.jpg';
import image12 from './images/gallery/image12.jpg';
import image13 from './images/gallery/image13.jpg';
import image14 from './images/gallery/image14.jpg';
import image15 from './images/gallery/image15.jpg';
import image16 from './images/gallery/image16.jpg';
import image2 from './images/gallery/image2.jpg';
import image3 from './images/gallery/image3.jpg';
import image4 from './images/gallery/image4.jpg';
import image5 from './images/gallery/image5.jpg';
import image6 from './images/gallery/image6.jpg';
import image7 from './images/gallery/image7.jpg';
import image8 from './images/gallery/image8.jpg';
import image9 from './images/gallery/image9.jpg';

export const courseCategories = [
  { title: 'Graphics Design (UI)', description: 'Web Design Course' },
  { title: 'Business Studies', description: 'Finance Business' },
  { title: 'Web Development', description: 'Web Design Course' },
  { title: 'Product Engineering', description: 'Web Design Course' },
  { title: 'Basic Photography', description: 'Film Movies & Photography' },
  { title: 'Medical & Health', description: 'Doctors & Nursing' },
  { title: 'Marketing Strategy', description: 'Social Media Marketing' },
  { title: 'Mobile UI Design', description: 'Web Design Course' },
] as const;

export const courses = [
  {
    title: 'Best Courses For Learning English Courses',
    tag: 'english',
    author: 'Lory',
    tagColor: '#4582ff',
  },
  {
    title: 'Learning About It Consulting Business Solutions ',
    tag: 'business',
    tagColor: '#f7bb00',
    author: 'Lory',
  },
  {
    title: 'Introduced About Basic Web Design For Begineers',
    tag: 'design',
    tagColor: '#ea5822',
    author: 'Lory',
  },
];

export const gallery = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];

export const instructors = [
  { title: 'Somalia D Silva', description: 'Math Teacher' },
  { title: 'David D Warner', description: 'English Teacher' },
  { title: 'Xavi Toni Crusse', description: 'Computer Teacher' },
  { title: 'Shaine Watson', description: 'Web Designer' },
] as const;
