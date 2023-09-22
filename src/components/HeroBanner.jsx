import { Button, Typography } from '@material-ui/core'
import React from 'react'
import hero from '../Assests/cover.jpg'
import '../App.css'

const HeroBanner = () => {
  return (
    <div className='flex justify-center items-center  relative text-white'>
        <img src={hero} className=' bg-contain w-[1540px] h-[800px]' />
        <div className="flex flex-col absolute  w-[900px] gap-[60px]">


            <Typography className='flex items-center text-white font-extrabold ' variant='h3'>
            ONLY QUALITY FOOD
            </Typography>

            <Typography className='flex '>
            Cras iaculis feugiat libero nec suscipit. Praesent viverra eros est, gravida ornare diam blandit in. Nulla tincidunt nibh id odio luctus, ac faucibus tellus mollis. Fusce a nulla quam. Nullam vel feugiat quam, eget elementum nisi. Curabitur in nulla sed mauris rutrum ornare sed eu ligula. Nullam laoreet est eu lacus aliquet ultricies. Praesent 
            </Typography>

            <div className="text-white space-x-3">
                <button className="bg-orange-700 w-[130px]  rounded-md py-[9px]">
                    View Menu 
                </button>
                <button variant='outlined' className="bg-orange-700 w-[130px]  rounded-md py-[9px]">
                Reservation
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner