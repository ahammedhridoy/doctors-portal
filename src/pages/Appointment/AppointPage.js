import React, {useState} from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentDetails from './AppointmentDetails';
import AppointSchedule from './AppointSchedule';
import "react-day-picker/dist/style.css";

const AppointPage = () => {
  const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentDetails date={date} setDate={setDate}></AppointmentDetails>
            <AppointSchedule date={date}></AppointSchedule>
            <Footer></Footer>
        </div>
    );
};

export default AppointPage;