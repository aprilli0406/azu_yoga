export default function Price() {
  const DISCOUNT = 0.25;
  const PUNCHPASS_URL = "https://app.punchpass.com/org/20290/passes";

  // ⭐ CHANGED — added Intro Class (no discount)
  const packages = [
    { name: "Intro Class for New Students", classes: 1, price: 9.98, discount: false }, // ⭐ CHANGED
    { name: "5 + 1 Mat Class Package", classes: 6, price: 150, discount: true },
    { name: "10 + 1 Mat Class Package", classes: 11, price: 240, discount: true },
    { name: "20 + 1 Mat Class Package", classes: 21, price: 390, discount: true },
    { name: "30 + 1 Mat Class Package", classes: 31, price: 490, discount: true },
    { name: "40 + 1 Mat Class Package", classes: 41, price: 545, discount: true },
  ];

  const formatCAD = (n) =>
    new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(n);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-10">
      <h2 className="text-3xl tracking-widest mb-2">CLASS PACKAGES</h2>

      <p className="text-gray-600 mb-4 text-center">
        Opening discount: <span className="font-semibold">25% off all packages + 1 Extra Class</span> — promised lowest price!
      </p>

      {/* ⭐ CHANGED — added note: promo code NOT applied to intro class */}
      <p className="text-gray-600 mb-8 text-center">
        Promo Code: <span className="font-semibold">OPEN2025</span> (not valid for Intro Class) {/* ⭐ CHANGED */}
      </p>

      <div className="w-full max-w-5xl px-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl text-sm md:text-base">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Class Package</th>
              <th className="px-4 py-3 text-left">Regular Price</th>
              <th className="px-4 py-3 text-left">Price per Class</th>
              <th className="px-4 py-3 text-left">25% off Price</th>
              <th className="px-4 py-3 text-left">25% Price per Class</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, i) => {
              const costPer = pkg.price / (pkg.classes - 1 || pkg.classes); // ⭐ CHANGED for 1-class intro
              const discounted = pkg.discount ? pkg.price * (1 - DISCOUNT) : pkg.price;
              const discountedPer = discounted / pkg.classes;

              return (
                <tr
                  key={pkg.name}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 font-medium">{pkg.name}</td>
                  <td className="px-4 py-3">{formatCAD(pkg.price)}</td>

                  {/* ⭐ CHANGED — intro class per-class calculation */}
                  <td className="px-4 py-3">{formatCAD(costPer)}</td>

                  <td className="px-4 py-3 text-[#5a3d36] font-semibold">
                    {pkg.discount ? formatCAD(discounted) : "N/A"} {/* ⭐ CHANGED */}
                  </td>

                  <td className="px-4 py-3 text-[#5a3d36]">
                    {pkg.discount ? formatCAD(discountedPer) : "N/A"} {/* ⭐ CHANGED */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <a
        href={PUNCHPASS_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block bg-black text-white text-sm font-semibold tracking-widest px-8 py-3 rounded-xl hover:opacity-90"
      >
        BUY PACKAGES
      </a>

      <p className="mt-4 text-sm text-gray-500 px-4 text-center">
        Please note: all packages are <strong>non-refundable</strong>, <strong>non-transferable</strong>, and{" "}
        <strong>valid for 2 years</strong>.
      </p>

      {/* ⭐ CHANGED — added Gift Card announcement */}
      <p className="mt-6 text-base text-gray-700 font-medium">🎁 Gift Cards Coming Soon — a perfect present for yoga & mat Pilates lovers!
     </p> {/* ⭐ CHANGED */}
    </div>
  );
}
