// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// function liveDangerously(x?: number | null) {
//   // No error
//   console.log(x!.toFixed());
// }//اینجا دیگه نال یا اندیفایند بودن چک نمیشه

// declare function handleRequest(url: string, method: "GET" | "POST"): void;

// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);

// const req = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req.url, req.method);

// اینجا میشه این رو هم به کار برد
// as const
// اینطوری کل یک ابجنکت به صورت تایپ لیترال میشه
// const req = { url: "https://example.com", method: "GET" as const };
// handleRequest(req.url, req.method);

// const x = "hello" as number;
// const x = "hello" as any as  number;
// const x = "hello" as unknown as  number;

// function printName(obj: { first: string; last?: string }) {
//   console.log(obj.last.toUpperCase());
//   if (!!obj.last) {
//     console.log(obj.last.toUpperCase());
//   }

//   console.log(obj.last?.toUpperCase());
// }

// Number.MAX_SAFE_INTEGER;
// Number.parseInt;
// Number.NEGATIVE_INFINITY;

// Number().toFixed();

// String().length;

// Boolean();

// let obj: any = { x: 0 };
// // Using `any` disables all further type checking, and it is assumed
// obj.foo(); // همینجا انی میرینه. تایپ اسکریپت رانتایم نیست نمیتونه اینو بفهمه
