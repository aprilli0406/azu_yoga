import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";

const STORAGE_KEY = "azu.booking-demo.v1";

const classTemplates = [
  {
    slug: "yoga-beginner",
    dayOffset: 1,
    time: "6:00 PM",
    title: { en: "Yoga Beginner", fr: "Yoga débutant" },
    type: { en: "Yoga", fr: "Yoga" },
    instructor: "April",
    duration: 60,
    capacity: 10,
    baseBooked: 6,
    baseWaitlist: 0,
  },
  {
    slug: "reformer-flow",
    dayOffset: 2,
    time: "5:30 PM",
    title: { en: "Reformer Flow", fr: "Reformer Flow" },
    type: { en: "Reformer Pilates", fr: "Pilates Reformer" },
    instructor: "April",
    duration: 60,
    capacity: 6,
    baseBooked: 6,
    baseWaitlist: 2,
  },
  {
    slug: "mat-pilates",
    dayOffset: 3,
    time: "12:00 PM",
    title: { en: "Mat Pilates — All Levels", fr: "Pilates au sol — Tous niveaux" },
    type: { en: "Mat Pilates", fr: "Pilates au sol" },
    instructor: "Sofia",
    duration: 55,
    capacity: 8,
    baseBooked: 7,
    baseWaitlist: 0,
  },
  {
    slug: "slow-flow",
    dayOffset: 4,
    time: "7:00 PM",
    title: { en: "Slow Flow Yoga", fr: "Yoga Slow Flow" },
    type: { en: "Yoga", fr: "Yoga" },
    instructor: "Maya",
    duration: 60,
    capacity: 10,
    baseBooked: 4,
    baseWaitlist: 0,
  },
  {
    slug: "pilates-beginner",
    dayOffset: 5,
    time: "10:00 AM",
    title: { en: "Pilates Beginner", fr: "Pilates débutant" },
    type: { en: "Mat Pilates", fr: "Pilates au sol" },
    instructor: "April",
    duration: 55,
    capacity: 8,
    baseBooked: 3,
    baseWaitlist: 0,
  },
];

const copy = {
  en: {
    eyebrow: "Azu booking · Interactive prototype",
    title: "Book your next class.",
    intro:
      "Try the reservation flow before we connect customer accounts, a database, and Stripe.",
    demoBadge: "Demo mode · No real booking or payment",
    back: "Back to current schedule",
    schedule: "Upcoming classes",
    scheduleIntro: "Choose a class to reserve a spot or join its waiting list.",
    spot: "spot left",
    spots: "spots left",
    full: "Class full",
    waiting: "waiting",
    reserve: "Reserve",
    joinWaitlist: "Join waiting list",
    reserved: "Reserved",
    waitlisted: "Waiting list",
    yourBookings: "My demo bookings",
    noBookings: "Your reservations and waiting-list spots will appear here.",
    confirmed: "Confirmed",
    waitlistPosition: "Waiting list",
    cancel: "Cancel",
    reset: "Reset demo",
    reserveTitle: "Reserve your spot",
    waitlistTitle: "Join the waiting list",
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    confirmReservation: "Confirm reservation",
    confirmWaitlist: "Join waiting list",
    close: "Close",
    successReserved: "You are confirmed for",
    successWaitlisted: "The class is full. You are now on the waiting list for",
    duplicate: "This email already has a booking for this class.",
    people: "people",
    classList: "Class list",
    registered: "registered",
    payments: "Phase 2 · Packages & payments",
    paymentsTitle: "Stripe test checkout comes next.",
    paymentsText:
      "Once you approve the booking rules, we can connect Stripe test mode, class-pass balances, receipts, and refunds without charging real cards.",
    paymentButton: "Stripe test checkout · Not enabled",
    localNote:
      "Prototype data stays only in this browser. It is not sent to Azu Studio and is safe to reset.",
  },
  fr: {
    eyebrow: "Réservation Azu · Prototype interactif",
    title: "Réservez votre prochain cours.",
    intro:
      "Essayez le parcours de réservation avant de connecter les comptes clients, une base de données et Stripe.",
    demoBadge: "Mode démo · Aucune réservation ni aucun paiement réel",
    back: "Retour à l’horaire actuel",
    schedule: "Cours à venir",
    scheduleIntro: "Choisissez un cours pour réserver ou rejoindre la liste d’attente.",
    spot: "place restante",
    spots: "places restantes",
    full: "Cours complet",
    waiting: "en attente",
    reserve: "Réserver",
    joinWaitlist: "Rejoindre la liste d’attente",
    reserved: "Réservé",
    waitlisted: "Liste d’attente",
    yourBookings: "Mes réservations démo",
    noBookings: "Vos réservations et places en attente apparaîtront ici.",
    confirmed: "Confirmé",
    waitlistPosition: "Liste d’attente",
    cancel: "Annuler",
    reset: "Réinitialiser la démo",
    reserveTitle: "Réservez votre place",
    waitlistTitle: "Rejoignez la liste d’attente",
    name: "Nom",
    namePlaceholder: "Votre nom complet",
    email: "Courriel",
    emailPlaceholder: "vous@exemple.com",
    confirmReservation: "Confirmer la réservation",
    confirmWaitlist: "Rejoindre la liste d’attente",
    close: "Fermer",
    successReserved: "Votre place est confirmée pour",
    successWaitlisted: "Le cours est complet. Vous êtes sur la liste d’attente pour",
    duplicate: "Ce courriel a déjà une réservation pour ce cours.",
    people: "personnes",
    classList: "Liste du cours",
    registered: "inscrites",
    payments: "Phase 2 · Forfaits et paiements",
    paymentsTitle: "Le paiement test Stripe vient ensuite.",
    paymentsText:
      "Après validation des règles de réservation, nous pourrons connecter le mode test Stripe, les soldes de cours, les reçus et les remboursements sans débiter de vraies cartes.",
    paymentButton: "Paiement test Stripe · Non activé",
    localNote:
      "Les données du prototype restent uniquement dans ce navigateur. Elles ne sont pas envoyées à Azu Studio et peuvent être réinitialisées.",
  },
};

function dateKey(date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

function buildSessions() {
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  return classTemplates.map((template) => {
    const date = new Date(today);
    date.setDate(today.getDate() + template.dayOffset);
    return { ...template, id: `${dateKey(date)}-${template.slug}`, date };
  });
}

function loadBookings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function makeId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `booking-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export default function BookingDemo() {
  const { locale } = useI18n();
  const c = copy[locale];
  const sessions = useMemo(buildSessions, []);
  const [bookings, setBookings] = useState(loadBookings);
  const [activeSession, setActiveSession] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [notice, setNotice] = useState("");
  const [formError, setFormError] = useState("");

  const saveBookings = (nextBookings) => {
    setBookings(nextBookings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextBookings));
  };

  const statsFor = (session) => {
    const sessionBookings = bookings
      .filter((booking) => booking.sessionId === session.id)
      .sort((a, b) => a.createdAt - b.createdAt);
    const confirmed = sessionBookings.filter((booking) => booking.status === "confirmed");
    const waitlisted = sessionBookings.filter((booking) => booking.status === "waitlisted");
    return {
      confirmed,
      waitlisted,
      booked: session.baseBooked + confirmed.length,
      waiting: session.baseWaitlist + waitlisted.length,
      remaining: Math.max(session.capacity - session.baseBooked - confirmed.length, 0),
    };
  };

  const dateFormatter = useMemo(
    () => new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", { weekday: "short", month: "short", day: "numeric" }),
    [locale],
  );

  const openBooking = (session) => {
    setFormError("");
    setNotice("");
    setActiveSession(session);
  };

  const submitBooking = (event) => {
    event.preventDefault();
    if (!activeSession) return;

    const normalizedEmail = form.email.trim().toLowerCase();
    const alreadyBooked = bookings.some(
      (booking) => booking.sessionId === activeSession.id && booking.email.toLowerCase() === normalizedEmail,
    );

    if (alreadyBooked) {
      setFormError(c.duplicate);
      return;
    }

    const stats = statsFor(activeSession);
    const status = stats.remaining > 0 ? "confirmed" : "waitlisted";
    const booking = {
      id: makeId(),
      sessionId: activeSession.id,
      name: form.name.trim(),
      email: normalizedEmail,
      status,
      createdAt: Date.now(),
    };

    saveBookings([...bookings, booking]);
    setNotice(
      `${status === "confirmed" ? c.successReserved : c.successWaitlisted} ${activeSession.title[locale]}.`,
    );
    setForm({ name: "", email: "" });
    setActiveSession(null);
  };

  const cancelBooking = (bookingId) => {
    const booking = bookings.find((item) => item.id === bookingId);
    if (!booking) return;

    let nextBookings = bookings.filter((item) => item.id !== bookingId);
    if (booking.status === "confirmed") {
      const nextWaitlisted = nextBookings
        .filter((item) => item.sessionId === booking.sessionId && item.status === "waitlisted")
        .sort((a, b) => a.createdAt - b.createdAt)[0];
      if (nextWaitlisted) {
        nextBookings = nextBookings.map((item) =>
          item.id === nextWaitlisted.id ? { ...item, status: "confirmed" } : item,
        );
      }
    }

    saveBookings(nextBookings);
  };

  const resetDemo = () => {
    saveBookings([]);
    setNotice("");
  };

  return (
    <main className="min-h-screen bg-[#f7f3ef] text-[#302a22]">
      <section className="border-b border-[#302a22]/10 bg-[#d1b7a7] px-5 py-14 sm:px-8 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f493e]">{c.eyebrow}</p>
            <span className="rounded-full border border-[#5f493e]/20 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5f493e]">
              {c.demoBadge}
            </span>
          </div>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-light leading-tight sm:text-6xl">{c.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#302a22]/68 sm:text-lg">{c.intro}</p>
            </div>
            <Link
              to="/schedule"
              className="inline-flex items-center justify-center rounded-full border border-[#302a22]/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition hover:border-[#302a22] hover:bg-white/30"
            >
              ← {c.back}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.55fr_0.75fr] lg:items-start">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-light sm:text-4xl">{c.schedule}</h2>
                <p className="mt-2 text-sm leading-6 text-[#302a22]/60">{c.scheduleIntro}</p>
              </div>
              <div className="hidden rounded-2xl bg-white px-4 py-3 text-right shadow-sm sm:block">
                <p className="text-2xl font-light">{sessions.length}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#806657]">Classes</p>
              </div>
            </div>

            {notice && (
              <div role="status" className="mt-6 rounded-2xl border border-emerald-700/15 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-900">
                {notice}
              </div>
            )}

            <div className="mt-7 space-y-4">
              {sessions.map((session) => {
                const stats = statsFor(session);
                const existingBooking = bookings.find((booking) => booking.sessionId === session.id);
                const isFull = stats.remaining === 0;

                return (
                  <article key={session.id} className="overflow-hidden rounded-[1.5rem] border border-[#302a22]/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#302a22]/8">
                    <div className="grid sm:grid-cols-[150px_1fr_auto] sm:items-center">
                      <div className="flex h-full items-center gap-3 bg-[#302a22] px-5 py-5 text-white sm:flex-col sm:items-start sm:justify-center sm:px-6 sm:py-8">
                        <CalendarIcon />
                        <div>
                          <p className="font-medium">{dateFormatter.format(session.date)}</p>
                          <p className="mt-1 text-sm text-white/65">{session.time}</p>
                        </div>
                      </div>

                      <div className="px-5 py-5 sm:px-7">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#806657]">{session.type[locale]}</p>
                        <h3 className="mt-2 text-xl font-medium sm:text-2xl">{session.title[locale]}</h3>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#302a22]/58">
                          <span>{session.instructor}</span>
                          <span>{session.duration} min</span>
                          <span>{stats.booked}/{session.capacity} {c.registered}</span>
                        </div>
                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#302a22]/8">
                          <div
                            className={`h-full rounded-full ${isFull ? "bg-[#806657]" : "bg-[#5f7661]"}`}
                            style={{ width: `${Math.min((stats.booked / session.capacity) * 100, 100)}%` }}
                          />
                        </div>
                        <p className={`mt-2 text-xs font-medium ${isFull ? "text-[#806657]" : "text-[#4f6a54]"}`}>
                          {isFull
                            ? `${c.full}${stats.waiting ? ` · ${stats.waiting} ${c.waiting}` : ""}`
                            : `${stats.remaining} ${stats.remaining === 1 ? c.spot : c.spots}`}
                        </p>
                      </div>

                      <div className="px-5 pb-5 sm:px-7 sm:py-5">
                        <button
                          type="button"
                          onClick={() => openBooking(session)}
                          disabled={Boolean(existingBooking)}
                          className={`w-full whitespace-nowrap rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] transition sm:w-auto ${
                            existingBooking
                              ? "cursor-default bg-[#302a22]/8 text-[#302a22]/45"
                              : isFull
                                ? "border border-[#806657] text-[#806657] hover:bg-[#806657] hover:text-white"
                                : "bg-[#302a22] text-white hover:bg-[#4a4136]"
                          }`}
                        >
                          {existingBooking
                            ? existingBooking.status === "confirmed" ? c.reserved : c.waitlisted
                            : isFull ? c.joinWaitlist : c.reserve}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-[#302a22]/10 bg-white p-6 shadow-sm lg:sticky lg:top-28 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#806657]">{c.classList}</p>
                <h2 className="mt-2 text-2xl font-light">{c.yourBookings}</h2>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d1b7a7]/45 font-medium">{bookings.length}</span>
            </div>

            {bookings.length === 0 ? (
              <p className="mt-8 rounded-2xl bg-[#f7f3ef] px-5 py-7 text-sm leading-6 text-[#302a22]/55">{c.noBookings}</p>
            ) : (
              <div className="mt-6 space-y-3">
                {bookings.map((booking) => {
                  const session = sessions.find((item) => item.id === booking.sessionId);
                  if (!session) return null;
                  const stats = statsFor(session);
                  const position = session.baseWaitlist + stats.waitlisted.findIndex((item) => item.id === booking.id) + 1;

                  return (
                    <div key={booking.id} className="rounded-2xl border border-[#302a22]/10 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${booking.status === "confirmed" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
                            {booking.status === "confirmed" ? c.confirmed : `${c.waitlistPosition} #${position}`}
                          </span>
                          <p className="mt-3 font-medium">{session.title[locale]}</p>
                          <p className="mt-1 text-xs text-[#302a22]/55">{dateFormatter.format(session.date)} · {session.time}</p>
                          <p className="mt-2 text-xs text-[#302a22]/45">{booking.name}</p>
                        </div>
                        <button type="button" onClick={() => cancelBooking(booking.id)} className="text-xs font-semibold text-[#806657] underline decoration-[#806657]/30 underline-offset-4 hover:decoration-[#806657]">
                          {c.cancel}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <p className="mt-6 text-xs leading-5 text-[#302a22]/48">{c.localNote}</p>
            {bookings.length > 0 && (
              <button type="button" onClick={resetDemo} className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#806657]">
                {c.reset}
              </button>
            )}
          </aside>
        </div>
      </section>

      <section className="bg-[#302a22] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d1b7a7]">{c.payments}</p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">{c.paymentsTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62 sm:text-base">{c.paymentsText}</p>
          </div>
          <button type="button" disabled className="cursor-not-allowed rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
            {c.paymentButton}
          </button>
        </div>
      </section>

      {activeSession && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#302a22]/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActiveSession(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="booking-dialog-title" className="w-full max-w-lg rounded-[1.75rem] bg-white p-6 text-left shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#806657]">{activeSession.type[locale]}</p>
                <h2 id="booking-dialog-title" className="mt-2 text-2xl font-light">
                  {statsFor(activeSession).remaining > 0 ? c.reserveTitle : c.waitlistTitle}
                </h2>
              </div>
              <button type="button" onClick={() => setActiveSession(null)} aria-label={c.close} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f3ef] text-xl text-[#302a22]/60">×</button>
            </div>

            <div className="mt-6 rounded-2xl bg-[#f7f3ef] p-4">
              <p className="font-medium">{activeSession.title[locale]}</p>
              <p className="mt-1 text-sm text-[#302a22]/55">{dateFormatter.format(activeSession.date)} · {activeSession.time} · {activeSession.duration} min</p>
            </div>

            <form className="mt-6 space-y-5" onSubmit={submitBooking}>
              <label className="block text-sm font-medium">
                {c.name}
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  placeholder={c.namePlaceholder}
                  className="mt-2 w-full rounded-xl border border-[#302a22]/15 bg-white px-4 py-3 outline-none transition focus:border-[#806657] focus:ring-2 focus:ring-[#806657]/15"
                />
              </label>
              <label className="block text-sm font-medium">
                {c.email}
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  placeholder={c.emailPlaceholder}
                  className="mt-2 w-full rounded-xl border border-[#302a22]/15 bg-white px-4 py-3 outline-none transition focus:border-[#806657] focus:ring-2 focus:ring-[#806657]/15"
                />
              </label>
              {formError && <p role="alert" className="text-sm font-medium text-red-700">{formError}</p>}
              <button type="submit" className="w-full rounded-full bg-[#302a22] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#4a4136]">
                {statsFor(activeSession).remaining > 0 ? c.confirmReservation : c.confirmWaitlist}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
