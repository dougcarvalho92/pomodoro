import { LucideProps } from "lucide-react";
import React from "react";
import { Link, LinkProps } from "react-router";
import styles from "./styles.module.css";
type MenuLinkProps = LinkProps & {
  Icon: React.ComponentType<LucideProps>;
};
export default function MenuLink({ Icon, ...props }: MenuLinkProps) {
  return (
    <Link className={styles.menu__link} {...props}>
      <Icon />
    </Link>
  );
}
