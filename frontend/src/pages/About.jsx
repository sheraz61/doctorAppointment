import React from 'react'
import { assets } from '../assets/assets'
function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fugit omnis rem doloremque et ratione earum quaerat mollitia ipsum iure! Quae, saepe. Fugit molestias labore deleniti harum reiciendis eos expedita.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem qui obcaecati, suscipit eligendi, accusamus tempore nihil asperiores debitis culpa magnam dicta tenetur, eveniet labore numquam nulla dolor quos at! Nemo!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempore rem pariatur, asperiores id deleniti deserunt exercitationem ipsam quod eius tempora! Consequuntur eaque quo architecto maxime, amet repellat dolorum ipsam!</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20 gap-4'>
        <div className='border px-10 md:px-16 py-8 sm:px-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f5FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-xl'>
          <b>
            Efficiency:
          </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus reiciendis,
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:px-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f5FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-xl'>
          <b>Convenience:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At fuga nihil vel.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:px-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f5FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-xl'>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        </div>
      </div>

    </div>
  )
}

export default About