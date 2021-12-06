import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubServicesQuickLinksPage } from './sub-services-quick-links.page';

describe('SubServicesQuickLinksPage', () => {
  let component: SubServicesQuickLinksPage;
  let fixture: ComponentFixture<SubServicesQuickLinksPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubServicesQuickLinksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubServicesQuickLinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
