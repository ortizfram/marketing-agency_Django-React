import { Link } from "react-router-dom";

function CaseCard({ data, index }) {
  return (
    <Link
      to="/cases/id"
      // HOVER EFFECT title
      onMouseEnter={() => {
        const title_element = document.getElementById(index);
        const img = document.getElementById(data.id);
        title_element.classList.add("text-rosha");
        img.classList.add("object-scale-down");
      }}
      onMouseLeave={() => {
        const title_element = document.getElementById(index);
        const img = document.getElementById(data.id);
        title_element.classList.remove("text-rosha");
        img.classList.remove("object-scale-down");
      }}
      //   ----
      key={data.title}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg "
    >
      <div className="flex-shrink-0">
        <img
          id={data.id}
          className="h-96 w-full object-cover transition duration-500 ease-in-out"
          src={data.imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-xl font-medium text-gray-800">
            <a href={data.category.href} className="hover:underline">
              {data.category.name}
            </a>
          </p>
          <a href={data.href} className="mt-2 block">
            <p
              id={index}
              className="xl:text-4xl text-2xl font-semibold text-gray-900 transition duration-500 ease-in-out"
            >
              {data.title}
            </p>
            <p className="pt-4 pb-6 mt-3 text-2xl text-gray-500 leading-9">
              {data.description}
            </p>
          </a>
        </div>
      </div>
    </Link>
  );
}

export default CaseCard;
