import { Link } from "react-router-dom";
import styles from "./styling.module.scss";

interface ChildProps {
  title: string;
  description?: string;
  image: string;
  bg?: string[];
  gradient?: boolean;
}

const SlateCardChild = ({ image, bg, description, title, gradient }: ChildProps) => {
  return (
    <div
      className={`border-round overflow-hidden shadow-4 hover:shadow-5 cursor-pointer ${styles.container}`}
    >
      <div className="relative">
        <div className={`${styles.img_container}`}>
          <img
            loading="lazy"
            className={styles.img}
            alt="Card Image"
            width="100%"
            height="100%"
            src={image}
          />
        </div>
      </div>
      <div
        className={`pb-3 px-2 pt-4 w-100 absolute left-0 ${bg ? `bg-${bg[0]}` : "bg-blue-800"} ${styles.clippath}`}
        style={{
          width: "101%",
          bottom: "-2px",
          backgroundImage:
            gradient && bg ? `linear-gradient(69deg, var(--${bg[0]}), var(--${bg[1]}))` : undefined,
        }}
      >
        <div
          className="font-bold text-xl md:text-2xl flex-fill flex-grow flex-1 relative"
          style={{ zIndex: 99999 }}
        >
          {title}
        </div>
        {description ? (
          <div
            className={`my-2 ${styles.card_text} text-md md:text-xl md:mb-0 line-height-2 flex-fill flex-grow flex-1`}
            style={{ zIndex: 999999 }}
          >
            {description}
          </div>
        ) : null}
      </div>
    </div>
  );
};

interface Props {
  className?: string;
  link?: string;
  onClick?: () => void; // Add onClick prop
}

const SlateCard = ({ className, link, onClick, ...childProps }: Props & ChildProps) => {
  if (link) {
    return (
      <Link to={link} className={`${className} text-link`}>
        <SlateCardChild {...childProps} />
      </Link>
    );
  }
  return (
    <div onClick={onClick} className={`${className} text-link`}>
      <SlateCardChild {...childProps} />
    </div>
  );
};

export default SlateCard;
