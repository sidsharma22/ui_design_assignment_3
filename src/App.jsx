// Part 3: App holds the page frame. The events come from src/data/events.js
// and are drawn by EventList; ViewSwitch is the Upcoming / Past control.

import EventList from "./components/EventList.jsx";
import ViewSwitch from "./components/ViewSwitch.jsx";
import { events } from "./data/events.js";

export default function App() {
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
          <ViewSwitch selected="upcoming" />
        </div>

        <EventList events={events} />
        </main>
    </>
  );
}
