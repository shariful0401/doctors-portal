import { is } from 'date-fns/locale';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';

const ManageDoctors = () => {
  const {data: doctors, isLoading} = useQuery('doctor', () => fetch('http://localhost:5000/doctor',{
    headers:{
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h2 className='text-2xl'>Manage Doctors:{doctors.length}</h2>
    </div>
  );
};

export default ManageDoctors;