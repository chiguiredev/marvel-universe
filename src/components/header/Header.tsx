import Image from "next/image";
import { clsx } from "clsx";
import styles from "./Header.module.scss";
import utilityStyles from "@/shared-styles/utilities.module.scss";
import { LikeNavLink } from "../LikeNavLink/LikeNavLink";

export const Header = () => {
  return (
    <header className={clsx(styles.header, utilityStyles.full_width_container)}>
      <div
        className={clsx(
          styles.header__content,
          utilityStyles.max_width_content
        )}
      >
        <Image
          priority
          src="/images/marvel_logo.png"
          alt="marvel company logo"
          width={130}
          height={52}
        />
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <LikeNavLink to="/liked-characters" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
