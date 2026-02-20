import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  // const className =
  //   'upercase inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 outline-none transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 sm:px-6 sm:py-4';

  const base =
    'uppercase text-sm inline-block rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-800 outline-none transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2  md:px-5 md:py-2.5 text-xs  ',
    secondary:
      'px-4 py-2.5 md:px-6 md:py-2.5 text-sm uppercase inline-block rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300  hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-200 focus:ring-offset-2   disabled:cursor-not-allowed',
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  } else
    return (
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
}

export default Button;
