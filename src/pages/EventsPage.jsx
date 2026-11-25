// Part 11: the Events page shows one of four things, depending on loadState:
// a loading message, an empty message, an error with Try again, or the list.

import EventList from "../components/EventList.jsx";
import ViewSwitch from "../components/ViewSwitch.jsx";

export default function EventsPage(props) {
  const { events, view, onViewChange, onStatusChange, loadState, onRetry, search, onSearchChange } = props;

  return (
    <main id="events-main" className="events-main">
      <div className="events-title-row">
        <h1>Events</h1>
        <ViewSwitch selected={view} onSelect={onViewChange} />
      </div>
      <div className="field">
        <label htmlFor="event-search">Search events</label>
        <input
            id="event-search"
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      {loadState === "loading" && (
        <p className="load-state" role="status">Loading events…</p>
      )}
      {loadState === "empty" && (
        <p className="empty-state">No events yet. When someone invites you, the event shows up here.</p>
      )}
      {loadState === "error" && (
        <div className="load-error" role="alert">
          <p>We couldn’t load the events. Check your connection and try again.</p>
          <button type="button" className="secondary-button" onClick={onRetry}>Try again</button>
        </div>
      )}
      {loadState === "ready" && events.length === 0 && ( <p className="empty-state">No events match “{search}”.</p> )}
      {loadState === "ready" && events.length > 0 && ( <EventList events={events} view={view} onStatusChange={onStatusChange} /> )}
    </main>
  );
}
