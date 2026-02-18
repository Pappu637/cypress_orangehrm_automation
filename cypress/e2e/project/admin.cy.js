import adminUserManagementpage from "../../support/pageObjects/AdminUserManagementpage";
import commonLeftSideBar from "../../support/pageObjects/CommonLeftSideBar";
import commonTopBarBody from "../../support/pageObjects/CommonTopBarBody";
import commonTopBarHeader from "../../support/pageObjects/CommonTopBarHeader";
import loginPage from "../../support/pageObjects/LoginPage";

describe("Admin spec", () => {

    before("", () => {
        global.baseURL = Cypress.env("devUrl");
        cy.fixture("login/login-data.json").then(function (loginData) {
            globalThis.loginData = loginData;
        })
    });

    beforeEach("", () => {
        cy.viewport(1920, 1080);
        loginPage.login(baseURL, loginData.username, loginData.password);
        //dashboardPage.verifyDasboardIsVisible();

    });

    it.only("Create system user", () => {
        commonLeftSideBar.clckOnAdmin();
        commonTopBarBody.selectAMenueItem("User Management", "Users");

        adminUserManagementpage.enterUserName();
        adminUserManagementpage.selectUserRole();
        adminUserManagementpage.enterEmployeeName();
        adminUserManagementpage.selectStatus();
    })
})