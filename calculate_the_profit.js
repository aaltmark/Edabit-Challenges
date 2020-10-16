//Calculate the Profit 
    //Calculate the total profit made on the sales of a product. 
    //Given an object containing the cost per unit, sell per unit, and the starting inventory. 
    //Return the total profit made, rounded to the nearest dollar.
    //Example --- 
        //profit({
        //     costPrice: 32.67,
        //     sellPrice: 45.00,
        //     inventory: 1200
        // }) ➞ 14796

//used object destructuring -- since an object is passed in i can grab these properties 
function profit({ costPrice, sellPrice, inventory }) { //restructuring the args in an obj is important 
    //rounds to nearest whole dollar and run simple calculations 
    return Math.round((sellPrice - costPrice) * inventory)
}