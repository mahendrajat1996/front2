/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  //Student With graterThen 50 marks with map function
  let output = arr.map(PrintStudentswithMap);
  function PrintStudentswithMap(element) {
    if (element.marks > 50) {
      return element.name;
    }
  }
  console.log(output);
  
  // PrintStudentsbyForEach///////
  let namess = [];
  arr.forEach(PrintStudentsbyForEach);
  
  function PrintStudentsbyForEach(element) {
    if (element.marks > 50) {
      namess.push(element.name);
    }
  }
  console.log(namess);
  
  //addData///////
  function addData() {
    console.log(arr);
  }
  let obj = { id: 4, name: "suman", age: "23", marks: 45 };
  arr.push(obj);
  console.log(arr);
  
  //Remove Failed Student
  let filterdata = arr.filter(removeFailedStudent);
  function removeFailedStudent(elemtt) {
    if (elemtt.marks > 50) return arr.splice();
  }
  console.log(filterdata);
  
  // New Array with New Objects
  function concatenateArray() {
    let student = [
      {
        id: 11,
        name: "Radha",
        age: "29",
        friends: ["mohan", "gopi", "raghav"],
        city: "Kota",
      },
      {
        id: 11,
        name: "Radha",
        age: "21",
        friends: ["mohini", "priya", "ginni"],
        city: "Delhi",
      },
      {
        id: 11,
        name: "Radha",
        age: "18",
        friends: ["suman", "puja", "poonam"],
        city: "Bangloeru",
      },
    ];
    console.log(student);
  }
}
