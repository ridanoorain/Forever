import React from 'react'
import Title from "../components/Title"
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a deep-rooted passion for innovation and an unwavering desire to revolutionize the way people experience modern commerce, blending technology with creativity to deliver meaningful, user-centric solutions.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse and ever-evolving selection of high-quality products and services, meticulously chosen to meet the dynamic needs and preferences of our global customer base.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To simplify secure digital payments and empower businesses of all sizes to grow online with confidence.</p>
        </div>
      </div>

    </div>
  )
}

export default About
