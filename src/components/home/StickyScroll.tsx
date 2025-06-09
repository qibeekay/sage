const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
  },
  {
    title: "Color you calendar",
    id: "colors",
  },
  {
    title: "Instantly know if someone is available",
    id: "available",
  },
  {
    title: "Track what you listened to when",
    id: "music",
  },
  {
    title: "Send scheduling links guest love",
    id: "scheduling",
  },
  {
    title: "Always know what your team is up to",
    id: "team",
  },
];

const StickyScroll = () => {
  return (
    <div>
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <p className="text-5xl py-16 text-gray-300">{feature.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 h-screen flex items-center">
          <div className="w-[20rem] aspect-square bg-gray-300 text-black">
            div col
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
