Michael Remy, Micahel Cote, Anthony Yi, and Petra Franklin.


// Michael Remy

// Given an array of objects representing people
// and a string representing a bad habit
// return a "santasNaughtyList" containing the first and last names of all the people
// who have the matching bad habit so that santa knows how much coal he needs.

// you can solve this iteratively or using functional programming. if you finish early, try
// implementing it both ways!


const people = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

// Input: people, "doesn't wash dishes"
// Output: ["FN1 LN1", "FN3 LN3"]

// Input: people, "shows up late"
// Output: ["FN2 LN2", "FN3 LN3"]

// Input: people, "vapes too much"
// Output: []





function naughtyList(people, habit) {
    let output = []
    people.forEach((students) => {
        students.habits.forEach((badHabit) => {
            if (habit == badHabit) {
                output.push(students.firstName + " " + students.lastName);
            }
        });
    })
    return output;
}

console.log(naughtyList(people, "shows up late"));


// function naughtyList2(people, habit) {
//     let output =[];
//     for (var i = 0; i < people.length; i++) {
//         if (people[i].habits.includes(habit)) {
//             output.push(people[i].firstName + " " + people[i].lastName);
//             console.log(people[i].firstName);
//         }
//     }
//     return output;
// }

// console.log(naughtyList2(people, "shows up late"));


// [ 'FN2,LN2', 'FN3,LN3' ]


/*
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      isInfected[bool]

    return a new array of the names of people who are at high risk of infection
    A person is at high risk of catching the virus if they are:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom is infected
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
    */

   // Input:
   const people = [
       {
           firstName: "Person",
           lastName: "One",
           isSocialDistancing: false,
           friends: [friend2, friend3],
       },
       {
           firstName: "Person",
           lastName: "Two",
           isSocialDistancing: true,
           friends: [friend2, friend1],
       },
       {
           firstName: "Person",
           lastName: "Three",
           isSocialDistancing: false,
           friends: [friend2, friend1],
       },
   ];

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    isInfected: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    isInfected: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    isInfected: false,
};

// Output: ["Person One", "Person Three"]

Mapping through to identify who is not social distancing
then mapping through to see who has a friend who is infected.


function highRisk(people) {
    let output = [];
    people.forEach((person) => {
        if (person.isSocialDistancing === true) {
            break;
        }
        else{ 
            output.push(people[i].firstName + " " + people[i].lastName);

        }
    })
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Given an array of objects representing people
// and a string representing a bad habit
// return a "santasNaughtyList" containing the first and last names of all the people
// who have the matching bad habit so that santa knows how much coal he needs.

// you can solve this iteratively or using functional programming. if you finish early, try
// implementing it both ways!

const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

// Input: students, "doesn't wash dishes"
// Output: ["FN1 LN1", "FN3 LN3"]

// Input: students, "shows up late"
// Output: ["FN2 LN2", "FN3 LN3"]

// Input: students, "vapes too much"
// Output: []

// naughtyList(people){}

function iterativeNaughtyList(persons, habit) {
    const naughtyPeople = [];

    for(let i = 0; i < persons.length; i++){
        const person = persons[i];

        for(let j = 0; j < person.habits.length; j++){
            const personsHabit = person.habits[j];

            if(personsHabit === habit) {
                naughtyPeople.push(person.firstName + " " + person.lastName);
                // already found the match, stop iterating
                break;
            }
        }
    }

    return naughtyPeople;
}







const santasNaughtyList = (persons, habit) => {
    return persons
        .filter((person) => person.habits.includes(habit))
        .map((person) => `${person.firstName} ${person.lastName}`)
}













/*
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      isInfected[bool]

    return a new array of the names of people who are at high risk of infection
    A person is at high risk of catching the virus if they are:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom is infected
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
    */

   // Input:
   const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

const friend1 = {
 firstName: "Friend",
 lastName: "One",
 isSocialDistancing: false,
 isInfected: true,
};

const friend2 = {
 firstName: "Friend",
 lastName: "Two",
 isSocialDistancing: false,
 isInfected: true,
};

const friend3 = {
 firstName: "Friend",
 lastName: "Three",
 isSocialDistancing: false,
 isInfected: false,
};

// Output: ["Person One", "Person Three"]