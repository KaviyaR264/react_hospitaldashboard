import React, { useEffect } from 'react';
import '../css/Main.css'; 
import Cards from './Cards';
import cardData from '../card.json';
import { getStartDoctorList } from '../store/Slices/DoctorListSlice';
import { getStartReports } from '../store/Slices/ReportsSlice';
import { getStartAppointments } from '../store/Slices/AppointmentSlice';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const { data: doctorListData } = useSelector((state) => state?.doctorList);
  const { data: reportsData } = useSelector((state) => state?.reports);
  const { data: appointmentsData } = useSelector((state) => state?.appointments);
  useEffect(() => {
    dispatch(getStartDoctorList());
    dispatch(getStartReports());
    dispatch(getStartAppointments());
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="left-panel">
        <div className="left-subpanel">
        {cardData.map((card, index) => (
            <div key={index}>
              <Cards
                width="250px"
                height="95px"
                icon={card.cardname} // Pass cardname as prop
                title={card.title} // Pass title as prop
                count={card.count} // Pass count as prop
                type="title"
              />
            </div>
          ))}
        </div>
        <div className="left-subpanel">
          <div><Cards width="520px" height="400px" type="appointments" appointments={appointmentsData} /></div>
          <div><Cards width="250px" height="400px" type="reports" reports={reportsData}/></div>
        </div>
      </div>
      <div className="right-panel">
        <Cards width="250px" height="500px" type="doctorlist" doctorList={doctorListData} />      
      </div>
    </div>
  );
};

export default Main;
