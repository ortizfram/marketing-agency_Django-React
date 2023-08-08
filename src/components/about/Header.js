import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Header() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24 pb-12  ">
          <div>
            <div className="">
              <h1 className="text-4xl font-semibold tracking-tight pb-8  sm:text-7xl">
                About Us
              </h1>
              <p className="mt-16 text-2xl leading-10 text-black max-w-5xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                dolorem accusantium error impedit dignissimos quibusdam quisquam
                quis pariatur nam sapiente? Explicabo culpa, quis deserunt ea
                odio ullam velit. Temporibus accusantium quidem nulla magnam
                earum, unde deleniti aut vero hic quibusdam optio dicta minus
                sed voluptatum numquam eos asperiores. Assumenda, unde?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
