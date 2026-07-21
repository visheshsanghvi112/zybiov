"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, HelpCircle, FileText, CheckCircle2, ShoppingBag } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  category: "pharma" | "equipment" | "supplements";
  specEn: string;
  specAr: string;
  activeIngredientEn?: string;
  activeIngredientAr?: string;
  originEn: string;
  originAr: string;
  status: "available" | "inquiry";
}

const productsData: Product[] = [
  // Pharmaceuticals
  {
    id: "P001",
    nameEn: "Amoxicillin Trihydrate BP",
    nameAr: "أموكسيسيلين ثلاثي هيدرات",
    category: "pharma",
    specEn: "Capsules / Suspension (250mg, 500mg)",
    specAr: "كبسولات / شراب معلق (٢٥٠ ملغ، ٥٠٠ ملغ)",
    activeIngredientEn: "Amoxicillin",
    activeIngredientAr: "أموكسيسيلين",
    originEn: "India (GMP Sourced)",
    originAr: "الهند (مصادر GMP)",
    status: "available",
  },
  {
    id: "P002",
    nameEn: "Paracetamol Infusion",
    nameAr: "باراسيتامول حقن وريدي",
    category: "pharma",
    specEn: "10mg/ml IV Infusion (100ml)",
    specAr: "حقن وريدي ١٠ ملغ/مل (١٠٠ مل)",
    activeIngredientEn: "Paracetamol",
    activeIngredientAr: "باراسيتامول",
    originEn: "India (WHO-GMP)",
    originAr: "الهند (WHO-GMP)",
    status: "available",
  },
  {
    id: "P003",
    nameEn: "Metformin Hydrochloride",
    nameAr: "ميتفورمين هيدروكلوريد",
    category: "pharma",
    specEn: "Sustained Release Tablets (500mg, 850mg, 1000mg)",
    specAr: "أقراص ممتدة المفعول (٥٠٠ ملغ، ٨٥٠ ملغ، ١٠٠٠ ملغ)",
    activeIngredientEn: "Metformin HCL",
    activeIngredientAr: "ميتفورمين",
    originEn: "India",
    originAr: "الهند",
    status: "available",
  },
  {
    id: "P004",
    nameEn: "Ceftriaxone Sodium Injection",
    nameAr: "سفترياكسون صوديوم حقن",
    category: "pharma",
    specEn: "Sterile Powder for Injection (500mg, 1g)",
    specAr: "مسحوق معقم للحقن (٥٠٠ ملغ، ١ غرام)",
    activeIngredientEn: "Ceftriaxone",
    activeIngredientAr: "سفترياكسون",
    originEn: "Global Sourced",
    originAr: "مصادر عالمية",
    status: "available",
  },
  {
    id: "P005",
    nameEn: "Atorvastatin Calcium",
    nameAr: "أتورفاستاتين كالسيوم",
    category: "pharma",
    specEn: "Film-Coated Tablets (10mg, 20mg, 40mg)",
    specAr: "أقراص مغلفة (١٠ ملغ، ٢٠ ملغ، ٤٠ ملغ)",
    activeIngredientEn: "Atorvastatin",
    activeIngredientAr: "أتورفاستاتين",
    originEn: "India (GMP Sourced)",
    originAr: "الهند (مصادر GMP)",
    status: "available",
  },

  // Medical Equipment
  {
    id: "E001",
    nameEn: "Digital Color Doppler Ultrasound",
    nameAr: "جهاز الموجات فوق الصوتية الدوبلر الملون الرقمي",
    category: "equipment",
    specEn: "High-resolution 3D/4D obstetric and cardiac imaging",
    specAr: "تصوير مجسم ثلاثي/رباعي الأبعاد للقلب والنساء والولادة بدقة عالية",
    originEn: "Europe / Asia Sourced",
    originAr: "مصادر أوروبا وآسيا",
    status: "inquiry",
  },
  {
    id: "E002",
    nameEn: "Multi-Parameter Patient Monitor",
    nameAr: "جهاز مراقبة العلامات الحيوية للمريض متعدد المعلمات",
    category: "equipment",
    specEn: "12.1 inch TFT screen, ECG, SpO2, NIBP, TEMP, RESP",
    specAr: "شاشة TFT ١٢.١ بوصة، تخطيط القلب، أكسجين الدم، الضغط غير الغازي، الحرارة، التنفس",
    originEn: "Global Sourced",
    originAr: "مصادر عالمية",
    status: "available",
  },
  {
    id: "E003",
    nameEn: "LED Operating Theatre Surgical Light",
    nameAr: "كشاف عمليات جراحية LED لغرفة العمليات",
    category: "equipment",
    specEn: "Double dome ceiling-mounted surgical lighting system",
    specAr: "نظام إضاءة جراحي مزدوج القبة يثبت في السقف",
    originEn: "Europe",
    originAr: "أوروبا",
    status: "inquiry",
  },
  {
    id: "E004",
    nameEn: "High-End Electric ICU Bed",
    nameAr: "سرير عناية مركزة كهربائي متطور",
    category: "equipment",
    specEn: "5-function bed with CPR positioning and integrated weighing scale",
    specAr: "سرير خماسي الوظائف مع وضع الإنعاش القلبي وميزان متكامل",
    originEn: "Global Sourced",
    originAr: "مصادر عالمية",
    status: "available",
  },

  // Nutritional Supplements
  {
    id: "S001",
    nameEn: "Multivitamins & Minerals Premium Softgels",
    nameAr: "كبسولات جيلاتينية ممتازة متعددة الفيتامينات والمعادن",
    category: "supplements",
    specEn: "Daily nutritional support for immune health",
    specAr: "دعم غذائي يومي لصحة المناعة والنشاط البدني",
    activeIngredientEn: "Vitamins A-Z, Zinc, Iron",
    activeIngredientAr: "فيتامينات أ-ي، زنك، حديد",
    originEn: "India Sourced",
    originAr: "مصادر الهند",
    status: "available",
  },
  {
    id: "S002",
    nameEn: "Calcium Carbonate with Vitamin D3",
    nameAr: "كربونات الكالسيوم مع فيتامين د٣",
    category: "supplements",
    specEn: "Tablets for bone density and skeletal support",
    specAr: "أقراص لكثافة العظام ودعم الهيكل العظمي",
    activeIngredientEn: "Calcium 500mg, Vit D3 250IU",
    activeIngredientAr: "كالسيوم ٥٠٠ ملغ، فيتامين د٣ ٢٥٠ وحدة",
    originEn: "India (FDA Compliant)",
    originAr: "الهند (مطابق لإدارة الغذاء والدواء)",
    status: "available",
  },
  {
    id: "S003",
    nameEn: "Organic Omega-3 Fish Oil 1000mg",
    nameAr: "زيت سمك أوميغا-٣ عضوي ١٠٠٠ ملغ",
    category: "supplements",
    specEn: "Premium molecularly distilled softgels",
    specAr: "كبسولات جيلاتينية ممتازة مقطرة جزيئياً",
    activeIngredientEn: "EPA 180mg, DHA 120mg",
    activeIngredientAr: "حمض إيكوسابنتاينويك وحمض الدوكوساهكسانوىك",
    originEn: "Global Sourced",
    originAr: "مصادر عالمية",
    status: "available",
  },
];

export function ProductCatalogSection() {
  const { language, t, dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "pharma" | "equipment" | "supplements">("all");
  const [selectedOrigin, setSelectedOrigin] = useState<"all" | "india" | "global" | "europe">("all");

  // Filters logic
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Category Filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Sourcing Origin Filter
      if (selectedOrigin !== "all") {
        const originLower = product.originEn.toLowerCase();
        if (selectedOrigin === "india" && !originLower.includes("india")) return false;
        if (selectedOrigin === "global" && !originLower.includes("global")) return false;
        if (selectedOrigin === "europe" && !originLower.includes("europe")) return false;
      }

      // Search Query Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName =
          product.nameEn.toLowerCase().includes(query) ||
          product.nameAr.toLowerCase().includes(query);
        const matchesSpec =
          product.specEn.toLowerCase().includes(query) ||
          product.specAr.toLowerCase().includes(query);
        const matchesIngredient =
          product.activeIngredientEn?.toLowerCase().includes(query) ||
          product.activeIngredientAr?.toLowerCase().includes(query);

        return matchesName || matchesSpec || matchesIngredient;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedOrigin]);

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-[#E4E7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="section-tag mb-4 inline-flex">
            {language === "en" ? "Sourcing & Catalog" : "التوريد والدليل"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E244B]">
            {language === "en" ? "Search Our Product Sourcing" : "ابحث في دليل منتجاتنا"}
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto mt-4 text-[#5E647A]">
            {language === "en"
              ? "Browse through our extensive B2B healthcare portfolio. Search by brand name, generic formulation, or active ingredient."
              : "تصفح محفظتنا المتكاملة لخدمات الرعاية الصحية B2B. ابحث بالاسم التجاري، التركيبة الجنيسة، أو المكون الفعال."}
          </p>
        </div>

        {/* Search & Filters Controls */}
        <div className="bg-white border border-[#E4E7F2] rounded-3xl p-6 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="relative lg:col-span-6">
              <Search className={cn("absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400", dir === "rtl" ? "right-4" : "left-4")} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "en" ? "Search paracetamol, amoxicillin, ultrasound..." : "ابحث عن باراسيتامول، أموكسيسيلين، موجات فوق صوتية..."}
                className={cn(
                  "w-full h-12 bg-[#F8FAFC] border border-[#E4E7F2] rounded-2xl focus:outline-none focus:border-[#5B43D6] focus:ring-1 focus:ring-[#5B43D6] text-sm text-[#1E244B] transition-all",
                  dir === "rtl" ? "pr-12 pl-4" : "pl-12 pr-4"
                )}
              />
            </div>

            {/* Category Filter Dropdown */}
            <div className="relative lg:col-span-3">
              <Filter className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400", dir === "rtl" ? "right-4" : "left-4")} />
              <select
                value={selectedCategory}
                onChange={(e: any) => setSelectedCategory(e.target.value)}
                className={cn(
                  "w-full h-12 bg-[#F8FAFC] border border-[#E4E7F2] rounded-2xl focus:outline-none focus:border-[#5B43D6] text-sm text-[#1E244B] cursor-pointer appearance-none",
                  dir === "rtl" ? "pr-10 pl-4" : "pl-10 pr-4"
                )}
              >
                <option value="all">{language === "en" ? "All Categories" : "جميع الفئات"}</option>
                <option value="pharma">{language === "en" ? "Pharmaceuticals" : "الأدوية والمستحضرات"}</option>
                <option value="equipment">{language === "en" ? "Medical Equipment" : "الأجهزة والمعدات الطبية"}</option>
                <option value="supplements">{language === "en" ? "Supplements" : "المكملات الغذائية"}</option>
              </select>
            </div>

            {/* Origin Filter Dropdown */}
            <div className="relative lg:col-span-3">
              <Filter className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400", dir === "rtl" ? "right-4" : "left-4")} />
              <select
                value={selectedOrigin}
                onChange={(e: any) => setSelectedOrigin(e.target.value)}
                className={cn(
                  "w-full h-12 bg-[#F8FAFC] border border-[#E4E7F2] rounded-2xl focus:outline-none focus:border-[#5B43D6] text-sm text-[#1E244B] cursor-pointer appearance-none",
                  dir === "rtl" ? "pr-10 pl-4" : "pl-10 pr-4"
                )}
              >
                <option value="all">{language === "en" ? "All Sourcing Origins" : "جميع مصادر الاستيراد"}</option>
                <option value="india">{language === "en" ? "India Sourced" : "استيراد من الهند"}</option>
                <option value="europe">{language === "en" ? "Europe Sourced" : "استيراد من أوروبا"}</option>
                <option value="global">{language === "en" ? "Global Sourced" : "استيراد دولي عام"}</option>
              </select>
            </div>

          </div>
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#E4E7F2] rounded-3xl p-6 shadow-[0_4px_20px_rgba(30,36,75,0.02)] flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(91,67,214,0.06)] hover:border-[#5B43D6]/20 transition-all duration-300"
              >
                <div>
                  {/* Category Tag & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                      product.category === "pharma" ? "bg-blue-50 text-blue-600" :
                      product.category === "equipment" ? "bg-cyan-50 text-cyan-600" :
                      "bg-purple-50 text-purple-600"
                    )}>
                      {product.category === "pharma" ? (language === "en" ? "Pharma" : "دواء") :
                       product.category === "equipment" ? (language === "en" ? "Equipment" : "أجهزة") :
                       (language === "en" ? "Supplement" : "مكملات")}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
                      {language === "en" ? "Active" : "نشط"}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-lg font-extrabold text-[#1E244B] mb-2 leading-snug">
                    {language === "en" ? product.nameEn : product.nameAr}
                  </h3>

                  {/* Active Ingredient (If pharma/supplement) */}
                  {(product.activeIngredientEn || product.activeIngredientAr) && (
                    <div className="mb-3">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                        {language === "en" ? "Active Compound" : "المادة الفعالة"}
                      </span>
                      <span className="text-xs font-semibold text-gray-600">
                        {language === "en" ? product.activeIngredientEn : product.activeIngredientAr}
                      </span>
                    </div>
                  )}

                  {/* Specifications */}
                  <div className="mb-3">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                      {language === "en" ? "Specifications" : "المواصفات"}
                    </span>
                    <p className="text-xs text-gray-500 font-medium">
                      {language === "en" ? product.specEn : product.specAr}
                    </p>
                  </div>

                  {/* Origin */}
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                      {language === "en" ? "Sourcing Origin" : "بلد المنشأ / التوريد"}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">
                      {language === "en" ? product.originEn : product.originAr}
                    </span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="mt-6 pt-4 border-t border-[#F0F2FA]">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`Inquiry regarding ${product.nameEn} (ID: ${product.id})`)}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#F8FAFC] border border-[#E4E7F2] text-sm font-bold text-[#1E244B] hover:bg-[#5B43D6] hover:text-white hover:border-[#5B43D6] h-11 rounded-xl transition-all duration-300"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {language === "en" ? "Request Sourcing Quote" : "طلب تسعير استيراد"}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="col-span-full bg-white border border-[#E4E7F2] rounded-3xl p-12 text-center shadow-sm">
              <HelpCircle className="w-12 h-12 text-[#5B43D6] mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-[#1E244B] mb-2">
                {language === "en" ? "No products matched your search" : "لم يتم العثور على منتجات مطابقة"}
              </h3>
              <p className="text-xs sm:text-sm text-[#5E647A] max-w-sm mx-auto mb-6">
                {language === "en"
                  ? "We can import and source specific molecules or equipment directly through our global sourcing partners. Let us know what you need."
                  : "يمكننا استيراد وتوفير جزيئات أدوية أو معدات محددة مباشرة عبر شركائنا العالميين. أخبرنا باحتياجاتك."}
              </p>
              <Link href="/contact" className="btn-primary inline-flex text-xs px-6 py-2.5">
                {language === "en" ? "Contact Sourcing Desk" : "تواصل مع مكتب التوريد"}
              </Link>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
