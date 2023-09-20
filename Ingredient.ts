import React from 'react';

class Ingredient{
    ingredient: string;
    private amount: string;

    constructor(ingredient: string, amount:string){
        this.ingredient = ingredient;
        this.amount = amount;
    }

    get getIngredient ()  {
        return this.ingredient;        
    }
}

export default Ingredient;