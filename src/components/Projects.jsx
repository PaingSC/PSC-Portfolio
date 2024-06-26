import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Projects.module.css";

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
    link: "https://shinyukai-r.or.jp/",
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

function Projects() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplayy: true,
    autoplaySpeed: 3500,
  };
  return (
    <section id="projects" className={styles.projectSec}>
      <h3>
        Projects<span>Things I’ve built so far</span>
      </h3>

      <ul className={styles.projectList}>
        <Slider {...settings}>
          {projects.map((project, i) => (
            <li key={i}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt="" />
                </div>
                <div className={styles.description}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </a>
            </li>
          ))}
        </Slider>
      </ul>
    </section>
  );
}

export default Projects;

<a href="#">
  <img src="/cover" alt="" />
</a>;
