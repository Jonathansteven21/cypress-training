class ShippingStepPage {
  private termsCheckbox: string;
  private proceedCheckoutBtn: string;

  constructor() {
    this.checkTerms = '#cgv';
    this.proceedCheckoutBtn = 'button[name="processCarrier"]';
  }

  public checkTermsCheckbox(): void {
    cy.get(this.checkTerms).check();
  }
  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
}

export { ShippingStepPage };
