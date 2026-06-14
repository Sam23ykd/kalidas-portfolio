import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About</h2>
        <p>CLOUD DATA ENGINEERING • LAKEHOUSE • MEDALLION ARCHITECTURE</p>
      </div>
      <div className="section-body two-column">
        <p>
          I am a Senior Data Engineer with 12+ years of experience designing and
          delivering end-to-end data engineering solutions across{" "}
          <strong>Azure</strong>, <strong>AWS</strong>,{" "}
          <strong>Microsoft Fabric</strong>, <strong>Databricks</strong>, and{" "}
          <strong>Snowflake</strong>.
        </p>
        <p>
          I specialise in building <strong>scalable data pipelines</strong>,{" "}
          <strong>Medallion architectures (Bronze/Silver/Gold)</strong>, and{" "}
          <strong>Lakehouse platforms</strong> using SQL, Python, dbt and
          Spark/PySpark. My work is grounded in cloud-native CI/CD, data
          governance and GDPR compliance, delivering analytics products in{" "}
          <strong>Agile, client-facing environments</strong>.
        </p>
        <p>
          I enjoy partnering with stakeholders to translate business requirements
          into robust data models and visualisations using{" "}
          <strong>Power BI</strong> and <strong>Tableau</strong>, ensuring that
          data platforms not only run efficiently but also{" "}
          <strong>answer the right questions</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
