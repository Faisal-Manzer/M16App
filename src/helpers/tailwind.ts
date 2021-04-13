import { create } from 'tailwind-rn';
import classNames from 'classnames';
import { ClassName } from 'interfaces/application';

// @ts-ignore
import styles from '../../styles.json';

const { tailwind, getColor } = create(styles);

const c = classNames;
const t = (...classes: ClassName[]) => tailwind(c(...classes));

export { t, c, tailwind, getColor };
export default t;
