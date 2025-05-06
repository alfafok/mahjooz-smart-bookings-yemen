
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// قائمة الأسئلة المتكررة
const faqs = [
  {
    question: "كيف يمكنني حجز فندق أو استراحة؟",
    answer: "يمكنك حجز فندق أو استراحة عبر تطبيق محجوز بكل سهولة من خلال الضغط على قسم 'فنادق واستراحات' ثم اختيار الفندق المناسب ومعرفة التفاصيل والأسعار، ثم إتمام الحجز بنقرات بسيطة."
  },
  {
    question: "كيف يمكنني حجز موعد طبي؟",
    answer: "لحجز موعد طبي، يمكنك الانتقال إلى قسم 'عيادات ومواعيد طبية' واختيار التخصص المطلوب، ثم اختيار الطبيب المناسب وتحديد الموعد المناسب لك. بعد ذلك يمكنك إتمام الحجز ودفع الرسوم إلكترونياً إذا لزم الأمر."
  },
  {
    question: "كيف يمكنني استئجار سيارة؟",
    answer: "لاستئجار سيارة، انتقل إلى قسم 'تأجير سيارات' واختر نوع السيارة المناسبة ومدة الإيجار. يمكنك أيضًا اختيار خيار توصيل السيارة إلى موقعك. بعد ذلك أتمم الحجز ودفع المبلغ المطلوب."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نوفر العديد من طرق الدفع المرنة، بما في ذلك بوابة الدفع المحلية التي تدعم البطاقات اليمنية، وبوابة الدفع الدولية التي تدعم جميع البطاقات العالمية. العملة المعتمدة هي الريال السعودي."
  },
  {
    question: "هل يمكنني إلغاء الحجز؟",
    answer: "نعم، يمكنك إلغاء الحجز وفقًا لسياسة الإلغاء الخاصة بكل خدمة. بعض الخدمات توفر استرداد كامل للمبلغ إذا تم الإلغاء قبل موعد محدد، بينما قد تطبق خدمات أخرى رسوم إلغاء."
  },
  {
    question: "كيف يعمل المساعد الذكي في التطبيق؟",
    answer: "المساعد الذكي في تطبيق محجوز يستخدم تقنيات الذكاء الصناعي للرد على استفساراتك صوتيًا أو نصيًا، واقتراح أفضل الخيارات حسب ذوقك، ومساعدتك في كل خطوة من خطوات الحجز. كلما استخدمت التطبيق أكثر، كلما أصبح المساعد الذكي أكثر فهمًا لتفضيلاتك."
  }
];

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">الأسئلة الشائعة</h2>
          <p className="text-gray-600 mt-2">
            إجابات على الأسئلة الأكثر شيوعًا حول استخدام تطبيق محجوز
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-right py-4 text-lg hover:text-mahjooz-purple hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-right py-2 px-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            هل لديك سؤال آخر؟ لا تتردد في التواصل معنا
          </p>
          <Button className="bg-mahjooz-purple hover:bg-mahjooz-dark-purple">
            تواصل معنا
          </Button>
        </div>
      </div>
    </section>
  );
}
