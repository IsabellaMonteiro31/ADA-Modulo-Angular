import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCatalogComponent } from './itens-catalog.component';

describe('ItensCatalogComponent', () => {
  let component: ItensCatalogComponent;
  let fixture: ComponentFixture<ItensCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItensCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
