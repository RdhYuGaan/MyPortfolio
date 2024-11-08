import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about-Me', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  {
    href: 'https://www.linkedin.com',
    icon: <FaLinkedin className="size-5" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com',
    icon: <FaFacebook className="size-5" />,
    label: 'Facebook',
  },
  {
    href: 'https://www.github.com',
    icon: <FaGithub className="size-5" />,
    label: 'GitHub',
  },
];

export const skills = [
  { name: 'UX', value: 90 },
  { name: 'Website Design', value: 85 },

  { name: 'Graphic Design', value: 88 },
  { name: 'Figma', value: 70 },
];

export const projects = [
  {
    imgSrc: '/web/web-img-1.png',
    altText: 'E-commerce Website',
    title: 'E-commerce Website',
  },
  {
    imgSrc: '/web/web-img-2.png',
    altText: 'Portfolio Website',
    title: 'Portfolio Website',
  },
  {
    imgSrc: '/web/web-img-3.png',
    altText: 'Mobile App Design',
    title: 'Mobile App Design',
  },
  {
    imgSrc: '/web/web-img-4.png',
    altText: 'Corporate Website',
    title: 'Corporate Website',
  },
  {
    imgSrc: '/web/web-img-5.png',
    altText: 'Landing Page Design',
    title: 'Landing Page Design',
  },
  {
    imgSrc: '/web/web-img-6.png',
    altText: 'Social Media Dashboard',
    title: 'Social Media Dashboard',
  },
];

export const services = [
  {
    imgSrc: '/ui.png',
    altText: 'UI/UX Design',
    title: 'UI/UX Design',
    description:
      'Crafting intuitive and beautiful user interfaces that enhance user experiences and streamline interactions.',
  },
  {
    imgSrc: '/web-design.png',
    altText: 'Web Design',
    title: 'Web Design',
    description:
      'Designing responsive and visually stunning websites that provide seamless navigation across all devices.',
  },
  {
    imgSrc: '/app-design.png',
    altText: 'App Design',
    title: 'App Design',
    description:
      'Creating sleek and functional mobile app designs that offer a delightful user experience on both iOS and Android.',
  },
  {
    imgSrc: '/graphic-design.png',
    altText: 'Graphic Design',
    title: 'Graphic Design',
    description:
      'Delivering creative graphic design solutions, from branding to marketing materials, that make a lasting impact.',
  },
];

export const testimonials = [
  {
    name: 'John Doe',
    review:
      'Working with you was an absolute pleasure. Your attention to detail and creativity made the process smooth and enjoyable. I am thrilled with the final product!',
    imgSrc: '/profile/profile-1.jpg ',
  },
  {
    name: 'Jane Smith',
    review:
      'The design exceeded my expectations! You understood my needs perfectly and delivered a stunning website that truly reflects my brand.',
    imgSrc: '/profile/profile-2.jpg',
  },
  {
    name: 'Michael Lee',
    review:
      'Your professionalism and dedication to the project were outstanding. I appreciate how you went above and beyond to make sure everything was perfect!',
    imgSrc: '/profile/profile-3.jpg',
  },
  {
    name: 'Emily Davis',
    review:
      'I was blown away by your ability to bring my vision to life. The end result is beautiful and exactly what I was hoping for. Thank you!',
    imgSrc: '/profile/profile-4.jpg',
  },
]; 