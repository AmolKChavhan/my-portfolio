import { useState } from "react";
import "./Projects.css";
import {
  completedProjects,
  ongoingProjects,
  upcomingProjects,
} from "./ProjectData";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const tabs = [
    { key: "completed", label: "Completed", projects: completedProjects },
    { key: "ongoing", label: "Ongoing", projects: ongoingProjects },
    { key: "upcoming", label: "Upcoming", projects: upcomingProjects },
  ];

  const activeProjects =
    tabs.find((tab) => tab.key === activeTab)?.projects || [];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
              aria-current={activeTab === tab.key ? "true" : "false"}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="projects-list">
          {activeProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
