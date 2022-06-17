import Team from "../Team/Team";

export interface PositionProps {
    position: {name: string
        rank: number;}

}
const Position = ({position: p}: PositionProps) => {
    return <div class="border-solid border-2"><Team name={p.name} rank={p.rank}></Team></div>

}

export default Position