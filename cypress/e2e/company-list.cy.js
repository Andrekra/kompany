describe('Company list page', () => {
  it('Should search for companies', () => {
    cy.visit('/')
    // Normally I'd mock the api out with cy.intercept so I have control over the data.
    cy.get('button[type="submit"]').click()
    cy.get('li[id="1"]').should('exist')
  })
})
