import { useState } from "react";
import jsPDF from "jspdf";
import '../App.css';

const packages = [
  {
    category: "Website Development Packages",
    items: [
      { label: "Starter Site (Static 3–5 pages)", price: 15000 },
      { label: "Business Site (CMS, Admin Panel)", price: 40000 },
      { label: "E-Commerce Website", price: 85000 },
      { label: "Custom Portal (CRM, LMS, Job Portal, etc.)", price: 200000 },
    ],
  },
  {
    category: "App Development Packages",
    items: [
      { label: "Basic Android App (Informational)", price: 30000 },
      { label: "Business App (Login, Forms, DB)", price: 75000 },
      { label: "E-Commerce App", price: 175000 },
      { label: "Cross-Platform App (Flutter/React Native)", price: 225000 },
      { label: "Enterprise App (API-heavy, Secure)", price: 250000 },
    ],
  },
  {
    category: "Add-On Services",
    items: [
      { label: "UI/UX Design (Figma/XD)", price: 15000 },
      { label: "SEO Optimization (On-Page)", price: 10000 },
      { label: "Hosting Setup", price: 3500 },
      { label: "SSL Certificate Setup", price: 1000 },
      { label: "App/Play Store Publishing", price: 3000 },
      { label: "Domain Registration", price: 1000 },
      { label: "Google Analytics / GSC Setup", price: 1500 },
      { label: "Cloud Backup Setup", price: 3000 },
      { label: "Email Setup (Business Mail)", price: 2000 },
    ],
  },
   {
    category: "Advanced Digital Services",
    items: [
      {
        label: "Digital Advertising & Marketing (SEM, SEO, Social Media, Print, Outdoor)",
        price: 55000,
        note: "₹10,000 – ₹1,00,000/month"
      },
   {
        label: "Tech Consulting & Training",
        price: 65000,
        note: "₹1,500 – ₹5,000/hr or ₹30,000 – ₹1,00,000/project"
      },
    ]
  }

];

export default function FullEstimator() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const toggleItem = (label) => {
    setSelectedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const totalPrice = selectedItems.reduce((sum, label) => {
    for (const group of packages) {
      const item = group.items.find((i) => i.label === label);
      if (item) return sum + item.price;
    }
    return sum;
  }, 0);

  const sendEmail = async () => {
    const response = await fetch("https://techverra-estimator-server.onrender.com/send-estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: clientName,
        email: clientEmail,
        items: selectedItems,
        total: totalPrice,
      }),
    });

    const result = await response.json();
    alert(result.message || result.error);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text = "TechVerra Estimate", 10, 10;
    doc.text(`Client: ${clientName}`, 10, 20);
    doc.text(`Email: ${clientEmail}`, 10, 30);
    doc.text("Selected Services:", 10, 45);

    selectedItems.forEach((item, i) => {
      doc.text(`- ${item}`, 10, 55 + i * 10);
    });

    doc.text(`Total Estimate: ₹${totalPrice.toLocaleString()}`, 10, 65 + selectedItems.length * 10);
    doc.save(`Estimate_${clientName}.pdf`);
  };

  return (
    <section className="page-section">
      <h2 className="text-2xl font-bold mb-4">📊 Project Estimator</h2>

      <div className="bg-white shadow rounded p-4 space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Name</label>
          <input
            id="name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      {packages.map((group) => (
        <div key={group.category} className="bg-white shadow rounded p-6 space-y-4">
          <h3 className="text-xl font-semibold">{group.category}</h3>
          <hr />
          {group.items.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.label)}
                  onChange={() => toggleItem(item.label)}
                />
                <span>{item.label}</span>
              </label>
              <div className="text-right">
  <span className="text-gray-600">₹{item.price.toLocaleString()}</span>
  {item.note && (
    <div className="text-sm text-gray-500 italic">{item.note}</div>
  )}
</div>

            </div>
          ))}
        </div>
      ))}

      <div className="text-right text-xl font-semibold">
        Total: ₹{totalPrice.toLocaleString()}
      </div>

      <div className="flex gap-4 justify-end">
        <button
          onClick={sendEmail}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Email Quote
        </button>
        <button
          onClick={generatePDF}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>
    </section>
  );
}
