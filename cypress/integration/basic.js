/// <reference types="cypress" />

describe('Basic Test', () => {
  it('should load app', () => {
    expect(true).to.equal(true);
    cy.visit('https://example.cypress.io/');
    cy.screenshot();
  });
});
