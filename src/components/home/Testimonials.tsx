
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "محمد أحمد",
    role: "مسافر دائم",
    avatar: "",
    content: "استخدمت محجوز لحجز فندق في عدن وكانت التجربة رائعة جدًا. التطبيق سهل الاستخدام والخدمة ممتازة. سأستخدمه بالتأكيد مرة أخرى!",
  },
  {
    id: 2,
    name: "فاطمة علي",
    role: "طبيبة",
    avatar: "",
    content: "كطبيبة، أستخدم محجوز لترتيب مواعيدي وإدارة جدولي اليومي. إنه يوفر علي الكثير من الوقت والجهد. أنصح به بشدة!",
  },
  {
    id: 3,
    name: "عمر محمد",
    role: "رجل أعمال",
    avatar: "",
    content: "تطبيق رائع! استأجرت سيارة من خلال محجوز وكانت العملية سلسة من البداية إلى النهاية. الأسعار تنافسية والخيارات متنوعة.",
  },
  {
    id: 4,
    name: "سارة خالد",
    role: "مهندسة برمجيات",
    avatar: "",
    content: "المساعد الذكي في تطبيق محجوز ساعدني كثيرًا في اختيار أفضل فندق يناسب احتياجاتي. يعرف تمامًا ما أحتاجه!",
  },
  {
    id: 5,
    name: "أحمد حسن",
    role: "مدير شركة",
    avatar: "",
    content: "أستخدم محجوز لحجز المواعيد الطبية لعائلتي. توفر الوقت وتقدم خدمة ممتازة. لن أعود للطرق التقليدية بعد الآن!",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView = 3;
  
  const nextTestimonials = () => {
    setActiveIndex((prev) => 
      prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView
    );
  };
  
  const prevTestimonials = () => {
    setActiveIndex((prev) => 
      prev - itemsPerView < 0 ? Math.max(0, testimonials.length - itemsPerView) : prev - itemsPerView
    );
  };

  // عرض شهادات المستخدمين الحالية
  const currentTestimonials = testimonials.slice(
    activeIndex,
    Math.min(activeIndex + itemsPerView, testimonials.length)
  );

  return (
    <section className="py-16 bg-mahjooz-soft-yellow/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">آراء مستخدمينا</h2>
          <p className="text-gray-600 mt-1">تجارب حقيقية من مستخدمين يثقون بخدماتنا</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-16 h-16 mb-4">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-mahjooz-purple text-white text-lg">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <blockquote className="text-gray-700 mb-4">"{testimonial.content}"</blockquote>
                    <div className="mt-auto">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonials}
              className="rounded-full w-10 h-10"
              disabled={activeIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl-flip">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span className="sr-only">السابق</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonials}
              className="rounded-full w-10 h-10"
              disabled={activeIndex + itemsPerView >= testimonials.length}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl-flip">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <span className="sr-only">التالي</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
