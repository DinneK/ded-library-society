describe("The D.E.D. home page flows", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://openlibrary.org/trending/daily.json", {
      statusCode: 200,
      ok: true,
      fixture: "trendingBooks",
    });
    cy.visit("http://localhost:3000");
  });

  it("should be able to visit the home page and render the title", () => {
    cy.get("h1").contains("The D.E.D. Library Society");
  });

  it("should be able to click the your favorites button and get to your favorite books", () => {
    cy.get(".header-button").first().click();
    cy.url().should("eq", "http://localhost:3000/books/saved");
  });

  it("should be able to click the home button from anywhere", () => {
    cy.get(".header-button").last().click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should click on first book to see book details, including URL", () => {
    cy.get(".book-card").first().click();
    cy.intercept("GET", "https://openlibrary.org/books/OL17590212W.json", {
      statusCode: 200,
      ok: true,
      fixture: "trendingBook1",
    });
    cy.url().should("eq", "http://localhost:3000/books/works/OL17590212W");
  });

  it("Should be able to search for book by title", () => {
    cy.get("input").type("help").get(".search-button").click();
    cy.intercept("GET", "https://openlibrary.org/search.json?q=$charlotte", {
      statusCode: 200,
      ok: true,
      fixture: "searchResults",
    });
    cy.visit("http://localhost:3000/books/search");
  });
});
