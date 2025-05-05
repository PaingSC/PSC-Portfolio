// import { useRef, useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Projects.module.css"; // optional for pulse animation
import "./swiper.css";

const projects = [
  {
    title: "Shinyukai",
    link: "https://shinyukai-r.or.jp/",
    image: "/projects/shinyukai_project.jpg",
    description:
      "This website showcases the excellence of a renowned Japanese hospital group, meticulously crafted by our team at Qualy Myanmar Company.",
  },
  {
    title: "Legacy Cloud",
    link: "https://legacy.ne.jp/",
    image: "/projects/legacy_cloud_project2.jpg",
    description:
      "Collaboratively developed with my team at Qualy Myanmar, this project is tailored for a prestigious Japanese company, seamlessly powered by WordPress.",
  },
  {
    title: "President Station",
    link: "https://presidentstation.com/",
    image: "/projects/president_station_project.jpg",
    description:
      "This website showcases a unique radio program where Japan's top executives and celebrities discuss musical journeys with opera singers and artists. Developed by my team at Qualy Myanmar.",
  },
  {
    title: "Horizon",
    link: "https://www.pari.go.jp/",
    image: "/projects/horizon_project.jpg",
    description:
      "This website highlights a Japanese research institute specializing in ports and airports, powered by Movable Type CMS and developed by my team at Qualy Myanmar.",
  },

  {
    title: "KKLC",
    link: "https://kklc.jp/",
    image: "/projects/kklc_project.png",
    description:
      "This website highlights was developed by my team at Qualy Myanmar.",
  },
  {
    title: "Enishi",
    link: "https://enishi-inc.co.jp/",
    image: "/projects/enishi_project.png",
    description:
      "This website highlights was developed by my team at Qualy Myanmar.",
  },
  {
    title: "Yurikago",
    link: "https://yurikago.or.jp/",
    image: "/projects/medical_corporation_yurikago_project.png",
    description:
      "This website highlights was developed by my team at Qualy Myanmar.",
  },
  {
    title: "Skincare",
    link: "https://gorilla.clinic/operation/skincare/",
    image: "/projects/skincare_project.png",
    description:
      "This website highlights was developed by my team at Qualy Myanmar.",
  },
  {
    title: "アトリエMAR",
    link: "https://yukoumesaki.com/",
    image: "/projects/yukoumesaki_project.png",
    description:
      "This website highlights was developed by my team at Qualy Myanmar.",
  },

  // {
  //   title: "React Quiz",
  //   link: "https://simple-reactquiz.netlify.app/",
  //   image: "/projects/react_quiz.jpg",
  //   description: `Developed in 'The Ultimate React course by Jonas Schmedtmann,' this web application showcases the use of the useReducer hook for state management in React.`,
  // },
];
console.log(projects);

const Projects = () => {
  const swiperRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);

  // const handlePlay = () => {
  //   swiperRef.current?.autoplay?.start();
  //   setIsPlaying(true);
  // };

  // const handlePause = () => {
  //   swiperRef.current?.autoplay?.stop();
  //   setIsPlaying(false);
  // };

  // const handlePrev = () => {
  //   swiperRef.current?.slidePrev();
  // };

  // const handleNext = () => {
  //   swiperRef.current?.slideNext();
  // };

  return (
    <section className={styles.projectSec} id="projects">
      <h3>
        Projects<span>{`Things I've done`}</span>
      </h3>
      <div className={styles.projectSwiper}>
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.description}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className={styles.controls}>
        <button onClick={handlePrev}>◀️</button>
        <button
          onClick={isPlaying ? handlePause : handlePlay}
          className={isPlaying ? "" : "pulse"}
        >
          {isPlaying ? "❚❚ Pause" : "▶️ Play"}
        </button>
        <button onClick={handleNext}>▶️</button>
      </div> */}
    </section>
  );
};

export default Projects;
