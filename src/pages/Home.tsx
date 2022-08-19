import { Text } from '@blueprintjs/core';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import CategoryItem from "../components/CategoryItem";
import ProductCard from '../components/ProductCard';
import { categories, products } from "../mockDatas/categories";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 160px 80px;
`;

const CategoryFilterWrapper = styled.div`
  width: 280px;
`;

const MainWrapper = styled.div`
  width: calc(100% - 280px);
  .wrapper-title {
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 36px;
    color: #4B508C;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100;
  justify-content: space-between;
  padding-bottom: 36px;
`;

export default () => {
  const [selectedFilter, setSelecteedFilter] = useState<Array<string>>([]);
  
  const filterCategoryChanged = useCallback((
    key: string,
    checked: boolean,
  ) => {
    if (checked) {
      selectedFilter.push(key);
      setSelecteedFilter(selectedFilter);
    } else {
      const temp = selectedFilter.filter(item => item != key);
      setSelecteedFilter(temp);
    }
  }, []);
  return (
    <Container>
      <CategoryFilterWrapper>
        {categories.map((category: any) => {
          return (
            <CategoryItem
              isChecked={selectedFilter.includes(category)}
              label={category}
              onCheckChange={filterCategoryChanged}
            />
          );
        })}
      </CategoryFilterWrapper>
      <MainWrapper>
        <Text className='wrapper-title'>Featured Cleanses</Text>
        <CardWrapper style={{borderBottom: '1px solid rgba(0, 0, 0, 0.27)'}}>
          {products.filter((product: any) => product.isFeature && (selectedFilter.length? selectedFilter.includes(product.category): true)).map((product: any) => {
            return (
              <ProductCard product={product} />
            );
          })}
        </CardWrapper>
        <Text className='wrapper-title' style={{marginTop: 36}}>All Products</Text>
        <CardWrapper>
          {products.filter((product: any) => selectedFilter.length? selectedFilter.includes(product.category): true).map((product: any) => {
            return (
              <ProductCard product={product} />
            );
          })}
        </CardWrapper>
      </MainWrapper>
    </Container>
  );
}
