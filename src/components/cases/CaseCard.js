function CaseCard({ data, index }) {
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
      //   ----
      key={data.title}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg "
    >
      <div className="flex-shrink-0">
        <img className="h-96 w-full object-cover" src={data.imageUrl} alt="" />
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
              className="xl:text-4xl text-2xl font-semibold text-gray-900 transition duration-300 ease-in-out"
            >
              {data.title}
            </p>
            <p className="mt-3 text-base text-gray-500">{data.description}</p>
          </a>
        </div>
        {/* author */}
        {/* <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <a href={post.author.href}>
          <span className="sr-only">{post.author.name}</span>
          <img
            className="h-10 w-10 rounded-full"
            src={post.author.imageUrl}
            alt=""
          />
        </a>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          <a href={post.author.href} className="hover:underline">
            {post.author.name}
          </a>
        </p>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={post.datetime}>{post.date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
}

export default CaseCard;
