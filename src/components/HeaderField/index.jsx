import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from '@mui/material';
import { useContext } from 'react';

import { AppContext } from '../../utils/AppContext';
import { headerContainer, iconContainer } from './index.module.css';

/**
 * This page is a re-usable component and helps the Header component to render accordingly
 * @param {*} redirectValue Handles redirection of the application to a specific page on click on the rendered component
 * @param {*} headerType Type of header, can be h1 or h3
 * @param {*} headerValue Value to be shown after icon in the UI
 * @param {*} icon FontAwesome icon to be shown in UI
 * @returns 
 */
const HeaderField = ({
  redirectValue,
  headerType,
  headerValue,
  icon,
  showBadge
}) => { 
  const { appData: { cartItemsCount }} = useContext(AppContext);
  return (
    <Link href={redirectValue} passHref={true}>
      {headerType === 'h1' ?
        <h1 className={headerContainer}>
          {headerValue}
        </h1>
      : <div className={headerContainer}>
        {showBadge && cartItemsCount !== 0 ?
          <Badge badgeContent={cartItemsCount} color="success" style={{marginRight: '8px'}}>
            {icon && <FontAwesomeIcon icon={icon} className={iconContainer}/>}
          </Badge>
          : ( icon ?
            <FontAwesomeIcon icon={icon} className={iconContainer}/>
            : <></>
        )}
          <h3>{headerValue}</h3>
        </div>
      }
    </Link>
  );
}

export default HeaderField;