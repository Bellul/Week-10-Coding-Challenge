//*Create a function that takes two dates and returns the number of days between the first and second date.

// //TODO: create variables for the 2 dates being compared

// let date1 = new Date("June 14, 2019").toDateString();
// let date2 = new Date("June 20, 2019").toDateString();

// console.log(date1)
// console.log(date2)


// //TODO: this is for taking the numbers out of the string
// //! Just realized this doesnt take into account diffrent months/years
// let dateNumb1 = date1.match(/\d/g);
// dateNumb1 = dateNumb1.join("");
// dateNumb1 = dateNumb1.slice(0, 2);

// let dateNumb2 = date2.match(/\d/g);
// dateNumb2 = dateNumb2.join("");
// dateNumb2 = dateNumb2.slice(0, 2);

// console.log(dateNumb1)
// console.log(dateNumb2)
// //TODO: create the function that will do the comparing

// const getDays = (day1, day2) => {
//     if (day1 === day2){
//         console.log(`Its the same day`)
//     } else if (day1 > day2){
//         return day1 - day2;
//     } else if (day1 < day2){
//         return day2 - day1;
//     }
// }

// console.log(getDays(dateNumb1, dateNumb2))

//*2nd try
//! THIS ONE IS THE ANSWER

//TODO: this is for taking the numbers out of the string

let date1 = new Date("January 1, 2019");
let date2 = new Date("June 25, 2019");

//TODO: create the function that will do the comparing

const dateCalc = (day1, day2) => {
    day1 = day1.getTime();
    day2 = day2.getTime();

    timeDiff = day2 - day1;
    dayDiff = timeDiff / (1000*60*60*24);

    dayDiff = Math.floor(dayDiff); //? This makes dayDiff a whole number

    return dayDiff;
}

console.log(dateCalc(date1, date2))