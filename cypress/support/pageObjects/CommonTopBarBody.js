const commonTopBarBody = new class CommonTopBarBody {

    getAllTopbarItems = ".oxd-topbar-body-nav-tab-item";
    getAllDropdownItems = ".oxd-topbar-body-nav-tab-link";

    clickOnATopbarItem(text) {
        cy.clickOnElementText(this.getAllTopbarItems, text);
    }

    clickOnAOptionInDropdown(text) {
        cy.clickOnElementText(this.getAllDropdownItems, text);
    }

    selectAMenueItem(topBarText, menueText) {

        this.clickOnATopbarItem(topBarText);
        this.clickOnAOptionInDropdown(menueText);
    }
}

export default commonTopBarBody;