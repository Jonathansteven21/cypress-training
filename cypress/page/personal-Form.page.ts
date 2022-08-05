class PersonalFormPage {
  private typeFirstName: string;
  private typeLastName: string;
  private typeEmail: string;
  private checkboxGender: string;
  private typeDateOfBirth: string;
  private typeMobileNumber: string;
  private checkboxHobbies: string;
  private typeCurrentAddress: string;
  private proceedSubmitFormBtn: string;
  private fillingFormPageURL: string;
  private confirmationMessageText: string;

  constructor() {
    this.fillingFormPageURL = 'https://demoqa.com/automation-practice-form';
    this.typeFirstName = '#firstName';
    this.typeLastName = '#lastName';
    this.typeEmail = '#userEmail';
    this.checkboxGender = '#genterWrapper .col-md-9';
    this.typeDateOfBirth = '#dateOfBirthInput';
    this.typeMobileNumber = '#userNumber';
    this.checkboxHobbies = '.custom-checkbox';
    this.typeCurrentAddress = '#currentAddress';
    this.proceedSubmitFormBtn = '#submit';
    this.confirmationMessageText = '#example-modal-sizes-title-lg';
  }

  public visitMenuContentPage(): void {
    cy.visit(this.fillingFormPageURL);
  }

  public fillForm(personalInformation: personalInformation): void {
    cy.get(this.typeFirstName).type(personalInformation.name);
    cy.get(this.typeLastName).type(personalInformation.lastName);
    cy.get(this.typeEmail).type(personalInformation.email);
    cy.get(this.checkboxGender)
      .find(`[value='${personalInformation.gender}']`)
      .check({ force: true });
    cy.get(this.typeDateOfBirth).type(
      `{selectall} ${personalInformation.dateOfBirth}`
    );
    cy.get(this.typeMobileNumber).type(personalInformation.mobileNumber);
    personalInformation.hobbies.forEach((item) => {
      cy.get(this.checkboxHobbies).contains(item).click({ force: true });
    });
    cy.get(this.typeCurrentAddress).type(personalInformation.currentAddress);
  }

  public clickProceedSubmitFormBtn(): any {
    return cy
      .get(this.proceedSubmitFormBtn)
      .click({ force: true })
      .get(this.confirmationMessageText);
  }
}
export { PersonalFormPage };
