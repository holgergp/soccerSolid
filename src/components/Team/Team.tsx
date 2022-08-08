import { createSortable } from "@thisbeyond/solid-dnd";

interface TeamProps {
  name: string;
  rank: number;
  id: string;
}

const Team = (props: TeamProps) => {
  const sortable = createSortable(props.id, { id: props.id });
  return (
    <div
      class="font-bold sortable w-full grid grid-cols-[1fr_5fr] gap-x-0.5"
      classList={{ "opacity-25": sortable.isActiveDraggable }}
      use:sortable
    >
      <div class="self-start">{props.rank}.</div>{" "}
      <div class="self-center">{props.name}</div>
    </div>
  );
};

export default Team;
