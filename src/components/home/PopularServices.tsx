
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// البيانات التجريبية للخدمات المميزة
const popularServices = [
  {
    id: 1,
    type: "hotels",
    name: "فندق النجوم الخمسة",
    location: "عدن، التواهي",
    rating: 4.8,
    price: "200 ر.س",
    discount: "25%",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  {
    id: 2,
    type: "clinics",
    name: "مركز العناية الطبي",
    location: "عدن، المنصورة",
    rating: 4.9,
    price: "120 ر.س",
    discount: null,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    id: 3,
    type: "cars",
    name: "كامري 2023 فاخرة",
    location: "عدن، الشيخ عثمان",
    rating: 4.7,
    price: "150 ر.س / يوم",
    discount: "15%",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  },
  {
    id: 4,
    type: "hotels",
    name: "استراحة شاطئ البحر",
    location: "عدن، جولد مور",
    rating: 4.5,
    price: "180 ر.س",
    discount: null,
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
  }
];

export default function PopularServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-right">الخدمات المميزة</h2>
            <p className="text-gray-600 mt-1 text-right">
              استكشف أفضل الخدمات المتاحة في منصة محجوز
            </p>
          </div>
          <Button variant="link" className="text-mahjooz-purple hover:text-mahjooz-dark-purple mt-2 md:mt-0 mr-auto md:mr-0">
            عرض جميع الخدمات
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service) => (
            <Card key={service.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {service.discount && (
                  <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                    خصم {service.discount}
                  </Badge>
                )}
                <Badge className="absolute top-2 right-2 bg-mahjooz-purple hover:bg-mahjooz-dark-purple">
                  {service.type === "hotels" && "فندق"}
                  {service.type === "clinics" && "عيادة"}
                  {service.type === "cars" && "سيارة"}
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-yellow-500 ml-1">⭐</span>
                    <span className="text-sm">{service.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">{service.location}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-right">{service.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <Button size="sm" className="bg-mahjooz-purple hover:bg-mahjooz-dark-purple">
                    حجز الآن
                  </Button>
                  <div className="text-right">
                    <span className="font-bold text-mahjooz-dark-purple block">{service.price}</span>
                    {service.discount && (
                      <span className="text-sm text-gray-500 line-through">
                        {parseInt(service.price) * 1.25} ر.س
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
