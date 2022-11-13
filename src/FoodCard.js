import Card from "react-bootstrap/Card";

function FoodCard() {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Jalapeño</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Serving Quantity: Serving Unit</li>
                            <li>Calories: </li>
                            <li></li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}
