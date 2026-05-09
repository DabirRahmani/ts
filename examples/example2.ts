type DeepGet<T, P extends readonly any[]> =
  P extends []
    ? T
    : P extends [infer K, ...infer R]
      ? K extends keyof T
        ? DeepGet<T[K], R>
        : never
      : never;

function deepGet<T, const P extends readonly (string)[]>(
  obj: T,
  path: P
): DeepGet<T, P> {
  let current: any = obj;
  for (const key of path) {
    current = current?.[key];
  }
  return current;
}

const user = {
  profile: {
    details: {
      name: "Ali",
      age: 20
    }
  }
};

const t = deepGet(user, ["profile", "details", "name"] as const); // this is wrong answer
