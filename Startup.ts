import { IApplcationBuilder } from './Core/Interfaces/IApplicationBuilder';
import { IServiceCollection } from './Core/Interfaces/IServiceCollection';
import { ServiceTypes } from './Services/Interfaces';
import UserRepostiory from './Services/impl/UserRepository';

class Startup {

    public async ConfigureServices(services:IServiceCollection){

        services.AddControllersWithViews();

        services.AddSingleton(ServiceTypes.UserSerivice,UserRepostiory);
        
    }

    public Configure(app: IApplcationBuilder):void{

        app.UseEndpoints((endpoints:any) => {
            endpoints.route = "/Controller/:id"
        })

    }
}

export default new Startup();