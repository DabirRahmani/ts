const user = {
    id: 1,
    name: "Ali",
    isAdmin: true
};

const a = pick(user, "id");      // number
const b = pick(user, "name");    // string
const c = pick(user, "isAdmin"); // boolean

function pick<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}