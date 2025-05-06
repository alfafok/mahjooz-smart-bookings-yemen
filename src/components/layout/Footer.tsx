
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <span className="text-xl font-bold text-mahjooz-purple">محجوز</span>
                <span className="text-sm font-medium text-gray-600 mr-1">Mahjooz</span>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-right">
                تطبيق رقمي ذكي ينطلق من مدينة عدن – اليمن، ليكون منصة متكاملة لحجز جميع احتياجاتك بكل سهولة وسرعة وذكاء.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3 text-right">خدماتنا</h3>
            <ul className="space-y-2 text-right">
              <li><a href="/hotels" className="text-sm text-gray-600 hover:text-mahjooz-purple">فنادق واستراحات</a></li>
              <li><a href="/clinics" className="text-sm text-gray-600 hover:text-mahjooz-purple">عيادات ومواعيد طبية</a></li>
              <li><a href="/cars" className="text-sm text-gray-600 hover:text-mahjooz-purple">تأجير سيارات</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3 text-right">روابط سريعة</h3>
            <ul className="space-y-2 text-right">
              <li><a href="/about" className="text-sm text-gray-600 hover:text-mahjooz-purple">عن محجوز</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 hover:text-mahjooz-purple">تواصل معنا</a></li>
              <li><a href="/faq" className="text-sm text-gray-600 hover:text-mahjooz-purple">الأسئلة الشائعة</a></li>
              <li><a href="/terms" className="text-sm text-gray-600 hover:text-mahjooz-purple">شروط الاستخدام</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3 text-right">تواصل معنا</h3>
            <div className="space-y-3 text-right">
              <p className="text-sm text-gray-600">البريد الإلكتروني: info@mahjooz.ye</p>
              <p className="text-sm text-gray-600">الهاتف: +967 xxx xxx xxx</p>
              <div className="flex items-center justify-start space-x-4 space-x-reverse mt-3">
                <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">فيسبوك</span>
                </Button>
                <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">انستغرام</span>
                </Button>
                <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                  <span className="sr-only">تويتر</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} محجوز | Mahjooz. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
