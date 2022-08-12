import Team from "../Team/Team";
import { createMemo } from "solid-js";

export interface PositionProps {
  name: string;
  rank: number;
  id: string;
  updateTeamname: (teamId: string, updatedText: string) => void;
}
const positionCSSClass = (positionNumber: number) => {
  if (positionNumber === 1) {
    return "bg-green-400";
  }
  if (positionNumber <= 3) {
    return "bg-green-100";
  }
  if (positionNumber <= 6) {
    return "bg-cyan-400";
  }
  if (positionNumber <= 15) {
    return "bg-pink-100";
  }
  if (positionNumber === 16) {
    return "bg-red-200";
  } else {
    return "bg-red-600";
  }
};
const Position = (p: PositionProps) => {
  const tabellenClass = createMemo(() => positionCSSClass(p.rank));

  return (
    <div
      class={
        "border-solid border-2 rounded-md border-slate-400 md:w-1/2 lg:w-1/6 pt-1 pb-1 position " +
        tabellenClass()
      }
    >
      <Team
        name={p.name}
        rank={p.rank}
        id={p.id}
        updateTeamname={p.updateTeamname}
      ></Team>
    </div>
  );
};

export default Position;
