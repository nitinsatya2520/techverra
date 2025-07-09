import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import "./OrgChart.css";

const OrgChart = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const chartContainerRef = useRef(null);

  const orgChartDefinition = `
    flowchart TD
      MD["Founder & Managing Director<br/>Kadavakollu Nitin Satya"]
      COO["Co-Founder & Director – COO<br/>Kukkala Jai Kishan"]

      MD --> COO
      COO --> Technology["Technology Department"]
      COO --> Creative["Creative / Film Department"]
      COO --> Marketing["Marketing & Sales Department"]
      COO --> Ops["Operations & HR Department"]

      subgraph Technology
        CTO["Chief Technology Officer"]
        FE["Frontend Developer"]
        BE["Backend Developer"]
        FS["Full-Stack Developer"]
        QA["QA Engineer"]
        DevOps["DevOps Engineer"]
        AI["AI/ML Engineer"]
        Cyber["Cyber Security Analyst"]
        CTO --> FE & BE & FS & QA & DevOps & AI & Cyber
      end

      subgraph Creative
        CD["Creative Director"]
        Script["Scriptwriter"]
        Video["Video Editor"]
        Graphic["Graphic Designer"]
        Motion["Animator"]
        CD --> Script & Video & Graphic & Motion
      end

      subgraph Marketing
        CMO["Chief Marketing Officer"]
        DMM["Digital Marketing Manager"]
        SEO["SEO/SEM Specialist"]
        SMM["Social Media Manager"]
        Writer["Content Writer"]
        Sales["Sales Executive"]
        CMO --> DMM & SEO & SMM & Writer & Sales
      end

      subgraph Ops
        CFO["Chief Financial Officer"]
        HR["HR Manager"]
        PM["Project Manager"]
        Analyst["Business Analyst"]
        Support["Technical Support Executive"]
        CFO --> HR & PM & Analyst & Support
      end
  `;

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false });
    if (fullscreen && chartContainerRef.current) {
      const id = "techverra-org-chart";
      mermaid.render(id, orgChartDefinition).then(({ svg }) => {
        chartContainerRef.current.innerHTML = svg;
      });
    }
  }, [fullscreen]);

  return (
    <div className="org-chart-container">
      <button className="toggle-btn" onClick={() => setFullscreen(true)}>
        View Org Chart Fullscreen
      </button>

      {fullscreen && (
        <div className="fullscreen-overlay">
          <button className="close-btn" onClick={() => setFullscreen(false)}>
            Close
          </button>
          <div ref={chartContainerRef}></div>
        </div>
      )}
    </div>
  );
};

export default OrgChart;
