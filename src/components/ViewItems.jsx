import { Typography } from '@material-ui/core'
import React from 'react'

const ViewItems = () => {
  return (
    <div className='h-[400px] w-full bg-orange-100 text-white flex flex-col justify-center items-center my-[30px]'>
        <div className="flex flex-col text-center items-center  w-[700px]">
            <p className='hover-underlines text-black font-extrabold text-2xl pt-[50px]'>Only the best</p>
            <Typography variant='h3' className=' text-neutral-800 font-extrabold'>Fresh Indgredients , Tasty Meals</Typography>
            <p className=' text-neutral-400 font-bold font-sans mt-5'>Cras iaculis feugiat libero nec suscipit. Praesent viverra eros est, gravida ornare diam blandit in. Nulla tincidunt nibh id odio luctus, ac faucibus tellus mollis. Fusce a nulla quam. Nullam vel mollis. Fusce a nulla quam. Nullam vel</p>
            <button className=' bg-orange-700 w-[130px] mt-[10px] rounded-md py-[9px]'>view Items</button>
        </div>
    </div>
  )
}

export default ViewItems