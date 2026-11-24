// Part 3: draws the timeline. One day group per event, made with map().

import EventCard from "./EventCard.jsx";

export default function EventList(props) {
  const { events, view, onStatusChange, onSelect } = props;

  return (
    <section className="event-timeline" id={view + "-events"} aria-label={view + " events"}>
      {events.map((event) => (
        // key goes on the outermost element map() returns; the id is stable, the position is not.
        <div className="event-day-group" key={event.id}>
          <header className="event-day-label">
            <h2 className={"event-day-heading event-day-heading--" + event.dayHeadingStyle}>{event.dayHeading}</h2>
            <p>{event.weekday}</p>
          </header>
          <span className="timeline-dot" aria-hidden="true"></span>
          {/* The spread passes every property of the event object as a prop.
              onStatusChange is only passed through: this list is a courier between App and the cards. */}
          <EventCard {...event} onStatusChange={onStatusChange} onSelect={onSelect} />
        </div>
      ))}
    </section>
  );
}
