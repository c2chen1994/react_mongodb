
import {PropTypes} from 'react'
import MdTerrain from 'react-icons/lib/md/terrain'
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow'
import FaCalendar from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from './SkiDayRow'
import {Link} from 'react-router'

export const SkiDayList = ({days, filter}) => {
  const filteredDays = (!filter ||
                       !filter.match(/powder|backcountry/)) ?
                       days :
                       days.filter(day => day[filter])
  return (
    <div className="ski-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">
                All days
              </Link>
              <Link to="/list-days/powder">
                Powder days
              </Link>
              <Link to="/list-days/backcountry">
                Backcountry days
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) =>
            <SkiDayRow key={i}
                       resort={day.resort}
                       date={day.date}
                       powder={day.powder}
                       backcountry={day.backcountry}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

SkiDayList.propTypes = {
  //days: PropTypes.array
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error("SkiDayList should be an array")
    } else if(!props.days.length) {
      return new Error("SkiDayList must have at least one record")
    } else {
      return null
    }
  }
}