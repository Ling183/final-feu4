import React from 'react'

const MainTitle = (props) => {

    let titleEl

    if (props.text) {
        titleEl = <h1>{props.text}</h1>
    }
  return titleEl
}

export default MainTitle