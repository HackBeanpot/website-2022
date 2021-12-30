describe('Integration test with visual testing', function() {
  beforeEach(() => {
    // Needs to be called before cy.route
    cy.server();

    // Alias request
    cy.route('GET', '*').as('showAll');
    cy.visit('/');
  });

  it('Loads the main page', function() {
    cy.contains('About').click();
    cy.contains('COVID Safety').click();
    cy.contains('FAQ').click();
    cy.contains('Testimonials').click();
    cy.contains('Team').click();

    cy.wait('@showAll');
    // Take a snapshot for visual diffing
    cy.percySnapshot('Main page');
  });
});