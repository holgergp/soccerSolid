describe("Webapp visible", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".leagueTable");
  });
  it.skip("Change Teamname", () => {
    const firstTeamSelector = ":nth-child(1)  > .teamname > .textPointer";
    const newTeamName = "Der beste Verein";
    return cy
      .get(firstTeamSelector)
      .clear()
      .type(newTeamName)
      .and("contain", newTeamName);
  });
  it("Move Team around", () => {
    const firstTeamSelector = ":nth-child(1)  > .team";
    const firstTeamNameSelector = ":nth-child(1)  > .team > .teamname";
    const secondTeamNameSelector = ":nth-child(2)  > .team > .teamname";
    const thirdTeamSelector = ":nth-child(3) > .team";
    const thirdTeamNameSelector = ":nth-child(3) > .team > .teamname";
    cy.get(firstTeamNameSelector).invoke("text").as("firstTeamName");
    cy.get(secondTeamNameSelector).invoke("text").as("secondTeamName");
    cy.get(thirdTeamNameSelector).invoke("text").as("thirdTeamName");

    cy.get(firstTeamSelector).drag(thirdTeamSelector);

    cy.get("@firstTeamName").then((firstTeamName) => {
      cy.get(thirdTeamNameSelector)
        .invoke("text")
        .should("contain", firstTeamName);
    });

    return cy.get("@secondTeamName").then((secondTeamName) => {
      cy.get(firstTeamNameSelector)
        .invoke("text")
        .should("contain", secondTeamName);
    });
  });
});
