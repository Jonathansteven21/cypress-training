class PaymentStepPage {
  private bankWireBtn: string;

  constructor() {
    this.bankWireBtn = '#HOOK_PAYMENT a.bankwire';
  }

  public clickBankWireBtn(): void {
    cy.get(this.bankWireBtn).click();
  }
}

export { PaymentStepPage };
