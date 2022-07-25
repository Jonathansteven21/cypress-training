describe('Buy a t-shirt', () => {
  it('then the t-shirt should be bought', () => {
    cy.visit('http://automationpractice.com/');
    cy.get('#block_top_menu > ul > li:nth-child(3) > a').click();
    cy.get(
      '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
    ).click();
    cy.get("[style*='display: block;'] .button-container > a").click();
    cy.get('.cart_navigation span').click();

    cy.get('#email').type('aperdomobo@gmail.com');
    cy.get('#passwd').type('WorkshopProtractor');

    // Debes completar la prueba ...
    cy.get('#SubmitLogin').click();
    cy.get('#center_column button').click();
    cy.get('#cgv').check();
    cy.get('#form button').click();
    cy.get('#HOOK_PAYMENT a.bankwire').click();
    cy.get('#cart_navigation button').click();

    cy.get('#center_column > div > p > strong').should(
      'have.text',
      'Your order on My Store is complete.'
    );
  });
});
