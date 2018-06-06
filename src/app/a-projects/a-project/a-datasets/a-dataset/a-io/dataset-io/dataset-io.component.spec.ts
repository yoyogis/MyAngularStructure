import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetIOComponent } from './dataset-io.component';

describe('DatasetIOComponent', () => {
  let component: DatasetIOComponent;
  let fixture: ComponentFixture<DatasetIOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetIOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
