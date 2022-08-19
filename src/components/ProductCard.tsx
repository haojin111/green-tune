import { Button, Card, Elevation, Text } from '@blueprintjs/core';
import React from 'react';
import styled from 'styled-components';

import SynergyPng from '../assets/synergy.png';
import EbyanPng from '../assets/ebyan.png';

const images: any = {
  "synergy.png": SynergyPng,
  "ebyan.png": EbyanPng, 
};

const CardWrapper = styled(Card)`
  width: 400px;
  height: 620px;
  padding-bottom: 24px;
  text-align: left;
  border: 0px;
  img {
    border-radius: 12px;
    height: 219px;
    margin-bottom: 16px;
  }
  .title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #000000;
  }

  ul {
    font-weight: 400;
    font-size: 17px;
    height: 149px;
  }

  .currency {
    margin-top: 33px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 22.2529px;
    line-height: 30px;
    color: #2E3A59;
    margin-bottom: 16px;
  }

  .add-to-cart {
    height: 62px;
    width: 100%;
    border-radius: 31px;
    font-size: 19px;
  }
`;
export default (props: {
  product: any;
}) => {
  return (
    <CardWrapper interactive={true} elevation={Elevation.ZERO}>
      <img src={images[props.product.image]} />
      <Text className='title'>{props.product.title}</Text>
      <ul>
        {props.product.description.map((item: string) => {
          return (
            <li>{item}</li>
          );
        })}
      </ul>
      <Text className='currency'>{props.product.price}</Text>
      <Button intent="success" className='add-to-cart'>Add to Cart</Button>
    </CardWrapper>
  );
}
