import ThumbnailStyles from "./styles";
import Link from "next/link";

const Thumbnail = ({
  href = "",
  as = "",
  caption,
  imageUrl = "https://placeholder.com/210x295/?text=?",
}) => {
  return (
    <div className="thumbnail">
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} className="thumbnail__img" />
          <h4 className="thumbnail_caption">{caption}</h4>
        </a>
      </Link>
      <style jsx>{ThumbnailStyles}</style>
    </div>
  );
};

export default Thumbnail;
