import React from "react";

const About19 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="gap-15 grid grid-cols-1 lg:grid-cols-7 lg:gap-1">
          <div className="h-120 col-span-4 border">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="lg:pl-15 space-y-15 col-span-3 ml-auto max-w-4xl">
            <h1 className="text-2xl font-medium tracking-tight">
              We are a team of creators, thinkers, and builders who believe in
              crafting experiences that truly connect. Our story is built on
              passion, innovation, and the drive to bring meaningful ideas to
              life.
            </h1>
            <p className="text-foreground/40 text-base lg:text-lg">
              We ask: What’s the goal? Who’s it for? How do we make it
              effortless? we begin with why, who, and how to make it better.
            </p>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <p className="text-foreground/40 flex-1 text-sm">
                We aim to bring diverse minds together, turning ideas into
                experiences that matter.
              </p>
              <div className="flex w-fit items-center gap-2">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar1.png"
                  className="size-10"
                  alt="avatr"
                />
                <div>
                  <h3 className="font-medium tracking-tight">John Doe</h3>
                  <p className="text-foreground/40 text-sm">
                    Creative Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About19 };

export default About19;
