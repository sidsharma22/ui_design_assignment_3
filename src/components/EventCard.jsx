export default function EventCard(props) {
    const { id, title, host, hostAvatar, location, time, dateTime, image, imageAlt, status, attendees, goingCount } = props;
    const statusClass = status === "Going" ? "invitation-status is-going" : "invitation-status";
    return (
            <article className="timeline-event-card" id={"event-" + id}>
              <a
                className="timeline-event-link"
                href={"#event-" + id}
                aria-labelledby={"event-" + id + "-title"}
              ></a>
              <div className="timeline-event-copy">
                <time dateTime={dateTime}>{time}</time>
                <h3 id={"event-" + id + "-title"}>{title}</h3>
                <p className="event-host">
                  <span className="host-avatar"><img src={hostAvatar} alt="" /></span>
                  By {host}
                </p>
                <p className="event-place">
                  <img src="https://raw.githubusercontent.com/silka-co/ui-design-course-assets/main/icons/map-pin.svg" alt="" />
                  {location}
                </p>
                <div className="status-and-attendees">
                  <span className={statusClass}>
                    {status}
                  </span>
                  <span className="attendee-stack" aria-label={"More than " + goingCount + " attendees"}>
                    <img src={attendees[0]} alt="" />
                    <img src={attendees[1]} alt="" />
                    <img src={attendees[2]} alt="" />
                    <span>+{goingCount}</span>
                  </span>
                </div>
              </div>
              <img className="timeline-event-image" src={image} alt={imageAlt} />
            </article>

    );
}