//Emotify Sentence 
    //Create a function that changes specific words into emoticons. 
    //Examples---
        //emotify("Make me smile") ➞ "Make me :D"
        //emotify("Make me grin") ➞ "Make me :)"
        //emotify("Make me sad") ➞ "Make me :("


function emotify(str) {
    //regex expressions -- rewrite the arg passed in based on replace searches 
	str = str.replace(/smile/g, ':D'); // '/g' does a global search 
	str = str.replace(/grin/g, ':)'); //put the word you are looking for /between/ 
	str = str.replace(/sad/g, ':(');
	str = str.replace(/mad/g, ':P');
	
	return str;
}