import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  onSignupSubmit(){
    let newUser = {
      id: 2,
     email:  this.signUpForm.value.email,
     password: this.signUpForm.value.password
  };
  this.authService.addUser(newUser).subscribe(data => {
    console.log(data);
    
  })
    
   
    
      // this.store.dispatch(setLoadingSpinner({status: true}));
      // this.store.dispatch(loginStart({email, password}));    
  }

}
