// Class 17, Part 1 starting point.
// The whole Events page lives in this one component for now.
// Over Parts 1 to 3 you will break it into EventCard, EventList and ViewSwitch.
import EventCard from "./components/EventCard.jsx";
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
          <div className="event-view-switcher" aria-label="Event timeframe">
            <a className="is-selected" href="#upcoming-events" aria-current="page">Upcoming</a>
            <span aria-disabled="true">Past</span>
          </div>
        </div>

        <section className="event-timeline" id="upcoming-events" aria-label="Upcoming events">
          <div className="event-day-group">
            <header className="event-day-label">
              <h2 className="event-day-heading event-day-heading--relative">Today</h2>
              <p>Wednesday</p>
            </header>
            <span className="timeline-dot" aria-hidden="true"></span>
            <EventCard
              id="studio-night-4"
              title="Studio Night Demo Party #4"
              host="Maya Chen"
              hostAvatar="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/fractal-party.png"
              location="Design Lab"
              time="6:30 PM"
              dateTime="2026-08-12T18:30:00-04:00"
              image="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/fractal-party.png"
              imageAlt="Soft abstract color-field event artwork"
              status="Invited"
              attendees={["https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/cafe-cursor.avif", "https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/creative-edge.avif", "https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/steel-silicon.avif"]}
              goingCount={42}
            />
          </div>

          <div className="event-day-group">
            <header className="event-day-label">
              <h2 className="event-day-heading event-day-heading--relative">Tomorrow</h2>
              <p>Thursday</p>
            </header>
            <span className="timeline-dot" aria-hidden="true"></span>
            <EventCard
              id="creative-ai-forum"
              title="Campus Creative AI Forum"
              host="Jordan Lee, Priya Shah & Alex Kim"
              hostAvatar="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/cafe-cursor.avif"
              location="Innovation Space"
              time="6:00 PM"
              dateTime="2026-08-13T18:00:00-04:00"
              image="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/agentics.avif"
              imageAlt="Dark event poster with an electric abstract motif"
              status="Going"
              attendees={["https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/startup-founders.avif", "https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/steel-silicon.avif", "https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/agentics.avif"]}
              goingCount={318}
            />
          </div>

          <div className="event-day-group">
            <header className="event-day-label">
              <h2 className="event-day-heading event-day-heading--calendar">Aug 14</h2>
              <p>Friday</p>
            </header>
            <span className="timeline-dot" aria-hidden="true"></span>
            <EventCard
              id="friday-night-social"
              title="Friday Night Social"
              host="Campus Neighbors"
              hostAvatar="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/mama-nyc.avif"
              location="College Walk"
              time="6:30 PM"
              dateTime="2026-08-14T18:30:00-04:00"
              image="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/mama-nyc.avif"
              imageAlt="Colorful illustrated event poster"
              status="Invited"
              attendees={["https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/mama-nyc.avif", "https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/startup-founders.avif", "https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/steel-silicon.avif"]}
              goingCount={88}
            />
          </div>
        </section>
        </main>
    </>
  );
}
