import { createSortable } from "@thisbeyond/solid-dnd";
import { createSignal } from "solid-js";

interface TeamProps {
  name: string;
  rank: number;
  id: string;
  updateTeamname: (teamId: string, updatedText: string) => void;
}

const Team = (p: TeamProps) => {
  const sortable = createSortable(p.id, { id: p.id });
  const [editMode, setEditMode] = createSignal(false);
  const [input, setInput] = createSignal(p.name);
  return (
    <div
      class="font-bold sortable grid grid-cols-[1fr_9fr_1fr] gap-x-0.5 team"
      classList={{ "opacity-25": sortable.isActiveDraggable }}
      use:sortable
    >
      <div class="self-start rank">{p.rank}.</div>{" "}
      {editMode() ? (
        <div>
          {" "}
          <input
            value={input()}
            onKeyDown={(event) => {
              if (event && event.target && event.target.value) {
                setInput(event.target.value);
                if (event.key === "Enter") {
                  setEditMode(false);
                  p.updateTeamname(p.id, input());
                }
              }
            }}
            class="w-5/6"
          />
        </div>
      ) : (
        <div class="self-center teamname">{p.name}</div>
      )}
      <div class="self-end editButton" onClick={() => setEditMode(true)}>
        <div class="opacity-0 text-gray-600 hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width={2}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Team;
