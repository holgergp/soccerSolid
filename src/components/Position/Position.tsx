import Team from "../Team/Team";

export interface PositionProps {
  name: string;
  rank: number;
  id: string;
}

const Position = (p: PositionProps) => {
  return (
    <div class="border-solid border-2">
      <Team name={p.name} rank={p.rank} id={p.id}></Team>
    </div>
  );
};

export default Position;
