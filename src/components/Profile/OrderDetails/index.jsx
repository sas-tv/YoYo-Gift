import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import moment from 'moment';

import { orderDetailsContainer, orderItemContainer, orederItemTextContainer } from './index.module.css';
import { Heading } from '@chakra-ui/react';

const OrderDetails = ({ orders }) => {
  return (
    <div className={orderDetailsContainer}>
      <h1>
        <FontAwesomeIcon icon={faHistory} />
        Order History
      </h1>

      {!orders || orders.length === 0 ?
        <Heading size="md">No orders to show!</Heading>
      :
        <>
          {orders.map((order, index) => {
            const { name, image, orderDate, email} = order;
            return (
              <div key={index} className={orderItemContainer} 
                style={index === orders.length - 1 ? { borderBottom:'2px solid black' } : {}}>
                <Image alt={name} src={image} width={100} height={50}  />
                <div className={orederItemTextContainer}>
                  <span>Name: {name}</span>
                  <span>Ordered On: {moment(orderDate).format("DD-MMM-YYYY")}</span>
                  <span>Sent To: {email}</span>
                </div>
              </div>
            )
          })}
        </>
      }
    </div>
  );
};

export default OrderDetails;