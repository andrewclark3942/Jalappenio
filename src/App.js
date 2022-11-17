import logo from "./logo.svg";
import pepper from "./pepper.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DailyProgress from "./DailyProgress";
import Button from "react-bootstrap/Button";
import AddMeal from "./AddMeal";

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossorigin="anonymous"
/>;

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Jalappeño
                    </a>
                    <div className="logoBackground">
                        <img src={pepper} alt="Jalapeño Logo" id="pepperLogo" />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Set Goals
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Settings
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Account Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sign Out
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <main>
                <section id="progressBars">
                    <h2>Today's Intake</h2>
                    <DailyProgress></DailyProgress>
                </section>
                <section id="meals">
                    <div id="mealsHeader">
                        <h2>Today's Meals</h2>
                        <AddMeal></AddMeal>
                    </div>
                    <div className="meal">
                        <div className="mealHeader">
                            <h3 className="mealName">Chicken Salad</h3>
                        </div>
                        <div className="mealBody">
                            <p className="mealData">Servings: 1 serving</p>
                            <p className="mealData">Calories: 210</p>
                            <p className="mealData">Carbohydrates: 35g</p>
                            <p className="mealData">Protein: 50g</p>
                            <p className="mealData">Fat: 15g</p>
                        </div>
                    </div>
                    <div className="meal">
                        <div className="mealHeader">
                            <h3 className="mealName">Feta Pasta</h3>
                        </div>
                        <div className="mealBody">
                            <p className="mealData">Servings: 2 serving</p>
                            <p className="mealData">Calories: 450</p>
                            <p className="mealData">Carbohydrates: 60g</p>
                            <p className="mealData">Protein: 10g</p>
                            <p className="mealData">Fat: 25g</p>
                        </div>
                    </div>
                </section>
                <section></section>
            </main>
        </div>
    );
}

export default App;
