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
    setPositions(
      recalculateSwappedPositions(sourceTeamId, targetTeamId, positions())
    );
  };
  const onDragEnd: DragEventHandler = (item) => {
    swapPositions(item.draggable.id + "", item.droppable?.id + "");
  };

  return (
    <div class="grid gap-y-1 place-items-center">
      <DragDropProvider onDragEnd={onDragEnd} collisionDetector={closestCenter}>
        <DragDropSensors />
        <SortableProvider ids={ids()}>
          <For each={positions()} fallback={<div>Loading...</div>}>
            {(item, index) => (
              <Position id={item.id} name={item.name} rank={index() + 1} />
            )}
          </For>
        </SortableProvider>
      </DragDropProvider>
    </div>
  );
};
export default LeagueTable;
