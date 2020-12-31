import React from "react";
import './Burger.css'
import BurgerIngredients from "./burgerIngredients/BurgerIngredients";

const burger = (props) => {
    let BurgerToBuild = Object.keys(props.ingredients).map((item) => {
            return [...Array(props.ingredients[item])].map((_, i) => {
                console.log(item);
                return <BurgerIngredients key={item + i} type={item}/>
            })
        })
        .reduce((acc,currentValue)=>acc.concat(currentValue),[]);
        if (BurgerToBuild.length===0){
           BurgerToBuild=<h1>Start Adding Ingredients</h1>
        }
    console.log(BurgerToBuild)
    return (
        <div className="Burger">
            <BurgerIngredients type="breadTop"/>
            {BurgerToBuild}
            <BurgerIngredients type="breadBottom"/>
        </div>
    )
};
export default burger;