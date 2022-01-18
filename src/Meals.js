import { Col, Input, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dashboard from './Dashboard';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [dupmeals, setDupmeals] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          'https://themealdb.com/api/json/v1/1/filter.php?a=canadian'
        );
        const data = await response.data.meals;
        setMeals(data);
        setDupmeals(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const onFilterdMeals = (e) => {
    const input = e.target.value;

    const filterData = dupmeals.filter((meal) => {
      return meal.strMeal.toLowerCase().includes(input.toLowerCase());
    });
    setMeals(filterData);
  };

  return (
    <Dashboard>
      <div className='m-2'>
        <Input
          placeholder='SearchItems'
          style={{ width: '30%', marginLeft: 50 }}
          onChange={onFilterdMeals}
        />
        <Row gutter={16} justify='center' className='mt-5'>
          {meals.map((meal) => (
            <Col lg={5} sm={24} className='text-center bs m-3'>
              <p>{meal.strMeal}</p>
              <img src={meal.strMealThumb} alt='' height='200' />
              <p>ID: {meal.idMeal}</p>
            </Col>
          ))}
        </Row>
      </div>
    </Dashboard>
  );
};

export default Meals;
