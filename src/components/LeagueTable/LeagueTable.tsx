import { createSignal, For } from "solid-js";
import { SAMPLE_LEAGUE_TABLE } from "./SampleData";
import Position from "../Position/Position";
import {
  closestCenter,
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  SortableProvider,
} from "@thisbeyond/solid-dnd";
import { recalculateSwappedPositions, TeamType } from "./Positions";

const LeagueTable = () => {
  const [positions, setPositions] =
    createSignal<TeamType[]>(SAMPLE_LEAGUE_TABLE);
  const ids = () => positions().map((p) => p.id);

  const swapPositions = (sourceTeamId: string, targetTeamId: string) => {
    console.log(sourceTeamId);
    console.log(targetTeamId);
    setPositions(
      recalculateSwappedPositions(sourceTeamId, targetTeamId, positions())
    );
  };
  const onDragStart: DragEventHandler = (item) => {
    console.log("dragStart", item);
  };

  const onDragEnd: DragEventHandler = (item) => {
    console.log("dragEnd", item);

    swapPositions(item.draggable.data.id, item.droppable?.data.id);
  };

  return (
    <DragDropProvider
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      collisionDetector={closestCenter}
    >
      <DragDropSensors />
      <SortableProvider ids={ids()}>
        <For each={positions()} fallback={<div>Loading...</div>}>
          {(item, index) => (
            <Position position={{ ...item, rank: index() + 1 }} />
          )}
        </For>
      </SortableProvider>
    </DragDropProvider>
  );
};
export default LeagueTable;
