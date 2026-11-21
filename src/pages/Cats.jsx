import { Photo, Video, ExternalLinks } from '../components/Media.jsx'
import { VIDEOS } from '../config.js'

export default function Cats() {
  return (
    <>
      <h1>Macskák 🐱</h1>

      <section className="two-col">
        <div>
          <p className="lead">
            A röplabda mellett a másik nagy szerelmem a macskák világa. Egyszerűen nem tudok
            elmenni mellettük anélkül, hogy ne simogassam meg őket.
          </p>
          <p>
            Imádom bennük, hogy egyszerre függetlenek és ragaszkodóak: a maguk módján választják ki,
            kit engednek közel magukhoz. Ha pedig valakit elfogadnak, azt a doronggal és a
            dörgölőzéssel egyértelműen jelzik.
          </p>
        </div>
        <Photo file="macska-1.jpg" alt="Kedvenc macskám" caption="Egy kedves macskaarc" />
      </section>

      <section>
        <h2>Miért szeretem őket ennyire?</h2>
        <ul className="bullets">
          <li>Nyugtató a jelenlétük: a doromb hallgatása egy hosszú nap után tényleg segít lelassulni.</li>
          <li>Érzékenyek a hangulatra, ezért sokszor úgy tűnik, megérzik, ha valaki szomorú vagy feszült. Ez nekem is nagyon közel áll.</li>
          <li>Mindegyiknek külön személyisége van: van, amelyik komoly, van, amelyik bohókás.</li>
          <li>Szórakoztató nézni őket: ahogy játszanak, ugranak, vagy egyszerűen kényelmesen elnyúlnak a napsütésben.</li>
        </ul>
      </section>

      <section>
        <h2>Pár érdekesség</h2>
        <p>
          A macskák naponta átlagosan 12–16 órát alszanak, és kiváló éjszakai látásuk van. Az
          orrukon és a bajuszukon keresztül rengeteg információt érzékelnek a környezetükről, a
          doromb pedig nem csak az elégedettség jele: bizonyos helyzetekben a megnyugvásukat is
          segítheti.
        </p>
      </section>

      <section className="two-col reverse">
        <div>
          <h2>Videó</h2>
          <p>Egy kis hangulatjavító:</p>
          <Video config={VIDEOS.macska} title="Macska videó" />
        </div>
        <Photo file="macska-2.jpg" alt="Macska pihenés közben" caption="Pihenés közben" />
      </section>

      <section>
        <h2>Hasznos linkek</h2>
        <ExternalLinks
          items={[
            ['https://hu.wikipedia.org/wiki/Házimacska', 'Házimacska – Wikipédia', 'a macskák eredete és jellemzői'],
            ['https://icatcare.org', 'International Cat Care', 'macskagondozási tanácsok és tudnivalók (angolul)'],
          ]}
        />
      </section>
    </>
  )
}
