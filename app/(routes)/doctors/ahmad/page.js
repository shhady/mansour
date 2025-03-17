"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, FileText, MapPin, Clock, GraduationCap, Languages, Building2, UserRound, Stethoscope } from "lucide-react";

// Metadata needs to be in a separate file for app router when using 'use client'
// This is just for reference and will be properly implemented in layout.js
const pageMetadata = {
  title: "ד״ר אחמד מנסור - רופא עיניים מומחה | אוקולופלסטיקה",
  description: "ד״ר אחמד מנסור, רופא עיניים מומחה עם התמחות-על בכירורגיה פלסטית של העין (אוקולופלסטיקה). מתמחה בניתוחי עפעפיים, ארובת העין ודרכי הדמעות.",
  keywords: "אחמד מנסור, רופא עיניים, אוקולופלסטיקה, ניתוחי עפעפיים, ארובת העין, דרכי הדמעות, כירורגיה פלסטית של העין",
};

export default function DrAhmadProfile() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl shadow-xl overflow-hidden mb-12">
        <div className="flex flex-col md:flex-row items-center p-6 md:p-10">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/dr-ahmad-bg.jpg" 
                alt="ד״ר אחמד מנסור" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pr-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">ד"ר אחמד מנסור</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">רופא עיניים מומחה | אוקולופלסטיקה</h2>
            <p className="text-lg mb-6">
              רופא בכיר במערך העיניים של המרכז הרפואי סורוקה בבאר שבע ורכז תחום רפואת עיניים בשירותי בריאות כללית, מחוז שרון-שומרון.
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
          <h2 className="text-2xl font-bold mb-6 text-primary">אודות ד"ר אחמד מנסור</h2>
          <div className="space-y-6">
            <p className="text-lg">
              ד"ר אחמד מנסור הוא רופא עיניים מומחה עם התמחות-על בכירורגיה פלסטית של העין (אוקולופלסטיקה), המתמקדת בניתוחי עפעפיים, ארובת העין ודרכי הדמעות.
            </p>
            <p className="text-lg">
              הוא משמש כרופא בכיר במערך העיניים של המרכז הרפואי סורוקה בבאר שבע. בנוסף, הוא מכהן כרכז תחום רפואת עיניים בשירותי בריאות כללית, מחוז שרון-שומרון.
            </p>
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
              <div className="flex items-start mb-2 gap-2">
                <Stethoscope className="text-primary h-6 w-6 " />
                <h3 className="text-xl font-semibold">טיפולים אסתטיים באזור הפנים</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>הזרקות בוטוקס</li>
                <li>מילויים (פילרים)</li>
                <li>טיפולי אנטי-אייג'ינג</li>
              </ul>
            </div>
            <div className="bg-accent rounded-lg p-6 shadow-sm">
              <div className="flex items-start  gap-2 mb-2">
                <UserRound className="text-primary h-6 w-6 " />
                <h3 className="text-xl font-semibold">ניתוחים משחזרים ופלסטיים של אזור העיניים</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>ניתוחי עפעפיים (בלפרופלסטיקה)</li>
                <li>ניתוחי ארובת העין</li>
                <li>ניתוחי דרכי הדמעות</li>
                <li>תיקון פטוזיס (צניחת עפעף)</li>
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
                <h3 className="text-xl font-semibold">בוגר הפקולטה לרפואה</h3>
                <p className="text-gray-700">הטכניון, חיפה</p>
              </div>
            </div>
            <div className="flex items-start gap-2  ">
              <div className="mr-4 mt-1">
                <Building2 className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">התמחות ברפואת עיניים</h3>
                <p className="text-gray-700">המרכז הרפואי ברזילי, אשקלון</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mr-4 mt-1">
                <UserRound className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">התמחות-על בכירורגיה פלסטית של העין</h3>
                <p className="text-gray-700">המרכז הרפואי סורוקה, באר שבע</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mr-4 mt-1">
                <GraduationCap className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">תואר שני במנהל עסקים (MBA)</h3>
                <p className="text-gray-700">אוניברסיטת תל אביב</p>
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
                <Phone className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h3 className="font-semibold text-lg">טלפון לזימון תורים</h3>
                  <p className="text-lg">073-2417393</p>
                  <a 
                    href="tel:073-2417393" 
                    className="inline-flex items-center bg-primary text-white hover:bg-primary-dark transition-colors duration-300 py-2 px-4 rounded-md shadow-sm mt-2"
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    <span className="font-medium">התקשר עכשיו</span>
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h3 className="font-semibold text-lg">טלפון ישיר</h3>
                  <p className="text-lg">09-8910901</p>
                  <a 
                    href="tel:09-8910901" 
                    className="inline-flex items-center bg-primary text-white hover:bg-primary-dark transition-colors duration-300 py-2 px-4 rounded-md shadow-sm mt-2"
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    <span className="font-medium">התקשר עכשיו</span>
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h3 className="font-semibold text-lg">פקס</h3>
                  <p className="text-lg">09-8910904</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h3 className="font-semibold text-lg">כתובת המרפאה</h3>
                  <p className="text-lg">דרך א-סולטאני 5, טירה</p>
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
                  <span className="font-medium">יום ד'</span>
                  <span>16:00 - 17:30</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium">יום ו'</span>
                  <span>08:00 - 10:30</span>
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
              <option value="consultation">ייעוץ ראשוני</option>
              <option value="treatment">טיפול</option>
              <option value="followup">ביקורת</option>
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