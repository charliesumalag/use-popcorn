import React from 'react'

const SekectedMovie = ({selectedId, onCloseMovie}) => {
  return (
    <div className='details'>
        <button className='btn-back' onClick={onCloseMovie}>&larr;</button>
        {selectedId}
    </div>
  )
}

export default SekectedMovie
