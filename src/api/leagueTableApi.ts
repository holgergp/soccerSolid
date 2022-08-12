import { TeamType } from "../components/LeagueTable/Positions";

export interface TeamServerType {
  name: string;
  id: string;
}

export const getSampleData = (): Promise<TeamType[]> =>
  fetch("https://holgergp.builtwithdark.com/league-table").then((res) =>
    res.json()
  );
