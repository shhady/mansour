"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Phone, Mail, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '../../components/ui/Section';
import { doctors } from '../../data/doctors';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    doctor: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  
  // Track which FAQ items are open
  const [openFAQs, setOpenFAQs] = useState({});
  
  // Toggle FAQ open/closed state
  const toggleFAQ = (index) => {
    setOpenFAQs(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
    }
    
    if (!formData.doctor) {
      newErrors.doctor = 'נא לבחור רופא';
    }
    
    if (!formData.service) {
      newErrors.service = 'נא לבחור שירות';
    }
    
    if (!formData.date) {
      newErrors.date = 'נא לבחור תאריך';
    }
    
    if (!formData.time) {
      newErrors.time = 'נא לבחור שעה';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setFormStatus({
        submitted: true,
        success: true,
        message: 'הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם לאישור התור.',
      });
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        doctor: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
    }
  };
  
  // Get available services based on selected doctor
  const getAvailableServices = () => {
    if (!formData.doctor) return [];
    
    const selectedDoctor = doctors.find(doc => doc.id.toString() === formData.doctor);
    return selectedDoctor ? selectedDoctor.services : [];
  };
  
  // FAQs data
  const faqs = [
    {
      question: 'כמה זמן לפני אני צריך לקבוע תור?',
      answer: 'אנו ממליצים לקבוע תור לפחות שבוע מראש כדי להבטיח את הזמינות המועדפת עליכם. במקרים דחופים, אנו משתדלים לספק מענה מהיר ככל האפשר.'
    },
    {
      question: 'האם אני יכול לבטל או לשנות את התור שלי?',
      answer: 'כן, ניתן לבטל או לשנות את התור עד 24 שעות לפני המועד שנקבע. לביטול או שינוי, אנא צרו קשר עם המרפאה בטלפון או באימייל.'
    },
    {
      question: 'מה עליי להביא לפגישה הראשונה?',
      answer: 'לפגישה הראשונה יש להביא תעודת זהות, כרטיס קופת חולים, הפניה מרופא (אם יש), ומסמכים רפואיים רלוונטיים. אם יש לכם בדיקות או צילומים קודמים, כדאי להביא גם אותם.'
    },
    {
      question: 'האם הקליניקה עובדת עם קופות החולים?',
      answer: 'כן, הקליניקה עובדת בהסדר עם מרבית קופות החולים וחברות הביטוח. מומלץ לברר מראש את פרטי ההתקשרות עם קופת החולים שלכם.'
    },
    {
      question: 'כמה זמן נמשכת פגישת ייעוץ ראשונית?',
      answer: 'פגישת ייעוץ ראשונית נמשכת בדרך כלל כ-30 עד 45 דקות, בהתאם לסוג הטיפול והצרכים האישיים.'
    },
  ];
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">קביעת תור</h1>
            <p className="text-xl text-gray-700 mb-8">
              מלאו את הטופס כדי לקבוע תור לייעוץ 
            </p>
          </div>
        </div>
      </section>
      
      {/* Appointment Form */}
      <Section className="bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* On mobile: Form first, Contact info second */}
              {/* On desktop: Contact info (left), Form (right) */}
              
              {/* Form - appears first on mobile */}
              <div className="lg:col-span-3 lg:order-2 p-8">
                <h2 className="text-2xl font-bold mb-6">מלאו את הפרטים</h2>
                
                {formStatus.submitted ? (
                  <div className={`p-4 rounded-lg mb-6 ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    <div className="flex items-center">
                      {formStatus.success ? (
                        <CheckCircle className="h-5 w-5 ml-2" aria-hidden="true" />
                      ) : (
                        <AlertCircle className="h-5 w-5 ml-2" aria-hidden="true" />
                      )}
                      <p>{formStatus.message}</p>
                    </div>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      שם מלא <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      aria-invalid={errors.fullName ? "true" : "false"}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        אימייל <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        טלפון <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                      בחירת רופא <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.doctor ? 'border-red-500' : 'border-gray-300'}`}
                      aria-describedby={errors.doctor ? "doctor-error" : undefined}
                      aria-invalid={errors.doctor ? "true" : "false"}
                    >
                      <option value="">בחרו רופא</option>
                      {doctors.map(doctor => (
                        <option key={doctor.id} value={doctor.id}>{doctor.name} - {doctor.title}</option>
                      ))}
                    </select>
                    {errors.doctor && (
                      <p id="doctor-error" className="mt-1 text-sm text-red-600">{errors.doctor}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      בחירת שירות <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={!formData.doctor}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.service ? 'border-red-500' : 'border-gray-300'} ${!formData.doctor ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      aria-invalid={errors.service ? "true" : "false"}
                    >
                      <option value="">בחרו שירות</option>
                      {getAvailableServices().map((service, index) => (
                        <option key={index} value={service.name}>{service.name}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-1 text-sm text-red-600">{errors.service}</p>
                    )}
                    {!formData.doctor && (
                      <p className="mt-1 text-sm text-gray-500">יש לבחור רופא תחילה</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        תאריך <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                          aria-describedby={errors.date ? "date-error" : undefined}
                          aria-invalid={errors.date ? "true" : "false"}
                        />
                      </div>
                      {errors.date && (
                        <p id="date-error" className="mt-1 text-sm text-red-600">{errors.date}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        שעה <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                          aria-describedby={errors.time ? "time-error" : undefined}
                          aria-invalid={errors.time ? "true" : "false"}
                        >
                          <option value="">בחרו שעה</option>
                          {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                      {errors.time && (
                        <p id="time-error" className="mt-1 text-sm text-red-600">{errors.time}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      הערות נוספות
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="mr-2 block text-sm text-gray-700">
                      אני מסכים/ה ל<Link href="/privacy" className="text-primary hover:underline">מדיניות הפרטיות</Link> של הקליניקה
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      aria-label="שליחת טופס קביעת תור"
                    >
                      קביעת תור
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Contact Info - appears second on mobile */}
              <div className="lg:col-span-2 lg:order-1 bg-primary text-white p-8">
                <h2 className="text-2xl font-bold mb-6">פרטי יצירת קשר</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 ml-3 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-lg">טלפון</h3>
                      <p className="opacity-90">+972-12-345-6789</p>
                      <p className="text-sm opacity-75 mt-1">זמין בימים א׳-ה׳, 9:00-17:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 ml-3 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-lg">אימייל</h3>
                      <p className="opacity-90">info@mansourclinic.com</p>
                      <p className="text-sm opacity-75 mt-1">אנו עונים תוך 24 שעות</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 ml-3 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-lg">שעות פעילות</h3>
                      <p className="opacity-90">ימים א׳-ה׳: 9:00-17:00</p>
                      <p className="opacity-90">יום ו׳: 9:00-13:00</p>
                      <p className="opacity-90">שבת: סגור</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">הרופאים שלנו</h3>
                  <ul className="space-y-3">
                    {doctors.map(doctor => (
                      <li key={doctor.id} className="flex items-start">
                        <CheckCircle className="h-5 w-5 ml-2 mt-1" aria-hidden="true" />
                        <div>
                          <p className="font-medium">{doctor.name}</p>
                          <p className="text-sm opacity-75">{doctor.title}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section - Accordion Style */}
      <Section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <SectionHeader centered>
            <SectionTitle>שאלות נפוצות</SectionTitle>
            <SectionDescription>
              תשובות לשאלות הנפוצות ביותר בנושא קביעת תורים
            </SectionDescription>
          </SectionHeader>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full bg-white px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQs[index] ? "true" : "false"}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium text-gray-900 text-right">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${openFAQs[index] ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${openFAQs[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-4 pt-0 text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
} 