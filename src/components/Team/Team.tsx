import classNames from "classnames";
import { createSortable } from "@thisbeyond/solid-dnd";

interface TeamProps {
  name: string;
  rank: number;
  id: string;
}

const Team = (props: TeamProps) => {
  const sortable = createSortable(props.id, { id: props.id });
  const classes = ["text-center", "font-bold", "sortable"];
  return (
    <div
      class={classNames(classes)}
      classList={{ "opacity-25": sortable.isActiveDraggable }}
      use:sortable
    >
      {props.rank}. {props.name}
    </div>
  );
};

export default Team;
