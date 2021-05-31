describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/");
  });
});

describe("Req Page", function() {
  it("successfully loads", function() {
    cy.server();
    cy.get("button").click();
  });
});
