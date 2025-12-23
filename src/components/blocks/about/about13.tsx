import React from "react";

const About13 = () => {
  return (
    <section className="py-32">
      <div className="container space-y-10 lg:space-y-20">
        <div className="w-full grid-cols-6 gap-10 lg:grid">
          <div />
          <h1 className="col-span-4 text-5xl font-semibold tracking-tighter lg:pl-10 lg:pr-24 lg:text-8xl">
            Our story
          </h1>
        </div>
        <div className="grid-cols-6 space-y-12 lg:grid lg:space-y-0 xl:gap-10">
          <p className="text-foreground/40 hidden lg:block">
            Our Crew, Our story
          </p>
          <div className="col-span-2 lg:pl-10 lg:pr-24">
            <p className="text-foreground/40">
              We aim to bring diverse minds together, turning ideas into
              experiences that matter.
            </p>
            <div className="mt-5 flex items-center gap-5 lg:mt-20">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar1.png"
                className="size-12"
                alt="avatr"
              />
              <div>
                <h3 className="text-lg font-medium tracking-tight">John Doe</h3>
                <p className="text-foreground/40 text-sm">Creative Director</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-32 lg:mt-0 lg:pl-10">
            <h2 className="text-2xl font-medium tracking-tight lg:text-3xl">
              We are a team of creators, thinkers, and builders who believe in
              crafting experiences that truly connect. Our story is built on
              passion, innovation, and the drive to bring meaningful ideas to
              life.
            </h2>
            <p className="text-foreground/40 lg:mt-18 mt-6 text-base lg:text-lg">
              We ask: What&apos;s the goal? Who&apos;s it for? How do we make it
              effortless? We begin with why, who, and how to make it better.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png"
            alt="about us iamge"
            className="h-150 mt-4 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { About13 };

export default About13;
