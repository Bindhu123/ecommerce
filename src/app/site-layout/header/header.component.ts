import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated!: boolean;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
   this.isAuthenticated= localStorage.getItem('userData') ? true : false;
  }

  onLogout(event: Event) {
   
    localStorage.removeItem('userData');
    this.router.navigate(['auth/login']);  

  }
}
