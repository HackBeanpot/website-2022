describe('Integration test with visual testing', function() {
  it('Loads the main page', function() {
    cy.visit('/')

    // load all the images by scrolling to the bottom of the page
    cy.get('.footer').scrollIntoView({ duration: 5000 })
    // extra time, just to be sure
    cy.wait(5000);

    // Take a snapshot for visual diffing
    cy.percySnapshot('Main page');
  });
});