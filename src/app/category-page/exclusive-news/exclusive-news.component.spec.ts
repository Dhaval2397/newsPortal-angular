import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveNewsComponent } from './exclusive-news.component';

describe('ExclusiveNewsComponent', () => {
  let component: ExclusiveNewsComponent;
  let fixture: ComponentFixture<ExclusiveNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExclusiveNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExclusiveNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
