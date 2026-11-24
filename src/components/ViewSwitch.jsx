// Part 4: ViewSwitch now owns the selected view as state.
// The options are buttons, because they do something (change state) rather than go somewhere.

import { useState } from "react";

export default function ViewSwitch() {
  const [selected, setSelected] = useState("upcoming");

  return (
    <div className="event-view-switcher" role="group" aria-label="Event timeframe">
      <button
        type="button"
        className={selected === "upcoming" ? "is-selected" : ""}
        aria-pressed={selected === "upcoming"}
        onClick={() => setSelected("upcoming")}
      >
        Upcoming
      </button>
      <button
        type="button"
        className={selected === "past" ? "is-selected" : ""}
        aria-pressed={selected === "past"}
        onClick={() => setSelected("past")}
      >
        Past
      </button>
    </div>
  );
}
