import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterListComponent } from './flutter-list.component';

describe('FlutterListComponent', () => {
  let component: FlutterListComponent;
  let fixture: ComponentFixture<FlutterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlutterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlutterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
