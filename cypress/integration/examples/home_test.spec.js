describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/");
  });
});

describe("Req Page", function() {
  it("successfully loads", function() {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://swapi.co/api/people/?page=1",
      response: []
    });
    cy.route({
      method: "GET",
      url: "https://swapi.co/api/people/1/",
      response: []
    });
    cy.get("button").click();
  });
});
