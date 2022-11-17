import ProgressBar from "react-bootstrap/ProgressBar";

function DailyProgress() {
    return (
        <div>
            <h3 className="progressBarHeader">Calories</h3>
            <ProgressBar variant="success" now={40} key={1} />
            <h3 className="progressBarHeader">Carbohydrates</h3>
            <ProgressBar variant="info" now={20} key={2} />
            <h3 className="progressBarHeader">Protein</h3>
            <ProgressBar variant="danger" now={60} key={3} />
            <h3 className="progressBarHeader">Fat</h3>
            <ProgressBar variant="warning" now={80} key={4} />
        </div>
    );
}

export default DailyProgress;
