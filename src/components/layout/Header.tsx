
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-mahjooz-purple">محجوز</span>
            <span className="text-sm font-medium text-gray-600 mr-1">Mahjooz</span>
          </a>
        </div>

        {isMobile ? (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="القائمة">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-right">القائمة</SheetTitle>
                <SheetDescription className="text-right">
                  اكتشف جميع خدمات محجوز
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-3 py-4">
                <Button variant="ghost" className="justify-end">الرئيسية</Button>
                <Button variant="ghost" className="justify-end">فنادق واستراحات</Button>
                <Button variant="ghost" className="justify-end">عيادات ومواعيد طبية</Button>
                <Button variant="ghost" className="justify-end">تأجير سيارات</Button>
                <Button variant="ghost" className="justify-end">تواصل معنا</Button>
                <Button variant="ghost" className="justify-end">حول التطبيق</Button>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <Button className="w-full bg-mahjooz-purple hover:bg-mahjooz-dark-purple">تسجيل الدخول</Button>
                <Button variant="outline" className="w-full">إنشاء حساب</Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-mahjooz-purple transition-colors">الرئيسية</a>
            <a href="/hotels" className="text-sm font-medium hover:text-mahjooz-purple transition-colors">فنادق واستراحات</a>
            <a href="/clinics" className="text-sm font-medium hover:text-mahjooz-purple transition-colors">عيادات ومواعيد طبية</a>
            <a href="/cars" className="text-sm font-medium hover:text-mahjooz-purple transition-colors">تأجير سيارات</a>
          </nav>
        )}

        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline">تسجيل الدخول</Button>
          <Button className="bg-mahjooz-purple hover:bg-mahjooz-dark-purple">إنشاء حساب</Button>
        </div>
      </div>
    </header>
  );
}
