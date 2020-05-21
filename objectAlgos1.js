// Challenge #1: Object Search
// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31},
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];






function findObjectsFilter(searchFor, items) {
    const searchKeys = Object.keys(searchFor);
    return items.filter(item => {
        for (const key of searchKeys) {
            // if the key doesn't exist
            if (
                !item.hasOwnProperty(key) ||
                item[key] !== searchFor[key]
            ) {
                return false;
            }
        }
        return true;
    });
}

// Challenge #2: findByIdAndUpdate(id, updateObject, arr)

/*
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];


// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null


function findByIdAndUpdate(id, updatedVals, collection) {
    const keys = Object.keys(updatedVals);
    for (const doc of collection) {
        if (doc.id === id) {
            for (const key of keys) {
            // only update keys that exist on the found object
                if (doc.hasOwnProperty(key)) {
                    const newVal = updatedVals[key];
                    doc[key] = newVal;
                }
            }
            return doc;
        }
    }
    // above return didn't run so nothing was found
    return null;
}

console.log(students);
findByIdAndUpdate(3, { redBeltStatus: true, isAnAdmin: true }, students)
console.log(students);