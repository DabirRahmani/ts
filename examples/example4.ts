type Routes = {
  users: number[];
  posts: string[];
};

const get = createGetter<Routes>();

const a = get("users"); // number[]
const b = get("posts"); // string[]

function createGetter<T>() {
  return function <K extends keyof T>(key: K) {
    return undefined as T[K]
  }
}