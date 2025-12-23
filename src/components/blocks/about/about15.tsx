import React from "react";

const About15 = () => {
  return (
    <section className="bg-background text-foreground dark py-32">
      <div className="gap-25 container flex flex-col items-center justify-center lg:flex-row lg:gap-[10vw]">
        <div className="w-xs bg-foreground text-background rotate-[-6deg] border p-1">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img14.png"
            alt=""
            className="h-110 pointer-events-none w-full object-cover"
          />

          <div className="pb-1 pt-2">
            <p className="text-background text-lg font-medium tracking-tight">
              John Doe
            </p>
            <p className="text-background/50 text-sm">@shadcnblocks.com</p>
          </div>
        </div>
        <div className="w-xs space-y-6">
          <h1 className="mb-15 text-5xl font-medium tracking-tight">
            Shaping ideas with clarity and{" "}
            <span className="font-instrumentSerif">impact</span>
          </h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            voluptate saepe quas cum reprehenderit eligendi inventore animi
            excepturi sapiente earum.
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            voluptate saepe quas cum reprehenderit eligendi inventore animi
            excepturi sapiente earum.
          </p>
        </div>
      </div>
    </section>
  );
};

export { About15 };

export default About15;
