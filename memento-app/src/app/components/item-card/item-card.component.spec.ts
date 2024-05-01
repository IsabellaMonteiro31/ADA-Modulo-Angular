import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntemCardComponent } from './item-card.component';

describe('IntemCardComponent', () => {
  let component: IntemCardComponent;
  let fixture: ComponentFixture<IntemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
