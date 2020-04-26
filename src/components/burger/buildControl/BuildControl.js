import React from "react";
import './BuildControl.css'
import Controls from './controls/Controls'

const buildControls = (props) => {
        let ingredients = [
            {label: "Cheese", type: "cheese"},
            {label: "Bacon", type: "bacon"},
            {label: "Salad", type: "salad"},
            {label: "Meat", type: "meat"}
        ];

        return (
            <div className="buildControlContainer">
                {
                    ingredients.map((ingredient) => {
                        return <Controls key={ingredient.label} label={ingredient.label}
                                         addIngredient={() => {
                                             props.addIngredient(ingredient.type)
                                         }}

                                         removeIngredient={()=> props.removeIngredient(ingredient.type)}
                        />
                    })
                }
            </div>
        )
    }
;

export default buildControls;