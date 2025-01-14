import React from 'react';
import FieldForm from '../components/dashboard/FieldForm';
import FieldList from '../components/dashboard/FieldList';

const Dashboard = () => (
  <div className="container mx-auto">
  <h1 className="text-3xl font-bold text-blue-500 my-4">Dashboard</h1>
  {/* <FieldForm /> */}
  <FieldList />
</div>
);

export default Dashboard;