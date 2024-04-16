function SingleEvent({
  name,
  description,
  images,
  link,
  location_summary,
  datetime_start,
}: {
  name: string
  description: string
  images: string
  link: string
  location_summary: string
  datetime_start: Date
}) {
  return (
    <div className="activity-card">
      <div className="activity-info">
        <div className="activity-header">
          <div className="activity-title">
            <a className="title-text" href={link} target="blank">
              {name}
            </a>
            <div className="activity-schedule">
              <p>{location_summary}</p>
            <p>
              {new Date(datetime_start).toLocaleString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            </div>
            

            <a href={link} target="blank">
              <img className="event-img" src={images} alt="event-pic" />
            </a>
          </div>
          <div className="event-img-contatiner"></div>
        </div>
      </div>
      <div className="activity-description">
        <p>
          {description} {' '}
          <span>
            <a className="viewMore-text" href={link} target="blank">
              View More
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default SingleEvent
