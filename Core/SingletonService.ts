

class SingletonService {

    private services:{[key:string]:any}
    constructor(){
        this.services = {}
    }

    public Add(key:string,dependency:any){
        if(this.services[key]) return;
        this.services[key] = dependency;
        return this;
    }

    public Get(key:string){
        try{
            return new this.services[key];
        } catch(err){
            console.error(err);
        }
    }

}


export default new SingletonService();