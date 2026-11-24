// Part 3: the Upcoming / Past control. For now `selected` comes in as a prop.
// Part 4 turns it into state.

export default function ViewSwitch(props) {
  const { selected } = props;

  return (
    <div className="event-view-switcher" aria-label="Event timeframe">
      <a
        className={selected === "upcoming" ? "is-selected" : ""}
        href="#upcoming-events"
        aria-current={selected === "upcoming" ? "page" : undefined}
      >
        Upcoming
      </a>
      <a
        className={selected === "past" ? "is-selected" : ""}
        href="#past-events"
        aria-current={selected === "past" ? "page" : undefined}
      >
        Past
      </a>
    </div>
  );
}
