class ShopingCartPage {
  private proceedCheckoutBtn: string;

  constructor() {
    this.proceedCheckoutBtn = '.cart_navigation .standard-checkout';
  }

  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
}

export { ShopingCartPage };
