import type { Component } from 'solid-js';

import styles from './App.module.css';
import LeagueTable from "./components/LeagueTable/LeagueTable";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1>
        Kickertabelle zum Selberstecken
      </h1>
      <LeagueTable />
    </div>
  );
};

export default App;
