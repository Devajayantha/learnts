/**
 * Array Type
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/
 */
let skills: string[] = [];

skills[0] = "Problem Solving";
skills.push("Bug");

let jobs: (string | number)[];

jobs = [];

jobs.push("Hello World");
jobs[1] = 1;

console.log(skills, jobs, typeof(jobs[1]));

