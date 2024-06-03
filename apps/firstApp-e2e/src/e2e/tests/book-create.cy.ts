
describe('BookCreateComponent', () => {
    beforeEach(() => {
        cy.loginWithSession('lili.hammer@gmail.com', 'testPassword123!');
        cy.clickNaviBtn('books');
    });

    it('should create a book with title 1984', function () {
        cy.clickBtn('addNew');
        cy.typeInp('title', '1984');
        cy.typeInp('author', 'George Orwel');
        cy.typeInp('pages', '320');
        cy.typeInp('summary', 'Some summary');
        cy.clickBtn('createBtn');
        cy.url().should('not.include', '/new');
        cy.url().should('include', '/books');
    });

    it('should like a book with title 1984', function () {
        cy.get('app-book-preview').contains('1984').click();
        cy.get('.icon__count').should('have.text', '0');
        cy.clickBtn('likeBtn');
        cy.get('.icon__count').should('have.text', '1');
        cy.clickBtn('backToListBtn');
    });

    it('should update a book with title 1984d to 330 paages', function () {
        cy.get('app-book-preview').contains('1984').click();
        cy.selectId('pages').invoke('prop', 'value').should('eq', '320');
        cy.clickBtn('editBtn');
        cy.typeInp('pages', '330');
        cy.clickBtn('updateBtn');
    });

    it('should delete a book with title 1984', function () {
        cy.get('app-book-preview').contains('1984').click();
        cy.selectId('pages').invoke('prop', 'value').should('eq', '330');
        cy.clickBtn('editBtn');
        cy.clickBtn('deleteBtn');
    });

    it('should update a book with title Gone with the wind to 330 paages', function () {
        cy.get('app-book-preview').contains('Gone with the wind').click();
        cy.clickBtn('editBtn');
        cy.typeInp('pages', '330');
        cy.clickBtn('updateBtn');
    });
});
