import { Photo } from '../components/Media.jsx'

const images = [
  ['roplabda-1.jpg', 'Röplabdázás', 'Játék közben'],
  ['roplabda-2.jpg', 'Röplabda a hálónál', 'Hálónál, támadásra készen'],
  ['roplabda-3.jpg', 'Röplabda csapat', 'A csapattal'],
  ['macska-1.jpg', 'Macska portré', 'Egy kedves macskaarc'],
  ['macska-2.jpg', 'Pihenő macska', 'Pihenés közben'],
  ['macska-3.jpg', 'Játékos macska', 'Játékidő'],
  ['programozas.jpg', 'Programozás', 'Kódolás közben'],
  ['csapat.jpg', 'Egyetemi röpi', 'Esti egyetemi röpi'],
]

export default function Gallery() {
  return (
    <>
      <h1>Galéria</h1>
      <p className="lead">Pillanatképek a röplabdás és macskás világomból.</p>
      <div className="gallery">
        {images.map(([file, alt, caption]) => (
          <Photo key={file} file={file} alt={alt} caption={caption} />
        ))}
      </div>
    </>
  )
}
