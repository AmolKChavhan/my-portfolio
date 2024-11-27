import "./About.css";
import aboutContent from "./AboutContent";

const About = () => {
  const { description, image, alt, cvFile } = aboutContent;

  const getFileExtension = (fileName) => {
    return fileName.split('.').pop().toLowerCase();
  };

  const fileExtension = getFileExtension(cvFile);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a 
            href={cvFile} 
            download={`CV-Amol-Chavhan.${fileExtension}`} 
            className="download-button"
          >
            Download CV
          </a>
        </div>

        <div className="about-image">
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  );
};

export default About;
