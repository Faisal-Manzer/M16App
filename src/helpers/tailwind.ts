import { create } from 'tailwind-rn';
import classNames from 'classnames';
import { ClassName } from 'interfaces/application';

// @ts-ignore
import styles from '../../styles.json';

const { tailwind, getColor } = create(styles);

const c = (...classes: ClassName[]) => tailwind(classNames(...classes));

export { c, tailwind, getColor };
export default c;
