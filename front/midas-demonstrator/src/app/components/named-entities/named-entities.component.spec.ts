import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedEntitiesComponent } from './named-entities.component';

describe('NamedEntitiesComponent', () => {
  let component: NamedEntitiesComponent;
  let fixture: ComponentFixture<NamedEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamedEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
