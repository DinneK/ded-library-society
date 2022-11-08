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

  it("should have book details", () => {
    cy.get(".description-container")
      .get(".single-book-title")
      .contains("THE SUBTLE ART OF NOT GIVING A F*CK");
      cy.get(".description-container > :nth-child(2)")
      .contains("Author: Mark Manson")
      cy.get(".description-container > :nth-child(3)")
      .contains("Genre: Self-realization")
      cy.get(".description-container > :nth-child(4)")
      .contains("First Published: 2016")
      cy.get(".description-container > :nth-child(5)")
      .contains("Synopsis:")
      cy.get("span")
      .contains("Oh darn! It looks like you'll need to read this book to see what it's all about")
      cy.get(".save-delete-button > img").click()
  });

  it("should have a clickable favorites button and add the book to the favorites view", () => {
    cy.get('.save-delete-button > img').first().click()
    cy.get('[href="/books/saved"] > .header-button').click()
    cy.intercept("GET", "http://localhost:3000/books/saved", {
      statusCode: 200,
      ok: true,
      fixture: "savedBooks",
    })
    cy.url().should("eq", "http://localhost:3000/books/saved");
    cy.get('.book-cover')
  })

});
