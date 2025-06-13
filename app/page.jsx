"use client"
import React from 'react'
import HeroSection from './home/HeroSection';
import HeroSection2 from './home/HeroSection2';
import HeroSection3 from './home/HeroSection3';
import HeroSection4 from './home/HeroSection4';

function page() {
  return (
    <main className='overflow-hidden'>
        <HeroSection></HeroSection>
        <HeroSection2></HeroSection2>
        <HeroSection3></HeroSection3>
        <HeroSection4></HeroSection4>
    </main>
  )
}

export default page;