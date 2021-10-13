// type Person = {
//   name: string,
//   age: number
// }
// 变成可选
// const xiaoming: Partial<Person> = {}
// 删除其中的类型
// const shenmi: Omit<Person, 'name'| 'age'> = {age: 1}
// 获取type的联合类型
// type PersonKeys = keyof Person;
// Exclude返回排除的类型
// type age = Exclude<PersonKeys, 'name'>
// 获取当前传入的类型
// type PersonOnlyName = Pick<Person, "name">
export {};
