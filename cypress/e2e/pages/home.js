class HomePage {
  loginHomeButtonClick() {
    return cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
  }

  logoutHomeButtonVisible() {
    return cy
      .get(".shop-menu > .nav > :nth-child(4) > a")
      .should("have.text", " Logout");
  }
}

export default HomePage;
