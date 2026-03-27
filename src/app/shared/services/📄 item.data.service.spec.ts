import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ItemDataService } from './item.data.service';
import { item } from '../models/item.model';

describe('ItemDataService', () => {
  let service: ItemDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemDataService],
    });
    service = TestBed.inject(ItemDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should load items on initialization', () => {
    const mockItems: item[] = [
      {
        id: 1,
        name: 'Гантеля 2кг',
        image: 'https://example.com/image.jpg',
        shortDescription: '...',
        awgPrice: 100,
        fullDescription: 'Тестовий опис',
        specs: 'Вага: 2 кг'
      }
    ];


    const req = httpMock.expectOne('http://localhost:3000/items');
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);

    service.items$.subscribe(items => {
      expect(items.length).toBe(1);
      expect(items[0].name).toBe('Гантеля 2кг');
    });
  });

});
