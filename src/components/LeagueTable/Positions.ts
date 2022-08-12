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
  const fromIndex = currentPositions.findIndex(
    (team) => team.id === sourceTeamId
  );
  const toIndex = currentPositions.findIndex(
    (team) => team.id === targetTeamId
  );

  if (fromIndex !== toIndex) {
    const updatedItems = currentPositions.slice();
    updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1));
    return updatedItems;
  }
  return currentPositions;
};

export const recalculatePositionsWithRenamedTeam = (
  teamId: string,
  updatedText: string,
  currentPositions: TeamType[]
) => {
  const teamIndex = findTeamIndex(teamId, currentPositions);
  const updatedItems = currentPositions.slice();
  updatedItems.splice(teamIndex, 1, {
    name: updatedText,
    editing: false,
    id: teamId,
  });
  return updatedItems;
};
