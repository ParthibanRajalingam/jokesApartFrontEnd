import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitJokeComponent } from './submit-joke.component';

describe('SubmitJokeComponent', () => {
  let component: SubmitJokeComponent;
  let fixture: ComponentFixture<SubmitJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
