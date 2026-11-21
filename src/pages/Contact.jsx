import { ExternalLinks } from '../components/Media.jsx'
import { SITE } from '../config.js'

export default function Contact() {
  return (
    <>
      <h1>Kapcsolat</h1>
      <p className="lead">
        Ha röplabdáznál, macskás képeket cserélnél, vagy programozásról, tanításról beszélgetnél,
        írj bátran!
      </p>
      <div className="card static">
        <h3>E-mail</h3>
        <p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </div>
      <section>
        <h2>Ezeket is nézd meg</h2>
        <ExternalLinks
          items={[
            ['https://www.volleyballworld.com', 'Volleyball World', 'a röplabda világa'],
            ['https://icatcare.org', 'International Cat Care', 'minden a macskákról'],
            ['https://react.dev', 'React', 'amivel ez az oldal készült'],
          ]}
        />
      </section>
    </>
  )
}
