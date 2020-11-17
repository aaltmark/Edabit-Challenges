// Flip the Boolean 
    // Create a fn that reverses a boolean value or returns 'boolean expected' 
    // Examples --
        /* 
        reverse(true) ➞ false
        reverse(false) ➞ true
        reverse(0) ➞ "boolean expected"
        */
        
function reverse(bool) {
	if (typeof bool !== 'boolean') { //if we are not passed a boolean
		return 'boolean expected'
	} //if we are passed a boolean 
	return !bool //return the flipped value 
}

// or use switch operator 
function reverse2(bool) {
    return typeof bool === 'boolean' ? !bool : 'boolean expected'
  }