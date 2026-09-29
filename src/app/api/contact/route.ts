// Receives the contact form. Set CONTACT_WEBHOOK_URL (e.g. a Zapier, Make, Slack or
// Formspree endpoint) in Vercel to have submissions forwarded as JSON.
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  const name = String(data?.name ?? "").trim();
  const email = String(data?.email ?? "").trim();
  const message = String(data?.message ?? "").trim();

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please fill in your name, a valid email and a message." }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return Response.json({ error: "Your message is too long." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return Response.json({ error: "The contact form isn’t connected yet." }, { status: 503 });
  }

  const forwarded = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message, submittedAt: new Date().toISOString() }),
  }).catch(() => null);

  if (!forwarded?.ok) {
    return Response.json({ error: "We couldn’t send your message." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
