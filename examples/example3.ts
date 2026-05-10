const users = [
    { id: 1, role: "admin" },
    { id: 2, role: "user" },
    { id: 3, role: "admin" }
] satisfies { id: number; role: "admin" | "user" }[];

const grouped = groupBy(users, "role");

grouped["user"]
// grouped["salam"] // compile error here

function groupBy<T, K extends keyof T>(
    obj: T[],
    key: K
): Record<T[K] & PropertyKey, T[]> {

    const result = {} as Record<T[K] & PropertyKey, T[]>;

    for (const item of obj) {
        const groupKey = item[key] as T[K] & PropertyKey;

        if (!result[groupKey]) {
            result[groupKey] = [];
        }

        result[groupKey].push(item);
    }

    return result;
}
