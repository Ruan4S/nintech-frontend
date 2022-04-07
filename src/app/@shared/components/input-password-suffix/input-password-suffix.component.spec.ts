import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordSuffixComponent } from './input-password-suffix.component';

describe('InputPasswordSuffixComponent', () => {
  let component: InputPasswordSuffixComponent;
  let fixture: ComponentFixture<InputPasswordSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPasswordSuffixComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
