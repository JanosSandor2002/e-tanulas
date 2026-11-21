# Röplabda és macskák – személyes honlap

Ez a repository az **E-tanulás** tantárgy gyakorlati feladatához (*Saját weboldal készítése*) készült honlap forráskódját tartalmazza. A weboldal a hobbimról szól: a **röplabdáról** és a **macskák szeretetéről**. Emellett bemutatom a programozói múltamat és a tanári pálya iránti érdeklődésemet is.

- **Készítette:** [Sándor János]
- **Képzés:** informatikatanár mesterképzés (levelező tagozat)
- **Tantárgy:** E-tanulás

## A feladat követelményei és a megvalósítás

| Követelmény | Megvalósítás |
|---|---|
| Legalább 4–5 önállóan megnyíló oldal | 7 oldal, mindegyiknek saját címe van: Főoldal, Bemutatkozás, Röplabda, Macskák, Galéria, Podcast, Kapcsolat |
| Szövegek a hobbiról | Röplabda (pozíciók, szabályok) és macskák (miért szeretem őket, érdekességek) oldalak |
| Képek a hobbival kapcsolatban | Röplabda- és macskaképek az oldalakon és a Galériában |
| Videók | Egy-egy videó a Röplabda és a Macskák oldalon |
| Külső oldalakra mutató linkek | Wikipédia, Volleyball World, International Cat Care, React, Vite, Godot, Spring Boot |
| 2–4 perces hanganyag (bemutatkozással) | Podcast oldal, a felvétel elején bemutatkozom |
| Azonosítás: fotó a főoldalon, monogram a képaláírásban | A főoldalon a röplabdázás közben készült fotóm szerepel, az aláírásban a monogramommal |

## Az oldalak

| Útvonal | Oldal | Tartalom |
|---|---|---|
| `#/` | Főoldal | Bemutatkozás röviden, azonosító fotó, navigációs kártyák |
| `#/bemutatkozas` | Bemutatkozás | Programozói múlt, tanári pálya, személyiség |
| `#/roplabda` | Röplabda | Posztok (4-es ütő, 6-os liberó), alapszabályok, videó, linkek |
| `#/macskak` | Macskák | Szöveg, érdekességek, videó, linkek |
| `#/galeria` | Galéria | Képek a röplabdáról és a macskákról |
| `#/podcast` | Podcast | Hanganyag lejátszó |
| `#/kapcsolat` | Kapcsolat | E-mail, hasznos linkek |

## Használt technológiák

- [React](https://react.dev) 18
- [Vite](https://vite.dev) 5
- [React Router](https://reactrouter.com) (`HashRouter`, így bármilyen ingyenes tárhelyen működik külön beállítás nélkül)
- sima CSS, reszponzív kialakítással (telefonon is jól néz ki)

## Futtatás helyben

Szükséges: [Node.js](https://nodejs.org) 18 vagy újabb.

```bash
npm install
npm run dev
```

A fejlesztői szerver címe általában `http://localhost:5173`.

## Éles változat készítése és feltöltés

```bash
npm run build
```

A kész oldal a `dist/` mappába kerül. Ennek tartalmát feltöltheted bármelyik ingyenes tárhelyre, például a [Netlify Drop](https://app.netlify.com/drop) oldalra. Az így kapott linket kell beilleszteni a beadandó dokumentumba.

## Projektstruktúra

```
├── public/
│   ├── images/      # képek (pl. fooldal-roplabda-profil.jpg, roplabda-1.jpg, macska-1.jpg)
│   ├── video/       # videók (roplabda.mp4, macska.mp4)
│   └── audio/       # podcast.mp3
├── src/
│   ├── components/  # Layout (fejléc, menü, lábléc) és Media (kép, videó, linkek)
│   ├── pages/       # az egyes oldalak
│   ├── config.js    # név, monogram, e-mail, videó beállítások
│   ├── App.jsx      # útvonalak
│   ├── main.jsx
│   └── styles.css
├── MEDIA_UTMUTATO.md   # melyik médiafájl hova kerül, milyen néven
└── PODCAST_SZOVEG.md   # a podcast felolvasott szövege
```
