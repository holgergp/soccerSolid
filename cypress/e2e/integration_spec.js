describe("Webapp visible", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".leagueTable");
  });
  it("Change Teamname", () => {
    const firstTeamNameSelector = ":nth-child(1)  > .team > .teamname";
    const firstTeamEditbutton = ":nth-child(1)   > .team > .editButton";
    const firstTeamInput = ":nth-child(1)  > .team input";
    const newTeamName = "Der beste Verein";

    return cy
      .get(firstTeamEditbutton)
      .click()
      .get(firstTeamInput)
      .clear()
      .type(newTeamName)
      .type("{enter}")
      .get(firstTeamNameSelector)
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
