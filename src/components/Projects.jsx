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
];

console.log(projects);

function Projects() {
  return (
    <section id="projects">
      <h3>
        Projects<span>Things I’ve built so far</span>
      </h3>

      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.name}>
            <a href="">
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
      </ul>
    </section>
  );
}

export default Projects;
