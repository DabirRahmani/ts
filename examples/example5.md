Alright — same difficulty level as the last one. One concept, small problem, no tricks.

---

# Assignment 5 — Typed Property Picker

You will build a function that **picks a property from an object** and returns it with the correct type.

---

# Goal

```ts
const user = {
  id: 1,
  name: "Ali",
  isAdmin: true
};

const a = pick(user, "id");      // number
const b = pick(user, "name");    // string
const c = pick(user, "isAdmin"); // boolean
```

This should **error**:

```ts
pick(user, "age");
```

because `"age"` is not a key of `user`.

---

# Starter Code

```ts
function pick<T>(obj: T, key: keyof T) {

}
```

---

# Hint (only one)

If:

```
key: K extends keyof T
```

then the type of the value is:

```
T[K]
```

---

# Expected Usage

```ts
const user = {
  id: 1,
  name: "Ali",
  isAdmin: true
};

const id = pick(user, "id");     // number
const name = pick(user, "name"); // string
```

---

# Difficulty

This practices:

- generics
- `keyof`
- `T[K]` (indexed access types)

Same level as the previous `createGetter` exercise.

---

If you want after this, I can give you the **next step version** that introduces **mapped types**, which is the next important TypeScript skill.