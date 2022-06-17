import {createSignal, For} from "solid-js";
import {SAMPLE_LEAGUE_TABLE} from "./SampleData";
import Position from "../Position/Position";

const LeagueTable = () => {
    const [positions, setPositions] = createSignal(SAMPLE_LEAGUE_TABLE);
    return <For each={positions()} fallback={<div>Loading...</div>}>
        {(item,index) => <Position position={{...item, rank: index() + 1}}/>}
    </For>

}
export default LeagueTable;