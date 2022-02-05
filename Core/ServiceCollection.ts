import {IncomingMessage,ServerResponse} from 'http';
import { IServiceCollection } from './Interfaces/IServiceCollection';
import SingletonService from './SingletonService';

class ServiceCollection implements Partial<IServiceCollection>{

    private req:IncomingMessage | null;
    private res:ServerResponse | null;
    constructor(){
        this.res = null;
        this.req = null;
    }

    public Initialize(req:IncomingMessage,res:ServerResponse){
        this.req = req;
        this.res = res;
    }

    public async AddControllersWithViews(){
        if(this.req?.url?.includes("favicon")) return;

        const x = new URL(this.req?.url as string,`http://${this.req?.headers.host}`);

        let controller = "";
        let method = ""
        if(x.pathname == "/"){
            controller = "Home";
            method = "Index"
        } else {
            var route = x.pathname.slice(1).split("/");
            controller = route[0];
            method = route[1] ?? "Index"
        }
        const classLoader = await import(`../Controllers/${controller}Controller.ts`)
        var instance = new classLoader[`${controller}Controller`]
        return await instance[method](x,this.res);
    }

    public AddSingleton<V>(key:string,dependency:V):void{
        SingletonService.Add(key,dependency);
    }
}

export default new ServiceCollection();