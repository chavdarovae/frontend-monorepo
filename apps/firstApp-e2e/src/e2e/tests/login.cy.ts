
describe('Login Component', () => {
    beforeEach(() => {
        cy.fixture('login').as('loginData');
    })

    it('should display error message for invalid login', function () {
        const { invalidUser } = (this as any).loginData;
        cy.login(invalidUser.email, invalidUser.password);
        cy.url().should('include', '/login'); 
    });

    it('should log in successfully with valid credentials', function () {
        const { validUser } = (this as any).loginData;
        cy.login(validUser.email, validUser.password);
        cy.url().should('not.include', '/login');
    });
});
