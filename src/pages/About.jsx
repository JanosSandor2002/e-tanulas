import { Photo, ExternalLinks } from '../components/Media.jsx';
import { SITE } from '../config.js';

export default function About() {
  return (
    <>
      <h1>Bemutatkozás</h1>

      <section className='two-col'>
        <div>
          <p className='lead'>
            {SITE.name} vagyok, 24 éves egyetemi hallgató, az interneten{' '}
            {SITE.nicknames.join(' vagy ')} néven találsz meg. Jelenleg levelező
            tagozaton végzem az informatikatanár mesterképzést, és nagyon
            élvezem, hogy a két kedvenc területemet, a programozást és a
            tanítást össze tudom kötni.
          </p>
          <p>
            Szeretem, ha egy közösségben mindenki jól érzi magát. Nyitott,
            barátságos és empatikus vagyok, hamar észreveszem, ha valakinek
            megváltozik a hangulata, és szívesen segítek mindenkinek. A
            röplabdában és a tanításban is ez a legfontosabb számomra: jó
            csapatot építeni, ahol bízunk egymásban.
          </p>
        </div>
        <Photo
          file='bemutatkozas.png'
          alt='Rólam készült kép'
          caption={`${SITE.monogram}`}
        />
      </section>

      <section>
        <h2>Programozói múltam</h2>
        <p>
          A programozás számomra nem csak tanulnivaló, hanem alkotás. A
          webfejlesztés áll hozzám a legközelebb: JavaScript alapokon dolgozom,
          többek között Reacttel és Vite-tal (ezzel az oldallal is),
          Next.js-szel, valamint Express és NestJS háttérrendszerekkel.
          Mobilalkalmazásokat React Native Expóval készítettem, a Java világában
          pedig Spring Boottal ismerkedtem meg.
        </p>
        <p>
          Játékfejlesztéssel is kísérletezem a Godot motorban, mert ott a
          kreativitás és a logika különösen jól találkozik. A kódolás mellett a
          dokumentálás és a projektmenedzsment is érdekel, hiszen egy projekt
          akkor igazán jó, ha mások is megértik és tovább tudják vinni.
        </p>
        <ExternalLinks
          items={[
            [
              'https://react.dev',
              'React',
              'a webes felületek építéséhez használt könyvtár',
            ],
            [
              'https://vite.dev',
              'Vite',
              'gyors fejlesztői környezet, ezzel készült ez az oldal',
            ],
            ['https://godotengine.org', 'Godot', 'nyílt forráskódú játékmotor'],
            [
              'https://spring.io/projects/spring-boot',
              'Spring Boot',
              'Java alapú háttérrendszerek',
            ],
          ]}
        />
      </section>

      <section>
        <h2>Miért vonz a tanári pálya?</h2>
        <p>
          Az informatika az egyik leggyorsabban változó terület, és szerintem
          ezért különösen fontos, hogy a diákok jó alapokat kapjanak, és ne
          féljenek a technológiától. Már korrepetáltam, és tartottam órákat is,
          és minden alkalommal megerősödött bennem, mennyire jó érzés látni,
          amikor valakinél leesik a tantusz.
        </p>
        <p>
          A tanári munkában az empátia és a türelem legalább annyira számít,
          mint a szaktudás. Úgy gondolom, hogy a jó tanár nem csak átadja az
          anyagot, hanem biztonságos közeget teremt a kérdezéshez és a
          hibázáshoz. A célom, hogy olyan informatikatanár legyek, akinek az
          óráin a diákok kedvvel gondolkodnak, alkotnak és fejlődnek.
        </p>
      </section>

      <section>
        <h2>És a hobbi?</h2>
        <p>
          A tanulás és a kódolás mellett a töltődést a <strong>röplabda</strong>{' '}
          és a <strong>macskák</strong> jelentik. Erről szól az oldal többi
          része is, nézz tovább!
        </p>
      </section>
    </>
  );
}
