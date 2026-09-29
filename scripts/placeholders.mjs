// Writes SVG stand-ins for every photo/icon in src/lib/images.ts.
// Replace each file in public/images with the real export from Figma (same name,
// then update the extension in images.ts if it isn't .svg).
import { mkdirSync, writeFileSync } from "node:fs";

const out = new URL("../public/images/", import.meta.url);
mkdirSync(out, { recursive: true });

const photos = {
  "hero-home": [1920, 1080, "Night city skyline"],
  "who-we-are": [640, 520, "AI marketing on laptop"],
  "banner-city": [1920, 620, "Dubai at night"],
  "why-bg": [1920, 870, "Office background"],
  "why-photo": [540, 600, "Team at work"],
  "hero-real-estate": [1920, 800, "Handshake and model house"],
  "hero-medical": [1920, 800, "Clinic"],
  "hero-education": [1920, 800, "Students"],
  "hero-automotive": [1920, 800, "Car showroom"],
  "overview-real-estate": [710, 410, "Model house and coins"],
  "overview-medical": [710, 410, "Clinic overview"],
  "overview-education": [710, 410, "Education overview"],
  "overview-automotive": [710, 410, "Automotive overview"],
  "hero-about": [1920, 800, "Dubai business district"],
  "about-main": [640, 520, "Our team"],
  "about-mission": [710, 305, "Mission"],
  "about-vision": [710, 305, "Vision"],
  "about-approach": [540, 600, "What we do best"],
  "banner-about": [1920, 620, "Dubai skyline"],
  "hero-contact": [1920, 800, "Business meeting"],
  "contact-why": [540, 380, "Why contact us"],
  "banner-contact": [1920, 620, "Growth hologram"],
};
for (const slug of ["real-estate", "medical", "education", "automotive"]) {
  for (let i = 1; i <= 5; i++) photos[`${slug}-${i}`] = [930, 930, `${slug} solution ${i}`];
}

const photo = (w, h, label) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b2a33"/><stop offset=".55" stop-color="#0a0f14"/><stop offset="1" stop-color="#062d3a"/></linearGradient>
<pattern id="p" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#07afca" stroke-opacity=".08"/></pattern></defs>
<rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#p)"/>
<text x="50%" y="50%" fill="#07afca" fill-opacity=".55" font-family="sans-serif" font-size="${Math.max(14, Math.round(Math.min(w, h) / 22))}" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`;

for (const [name, [w, h, label]] of Object.entries(photos)) {
  writeFileSync(new URL(`${name}.svg`, out), photo(w, h, label));
}

// Square avatars and industry pictograms
for (let i = 1; i <= 3; i++) {
  writeFileSync(new URL(`avatar-${i}.svg`, out), `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="#bdbdbd"/><circle cx="32" cy="25" r="11" fill="#8a8a8a"/><path d="M12 60c2-13 11-19 20-19s18 6 20 19z" fill="#8a8a8a"/></svg>`);
}

// Client logo stand-ins (the design itself uses "logoipsum" placeholders)
const clients = ["logo-ipsum", "loop", "logoipsum", "PWR", "logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "logo"];
clients.forEach((label, i) => {
  writeFileSync(new URL(`client-${i + 1}.svg`, out), `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="56" viewBox="0 0 200 56"><circle cx="24" cy="28" r="18" fill="none" stroke="#07afca" stroke-width="6"/><text x="52" y="37" fill="#07afca" font-family="sans-serif" font-weight="700" font-size="24">${label}</text></svg>`);
});

console.log(`wrote ${Object.keys(photos).length + 3 + clients.length} placeholders`);
