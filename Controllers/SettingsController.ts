import {ServerResponse} from 'http';

export class SettingsController {

    public async Index(req:URL,res:ServerResponse){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({value:"Settings Index",request:req.pathname}));
        res.end();
        return res
    }

    public async AnotherRoute(req:URL,res:ServerResponse){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({value:"Settings Another Route",request:req.pathname}));
        res.end();
        return res
    }
}