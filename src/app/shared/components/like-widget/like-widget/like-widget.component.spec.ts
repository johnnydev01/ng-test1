import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from 'src/app/shared/services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should auto generate Id when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy
  });

  it('should NOT genererated Id when id input property is present', () => {
    const someId = "someId";
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`${LikeWidgetComponent.prototype.like.name}
    should trigger emission when called`, (done) => {
      fixture.detectChanges();
      component.liked.subscribe(() => {
        expect(true).toBeTrue();
        done();
      });
      component.like();
    });
});
