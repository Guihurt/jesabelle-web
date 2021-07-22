import styles from '../../styles/Grid.module.css'
import PropTypes from 'prop-types';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeh, faFrown, faSmile } from '@fortawesome/free-solid-svg-icons'
import { PieChart } from 'react-minimal-pie-chart'

import Cell from '../Cell/Cell'
import dayjs from 'dayjs'

function Grid(props) {

  return (

    <div className={styles.grid_container}>
      <div className={styles.grid_header}>
        <h2>{dayjs().format('MMMM D')}</h2>
      </div>
      <div className={styles.content}>
        { }
        <Cell moodIcon={faMeh} moodSize={"4x"} chartRad={"40"} />
      </div>
    </div>

  )
}

Grid.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number
}

Grid.defaultProps = {
  rows: 1,
  cols: 7,
}

export default Grid;