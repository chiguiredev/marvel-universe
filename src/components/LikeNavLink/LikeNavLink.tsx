import Link from "next/link";
import Image from "next/image";
import styles from "./LikeNavLink.module.scss";

type LikeNavLinkProps = {
  to: string;
};

export const LikeNavLink = ({ to }: LikeNavLinkProps) => {
  return (
    <Link href={to}>
      <div className={styles.like_nav_link__content}>
        <Image
          src="/images/heart_icon.svg"
          alt="heart icon"
          width={24}
          height={24}
        />
        {/* TODO: connect to liked characters */}
        <p>3</p>
      </div>
    </Link>
  );
};
