import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Metadata-Driven Pipeline Framework",
      context: "Azure Data Factory • Azure Data Lake • Enterprise data platform",
      bullets: [
        "Designed a fully automated, metadata-driven data pipeline framework in Azure Data Factory.",
        "Reduced pipeline development effort by ~40% and improved reusability across multiple data domains.",
        "Enabled rapid onboarding of new data sources through configuration rather than code changes."
      ]
    },
    {
      title: "Real-Time Analytics Platform (AWS)",
      context: "AWS Kinesis • Redshift • Event-driven analytics",
      bullets: [
        "Architected a real-time event-driven analytics platform using AWS Kinesis and Redshift.",
        "Enabled sub-minute data freshness for operational decision-making.",
        "Delivered monitoring and alerting to ensure reliability at scale."
      ]
    },
    {
      title: "Enterprise Data Governance Implementation",
      context: "Azure • AWS • Snowflake • GDPR",
      bullets: [
        "Led implementation of an enterprise data governance framework across cloud environments.",
        "Established data quality standards, access controls and lineage tracking.",
        "Implemented GDPR-compliant data handling policies and automated retention processes."
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Key Projects</h2>
        <p>SELECTED WORK THAT SHOWS HOW I BUILD DATA PLATFORMS</p>
      </div>
      <div className="cards-grid">
        {projects.map((p, i) => (
          <article key={i} className="card project-card">
            <h3>{p.title}</h3>
            <p className="project-context">{p.context}</p>
            <ul>
              {p.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
