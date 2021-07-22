import styles from '../../styles/Cell.module.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeh, faFrown, faSmile } from '@fortawesome/free-solid-svg-icons'
import { PieChart } from 'react-minimal-pie-chart'

export default function Cell(props) {

  const [clicked, setClicked] = useState(false)

  let color_cell = () => { return `${(clicked) ? styles.blue : " "} ` }

  return (
    <div
      className={color_cell() + styles.grid_cell}
      onClick={() => setClicked(!clicked)}
    >
      <FontAwesomeIcon icon={props.moodIcon} size={props.moodSize} />
      <PieChart
        radius={props.chartRad}
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
      />
    </div>
  )
}