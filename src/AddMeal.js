import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import FoodCardList from "./FoodCardList";

function AddMeal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [foods, setFoods] = useState({ foods: [] });

    return (
        <>
            <Button
                variant="primary"
                className="primaryButton"
                onClick={handleShow}
            >
                + Meal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Meal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Search for food</Form.Label>
                            <Form.Control
                                id="foodSearch"
                                type="input"
                                placeholder="ex. Jalapeño"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        className="primaryButton"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        className="primaryButton"
                        onClick={() =>
                            getFood(document.querySelector("#foodSearch").value)
                        }
                    >
                        Search
                    </Button>
                </Modal.Footer>
                <FoodCardList foods={foods} />
            </Modal>
        </>
    );

    //API URL: https://trackapi.nutritionix.com/v2/natural/nutrients
    async function getFood(food) {
        try {
            const res = await axios({
                method: "POST",
                url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
                data: {
                    query: food,
                    timezone: "US/Eastern",
                },
                headers: {
                    "Content-Type": "application/json",
                    "x-app-id": "5b0c0774",
                    "x-app-key": "56390e237a157eb7fd5f9b927595f114",
                },
            });
            console.log(res.data);
            setFoods(res.data);
        } catch (err) {
            console.error(err);
        }
    }
}
export default AddMeal;
