// // components/ScrollSections.js
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Section from './Section'; // Assuming Section is your base component for cards

// // Register GSAP plugin if needed
// gsap.registerPlugin(ScrollTrigger);

// const ScrollSections = () => {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     sectionsRef.current.forEach((section, index) => {
//       gsap.fromTo(
//         section,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//           duration: 1,
//           delay: index * 0.2,
//         }
//       );
//     });
//   }, []);

//   return (
//     <div>
//       {/* Example of multiple sections rendered */}
//       <Section ref={(el) => (sectionsRef.current[0] = el)} title="Section 1" />
//       <Section ref={(el) => (sectionsRef.current[1] = el)} title="Section 2" />
//       <Section ref={(el) => (sectionsRef.current[2] = el)} title="Section 3" />
//     </div>
//   );
// };

// export default ScrollSections;
