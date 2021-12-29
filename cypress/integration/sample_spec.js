describe('Integration test with visual testing', function() {
  it('Loads the main page', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('/');

    // Take a snapshot for visual diffing
    cy.percySnapshot('Main page');
  });
});