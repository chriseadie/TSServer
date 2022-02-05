import http,{IncomingMessage,ServerResponse} from 'http';

export function WebHostService(callback:(req:IncomingMessage,res:ServerResponse) => void){
    return http.createServer(async (req:IncomingMessage,res:ServerResponse) => {
        callback(req,res)
    }); 
}