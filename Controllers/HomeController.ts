import {ServerResponse} from 'http';
import { Ok } from '../Core/ActionResults/actions';
import { Get, Post } from '../Core/Attributes/ActionType';
import { Injectable,Inject } from '../Core/Attributes/Injectable';
import { ServiceTypes } from '../Services/Interfaces';
import {IUserRepository} from '../Services/Interfaces';

@Injectable()
export class HomeController {

    private readonly _userApi:IUserRepository;

    constructor(@Inject(ServiceTypes.UserSerivice)userApi:IUserRepository){
        this._userApi = userApi
    }

    @Post()
    public async Index(){
        console.log("index method hit")
        const userRes = this._userApi.GetAllUsers();
        var res = {value:"testing",data:userRes};
        return Ok(res);
    }

    public async Hello(req:URL,res:ServerResponse){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({value:"Hello",request:req.pathname}));
        res.end();
        return res
    }

}