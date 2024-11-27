import "./Skills.css";
import skillsData from "./SkillsData";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-list">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3 style={{ color: skillCategory.color }}>
                {skillCategory.category}
              </h3>
              <div className="skill-items">
                {skillCategory.items.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
