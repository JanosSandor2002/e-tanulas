import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Volleyball from './pages/Volleyball.jsx'
import Cats from './pages/Cats.jsx'
import Gallery from './pages/Gallery.jsx'
import Podcast from './pages/Podcast.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bemutatkozas" element={<About />} />
        <Route path="/roplabda" element={<Volleyball />} />
        <Route path="/macskak" element={<Cats />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/kapcsolat" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
