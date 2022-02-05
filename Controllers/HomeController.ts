import {ServerResponse} from 'http';
import { Injectable,Inject } from '../Core/Attributes/Injectable';
import { ServiceTypes } from '../Services/Interfaces';
import {IUserRepository} from '../Services/Interfaces';

@Injectable()
export class HomeController {

    private readonly _userApi:IUserRepository;

    constructor(@Inject(ServiceTypes.UserSerivice)userApi:IUserRepository){
        this._userApi = userApi
    }

    public async Index(req:URL,res:ServerResponse){
        
        const userRes = this._userApi.GetAllUsers();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({value:"testing",request:req.pathname,data:userRes}));
        res.end();
        return res
    }

    public async Hello(req:URL,res:ServerResponse){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({value:"Hello",request:req.pathname}));
        res.end();
        return res
    }

}