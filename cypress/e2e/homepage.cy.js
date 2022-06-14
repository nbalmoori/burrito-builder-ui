describe('Burrito Builder homepage view', () => {
  beforeEach(() => {
  })

  it('Should display the title and form', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', { fixture: './orders.json' })
    cy.visit('http://localhost:3000/')

    cy.url('http://localhost:3000/')
    cy.contains('Burrito Builder')
    cy.get('form').find('input[type=text]')
    cy.get('form').find('.ingredientButton').should('have.length', '12')
      cy.get('form').contains('beans')
      cy.get('form').contains('steak')
      cy.get('form').contains('carnitas')
      cy.get('form').contains('sofritas')
      cy.get('form').contains('lettuce')
      cy.get('form').contains('queso fresco')
      cy.get('form').contains('pico de gallo')
      cy.get('form').contains('hot sauce')
      cy.get('form').contains('guacamole')
      cy.get('form').contains('jalapenos')
      cy.get('form').contains('cilantro')
      cy.get('form').contains('sour cream')
    cy.contains('Order: Nothing selected')
    cy.get('button').last().should('have.text', 'Submit Order')
  })

  it('Should display the existing orders', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', { fixture: './orders.json' })
    cy.visit('http://localhost:3000/')
    cy.get('.order').should('have.length', 3)
    cy.contains('Kayla')
    cy.contains('carnitas')
    cy.contains('Robbie')
    cy.contains('steak')
    cy.contains('Nikki')
    cy.contains('sofritas')
  })

  it('Should be able to submit a new order', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        id: 101,
        ingredients: ["beans", 'sour cream'],
        name: "Emma"
      },
    })
    cy.visit('http://localhost:3000/')
    cy.get('form')
    .find('input[type=text]')
    .type('Emma')
    .get('.ingredientButton').first().click()
    .get('.ingredientButton').last().click()
    cy.contains('Order: beans, sour cream')
    .get('button').last().click()
    cy.contains('Emma')
    cy.contains('beans')
    cy.contains('queso fresco')

  })
})