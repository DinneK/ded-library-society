describe("The D.E.D. single book view flow", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://openlibrary.org/trending/daily.json", {
      statusCode: 200,
      ok: true,
      fixture: "trendingBooks",
    });
    cy.visit("http://localhost:3000");
    cy.get(".book-card").first().click();
    cy.intercept("GET", "https://openlibrary.org/books/OL17590212W.json", {
      statusCode: 200,
      ok: true,
      fixture: "trendingBook1",
    });
    cy.url().should("eq", "http://localhost:3000/books/works/OL17590212W");
  });

  it("should see a book cover", () => {
    cy.get('[alt="The Subtle Art of Not Giving a F*ck Cover"]');
  });

  it("should have a description", () => {
    cy.get(".description-container")
      .get(".single-book-title")
      .contains("THE SUBTLE ART OF NOT GIVING A F*CK");
  });

  // it("Should be able to search for book by title", () => {
  //   cy.get("input").type("help").get(".search-button").click();
  //   cy.intercept("GET", "https://openlibrary.org/search.json?q=$help", {
  //     statusCode: 200,
  //     ok: true,
  //     fixture: "searchResults",
  //   });
  //   cy.visit("http://localhost:3000/books/search");
  // });
});
