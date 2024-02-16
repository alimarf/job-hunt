import BannerSignUp from '@/components/organism/BannerSignUp'
import Category from '@/components/organism/Category'
import Clients from '@/components/organism/Clients'
import FeaturedJobs from '@/components/organism/FeaturedJobs'
import Hero from '@/components/organism/Hero'
import LatestJobs from '@/components/organism/LatestJobs'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='px-32 mb-10'>
    <Hero />
    <Clients />
    <Category />
    <BannerSignUp />
    <FeaturedJobs />
    <LatestJobs />
   </div>
  )
}
