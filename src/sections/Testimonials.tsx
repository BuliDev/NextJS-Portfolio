import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Nico R.",
    position: "Small Business Owner",
    text: "Working with him was such a smooth experience. I just gave him a rough idea of what I wanted for my landing page, and he nailed it. Super professional and very fast delivery!",
    avatar: memojiAvatar1,
  },
  {
    name: "Lina M.",
    position: "Freelance Coach",
    text: "He totally got the vibe I was going for with my personal brand. Everything from the layout to the animations felt so on point. I’ve already gotten compliments on the new site.",
    avatar: memojiAvatar2,
  },
  {
    name: "James P.",
    position: "Founder @ LaunchPod",
    text: "Honestly, I didn’t even know what I needed for my product site, but he walked me through everything step-by-step. Great communication and even better results.",
    avatar: memojiAvatar3,
  },
  {
    name: "Milena D.",
    position: "Content Creator",
    text: "He’s fast, creative, and really easy to work with. I had a bunch of custom requests and he handled them all like a pro. Site looks great on both desktop and mobile.",
    avatar: memojiAvatar4,
  },
  {
    name: "Thomas K.",
    position: "Garage Owner",
    text: "I needed a modern, clean website for my local auto shop, and what he delivered looked like something from a high-end brand. Super happy with the end result.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my
        work."
        />

        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:max-w-md p-6 md:p-8"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
