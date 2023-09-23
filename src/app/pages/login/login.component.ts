import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userobj:any={
    username:'',
    password:''
  }
 constructor(private router :Router){

 }
  onlogin(){
    if(this.userobj.username=='admin'&&this.userobj.password=='12345'){
      this.router.navigateByUrl('addinsurance');

    }else{
      alert("Username or Password wrong");
    }
  }

}
