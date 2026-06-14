import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-kicker">Senior Data Engineer</p>
        <h1>Kalidas Yerravarapu</h1>
        <p className="hero-subtitle">
          Designing and delivering cloud-native data platforms on Azure, AWS,
          Microsoft Fabric, Databricks and Snowflake – from raw ingestion to
          analytics-ready Lakehouse.
        </p>
        <div className="hero-meta">
          <span>Manchester, UK</span>
          <span>Microsoft Certified: Azure Data Engineer & Solutions Architect</span>
          <span>AWS Cloud Practitioner • Snowflake Pro • dbt</span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View key projects
          </a>
          <a href="mailto:kalidaas.121@gmail.com" className="btn-secondary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
