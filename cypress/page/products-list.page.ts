class ProductsListPage {
  private addCartBtn: string;
  private proceedCheckoutBtn: string;

  constructor() {
    this.addCartBtn = 'a[title="Add to cart"]';
    this.proceedCheckoutBtn = 'a[title="Proceed to checkout"]';
  }

  public clickAddCartBtn(): void {
    cy.get(this.addCartBtn).click();
  }
  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
}

export { ProductsListPage };
