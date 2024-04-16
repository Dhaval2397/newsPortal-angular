import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateCategoryService {

  constructor(private router:Router) { }
  private titles: string[] = [];

  navigateToCategory(title: string) {
    this.titles.push(title);
    this.router.navigate(['/category', title.toLowerCase().replace(/\s+/g, '-')]);
  }
}
