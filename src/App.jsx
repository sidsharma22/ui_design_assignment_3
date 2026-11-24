// Class 17, Part 1 starting point.
// The whole Events page lives in this one component for now.
// Over Parts 1 to 3 you will break it into EventCard, EventList and ViewSwitch.

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
            <article className="timeline-event-card" id="event-studio-night">
              <a
                className="timeline-event-link"
                href="#studio-night-invitation"
                data-action="open-invitation"
                data-event-id="studio-night-4"
                aria-labelledby="event-studio-night-title"
                aria-controls="studio-night-invitation"
                aria-expanded="false"
                aria-haspopup="dialog"
              ></a>
              <div className="timeline-event-copy">
                <time dateTime="2026-08-12T18:30:00-04:00">6:30 PM</time>
                <h3 id="event-studio-night-title">Studio Night Demo Party #4</h3>
                <p className="event-host">
                  <span className="host-avatar"><img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/fractal-party.png" alt="" /></span>
                  By Maya Chen
                </p>
                <p className="event-place">
                  <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/map-pin.svg" alt="" />
                  Design Lab
                </p>
                <div className="status-and-attendees">
                  <span className="invitation-status" data-role="studio-night-status" data-status-for="studio-night-4">Invited</span>
                  <span className="attendee-stack" aria-label="More than 40 attendees">
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/cafe-cursor.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/creative-edge.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/steel-silicon.avif" alt="" />
                    <span>+42</span>
                  </span>
                </div>
              </div>
              <img className="timeline-event-image" src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/fractal-party.png" alt="Soft abstract color-field event artwork" />
            </article>
          </div>

          <div className="event-day-group">
            <header className="event-day-label">
              <h2 className="event-day-heading event-day-heading--relative">Tomorrow</h2>
              <p>Thursday</p>
            </header>
            <span className="timeline-dot" aria-hidden="true"></span>
            <article className="timeline-event-card" id="event-creative-ai">
              <a
                className="timeline-event-link"
                href="#event-creative-ai"
                data-action="open-invitation"
                data-event-id="creative-ai-forum"
                aria-labelledby="event-creative-ai-title"
                aria-controls="studio-night-invitation"
                aria-expanded="false"
                aria-haspopup="dialog"
              ></a>
              <div className="timeline-event-copy">
                <time dateTime="2026-08-13T18:00:00-04:00">6:00 PM</time>
                <h3 id="event-creative-ai-title">Campus Creative AI Forum</h3>
                <p className="event-host avatar-stack-row">
                  <span className="avatar-stack" aria-hidden="true">
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/cafe-cursor.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/creative-edge.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/mama-nyc.avif" alt="" />
                  </span>
                  <span>By Jordan Lee, Priya Shah &amp; Alex Kim</span>
                </p>
                <p className="event-place">
                  <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/map-pin.svg" alt="" />
                  Innovation Space
                </p>
                <div className="status-and-attendees">
                  <span className="invitation-status is-going" data-status-for="creative-ai-forum">Going</span>
                  <span className="attendee-stack" aria-label="More than 300 attendees">
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/startup-founders.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/steel-silicon.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/agentics.avif" alt="" />
                    <span>+318</span>
                  </span>
                </div>
              </div>
              <img className="timeline-event-image" src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/agentics.avif" alt="Dark event poster with an electric abstract motif" />
            </article>
          </div>

          <div className="event-day-group">
            <header className="event-day-label">
              <h2 className="event-day-heading event-day-heading--calendar">Aug 14</h2>
              <p>Friday</p>
            </header>
            <span className="timeline-dot" aria-hidden="true"></span>
            <article className="timeline-event-card" id="event-friday-social">
              <a
                className="timeline-event-link"
                href="#event-friday-social"
                data-action="open-invitation"
                data-event-id="friday-night-social"
                aria-labelledby="event-friday-social-title"
                aria-controls="studio-night-invitation"
                aria-expanded="false"
                aria-haspopup="dialog"
              ></a>
              <div className="timeline-event-copy">
                <time dateTime="2026-08-14T18:30:00-04:00">6:30 PM</time>
                <h3 id="event-friday-social-title">Friday Night Social</h3>
                <p className="event-host">
                  <span className="host-avatar"><img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/mama-nyc.avif" alt="" /></span>
                  By Campus Neighbors
                </p>
                <p className="event-place">
                  <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/map-pin.svg" alt="" />
                  College Walk
                </p>
                <div className="status-and-attendees">
                  <span className="invitation-status" data-status-for="friday-night-social">Invited</span>
                  <span className="attendee-stack" aria-label="More than 80 attendees">
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/mama-nyc.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/startup-founders.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/steel-silicon.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/agentics.avif" alt="" />
                    <span>+88</span>
                  </span>
                </div>
              </div>
              <img className="timeline-event-image" src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/images/mama-nyc.avif" alt="Colorful illustrated event poster" />
            </article>
          </div>
        </section>
        </main>
    </>
  );
}
