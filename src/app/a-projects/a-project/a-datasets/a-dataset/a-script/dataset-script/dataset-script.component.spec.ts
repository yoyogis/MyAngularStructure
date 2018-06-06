import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetScriptComponent } from './dataset-script.component';

describe('DatasetScriptComponent', () => {
  let component: DatasetScriptComponent;
  let fixture: ComponentFixture<DatasetScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
