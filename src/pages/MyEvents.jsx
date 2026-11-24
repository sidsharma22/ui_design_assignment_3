// Part 8: My Events. The same events as the Events page, sorted into three groups by status.

import EventList from "../components/EventList.jsx";

export default function MyEvents(props) {
  const { events, onStatusChange } = props;

  // Not state. The groups are three views of one list, worked out from events every time this
  // page draws, so they can never disagree with the Events page.
  const groups = [
    { status: "Going", events: events.filter((event) => event.status === "Going") },
    { status: "Invited", events: events.filter((event) => event.status === "Invited") },
    { status: "Declined", events: events.filter((event) => event.status === "Declined") },
  ];

  return (
    <main id="events-main" className="events-main">
      <div className="events-title-row">
        <h1>My Events</h1>
      </div>

      {groups.map((group) => (
        <section className="my-events-group" key={group.status} aria-labelledby={"group-" + group.status.toLowerCase()}>
          <h2 id={"group-" + group.status.toLowerCase()}>{group.status}</h2>
          {group.events.length === 0 ? (
            // An empty group is a real state of the page, not an error, so it says what the group is for.
            <p className="empty-state">Nothing here yet. Events you mark as {group.status.toLowerCase()} will show up here.</p>
          ) : (
            <EventList events={group.events} view={group.status.toLowerCase()} onStatusChange={onStatusChange} />
          )}
        </section>
      ))}
    </main>
  );
}
