import { skillsItem } from "@/data/static-data";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>私のスキル</h1>

        <div className={styles.skills}>
          {skillsItem &&
            skillsItem.map((skill) => (
              <div className={styles.skill}>{skill.title}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
