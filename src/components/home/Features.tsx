
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "🏨",
    title: "فنادق واستراحات",
    description: "احجز إقامتك في أفضل الفنادق والاستراحات بأفضل الأسعار وبنقرة واحدة فقط."
  },
  {
    icon: "🩺",
    title: "عيادات ومواعيد طبية",
    description: "احجز مواعيدك الطبية مع أفضل الأطباء والمراكز الصحية دون الحاجة للانتظار."
  },
  {
    icon: "🚗",
    title: "تأجير سيارات",
    description: "استأجر سيارتك المفضلة بسهولة وسرعة مع إمكانية التوصيل إلى موقعك."
  },
  {
    icon: "🧠",
    title: "مساعد ذكي",
    description: "مساعد شخصي ذكي يساعدك في كل خطوة من خطوات الحجز ويقترح أفضل الخيارات."
  },
  {
    icon: "🗺️",
    title: "خريطة تفاعلية",
    description: "تصفح جميع الخدمات القريبة من موقعك عبر خريطة تفاعلية سهلة الاستخدام."
  },
  {
    icon: "💳",
    title: "خيارات دفع مرنة",
    description: "ادفع بسهولة عبر بوابات دفع آمنة تدعم البطاقات المحلية والدولية."
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">خدماتنا المميزة</h2>
          <p className="text-gray-600 mt-2 md:w-2/3 mx-auto">
            نسعى لتقديم تجربة متكاملة ومرنة لجميع احتياجاتك من الحجوزات
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-md transition-shadow" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader className="text-right">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-right">
                <CardDescription className="text-md text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
