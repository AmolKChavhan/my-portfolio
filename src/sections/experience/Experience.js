import { experienceData } from "./ExperienceData";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experienceData.map((item) => (
          <div key={item.id}>
            <h3 className="role">{item.role}</h3>
            <p className="company">{item.company}</p>
            <p className="duration">{item.duration}</p>
            <ul className="responsibilities">
              {item.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
