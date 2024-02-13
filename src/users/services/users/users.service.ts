import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { dummyUsers } from 'data';
import { User } from 'src/users/types';

@Injectable()
export class UsersService {
    private userList = dummyUsers.slice(0,3)
   async fetchAllUsers(userPayload:string):Promise<any>{
    console.log({userPayload})
        // const getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        // const res = await getUsers.json();
        return this.userList;
    }

    createUser(payload:any){
        console.log({payload})
        return this.userList.push(payload)
    }

    fetchUserbyId(id:number){

        const getUser = this.userList.find((user)=>user.id===id);

        if(!getUser){
            throw new HttpException('User not found',HttpStatus.BAD_REQUEST)
        }
        return getUser;
    }
}
