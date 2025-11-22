"use client";

import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutUs';
import StatsSection from '@/components/Stats';
import HiTechMachines from '@/components/HiTechMachines';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      {/* <StatsSection /> */}
      <HiTechMachines />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
