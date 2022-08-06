import classNames from "classnames";
import { createSortable } from "@thisbeyond/solid-dnd";

const positionCSSClass = (positionNumber: number) => {
  if (positionNumber === 1) {
    return "tabellenfuehrerClass";
  }
  if (positionNumber <= 3) {
    return "championsLeagueClass";
  }
  if (positionNumber <= 6) {
    return "europaLeagueClass";
  }
  if (positionNumber <= 15) {
    return "mittelfeldClass";
  }
  if (positionNumber === 16) {
    return "relegationClass";
  } else {
    return "abstiegClass";
  }
};

interface TeamProps {
  name: string;
  rank: number;
  id: string;
}

const Team = (props: TeamProps) => {
  const sortable = createSortable(props.id, props);

  const classes = [
    "col-md-12",
    "btn",
    "text-bold",
    "tabelleClass",
    "sortable",
    { "opacity-25": sortable.isActiveDraggable },
    positionCSSClass(props.rank),
  ];
  return (
    <div class={classNames(classes)} use:sortable>
      {props.rank}.{props.name}
    </div>
  );
};

export default Team;
