/*
SQUARES Instructions

Watch the short video in `design-files/squares.gif`:

This component keeps track of a list of "square ids" on the one hand,
and the currently active id on the other. That's two slices of state!
One is used as the source of truth to render the squares, and the other
so that the component knows which square is currently active.

Only one square (or none) can be active at any given point.

Find comments below to help you along.
*/

import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
const initialListOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Squares() {
  // Use the state hook twice, one for the list of square IDs and one for the active square ID
  const [squareIds, setSquareIds] = useState(initialListOfSquareIds);
  const [activeSquareId, setActiveSquareId] = useState(null);

  const getClassName = id => {
    // Return the class name 'active' if the ID matches the active square ID, empty string otherwise
    return id === activeSquareId ? 'active' : '';
  };

  const markActive = id => {
    // If the ID matches the active square ID, reset the active square ID to null
    // Otherwise, set the ID as the active square ID
    setActiveSquareId(id === activeSquareId ? null : id);
  };

  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {/* Map over the state slice 'squareIds' instead of 'listOfSquareIds' */}
        {squareIds.map(id => (
          <div
            key={id}
            id={id}
            className={`square ${getClassName(id)}`}
            onClick={() => markActive(id)}
          ></div>
        ))}
      </div>
    </div>
  );
}
