class User {
    id: number
    name: string
  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
  }
  addUser(){
    let users: Array<string | number> = []
    users.push(this.id, this.name)
    return users || "nada dentro"
  }
}
const test = new User (2, "teste")

console.log(test.addUser())
