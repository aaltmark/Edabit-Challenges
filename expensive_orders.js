// Expensive Orders 
    // Write a function that has two parameters: orders and cost. 
    // Return any orders that are greater than the cost
    // Examples -- 
        //expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)➞ { "a": 3000, "c": 1050 }

function expensiveOrders(orders, cost) {
    //temp obj to add keys into 
    let obj = {}

    //use IN to iterate through orders object 
    for (let element in orders) {
        // if the value at the given key is greater than cost passed in 
        if (orders[element] > cost) {
            // add it to our object and set value = the value in orders 
            obj[element] = orders[element]
        }
    }
    return obj
}

// Another Solution 
function expensiveOrders (orders, cost) {
    return Object.fromEntries( //make an object from the following key/value pairs 
        Object.entries(orders).filter(([key, val]) => val > cost)
            //Obj.entries will create an array with [[key, value], [key,value]] passed in 
            //only include the ones where value > cost passed in
    )
}