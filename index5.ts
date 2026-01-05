// کلا تاپل برای ورودی و خروجی گرفتن خیلی مناسبه. مثلا همچین کاری میشه کرد که خفنه
// type StringNumberBooleans = [string, number, ...boolean[]];
// type StringBooleansNumber = [string, ...boolean[], number];
// type BooleansStringNumber = [...boolean[], string, number];
// const t: StringBooleansNumber = ["1", 1];
// const tt: StringBooleansNumber = ["1", !!1, 1];
// const ttt: StringBooleansNumber = ["1", 1, 1]; //error

// //optiona element in tuple
// type Either2dOr3d = [number, number, number?];
// const t: Either2dOr3d = [1, 2, 3];
// t[2]; // =>  number | undefined

// // TUPLES => exact number in an array
// function doSomething(pair: [string, number]) {
//   // console.log(pair.[2]) // error here
//   const a = pair[0];

//   const a: string;
//   const b = pair[1];

//   const b: number;
//   // برای مثال خروجی هوک استیت ری اکت یه تاپل دو تایی هست
// }

// چون ما یه چیزی داریم که باعث میشه ارایه ها تغییر کنن و ارایه اصلی هم تغییر کنه
// یه چیزی که اینجا مهم میشه رید اونلی بودن ارایه هایی هست که پاس میدیم به یه تاابع یا خروجی میدیم از تابع
// When we see a function that returns ReadonlyArrays, it tells us we’re not meant to change the contents at all,
// and when we see a function that consumes ReadonlyArrays, it tells us that we can pass any array into that function without worrying that it will change its contents.
// function doStuff(values: ReadonlyArray<string>) { //same as readonly string[]
//   // We can read from 'values'...
//   const copy = values.slice();
//   console.log(`The first value is ${values[0]}`);

//   // ...but we can't mutate 'values'.
//   values.push("hello!");
// }

// function doSomething(value: Array<string>) {
//   // ...
// }

// let myArray: string[] = ["hello", "world"];

// // either of these work!
// doSomething(myArray);
// doSomething(new Array("hello", "world"));

// interface Person1 {
//   name: string;
// }

// interface Person2 {
//   name: number;
// }

// // type Staff = Person1 & Person2

// declare const staffer: Staff;
// staffer.name;

// interface Person1 {
//   name: string;
// }

// interface Person2 {
//   name: number;
// }

// interface Staff extends Person1, Person2 {}

// const t: Staff = {
//   name: 1,
// };

// interface Person1 {
//   name: string;
// }
// interface Person2 {
//   name: number;
// }

// type extended = Person1 & Person2

// interface Person3 extends Person1 , Person2 {}

// /// ارث بری
// Extension
// interface Colorful {
//   color: string;
// }
// interface Circle {
//   radius: number;
// }
// interface ColorfulCircle extends Colorful, Circle {}
// const cc: ColorfulCircle = {
//   color: "red",
//   radius: 42,
// };

// // intersection
// interface Colorful {
//   color: string;
// }
// interface Circle {
//   radius: number;
// }
// type ColorfulCircle = Colorful & Circle;
// const t = { color: "", radius: 1 } satisfies ColorfulCircle;

// type SquareConfig = {
//   color?: string;
//   width?: number;
// };

// let mySquare = { width: 100, opacity: 0.5 } as SquareConfig; // never use as => use satisfies
// let mySquare2 = { width: 100, opacity: 0.5 } satisfies SquareConfig; // never use as => use satisfies
// mySquare.color;
// mySquare.width;
// mySquare.opacity;

// // index signature => used for dic most of time
// interface StringArray {
//   [index: number]: string;
// }
// interface Stringrecord {
//   [index: string]: string;
// }
// interface Stringrecordd {
//   readonly [index: string]: string;
// }
// const myArray: StringArray = [];
// const myrecord: Stringrecord = { salam: "dsadsa" };
// const myrecordd: Stringrecordd = { salam: "dsadsa" };
// myrecordd.salam = "";
// myrecord.salam = "salamati";
// const secondItem = myArray[1];
// const secondItemm = myrecord.s;
// const secondItemmm = myrecord.sa;
// const secondItemmmm = myrecord.salam;
// console.log(secondItemm, secondItemmm, secondItemmmm);

// interface Person {
//   name: string;
//   age: number;
// }

// interface ReadonlyPerson {
//   readonly name: string;
//   readonly age: number;
// }

// let writablePerson: Person = {
//   name: "Person McPersonface",
//   age: 42,
// };

// // let readonlyPerson: ReadonlyPerson = {
// //   name: "Person McPersonface",
// //   age: 42,
// // };
// // readonlyPerson.age++; // error

// // works
// let readonlyPerson: ReadonlyPerson = writablePerson; // refrence type
// console.log(readonlyPerson.age); // prints '42'
// writablePerson.age++;
// console.log(readonlyPerson.age); // prints '43'

// interface Home {
//   readonly resident: { name: string; age: number };
// }
// function visitForBirthday(home: Home) {
//   // We can read and update properties from 'home.resident'.
//   console.log(`Happy birthday ${home.resident.name}!`);
//   home.resident.age++;
// }
// function evict(home: Home) {
//   // But we can't write to the 'resident' property itself on a 'Home'.
//   home.resident = {
//     name: "Victor the Evictor",
//     age: 42,
//   };
// }

// مثال بالا اینجا اگر خود یک ابجکت رید آنلی باشه باز هم میشه بچه هاش رو تغییر داد
// interface SomeType {
//   readonly prop: string;
//   shrop: string;
// }
// function doSomething(obj: SomeType) {
//   // We can read from 'obj.prop'.
//   console.log(`prop has the value '${obj.prop}'.`);

//   // But we can't re-assign it.
//   obj.prop = "hello";
//   obj.shrop = "hello";
// }
