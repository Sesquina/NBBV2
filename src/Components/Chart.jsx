import React from "react";
import "../Styles/chart.css";

function Chart() {
  return (
    <div className="page-container">
      <div className="page-text">Capital Group's Compensation Model
      incentivizes a long term approach.

        </div>
      <div className="industry-standard-timeline-box">
        <div className="timeline-label">1</div>

      </div>
      <div className="timeline-title">Industry Standard</div>


      <div className="cg-standard-timeline-box">
        <div className="timeline-label">1</div>
      </div>
      <div className="cg-standard-timeline-three">
        <div className="timeline-label">3 </div>
      </div>
      <div className="cg-standard-timeline-five">
        <div className="timeline-label">5 </div>
      </div>
      <div className="cg-standard-timeline-eight">
        <div className="timeline-label">8 </div>
      </div>

      <div className="cg-timeline-title">Capital Group</div>
    </div>
  );
}

export default Chart;