import {PersonalFormPage} from "../page/index";

const personalFormPage = new PersonalFormPage();

describe("Buy a t-shirt", () => {
  it("then should filling the practice form correctly", () => {
    // Arrange
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
    };
    personalFormPage.visitMenuContentPage();

    // Act
    personalFormPage.fillForm(personalInformation);

    // Assert
    personalFormPage
        .clickProceedSubmitFormBtn()
        .should("have.text", "Thanks for submitting the form");
  });
});
