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

function pickMany<T, K extends keyof T>(obj: T, keys: K[]) {
    const result = {} as any;

    keys.forEach(key => {
        result[key] = obj[key];
    });

    return result as Pick<T, K>; 
}
