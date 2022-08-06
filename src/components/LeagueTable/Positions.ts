export interface TeamType {
  name: string;
  id: string;
  editing: boolean;
}

const findTeamIndex = (teamId: string, positions: TeamType[]) =>
  positions.findIndex((team) => team.id === teamId);

const findTeam = (teamId: string, positions: TeamType[]) =>
  positions.find((team) => team.id === teamId);

export const recalculateSwappedPositions = (
  sourceTeamId: string,
  targetTeamId: string,
  currentPositions: TeamType[]
): TeamType[] => {
  const clonedPositions = [...currentPositions];

  const [sourceInfo, targetInfo] = [sourceTeamId, targetTeamId].map((id) => {
    const index = findTeamIndex(id, clonedPositions);
    const team = findTeam(id, clonedPositions);
    if (!team || index < 0) {
      throw Error("Team or index for id " + id + " not found");
    }
    return {
      index,
      team,
    };
  });

  return currentPositions.map((pos, index) => {
    if (index === targetInfo.index) {
      return { ...sourceInfo.team };
    } else if (index === sourceInfo.index) {
      return { ...targetInfo.team };
    } else return { ...pos };
  });
};

export const recalculatePositionsWithRenamedTeam = (
  team: TeamType,
  updatedText: string,
  currentPositions: TeamType[]
) => {
  const teamIndex = findTeamIndex(team.id, currentPositions);

  return currentPositions.map((pos, index) => ({
    ...pos,
    name: teamIndex === index ? updatedText : pos.name,
  }));
};
