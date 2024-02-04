import React from 'react'
import VideoSection from './VideoSection'
import { getVideoKey } from '@/helpers/movieFunctions'


const HeroSection = async ({ movieId }) => {
    const videoKey = await getVideoKey(movieId)
  return (
    <div>
        <VideoSection videoKey={videoKey} />
    </div>
  )
}

export default HeroSection