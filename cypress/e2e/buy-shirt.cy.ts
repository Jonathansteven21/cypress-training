import {
  MenuContentPage,
  ProductsListPage,
  ShopingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    // Arrange
    const userData = {
      emailUser: "aperdomobo@gmail.com",
      emailPassword: "WorkshopProtractor",
    };
    const shirtTitle = "Faded Short Sleeve T-shirts";
    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToTShirtMenu();

    // Assert
    productsListPage.clickAddCartBtn(shirtTitle);
    productsListPage.clickProceedCheckoutBtn();

    shopingCartPage.clickProceedCheckoutBtn();

    loginPage.login(userData.emailUser, userData.emailPassword);

    addressStepPage.clickProceedCheckoutBtn();

    shippingStepPage.checkTermsCheckbox();
    shippingStepPage.clickProceedCheckoutBtn();

    paymentStepPage.clickBankWireBtn();
    paymentStepPage.clickProceedPaymentBtn();
    paymentStepPage
        .getConfirmationMessage()
        .should("have.text", "Your order on My Store is complete.");
  });
});
