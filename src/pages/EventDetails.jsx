// Part 7: one event's own page, at /events/:id. It is the Class 5 invitation panel as a page.

import { useParams, Link } from "react-router-dom";
import RsvpForm from "../components/RsvpForm.jsx";
import NotFound from "./NotFound.jsx";

export default function EventDetails(props) {
  const { events, onStatusChange } = props;

  // useParams() returns one property per :placeholder in the route path.
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  // find() gives undefined when nothing matches. Stop here before anything reads event.title.
  if (!event) {
    return <NotFound />;
  }

  function handleRsvpSubmit(rsvp) {
    console.log("RSVP for", event.id, rsvp);
    onStatusChange(event.id, "Going");
  }

  function handleDecline() {
    onStatusChange(event.id, "Declined");
  }

  const statusClass =
    event.status === "Going" ? "invitation-status is-going" : event.status === "Declined" ? "invitation-status is-declined" : "invitation-status";

  return (
    <main id="events-main" className="events-main event-details">
      <header className="invitation-toolbar">
        <Link className="panel-close" to="/" data-tooltip="Close" aria-label="Close event details">
          <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/chevrons-right.svg" alt="" />
        </Link>
      </header>
      <img className="invitation-hero" src={event.image} alt={event.imageAlt} />

      <div className="invitation-heading">
        <h1 className="invitation-title">{event.title}</h1>
        <p className="type-body">
          <span className="host-avatar"><img src={event.hostAvatar} alt="" /></span>
          By {event.host}
        </p>
      </div>

      <div className="invitation-facts">
        <div className="invitation-fact">
          <time className="invitation-date-tile" dateTime={event.dateTime}>
            <span>{event.month}</span>
            <strong>{event.day}</strong>
          </time>
          <p>
            <strong className="type-medium">{event.dateLabel}</strong>
            <span className="type-body-small">{event.time}</span>
          </p>
        </div>
        <div className="invitation-fact">
          <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/map-pin.svg" alt="" />
          <p>
            <strong className="type-medium">{event.location}</strong>
            <span className="type-body-small">{event.address}</span>
          </p>
        </div>
      </div>

      <section className="invitation-registration" aria-labelledby="registration-heading">
        <h2 className="invitation-section-label type-semibold" id="registration-heading">Registration</h2>
        <p className="registration-status">
          <span className={statusClass}>{event.status}</span>
        </p>
        {/* Three statuses, so three conditions. condition && (...) draws its JSX only when true; exactly one block shows. */}
        {event.status === "Going" && <p className="rsvp-card">You are going. See you there.</p>}
        {event.status === "Declined" && (
          <p className="rsvp-card">
            You declined this invitation. Changed your mind?{" "}
            <button type="button" className="secondary-button" onClick={() => onStatusChange(event.id, "Invited")}>
              Change your response
            </button>
          </p>
        )}
        {event.status === "Invited" && (
          <RsvpForm event={event} onSubmit={handleRsvpSubmit} onCancel={handleDecline} cancelLabel="Decline" />
        )}
      </section>

      <section className="invitation-about" aria-labelledby="about-heading">
        <h2 className="invitation-section-label type-semibold" id="about-heading">About Event</h2>
        <p className="type-body">{event.description}</p>
      </section>
    </main>
  );
}
