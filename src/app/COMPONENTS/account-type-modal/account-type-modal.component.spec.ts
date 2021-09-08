import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypeModalComponent } from './account-type-modal.component';

describe('AccountTypeModalComponent', () => {
  let component: AccountTypeModalComponent;
  let fixture: ComponentFixture<AccountTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
