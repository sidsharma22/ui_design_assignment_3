// Part 5: App is the one place that holds state. The events and the selected view
// live here and are passed down as props. No other component keeps its own copy.

import { useState } from "react";
import EventList from "./components/EventList.jsx";
import ViewSwitch from "./components/ViewSwitch.jsx";
import { events as startingEvents } from "./data/events.js";

export default function App() {
  // The data is imported as startingEvents so the state variable can be called events.
  const [events, setEvents] = useState(startingEvents);
  const [view, setView] = useState("upcoming");

  // The only place the events change. React notices a new array and new objects,
  // not edits made in place, so this builds copies and never assigns to event.status.
  function handleStatusChange(id, newStatus) {
    const nextEvents = events.map((event) => {
      if (event.id === id) {
        return { ...event, status: newStatus }; // a new object: every property copied, status replaced
      }
      return event; // every other event is returned unchanged
    });
    setEvents(nextEvents);
  }

  // Not state: worked out from events and view every time App runs, so it is always up to date.
  const shownEvents = events.filter((event) => (view === "past" ? event.isPast : !event.isPast));

  return (
    <>
      <a className="skip-link" href="#events-main">Skip to main content</a>

      <header className="events-site-header">
        <a className="events-home-mark" href="events.html" aria-label="Events home">
          <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/star-four-fill.svg" alt="" />
        </a>
        <nav className="events-primary-nav" aria-label="Primary navigation">
          <a className="events-nav-link is-current" href="events.html" aria-current="page">
            <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/ticket.svg" width="18" height="18" alt="" aria-hidden="true" />
            <span>Events</span>
          </a>
          <a className="events-nav-link" href="#calendars">
            <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/calendar.svg" width="18" height="18" alt="" aria-hidden="true" />
            <span>Calendars</span>
          </a>
          <a className="events-nav-link" href="index.html#discover">
            <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/compass.svg" width="18" height="18" alt="" aria-hidden="true" />
            <span>Discover</span>
          </a>
        </nav>

        <nav className="events-account-nav" aria-label="Account navigation">
          <time dateTime="2026-08-12T14:34:00-04:00">2:34 PM EDT</time>
          <a href="#create-event">Create Event</a>
          <a className="icon-link has-notification" href="#notifications" aria-label="Notifications">
            <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/bell.svg" alt="" />
          </a>
          <a className="profile-link" href="#profile" aria-label="Open profile">
            <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/steel-silicon.avif" alt="" />
          </a>
        </nav>
      </header>

      <main id="events-main" className="events-main">
        <div className="events-title-row">
          <h1>Events</h1>
          <ViewSwitch selected={view} onSelect={setView} />
        </div>

        <EventList events={shownEvents} view={view} onStatusChange={handleStatusChange} />
        </main>
    </>
  );
}
