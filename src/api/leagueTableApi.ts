import { TeamType } from "../components/LeagueTable/Positions";
import { SAMPLE_LEAGUE_TABLE } from "../components/LeagueTable/SampleData";

export interface TeamServerType {
  name: string;
  id: string;
}

export const getSampleData = (): Promise<TeamType[]> =>
  fetch("https://holgergp.builtwithdark.com/league-table")
    .then((res) => res.json())
    .then((res) => (res.length !== 0 ? res : SAMPLE_LEAGUE_TABLE))
    .catch(() => SAMPLE_LEAGUE_TABLE);
