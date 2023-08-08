function ServiceCard({ data, index }) {
  return (
    <div
      // HOVER EFFECT
      onMouseEnter={() => {
        const title_element = document.getElementById(index);
        title_element.classList.add("text-rosha");
      }}
      onMouseLeave={() => {
        const title_element = document.getElementById(index);
        title_element.classList.remove("text-rosha");
      }}
      //   ---
      className="relative w-full p-8 h-96 lg:h-[20pm] bg-white shadow-xl hover:translate-y-2 transition duration-300 ease-in-out"
    >
      <div className="w-full">
        <i className="bx bx-code-alt text-6xl text-gray-500"></i>
        <h2 className="text-xl font-semibold text-gray-900 pt-8">
          {data.title}
        </h2>
        <p className="text-lg font-regular text-gray-500 pt-4">{data.title}</p>
      </div>
      <div className="absolute bottom-0 left-0 p-8">
        <h2
          id={index}
          className="items-end text-xl font-semibold text-gray-900 pt-8"
        >
          learn More
        </h2>
      </div>
    </div>
  );
}

export default ServiceCard;
