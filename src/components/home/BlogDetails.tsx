import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import Lenis from "@studio-freight/lenis";

const blogs = [
  {
    image: blog1,
    title: "Cybersecurity Trends to Watch in 2025",
    shortDescription:
      "Explore the emerging cybersecurity threats and technologies shaping the digital landscape in 2025.",
    author: "Jane Doe",
    date: "16 October 2025",
  },
  {
    image: blog2,
    title: "The Rise of AI in Threat Detection",
    shortDescription:
      "How artificial intelligence is revolutionizing real-time threat detection and response strategies.",
    author: "John Smith",
    date: "16 October 2025",
  },
  {
    image: blog3,
    title: "Navigating Cloud Security Challenges",
    shortDescription:
      "Key strategies to secure your cloud infrastructure amidst evolving cyber threats.",
    author: "Emily Chen",
    date: "16 October 2025",
  },
  {
    image: blog4,
    title: "Building a Resilient Security Culture",
    shortDescription:
      "Why employee training and awareness are critical to a robust cybersecurity framework.",
    author: "Michael Brown",
    date: "16 October 2025",
  },
];

const BlogDetails = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={sectionRef}>
      <div className="">
        {blogs.map((blog, index) => {
          const targetScale = 1 - (blogs.length - index) * 0.05;
          return (
            <BlogCard
              key={index}
              blog={blog}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              index={index}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

const BlogCard = ({ blog, index, progress, range, targetScale }: any) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  const colorRange = [(index + 1) * 0.25, (index + 1.25) * 0.25];
  const backgroundColor =
    index < blogs.length - 1
      ? useTransform(progress, colorRange, ["#4F39F6", "#aea4fc"])
      : "#4F39F6"; // Last card doesn't change color

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center top-0 sticky"
    >
      <motion.div
        className="border-2 w-full lg:w-[1000px] p-4 sm:p-[30px] lg:p-[50px] rounded-[20px] sm:rounded-[45px] relative text-black"
        style={{
          scale: cardScale,
          backgroundColor,
          top: `calc(0% + ${index * 25}px)`,
        }}
      >
        <div className="w-full flex flex-col-reverse md:flex-row md:items-center justify-between gap-7">
          <div className="w-full md:w-fit">
            <div className="w-full md:max-w-[400px]">
              <span>{blog.date}</span>
              <h1 className="text-2xl md:text-4xl font-bold">{blog.title}</h1>
              <p className="md:text-lg font-semibold py-2 md:py-5">
                {blog.shortDescription}
              </p>
              <p className="md:text-lg">Author: {blog.author}</p>
            </div>
          </div>

          <div className="w-full md:w-fit">
            <div className="w-full md:max-w-[20rem] h-[20rem] overflow-hidden rounded-[20px] sm:rounded-[45px] ">
              <motion.img
                style={{ scale }}
                className="w-full h-full object-cover"
                src={blog.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
