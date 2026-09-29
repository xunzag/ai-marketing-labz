// Writes the "logoipsum" client logo stand-ins used by the logo strip. The design itself
// only has generic placeholder logos here; replace client-*.svg with real client logos.
import { mkdirSync, writeFileSync } from "node:fs";

const out = new URL("../public/images/", import.meta.url);
mkdirSync(out, { recursive: true });

// Client logo stand-ins (the design itself uses "logoipsum" placeholders)
const clients = ["logo-ipsum", "loop", "logoipsum", "PWR", "logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "logo"];
clients.forEach((label, i) => {
  writeFileSync(new URL(`client-${i + 1}.svg`, out), `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="56" viewBox="0 0 200 56"><circle cx="24" cy="28" r="18" fill="none" stroke="#07afca" stroke-width="6"/><text x="52" y="37" fill="#07afca" font-family="sans-serif" font-weight="700" font-size="24">${label}</text></svg>`);
});

console.log(`wrote ${clients.length} client logos`);
