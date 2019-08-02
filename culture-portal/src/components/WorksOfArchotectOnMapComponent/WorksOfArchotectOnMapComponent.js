import React from 'react';
import'./WorksOfArchotectOnMapComponent.css';

const WorksOfArchotectOnMapComponent = (props) => {
  // dd later to geovidgetLink to json
	let geovidgetLink = 'mid=1azzyT0kI_WJG5h08u9p0Kt-Nv_h_FO8s'; // delete string later
  /*
	geovidgetLink: 'mid=1azzyT0kI_WJG5h08u9p0Kt-Nv_h_FO8s', // Иосиф Григорьевич Лангбард
	geovidgetLink: 'mid=1h1uJwA9rkRhJToIj-Wna3cup2YWiBSDE', // Паоло Антонио Доменико Фонтана
	geovidgetLink: 'mid=1XdWwCcjN5n_7C0kFCxcq2G2r2VYV6fFO', // Виктор Иванович Карако
	geovidgetLink: 'mid=10ZwynmgbM79zAAagBDpS4fxav_vpOQfO', // Джузеппе де Сакко
	geovidgetLink: 'mid=1DMvXxw4BPZYozlqBwvqmgzWLMr6HpzH5', // Леонид Менделевич Левин
	geovidgetLink: 'mid=1vhu3Tx8WxYjPhjjqoz1_mbK6wuDt-yPn', // ананич
  */
  let path = `https://www.google.com/maps/d/embed?${geovidgetLink}`
  return (
    <div className="container text-center mb-4">
      <iframe title="geovidget" src={path} width="640" height="480"></iframe>
    </div>
  )
}

export default WorksOfArchotectOnMapComponent;
