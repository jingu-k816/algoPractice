const organizeInstructors = function(instructors) {
  const outputObj = {};
  for (const key of instructors) {
    if (!outputObj[key.course]) {
      outputObj[key.course] = [key.name];
    } else {
      outputObj[key.course].push(key.name);
    }
  }
  return outputObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));