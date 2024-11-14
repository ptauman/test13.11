
export interface Resources {
    name: string,
    amount: number
    speed? : number
  }
  export interface usersOrg {
    _id? : string
    name: string
    resources : Resources[],
    budget : number
  }
  
  export interface IStatus {
    UserId : string
    Missile : string,
    area : string,
    status : "Hit"|"intercepted"|"Launched"|"pending",
    speed : number
}
