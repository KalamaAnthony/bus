import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalamaComponent } from './kalama.component';

describe('KalamaComponent', () => {
  let component: KalamaComponent;
  let fixture: ComponentFixture<KalamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KalamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KalamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
