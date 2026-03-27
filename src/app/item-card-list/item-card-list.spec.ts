import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCardList } from './item-card-list';
import { ItemDataService } from '../shared/services/item.data.service';
import { of } from 'rxjs';
import { item } from '../shared/models/item.model';
import { provideRouter } from '@angular/router';

describe('ItemCardList (integration)', () => {
  let fixture: ComponentFixture<ItemCardList>;
  let mockDataService: jasmine.SpyObj<ItemDataService>;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('ItemDataService', ['filterItems'], {
      items$: of([
        {
          id: 1,
          name: 'Гантеля 2кг',
          image: 'https://example.com/image.jpg',
          shortDescription: '...',
          awgPrice: 100,
          fullDescription: 'Тестовий опис',
          specs: 'Вага: 2 кг'
        } as item,
        {
          id: 2,
          name: 'Бігова доріжка',
          image: 'https://content2.rozetka.com.ua/goods/images/big/302449882.jpg',
          shortDescription: 'Щоб бігати, не виходячи з хати',
          awgPrice: 1000,
          fullDescription:
            'Чудово підходить для довгих тренувань на витривалість і для підготовки до спринту не виходячи з кімнати. Великий вбудований стіл дозволяє розмістити повноцінний робочий сетап і займатися бігом чи ходою, одночасно виконуючи роботу.',
          specs:
            'Довжина: 2 м; Ширина: 0.7 м; Максимальна швидкість: 50 км/год; Мінімальна швидкість: 3 км/год'
        } as item
      ])
    });

    await TestBed.configureTestingModule({
      imports: [ItemCardList],
      providers: [
        { provide: ItemDataService, useValue: mockDataService },
        provideRouter([]) // ✅ додає ActivatedRoute, RouterLink, Router тощо
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCardList);
    fixture.detectChanges();
  });

  it('should render a list of item cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('app-item-card');
    expect(cards.length).toBe(2);
    expect(compiled.textContent).toContain('Гантеля 2кг');
  });

  it('should call filterItems on search change', () => {
    fixture.componentInstance.searchTerm = 'гантеля';
    fixture.componentInstance.onSearchChange();
    expect(mockDataService.filterItems).toHaveBeenCalledWith('гантеля');
  });
});
