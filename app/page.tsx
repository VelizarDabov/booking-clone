import Image from 'next/image'
import {trandingData} from '../data/Trending'
export default function Home() {
  return (
    <main className="bg-[#013B94]">
  <section className='max-w-7xl mx-auto p-6'>
    <h2 className='font-bold text-5xl text-white'> Find your Next Stay</h2>
    <h3 className='text-white py-5 text-xl'>Search low prices on hotels, homes and much more</h3>
  </section>
  <section className='m-4 mt-0 -mb-14 px-2 lg:px-4 '></section>

  <section className='mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg'>
<div className='pt-5'>
  <h3 className='text-xl font-bold'>
Trending Destination
  </h3>
  <p className='font-light'>
Most popular choice for travellers from around the world
  </p>
</div>

<div className='flex space-x-4 py-5 overflow-x-scroll'>
{trandingData.map((data) =>(
  <div key={data.id} className='space-y-1 shrink-0 cursor-pointer'>
    <img  key={data.id} className='w-80 h-72 object-cover rounded-xl pb-2' src={data.src} alt='images'/>
    <p className='font-bold'>{data.title}</p>
    <p className=''>{data.location}</p>
    <p className='font-light'>{data.description}</p>
     </div>
))}
</div>
  </section>
    </main>
  )
}
