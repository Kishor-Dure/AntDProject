import Dashboard from './Dashboard';
import { Form, Input, Radio, Select, Button, DatePicker } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Forms = () => {
  const onSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <Dashboard>
      <div>
        <h3>AntD Forms with Validation</h3>
        <Form layout='vertical' className='p-2' onFinish={onSubmitForm}>
          <Form.Item
            label='First Name'
            name='firstName'
            required
            rules={[{ required: true, min: 2 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Last Name'
            name='lastName'
            required
            rules={[{ required: true, min: 2 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            required
            rules={[{ required: true, type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Gender'
            name='gender'
            required
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value='male'>Male</Radio>
              <Radio value='female'>Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label='Date Of Birth'
            name='dob'
            required
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label='Department'
            name='department'
            required
            rules={[{ required: true }]}
          >
            <Select>
              <Radio value='computer'>Computer</Radio>
              <Radio value='electrical'>Electrical</Radio>
              <Radio value='civil'>Civil</Radio>
              <Radio value='mechanical'>Mechanical</Radio>
              <Radio value='bio'>Bio</Radio>
            </Select>
          </Form.Item>
          <Form.Item
            label='Address'
            name='address'
            required
            rules={[{ required: true, min: 10 }]}
          >
            <TextArea style={{ width: '100%', height: '100px' }} />
          </Form.Item>
          <Button htmlType='submit'>Register</Button>
        </Form>
      </div>
    </Dashboard>
  );
};

export default Forms;
