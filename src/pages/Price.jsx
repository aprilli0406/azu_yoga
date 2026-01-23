export default function Price() {
  const MAT_DISCOUNT = 0.15;
  const REFORMER_DISCOUNT = 0.15;
  const PUNCHPASS_URL = "https://app.punchpass.com/org/20290/passes";

  const matPackages = [
    { name: "Intro Class for New Students", classes: 1, price: 9.98, discount: false, hasFreeExtra: false },

   

    { name: "5 + 1 Mat Class Package", classes: 6, price: 150, discount: true, hasFreeExtra: true },
    { name: "10 + 1 Mat Class Package", classes: 11, price: 240, discount: true, hasFreeExtra: true },
    { name: "20 + 1 Mat Class Package", classes: 21, price: 390, discount: true, hasFreeExtra: true },

    // ✅ Fixed typo: 4a90 -> 490
    { name: "30 + 1 Mat Class Package", classes: 31, price: 490, discount: true, hasFreeExtra: true },

    { name: "40 + 1 Mat Class Package", classes: 41, price: 545, discount: true, hasFreeExtra: true },
     // ✅ Unlimited monthly passes (promo code NOT applicable)
    { name: "10-day Unlimited Mat Trial", classes: "Unlimited", price: 37, discount: false, hasFreeExtra: false },
  
    { name: "Monthly Unlimited Mat Pass", classes: "Unlimited", price: 110, discount: false, hasFreeExtra: false },
    
    
    {
      name: "Monthly Unlimited Mat Pass (Students / Medical / Seniors(65+))",
      classes: "Unlimited",
      price: 90,
      discount: false,
      hasFreeExtra: false,
    },
  ];

  const reformerPackages = [
    { name: "Intro Reformer for New Students", classes: 1, price: 25, discount: false, hasFreeExtra: false },
    { name: "Reformer Drop-in Class", classes: 1, price: 40, discount: false, hasFreeExtra: false },
    { name: "Private Reformer Session (1-on-1)", classes: 1, price: 85, discount: false, hasFreeExtra: false },
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
      const isUnlimited = typeof pkg.classes !== "number";

      // For packages with a free extra class, "paid classes" should exclude the free one.
      const paidClasses =
        !isUnlimited && pkg.hasFreeExtra ? (pkg.classes - 1 || pkg.classes) : pkg.classes;

      const costPer = isUnlimited ? "—" : formatCAD(pkg.price / paidClasses);

      const discounted = pkg.discount ? pkg.price * (1 - discountRate) : pkg.price;
      const discountedPer = isUnlimited ? "—" : formatCAD(discounted / pkg.classes);

      return (
        <tr key={pkg.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
          <td className="px-4 py-3 font-medium">{pkg.name}</td>
          <td className="px-4 py-3">{formatCAD(pkg.price)}</td>
          <td className="px-4 py-3">{costPer}</td>

          <td className="px-4 py-3 text-[#5a3d36] font-semibold">
            {pkg.discount ? formatCAD(discounted) : "N/A"}
          </td>

          <td className="px-4 py-3 text-[#5a3d36]">
            {pkg.discount ? discountedPer : "N/A"}
          </td>
        </tr>
      );
    });

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-10">
      {/* ================= MAT PACKAGES ================= */}
      <h2 className="text-3xl tracking-widest mb-2">MAT CLASS PACKAGES</h2>

      <p className="text-gray-600 mb-4 text-center">
        Missed the New Year promo?{" "}
        <span className="font-semibold">Don’t miss this one — Special discounts are here! ✨</span>
      </p>

      <p className="text-gray-600 mb-4 text-center font-semibold">
        15% off all Mat Packages + 1 Extra Class • Limited time
      </p>

      <p className="text-gray-600 mb-10 text-center">
        Promo Code:{" "}
        <span className="font-semibold bg-rose-100 text-rose-800 px-3 py-1 rounded-md">
          SPECIAL15
        </span>{" "}
        <span className="text-sm text-gray-500">(not valid for Intro Class & Unlimited Monthly Pass)</span>
      </p>

      <div className="w-full max-w-5xl px-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Class Package</th>
              <th className="px-4 py-3 text-left">Regular Price</th>
              <th className="px-4 py-3 text-left">Price per Paid Class</th>

              {/* ✅ Updated from 20% -> 15% */}
              <th className="px-4 py-3 text-left">15% Off Price</th>
              <th className="px-4 py-3 text-left">15% Price per Class</th>
            </tr>
          </thead>
          <tbody>{renderRows(matPackages, MAT_DISCOUNT)}</tbody>
        </table>
      </div>

      {/* ✅ Mat Terms */}
      <div className="w-full max-w-5xl px-4 mt-4">
        <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
          <p className="font-semibold text-gray-800 mb-2">Mat Class Terms & Conditions</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Grip socks (or regular socks) are required for Mat Pilates.</li>
            <li>12-hour cancellation notice is required.</li>
            <li>
              All packages are <strong>non-refundable</strong>, <strong>non-transferable</strong>, and{" "}
              <strong>valid for 1 year</strong>.
            </li>
            <li>Student, Medical, and Senior memberships are available online. Valid ID required at first visit.</li>
            <li>
              <strong>Cancellation Policy</strong>
              <ul className="list-disc ml-5 mt-2">
                <li> 
                  Monthly Members & 10-day Trial: If you need to cancel late or miss a class, a <strong>$15</strong> no-show/late cancellation fee may be charged <strong>only if the class is full or has a waitlist</strong>. 
                </li>
                <li>
                  Package Pass Holders: A late cancellation or missed class will simply use <strong>one class pass</strong>.
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>

      {/* ================= REFORMER PACKAGES ================= */}
      <h2 className="text-3xl tracking-widest mt-16 mb-2">REFORMER CLASS PACKAGES</h2>

      <p className="text-gray-600 mb-6 text-center font-semibold">15% off Reformer Packages • Limited time</p>
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

      {/* ✅ Reformer Terms */}
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
            </li>
            <li>
              <strong>Cancellation Policy</strong>
              <ul className="list-disc ml-5 mt-2">
                
                <li>
                  Package Pass Holders: A late cancellation or missed class will simply use <strong>one class pass</strong>.
                </li>
              </ul>
            </li>
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
