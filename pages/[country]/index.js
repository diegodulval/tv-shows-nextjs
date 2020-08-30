import { to } from "../../utils/to";
import Thumbnail from "../../components/Thumbnail";

export default function Home({ country, tvShows, error, message }) {
  console.log(country);
  const renderShows = () =>
    tvShows.map(({ show }, index) => (
      <li key={index}>
        <Thumbnail
          href="/[country]/[showId]"
          as={`/${country}/${show.id}`}
          imageUrl={(show.image && show.image.medium) || undefined}
          caption={show.name}
        />
      </li>
    ));

  return (
    <ul className="tvshows-grid">
      {error ? <p>{message}</p> : renderShows()}
      <style jsx>{`
        .tvshows-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
      `}</style>
    </ul>
  );
}

Home.getInitialProps = async (context) => {
  const country = context.query.country || "us";
  const date = new Date().toISOString().substr(0, 10);
  const url = `http://api.tvmaze.com/schedule?country=${country}&date=${date}`;
  const res = await fetch(url);
  const [err, resp] = await to(res.json());
  const tvShows = [];
  if (err || !Array.isArray(resp)) {
    return {
      error: resp.code,
      message: resp.message,
      country,
      tvShows,
    };
  }
  return {
    country,
    tvShows: resp,
  };
};
