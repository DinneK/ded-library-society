describe("Rancid Tomatillos home page flows", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://openlibrary.org/trending/daily.json", {
      statusCode: 200,
      ok: true,
      fixture: "trendingBooks",
    });
    cy.visit("http://localhost:3000");
  });

  it("Should be able to visit the home page and render the title", () => {
    cy.get("h1").contains("The D.E.D. Library Society");
  });

  it("should click on first book to see book details, including URL", () => {
    cy.get(".book-card").first().click();
    cy.url().should("eq", "http://localhost:3000/books/works/OL17590212W");
  });

  // it("Should be able to search for book by title", () => {
  //   cy.get("input").type("the help").get(".search-button").click();
  //   cy.intercept("GET", "https://openlibrary.org/search.json?q=$help", {
  //     statusCode: 200,
  //     ok: true,
  //     fixture: "searchResults",
  //   });
  //   cy.visit("http://localhost:3000/books/search");
  // });
});
