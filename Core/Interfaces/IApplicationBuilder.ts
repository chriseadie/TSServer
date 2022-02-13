import ApplicationBuilder from "../ApplicationBuilder";

export interface IApplcationBuilder{
    UseEndpoints(callback:Function):void;
    UseStaticAssets(callback:(app:Function) => void):void;
}