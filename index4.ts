// Rule: When possible, use the type parameter itself rather than constraining it
// Rule: Always use as few type parameters as possible
// Rule: Always prefer parameters with union types instead of overloads when possible

// const args = [8, 5, 2] as const;
// این کانست رو وقتی بذاریم
// تبدیل میشه به تاپل

// unknown is any but we cant use unknown value before assign
//  مثلا اینجا این کار بست پرکتیسه

// never is used when we have nothing to say
// شبیه پاد ماده هست
// مثلا وقتی نروینگ کامل بشه. اگر بعدش بخوایم یه الس دیگه بذاریم میشه هیچ وقت

// هر چی که جزو تایپ های اصلی نباشه. دیگه تایپش میشه ابجکت
// object is not Object. Always use object!
// function noop() {
//   return;
// }
// function toop() {}
// console.log(noop(), toop());
// ولی جالبه که ووید و اندیفایند فرق دارن
// ووید که بذاریم. میتونیم یه جایی یه چرت و پرتی ریترن کنیم
// ولی اندیفایند نمیتونه ریترنت کنه
// به درد سوالای مصاحبه شرکت های متوسط به پایین میخوره
// برای کالبک ها هم به درد میخوره. مثلا به عنوان کالبک میخوایم خروجیمون ووید باشه نه اندیفایند

// اینجا مساله جالی مطرح میشه
// میگه اگه میخوای این رو استفاده کنی
// نباید فانکشن نیزه دار بزنی
// چون اونجا ما دیگه اینو نداریم
// اینو فقط توی فانکشن داریم. نه توی کانست
// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[];
// }
// const db = getDB();
// const admins = db.filterUsers(function (this: User) {
//   return this.admin;
// });
// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[];
// }
// const db = getDB();
// const admins = db.filterUsers(() => this.admin); //اینجا ما اینو نداریم. برعکس حالت بالا که اینو داریم

// function fn(x: boolean): number;
// // Argument type isn't right
// function fn(x: string): string;
// // function fn(x: boolean) {}
// // تابع اصلی باید بشه
// function fn(x: boolean | string): number | string {
//   // narrowing
//   if (typeof x === "boolean") return 5;
//   else return "salam";
// }
// fn("");
// fn(false);

// // کیلی کیلی جالب و مهم
// // هر نوع اورلودی که روی تابع داشته باشیم باید بالاش تایپش رو بنویسیم
// // یعنی یا دو تا اورلود بنویسیم بالاش. یا هیچی. هیچ وقت یکی نباید باشه. به دردمون نمیخوره
// // The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function.
// function fn(x: string): void;
// function fn() {
//   // ...
// }
// // Expected to be able to call with zero arguments
// fn();

// // overloading functions
// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);

// // اینجا میگه تایپ رو اگر قرار جنریک بذاریم. باید سعی کنیم کوچیکترین جز رو جنریک کنیم
// // مثلا آرایه ای از جنریک ها
// // رکوردی از جنریک ها
// function firstElement1<Type>(arr: Type[]) {
//   return arr[0];
// }
// function firstElement2<Type extends any[]>(arr: Type) {
//   return arr[0];
// }
// // a: number (good)
// const a = firstElement1([1, 2, 3]);
// // b: any (bad)
// const b = firstElement2([1, 2, 3]);

// // یه وقتایی فقط برامون مهمه که ورودی یه خاصیت رو داشته باشه. بقیش رو جنریک میزنیم. این میشه
// // به این میگن محدود کردن تایپ
// // Constraints
// // بقیه تایپ مهم نیست. فقط همین محدودیت رو میذاریم و کارمون با همینه
// function longest<Type extends { length: number }>(a: Type, b: Type): Type {
//   if (a.length >= b.length) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function map<Input, Output>(
//   arr: Input[],
//   func: (arg: Input) => Output
// ): Output[] {
//   return arr.map(func);
// }

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }

// interface CallOrConstruct {
//   (n?: number): string;
//   new (s: string): Date;
// }
// function fn(ctor: CallOrConstruct) {
//   ctor("salam") // این ارور داره چون نیو نداریم پشتش
//   new ctor("salam");
//   ctor(10)
// }

// // کانستراکتور هم داریم به عنوان تایپ
// // اگر توی تعریف تایپ نیو بذاریم و یه ابجکت برگردونیم
// //
// type SomeConstructor = {
//   new (s: string): SomeObject;
// };
// function fn(ctor: SomeConstructor) {
//   return new ctor("hello");
// }

// // اینجا توابع پروپرتی های دیگه هم دارن
// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean; // این خیلی باحاله
//   (salamati: string): string; // اینطوری میشه اورراید کرد برای یه تابع
// };

// const t: DescribableFunction = (input: number) => input % 2 == 0;
// t.description = "salam";
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
// }

// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = "default description";

// doSomething(myFunc); // الان اینجا میگه تو فقط یک اورراید رو نوشتی. همه فلو های تابع رو در نظر نگرفتی
