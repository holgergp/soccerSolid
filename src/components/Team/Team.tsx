import classNames from "classnames";

export interface TeamProps {
  name: string;
  rank: number;
}

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

const Team = ({ name, rank }: TeamProps) => {
  const classes = [
    "col-md-12",
    "btn",
    "text-bold",
    "tabelleClass",
    positionCSSClass(rank),
  ];
  return (
    <div class={classNames(classes)}>
      {rank}.{name}
    </div>
  );
};

export default Team;
