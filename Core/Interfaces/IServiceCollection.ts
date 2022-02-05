

export interface IServiceCollection{
    AddControllersWithViews():void;
    AddSingleton<V>(key:string,dependency:V):void;
}