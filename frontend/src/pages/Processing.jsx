import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Processing.css";
import ProgressBar from "../components/common/ProgressBar";
import API from "../services/api";
function Processing() {

    const navigate = useNavigate();

    useEffect(() => {

        const timer = setTimeout(() => {

            navigate("/result");

        }, 4000);

        return () => clearTimeout(timer);

    }, [navigate]);

    return (

        <div className="processing-page">

            <div className="processing-card">

            <ProgressBar
                step={4}
                totalSteps={4}
            />

            <h1>Analyzing Assessment</h1>

            <p>
                Our AI is analyzing the student's reading and writing performance.
            </p>

            <div className="loader"></div>

                <div className="steps">

                    <div className="step">
                        ✅ Reading data received
                    </div>

                    <div className="step">
                        ✍️ Processing handwriting...
                    </div>

                    <div className="step">
                        🤖 Running AI model...
                    </div>

                    <div className="step">
                        📄 Generating assessment report...
                    </div>

                </div>

            </div>

        </div>

    );

}

export default Processing;