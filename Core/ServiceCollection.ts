import {IncomingMessage,ServerResponse} from 'http';
import { IServiceCollection } from './Interfaces/IServiceCollection';
import SingletonService from './SingletonService';
import ApplicationBuilder from './ApplicationBuilder';

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

        if(ApplicationBuilder.useStaticAssets && x.pathname.startsWith(ApplicationBuilder.staticAssetPath)){
            console.log("create method to load assets from provided path")
        }

        try{
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
        var actionResponse = await instance[method](x,this.res);
        console.log(actionResponse);
        this.CreateResponseResult(actionResponse);
        }catch(err:any){
            this.CreateResponseResult({
                statusCode:500,
                type:"document",
                body:err.toString()
            })
        }
        this.res?.end(); 
    }

    public AddSingleton<V>(key:string,dependency:V):void{
        SingletonService.Add(key,dependency);
    }

    public GetRequest():IncomingMessage | null{
        return this.req;
    }

    private CreateResponseResult(options:any){
        this.res?.writeHead(options.statusCode, {
            "Content-Type": options.type
        })
        return this.res?.write(options.body)
    }
}

export default new ServiceCollection();