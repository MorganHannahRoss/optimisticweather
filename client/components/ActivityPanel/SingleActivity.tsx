function SingleActivity({activity, weather, type, details}) {
  return (
    <>
      <div>
        <h5>{activity}</h5>
        <p>{weather}</p>
        <p>{type}</p>
        <p>{details}</p>
      </div>
    </>
  )
}

export default SingleActivity