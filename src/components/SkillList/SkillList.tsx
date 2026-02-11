import styles from './SkillList.module.css';

interface SkillListProps {
  skills: string[];
}

export const SkillList = ({ skills }: SkillListProps) => {
  return (
    <div className={styles.list}>
      {skills.map((skill, index) => (
        <span key={index} className={styles.item}>
          {skill}
        </span>
      ))}
    </div>
  );
};