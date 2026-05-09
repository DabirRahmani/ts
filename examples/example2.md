Great — here is **Example 2**, a little harder than the last one, but still step‑by‑step.

I will **not** give full answers.  
Only the assignment + *tiny* hints when needed.

---

# Example 2 — Type‑Safe Deep Getter

You must implement a function:

```ts
deepGet(obj, path)
```

Where the **path is a tuple of keys**, and TypeScript automatically infers the returned type.

Example usage:

```ts
const user = {
  profile: {
    details: {
      name: "Ali",
      age: 20
    }
  }
};

const name = deepGet(user, ["profile", "details", "name"]);
```

`name` should be inferred as:

```
string
```

---

# Requirements

1. `path` must only allow **valid keys**, in order.
2. Returned type must match the nested property.
3. If someone writes an invalid path, TypeScript must error.

So this should fail:

```ts
deepGet(user, ["profile", "wrongKey"]);
```

---

# Hint 1 (start small)

You will need a **generic function** with *two* type parameters:

```ts
function deepGet<T, P extends ...>(obj: T, path: P) {
}
```

Work out what constraint `P` needs.

---

# Hint 2 (for later)

You’ll need a **recursive type** to resolve the final return type.

Try imagining something like:

```
Take the first key  
Go into that property  
Then continue with the rest
```

This should already be enough to get you going.

---

When you're ready for the next tiny hint, say **"next hint"**.