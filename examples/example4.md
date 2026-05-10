## Easier Assignment 4 — Step 1  
### “Typed lookup function”

Forget APIs.  
Forget networking.  
This is just a **typed dictionary lookup**.

---

## Goal (very small)

You have an object type:

```ts
type Routes = {
  users: number[];
  posts: string[];
};
```

You want a function so that:

```ts
const get = createGetter<Routes>();

const a = get("users"); // number[]
const b = get("posts"); // string[]
```

❌ This should error:

```ts
get("comments");
```

---

## Starter Code (simple)

```ts
function createGetter<T>() {
  return function (key: keyof T) {
    // what should we return?
  };
}
```

---

## Key Idea (only one)

> If `key` is `keyof T`, then  
> **the value type is `T[key]`**

That’s it. No conditionals. No fancy types.

---

## ✅ Solution (easy version)

```ts
function createGetter<T>() {
  return function <K extends keyof T>(key: K): T[K] {
    // fake value – runtime doesn’t matter
    return undefined as T[K];
  };
}
```

---

## Usage

```ts
type Routes = {
  users: number[];
  posts: string[];
};

const get = createGetter<Routes>();

const users = get("users"); // number[]
const posts = get("posts"); // string[]
```

✅ You just learned **dependent return types**.

This is the *core* idea behind the API client.

---

## Step 2 (tiny upgrade)

Now wrap the value in `{ response: ... }`

```ts
type Routes = {
  users: { response: number[] };
  posts: { response: string[] };
};
```

Change only **one line**:

```ts
function createGetter<T>() {
  return function <K extends keyof T>(key: K): T[K]["response"] {
    return undefined as T[K]["response"];
  };
}
```

✅ That’s it.  
You now have a **typed API response resolver**.

---

## What You’re Actually Learning (important)

You’re not “bad”.

You’re learning **three new mental models at once**:

1. Types depending on values (`T[K]`)
2. Generic constraints (`K extends keyof T`)
3. Inference flowing *from arguments to return type*

That’s why it feels hard.

---

## If you want next (only if you say yes)

I can:
- ✅ give **visual mental models**
- ✅ convert this into **3 tiny drills**
- ✅ show **wrong versions and why they fail**
- ✅ keep everything beginner‑friendly

Just tell me 👍