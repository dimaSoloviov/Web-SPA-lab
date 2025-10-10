


import { Injectable } from '@angular/core';
import { item } from '../models/item.model';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private itemslist: item[] = [

    {
      id: 1,
      name: "Гантеля 2кг",
      image: "https://stok.top/image/cache/catalog/products/ganteli/sport/ganteli-dlya-fitnesu-2sht-po-1-5kg-perto-00887-blakitni-00887-700x700.jpg",
      shortDescription: "Щоб був біцепс як у Арнольда",
      awgPrice: 100,
      fullDescription: "Проведені широкомаштабні наукові дослідження від всім відомих мажнаціональних огранізацій 'Gantelya international', 'GymProfi', 'Protein for you' гателя чудово підходе для стимуляції гіпертрофії м'язлвих тканин і одночано росту і тренуванню мітохондріальних клітин для підвищення витривалості. Особисто Арнольд Шварценеггер використовував цю модель для тренування під час підготовки до зйомок фільму Термінатор",
      specs:
        "Вага: 2 кг" +
        "матеріал: високовуглецева мінаральна біосумісна пластмаса "
    },
    {
      id: 2,
      name: "Бігова доріжка",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent2.rozetka.com.ua%2Fgoods%2Fimages%2Fbig%2F302449882.jpg&f=1&nofb=1&ipt=cd13fbce40886f1256c7f40a8f0aeb2e8c67305d9424ef27a464bb97de24f232",
      shortDescription: "Щоб бігати, не виходячи з хати",
      awgPrice: 1000,
      fullDescription: "Чудово підходить для довгих тренувань на витривалість і для підготовки для спринку не виходячи з кімнати. Великий вбудований стіл дозволяє розмістити повноцінний робочий сетап і займатися бігом чи ходою, одночасно виконуючи свою роботу",
      specs:
        "Довжина: 2м" +
        "Ширина: 0.7м" +
        "Максимальна швидкість: 50 км/год" +
        "Мінімальна швидкість: 3 км/год"
    },
    {
      id: 3,
      name: "Гантелі регульовані",
      image: "https://images.prom.ua/6199802815_w1280_h640_6199802815.jpg",
      shortDescription: "Щоб звіряти вагу кавуна на базарі",
      awgPrice: 1000,
      fullDescription: "Часто коли ви щось купуєте на базарі, то нечесні продавці можуть використовувати підроблені міри щоб завищити ціну свого товару. З нашим винаходом ви можете легко перевірити чесність продавця.",
      specs:
        "Діапазон регулювання кожної гантелі: 2 - 30 кг" +
        "Гарантійний термін: 1000 підіймань"
    },
    {
      id: 4,
      name: "Гантеля 2кг",
      image: "https://stok.top/image/cache/catalog/products/ganteli/sport/ganteli-dlya-fitnesu-2sht-po-1-5kg-perto-00887-blakitni-00887-700x700.jpg",
      shortDescription: "Щоб був біцепс як у Арнольда",
      awgPrice: 100,
      fullDescription: "Проведені широкомаштабні наукові дослідження від всім відомих мажнаціональних огранізацій 'Gantelya international', 'GymProfi', 'Protein for you' гателя чудово підходе для стимуляції гіпертрофії м'язлвих тканин і одночано росту і тренуванню мітохондріальних клітин для підвищення витривалості. Особисто Арнольд Шварценеггер використовував цю модель для тренування під час підготовки до зйомок фільму Термінатор",
      specs:
        "Вага: 2 кг" +
        "матеріал: високовуглецева мінаральна біосумісна пластмаса "
    },
    {
      id: 5,
      name: "Бігова доріжка",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent2.rozetka.com.ua%2Fgoods%2Fimages%2Fbig%2F302449882.jpg&f=1&nofb=1&ipt=cd13fbce40886f1256c7f40a8f0aeb2e8c67305d9424ef27a464bb97de24f232",
      shortDescription: "Щоб бігати, не виходячи з хати",
      awgPrice: 1000,
      fullDescription: "Чудово підходить для довгих тренувань на витривалість і для підготовки для спринку не виходячи з кімнати. Великий вбудований стіл дозволяє розмістити повноцінний робочий сетап і займатися бігом чи ходою, одночасно виконуючи свою роботу",
      specs:
        "Довжина: 2м" +
        "Ширина: 0.7м" +
        "Максимальна швидкість: 50 км/год" +
        "Мінімальна швидкість: 3 км/год"
    },
    {
      id: 6,
      name: "Гантелі регульовані",
      image: "https://images.prom.ua/6199802815_w1280_h640_6199802815.jpg",
      shortDescription: "Щоб звіряти вагу кавуна на базарі",
      awgPrice: 1000,
      fullDescription: "Часто коли ви щось купуєте на базарі, то нечесні продавці можуть використовувати підроблені міри щоб завищити ціну свого товару. З нашим винаходом ви можете легко перевірити чесність продавця.",
      specs:
        "Діапазон регулювання кожної гантелі: 2 - 30 кг" +
        "Гарантійний термін: 1000 підіймань"
    },
    {
      id: 7,
      name: "Гантеля 2кг",
      image: "images/Gantelya_potujna.jpg",
      shortDescription: "Щоб був біцепс як у Арнольда",
      awgPrice: 100,
      fullDescription: "Проведені широкомаштабні наукові дослідження від всім відомих мажнаціональних огранізацій 'Gantelya international', 'GymProfi', 'Protein for you' гателя чудово підходе для стимуляції гіпертрофії м'язлвих тканин і одночано росту і тренуванню мітохондріальних клітин для підвищення витривалості. Особисто Арнольд Шварценеггер використовував цю модель для тренування під час підготовки до зйомок фільму Термінатор",
      specs:
        "Вага: 2 кг" +
        "матеріал: високовуглецева мінаральна біосумісна пластмаса "
    },
    {
      id: 8,
      name: "Бігова доріжка",
      image: "images/treadmill.jpg",
      shortDescription: "Щоб бігати, не виходячи з хати",
      awgPrice: 1000,
      fullDescription: "Чудово підходить для довгих тренувань на витривалість і для підготовки для спринку не виходячи з кімнати. Великий вбудований стіл дозволяє розмістити повноцінний робочий сетап і займатися бігом чи ходою, одночасно виконуючи свою роботу",
      specs:
        "Довжина: 2м" +
        "Ширина: 0.7м" +
        "Максимальна швидкість: 50 км/год" +
        "Мінімальна швидкість: 3 км/год"
    },
    {
      id: 9,
      name: "Гантелі регульовані",
      image: "images/adjustable_dumbbells.j.jpg",
      shortDescription: "Щоб звіряти вагу кавуна на базарі",
      awgPrice: 1000,
      fullDescription: "Часто коли ви щось купуєте на базарі, то нечесні продавці можуть використовувати підроблені міри щоб завищити ціну свого товару. З нашим винаходом ви можете легко перевірити чесність продавця.",
      specs:
        "Діапазон регулювання кожної гантелі: 2 - 30 кг;" +
        "Гарантійний термін: 1000 підіймань"
    },
  ];


  constructor() {}


  // BehaviorSubject для поточного стану списку
  private itemsSubject = new BehaviorSubject<item[]>(this.itemslist);
  items$: Observable<item[]> = this.itemsSubject.asObservable();

  getItemById(id: number): item | undefined {
    return this.itemsSubject.getValue().find(i => i.id === id);
  }


  // 🔹 Метод для фільтрації
  filterItems(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.itemsSubject.next(this.itemslist);
    } else {
      const filtered = this.itemslist.filter(el =>
        el.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        el.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.itemsSubject.next(filtered);
    }
  }
}



















