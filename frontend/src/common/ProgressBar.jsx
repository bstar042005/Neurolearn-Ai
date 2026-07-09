import "../../styles/ProgressBar.css";

function ProgressBar({ step, totalSteps }) {
  const percentage = (step / totalSteps) * 100;

  return (
    <div className="progress-container">

      <div className="progress-header">
        <span>
          Step {step} of {totalSteps}
        </span>

        <span>
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

    </div>
  );
}

export default ProgressBar;