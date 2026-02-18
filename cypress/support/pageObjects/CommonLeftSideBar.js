const commonLeftSideBar = new class CommonLeftSideBar {

    getSearchInputBox = ".oxd-main-menu-search input";
    getAllMenuElements = ".oxd-main-menu-item span";

    typeOnSearch(text) {
        cy.typeText(this.getSearchInputBox, text)
    }

    clckOnAdmin() {
        cy.clickOnElementText(this.getAllMenuElements, "Admin");
    }


}

export default commonLeftSideBar;