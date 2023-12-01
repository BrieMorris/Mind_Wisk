import React from "react";
import "./ProgressBar.css";

function ProgressBar({ level }) {
  let progressPercentage, progressBarColor, progressText;

  switch (level) {
    case "Insufficient":
      progressPercentage = 30;
      progressBarColor = "red";
      progressText = "Insufficient";
      break;
    case "Low":
      progressPercentage = 60;
      progressBarColor = "orange";
      progressText = "Low";
      break;
    case "Plenty":
      progressPercentage = 90;
      progressBarColor = "green";
      progressText = "Plenty!";
      break;
    default:
      progressPercentage = 0; // Default
      progressBarColor = "grey";
      progressText = "";
  }

  return (
    <div>
      <div id="countdown-wrap">
        <div id="glass">
          <div
            id="progress"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: progressBarColor,
            }}>
            {progressText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
