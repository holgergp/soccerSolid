import { createResource, For } from "solid-js";
import { getSampleData } from "../../api/leagueTableApi";
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
  const [positions, { mutate }] = createResource<TeamType[]>(getSampleData);

  const ids = () => {
    const currentPositions = positions();
    if (currentPositions) {
      return currentPositions.map((p) => p.id);
    }
    return [];
  };

  const swapPositions = (sourceTeamId: string, targetTeamId: string) => {
    const currentPositions = positions();
    if (currentPositions)
      mutate(
        recalculateSwappedPositions(
          sourceTeamId,
          targetTeamId,
          currentPositions
        )
      );
  };

  const onDragEnd: DragEventHandler = (item) => {
    swapPositions(item.draggable.id + "", item.droppable?.id + "");
  };

  return (
    <div>
      <span>{positions.loading && "Loading..."}</span>
      <div class="grid gap-y-1 place-items-center">
        <DragDropProvider
          onDragEnd={onDragEnd}
          collisionDetector={closestCenter}
        >
          <DragDropSensors />
          <SortableProvider ids={ids()}>
            <For each={positions()} fallback={<div>Please wait...</div>}>
              {(item, index) => {
                const indexToRank = () => index() + 1;
                console.log(indexToRank());
                return (
                  <Position
                    id={item.id}
                    name={item.name}
                    rank={indexToRank()}
                  />
                );
              }}
            </For>
          </SortableProvider>
        </DragDropProvider>
      </div>
    </div>
  );
};
export default LeagueTable;
