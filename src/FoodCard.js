import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function FoodCard(props) {
    const food = props.food;

    return (
        <>
            <Card className="meal">
                <Card.Body>
                    <div className="mealHeader">
                        <Card.Title className="mealName">
                            {food.food_name.toUpperCase()}
                        </Card.Title>
                        <Button variant="primary">+</Button>
                    </div>
                    <div className="textImage">
                        <Card.Text>
                            <ul>
                                <li>
                                    {food.serving_qty} {food.serving_unit} (
                                    {food.serving_weight_grams}g)
                                </li>
                                <li>Calories: {food.nf_calories}</li>
                            </ul>
                        </Card.Text>
                        <Card.Img variant="top" src={food.photo.thumb} />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
export default FoodCard;
