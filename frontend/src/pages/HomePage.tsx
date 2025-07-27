// src/pages/HomePage.tsx (for later)
import HeroSection from '../sections/home/HeroSection'

import IntroSection from '../sections/home/IntroSection'
import SuccessSnapshot from '../sections/home/StatSection'
// ... other sections

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
        <SuccessSnapshot />
        {/* Add other sections as needed */}
        {/* <CounselorsSection /> */}
        {/* <StudentsSection /> */}
      {/* Add other sections as needed */}
      {/* <AboutSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ContactSection /> */}

      {/* Other sections */}
    </>
  )
}