// Part 7: App holds the state and the page frame (the header). Routes draws whichever
// page the address asks for. The pages get the state they need as props.

import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import EventsPage from "./pages/EventsPage.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import MyEvents from "./pages/MyEvents.jsx";
import NotFound from "./pages/NotFound.jsx";
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

  // NavLink calls this with isActive, and uses whatever string comes back as the class name.
  function navClass({ isActive }) {
    return isActive ? "events-nav-link is-current" : "events-nav-link";
  }

  return (
    <>
      <a className="skip-link" href="#events-main">Skip to main content</a>

      <header className="events-site-header">
        <Link className="events-home-mark" to="/" aria-label="Events home">
          <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/star-four-fill.svg" alt="" />
        </Link>
        <nav className="events-primary-nav" aria-label="Primary navigation">
          {/* end stops "/" from counting as the current page on every address */}
          <NavLink className={navClass} to="/" end>
            <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/ticket.svg" width="18" height="18" alt="" aria-hidden="true" />
            <span>Events</span>
          </NavLink>
          <NavLink className={navClass} to="/my-events">
            <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/calendar.svg" width="18" height="18" alt="" aria-hidden="true" />
            <span>My Events</span>
          </NavLink>
          <a className="events-nav-link" href="#discover">
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

      {/* Routes draws the first Route whose path matches the address. :id is a placeholder; * matches anything, so it goes last. */}
      <Routes>
        <Route
          path="/"
          element={<EventsPage events={shownEvents} view={view} onViewChange={setView} onStatusChange={handleStatusChange} />}
        />
        <Route path="/events/:id" element={<EventDetails events={events} onStatusChange={handleStatusChange} />} />
        <Route path="/my-events" element={<MyEvents events={events} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
