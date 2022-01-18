import { Button, Col, Input, Row, Modal } from 'antd';
import { useState } from 'react';
import Dashboard from './Dashboard';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [editInputValue, setEditInputValue] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const addTodoItem = () => {
    setTodoItems([...todoItems, inputValue]);

    setInputValue('');
  };

  const showModal = (index) => {
    setEditInputValue(todoItems[index]);
    setEditIndex(index);
    setIsModalVisible(true);
  };

  const editTodoItem = () => {
    let dupItems = [...todoItems];
    dupItems[editIndex] = editInputValue;

    setTodoItems(dupItems);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteTodoItem = (index) => {
    let dupitems = [...todoItems];

    dupitems.splice(index, 1);

    setTodoItems(dupitems);
  };

  return (
    <Dashboard>
      <div>
        <h3 className='text-center'>
          <b>Todo List</b>
        </h3>
        <Row justify='center'>
          <Col lg={10} sm={24}>
            <div className='flex'>
              <Input
                placeholder='enter Todo'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button className='ml-2' onClick={addTodoItem}>
                Add Todo
              </Button>
            </div>
          </Col>
        </Row>
        <Row justify='center'>
          <Col lg={10} sm={24}>
            {todoItems.map((todo, index) => (
              <div
                key={index}
                className='flex'
                style={{ justifyContent: 'space-between' }}
              >
                <h3>{todo}</h3>
                <div>
                  <Button
                    onClick={() => showModal(index)}
                    className='m-2'
                    type='primary'
                  >
                    Edit
                  </Button>
                  <Button onClick={() => deleteTodoItem(index)} type='danger'>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <Modal
          title='Edit Item'
          visible={isModalVisible}
          onOk={editTodoItem}
          onCancel={handleCancel}
          okText='Edit'
        >
          <Input
            value={editInputValue}
            onChange={(e) => {
              setEditInputValue(e.target.value);
            }}
          />
        </Modal>
      </div>
    </Dashboard>
  );
};

export default TodoList;
