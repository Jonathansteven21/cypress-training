class ProductsListPage {
  private addCartBtn: string;
  private proceedCheckoutBtn: string;

  constructor() {
    this.addCartBtn =
      '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
    this.proceedCheckoutBtn = '#layer_cart a';
  }

  public clickAddCartBtn(): void {
    cy.get(this.addCartBtn).click();
  }
  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
}

export { ProductsListPage };
