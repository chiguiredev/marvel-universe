import { clsx } from "clsx";
import styles from "./CharacterGrid.module.scss";
import utilityStyles from "@/shared-styles/utilities.module.scss";

type CharacterGridProps = {
  children: React.ReactNode;
};

export function CharacterGrid({ children }: CharacterGridProps): JSX.Element {
  return (
    <section className={utilityStyles.full_width_container}>
      <div
        className={clsx(styles.character_grid, utilityStyles.max_width_content)}
      >
        {children}
      </div>
    </section>
  );
}
