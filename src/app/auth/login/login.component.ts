import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }
  onLoginSubmit(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log(email,password);
    localStorage.setItem('userData',JSON.stringify(email,password));
    // this.authService.getUser(email).subscribe(data => {
    //   console.log(data);
      
    // });

     this.router.navigate(['products']);
    
      // this.store.dispatch(setLoadingSpinner({status: true}));
      // this.store.dispatch(loginStart({email, password}));    
  }

}
