class LoginPage {
  private typeEmail: string;
  private typePassword: string;
  private proceedSubmitLoginBtn: string;

  constructor() {
    this.typeEmail = '#login_form #email';
    this.typePassword = '#login_form #passwd';
    this.proceedSubmitLoginBtn = '#SubmitLogin';
  }

  public login(emailUser: string, passwordUser: string): void {
    cy.get(this.typeEmail).type(emailUser);
    cy.get(this.typePassword).type(passwordUser);
    cy.get(this.proceedSubmitLoginBtn).click();
  }
}

export { LoginPage };
