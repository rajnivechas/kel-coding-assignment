import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { RegisterService } from './register-service.service'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  isRegistrationFailed:boolean = false;
  errorMsg:string = '';

  constructor(
    private _fb:FormBuilder,  
    private _router: Router,
    private spinner: NgxSpinnerService,
    private toaster:ToastrService,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {

    //init Registration form
    this.initRegisterForm();
    
   
 }

 initRegisterForm(){

  this.registerForm  = this._fb.group({     
    firstName:['', [Validators.required, Validators.minLength(6)]],
    lastName: ['', [Validators.required, Validators.minLength(6)]],
    phoneNo:['', [Validators.required,Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    country:['',Validators.required]
  })

 }

 onRegisterSubmit(){

  this.spinner.show();
  //const param =  this.registerForm.value;
  //here using fake url,param,headers
  const _url =  'https://jsonplaceholder.typicode.com/posts'; //this URL we will get from setting/constant service
  const param= JSON.stringify({  // param will be register form body to be posted
    title: 'foo',
    body: 'bar',
    userId: 1,
  }) 
  const headers= { 'Content-type': 'application/json; charset=UTF-8' } // headers will also set dynamically from the service
  
  //call function from register service which further call common API service
  this.registerService.registerUser(_url, headers, param).subscribe((res)=>{
    if(res && res != undefined ){
      this.spinner.hide();
      console.log(res);  
      //Action notification in case of success
      this.toaster.success('Congratulations! Your account has been created.','Success!');

      //Registaration form reset if required
      this.initRegisterForm();       
    } else{
      this.isRegistrationFailed = true;
      this.errorMsg = "Something went wrong";
    }   
  },  
  (errorRes)=>{
    //in case of erroe show erroe message
    this.spinner.hide();    
    this.isRegistrationFailed = true;
    //this.errorMsg ="Incorrect Username or Password!"
    this.errorMsg = "Something went wrong";
   })
 }

}
