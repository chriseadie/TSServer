import { IApplcationBuilder } from "./Interfaces/IApplicationBuilder";

class ApplicationBuilder implements IApplcationBuilder {

    public useEndpoints:boolean
    constructor(){
        this.useEndpoints = false;
    }

    public UseEndpoints(callback:any){
        this.useEndpoints = true;
        callback(this);
    }
}

export default new ApplicationBuilder();