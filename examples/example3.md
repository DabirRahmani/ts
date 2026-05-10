Yeah, that last one is closer to **advanced TypeScript library code**. It’s normal that it felt rough. Let’s step back to a **solid mid‑level exercise** like the first one.

---

# Assignment: Type‑Safe `groupBy`

### Goal
Practice:
- generics
- `keyof`
- indexed access types
- mapped types

---

# Task

Implement a function:

```ts
groupBy(array, key)
```

It should group objects by a property **in a type‑safe way**.

---

# Expected Usage

```ts
const users = [
  { id: 1, role: "admin" },
  { id: 2, role: "user" },
  { id: 3, role: "admin" }
];

const grouped = groupBy(users, "role");
```

Expected type:

```ts
{
  admin: { id: number; role: string }[];
  user: { id: number; role: string }[];
}
```

So:

```
grouped.admin
grouped.user
```

should both exist.

---

# Function API

You must implement something like:

```ts
function groupBy<T, K extends keyof T>(
  items: T[],
  key: K
): Record<string, T[]>
```

But **this return type is intentionally wrong**.  
Part of the exercise is **improving it**.

---

# Requirements

1. `key` must be a valid property of `T`
2. Return type should depend on the **values of that key**
3. No `any`

---

# Example Test

```ts
const products = [
  { name: "A", category: "food" },
  { name: "B", category: "tech" },
  { name: "C", category: "food" }
];

const result = groupBy(products, "category");
```

You should get autocomplete:

```
result.food
result.tech
```

---

# Hint 1 (very small)

Your key type is:

```
K extends keyof T
```

The value type of that key is:

```
T[K]
```

---

# Hint 2

The return type should look like:

```
Record<something, T[]>
```

What should `something` be?

Answer: **the possible values of `T[K]`**

---

# Hint 3

You’ll probably need:

```
T[K] & PropertyKey
```

because object keys must be:

```
string | number | symbol
```

---

If you want, after you solve this I can give you the **next challenge that TypeScript library authors actually write**, which is:

**`groupBy` that infers literal keys automatically.**

That one jumps you from **mid → upper‑mid TypeScript** without being as brutal as the deep path problem.