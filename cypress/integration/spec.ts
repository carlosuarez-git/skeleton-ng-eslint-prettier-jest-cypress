it('loads examples', () => {
  cy.visit('/');
  cy.contains('Juno is running!');
});
