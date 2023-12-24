function firstWord(str) {
  // your code here
	if (str.length === 0) {
        return str;
    }

    // Find the index of the first space in the string
    const spaceIndex = str.indexOf(' ');

    // If no space is found, return the entire string
    if (spaceIndex === -1) {
        return str;
    }

    // Extract and return the first word (characters up to the first space)
    return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
