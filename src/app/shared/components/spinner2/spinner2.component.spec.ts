import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spinner2Component } from './spinner2.component';

describe('Spinner2Component', () => {
  let component: Spinner2Component;
  let fixture: ComponentFixture<Spinner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Spinner2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spinner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
