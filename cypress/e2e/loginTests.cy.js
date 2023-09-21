import HomePage from "./pages/home";
import LoginPage from "./pages/login";

describe("Login", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  it("Verifica erro ao tentar logar sem nenhuma informação preenchida", () => {
    homePage.loginHomeButtonClick();

    loginPage.loginButtonClick();
    loginPage.inputEmailEmptyMessage();
  });

  it("Verifica mensagem de erro ao tentar logar sem senha preenchida", () => {
    homePage.loginHomeButtonClick();

    loginPage.inputEmailCorrect();
    loginPage.loginButtonClick();
    loginPage.inputPasswordEmptyMessage();
  });

  it("Verifica mensagem de erro ao tentar logar com email incorreto", () => {
    homePage.loginHomeButtonClick();

    loginPage.inputEmailIncorrect();
    loginPage.loginButtonClick();
    loginPage.inputEmailErrorMessage();
  });

  it("Verifica mensagem de erro ao tentar logar com email nao cadastado", () => {
    homePage.loginHomeButtonClick();

    loginPage.inputEmailNotRegistered();
    loginPage.inputPasswordCorrect();
    loginPage.loginButtonClick();
    loginPage.loginErrorMessage();
  });

  it("Verifica mensagem de erro ao tentar logar com a senha incorreta", () => {
    homePage.loginHomeButtonClick();

    loginPage.inputEmailCorrect();
    loginPage.inputPasswordIncorrect();
    loginPage.loginButtonClick();
    loginPage.loginErrorMessage();
  });

  it("Verifica login bem sucedido", () => {
    homePage.loginHomeButtonClick();

    loginPage.inputEmailCorrect();
    loginPage.inputPasswordCorrect();
    loginPage.loginButtonClick();
    homePage.logoutHomeButtonVisible();
  });
});
