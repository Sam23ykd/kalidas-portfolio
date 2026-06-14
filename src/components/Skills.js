import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2>Core Technical Skills</h2>
        <p>TOOLS, PLATFORMS & PRACTICES I USE DAILY</p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Data Engineering & Pipelines</h3>
          <p>
            Azure Data Factory, Azure Synapse Analytics, Microsoft Fabric,
            Databricks, Apache Spark / PySpark, dbt, SSIS, AWS Glue
          </p>
        </div>
        <div className="skill-card">
          <h3>Cloud Platforms</h3>
          <p>
            Azure (Synapse, Data Lake, ADF, Fabric), AWS (S3, Redshift, Kinesis),
            Snowflake, Databricks, Azure SQL
          </p>
        </div>
        <div className="skill-card">
          <h3>Languages & Modelling</h3>
          <p>
            SQL (T-SQL, HQL, Spark SQL), Python (Pandas, Azure SDKs), Dimensional
            Modelling, Kimball Methodology, Star Schema
          </p>
        </div>
        <div className="skill-card">
          <h3>Analytics & Visualisation</h3>
          <p>
            Power BI (semantic models, DAX), Tableau, ThoughtSpot, Qlik Sense,
            MicroStrategy, SSRS
          </p>
        </div>
        <div className="skill-card">
          <h3>Software Engineering & DevOps</h3>
          <p>
            Git, CI/CD, Terraform, Azure CLI, automated testing, modular pipeline
            design, infrastructure-as-code
          </p>
        </div>
        <div className="skill-card">
          <h3>Governance & Quality</h3>
          <p>
            Data governance frameworks, GDPR compliance, data lineage, access
            control, data quality frameworks, Azure Log Analytics
          </p>
        </div>
        <div className="skill-card">
          <h3>Delivery & Collaboration</h3>
          <p>
            Agile / Scrum, JIRA, stakeholder management, client-facing consulting,
            documentation, Medallion Architecture
          </p>
        </div>
        <div className="skill-card">
          <h3>Certifications</h3>
          <p>
            Microsoft Certified: Azure Data Engineer • Azure Solutions Architect •
            AWS Cloud Practitioner • Snowflake Pro • dbt
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
