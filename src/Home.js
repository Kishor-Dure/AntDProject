import Dashboard from './Dashboard';
import { Row, Col } from 'antd';

const Home = () => {
  return (
    <Dashboard>
      <Row justify='center' className='home'>
        <Col lg={10} sm={24}>
          <img
            src='https://ksreddy.netlify.app/ksrimg4.svg'
            alt='img'
            height='400'
          />
        </Col>
        <Col lg={24} sm={24}>
          <h3 style={{ color: 'tomato' }}>Hi, I am Kishor</h3>
          <p>I am a React.Js Developer</p>
        </Col>
      </Row>
    </Dashboard>
  );
};

export default Home;
