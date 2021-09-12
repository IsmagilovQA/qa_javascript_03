//Solve a task with logical operators in such a way as on example:

//Example:
// let chocolate = true;
// let strawberry = false;
// let apple = true;
// let caramel = true;

// case 1: I want ((strawberry and chocolate) or apple) or no caramel
// let icecream = ((strawberry && chocolate) || apple) || !caramel;
// console.log("case 1: " + icecream);


// case 2: I want (strawberry and (chocolate or apple)) or without caramel
// icecream = (strawberry && (chocolate || apple)) || !caramel;
// console.log("case 2: " + icecream);

//______________________________________________________________

//TASKS:
//1. case 1: I want pizza and pasta and (no capers or no tomatos); => the result is false
//  case 2: I want ((pizza and tomatos) or (pasta and  capers and no tomatos)); => the result is true

// let pizza = true;
// let pasta = false;
// let capers = true;
// let tomatos = true;

// let result = pizza && pasta && (!capers || !tomatos);
// console.log('Case 1: ' + result);

// let result = ((pizza && tomatos) || (pasta && capers && !tomatos));
// console.log('Case 2; ' + result);

//______________________________________________________________


//2. case 1: (Number a is bigger than number b) and b is not equal to 0 or a is not negative number; => the result is true
//   case 2: (Number a is a positive number or number b is a positive number) or b is not equal to 0 and a is equal to 7; => the result is true

// let a = 5;
// let b = 7;

// let result = (a > b) && b != 0 || a >= 0;
// console.log("Case 1: " + result);

// let result = (a > 0 || b >= 0) || b != 0 && a == 7;
// console.log('Case 2: ' + result);

//______________________________________________________________

//3. case 1: (Data type of 'one' is a string and (data type of 'two' is a boolean or number)) and data type of three is not a boolean => the result is false
// case 2: (Data type of 'one' is a number and data type of 'two' is boolean) or (data type of 'three' is not a boolean or data type of one is not a string) => the result is true

// let one = 0;
// let two = 'Hello';
// let three = true;

// let result = (typeof one === 'string' && (typeof two === 'boolean' || typeof two === 'number') && typeof three !== 'boolean');
// console.log("Case 1: " + result);

// let result = (typeof one === 'number' && typeof two === 'boolean') || (typeof three !== 'boolean' || typeof one !== 'string');
// console.log('Case 2: ' + result);

//______________________________________________________________


//4. case 1: (The new building has 9 windows or a door) and the guest name is John or the address has a data type of a boolean => the result is true
//   case 2: The new building has 8 windows or (no door and the guest name is John) or the address has a data type of a number => the result is true

// let windows = 8;
// let door = true;
// let guest = 'John';
// let address = 5;

// let result = (windows == 9 || door === true) && guest == "John" || typeof address === 'boolean';
// console.log('Case 1: ' + result);

// let result = windows == 8 || (door === false && guest == "John") || typeof address === 'number';
// console.log('Case 2: ' + result);

//______________________________________________________________


//5. Find what char is bigger 'G' or 'g';
// let g_UpperCase = 'G';
// let g_LowerCase = 'g';
// console.log(g_UpperCase.charCodeAt());
// console.log(g_LowerCase.charCodeAt());
// console.log(g_LowerCase > g_UpperCase);

//______________________________________________________________


//6. Find what char is smaller 'K' or 'a';
// let k_UpperCase = 'K';
// let a_LowerCase = 'a';
// console.log(k_UpperCase.charCodeAt());
// console.log(a_LowerCase.charCodeAt());
// console.log(k_UpperCase.charCodeAt() < a_LowerCase.charCodeAt());

//______________________________________________________________


//7. Find what is smaller true or false;
// let a_true = +true; // converting to 1
// let a_false = +false; // converting to 0
// console.log(a_true);
// console.log(a_false);
// console.log(a_true > a_false);


//______________________________________________________________

//8. Transfer 7 to boolean
// let num = 7;
// num = !num;  // Transfer 7 to boolean. Aslo can be transfer to boolean and make it oposite -> !!num;
// console.log(Boolean(7)); // another option to convert number to string
// console.log(Number(true)); // convert boolean to number
// console.log(String(8)); // convert number to string
// console.log(String(false)); // convert boolean to string
// console.log(Number("8")); // convert string to number
// console.log(num);

//______________________________________________________________

//9. Check a number 66 is odd or even;
// let num = 66;
// let even = num % 2 == 0; // check even (четное)
// let odd = num % 2 != 0; // check odd (нечетное)
// console.log(even);
// console.log(odd);

//______________________________________________________________

//10.Check a number 166 is odd or even;
// let num = 166;
// console.log(num % 2 == 0);
// console.log(num % 2 != 0);
