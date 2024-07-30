import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { articles, movies } from "../data";
import { Helmet } from "react-helmet";
import { AiOutlineLink } from "react-icons/ai";

const More = () => {
  return (
    <div className="animate-fadeIn">
      <Helmet title="More | Tingyu Liu"></Helmet>
      <h3 className="mb-3 text-3xl font-bold leading-loose text-green dark:text-gray-300">
        About me
      </h3>
      <section className="mb-[30px]">
        <div className="mb-3 flex leading-8">
          <span className="text-xl"> 🌿 </span>&nbsp;Nature lover! I enjoy
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
          <span className="text-xl">📷 </span>&nbsp;
          <div>
            Like taking photos.My camera is Fuji XT30.&nbsp;
            <Link to="/Photography">
              <span className="text-green underline">Photos</span>
            </Link>
          </div>
        </div>
        <div className="mb-3 flex leading-8">
          <span className="text-xl">📝</span>&nbsp;Started writing last year,
          mainly about traveling and daily life.
        </div>
      </section>

      <section className="mb-[30px]">
        <h5 className="text-2xl font-bold leading-loose text-green dark:text-gray-300">
          Articles
        </h5>
        {articles.map((article) => (
          <p key={article.title}>
            <a className="text-green underline" href={article.url}>
              {article.title}
            </a>
            <span className="text-gray-500"> | {article.magazine}</span>
          </p>
        ))}
      </section>
      <div className="mb-[30px]">
        <h5 className="text-2xl font-bold leading-loose text-green dark:text-gray-300">
          My Favourite Movies
        </h5>
        <Cards movies={movies} />
      </div>
      <section className="mb-[30px]">
        <h5 className="text-2xl leading-loose text-green">
          <a
            href="http://blog.tingyuliu.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLink className="inline-block" />
            My Blog
          </a>
        </h5>
        <p className="text-gray-500 dark:text-gray-400">
          I keep some of my coding ideas here.
        </p>
      </section>
      <p className="mt-[30px] text-green">To be continued...</p>
    </div>
  );
};

export default More;
