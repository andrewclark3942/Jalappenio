import FoodCard from "./FoodCard";

function FoodCardList(props) {
    const foods = props.foods.foods;
    console.log(foods);
    return (
        <>
            <div className="foodCardList">
                {foods.map((food) => (
                    <FoodCard food={food} />
                ))}
            </div>
        </>
    );
}
export default FoodCardList;
