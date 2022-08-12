import {
  recalculateSwappedPositions,
  recalculatePositionsWithRenamedTeam,
} from "./Positions";

import { describe, it, beforeEach, expect } from "vitest";

describe("Positions should", () => {
  let sampleLeague;
  beforeEach(() => {
    sampleLeague = [
      {
        name: "Borussia Mönchengladbach",
        id: "BMG",
      },
      {
        name: "Borussia Dortmund",
        id: "BVB",
      },
      {
        name: "FC Bayern München",
        id: "FCB",
      },
    ];
  });
  it("swap two different teams", () => {
    const expectedLeagueState = [
      {
        name: "Borussia Mönchengladbach",

        id: "BMG",
      },
      {
        name: "FC Bayern München",

        id: "FCB",
      },
      {
        name: "Borussia Dortmund",

        id: "BVB",
      },
    ];

    const updatedeague = recalculateSwappedPositions(
      "BVB",
      "FCB",
      sampleLeague
    );
    expect(updatedeague).toEqual(expectedLeagueState);
  });
  it("rename a specific team in positions", () => {
    const team = {
      name: "Borussia Dortmund",

      id: "BVB",
    };
    const leagueWithRenamedLeague = recalculatePositionsWithRenamedTeam(
      team.id,
      "Schalke 04",
      sampleLeague
    );

    const expectedLeagueState = [
      {
        name: "Borussia Mönchengladbach",

        id: "BMG",
      },
      {
        name: "Schalke 04",

        id: "BVB",
      },
      {
        name: "FC Bayern München",

        id: "FCB",
      },
    ];
    expect(leagueWithRenamedLeague).toEqual(expectedLeagueState);
  });
});
