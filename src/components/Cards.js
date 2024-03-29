import React from 'react';
import { Card } from 'primereact/card';
import { FaUserMd, FaUsers } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import '../css/Cards.css';

const Cards = ({ width, height, icon, type, title, count, doctorList, reports, appointments }) => {
  let iconComponent;
  let iconClassName = 'icon-style'; // CSS class for icon styles

  switch (icon) {
    case 'doctor':
      iconComponent = <FaUserMd className={iconClassName} />;
      break;
    case 'patient':
      iconComponent = <FontAwesomeIcon icon={faWheelchair} className={iconClassName} />;
      break;
    case 'employee':
      iconComponent = <FaUsers className={iconClassName} />;
      break;
    default:
      iconComponent = null;
  }
  
  if (type === "title") {
    return (
      <Card style={{ width: width, height: height, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {iconComponent && <div style={{ marginRight: '10px' }}>{iconComponent}</div>}
          <div>
            {title}
            <div>{count}</div>
          </div>
        </div>
      </Card>
    );
  } else if (type === "appointments") {
    return (
      <Card style={{ width: width, height: height }}>
        Appointments Card Content
        {appointments.map(appointment => (
        <div>
         <h3>{appointment.no}</h3>
         <h3>{appointment.id_no}</h3>
         <h3>{appointment.time}</h3>
         <h3>{appointment.name}</h3>
         <h3>{appointment.age}</h3>
         <h3>{appointment.gender}</h3>
         </div>
        ))}
      </Card>
    );
  } else if (type === "reports") {
    return (
      <Card style={{ width: width, height: height }}>
        Reports Card Content
        {reports.map(report => (
          <div>
         <h3>{report.details}</h3>
         <h3>{report.date}</h3>
         </div>
        ))}
      </Card>
    );
  } else if (type === "doctorlist") {
    return (
      <Card className="card-container" style={{ width: width, height: height }}>
        <h3 className='heading'>Doctor List</h3>
        {doctorList.map(doctor => (
        <div key={doctor.id} className="doctor-entry">
          <div className="doctor-info">
            <span className="doctor-name">{doctor.name}</span><br />
            <span className="department">{doctor.department}</span>
          </div>
          <div className="doctor-status">
            <span className={`status ${doctor.status.toLowerCase()}`}>{doctor.status}</span>
          </div>
        </div>
        ))}
      </Card>
    );
  } else {
    // Default card if type doesn't match any condition
    return (
      <Card style={{ width: width, height: height }}>
        Default Card Content
      </Card>
    );
  }
};

export default Cards;
