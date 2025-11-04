// src/pages/ClassesPage.tsx
import React from "react";

const classesData = [
  {
    title: "Yoga Flow",
    description:
      "A smooth, breath-centered practice combining strength, balance, and flexibility. Each class follows a mindful rhythm that enhances focus and leaves you feeling refreshed.",
  },
  {
    title: "Vinyasa",
    description:
      "A dynamic flow that links movement and breath in creative sequences. Ideal for those who enjoy energetic transitions, building heat, and improving overall body awareness.",
  },
  {
    title: "Sound Healing & Meditation",
    description:
      "Guided breathing and mindfulness practices designed to reduce stress, improve focus, and promote emotional balance. Perfect for beginners or anyone seeking calm and clarity.",
  },
  {
    title: "Mat Pilates",
    description:
      "A classical Pilates practice on the mat that strengthens the core, improves posture, and enhances body control. Suitable for all levels and complements any fitness routine.",
  },
  {
    title: "Reformer Pilates",
    description:
      "Resistance-based, full-body training using the reformer machine. Focuses on alignment, strength, and balance with individualized adjustments for every body.",
    comingSoon: "Coming in December",
  },
];

export default function Classes() {
  return (
    <main className="pb-20">
      {/* Header */}
      <section className="bg-[url('/pattern-herringbone.svg')] bg-[length:280px] bg-top">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">our classes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Explore our range of yoga & Pilates classes designed to move, balance, and strengthen your body and mind.
          </p>
        </div>
      </section>

      {/* Class List */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-12 px-6 md:gap-20">
        {classesData.map((item, i) => (
          <div
            key={i}
            className={`grid items-start gap-8 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 flex items-center gap-3">
                {item.title}
                {item.comingSoon && (
                  <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs uppercase text-neutral-600">
                    {item.comingSoon}
                  </span>
                )}
              </h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
