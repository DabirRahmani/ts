# Assignment 6 — Mapped Types (Intro)

Now let's level up slightly. Instead of picking **one** property, let's pick **many**.

### Goal
Create a function `pickMany` that takes an object and an **array of keys**, and returns a **new object** containing only those keys.

### Expected Usage
```ts
const user = {
  id: 1,
  name: "Ali",
  age: 25,
  isAdmin: true
};

const result = pickMany(user, ["id", "name"]);
/* 
result should be: 
{ 
  id: number; 
  name: string; 
} 
*/
```

### The Challenge
How do you define the return type? We need a type that says:
> "An object where the keys are a subset of `T`, and the values are `T[Key]`."

### Starter Code
```ts
function pickMany<T, K extends keyof T>(obj: T, keys: K[]) {
  const result = {} as any; // Don't worry about the implementation logic yet
  
  keys.forEach(key => {
    result[key] = obj[key];
  });

  return result as Pick<T, K>; // Hint: Use the built-in 'Pick' utility type
}
```

### Wait, what is `Pick<T, K>`?
This is a **Mapped Type**. It looks like this internally:
```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```
It means: "For every property `P` in the set of keys `K`, create a key `P` with the value type `T[P]`."

---

### Your Task
Try to implement `pickMany` **without** using the built-in `Pick<T, K>` helper. Write the return type yourself using the `[P in K]: T[P]` syntax.

**Difficulty:** Early Mid-level.
**New Concept:** Mapped Types (`[P in K]`).