import React from 'react'
import { FcAdvertising } from 'react-icons/fc';
import Slider from 'react-slick';
import { advertiseSettings } from '../../../tools/Slider';
import AdvertiseCard from './AdvertiseCard';
const Advertisement = ({ adsItems }) => {
  return (
    <div className='my-24'>
      <h1 className='text-error text-2xl mb-12'><FcAdvertising />Advertisement</h1>
      <Slider {...advertiseSettings}>
        {
          adsItems.map(adItem => <AdvertiseCard key={adItem._id} adItem={adItem} />)
        }
      </Slider>
    </div>
  )
}

export default Advertisement