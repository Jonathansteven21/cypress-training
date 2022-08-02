class ProductsListPage {
  private addCartBtn: string;
  private proceedCheckoutBtn: string;

  constructor() {
    this.addCartBtn = '.button-container .ajax_add_to_cart_button';
    this.proceedCheckoutBtn = '.button-container a.button-medium';
  }

  public clickAddCartBtn(): void {
    cy.get(this.addCartBtn).click();
  }
  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
}

export { ProductsListPage };
