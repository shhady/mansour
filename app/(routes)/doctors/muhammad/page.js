"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, GraduationCap, Languages, Building2, UserRound, Scissors, Award, Heart, Stethoscope } from "lucide-react";

// Metadata needs to be in a separate file for app router when using 'use client'
// This is just for reference and will be properly implemented in layout.js
const pageMetadata = {
  title: "ד״ר מוחמד מנסור - מומחה בכירורגיה פלסטית ואסתטית",
  description: "ד״ר מוחמד מנסור, מומחה בכירורגיה פלסטית, אסתטית ומשחזרת. מבצע ניתוחים פלסטיים מתקדמים ושחזוריים במרפאות בעפולה ונצרת.",
  keywords: "מוחמד מנסור, כירורגיה פלסטית, ניתוחים אסתטיים, מתיחת פנים, הגדלת חזה, שאיבת שומן, שחזור שד",
};

export default function DrMuhammadProfile() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl shadow-xl overflow-hidden mb-12">
        <div className="flex flex-col md:flex-row items-center p-6 md:p-10">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/dr-mohamed.png" 
                alt="ד״ר מוחמד מנסור" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pr-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">ד"ר מוחמד מנסור</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">מומחה בכירורגיה פלסטית ואסתטית</h2>
            <p className="text-lg mb-6">
              רופא בכיר ביחידה לכירורגיה פלסטית ומשחזרת בבית החולים בני ציון וכירורג פלסטי ואסתטי בכללית אסתטיקה.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="bg-white text-primary hover:bg-accent transition-colors duration-300 font-semibold py-2 px-6 rounded-full shadow-md">
                צור קשר
              </Link>
              <Link href="#appointment" className="bg-secondary hover:bg-opacity-90 transition-colors duration-300 text-white font-semibold py-2 px-6 rounded-full shadow-md">
                קביעת תור
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 mb-8">
        <button
          className={`py-3 px-6 font-medium text-lg ${
            activeTab === "about" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-primary"
          }`}
          onClick={() => setActiveTab("about")}
        >
          אודות
        </button>
        <button
          className={`py-3 px-6 font-medium text-lg ${
            activeTab === "specialties" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-primary"
          }`}
          onClick={() => setActiveTab("specialties")}
        >
          תחומי התמחות
        </button>
        <button
          className={`py-3 px-6 font-medium text-lg ${
            activeTab === "education" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-primary"
          }`}
          onClick={() => setActiveTab("education")}
        >
          השכלה והכשרה
        </button>
        <button
          className={`py-3 px-6 font-medium text-lg ${
            activeTab === "contact" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-primary"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          פרטי קשר
        </button>
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
        {/* About Section */}
        <div className={activeTab === "about" ? "block" : "hidden"}>
          <h2 className="text-2xl font-bold mb-6 text-primary">אודות ד"ר מוחמד מנסור</h2>
          <div className="space-y-6">
            <p className="text-lg">
              ד"ר מוחמד מנסור הוא מומחה בכירורגיה פלסטית, אסתטית ומשחזרת, עם ניסיון רב בביצוע ניתוחים פלסטיים מתקדמים ושחזוריים.
            </p>
            <p className="text-lg">
              הוא משמש כרופא בכיר ביחידה לכירורגיה פלסטית ומשחזרת בבית החולים בני ציון, וכן ככירורג פלסטי ואסתטי בכללית אסתטיקה. בנוסף, הוא עובד כמנתח פלסטי בקופות החולים כללית ומכבי.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-6 w-6" />
              <span className="font-semibold">חבר באיגוד:</span>
              <span>האיגוד הישראלי לכירורגיה פלסטית ואסתטית</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Languages className="h-6 w-6" />
              <span className="font-semibold">שפות שירות:</span>
              <span>עברית, ערבית, אנגלית</span>
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div className={activeTab === "specialties" ? "block" : "hidden"}>
          <h2 className="text-2xl font-bold mb-6 text-primary">תחומי התמחות</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-2 mb-4">
                <Scissors className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">ניתוחים אסתטיים לפנים</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>מתיחת פנים וצוואר</li>
                <li>הרמת עפעפיים (בלפרופלסטיקה)</li>
                <li>הצמדת אוזניים</li>
                <li>עיצוב האף</li>
              </ul>
            </div>
            <div className="bg-accent rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-2 mb-4">
                <Heart className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">ניתוחי חזה</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>הגדלת חזה</li>
                <li>הרמת חזה</li>
                <li>הקטנת חזה</li>
                <li>גניקומסטיה (הקטנת חזה לגברים)</li>
              </ul>
            </div>
            <div className="bg-accent rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-2 mb-4">
                <UserRound className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">ניתוחי עיצוב הגוף</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>שאיבת שומן והצרת היקפים</li>
                <li>מתיחת בטן</li>
                <li>עיצוב והרמת ישבן</li>
                <li>מתיחת זרועות וירכיים</li>
              </ul>
            </div>
            <div className="bg-accent rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-2 mb-4">
                <Stethoscope className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">טיפולים וניתוחים לשחזור</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>שחזור שד לאחר כריתה</li>
                <li>תיקון צלקות ועיוותים</li>
                <li>שחזור לאחר פציעות וכוויות</li>
                <li>טיפול בפגמים מולדים</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={activeTab === "education" ? "block" : "hidden"}>
          <h2 className="text-2xl font-bold mb-6 text-primary">השכלה והכשרה</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-2">
              <div className="mr-4 mt-1">
                <GraduationCap className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">לימודי רפואה</h3>
                <p className="text-gray-700">בית הספר לרפואה של האוניברסיטה העברית בירושלים, הדסה עין כרם</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mr-4 mt-1">
                <Building2 className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">סטאז' והתמחות בכירורגיה פלסטית</h3>
                <p className="text-gray-700">המרכז הרפואי בילינסון</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mr-4 mt-1">
                <Award className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">תחומי מחקר</h3>
                <p className="text-gray-700">אנסטומוזה מיקרווסקולרית, ריפוי פצעים ושחזור שד</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={activeTab === "contact" ? "block" : "hidden"} id="contact">
          <h2 className="text-2xl font-bold mb-6 text-primary">פרטי קשר</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h3 className="font-semibold text-lg">מרפאה בעפולה</h3>
                  <p className="text-lg">שדרות יצחק רבין 20, עפולה</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h3 className="font-semibold text-lg">מרפאה בנצרת</h3>
                  <p className="text-lg">מרג' אבן עאמר 15, נצרת, כביש עוקף נצרת</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h3 className="font-semibold text-lg">טלפון לזימון תורים</h3>
                  <p className="text-lg">04-6500500</p>
                  <a 
                    href="tel:04-6500500" 
                    className="inline-flex items-center bg-primary text-white hover:bg-primary-dark transition-colors duration-300 py-2 px-4 rounded-md shadow-sm mt-2"
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    <span className="font-medium">התקשר עכשיו</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Clock className="text-primary h-5 w-5 ml-2" />
                שעות קבלת קהל
              </h3>
              <div className="bg-accent rounded-lg p-6">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium">יום א'</span>
                  <span>09:00 - 17:00</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium">יום ג'</span>
                  <span>14:00 - 19:00</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium">יום ה'</span>
                  <span>09:00 - 14:00</span>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  href="#appointment" 
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
                >
                  לקביעת תור
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div id="appointment" className="bg-accent rounded-xl shadow-md p-6 md:p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">קביעת תור</h2>
        <p className="text-center mb-8">
          למידע נוסף או לקביעת תור, אנא מלאו את הטופס ונחזור אליכם בהקדם
        </p>
        <form className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              שם מלא
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">
              טלפון
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              דוא"ל
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="service" className="block mb-2 font-medium">
              סוג השירות
            </label>
            <select
              id="service"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            >
              <option value="">בחר שירות</option>
              <option value="face">ניתוחי פנים</option>
              <option value="breast">ניתוחי חזה</option>
              <option value="body">עיצוב הגוף</option>
              <option value="reconstruction">ניתוחי שחזור</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block mb-2 font-medium">
              הודעה
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
            >
              שליחה
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 