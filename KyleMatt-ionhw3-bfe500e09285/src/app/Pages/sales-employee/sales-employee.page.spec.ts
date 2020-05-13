import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesEmployeePage } from './sales-employee.page';

describe('SalesEmployeePage', () => {
  let component: SalesEmployeePage;
  let fixture: ComponentFixture<SalesEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEmployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
