import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCardSmall } from './item-card-small';
import { RouterTestingModule } from '@angular/router/testing';
import { ShortenPipe } from '../shared/pipes/shorten.pipe';
import { By } from '@angular/platform-browser';

describe('ItemCardSmall', () => {
  let component: ItemCardSmall;
  let fixture: ComponentFixture<ItemCardSmall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardSmall, RouterTestingModule],
      providers: [ShortenPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCardSmall);
    component = fixture.componentInstance;
  });

  it('should display item name and image', () => {
    component.card_of_item = {
      id: '1',
      name: 'Гантеля 2кг',
      image: 'https://example.com/image.jpg',
      shortDescription: 'Короткий опис',
      awgPrice: 100
    } as any;

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Гантеля 2кг');
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
  });
});
