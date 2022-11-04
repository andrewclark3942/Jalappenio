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
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Jalappeño
                    </a>
                    <div class="logoBackground">
                        <img src={pepper} alt="Jalapeño Logo" id="pepperLogo" />
                    </div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Set Goals
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    About
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Settings
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Account Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Sign Out
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                class="btn btn-outline-success"
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
                    <div class="meal">
                        <div class="mealHeader">
                            <h3 class="mealName">Chicken Salad</h3>
                        </div>
                        <div class="mealBody">
                            <p class="mealData">Servings: 1 serving</p>
                            <p class="mealData">Calories: 210</p>
                            <p class="mealData">Carbohydrates: 35g</p>
                            <p class="mealData">Protein: 50g</p>
                            <p class="mealData">Fat: 15g</p>
                        </div>
                    </div>
                    <div class="meal">
                        <div class="mealHeader">
                            <h3 class="mealName">Feta Pasta</h3>
                        </div>
                        <div class="mealBody">
                            <p class="mealData">Servings: 2 serving</p>
                            <p class="mealData">Calories: 450</p>
                            <p class="mealData">Carbohydrates: 60g</p>
                            <p class="mealData">Protein: 10g</p>
                            <p class="mealData">Fat: 25g</p>
                        </div>
                    </div>
                </section>
                <section></section>
            </main>
        </div>
    );
}

export default App;
