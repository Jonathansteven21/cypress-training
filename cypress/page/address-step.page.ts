class AddressStepPage {
  private proceedCheckoutBtn: string;

  constructor() {
    this.proceedCheckoutBtn = '.cart_navigation .button-medium';
  }

  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
}

export { AddressStepPage };
