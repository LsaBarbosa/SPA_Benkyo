import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativasComponent } from './administrativas.component';

describe('AdministrativasComponent', () => {
  let component: AdministrativasComponent;
  let fixture: ComponentFixture<AdministrativasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativasComponent]
    });
    fixture = TestBed.createComponent(AdministrativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
