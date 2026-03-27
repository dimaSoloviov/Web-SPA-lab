
describe('Full flow: login → add item → view item', () => {
  it('should log in, add new item and see it in list', () => {
    cy.visit('http://localhost:4200/login');

    // логін
    cy.get('input[name=email]').type('admin@gmail.com');
    cy.get('input[name=password]').type('123456');
    cy.get('button[type=submit]').click();

    // після логіну — редірект на сторінку items
    cy.url().should('include', 'http://localhost:4200/items');

    // перехід на форму додавання
    cy.contains('Додати').click();
    cy.url().should('include', 'http://localhost:4200/items/add-item');

    // заповнення всіх полів
    cy.get('input[formControlName=name]').type('Нова гантеля');
    cy.get('input[formControlName=image]').type('https://stok.top/image/cache/catalog/products/ganteli/sport/ganteli-dlya-fitnesu-2sht-po-1-5kg-perto-00887-blakitni-00887-700x700.jpg');
    cy.get('textarea[formControlName=shortDescription]').type('Короткий опис');
    cy.get('input[formControlName=awgPrice]').type('250');
    cy.get('textarea[formControlName=fullDescription]').type('Детальний опис');
    cy.get('textarea[formControlName=specs]').type('Вага: 2 кг');


    // сабміт
    cy.get('button[type=submit]').click();

    // перевірка — редірект назад до списку
    cy.url().should('include', 'http://localhost:4200/items');

    // перевірка — айтем з’явився у списку
    cy.contains('Нова гантеля').should('exist');
  });
});
