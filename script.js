function firstWord(str) {
    // Check if the string is empty or doesn't contain a space
    if (str === "" || str.indexOf(" ") === -1) {
        return str; // Return the entire string
    }

    // Find the first space and return the substring up to that point
    return str.substring(0, str.indexOf(" "));
}


// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(str));
