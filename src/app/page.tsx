'use client'

import InputText from './components/InputText'
import './custom.css'
import React from 'react' 
import MyMapComponent from './mymapcomponent'
import { Wrapper } from '@googlemaps/react-wrapper'

export default function Home() {
  let startDestination: string = ""
  let endDestination: string = ""
  let foodMood: string = ""
  let distance: number = 0

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <div className='flex mb-2'>
      <div className="SearchSection bg-400 w-1/4 h-screen">
        <div className="Header: flex flex-row p-8 mt-8">
          <div className="box-border sm:w-18  md:h-30 md:w-24 lg:h-40 lg:w-36">
              <img src="./OnTheGoLogoAligned.png" height="100%" width="100%"/>
          </div>
          <div className="title grid place-items-center m-2">
            <h1>On The Go</h1>
          </div>
        </div>
        <div className="flex flex-col p-8 mt-6">
          <form>
            <InputText labelValue="Choose Starting Point" inputValue={startDestination}></InputText>
            <hr></hr>
            <InputText labelValue="Choose Destination" inputValue={endDestination}></InputText>
            <hr></hr>
            <InputText labelValue="Type Of Cuisine" inputValue={foodMood}></InputText>
            <hr></hr>
            <InputText labelValue="Distance From Path" inputValue={distance}></InputText>
            <hr></hr>
          </form>
        </div>
      </div>
      <div className="Map Area: bg-blue-400 w-3/4 h-screen">
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <MyMapComponent center={center} zoom={zoom} />
        </Wrapper>
      </div>
    </div>
  )
}
