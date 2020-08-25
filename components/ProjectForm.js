import React, {useState, useEffect} from "react";
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';

const ProjectForm = ({onSubmitData}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register({name: 'startDate'})
    register({name: 'endDate'})
  }, [register])

  const handleStartDate = (date) => {
    setStartDate(date);
    setValue('startDate', date);
  }

  const handleEndDate = (date) => {
    setEndDate(date);
    setValue('endDate', date);
  }

  const handleDateChange = (dateType, setDate) =>  date => {
    setValue(dateType, date);
    setDate(date);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          ref={register} 
          type="text" 
          name="title"
          className="form-control" 
          id="title"/>
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          ref={register}
          type="text"
          name="company"
          className="form-control"
          id="company"
        />
      </div>

      <div className="form-group">
        <label htmlFor="website">Website</label>
        <input
          ref={register}
          type="text"
          name="website"
          className="form-control"
          id="website"
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">location</label>
        <input
          ref={register}
          type="text"
          name="location"
          className="form-control"
          id="location"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          className="form-control"
          id="description"
        />
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange('startDate', setStartDate)}/>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <div>
          <DatePicker
            disabled={!endDate}
            showYearDropdown
            selected={endDate}
            onChange={handleDateChange('endDate', setEndDate)}/>
        </div>
      </div>
      
      <div className="form-group">
        { endDate &&
          <button className="btn btn-danger mr-2"
          onClick={() => handleDateChange('endDate', setEndDate)(null)}
            type="button">
            No End Date
          </button>
        }
        { !endDate &&
          <button className="btn btn-success"
            onClick={() => handleDateChange('endDate', setEndDate)(new Date(new Date().setHours(0,0,0,0)))}
            type="button">
            Set End Date
          </button>
        }
      </div>

      <button className="btn btn-outline-success">Create</button>
    </form>
  );
};

export default ProjectForm;
