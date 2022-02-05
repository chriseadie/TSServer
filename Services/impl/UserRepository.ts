import { IUserRepository } from "../Interfaces";

export default class UserRepostiory implements IUserRepository {

    public GetAllUsers(){
        return [{name:"user1"},{name:"user2"}]
    }

}