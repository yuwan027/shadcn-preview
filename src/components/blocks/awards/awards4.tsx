import React from "react";

const Awards4 = () => {
  const awards = [
    {
      name: "CSS Design Awards Winner",
      description: "Recognized for excellence in web design and functionality.",
      year: "2024",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    },
    {
      name: "Awwwards Site of the Day",
      description:
        "Featured for outstanding creativity and innovation in web development.",
      year: "2023",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    },
    {
      name: "Best UI/UX Design",
      description:
        "Awarded for exceptional user experience and interface design.",
      year: "2023",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
    },
    {
      name: "Web Design Excellence",
      description:
        "Honored for superior design quality and technical implementation.",
      year: "2022",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
    },
    {
      name: "Mobile App of the Year",
      description:
        "Recognized for innovative mobile design and user experience.",
      year: "2022",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
    },
    {
      name: "Digital Innovation Award",
      description:
        "Celebrated for breakthrough digital solutions and creative technology.",
      year: "2021",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
    },
  ];

  return (
    <section className="py-32">
      <div className="container space-y-10 lg:space-y-20">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-8xl">
            Awards
          </h1>
          <h2 className="text-lg font-semibold tracking-tighter lg:text-3xl">
            (2015-25©)
          </h2>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-foreground/40 h-12 border-b text-left">
              <th className="min-w-30 hidden font-normal lg:table-cell lg:min-w-40"></th>
              <th className="font-normal">Name</th>
              <th className="hidden font-normal md:table-cell">Nomination</th>
              <th className="text-left text-right font-normal">Year</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((award, index) => (
              <tr
                key={index}
                className="text-foreground/40 h-20 border-b text-left"
              >
                <td className="text-foreground/50 hidden font-medium tracking-tight lg:table-cell">
                  (00{index + 1})
                </td>
                <td className="text-foreground text-lg font-medium tracking-tight lg:text-xl">
                  <div className="flex items-center gap-2">
                    <span className="bg-foreground size-8 rounded-xl object-cover p-1.5">
                      <img src={award.logo} className="invert" alt="" />
                    </span>
                    {award.name}
                  </div>
                </td>
                <td className="hidden md:table-cell">{award.description}</td>
                <td className="text-foreground text-right">{award.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export { Awards4 };

export default Awards4;
