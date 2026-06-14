import React from "react";

const Experience = () => {
  const roles = [
    {
      title: "Senior Data Engineer",
      company: "IRIS Group",
      location: "Manchester, UK",
      dates: "Nov 2025 – Present",
      bullets: [
        "Designed and built scalable data ingestion pipelines using Azure Synapse Analytics and Azure Data Factory, handling high-volume sources with complex SQL and Python transformations.",
        "Architected Bronze layer Medallion data architecture over a 10TB dataset in Azure Data Lake Storage, accelerating analytics readiness by 35% through daily automated pipeline runs.",
        "Led end-to-end cloud migration from on-premises SQL Server to Azure, reducing overnight job execution time by 40% using ADF and Synapse orchestration.",
        "Implemented CI/CD and infrastructure-as-code using Terraform and Azure CLI, automating resource provisioning across five environments and cutting manual setup time by 75%.",
        "Validated source-to-target schema mappings, designed staging tables and stored procedures, ensuring data quality and lineage throughout the migration lifecycle.",
        "Collaborated with stakeholders to translate business requirements into technical pipeline designs, delivering well-documented, maintainable data products."
      ]
    },
    {
      title: "Azure Data Engineer",
      company: "Assimil8 Ltd(Parkingeye)",
      location: "Manchester, UK",
      dates: "Jan 2021 – Oct 2025",
      bullets: [
        "Designed and maintained end-to-end data pipelines across Azure Data Factory, Databricks and Snowflake, integrating 10+ business data sources to support analytics and BI products.",
        "Implemented dbt models in Snowflake across 6 projects, enabling near real-time data transformation and reducing ETL processing effort by 30%.",
        "Engineered Python-based ETL scripts using Pandas and Azure SDKs, automating nightly workflows across 10+ ADF pipelines and boosting throughput by 40%.",
        "Designed AWS S3 data lake architecture and automated Synapse data flows for cross-cloud ingestion into Azure SQL DB, improving data loading speed by 30%.",
        "Built monitoring and alerting solutions using Azure Log Analytics and Application Insights, enabling rapid detection and resolution of pipeline issues.",
        "Led Azure cloud architecture design, delivering 15% cost reduction while migrating 30TB of historical data and improving processing performance by 35%.",
        "Automated data archival and retention policies, improving GDPR compliance and reducing long-term storage overhead.",
        "Applied software engineering best practices including modular pipeline design, Git-based version control and CI/CD principles."
      ]
    },
    {
      title: "Senior Azure Technical Consultant",
      company: "Virtusa UK Ltd (Lloyds Banking Group) ",
      location: "London, UK",
      dates: "Jan 2019 – Jan 2021",
      bullets: [
      "Delivered Silver and Gold layer implementations in the Azure Data Lake Medallion architecture using ADF and",
      "Databricks, improving downstream query speeds by 35% and elevating report accuracy by 28%.",
      "Architected and deployed scalable data warehouses using Azure Synapse, unifying 15+ disparate data sources",
      "and achieving 32% improvement in cross-department analytics performance.",
      "Integrated RESTful API connections into Azure Data Factory pipelines for 15+ critical data sources, accelerating data ingestion by 40%.",
      "Engineered ETL audit and reconciliation frameworks, improving data lineage tracking and accuracy across 15+ key data loads.",
      "Collaborated with business stakeholders to translate KPI requirements into Power BI dashboards and reports,",
      "supporting regulatory compliance and operational decision-making.",
      "Resolved 15+ daily production issues on the CDL data platform, improving system stability and pipeline reliability in a live service environment.",
      ]
    },
    {
      title: "Data Engineer (Azure / AWS / Snowflake) ",
      company: "Virtusa UK Ltd (CITI Group) ",
      location: "Belfast, UK",
      dates: "Apr 2018 – Jan 2019",
      bullets: [
      "Migrated 5+ SQL Server systems to AWS Redshift, improving Power BI report performance by 40% through",
       "optimised schema design and query tuning.",
      "Built 10+ Power BI dashboards for finance stakeholders, delivering clear data visualisations to support data-driven decision-making.",
      "Engineered PowerShell scripts to automate data transfer across Azure and AWS, reducing manual intervention by 40% across 17+ daily ETL tasks.",
      "Developed automated SSIS pipelines, reducing manual data movement effort by 25% and improving pipeline ",
      "consistency from SQL Server to Azure SQL DB.",
      ]
    },
      {
      title: "Senior Software System Analyst ",
      company: "Accenture (Novartis Pharmaceuiticals) ",
      location: "Switzerland, EU",
      dates: "Mar 2014 – Mar 2018",
      bullets: [
      "Designed SSIS data ingestion pipelines from 5+ heterogeneous sources including Oracle, improving data flow",
       "consistency and processing speed for downstream analytics.",
       "Authored complex SQL stored procedures and optimised query performance by 15%, improving database",
        "throughput for critical business applications.",
      "Managed ETL scheduling using SQL Server Agent, maintaining 99% data availability SLA for daily and monthly business reporting.",
      "Delivered MicroStrategy reporting solutions, improving data consistency by 10% and enabling stakeholder self-service analytics.",
     
      ]
    },
    {
      title: "Senior Software Engineer ",
      company: "UST ( MAERSKLINE Logictics) ",
      location: "Denmark, EU",
      dates: "Aug 2011  – Feb 2014",
      bullets: [
      "Developed advanced SQL queries and SSRS reports with parameterisation and drill-through functionality,",
       "supporting data-driven decision-making across project teams.",
       "Implemented SSIS transformation components (Derived Column, Lookup, SCD) to load cleansed, validated data",
        "into the data warehouse in line with business rules.",
       "Deployed and scheduled SSIS/SSRS solutions across multiple servers, ensuring timely and accurate data delivery",
        "to project stakeholders.",
     
      ]
    }
    // You can add the rest of the roles here like before
  ];

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2>Experience</h2>
        <p>END-TO-END DELIVERY ACROSS BANKING, FINTECH & ENTERPRISE</p>
      </div>
      <div className="timeline">
        {roles.map((role, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>
                {role.title} <span>@ {role.company}</span>
              </h3>
              <p className="timeline-meta">
                {role.location} • {role.dates}
              </p>
              <ul>
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
