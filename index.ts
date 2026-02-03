// https://www.typescriptlang.org/docs/handbook/2/generics.html

// class GenericNumber<NumType> {
//     private zeroValue: NumType;
//     add: (x: NumType, y: NumType) => NumType;
//     private readonly type: "number" | "string";

//     constructor(zero: NumType, add: (x: NumType, y: NumType) => NumType) {
//         this.add = add;
//         this.zeroValue = zero;
//         this.type = typeof zero as "number" | "string";
//     }

//     public reset() {
//         if (this.type === "number") {
//             this.zeroValue = 0 as NumType;
//         } else if (this.type === "string") {
//             this.zeroValue = "0" as NumType;
//         }
//     }
// }

// const gn = new GenericNumber(0, (a, b) => a + b)
// const gnn = new GenericNumber("0", (a, b) => +b)

// interface GenericIdentityFn<Type> {
//     (arg: Type): Type;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn<string> = identity;
// let myIdentityNumeric: GenericIdentityFn<number> = identity;
// myIdentity("saa")
// myIdentityNumeric("saa")

// function identity<Type>(arg: Type): Type {
//     return arg;
// }
// let output = identity("myString");
// let output2 = identity(3);

