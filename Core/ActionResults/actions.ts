
export function View<T>(viewPath:string,payload:T){

}

export function Ok<T>(payload:T){
    return {
        statusCode: 200,
        type: "application/json",
        body: JSON.stringify(payload)
    }
}

export function Json<T>(payload:T){
    
}

export function BadRequest<T>(payload:T){
    
}