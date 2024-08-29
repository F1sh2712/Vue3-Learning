// 定义一个接口，限制person对象的具体属性
export interface personInter {
    id: string,
    name: string,
    age: number
}

export type personList = personInter[]