import { asset } from '../config.js'

export function Photo({ file, alt, caption }) {
  return (
    <figure className="photo">
      <img src={asset(`images/${file}`)} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function Video({ config, title }) {
  return (
    <div className="video">
      {config.youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${config.youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video controls preload="metadata">
          <source src={asset(config.file)} type="video/mp4" />
          A böngésződ nem támogatja a videólejátszást.
        </video>
      )}
    </div>
  )
}

export function ExternalLinks({ items }) {
  return (
    <ul className="links">
      {items.map(([url, label, desc]) => (
        <li key={url}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
          {desc && <span> – {desc}</span>}
        </li>
      ))}
    </ul>
  )
}
