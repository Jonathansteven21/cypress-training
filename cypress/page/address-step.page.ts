class AddressStepPage {
  private proceedCheckoutBtn: string;

  constructor() {
    this.proceedCheckoutBtn = '.cart_navigation [name=processAddress]';
  }

  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
}

export { AddressStepPage };
