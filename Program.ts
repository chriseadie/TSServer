
import ApplicationBuilder from './Core/ApplicationBuilder';
import ServiceCollection from './Core/ServiceCollection';
import { WebHostService } from './Core/WebHostService';
import Startup from "./Startup";

export class Program{

    public async main(args:any){

        Startup.Configure(ApplicationBuilder)

        WebHostService(async (req,res) => {
            ServiceCollection.Initialize(req,res);
            return await Startup.ConfigureServices(ServiceCollection);
        }).listen(8080);
    }
}