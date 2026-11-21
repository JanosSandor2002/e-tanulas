// ÍRD ÁT a saját adataidra! Minden oldal innen veszi az adatokat.
export const SITE = {
  name: 'Teljes Neved',        // pl. 'Kovács Péter'
  monogram: 'K.P.',            // a főoldali kép aláírásában jelenik meg
  email: 'email@cimed.hu',
}

// Videók: ha YouTube-videót szeretnél, írd ide a videó azonosítóját
// (a youtube.com/watch?v=AZONOSÍTÓ rész). Ha üresen hagyod, a saját
// fájlt játssza le a public/video mappából.
export const VIDEOS = {
  roplabda: { youtubeId: '', file: 'video/roplabda.mp4' },
  macska: { youtubeId: '', file: 'video/macska.mp4' },
}

// Segédfüggvény a public mappában lévő fájlokhoz
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
