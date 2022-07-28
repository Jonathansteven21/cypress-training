class LoginPage {
  private typeEmail: string;
  private emailUser: string;
  private typePassword: string;
  private passwordUser: string;
  private proceedSubmitLoginBtn: string;

  constructor() {
    this.typeEmail = '#email';
    this.emailUser = 'aperdomobo@gmail.com';
    this.typePassword = '#passwd';
    this.passwordUser = 'WorkshopProtractor';
    this.proceedSubmitLoginBtn = '#SubmitLogin';
  }

  public typeEmailUser(): void {
    cy.get(this.typeEmail).type(this.emailUser);
  }

  public typePasswordUser(): void {
    cy.get(this.typePassword).type(this.passwordUser);
  }

  public clickProceedSubmitLoginBtn(): void {
    cy.get(this.proceedSubmitLoginBtn).click();
  }
}

export { LoginPage };
