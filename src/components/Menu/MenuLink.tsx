import React from "react";
import styles from "./styles.module.css";
import { LucideProps } from "lucide-react";
type MenuLinkProps = {
  Icon: React.ComponentType<LucideProps>;
  to: string;
};
export default function MenuLink({ Icon, to }: MenuLinkProps) {
  return (
    <a className={styles.menu__link} href={to}>
      <Icon />
    </a>
  );
}
