import { useLocation } from 'react-router-dom'
import aboutPhoto from '../assets/photos/about.jpg'
import experiencePhoto from '../assets/photos/experience.jpg'
import genaiPhoto from '../assets/photos/genai.jpg'
import './PagePhoto.css'

type Accent = 'teal' | 'amber' | 'violet'

type Photo = {
  src: string
  alt: string
  accent: Accent
  // Where object-fit: cover centers its crop — tweak per-photo if the
  // default (image's literal center) cuts off the subject awkwardly.
  objectPosition: string
}

const PHOTOS_BY_PATH: Record<string, Photo> = {
  '/': { src: aboutPhoto, alt: 'Josh Glaser', accent: 'teal', objectPosition: 'center' },
  '/experience': {
    src: experiencePhoto,
    alt: 'Josh Glaser at work',
    accent: 'amber',
    objectPosition: '1% 5%',
  },
  '/genai': {
    src: genaiPhoto,
    alt: 'Josh Glaser presenting on GenAI testing',
    accent: 'violet',
    objectPosition: '12% center',
  },
}

function PagePhoto() {
  const { pathname } = useLocation()
  const photo = PHOTOS_BY_PATH[pathname]

  if (!photo) return null

  return (
    <div className={`page-photo page-photo--${photo.accent}`}>
      <img src={photo.src} alt={photo.alt} style={{ objectPosition: photo.objectPosition }} />
    </div>
  )
}

export default PagePhoto
