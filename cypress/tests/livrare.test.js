/* globals cy */

describe("Loading", () => {
    it("shows the loading for 1000ms", () => {
        cy.visit("/")
            .get("[data-testid=loader]")
            .should("have.class", "show");
    });
    it("shows the landing page after loading for 1000ms", () => {
        cy.visit("/")
            .wait(1000)
            .get("[data-testid=loader]")
            .should("have.class", "hide");
    });
});

describe("routing", () => {
    it("can route users properly if they fall on /", () => {
        cy.visit("/")
            .wait(10)
            .url()
            .should("include", `/landing`);
    });

    it("can route to the restaurants page when card is clicked", () => {
        cy.visit("/")
            .get("[data-testid=go-to-restaurants-page]")
            .eq(1)
            .click()
            .url()
            .should("include", `/restaurants`);
    });
});

describe("404", () => {
    it("is shown for invalid routes", () => {
        cy.get("[data-testid=nav-links]")
            .eq(1)
            .click()
            .url()
            .should("include", "#/404");
    });

    it("go home button re-routes users to home page", () => {
        cy.get("[data-testid=to-safehouse]")
            .click()
            .url()
            .should("include", "/landing");
    });
});

describe("changes tabs on restaurant page", () => {
    it("can route to the restaurants page when card is clicked", () => {
        cy.visit("/restaurants")
            .wait(2500)
            .get("#tab-2")
            .click()
            .should("have.class", "ant-tabs-tab-active");
    });
});

describe("logo on", () => {
    it("header can route to the home page when clicked", () => {
        cy.visit("/restaurants")
            .wait(2500)
            .get("[data-testid=route-home-from-header]")
            .click()
            .url()
            .should("include", "/landing");
    });

    it("footer can route to the home page when clicked", () => {
        cy.visit("/restaurants")
            .wait(2500)
            .get("#footer")
            .scrollIntoView()
            .get("[data-testid=route-home-from-footer]")
            .click()
            .url()
            .should("include", "/landing");
    });
});

describe("from screen sizes <= 870px", () => {
    it("hamburger is displayed", () => {
        cy.viewport("ipad-2")
            .visit("/")
            .wait(3000)
            .get("[data-testid=hamburger-container]")
            .then($el => {
                Cypress.dom.isHidden($el); // false
            });
        // .and("match", "block");
    });

    it("hamburger shows nav when clicked", () => {
        cy.viewport("ipad-2")
            .visit("/")
            .wait(3000)
            .get("[data-testid=hamburger-container]")
            .click()
            .get("[data-testid=burger-dropdown]")
            .then($el => {
                Cypress.dom.isHidden($el); // false
            });
    });
});
