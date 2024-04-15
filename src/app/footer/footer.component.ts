import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
}
