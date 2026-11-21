import { asset } from '../config.js'

export default function Podcast() {
  return (
    <>
      <h1>Podcast 🎧</h1>
      <p className="lead">
        Ebben a rövid hanganyagban bemutatkozom, és mesélek arról, mit jelent nekem a röplabda és
        a macskák szeretete.
      </p>
      <div className="audio-box">
        <audio controls preload="metadata" src={asset('audio/podcast.mp3')}>
          A böngésződ nem támogatja a hanglejátszást.
        </audio>
      </div>
      <p className="muted">Hossz: kb. 2–4 perc.</p>
    </>
  )
}
