import React from 'react'
import "./gservice.css"
function service({title,image}) {
  return (

    <div className='w-[50%] flex-wrap bg-blue-400 p-[10px] m-[10px] border-1 border-red-500 rounded text-center'>
        <div className='h-auto w-[100%] object-center'>
        <img src={image}/>
        </div>

        <div class="mt-[10px] text-sm">
            <h3>{title}</h3>
        </div>
          

    </div>
  )
}

export default service