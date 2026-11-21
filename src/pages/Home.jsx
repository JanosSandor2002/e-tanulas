import { Link } from 'react-router-dom'
import { Photo } from '../components/Media.jsx'
import { SITE } from '../config.js'

const cards = [
  ['/bemutatkozas', 'Bemutatkozás', 'Programozói múltam és a tanári pálya, ami vonz.'],
  ['/roplabda', 'Röplabda', 'Pozíciók, szabályok, és hogy miért szeretem ennyire.'],
  ['/macskak', 'Macskák', 'Kedvenc állataim és amit szeretek bennük.'],
  ['/galeria', 'Galéria', 'Képek a röplabdáról és a macskákról.'],
  ['/podcast', 'Podcast', 'Hallgasd meg, ahogy mesélek a hobbimról!'],
  ['/kapcsolat', 'Kapcsolat', 'Írj nekem bátran!'],
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Szia, {SITE.name} vagyok! 👋</h1>
          <p className="lead">
            Ezen az oldalon a hobbimat mutatom be: a <strong>röplabdát</strong>, amit szenvedéllyel
            játszom, és a <strong>macskák szeretetét</strong>, ami szinte ugyanennyire hozzám tartozik.
          </p>
          <p>
            Mesterképzéses informatikatanár-hallgató vagyok, programozóként is dolgozom a saját
            projektjeimen. Körbenézhetsz, megtudhatsz rólam egyet-mást, megnézheted a képeimet és
            videóimat, és meghallgathatod a rövid podcastomat is.
          </p>
        </div>
        <Photo
          file="fooldal-roplabda-profil.jpg"
          alt={`${SITE.name} röplabdázás közben`}
          caption={`Én röplabdázás közben – ${SITE.monogram}`}
        />
      </section>

      <section>
        <h2>Merre menjünk?</h2>
        <div className="cards">
          {cards.map(([to, title, text]) => (
            <Link key={to} to={to} className="card">
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
