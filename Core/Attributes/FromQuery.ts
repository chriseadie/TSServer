import SingletonService from "../SingletonService"

type QueryArgument = {
    index:number;
    name:string;
}
export function FromQuery(target: any, propertyKey: string, parameterIndex: number):void{
    console.log(target, propertyKey, parameterIndex);
    SingletonService.Add(`${target}-arg`,target);
}   