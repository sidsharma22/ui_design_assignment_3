// Part 7: the Events page, moved out of App. App keeps the state and hands it in as props.

import EventList from "../components/EventList.jsx";
import ViewSwitch from "../components/ViewSwitch.jsx";

export default function EventsPage(props) {
  const { events, view, onViewChange, onStatusChange } = props;

  return (
    <main id="events-main" className="events-main">
      <div className="events-title-row">
        <h1>Events</h1>
        <ViewSwitch selected={view} onSelect={onViewChange} />
      </div>
      <EventList events={events} view={view} onStatusChange={onStatusChange} />
    </main>
  );
}
