import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss'
})
export class UserPanelComponent {
  searchText: any;
  notificationMessage: string | undefined;
  // message:string| null=""
  constructor(private router: Router,private notificationService:NotificationService) { 
    
  }
  navigate(data: any) {
    localStorage.setItem('title', data);
    this.router.navigate(['/category', data.toLowerCase().replace(/\s+/g, '-')]);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  aboutus() {
    this.router.navigate(['about'])
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  contactus() {
    this.router.navigate(['contact'])
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
 
  // message= localStorage.getItem('message');
    
  
  
  
}
