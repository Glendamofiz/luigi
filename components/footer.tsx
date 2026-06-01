import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Wholesale", href: "/wholesale" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Delivery & Shipping", href: "/delivery" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Description and Social */}
          <div className="lg:col-span-1">
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Premium Live Resin Liquid Diamond products. Experience the finest quality in every drop.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-x-4">
              <span className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </span>
              <span className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200" aria-label="X (Twitter)">
                <XIcon className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
              Legal
            </h3>
            <nav className="flex flex-col space-y-3">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <span className="text-white text-sm">
                    support@luigiofficialbrand.com
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white text-sm">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Luigi Oil. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500">
              Must be 21+ to purchase. Please consume responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
