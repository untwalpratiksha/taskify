
let name : string;
let age : number | string;
let isStudent : boolean;
let hobbies : string[];
let role : [number, string];
type Person = {
    name : string,
    age? : number
}

let person : Person = {
    name : "a",
};

let lotsOfPeople : Person[];

// defining function
let printName : (name:string) => void; // return undefined
let printAge : (age:number) => never; // not return anything


let personName : unknown; // instead of any use unknow
const BasicTypescript = () => {

  return (
    <div>
      Hello World
    </div>
  )
}

export default BasicTypescript;
