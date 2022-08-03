class ShirtsListPage {
  private shirtsItem: string;
  private shirtName: string;

  constructor() {
    this.shirtsItem = '.product-container';
    this.shirtName = `${this.shirtsItem} .product-name`;
  }

  getShirtsProducts() {
    return cy.get(this.shirtsItem);
  }

  validateItemsNumber(itemsNumber: number) {
    cy.get(this.shirtsItem).should('have.length', itemsNumber);
  }

  validateItemsNames(names: string[]) {
    cy.get(this.shirtName).each((item, index) => {
      cy.wrap(item).should('contain.text', names[index]);
    });
  }
}

export { ShirtsListPage };
