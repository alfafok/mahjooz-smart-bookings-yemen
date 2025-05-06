
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-mahjooz-soft-green">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-2/3 text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ابدأ رحلتك مع محجوز اليوم!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              انطلاقة من عدن.. وانطلاقة نحو المستقبل! احجز خدماتك بكل سهولة واستمتع بتجربة فريدة مع منصة محجوز.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button size="lg" className="bg-mahjooz-purple hover:bg-mahjooz-dark-purple">
                اكتشف المزيد
              </Button>
              <Button size="lg" variant="outline" className="border-mahjooz-purple text-mahjooz-purple hover:bg-mahjooz-purple hover:text-white">
                سجل كمزود خدمة
              </Button>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-center">
                <span className="text-4xl mb-4 inline-block">🎁</span>
                <h3 className="text-xl font-bold mb-2">احصل على خصم 20%</h3>
                <p className="text-gray-600 mb-4">
                  على أول حجز لك عند إنشاء حساب جديد
                </p>
                <Button className="w-full bg-mahjooz-purple hover:bg-mahjooz-dark-purple">
                  سجل الآن
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
