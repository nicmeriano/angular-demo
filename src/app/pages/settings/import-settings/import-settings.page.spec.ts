import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSettingsPage } from './import-settings.page';

describe('ImportSettingsPage', () => {
  let component: ImportSettingsPage;
  let fixture: ComponentFixture<ImportSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportSettingsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
