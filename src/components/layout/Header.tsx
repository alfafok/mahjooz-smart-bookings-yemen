
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
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-mahjooz-purple dark:text-purple-400">محجوز</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mr-1">Mahjooz</span>
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
            <SheetContent side="right" className="dark:bg-gray-900 dark:text-gray-100">
              <SheetHeader>
                <SheetTitle className="text-right dark:text-white">القائمة</SheetTitle>
                <SheetDescription className="text-right dark:text-gray-300">
                  اكتشف جميع خدمات محجوز
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-3 py-4">
                <Button variant="ghost" className="justify-end dark:text-gray-200">الرئيسية</Button>
                <Button variant="ghost" className="justify-end dark:text-gray-200">فنادق واستراحات</Button>
                <Button variant="ghost" className="justify-end dark:text-gray-200">عيادات ومواعيد طبية</Button>
                <Button variant="ghost" className="justify-end dark:text-gray-200">تأجير سيارات</Button>
                <Button variant="ghost" className="justify-end dark:text-gray-200">تواصل معنا</Button>
                <Button variant="ghost" className="justify-end dark:text-gray-200">حول التطبيق</Button>
                <div className="flex justify-end mt-2">
                  <ThemeToggle />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <Button className="w-full bg-mahjooz-purple hover:bg-mahjooz-dark-purple dark:bg-purple-600 dark:hover:bg-purple-700">تسجيل الدخول</Button>
                <Button variant="outline" className="w-full dark:border-gray-700 dark:text-gray-200">إنشاء حساب</Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-mahjooz-purple dark:text-gray-200 dark:hover:text-purple-400 transition-colors">الرئيسية</a>
            <a href="/hotels" className="text-sm font-medium hover:text-mahjooz-purple dark:text-gray-200 dark:hover:text-purple-400 transition-colors">فنادق واستراحات</a>
            <a href="/clinics" className="text-sm font-medium hover:text-mahjooz-purple dark:text-gray-200 dark:hover:text-purple-400 transition-colors">عيادات ومواعيد طبية</a>
            <a href="/cars" className="text-sm font-medium hover:text-mahjooz-purple dark:text-gray-200 dark:hover:text-purple-400 transition-colors">تأجير سيارات</a>
            <ThemeToggle />
          </nav>
        )}

        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" className="dark:border-gray-700 dark:text-gray-200">تسجيل الدخول</Button>
          <Button className="bg-mahjooz-purple hover:bg-mahjooz-dark-purple dark:bg-purple-600 dark:hover:bg-purple-700">إنشاء حساب</Button>
        </div>
      </div>
    </header>
  );
}
