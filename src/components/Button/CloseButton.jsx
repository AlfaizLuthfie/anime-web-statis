import React from 'react'

function CloseButton({setShow}) {
  return (
    <button onClick={setShow} className='rounded-full border px-2 bg-red-400 font-medium text-white py-1 text-xs'>
        X
    </button>
  )
}

export default CloseButton