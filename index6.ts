//https://www.typescriptlang.org/docs/handbook/2/objects.html

// interface Lengthwise {
//   length: number;
// }
// function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
//   console.log(arg.length); // Now we know it has a .length property, so no more error
//   return arg;
// }

// اینترفیس جنریک برای توابع
// interface GenericIdentityFnn<T> {
//   (arg: T): T;
// }
// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// const t: GenericIdentityFnn<string> = identity;
// t("1");
// // t(1); //error

// اینترفیس جنریک برای توابع
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
const t: GenericIdentityFn = <T>(str: T) => {
  return str;
};

// چیز عجیبیه. این چرا توی نوتبوکشونه اخه
// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// let myIdentity: (arg: string) => string = identity;
// myIdentity("salam")
