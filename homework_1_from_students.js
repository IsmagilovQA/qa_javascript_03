/*
STUDENTS HOMEWORK - LESSON 1
*/

//1. Write a code where you will find a perimeter of a square, where side a = 10, side b = 12;
// let a = 10,
//     b = 12;
// console.log((a * 2) + (b * 2));


//2.  Create a string with a name userAge and a value “21” and change the data type from a string 
//to a number and add 10 to that number. 
// let userAge = '21';
// let result = +userAge + 10;
// console.log(typeof +userAge);
// console.log(result);


//3. Create 5 variables, initialize them with integers and find the average of variables. Print the result to console
// let a = 5,
//     b = 3,
//     c = 2,
//     d = 4,
//     e = 1;
// let average = (a + b + c + d + e) / 5;
// console.log(average);


//4. Create a variable, initialize it with a positive integer. Make it negative and print the result to console
//Version 1:
// let number = 7;
// number = -number;
// console.log(number);

//Version 2:
// let number = 7;
// number *= -1; // the same as number = number * (-1);
// console.log(number);


//5. Create two variables with values(5, 7). The first with data type Integer and the second with a String data type . 
//Raise the number 5 to the power of 2, save as a result. Print in the console the sum of the result and the second variable.
// let a = 5,
//     b = '7';
// let result = Math.pow(a, 2);
// let sum = result + +b;
// console.log(sum);


//6. Create the alert “I wanna be the best Software Engineer”.
//alert('I wanna be the best Software Engineer');


//7. Create two variables of data type String with values:“So what?” and “Work hard for that !!!”. 
//Concatenate two Strings and print in the console.
// let a = 'So what?',
//     b = 'Work hard for that !!!';
// console.log(`${a} ${b}`); // or console.log(a + " " + b);


//8. Write a code that calculates your BMI (Body Mass Index), where weight=<your_weight_in_kg> and height=<your_height_in_m>. 
//Print the result to the console.
// let weight = 105,
//     height = 1.83;
// let bmi = weight / (Math.pow(height, 2));
// console.log(bmi + ' кг/м2');


//9. Create two strings with your first name and last name. Print in console lengths of these strings.
// let name = 'Vitaliy',
//     lastName = 'Ismagilov';
// console.log((name + " " + lastName).length);


//10 Create a variable (integer) which is a radius of a circle. 
//Then write a code and calculate a length of circumference (длина окружности) of this circle.
// let radius = 12;
// let formula = 2 * Math.PI * radius;
// console.log(formula);


//11 Create two integer variables, one of which is a base and another is a height of a triangle, initialize them with any values. 
//Then calculate a square footage of a triangle.
// let a = 6,
//     h = 8;
// let s = 0.5 * a * h;
// console.log(s);


//12 Refer to the last element of a string using a math operation where str = “Never give up”;
// let str = 'Never give up';
// console.log(str[str.length-1]);


//13 Determine the remainder of the division of the next variables: a = 11; b = 4. 
//What is the remainder of variable a?
// let a = 11,
//     b = 4;
// let rem = a % b;
// console.log(rem);


//14. Declare empty variables a that equals true and b equals to 5.
//Declare variable result and make it equals to sum of a and b. Print the result
// let a = true;
// let b = 5;
// let sum = a + b;
// console.log(sum);


//15. Declare variables: x = “8”; y = 2. Create a variable that takes the result of x divided by y. Print result. 
// let x = '8';
// let y = 2;
// let result = +x / y;
// console.log(result);


//16. Declare a string name and assign it a value of “Tom”, re-assign to a number and show in the console type of the name.
// let name = 'Tom';
// name = 4;
// console.log(typeof name);


//17. Создайте пустую строку  и определите её длину.
// let str = "";
// console.log(str.length);


//18. Создайте переменную name и присвойте ей любое имя. 
//Создайте переменную sign присвойте ей значение первой буквы имени, после которой поставьте ! знак.
// let name = 'Nick';
// let sign = name[0] + '!';
// console.log(sign);


//19. If the car travels 600 km in 3 hours, what is it’s speed?
// Create variables, declare them and console the result.
// let s = 600;
// let t = 3;
// let v = s / t;
// console.log(v + ' км в час');


//20. Create one variable with name firstName, second variable with lastName. 
//And console result as the email: firstName.lastName@gmail.com
// let firstName = 'Erich';
// let lastName = 'Smith';
// console.log(firstName + '.' + lastName + '.com');


//21. Three boys have three boxes. Each boy has 120lbs of weight. Each box has 2 lbs of apples inside. 
// One boy ate half of the box of apples in his box.  
// Question: What is the total lbs boys and apples together? Create the variables and count the amount.
//console.log('????');


//22. Please concatenate “I”, “ and my friends”, “ love QA_FOR_EVERYONE”, to have only one full string line. 
//And count the length of the string. 
//console.log('I' + ' and my friends' + ' love QA_FOR_EVERYONE');


//23. First kid uses 5 diapers a day, the second kid uses 8 diapers a day. 
//How many diapers mom should buy to have enough for the next 2 weeks?
// let kid1 = 5;
// let kid2 = 8;
// let result = (kid1 + kid2) * 14;
// console.log(result);


//24. Elon Mask building Falcon 9 rockets. The cost of 1 Falcon 9 equal 57 Tesla x model cars. 
//Trip to the moon requires 13 rockets. Can you help Elon to figure out how many cars he needs to sell in order 
//to achieve his goal?
// let falcon1 = 57;
// let ammountOfTesta = falcon1 * 13;
// console.log(ammountOfTesta);


//25. Create a variable with a name “word”, assign it with value “VOLUME”. 
//By using modulus find the remainder  of  2 divisions between 90 and 8; 11 and 2. 
//Print string that consists of an index of variable “word” equals first division, 
//then second division, next - first char of the string and the last index. Divide indexes with new lines (\n). 
// let word = 'VOLUME';
// let rem1 = 90 % 8;
// console.log(rem1);
// let rem2 = 11 % 2;
// console.log(rem2);
// console.log(word[2] + '\n' + word[1] + '\n' + word[0] + '\n' + word[word.length-1]);


//26. Create two numbers and assign them random values. 
//Print the result of raising the first number to the power of the second one and add 1 to the result by using increment.
// let a = 5;
// let b = 4;
// let result = Math.pow(5, 4);
// console.log(++result); // not the same but also can be => result++


//27. The biggest word in the world is "pneumonoultramicroscopicsilicovolcanoconiosis". 
//Count and print the number of letters. Print the 10th letter of this word.
// let word = 'pneumonoultramicroscopicsilicovolcanoconiosis';
// let count = word.length;
// console.log(count, word[9]);


//28. Jane paid $4.16 for a sandwich. She paid $0.95 for a piece of fruit. 
//What is the total amount Jane paid for the sandwich and fruit?
//Print: "Jane paid for her lunch 'total amount' "
// let sandwich = 4.16,
//     fruit = 0.95;
// let total = sandwich + fruit;
// console.log(`'Jane paid for her lunch' ${total}`);


//29. Here is the data set: 9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18.
// Find and print:
// Mean
// Median
// Mode
//console.log('????');


//31. Create variables "a"  with value 15 and "b" with value 18.  Assign the value of the doubled sum of the 
//variables "a" and "b" to the variable "x"  and print the result to console.
// let a = 15;
// let b = 18;
// let x = (a + b) * 2;
// console.log(x);


//32. Дана сторона куба  5 см. Найти объем куба. Вывести ответ в виде строки: Объем куба 
//составляет {вложить полученный результат} см.
// let a = 5;
// let v = Math.pow(a, 3);
// console.log(`Объем куба составляет ${v} см`);


//33. Дана строка: "Children can have different hobbies", вычислить длину этой строки, найти элемент под 
//первым и последним индексом, вывести результаты в консоль. 
// let str = 'Children can have different hobbies';
// console.log(str.length);
// console.log(str[0], str[str.length - 1]);


//35. Create 3 variables: one String type, one boolean and last one number. Check the type of each variable.
// let string = 'Hi there!';
// let bool = true;
// let num = 7;
// console.log(typeof string);
// console.log(typeof bool);
// console.log(typeof num);


//36. You need  to receive Infinity in the console (using Math) and check what type it will be.
// let inf = 5 / 0;
// console.log(inf);
// console.log(typeof inf);


//40. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки 
//выведите на экран символ 'a', символ 'b', символ 'e’.
// let str = 'abcde';
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[str.length - 1]);


//48. Create a String with a value "208". Convert String to number. Find the remainder after 
//division by "5".Output the result to the console.
// let str = '208';
// str = +str % 5;
// console.log(str);


//54. Создайте переменную именем х. Присвойте переменной х значение 12.  Создайте переменную именем у. 
//Присвойте переменной у значение 21.  Напишите последовательность команд, в результате которых:  
//переменные х и у обменяются своими значениями. Выведите значения переменных х и у в консоль.
// let x = 12;
// let y = 21;
// [x, y] = [y, x];
// console.log(x, y);