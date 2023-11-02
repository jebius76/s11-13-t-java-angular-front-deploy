import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricaComponent } from './metrica.component';

describe('MetricaComponent', () => {
  let component: MetricaComponent;
  let fixture: ComponentFixture<MetricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetricaComponent]
    });
    fixture = TestBed.createComponent(MetricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
