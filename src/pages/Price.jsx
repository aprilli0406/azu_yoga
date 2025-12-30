export default function Price() {
  const MAT_DISCOUNT = 0.2;
  const REFORMER_DISCOUNT = 0.15;
  const PUNCHPASS_URL = "https://app.punchpass.com/org/20290/passes";

  const matPackages = [
    { name: "Intro Class for New Students", classes: 1, price: 9.98, discount: false, hasFreeExtra: false },
    { name: "5 + 1 Mat Class Package", classes: 6, price: 150, discount: true, hasFreeExtra: true },
    { name: "10 + 1 Mat Class Package", classes: 11, price: 240, discount: true, hasFreeExtra: true },
    { name: "20 + 1 Mat Class Package", classes: 21, price: 390, discount: true, hasFreeExtra: true },
    { name: "30 + 1 Mat Class Package", classes: 31, price: 490, discount: true, hasFreeExtra: true },
    { name: "40 + 1 Mat Class Package", classes: 41, price: 545, discount: true, hasFreeExtra: true },
  ];

  const reformerPackages = [
    { name: "Intro Reformer for New Students", classes: 1, price: 25, discount: false, hasFreeExtra: false },
    { name: "Reformer Drop-in Class", classes: 1, price: 40, discount: false, hasFreeExtra: false },
    { name: "5 Reformer Class Package", classes: 5, price: 190, discount: true, hasFreeExtra: false },
    { name: "10 Reformer Class Package", classes: 10, price: 340, discount: true, hasFreeExtra: false },
  ];

  const formatCAD = (n) =>
    new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(n);

  const renderRows = (packages, discountRate) =>
    packages.map((pkg, i) => {
      const paidClasses = pkg.hasFreeExtra ? (pkg.classes - 1 || pkg.classes) : pkg.classes;
      const costPer = pkg.price / paidClasses;

      const discounted = pkg.discount ? pkg.price * (1 - discountRate) : pkg.price;
      const discountedPer = discounted / pkg.classes;

      return (
        <tr key={pkg.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
          <td className="px-4 py-3 font-medium">{pkg.name}</td>
          <td className="px-4 py-3">{formatCAD(pkg.price)}</td>
          <td className="px-4 py-3">{formatCAD(costPer)}</td>

          <td className="px-4 py-3 text-[#5a3d36] font-semibold">
            {pkg.discount ? formatCAD(discounted) : "N/A"}
          </td>

          <td className="px-4 py-3 text-[#5a3d36]">
            {pkg.discount ? formatCAD(discountedPer) : "N/A"}
          </td>
        </tr>
      );
    });

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-10">
      {/* ================= MAT PACKAGES ================= */}
      <h2 className="text-3xl tracking-widest mb-2">MAT CLASS PACKAGES</h2>

      <p className="text-gray-600 mb-4 text-center">
        Missed the opening promo?{" "}
        <span className="font-semibold">
          Don’t miss this one — Christmas & New Year discounts are here! ✨
        </span>
      </p>

      <p className="text-gray-600 mb-4 text-center font-semibold">
        20% off all Mat Packages + 1 Extra Class • Valid until January 2nd, 2026
      </p>

      <p className="text-gray-600 mb-10 text-center">
        Promo Code:{" "}
        <span className="font-semibold bg-rose-100 text-rose-800 px-3 py-1 rounded-md">
          NEW2026
        </span>{" "}
        <span className="text-sm text-gray-500">(not valid for Intro Class)</span>
      </p>

      <div className="w-full max-w-5xl px-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Class Package</th>
              <th className="px-4 py-3 text-left">Regular Price</th>
              <th className="px-4 py-3 text-left">Price per Paid Class</th>
              <th className="px-4 py-3 text-left">20% Off Price</th>
              <th className="px-4 py-3 text-left">20% Price per Class</th>
            </tr>
          </thead>
          <tbody>{renderRows(matPackages, MAT_DISCOUNT)}</tbody>
        </table>
      </div>

      {/* ✅ UPDATED: Mat Terms */}
      <div className="w-full max-w-5xl px-4 mt-4">
        <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
          <p className="font-semibold text-gray-800 mb-2">Mat Class Terms & Conditions</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Grip socks (or regular socks) are required for Mat Pilates.</li> {/* ✅ UPDATED */}
            <li>12-hour cancellation notice is required.</li>
            <li>
              All packages are <strong>non-refundable</strong>, <strong>non-transferable</strong>, and{" "}
              <strong>valid for 1 year</strong>.
            </li> {/* ✅ UPDATED */}
          </ul>
        </div>
      </div>

      {/* ================= REFORMER PACKAGES ================= */}
      <h2 className="text-3xl tracking-widest mt-16 mb-2">REFORMER CLASS PACKAGES</h2>

      <p className="text-gray-600 mb-6 text-center font-semibold">
        15% off Reformer Packages • Limited time
      </p>
      <p className="text-gray-600 mb-10 text-center">
        Promo Code:{" "}
        <span className="font-semibold bg-rose-100 text-rose-800 px-3 py-1 rounded-md">
          REFORMER2026
        </span>{" "}
        <span className="text-sm text-gray-500">(not valid for Intro & Drop-in Class)</span>
      </p>

      <div className="w-full max-w-5xl px-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Class Package</th>
              <th className="px-4 py-3 text-left">Regular Price</th>
              <th className="px-4 py-3 text-left">Price per Class</th>
              <th className="px-4 py-3 text-left">15% Off Price</th>
              <th className="px-4 py-3 text-left">15% Price per Class</th>
            </tr>
          </thead>
          <tbody>{renderRows(reformerPackages, REFORMER_DISCOUNT)}</tbody>
        </table>
      </div>

      {/* ✅ UPDATED: Reformer Terms */}
      <div className="w-full max-w-5xl px-4 mt-4">
        <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
          <p className="font-semibold text-gray-800 mb-2">Reformer Terms & Conditions</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Each class is 60 minutes long and provides a complete full-body workout.</li>
            <li>Grip socks (or regular socks) are required.</li>
            <li>24-hour cancellation notice is required.</li>
            <li>
              All packages are <strong>non-refundable</strong>, <strong>non-transferable</strong>, and{" "}
              <strong>valid for 1 year</strong>.
            </li> {/* ✅ UPDATED */}
          </ul>
        </div>
      </div>

      <a
        href={PUNCHPASS_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block bg-black text-white text-sm font-semibold tracking-widest px-8 py-3 rounded-xl hover:opacity-90"
      >
        BUY PACKAGES
      </a>

      <p className="mt-6 text-base text-gray-700 font-medium">
        🎁 Gift cards available — perfect for yoga & Pilates lovers!
      </p>
    </div>
  );
}
