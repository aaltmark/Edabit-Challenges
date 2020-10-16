//Burglary Series (20): Sign Your Name
    //Given an object, prevent new properties from being added to that
    //object, but you should still be able to change the value of the existing properties.



const signYourName = obj => {
    Object.seal(obj); //this is the added line 
    obj.yourSignature = "Whatever";
      obj.spouseSignature = "Nice Try"
    return obj;
  }

//Object.seal
  //Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

  const object1 = {
    property1: 42
  };

  Object.seal(object1);

  //To check if sealed 
  Object.isSealed(obj); // === true

  //Cannot add Properties 
  object1.property2 = 'the friendly duck' // silently doesn't add the property

  //Can edit exist properties 
  object1.property1 = 33 //=> property 1: 33 

  //Cannot delete properties 
  delete object1.property1; //silently doesn't delete 
