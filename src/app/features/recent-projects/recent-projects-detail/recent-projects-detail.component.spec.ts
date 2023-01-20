import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProjectsDetailComponent } from './recent-projects-detail.component';

describe('RecentProjectsDetailComponent', () => {
  let component: RecentProjectsDetailComponent;
  let fixture: ComponentFixture<RecentProjectsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentProjectsDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentProjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
