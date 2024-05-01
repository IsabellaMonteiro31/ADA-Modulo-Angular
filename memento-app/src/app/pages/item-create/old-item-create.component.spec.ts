import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldItemCreateComponent } from './old-item-create.component';

describe('OldItemCreateComponent', () => {
  let component: OldItemCreateComponent;
  let fixture: ComponentFixture<OldItemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldItemCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
