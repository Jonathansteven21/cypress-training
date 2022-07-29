class PaymentStepPage {
  private bankWireBtn: string;
  private proceedPaymentBtn: string;
  private confirmationMessageText: string;

  constructor() {
    this.bankWireBtn = '#HOOK_PAYMENT a.bankwire';
    this.proceedPaymentBtn = '#cart_navigation button';
    this.confirmationMessageText = '#center_column > div > p > strong';
  }

  public clickBankWireBtn(): void {
    cy.get(this.bankWireBtn).click();
  }

  public clickProceedPaymentBtn(): void {
    cy.get(this.proceedPaymentBtn).click();
  }

  public getConfirmationMessage(): any {
    return cy.get(this.confirmationMessageText);
  }
}
export { PaymentStepPage };
