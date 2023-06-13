import Image from 'next/image'
import NavBar from './components/NavBar'
import NavBar2 from './components/NavBar2'
import Categories from './components/Categories'
import ImageSlider from './components/ImageSlider'
import CardComponent from './components/CardComponent'

export default function Home() {
  return (
<>
<NavBar/>
<NavBar2/>
<Categories/>
<ImageSlider/>
<CardComponent/>
</>
  )
}
