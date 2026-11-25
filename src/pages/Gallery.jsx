import { Photo } from '../components/Media.jsx';

const images = [
  ['roplabda-1.jpeg', 'Röplabdázás', 'Játék közben'],
  ['roplabda-2.png', 'Röplabda a hálónál', 'Hálónál, támadásra készen'],
  ['roplabda-3.jpeg', 'Röplabda csapat', 'A csapattal'],
  ['macska-1.jpg', 'Macska portré', 'Egy kedves macskaarc'],
  ['macska-2.jpg', 'Pihenő macska', 'Pihenés közben'],
  ['macska-3.jpg', 'Játékos macska', 'Játékidő'],
  ['programozas.png', 'Programozás', 'Kódolás közben'],
  ['programming-2.jpg', 'Kedvenc Programnyelveim', 'Java és JavaScript'],
];

export default function Gallery() {
  return (
    <>
      <h1>Galéria</h1>
      <p className='lead'>Pillanatképek a röplabdás és macskás világomból.</p>
      <div className='gallery'>
        {images.map(([file, alt, caption]) => (
          <Photo key={file} file={file} alt={alt} caption={caption} />
        ))}
      </div>
    </>
  );
}
