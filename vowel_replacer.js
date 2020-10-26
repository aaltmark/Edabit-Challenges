// Vowel Replacer 
    // Given a string and a special character, replace all vowels with the char
    // replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"

function replaceVowels(str, ch) {
    // replace any vowels in the entire string (g) with the ch passed in 
	return str.replace(/[aeoiu]/g, ch)
}