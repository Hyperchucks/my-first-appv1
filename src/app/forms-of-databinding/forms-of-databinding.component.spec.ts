import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOfDatabindingComponent } from './forms-of-databinding.component';

describe('FormsOfDatabindingComponent', () => {
  let component: FormsOfDatabindingComponent;
  let fixture: ComponentFixture<FormsOfDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsOfDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsOfDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
