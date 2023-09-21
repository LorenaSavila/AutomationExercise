class LoginPage {
  loginButtonClick() {
    return cy.get('[data-qa="login-button"]').click();
  }

  inputEmailIncorrect() {
    return cy.get('[data-qa="login-email"]').type("Cristina@email.");
  }

  inputEmailCorrect() {
    return cy.get('[data-qa="login-email"]').type("Cristinafox@email.com");
  }

  inputEmailNotRegistered() {
    return cy.get('[data-qa="login-email"]').type("FionaCruz@email.com");
  }

  inputPasswordCorrect() {
    return cy.get('[data-qa="login-password"]').type("cristinafox");
  }

  inputPasswordIncorrect() {
    return cy.get('[data-qa="login-password"]').type("cristinaFOX");
  }

  loginErrorMessage() {
    return cy
      .get(".login-form > form > p")
      .should("have.text", "Your email or password is incorrect!");
  }

  inputEmailEmptyMessage() {
    return cy.get('[data-qa="login-email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Preencha este campo.");
    });
  }

  inputPasswordEmptyMessage() {
    return cy.get('[data-qa="login-password"]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Preencha este campo.");
    });
  }

  inputEmailErrorMessage() {
    return cy.get('[data-qa="login-email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq(
        '"." está sendo usado em uma posição incorreta em "email.".'
      );
    });
  }
}

export default LoginPage;
