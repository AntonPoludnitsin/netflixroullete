describe('My First Test', () => {
  it('visit our URL', () => {
    cy.visit('http://localhost:3000')
    cy.get('.form-search__input').type("There are no movies here")    
    cy.get('[data-cy=title]').should('contain', "There are no movies here")
  })
})