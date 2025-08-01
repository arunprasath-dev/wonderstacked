import { expect, test } from 'cypress';

test('Sample End-to-End Test', () => {
  // Visit the home page
  cy.visit('/');

  // Check if the logo is visible
  cy.get('img[alt="Next.js logo"]').should('be.visible');

  // Check if the "Deploy now" link is visible
  cy.contains('Deploy now').should('be.visible');

  // Check if the "Read our docs" link is visible
  cy.contains('Read our docs').should('be.visible');
});
