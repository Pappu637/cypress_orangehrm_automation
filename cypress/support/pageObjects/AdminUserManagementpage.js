import commonTopBarBody from "./CommonTopBarBody";
import commonTopBarHeader from "./CommonTopBarHeader";

const adminUserManagementpage = new class AdminUserManagementpage {

    constructor() {
        this.getUsernameInputBox = ".oxd-input.oxd-input--active";
        this.getAllSelectDropdown = ".oxd-select-text-input";
        this.getAllDropdownOptions = ".oxd-select-option";
        this.getEmployeeNameInputBox = "input[placeholder='Type for hints...']";
    }

    enterUserName() {
        cy.typeTextByIndex(this.getUsernameInputBox, "TestUser", "1");
    }

    selectUserRole() {
        cy.clickOnElementByIndex(this.getAllSelectDropdown, "Dropdown of User Role", "0");
        cy.clickOnElementText(this.getAllDropdownOptions, "Admin");
    }

    enterEmployeeName() {
        cy.typeText(this.getEmployeeNameInputBox, "Jobin Sam");
        cy.wait(2000);
        cy.get(this.getEmployeeNameInputBox).type(`{downarrow}{enter}`);
    }

    selectStatus() {
        cy.clickOnElementByIndex(this.getAllSelectDropdown, "Dropdown of status", "1");
        cy.clickOnElementText(this.getAllDropdownOptions, "Enabled");
    }


}

export default adminUserManagementpage;