import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameinfoComponent } from './gameinfo.component';

describe('GameinfoComponent', () => {
  let component: GameinfoComponent;
  let fixture: ComponentFixture<GameinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
