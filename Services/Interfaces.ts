
export enum ServiceTypes {
    UserSerivice = "UserSerivice"
}

export interface IUserRepository{
    GetAllUsers():Array<{name:string}>;
}