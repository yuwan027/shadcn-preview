"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

const About17 = () => {
  const [active, setActive] = useState<string>("Information");

  const LINKS = [
    {
      title: "Information",
      href: "#",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png",
    },
    {
      title: "Work",
      href: "#",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img9.png",
    },

    {
      title: "Journal",
      href: "#",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
    },

    {
      title: "Archive",
      href: "#",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img6.png",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="gap-15 grid grid-cols-1 lg:grid-cols-7 lg:gap-12">
          <div className="top-10 col-span-3 h-fit w-fit text-2xl tracking-tight">
            <p className="font-medium">
              Independent Designer & Founding Engineer
            </p>
            <div className="text-foreground/30 mt-4 flex items-center gap-6">
              <p>
                {new Date().toLocaleTimeString("en-US", {
                  timeZone: "America/Chicago",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
              <p>CST</p>
            </div>
          </div>
          <div className="lg:pl-15 col-span-4 ml-auto max-w-3xl space-y-10">
            <h1 className="text-2xl font-medium tracking-tight">
              John Doe blends creativity with technical expertise to design and
              build digital products that are not only functional but also
              delightful to use. With a strong foundation in full-stack
              development and a sharp eye for design, he transforms ideas into
              products that scale seamlessly from concept to launch.
            </h1>
          </div>
        </div>
        <div className="lg:gap-15 mt-15 grid grid-cols-1 gap-4 border-t py-10 lg:grid-cols-7 lg:gap-12">
          <ul className="top-10 order-2 col-span-3 flex h-fit w-fit gap-10 tracking-tight lg:order-none">
            {LINKS.map((link) => (
              <li
                key={link.title}
                className={cn(
                  "cursor-pointer",
                  active === link.title
                    ? "text-foreground"
                    : "text-foreground/30",
                )}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </li>
            ))}
          </ul>
          <ul className="text-foreground/40 lg:pl-15 order-1 col-span-4 ml-auto flex w-full max-w-3xl gap-10 font-medium tracking-tight lg:order-none lg:text-2xl">
            <li className="text-foreground">Austrlia</li>
            <li>Brisbane</li>
            <li>+1 (000) 023 0123</li>
          </ul>
        </div>
        <div className="h-150">
          <img
            className="h-full w-full object-cover"
            src={LINKS.find((link) => link.title === active)?.img}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export { About17 };

export default About17;
