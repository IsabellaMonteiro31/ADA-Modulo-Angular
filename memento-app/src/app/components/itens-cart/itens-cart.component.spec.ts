import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCartComponent } from './itens-cart.component';

describe('ItensCartComponent', () => {
  let component: ItensCartComponent;
  let fixture: ComponentFixture<ItensCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItensCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
