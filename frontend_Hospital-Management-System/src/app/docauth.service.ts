import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor(private router:Router) { }

  authenticate(username:string,password:string)
{
    if(username=="Tanisha" && password=="Tanisha"){
      sessionStorage.setItem('username',username);
    
      return true;
    }
    else{
  
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("doctor loggedin");
    let user=sessionStorage.getItem('username');
    return !(user==null);
  }

  logout(){
    console.log("doctor logged out");
    sessionStorage.removeItem('username');
  }
}
