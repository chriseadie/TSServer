import { IApplcationBuilder } from "./Interfaces/IApplicationBuilder";

class ApplicationBuilder implements IApplcationBuilder {

    public useEndpoints:boolean
    public useStaticAssets:boolean;
    public staticAssetPath
    constructor(){
        this.useEndpoints = false;
        this.useStaticAssets = false;
        this.staticAssetPath = ""

    }

    public UseEndpoints(callback:Function){
        this.useEndpoints = true;
        callback(this);
    }

    public UseStaticAssets(callback:Function){
        this.useStaticAssets = true;
        callback(this)
    }
}

export default new ApplicationBuilder();