// import { url, loaderTimer } from "../../src/App";

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
    it("can route to the restaurants page when card is clicked", () => {
        cy.visit("/")
            .get("[data-testid=go-to-restaurants-page]")
            .eq(1)
            .click()
            .url()
            .should("include", `/restaurants`);
    });
});

describe("hitd 404 when a wrong route is typed", () => {
    it("can route to the restaurants page when card is clicked", () => {
        cy.visit("/restaur")
            .url()
            .should("include", "404");
    });
});

describe("changes tabs on restaurant page", () => {
    it("can route to the restaurants page when card is clicked", () => {
        cy.visit("/restaurants")
            .get("[data-testid=ant-tabs]")
            .eq(2)
            .click();
    });
});
