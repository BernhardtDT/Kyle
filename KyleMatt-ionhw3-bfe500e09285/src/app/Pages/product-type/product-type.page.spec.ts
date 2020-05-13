import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductTypePage } from './product-type.page';

describe('ProductTypePage', () => {
  let component: ProductTypePage;
  let fixture: ComponentFixture<ProductTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
