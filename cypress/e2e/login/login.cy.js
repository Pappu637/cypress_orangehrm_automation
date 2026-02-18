/// <reference types="cypress" />

import loginPage from "../../support/pageObjects/LoginPage";
import dashboardPage from "../../support/pageObjects/DashboardPage";

describe("Login Spec", () => {
  before("", () => {
    global.baseURL = Cypress.env("devUrl");
    cy.fixture("login/login-data.json").then(function (loginData) {
      globalThis.loginData = loginData;
    })
  });

  beforeEach("", () => {
    cy.viewport(1920, 1080);
  });

  it("Verify alert message for wrong username", () => {
    loginPage.login(baseURL, loginData.wrongUsername, loginData.password);
    loginPage.verifyIncorrectCredentialsIsVisible();
  });

  it("Verify alert message for wrong password", () => {
    loginPage.login(baseURL, loginData.username, loginData.wrongPassword);
    loginPage.verifyIncorrectCredentialsIsVisible();
  });

  it("Verify alert message for wrong username and wrong password", () => {
    loginPage.login(baseURL, loginData.username, loginData.wrongPassword);
    loginPage.verifyIncorrectCredentialsIsVisible();
  });

  it("Verify Successfully login", () => {
    loginPage.login(baseURL, loginData.username, loginData.password);
    dashboardPage.verifyDasboardIsVisible();
  });
});
