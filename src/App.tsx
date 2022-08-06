import type { Component } from "solid-js";

import LeagueTable from "./components/LeagueTable/LeagueTable";
import "tailwindcss/tailwind.css";

const App: Component = () => {
  return (
    <div class="text-center w-full">
      <h1 class="text-2xl pb-2 pt-2 font-bold">
        Kickertabelle zum Selberstecken
      </h1>
      <LeagueTable />
    </div>
  );
};

export default App;
