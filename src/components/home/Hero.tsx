
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { id: "all", name: "جميع الخدمات" },
  { id: "hotels", name: "فنادق واستراحات" },
  { id: "clinics", name: "عيادات ومواعيد طبية" },
  { id: "cars", name: "تأجير سيارات" },
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`البحث عن: ${searchQuery} في الفئة: ${selectedCategory}`);
  };

  return (
    <section className="relative bg-gradient-to-r from-mahjooz-purple/20 to-mahjooz-light-purple/30 py-20">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in">
            احجز كل احتياجاتك <span className="text-mahjooz-purple">بسهولة وذكاء</span>
          </h1>
          <p className="text-xl text-gray-600 md:w-3/4 mx-auto">
            منصتك المتكاملة للحجوزات في اليمن - فنادق، عيادات طبية، وتأجير سيارات
          </p>
        </div>

        <form onSubmit={handleSearch} className="w-full max-w-3xl bg-white p-3 rounded-lg shadow-lg flex flex-col md:flex-row gap-3 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <div className="flex-1">
            <Input
              type="text"
              placeholder="ابحث هنا..."
              className="h-12 w-full text-right"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-[180px]">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12 w-full text-right">
                <SelectValue placeholder="اختر فئة" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="h-12 bg-mahjooz-purple hover:bg-mahjooz-dark-purple w-full md:w-auto">
            ابحث الآن
          </Button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
          {categories.slice(1).map((category) => (
            <Button 
              key={category.id}
              variant="outline" 
              className="rounded-full px-5 border-mahjooz-purple text-mahjooz-purple hover:bg-mahjooz-purple hover:text-white transition-colors"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
