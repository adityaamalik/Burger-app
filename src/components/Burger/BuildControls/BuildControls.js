import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}         //adding 
                removed={() => props.ingredientRemoved(ctrl.type)}     //removing ingredient
                disabled={props.disabled[ctrl.type]} />               //disable button if no ingredient is present
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>      
    </div>               //disable order button if count ingredient is zero   // onclick display modal
);


export default buildControls;
//ok