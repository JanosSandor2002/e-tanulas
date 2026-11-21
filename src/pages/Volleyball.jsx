import { Photo, Video, ExternalLinks } from '../components/Media.jsx'
import { VIDEOS } from '../config.js'

export default function Volleyball() {
  return (
    <>
      <h1>Röplabda 🏐</h1>

      <section className="two-col">
        <div>
          <p className="lead">
            A röplabda a kedvenc sportom. Imádom a tempóját, a csapatmunkát és azt az érzést, amikor
            egy jól felépített támadás végén földet ér a labda az ellenfél térfelén.
          </p>
          <p>
            Rendszeresen játszom, az egyetemen is: volt olyan este, hogy három órán át egyfolytában
            röpiztünk, és még utána sem akartam abbahagyni. A röplabdában nem lehet egyedül
            győzni, ezért ez a sport tanít a legtöbbet a bizalomról és a figyelemről.
          </p>
        </div>
        <Photo file="roplabda-1.jpg" alt="Röplabdázás" caption="Egy jó meccs hangulata" />
      </section>

      <section>
        <h2>Milyen poszton játszom?</h2>
        <p>
          Mindegyik poszton játszottam már, és szerintem ez sokat segített abban, hogy jobban
          értsem a játékot. A kedvenceim mégis a <strong>4-es poszt (ütő, angolul outside hitter)</strong>{' '}
          és a <strong>6-os poszt (liberó)</strong>.
        </p>
        <div className="cards">
          <div className="card static">
            <h3>Ütő – 4-es poszt</h3>
            <p>
              A bal szélen játszik, és a csapat egyik fő támadója. Nyitásfogadásban is nagy szerepe
              van, ezért támadni és védekezni is tudnia kell. Ez a poszt a legváltozatosabb: egyszerre
              kell erő, pontosság és gyors döntéshozatal.
            </p>
          </div>
          <div className="card static">
            <h3>Liberó – 6-os poszt</h3>
            <p>
              A védekezés és a fogadás specialistája, külön színű mezben játszik. Csak a hátsó sorban
              szerepelhet, nem blokkolhat és nem támadhat a háló fölött. Itt a türelem, a labdaérzék
              és az olvasni tudás a legfontosabb: előre kell látni, hova érkezik a labda.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>A röplabda röviden</h2>
        <ul className="bullets">
          <li>Hat-hat játékos áll egymással szemben a hálónál, és a labdát nem szabad földet érni hagyni a saját térfélen.</li>
          <li>Egy csapat legfeljebb három érintéssel juttathatja át a labdát: általában fogadás, feladás, majd támadás.</li>
          <li>Egy szett 25 pontig tart, két pont különbséggel. A mérkőzés három nyert szettig megy, az ötödik szett 15 pontos.</li>
          <li>Sikeres szerva- vagy labdamenet után a csapat egyet forog, így mindenki minden pozíciót megjátszik.</li>
          <li>Az alapelemek: nyitás (szerva), fogadás, feladás, támadás (ütés), blokk és mezőnyvédekezés.</li>
        </ul>
      </section>

      <section className="two-col reverse">
        <div>
          <h2>Videó</h2>
          <p>Nézd meg, mitől ennyire látványos ez a sport!</p>
          <Video config={VIDEOS.roplabda} title="Röplabda videó" />
        </div>
        <Photo file="roplabda-2.jpg" alt="Röplabda a hálónál" caption="Hálónál, támadásra készen" />
      </section>

      <section>
        <h2>Hasznos linkek</h2>
        <ExternalLinks
          items={[
            ['https://hu.wikipedia.org/wiki/Röplabda', 'Röplabda – Wikipédia', 'a sportág története és szabályai magyarul'],
            ['https://www.volleyballworld.com', 'Volleyball World', 'nemzetközi hírek, meccsek és eredmények'],
          ]}
        />
      </section>
    </>
  )
}
