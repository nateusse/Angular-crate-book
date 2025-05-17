describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Bookly')
  })
})

describe('Test Stephen King', () => {
 it('Visits the initial project page', () => {
   cy.visit('/authors/list')
   cy.contains('Stephen King')
 })
})