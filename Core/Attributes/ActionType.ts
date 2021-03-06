import ServiceCollection from "../ServiceCollection";

export function Get(){
    return function (target: any, name: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args:any[]){
            const request = ServiceCollection.GetRequest()
            if(request?.method != "GET") return {statusCode:500,type:"document",body:`Cannot use ${request?.method} on a Delete method`};       
            var url = new URL(request?.url as string,`http://${request?.headers.host}`);
            url.searchParams.forEach((x,v) => {
                args.push(x);
            })
            return originalMethod.apply(this,args);
        }
        return descriptor
    }
}

export function Post(){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args:any){
            const methodType = ServiceCollection.GetRequest()?.method;
            if(methodType != "POST") return {statusCode:500,type:"document",body:`Cannot use ${methodType} on a Delete method`};
            return originalMethod.apply(this,args);
        }
        return descriptor
    }
}

export function Put(){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args:any){
            const methodType = ServiceCollection.GetRequest()?.method;
            if(methodType != "PUT") return {statusCode:500,type:"document",body:`Cannot use ${methodType} on a Delete method`};
            return originalMethod.apply(this,args);
        }
        return descriptor
    }
}

export function Delete(){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args:any){
            const methodType = ServiceCollection.GetRequest()?.method;
            if(methodType != "DELETE") return {statusCode:500,type:"document",body:`Cannot use ${methodType} on a Delete method`};
            return originalMethod.apply(this,args);
        }
        return descriptor
    }
}