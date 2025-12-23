// narrowing with types in ts

// interface Triangle {
//   kind: "triangle";
//   sideLength: number;
// }
// interface Circle {
//   kind: "circle";
//   radius: number;
// }
// interface Square {
//   kind: "square";
//   sideLength: number;
// }
// type Shape = Circle | Square | Triangle;
// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       return shape as never;
//     // میگه بست پرکتیس اینه که اینجا وقتی همه حالت ها رو چک کردیم
//     // و حالت دیگه ای برای هدفی که داشتیم نداریم. حالا تایپ هایی که باقی مونده رو به عنوان نور برگردونیم
//   }
// }

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// function isFish(pet: Fish | Bird): pet is Fish {
//   // return type is "type predicate"
//   // با این میشه خیلی خوب نرو کرد
//   // خروجیش به کنترل فلو میفهمونه که تایپ فلان ابجکت چیه
//   return (pet as Fish).swim !== undefined;
// }
// function move(pet: Fish | Bird) {
//   if (isFish(pet)) {
//     pet.swim();
//   } else {
//     pet.fly();
//   }
// }
// function filterPetsToFish(pets: (Fish | Bird)[]) {
//   const fish = pets.filter(isFish);
//   return fish;
// }

// اساین کردن در حالتی که یه مقدار چند تایپ داشته باشه به ازای همه اون  تایپ ها میشه اساین کرد بهش
// let x = 1;
// x = "salam";

// let x: string | number = 1;
// x = "salam"

// if (x instanceof Date) // این هم یکی دیگه از حالت های نروینگ هست

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { swim?: () => void; fly?: () => void };

// function move(animal: Fish | Bird | Human) {
//   if ("swim" in animal) {
//     // narrowing with "in"
//     animal;
//   } else {
//     animal;
//   }
// }

// interface Container {
//   value: number | null | undefined;
// }

// function multiplyValue(container: Container, factor: number) {
//   // Remove both 'null' and 'undefined' from the type.
//   // اینجا هم باید حواسمون باشه
//   // خیلی وقتا == و != باعث میشن که اشتباه برنچ کنیم کد رو
//   if (container.value != null) {
//     console.log(container.value);
//     // Now we can safely multiply 'container.value'.
//     container.value *= factor;
//   }
// }

// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     // تنها حالتی که میتونن === باشن اینه استرینگ باشن
//     // اینطوری هم میشه نرو کرد تایپ رو
//     x.toUpperCase();
//     y.toLowerCase();
//   } else {
//     console.log(x);
//     console.log(y);
//   }
// }

// function multiplyAll(
//   values: number[] | undefined,
//   factor: number
// ): number[] | undefined {
//   if (!values) {
//     return values;
//   } else {
//     return values.map((x) => x * factor);
//   }
// }

// // ****** مثال مهم ////////////
// function printAll(strs: string | string[] | null) {
//   // !!!!!!!!!!!!!!!!
//   //  DON'T DO THIS!
//   //   KEEP READING
//   // !!!!!!!!!!!!!!!!
//   if (strs) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs); // اینجا میاد میگه در این صورت ما اگر استرینگ خالی داشته باشیم دیگه نمیفهمیم
//       // میگه تروثی بودن رو باید قبل هر شرط خاص بذاریم
//       // چک کردن تروثی بودن نباید باعث بشه ما تایپ هامون رو به دو تیکه تقسیم کنیم
//       // اگر استرینگ هست باید مطمئن باشیم که حتما میاد توی این ایف
//     }
//   }
// }

// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === "object") {
//     // we call it checking if strs is TRUTHY or FALSY
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   }
// }

// const t = "salam";
// console.log(typeof Boolean(t));
// console.log(typeof !!t);
// console.log(typeof !"ds");

// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       // نال هم یه نوع ابجکت هست
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

// function padLeft(padding: number | string, input: string): string {
//   if (typeof padding === "number") return " ".repeat(padding) + input;
//   else return padding + input;
// }
