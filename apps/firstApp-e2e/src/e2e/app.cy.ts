import { getGreeting } from '../support/app.po';

describe('firstApp-e2e', () => {
	beforeEach(() => {
        cy.visit('/login')
    });

	it('should display welcome message', () => {
        cy.visit('/login')
		// Custom command example, see `../support/commands.ts` file
		cy.login('lili.hammer@gmail.com', 'testPassword123!');

		// Function helper example, see `../support/app.po.ts` file
		getGreeting().contains('Login');
	});
});
