import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

export const ProjectCard = ({ title, description, demoLink, githubLink }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.button}>
        <a
          href={demoLink}
          className={styles.demoButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Посмотреть демо
        </a>
        <a
          href={githubLink}
          className={styles.githubButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
