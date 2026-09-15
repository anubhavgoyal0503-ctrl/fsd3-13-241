/*write a function to take  number between 0 to 9 and return in words through arrow gunction*/


console.log(numberToWord(5));
const numberToWord = (num) => {
  switch (num) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid Number";
  }
};




// Function 1: Convert a single digit into words
const numberToWord = (num) => {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid";
    }
};

// Function 2: Convert a complete number into words
const showNumberInWords = (num) => {
    let result = "";

    let digits = String(num);

    for (let digit of digits) {
        result = result + numberToWord(Number(digit)) + " ";
    }

    return result;
};

console.log(showNumberInWords(12345));