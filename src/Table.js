import { Input, Table } from 'antd';
import { useState } from 'react';
import Dashboard from './Dashboard';
import moment from 'moment';

const Tables = () => {
  const studentsData = [
    {
      firstName: 'Kishor',
      lastName: 'Dure',
      gender: 'male',
      dob: '08-07-2000',
      marks: 94,
      country: 'United States',
    },
    {
      firstName: 'Atharva',
      lastName: 'Dure',
      gender: 'male',
      dob: '08-07-2015',
      marks: 99,
      country: 'India',
    },
    {
      firstName: 'Ajinkya',
      lastName: 'Dure',
      gender: 'male',
      dob: '08-07-2011',
      marks: 90,
      country: 'India',
    },
    {
      firstName: 'Girish',
      lastName: 'Kamble',
      gender: 'female',
      dob: '08-07-2015',
      marks: 99,
      country: 'India',
    },
    {
      firstName: 'Priyanka',
      lastName: 'Chougule',
      gender: 'female',
      dob: '30-11-1994',
      marks: 100,
      country: 'India',
    },
  ];

  const studentColumns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        {
          text: 'Male',
          value: 'male',
        },
        {
          text: 'Female',
          value: 'female',
        },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      sorter: (a, b) =>
        moment(a.dob, 'DD-MM-YYYY') - moment(b.dob, 'DD-MM-YYYY'),
    },
    {
      title: 'Marks',
      dataIndex: 'marks',
      sorter: (a, b) => a.marks - b.marks,
    },
  ];

  const [tableData, setTableData] = useState(studentsData);

  function searchTable(searchKey) {
    let tempdata = studentsData.filter((student) =>
      JSON.stringify(student).toLowerCase().includes(searchKey.toLowerCase())
    );

    setTableData(tempdata);
  }

  return (
    <Dashboard>
      <div className='tables'>
        <h3>Ant Tables</h3>

        <Input
          style={{ width: '40%' }}
          placeholder='Search students'
          onChange={(e) => {
            searchTable(e.target.value);
          }}
        />

        <Table columns={studentColumns} dataSource={tableData} />
      </div>
    </Dashboard>
  );
};

export default Tables;
