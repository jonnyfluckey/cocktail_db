/// <reference types="Cypress" />

describe("My First Test", function() {
  it("visits the cocktail search page", function() {
    const input = "Margarita";
    cy.visit("/search");
    cy.get("[data-cy=input]")
      .type(input)
      .should("have.value", input);
  });
});
