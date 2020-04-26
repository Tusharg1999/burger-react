import React from "react";
import './Burger.css'
import BurgerIngredients from "./burgerIngredients/BurgerIngredients";

const burger = (props) => {
    const BurgerToBuild = Object.keys(props.ingredients).map((item) => {
            return [...Array(props.ingredients[item])].map((_, i) => {
                console.log(item)
                return <BurgerIngredients key={item + i} type={item}/>
            })
        });
    return (
        <div className="Burger">
            <BurgerIngredients type="breadTop"/>
            {BurgerToBuild}
            <BurgerIngredients type="breadBottom"/>
        </div>
    )
};
export default burger;