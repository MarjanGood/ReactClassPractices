// import React from 'react';
// import styles from './Button.module.css';

// const Button = (props) => {
//   console.log(props);
//   return (
  
//     <button
//       type={props.type || 'button'}
//       className={`${styles.button}`}
//       onClick={props.onClick}
//       disabled={!props.isfilled}
//     >
//       {props.children}
//     </button>
//   );
// };
// export default Button;


import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  console.log(props);
  return (
  
    <button
      type={props.type || 'button'}
      className={`${styles.button}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;