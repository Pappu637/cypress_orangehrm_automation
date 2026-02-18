const loginPage = new class LoginPage {
    getUsernameInputBox = ".orangehrm-login-form .oxd-input";
    getPasswordInputBox = ".orangehrm-login-form .oxd-input";
    getLogInButton = ".oxd-button";
    getAlertTextElement = ".oxd-alert-content p";

    enterUsername(username) {
        cy.typeTextByIndex(this.getUsernameInputBox, username, 0);
    }

    enterPassword(password) {
        cy.typeTextByIndex(this.getUsernameInputBox, password, 1);
    }

    clickOnLoginButton() {
        cy.clickOnElement(this.getLogInButton, "Login");
    }

    login(url, username, password) {
        cy.visit(url);
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickOnLoginButton();
    }

    verifyIncorrectCredentialsIsVisible() {
        cy.verifyElementTextIsVisible(this.getAlertTextElement, "Invalid credentials");
    }
}

export default loginPage;
