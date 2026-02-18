const commonTopBarHeader = new class CommonTopBarHeader {

    getHeaderTitle = ".oxd-topbar-header-title";

    verifyHeaderIsVisible(text) {
        cy.verifyElementTextIsVisible(this.getHeaderTitle, text);
    }


}

export default commonTopBarHeader;