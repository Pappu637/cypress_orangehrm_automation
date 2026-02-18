const dashboardPage = new class DashboardPage {

    getDashboardText = ".oxd-topbar-header-breadcrumb > .oxd-text";

    verifyDasboardIsVisible() {
        cy.verifyElementTextIsVisible(this.getDashboardText, "Dashboard");
    }

}

export default dashboardPage;