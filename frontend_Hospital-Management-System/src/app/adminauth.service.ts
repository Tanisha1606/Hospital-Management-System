import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  authenticate(username2:string,password2:string){
    if(username2=='Tanu' && password2=='Tanisha'){
      sessionStorage.setItem('username',username2);
      return true;

    }
    else{
      return false;
    }


  }


  isUserLoggedIn(){
    console.log("user loggedin")
    let user=sessionStorage.getItem('username');
    return !(user==null);
  }

  logout(){
    console.log("loggedout")
    sessionStorage.removeItem('username');
  }
}
