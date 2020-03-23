import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePasswordPage } from './create-password.page';

describe('CreatePasswordPage', () => {
  let component: CreatePasswordPage;
  let fixture: ComponentFixture<CreatePasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePasswordPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
