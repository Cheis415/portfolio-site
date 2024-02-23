import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";
import melissa from '../../images/Melissa-meyer.jpg';
import Feargal from '../../images/Feargal-W.jpg';
import Glen from '../../images/Glen-C.jpg';
import Brooke from '../../images/Brooke-M.jpg';
import Robert from '../../images/Robert-T.jpg';
import Winston from '../../images/Winston-Y.jpg';
import Garrett from '../../images/Garrett-T.jpg';
import Jeff from '../../images/Jeff-H.jpg';
import './Testimonials.css'

const testimonials = [ 
    
      {
        id: 1,
        img: melissa,
        name: "Melissa M.",
        title: " Former ecommerce & marketing @VWE",
        info: "Chad is a very positive person to have on the team! He is very responsive and always a pleasure to work with. He is great with quick fixes, and makes sure he understands all the needs for a project, and completes all essential tasks. He picked up systems and processes very fast and fit into the team seamlessly. Anyone would benefit from having Chad on their team. He is knowledgeable, eager to learn and a great worker!",
      },
      {
        id: 2,
        img: Feargal,
        name: "Feargal W.",
        title: "Software Developer @Wag",
        info: "I am so grateful to have observed Chad's rocket trajectory from novice programmer to React expert in the last year. He has taken the bull by the horns and not rested on his laurels since the pandemic began. I was his teacher at Code Tenderloin and he was easily the best in a class of six. He asked 90% of the questions and gave 90% of the suggestions on how to solve problems. He was also the person who was most enthusiastic about coding live in front of the class and he solved all of the toy problems I could throw at him in under twenty minutes.",
      },
      {
        id: 3,
        img: Glen,
        name: "Glen C.",
        title: "Software Engineer @Aws",
        info: "While Chad was a student, I worked with him on several of his projects as he developed his portfolio. I was very impressed with Chad's approach to collaboration, problem solving, and code quality. Chad demonstrated high proficiency in both Python (including Flask) and Javascript (vanilla, jQuery, and React). I have nothing but good things to say about Chad's professionalism, dedication, and abilities as a software engineer.",
      },
      {
        id: 4,
        img: Brooke,
        name: "Brooke M.",
        title: " Former ecommerce and marketing director @VWE",
        info: `While working with Chad at Vintage Wine Estates he was a very dedicated member of the web development team, eager to bring new functionality to our sites and very receptive to feedback. He was incredibly adaptable and could simultaneously work on projects with different project managers, communicating timelines and needs in a professional manner.
  Chad has an incredible sense of humor and always brings positivity to his collaborations. He was a wonderful asset to our team at VWE and would be a great addition to yours.`,
      },
      
      {
        id: 5,
        img: Robert,
        name: "Robert T.",
        title: "Dir. of Web Development @VWE",
        info: `As a front-end web developer, Chad Heisler showed a strong understanding of HTML, CSS, and JavaScript, which allowed him to build, maintain and enhance numerous e-commerce websites.
  One of Chad's greatest strengths is his ability to collaborate effectively with all team members. He communicates clearly, listens actively, and contributes valuable insights to project discussions. He is also adaptable and resourceful, always eager to learn new technologies and techniques to improve his skills and strengthen his contributions to the team.
        
        Furthermore, Chad possesses a strong understanding of accessibility and...`,
      },
      {
        id: 6,
        img: Jeff,
        name: "Jeff H.",
        title: "Former Carpenter @Heisler Construction",
        info: "I had the pleasure of working with Chad at Heisler Construction and Demolition. Chad's adaptability, attention to detail, and clear communication made him an enjoyable person to work under. I look back on my time working with Chad fondly, and I highly recommend working with someone as enthusiastic about the work as he is.",
      },
      
      {
        id: 7,
        img: Winston,
        name: "Winston Y.",
        title: "Former instructor @Code Tenderloin",
        info: `I'm happy to endorse Chad for his impactful contributions as a Teaching Assistant at Code Tenderloin. Chad's unwavering
        commitment to empowering underprivileged students to learn to code is truly commendable. Through his guidance and support, Chad not
        only facilitated learning but also instilled confidence in his students. Chad's efforts undoubtedly made a profound difference
        in the lives of those he has touched at Code Tenderloin, and I have every confidence in his continued success on any team that is fortunate enough to have him.`,
      },
      {
        id: 8,
        img: Garrett,
        name: "Garrett T.",
        title: "Senior Web Developer @VWE",
        info: "I had the pleasure of working with Chad for 2 years at Vintage Wine Estates. His outstanding work ethic, attention to detail, and ability to adapt to challenging situations were truly commendable. Chad consistently brought creativity and valuable insights to our projects, making them an invaluable member of our team. I highly recommend them for any endeavor they pursue.",
      },
      
      
    ];
    
  

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
export const ScrollingTestimonials = () => {
    return (
      <div id="testimonials" className="bg-[#288998] pb-12">
        <div className="mb-8 px-4">
          <p className="text-[#ea6c32] pb-4 Topline text-sm max-w-lg">
              What are they saying?
          </p>
          <h2 className="text-[#454342] Heading text-display pb-5 text-4xl font-semibold">
            Testimonials
          </h2>
          
        </div>
        <div className="p-4 md:mt-12 overflow-x-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-orange-100 to-transparent" />
  
          <div className="flex items-center mb-4">
            <SwipeCarousel />
          </div>
  
          <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-orange-100 to-transparent" />
        </div>
      </div>
    );
  };

 const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === testimonials.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < testimonials.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#288998] md:py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <TestimonialList list={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      
    </div>
  );
};

  const TestimonialList = ({ imgIndex }) => {
  return (
    <>
      {testimonials.map((t, idx) => {
        return (
          <motion.div
            key={t.id}
            
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="shrink-0 w-full border-3 border-[#ea6c32] grid grid-cols-[0rem,_1fr] md:grid-cols-[6rem,_1fr] overflow-hidden relative"
          ><img src={t.img} alt={t.name} className="md:w-36 h-80 object-cover" />
          <div className="bg-[#288998] px-8 text-slate-50 p-4">
            <span className="block text-[#f9eac8] font-semibold text-lg md:text-xl mb-1">{t.name}</span>
            <span className="block mb-3 font-medium">{t.title}</span>
            <p className="block text-sm md:text-lg text-white">{t.info}</p>
          </div>
          <span className="text-7xl absolute top-2 right-2 text-slate-700">
          <RiDoubleQuotesR />
          </span></motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {testimonials.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-[#f9eac8]" : "bg-[#454342]"
            }`}
          />
        );
      })}
    </div>
  );
};



export default ScrollingTestimonials