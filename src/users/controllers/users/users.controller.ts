import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common/pipes';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/users/types';

@Controller('users')
export class UsersController {


    constructor(private readonly userService: UsersService) { }

    @Get()
     getAllUsers() {
       
        return this.userService.fetchAllUsers('rakib');
    }
    //  getAllUsers(@Query('sortByAsc', ParseBoolPipe) sortByAsc: boolean): Promise<any> {
    //     console.log({ sortByAsc })

    //     return this.userService.fetchAllUsers();
    // }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userPayload: CreateUserDto) {
        // console.log('req',request.body)

        // response.send('user created!!!')
        // console.log(userPayload)
        this.userService.createUser(userPayload)
        return {};
    }


    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.fetchUserbyId(id);
    }
}
