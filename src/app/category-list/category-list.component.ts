import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  categories = [
    'Sport', 'Entertainment', 'Business', 'Bollywood', 'Politic', 'Education', 'Web Series',
    'Health & Wellness', 'Prices', 'Currencies', 'Lifestyle', 'Technology', 'Trending',
    'Food', 'Robotics', 'Art & Craft', 'Arcitructure', 'Defence'
  ];
  showPrevButton = false;
  showNextButton = true;
  scrollAmount = 200; // Adjust this value as needed

  constructor(private elementRef: ElementRef, private router:Router) {}

  onScroll(event: Event) {
    const container = this.elementRef.nativeElement.querySelector('.category-list-wrapper');
    this.showPrevButton = container.scrollLeft > 0;
    this.showNextButton = container.scrollLeft + container.clientWidth < container.scrollWidth;
  }

  scrollLeft() {
    const container = this.elementRef.nativeElement.querySelector('.category-list-wrapper');
    container.scrollTo({ left: container.scrollLeft - this.scrollAmount, behavior: 'smooth' });
  }

  scrollRight() {
    const container = this.elementRef.nativeElement.querySelector('.category-list-wrapper');
    container.scrollTo({ left: container.scrollLeft + this.scrollAmount, behavior: 'smooth' });
  }
  navigate(data:any){
    // console.log('yha aaya hai');
    localStorage.setItem('title',data);
    this.router.navigate(['/category', data.toLowerCase().replace(/\s+/g, '-')]);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
}
