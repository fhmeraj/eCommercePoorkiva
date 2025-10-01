import React from 'react'

function Foot() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 md:px-20">
  {/* Social Links */}
  <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-medium">
    <span className="cursor-pointer hover:text-orange-600">WhatsApp Us</span>
    <span className="cursor-pointer hover:text-orange-600">Talk To Us</span>
    <span className="cursor-pointer hover:text-orange-600">@Poorvika (Twitter)</span>
    <span className="cursor-pointer hover:text-orange-600">@Poorvika (Facebook)</span>
    <span className="cursor-pointer hover:text-orange-600">@Poorvika (Instagram)</span>
    <span className="cursor-pointer hover:text-orange-600">@Poorvika (YouTube)</span>
    <span className="cursor-pointer hover:text-orange-600">@Poorvika (LinkedIn)</span>
    <span className="cursor-pointer hover:text-orange-600">@Poorvika (Pinterest)</span>
  </div>

  {/* Footer Sections */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
    {/* Contact Info */}
    <div>
      <h3 className="font-semibold mb-2">Contact Information</h3>
      <p>Poorvika Mobiles Pvt Ltd</p>
      <p>Admin Office No. 3, Arcot Road,</p>
      <p>Kodambakkam, Chennai-600 024.</p>
    </div>

    {/* Support */}
    <div>
      <h3 className="font-semibold mb-2">Support</h3>
      <ul className="space-y-1">
        <li>Contact Us</li>
        <li>Site Map</li>
        <li>One Assist</li>
      </ul>
    </div>

    {/* Policies */}
    <div>
      <h3 className="font-semibold mb-2">Policies</h3>
      <ul className="space-y-1">
        <li>T & C</li>
        <li>Privacy Policy</li>
        <li>CSR & Whistle Blower Policy</li>
        <li>Return, Replacement & Refund</li>
      </ul>
    </div>

    {/* Opportunities */}
    <div>
      <h3 className="font-semibold mb-2">Opportunities</h3>
      <ul className="space-y-1">
        <li>Careers</li>
      </ul>
    </div>

    {/* Know More */}
    <div>
      <h3 className="font-semibold mb-2">Know More</h3>
      <ul className="space-y-1">
        <li>About Us</li>
        <li>Our Stores</li>
        <li>Service Centres</li>
      </ul>
    </div>
  </div>
  {/* About Us Section */}
<div className="mt-10 border-t pt-6 text-sm text-gray-700">
  <h3 className="font-semibold text-base mb-2">About Us</h3>
  <p className="leading-relaxed">
    Poorvika is India’s largest tech and appliance omnichannel retailer with over 450 showrooms across Tamil Nadu, Karnataka, and Pondicherry. We offer a wide range of smartphones, laptops, home appliances, gaming gear, smart devices, and accessories — both online and offline.
    <br /><br />
    Through <a href="https://www.poorvika.com" className="text-orange-600 underline">www.poorvika.com</a>, customers enjoy Same Day Delivery, Rapid Delivery, and in-store pickup. With 20 years of experience and over 49 million happy customers, Poorvika is proud to be the trusted destination for top brands like Apple, Samsung, Oppo, LG, Bosch, Philips, HP, Lenovo, Vivo, Whirlpool, Xiaomi, OnePlus, Redmi, Godrej, Realme, Nokia, and Asus.
  </p>
</div>

</footer>
  )
}

export default Foot