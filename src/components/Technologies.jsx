import styles from "./Technologies.module.css";

const languages = [
  {
    image: "/langunge_icons/javascript_icon.svg",
    altName: "JavaScript",
  },
  {
    image: "/langunge_icons/typescript.svg",
    altName: "TypeScript",
  },
  {
    image: "/langunge_icons/python_icon.svg",
    altName: "Python",
  },
];

const frontTechnologies = [
  {
    image: "/technology_icon/html_icon.svg",
    altName: "HTML5",
  },
  {
    image: "/technology_icon/css_icon.svg",
    altName: "CSS3",
  },
  {
    image: "/technology_icon/tailwind_icon.svg",
    altName: "TailwindCSS",
  },
  {
    image: "/technology_icon/sass_icon.svg",
    altName: "SASS(SCSS)",
  },
  {
    image: "/technology_icon/react_icon.svg",
    altName: "ReactJS",
  },
  {
    image: "/technology_icon/jquery_icon.svg",
    altName: "JQuery",
  },
  {
    image: "/technology_icon/alpinejs_icon.svg",
    altName: "AlpineJS",
  },
];

const developmentTools = [
  {
    image: "/tool_icons/git_icon.svg",
    altName: "ReactJS",
  },
  {
    image: "/tool_icons/github_icon.svg",
    altName: "JQuery",
  },
  {
    image: "/tool_icons/vscode_icon.svg",
    altName: "AlpineJS",
  },
];

function Technologies() {
  return (
    <section className={styles.techSection} id="technologies">
      <h3>
        Technologies<span>{`Technologies I've been working with`}</span>
      </h3>
      <div className={styles.skillSet}>
        <div>
          <h4 className={styles.skillTitle}>Programming Languages</h4>
          <ul className={styles.skillList}>
            {languages.map((language) => (
              <li key={language.altName}>
                <img src={language.image} alt={language.altName} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Front-end Technologies</h4>
          <ul className={styles.skillList}>
            {frontTechnologies.map((tech) => (
              <li key={tech.altName}>
                <img src={tech.image} alt={tech.altName} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Development tools</h4>
          <ul className={styles.skillList}>
            {developmentTools.map((tool) => (
              <li key={tool.altName}>
                <img src={tool.image} alt={tool.altName} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
