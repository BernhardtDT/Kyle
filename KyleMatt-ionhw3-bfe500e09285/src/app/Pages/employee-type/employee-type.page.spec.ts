import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeTypePage } from './employee-type.page';

describe('EmployeeTypePage', () => {
  let component: EmployeeTypePage;
  let fixture: ComponentFixture<EmployeeTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
