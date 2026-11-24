export default function EventCard() {
    return (
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

    );
}