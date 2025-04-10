import { LucideProps } from "lucide-react";
import React from "react";
import { LinkProps } from "react-router";
import styles from "./styles.module.css";
type MenuLinkProps = LinkProps & {
  Icon: React.ComponentType<LucideProps>;
};
export default function MenuLink({ Icon, ...props }: MenuLinkProps) {
  return (
    <a className={styles.menu__link} {...props}>
      <Icon />
    </a>
  );
}
