
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// البيانات التجريبية للخدمات
const mockServices = [
  {
    id: 1,
    type: "hotels",
    name: "فندق النجوم",
    rating: 4.5,
    location: "عدن، التواهي",
    price: "150 ر.س",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    lat: 15.32,
    lng: 44.21,
  },
  {
    id: 2,
    type: "clinics",
    name: "عيادة الصحة",
    rating: 4.8,
    location: "عدن، المنصورة",
    price: "80 ر.س",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    lat: 15.31,
    lng: 44.19,
  },
  {
    id: 3,
    type: "cars",
    name: "سيارة كورولا",
    rating: 4.2,
    location: "عدن، الشيخ عثمان",
    price: "120 ر.س / يوم",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    lat: 15.33,
    lng: 44.23,
  },
  {
    id: 4,
    type: "hotels",
    name: "استراحة البحر",
    rating: 4.0,
    location: "عدن، جولد مور",
    price: "200 ر.س",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    lat: 15.34,
    lng: 44.25,
  },
  {
    id: 5,
    type: "clinics",
    name: "مركز الأسنان",
    rating: 4.7,
    location: "عدن، كريتر",
    price: "100 ر.س",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    lat: 15.30,
    lng: 44.22,
  }
];

export default function MapSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [mapReady, setMapReady] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // محاكاة تحميل الخريطة
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // تصفية الخدمات حسب النوع المحدد
  const filteredServices = activeTab === "all" 
    ? mockServices 
    : mockServices.filter(service => service.type === activeTab);

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">استكشف الخدمات القريبة منك</h2>
          <p className="text-gray-600 mt-2">تصفح الخريطة للعثور على أفضل الخدمات في المنطقة</p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-gray-100 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-mahjooz-purple data-[state=active]:text-white">الكل</TabsTrigger>
              <TabsTrigger value="hotels" className="data-[state=active]:bg-mahjooz-purple data-[state=active]:text-white">فنادق</TabsTrigger>
              <TabsTrigger value="clinics" className="data-[state=active]:bg-mahjooz-purple data-[state=active]:text-white">عيادات</TabsTrigger>
              <TabsTrigger value="cars" className="data-[state=active]:bg-mahjooz-purple data-[state=active]:text-white">سيارات</TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* عرض الخريطة */}
            <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-md h-[450px] lg:h-[600px] relative">
              {!mapReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-t-mahjooz-purple border-gray-200 rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-600">جاري تحميل الخريطة...</p>
                  </div>
                </div>
              )}
              <div
                ref={mapContainerRef}
                className={`w-full h-full bg-gray-200 ${!mapReady ? 'hidden' : ''}`}
                style={{
                  backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/44.2,15.3,11,0/800x600?access_token=pk.eyJ1IjoibG92YWJsZWFpIiwiYSI6ImNrczB5bWEwejE3bWQycG56ZWkwNjI1eDIifQ.pd49-UJaLbt-8Ils16ilfw')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* هنا ستكون الخريطة التفاعلية في التطبيق الحقيقي */}
                {mapReady && filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{
                      top: `${Math.random() * 70 + 15}%`,
                      left: `${Math.random() * 70 + 15}%`,
                    }}
                  >
                    <div className="w-6 h-6 bg-mahjooz-purple rounded-full flex items-center justify-center text-white shadow-lg hover:bg-mahjooz-dark-purple transition-colors duration-300">
                      {service.type === "hotels" && <span>🏨</span>}
                      {service.type === "clinics" && <span>🩺</span>}
                      {service.type === "cars" && <span>🚗</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* عرض قائمة الخدمات */}
            <div className="overflow-auto h-[450px] lg:h-[600px] pr-2 pl-2">
              <h3 className="text-xl font-bold mb-4 text-right">الخدمات المتوفرة</h3>

              <TabsContent value="all" className="mt-0 space-y-4">
                {filteredServices.length === 0 ? (
                  <p className="text-center py-8 text-gray-500">لا توجد خدمات متاحة</p>
                ) : (
                  filteredServices.map((service) => (
                    <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex flex-col">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="h-36 w-full object-cover"
                        />
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs">
                              {service.type === "hotels" && "فندق"}
                              {service.type === "clinics" && "عيادة"}
                              {service.type === "cars" && "سيارة"}
                            </Badge>
                            <div className="flex items-center">
                              <span className="text-yellow-500 ml-1">⭐</span>
                              <span className="text-sm">{service.rating}</span>
                            </div>
                          </div>
                          <h4 className="font-bold text-lg text-right">{service.name}</h4>
                          <div className="flex items-center justify-end mt-1 text-gray-500 text-sm">
                            <span>{service.location}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 w-4 h-4">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <Button size="sm" className="bg-mahjooz-purple hover:bg-mahjooz-dark-purple">حجز</Button>
                            <span className="font-bold text-mahjooz-dark-purple">{service.price}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))
                )}
              </TabsContent>

              <TabsContent value="hotels" className="mt-0">
                {/* محتوى مماثل للفنادق */}
              </TabsContent>

              <TabsContent value="clinics" className="mt-0">
                {/* محتوى مماثل للعيادات */}
              </TabsContent>

              <TabsContent value="cars" className="mt-0">
                {/* محتوى مماثل للسيارات */}
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
