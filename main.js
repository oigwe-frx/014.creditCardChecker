// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Functions below:


//Luhn's Algorithm

//Function called to prep and transforms the credit card number array. The function will take in the array parameter. Perform the first two steps of Luhn's algorithm, and return a transformed array. 
const luhnsArrayTransform = (array) => {
    let temp = [];

  for(let i = array.length-1; i>=0; i-=2) {
      let elementToHold = array[i];
      temp.push(elementToHold);
  
      if(array[i-1]) {
        let elementToDouble = (array[i-1])* 2;
          if(elementToDouble > 9) {
             elementToDouble -= 9;
             temp.push(elementToDouble)
        } else { temp.push(elementToDouble)}
      }
  }
  return temp;
}

//Function called to take the array that was prepped and transformed by luhnsArrayTransform() and determine if the array holds a valid/invalid credit card number. The function performs the last two steps of Luhn's algorithm. If the credit card number is valid, the function returns true. Otherwise, false. 
const luhnsDetermination = (array) => {
  let arrayAddition = array.reduce((acc, val) => {return acc + val}, 0);
  if(arrayAddition % 10 === 0) {
    return true
  } else { return false;}
};


// ------------------------------

// The function findInvalidCards takes in an array (nested arrays) of credit card numbers. The array is then filtered. Each iteration of the filter loop passes the the sub array element (credit card number) into the validateCred function and determines if the number is valid or invalid. The findInvalidCards function will return a nested array of only invalid credit card numbers. 

const validateCred = (array) => {
    let transformed = luhnsArrayTransform(array);
    return luhnsDetermination(transformed);
};


const findInvalidCards = (nestedArray) => {
  let isInValid = nestedArray.filter((element) => {
    return !validateCred(element);
    });

  return isInValid;
}


// The function invalidCardCompanies takes in a nested array as a parameter. The nested array should be an array of only invalid card numbers. The function will return a singular array of credit card companies associated with the invalid card numbers.

const invalidCardCompanies = (nestedArray) => {
    let invalidCompanies = {};

    nestedArray.forEach((element) => {
      let idIndex = element[0]
          switch(idIndex) {
            case 3:
              invalidCompanies[3] = 'Amex';
              break;
             case 4:
              invalidCompanies[4] = 'Visa';
              break; 
            case 5:
              invalidCompanies[5] = 'Mastercard';
              break;   
            case 6:
              invalidCompanies[6] = 'Discover';
              break;   
            default:
              console.log('Company not Found');
              break;    
          }

    })
    
  return Object.values(invalidCompanies)
};



const invalidCards = findInvalidCards(batch)
const companies = invalidCardCompanies(invalidCards);

console.log("Invalid Card Companies", companies)
console.log("Invalid Card Numbers", invalidCards)
