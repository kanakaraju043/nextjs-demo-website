import Image from 'next/image'
import Hero from './_components/Hero'
import ProductSection from './_components/ProductSection'
import FeaturedSection from './_components/FeaturedSection'
import TopSection from './_components/TopSection'
import GridSection from './_components/GridSection'
import { CarouselCard } from './_components/CarouselCard'
export default function Home() {
  return (
    <>
    <CarouselCard/>
    <Hero />
    <TopSection/>
    <FeaturedSection/>
    <ProductSection/>
    <GridSection/>
    </>
  )
}
