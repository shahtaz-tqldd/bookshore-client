import React from 'react';
import AdvertiseCard from './AdvertiseCard';
import AdvertiseCardSmall from './AdvertiseCardSmall';

const Advertisement = ({ adsItems }) => {
  const largeAds = adsItems?.slice(0, 1).map(adItem => (
    <AdvertiseCard key={adItem._id} adItem={adItem} />
  ));

  const smallAds = adsItems?.slice(1, 3).map((adItem, index) => (
    <AdvertiseCardSmall key={adItem._id} index={index} adItem={adItem} />
  ));

  return (
    <div className="my-40">
      <h1 className='lg:text-[80px] md:text-5xl text-3xl text-center font-bold mb-20 text-[#E96479] max-w-[800px] mx-auto'>grab<br /> <small><small>the best books now</small></small></h1>
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="lg:w-[60%] w-full">{largeAds}</div>
        <div className="lg:w-[40%] w-full flex lg:flex-col md:flex-row flex-col gap-4">{smallAds}</div>
      </div>
    </div>
  );
};

export default Advertisement;
