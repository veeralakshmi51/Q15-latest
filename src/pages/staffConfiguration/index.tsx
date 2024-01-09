import React, { useEffect, useState } from "react";
import Calendar from "../../components/calendar";
import './staffconfig.css'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ShiftTab from "../../components/shiftTab";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import{
  FaCalendar
} from 'react-icons/fa'
import { getAllRNIncharge, getAllSocialWorkers, getPSConfigByDate } from "../../slices/thunk";
import ErrorPopup from "../../components/errorPopup";
import { closeErrorPopup } from "../../slices/staffConfiguration/reducer";
import { getOrgByID } from "../../slices/organization/thunk";
const Q15StaffConfiguration = () => {
    const dispatch = useDispatch<any>()
    const { loading, shiftData, isOpen, errorMsg } = useSelector((state: any) => state.PSConfig)
    const { shiftStartTime, shiftDuration } = useSelector((state: any) => state.Org)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const startTime = new Date(`2000-01-01T${shiftStartTime}`);
    const endTime = new Date(startTime.getTime() + 8 * 60 * 60 * 1000);
    const shiftAEndTime = `${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;

    const BEndTime = new Date(endTime.getTime() + 8 * 60 * 60 * 1000);
    const shiftBEndTime = `${BEndTime.getHours().toString().padStart(2, '0')}:${BEndTime.getMinutes().toString().padStart(2, '0')}`;
    const formatDate = (date: any) => {
        const options = { day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const handleDateChange = (e: any) => {
        try {
            const newDate = new Date(e.target.value);
            setSelectedDate(newDate);
        } catch (error) {
            alert(error)
        }
    };

    

    const renderDateBoxes = () => {
        const dateBoxes = [];

        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(selectedDate);
            currentDate.setDate(selectedDate.getDate() + i);

            dateBoxes.push(
                <Calendar
                    key={i}
                    day={currentDate.toLocaleDateString('en-US', { weekday: 'short' })}
                    date={formatDate(currentDate)}
                    onClick={() => setSelectedDate(currentDate)}
                    isSelected={selectedDate?.toDateString() === currentDate.toDateString()}
                />
            );
        }

        return dateBoxes;
    };

    const closePopup = () => {
        dispatch(closeErrorPopup())
    }
    useEffect(() => {
        const date = selectedDate.getDate().toString().padStart(2, '0');
        const year = selectedDate.getFullYear();
        const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
        getPSConfigByDate(dispatch, `${year}${month}${date}`)
    }, [selectedDate])

    useEffect(() => {
      getAllRNIncharge(dispatch, 'Registered Nurses', 'sFLIzAZzrg')
      getAllSocialWorkers(dispatch, 'Social Workers', 'sFLIzAZzrg')
      getOrgByID(dispatch, 'sFLIzAZzrg')
    }, [dispatch])
    return (
        <React.Fragment>
            {loading && <Loader />}
            <div className="w-100" style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className="d-flex gap-3">
                    {renderDateBoxes()}
                    <div className="inpMain">
                        <input
                            type="date"
                            value={selectedDate.toISOString().split('T')[0]}
                            onChange={handleDateChange}
                        />
                        <FaCalendar className="react-icons"/>
                    </div>
                </div>
            </div>
            <div className="py-3 ml-0 mt-0">
                <Tabs className='d-flex'>
                    <TabList className="vertical-tab-list">
                        <Tab>Shift A</Tab>
                        <Tab>Shift B</Tab>
                        <Tab>Shift C</Tab>
                    </TabList>

                    <div className="tab-content-container">
                        <TabPanel>
                            <ShiftTab
                                shiftName={shiftData[0]?.shiftName}
                                endTime={shiftAEndTime}
                                startTime={shiftStartTime}
                                slot1Time={shiftData[0]?.schedule[0]?.time}
                                slot2Time={shiftData[0]?.schedule[1]?.time}
                                slot3Time={shiftData[0]?.schedule[2]?.time}
                                slot4Time={shiftData[0]?.schedule[3]?.time}
                                selectedIncharge={shiftData[0]?.rnIncharge}
                                selectedSWorker1={shiftData[0]?.schedule[0]?.staff1}
                                selectedSWorker2={shiftData[0]?.schedule[1]?.staff1}
                                selectedSWorker3={shiftData[0]?.schedule[2]?.staff1}
                                selectedSWorker4={shiftData[0]?.schedule[3]?.staff1}
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShiftTab
                                shiftName={shiftData[1]?.shiftName}
                                endTime={shiftBEndTime}
                                startTime={shiftAEndTime}
                                slot1Time={shiftData[1]?.schedule[0]?.time}
                                slot2Time={shiftData[1]?.schedule[1]?.time}
                                slot3Time={shiftData[1]?.schedule[2]?.time}
                                slot4Time={shiftData[1]?.schedule[3]?.time}
                                selectedIncharge={shiftData[1]?.rnIncharge}
                                selectedSWorker1={shiftData[1]?.schedule[0]?.staff1}
                                selectedSWorker2={shiftData[1]?.schedule[1]?.staff1}
                                selectedSWorker3={shiftData[1]?.schedule[2]?.staff1}
                                selectedSWorker4={shiftData[1]?.schedule[3]?.staff1}
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShiftTab
                                shiftName={shiftData[2]?.shiftName}
                                endTime={shiftStartTime}
                                startTime={shiftBEndTime}
                                slot1Time={shiftData[2]?.schedule[0]?.time}
                                slot2Time={shiftData[2]?.schedule[1]?.time}
                                slot3Time={shiftData[2]?.schedule[2]?.time}
                                slot4Time={shiftData[2]?.schedule[3]?.time}
                                selectedIncharge={shiftData[2]?.rnIncharge}
                                selectedSWorker1={shiftData[2]?.schedule[0]?.staff1}
                                selectedSWorker2={shiftData[2]?.schedule[1]?.staff1}
                                selectedSWorker3={shiftData[2]?.schedule[2]?.staff1}
                                selectedSWorker4={shiftData[2]?.schedule[3]?.staff1}
                            />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
            <ErrorPopup
              closePopup={closePopup}
              errorMsg={errorMsg}
              open={isOpen}
            />
        </React.Fragment>
    );
};

export default Q15StaffConfiguration;
