import Head from 'next/head'
import Image from 'next/image'

import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <main className='bg-white px-10 '>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1>Developedbyed</h1>
          <ul>
            <li>
              <BsFillMoonStarsFill/>
            </li>
            <li><a href="#">resume</a></li>
          </ul>
        </nav>
      </section>
    </main>
  )
}
