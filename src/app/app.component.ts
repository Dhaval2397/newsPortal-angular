import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newsPortal';
  constructor(private router:Router) {}
  navigate(data:any){
    localStorage.setItem('title',data);
    this.router.navigate(['/category', data.toLowerCase().replace(/\s+/g, '-')]);
    
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
  aboutus(){
    this.router.navigate(['about'])
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
  contactus(){
    this.router.navigate(['contact'])
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
}
