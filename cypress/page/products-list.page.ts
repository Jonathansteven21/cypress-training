class ProductsListPage {
  private addCartBtn: string;
  private proceedCheckoutBtn: string;
  private shirtsItem: string;

  constructor() {
    this.addCartBtn = 'a[title="Add to cart"]';
    this.proceedCheckoutBtn = 'a[title="Proceed to checkout"]';
    this.shirtsItem = '.product-container';
  }

  public clickAddCartBtn(name: string): void {
    this.findProductByName(name).find(this.addCartBtn).click();
  }
  public clickProceedCheckoutBtn(): void {
    cy.get(this.proceedCheckoutBtn).click();
  }
  private findProductByName(name: string): any {
    return cy.get(this.shirtsItem).filter(`:contains("${name}")`);
  }
}

export { ProductsListPage };
