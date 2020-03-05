import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryBlockPage } from './category-block.page';

describe('CategoryBlockPage', () => {
  let component: CategoryBlockPage;
  let fixture: ComponentFixture<CategoryBlockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryBlockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryBlockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
