import { useLang } from "@/i18n/LanguageContext";
import walkImg from "@/assets/persona-walk.jpg";
import hikeImg from "@/assets/persona-hike.jpg";
import coffeeImg from "@/assets/persona-coffee.jpg";
import familyImg from "@/assets/persona-family.jpg";

export const LifeBenefit = () => {
  const { t } = useLang();
  const items = [
    { img: walkImg, label: t.life.walk, sub: t.life.walkSub, alt: t.life.walk },
    { img: hikeImg, label: t.life.hike, sub: t.life.hikeSub, alt: t.life.hike },
    { img: coffeeImg, label: t.life.coffee, sub: t.life.coffeeSub, alt: t.life.coffee },
    { img: familyImg, label: t.life.family, sub: t.life.familySub, alt: t.life.family },
  ];
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-soft opacity-60" />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            {t.life.titleA} <span className="text-gradient">{t.life.titleB}</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto reveal">
          {items.map((item) => (
            <figure
              key={item.label}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <figcaption className="text-white">
                  <p className="text-lg lg:text-xl font-semibold tracking-tight">{item.label}</p>
                  <p className="mt-1 text-sm text-white/80 leading-snug">{item.sub}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
