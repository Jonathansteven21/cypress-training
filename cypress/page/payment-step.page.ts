class PaymentStepPage {
  private bankWireBtn: string;
  private proceedPaymentBtn: string;
  private confirmationMessageText: string;

  constructor() {
    this.bankWireBtn = '.payment_module .bankwire';
    this.proceedPaymentBtn = '#cart_navigation .button-medium';
    this.confirmationMessageText = '#center_column .cheque-indent strong';
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
