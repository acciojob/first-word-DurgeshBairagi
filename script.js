function firstWord(str) {
    if (str === "" || str.indexOf(" ") === -1) {
        return str; 

    return str.substring(0, str.indexOf(" "));
}



const str = prompt("Enter String:");
alert(firstWord(str));
