"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { useLanguage } from "../layout/language-context";

const testimonialsEn = [
  {
    text: "Zybiov's reliable supply chain and strict temperature-controlled logistics ensured our specialized medications arrived safely and on time.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Dr. Briana Patton",
    role: "Hospital Director",
  },
  {
    text: "Partnering with Zybiov for our medical equipment sourcing was the best decision. Their extensive global network guaranteed top-tier diagnostic devices.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Bilal Ahmed",
    role: "Procurement Head",
  },
  {
    text: "Their compliance standards are exceptional. Working with Zybiov means zero worries about regulatory issues when importing pharmaceutical products.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Saman Malik",
    role: "Compliance Officer",
  },
  {
    text: "Zybiov provided a seamless procurement experience for our new healthcare facility, from surgical instruments to high-quality nutritional supplements.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Omar Raza",
    role: "Healthcare CEO",
  },
  {
    text: "Their expertise in sourcing generic medicines helped us reduce costs significantly while maintaining the highest international quality standards.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Zainab Hussain",
    role: "Pharmacy Chain Owner",
  },
  {
    text: "Professional management and transparent communication make Zybiov our most trusted partner for medical distribution across the region.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Aliza Khan",
    role: "Operations Manager",
  },
  {
    text: "The diverse range of wellness and sports nutrition products they supplied helped us meet growing market demands efficiently.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Farhan Siddiqui",
    role: "Retail Director",
  },
  {
    text: "Zybiov delivered a comprehensive solution that exceeded expectations, understanding our clinical needs and enhancing patient care capabilities.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Sana Sheikh",
    role: "Clinical Manager",
  },
  {
    text: "With Zybiov's efficient supply chain management, our inventory shortages are a thing of the past. Highly recommend their services.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
    name: "Hassan Ali",
    role: "Supply Chain Manager",
  },
];

const testimonialsAr = [
  {
    text: "ضمنت لنا سلسلة إمداد زيبوف الموثوقة واللوجستيات الصارمة التحكم في درجة الحرارة وصول أدويتنا المتخصصة بأمان وفي الوقت المحدد.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80",
    name: "د. بريانا باتون",
    role: "مديرة مستشفى",
  },
  {
    text: "كانت الشراكة مع زيبوف لتوريد المعدات الطبية أفضل قرار. شبكتهم العالمية الواسعة ضمنت لنا الحصول على أجهزة تشخيص عالية المستوى.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=128&h=128&q=80",
    name: "بلال أحمد",
    role: "رئيس المشتريات",
  },
  {
    text: "معايير الامتثال لديهم استثنائية. العمل مع زيبوف يعني عدم وجود مخاوف بشأن القضايا التنظيمية عند استيراد المنتجات الصيدلانية.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&h=128&q=80",
    name: "سامان مالك",
    role: "مسؤولة الامتثال",
  },
  {
    text: "قدمت زيبوف تجربة شراء سلسة لمنشأتنا الصحية الجديدة، من الأدوات الجراحية إلى المكملات الغذائية عالية الجودة.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=128&h=128&q=80",
    name: "عمر رضا",
    role: "الرئيس التنفيذي للرعاية الصحية",
  },
  {
    text: "ساعدتنا خبرتهم في توريد الأدوية الجنيسة في تقليل التكاليف بشكل كبير مع الحفاظ على أعلى معايير الجودة الدولية.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&h=128&q=80",
    name: "زينب حسين",
    role: "صاحبة سلسلة صيدليات",
  },
  {
    text: "الإدارة المهنية والتواصل الشفاف يجعلان من زيبوف شريكنا الأكثر ثقة لتوزيع المستلزمات الطبية في جميع أنحاء المنطقة.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80",
    name: "أليزا خان",
    role: "مديرة العمليات",
  },
  {
    text: "مجموعة منتجات العافية والتغذية الرياضية المتنوعة التي قاموا بتوريدها ساعدتنا في تلبية متطلبات السوق المتزايدة بكفاءة.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
    name: "فرحان صديقي",
    role: "مدير التجزئة",
  },
  {
    text: "قدمت زيبوف حلاً شاملاً فاق التوقعات، متفهمة احتياجاتنا السريرية ومعززة قدرات رعاية المرضى.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
    name: "سناء شيخ",
    role: "المديرة السريرية",
  },
  {
    text: "بفضل الإدارة الفعالة لسلسلة الإمداد من زيبوف، أصبح نقص المخزون لدينا شيئًا من الماضي. أوصي بخدماتهم بشدة.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
    name: "حسان علي",
    role: "مدير سلسلة التوريد",
  },
];

export default function TestimonialSection() {
  const { language, t } = useLanguage();
  
  const testimonials = language === "ar" ? testimonialsAr : testimonialsEn;
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center">
            <div className="border border-primary/20 text-primary py-1 px-4 rounded-full text-sm font-medium tracking-wide">
              {language === "ar" ? "آراء العملاء" : "Testimonials"}
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-heading">
            {language === "ar" ? "ماذا يقول شركاؤنا" : "What our partners say"}
          </h2>
          <p className="text-center mt-5 opacity-75 text-body">
            {language === "ar" 
              ? "اكتشف كيف نساعد شركاءنا في الرعاية الصحية على الازدهار." 
              : "Discover how we help our healthcare partners thrive."}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden px-4 md:px-0">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
