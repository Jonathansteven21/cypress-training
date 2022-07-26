class MenuContentPage {
  private tShirtMenu: string;
  private dressesMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.tShirtMenu = '.menu-content > li > a[title=T-shirts]';
    this.dressesMenu = '.menu-content > li > a[title=Dresses]';
    this.menuContentPageURL = 'http://automationpractice.com/';
  }
  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }
  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }
  public goToDressesMenu(): void {
    cy.get(this.dressesMenu).click();
  }
}
export { MenuContentPage };
