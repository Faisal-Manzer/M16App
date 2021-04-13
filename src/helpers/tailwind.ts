import { create } from "tailwind-rn";
import { classnames, TArg } from "tailwindcss-classnames";

// @ts-ignore
import styles from "../../styles.json";

const { tailwind, getColor } = create(styles);

const c = (...classes: TArg[]) => tailwind(classnames(...classes));

export { c, tailwind, getColor };
export default c;
