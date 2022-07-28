import _ = require("cypress/types/lodash");
import {
  MenuContentPage,
  ProductslistPage,
  ShopingCartPage,
  LoginPage,
  AdressStepPage,
  ShippingStepPage,
  PaymentStepPage
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
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.clickAddCartBtn();
    productsListPage.clickProceedCheckoutBtn();

    shopingCartPage.clickProceedCheckoutBtn();

    loginPage.typeEmailUser();
    loginPage.typePasswordUser();
    loginPage.clickProceedSubmitLoginBtn();

    addressStepPage.clickProceedCheckoutBtn();

    shippingStepPage.checkTermsCheckbox();
    shippingStepPage.clickProceedCheckoutBtn();

    paymentStepPage.clickBankWireBtn();

    cy.get("#cart_navigation button").click();

    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
