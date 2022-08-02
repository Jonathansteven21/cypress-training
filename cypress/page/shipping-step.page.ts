class ShippingStepPage {
  private termsCheckbox: string;
  private proceedCheckoutBtn: string;

  constructor() {
    this.checkTerms = '.checker input';
    this.proceedCheckoutBtn = '.cart_navigation .standard-checkout';
  }

  public checkTermsCheckbox(): void {
    cy.get(this.checkTerms).check();
  }
  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
}

export { ShippingStepPage };
