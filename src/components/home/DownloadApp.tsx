
import { Button } from "@/components/ui/button";

export default function DownloadApp() {
  return (
    <section className="py-16 bg-gradient-to-r from-mahjooz-purple to-mahjooz-dark-purple text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-right lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">حمل تطبيق محجوز الآن!</h2>
            <p className="text-lg opacity-90 mb-8">
              استمتع بتجربة حجز سلسة وذكية لجميع احتياجاتك. احصل على إشعارات فورية وعروض حصرية.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-mahjooz-purple">
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
                متوفر قريباً
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-mahjooz-purple">
                <svg viewBox="0 0 384 512" className="ml-2 h-5 w-5" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
                متوفر قريباً
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:rtl:order-first">
            <div className="relative mx-auto w-[280px] h-[560px]">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-[60px] border-[14px] border-white/10 shadow-xl"></div>
              <div className="absolute inset-[14px] bg-mahjooz-purple/30 rounded-[46px] overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">محجوز</div>
                  <div className="text-sm opacity-80">متوفر قريباً</div>
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mt-4 flex items-center justify-center">
                    <div className="text-2xl">🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
