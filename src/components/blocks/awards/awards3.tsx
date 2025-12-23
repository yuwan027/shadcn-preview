import { MoveUpRight } from "lucide-react";

const awards = [
  {
    title: "Pixel Perfect Award",
    categories: ["Digital Design", "UI/UX"],
    year: "2023",
    color: "bg-amber-300",
  },
  {
    title: "Code & Craft Trophy",
    categories: ["Web Development", "Innovation"],
    year: "2023",
    color: "bg-red-500",
  },
  {
    title: "The Strategist Prize",
    categories: ["Product Strategy", "Market Impact"],
    year: "2022",
    color: "bg-blue-500",
  },
];

const Awards3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="text-foreground mb-6 text-4xl font-semibold tracking-tighter sm:text-4xl lg:text-3xl">
          Awards & Recognition
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl text-base">
          Our commitment to excellence hasn't gone unnoticed. We are proud of
          the work we do and the industry recognition it has received,
          showcasing our dedication to pushing creative boundaries
        </p>

        {awards.map((award, index) => (
          <div
            key={index}
            className="border-border group relative flex items-start gap-4 overflow-hidden border-b p-4"
          >
            <div className="bg-accent absolute inset-0 z-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0" />

            <div className="relative z-10 flex-1 space-y-2 pb-4">
              <div className="flex items-center gap-4">
                <div
                  className={`h-5 w-5 rounded-md ${award.color} flex items-center justify-center`}
                ></div>
                <h3 className="rounded-md font-medium">{award.title}</h3>
              </div>
              <p className="text-muted-foreground flex gap-x-2 pl-9 text-sm">
                {award.categories.map((category, index) => (
                  <span key={index}>{category}</span>
                ))}
              </p>
              <p className="text-muted-foreground pl-9 text-sm">{award.year}</p>
            </div>

            <MoveUpRight className="text-muted-foreground relative z-10 mt-1 h-4 w-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Awards3 };

export default Awards3;
