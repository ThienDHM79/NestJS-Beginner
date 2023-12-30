import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth') //route to auth
export class AuthController{
    constructor( private authService: AuthService) {}
    
    //just like POST ../auth/signup . tell 'auth' in controller
    @Post('signup')
    signup(){
        return 'I am signed up';
    } 
    @Post('signin')
    signin(){
        return 'I am signed in';
    }

}