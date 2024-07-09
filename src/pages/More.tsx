import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { movies } from "../data";
import { useDocumentTitle } from "../router";
const More = () => {
  useDocumentTitle("More | Tingyu Liu");
  return (
    <div className="animate-fadeIn">
      <h3 className="mb-3 text-3xl font-bold leading-loose text-green dark:text-gray-300">
        More About Who I Am
      </h3>
      <section className="mb-[30px]">
        <div className="mb-3 flex leading-8">
          <span className="text-xl"> 🌿 </span> &nbsp;Nature lover! I enjoy
          observing animals, insects, and plants.
        </div>
        <div className="mb-3 flex leading-8">
          <span className="text-xl"> 🎬 </span> &nbsp;Huge fan of nature
          documentaries and food documentaries.
        </div>
        <div className="mb-3 flex leading-8">
          <span className="text-xl"> 🧳 </span> &nbsp;Love travelling.I find
          myself more when I'm traveling alone.
        </div>
        <div className="mb-3 flex leading-8">
          <span className="text-xl">📷 </span>&nbsp;Like taking photos.My camera
          is Fuji XT30.&nbsp;
          <Link to="/Photography">
            <span className="text-green underline">Photos</span>
          </Link>
        </div>
        <div className="mb-3 flex leading-8">
          <span className="text-xl">📝</span>&nbsp; Started writing last year,
          mainly about traveling and daily life.
        </div>
      </section>

      <section className="mb-[30px]">
        <h5 className="text-2xl font-bold leading-loose text-green dark:text-gray-300">
          Articles
        </h5>
        <p>
          <a
            className="text-green underline"
            href="https://mp.weixin.qq.com/s/ofTvY7u6QsbDflQoCoXBhg"
          >
            Our stories in Egypt.
          </a>
          <span className="text-gray-500"> | 悦游CondeNastTraveler</span>
        </p>
      </section>
      <div className="mb-[30px]">
        <h5 className="text-2xl font-bold leading-loose text-green dark:text-gray-300">
          My Favourite Movies
        </h5>
        <Cards movies={movies} />
      </div>
      <section className="mb-[30px]">
        <h5 className="text-2xl font-bold leading-loose text-green dark:text-gray-300">
          Other Things I Like
        </h5>
        <p>
          Music, hiking, riding a bike, chatting with friends, playing games,
          puzzles, painting, zakka...
        </p>
      </section>
      <p className="mt-[30px] text-green">To be continued...</p>
    </div>
  );
};

export default More;
