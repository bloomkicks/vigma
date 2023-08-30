describe("Webpage in general", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a working quiz section", () => {
    cy.get("#quiz label:first-child > div").as("option");

    cy.get("@option").click();
    cy.get("@option")
      .invoke("css", "border-top-width")
      .should("eq", "2px");

    cy.get("#quiz div:last-child > button:first-child").click();
    cy.get("@option")
      .invoke("css", "border-top-width")
      .should("eq", "0px");
  });

  it("has a working products slider", () => {
    cy.viewport(1280, 784);

    cy.get("#products .slider > div > div:nth-child(1)").should(
      "be.visible"
    );
    cy.get("#products .slider > div > div:nth-child(2)").should(
      "not.be.visible"
    );

    cy.get('#products button:has(img[alt="Вперед"])').should(
      "be.visible"
    );
    cy.get('#products button:has(img[alt="Вперед"])').click();

    cy.get("#products .slider > div > div:nth-child(1)").should(
      "not.be.visible"
    );
    cy.get("#products .slider > div > div:nth-child(2)").should(
      "be.visible"
    );
  });

  it("has a working mobile nav menu", () => {
    cy.viewport(412, 760);

    cy.get("nav").should("not.be.visible");
    cy.get('[aria-label="Открыть меню"]').click();
    cy.get("nav").should("be.visible");

    cy.viewport(1280, 784);

    cy.get("nav").should("not.exist");
  });

  it("has a working materials slider", () => {
    cy.viewport(1280, 784);

    cy.get("#our-materials .slider > div > div:nth-child(1)").should(
      "be.visible"
    );
    cy.get("#our-materials .slider > div > div:nth-child(2)").should(
      "not.be.visible"
    );

    cy.get('#our-materials button:has(img[alt="Вперед"])').should(
      "be.visible"
    );
    cy.get('#our-materials button:has(img[alt="Вперед"])').click();

    cy.get("#our-materials .slider > div > div:nth-child(1)").should(
      "not.be.visible"
    );
    cy.get("#our-materials .slider > div > div:nth-child(2)").should(
      "be.visible"
    );
  });

  it("has a working modal card", () => {
    cy.get(".modal").should("not.be.visible");
    cy.get("#hero button").click();
    cy.get(".modal").should("be.visible");
  });
});
