"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-on-accent border-t border-border pb-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 ml-2 text-primary" />
                <a href="tel:+972123456789" className="hover:text-primary transition-colors">
                  +972-12-345-6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2 text-primary" />
                <a href="mailto:info@drmansour.co.il" className="hover:text-primary transition-colors">
                  info@drmansour.co.il
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 ml-2 text-primary mt-1" />
                <span>רחוב הרופאים 123, תל אביב, ישראל</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 ml-2 text-primary mt-1" />
                <div>
                  <p>ימים א&apos;-ה&apos;: 09:00-19:00</p>
                  <p>יום ו&apos;: 09:00-13:00</p>
                  <p>שבת: סגור</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  גלריה
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary transition-colors">
                  המלצות
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  בלוג
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-primary transition-colors">
                  קביעת תור
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">הישארו מעודכנים</h3>
            <p className="mb-4">הירשמו לניוזלטר שלנו לקבלת עדכונים ומידע חשוב</p>
            
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="כתובת אימייל"
                  className="px-4 py-2 w-full rounded-r-md border border-border bg-background text-on-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-on-primary rounded-l-md hover:bg-primary-dark transition-colors"
                >
                  הרשמה
                </button>
              </div>
            </form>
            
            <h3 className="text-xl font-bold mb-4">עקבו אחרינו</h3>
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-on-primary rounded-full hover:bg-primary-dark transition-colors"
                aria-label="פייסבוק"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-on-primary rounded-full hover:bg-primary-dark transition-colors"
                aria-label="אינסטגרם"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p>
            &copy; {currentYear} ד״ר מוחמד מנסור וד״ר אחמד מנסור. כל הזכויות שמורות.
          </p>
          <div className="mt-2 flex justify-center gap-2">
            <Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">
              מדיניות פרטיות
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:text-primary transition-colors">
              תנאי שימוש
            </Link>
            <Link href="/accessibility" className="text-sm hover:text-primary transition-colors">
              הצהרת נגישות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 