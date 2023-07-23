describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#username').type('JohnDoe');
    cy.get('#password').type('pass111');
    cy.get('#login_btn').click();
    cy.get('#welcome_msg').contains("You have been logged, JohnDoe!");
  })
})