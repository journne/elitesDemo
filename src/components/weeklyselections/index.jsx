import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Form,Card,CardHeader,CardBody,FormGroup,Label,Input} from 'reactstrap'
import {CustomRadio,InlineCheckbox,CustomCheckbox, PrimaryState,BrandState,SuccessState,AnimatedCheckboxButtons,SquareCheckbox, Default,Disabled,Checked,RadioStates,CheckboxStates,SolidCheckbox,AnimatedRadioButtons,Option,DatePickers,SelectDateWithTime,CustomDateFormat,TodayButton,DisableDaysOfWeek,SpecificDateRange,MinDate,MaxDate,DateRange,InlineVersion,DisableDatepicker,SelectTimeOnly} from "../../constant";


import DatePicker from "react-datepicker";



const WeeklySelections = (props) =>  {


  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())

  const handleChange = date => {
    setstartDate(date);
  };

  const addDays = date => {
    setstartDate(date, 4);
  };

  // eslint-disable-next-line
  const setEndDate = date => {
    setendDate(date);
  };

  






    return (
      <Fragment>
        <Breadcrumb parent="Form" title="Recipes and Weeks"/>
        <Container fluid={true}>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <h5>Weekly Recipe Selection</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <FormGroup className="form-row mb-0">
                          <label className="col-md-6 col-form-label text-right">Week Selector</label>
                          <div className="col-md-6">
                            <div className="datepicker-here" data-language="en">
                              <DatePicker className="form-control digits"
                                selected={startDate}
                                onChange={handleChange}
                                inline
                              />
                            </div>
                          </div>
                        </FormGroup>
                </Row>
              </CardBody>
            </Card>
          </Col>



          <Col md="6">
            <Card>
              <CardHeader>
                <h5>Meal Information</h5>
              </CardHeader>
              <CardBody>
              <Row>
                  <Col md="12">
                  <Col sm="12 pl-0">
                    <h5>Date</h5>
                  </Col>
                    <Label className="d-block" for="chk-ani">
                      <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked/>{Option} {"1"}
                    </Label>
                    <Label className="d-block" for="chk-ani1">
                      <Input className="checkbox_animated" id="chk-ani1" type="checkbox"/>{Option} {"2"}
                    </Label>
                    <Label className="d-block" for="chk-ani2">
                      <Input className="checkbox_animated" id="chk-ani2" type="checkbox" defaultChecked/>{Option} {"3"}
                    </Label>
                    <Label className="d-block" for="chk-ani3">
                      <Input className="checkbox_animated" id="chk-ani3" type="checkbox"/>{Option} {"4"}
                    </Label>
                  </Col>
                </Row>
               
                <Row>
                <Col md="12">
                <Col sm="12 pl-0">
                    <h5>Meals</h5>
                  </Col>
                <div className="date-picker">
                      <Form className="theme-form">
                    <FormGroup className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                      <div className="radio radio-primary">
                        <Input id="radioinline1" type="radio" name="radio1" value="option1"  />
                        <Label className="mb-0" for="radioinline1">2-Person<span className="digits"> {""}</span></Label>
                      </div>
                      <div className="radio radio-primary">
                        <Input id="radioinline2" type="radio" name="radio1" value="option1"  />
                        <Label className="mb-0" for="radioinline2">Family Box<span className="digits"> {""}</span></Label>
                      </div>
                      
                    </FormGroup>
                    </Form>
                          </div>
                  </Col>
                  </Row>
           
                <Row>
                 <Col md="12">
                 <Col sm="12 pl-0">
                    <h5>Time Frame</h5>
                  </Col>
                    <div className="date-picker">
                      <Form className="theme-form">
                        <FormGroup className="form-row">
                          <label className="col-sm-3 col-form-label text-right">Start Date</label>
                          <div className="col-xl-5 col-sm-9">
                            <DatePicker className="form-control digits" showPopperArrow={false} selected={startDate} showTimeSelect dateFormat="Pp" />
                          </div>
                          </FormGroup>
                          </Form>
                          </div>
                          </Col>
                </Row>
              

             
                <Row>
                 <Col md="12">
                    <div className="date-picker">
                      <Form className="theme-form">
                        <FormGroup className="form-row">
                          <label className="col-sm-3 col-form-label text-right">End Date}</label>
                          <div className="col-xl-5 col-sm-9">
                            <DatePicker className="form-control digits" showPopperArrow={false} selected={startDate} showTimeSelect dateFormat="Pp" />
                          </div>
                          </FormGroup>
                          </Form>
                          </div>
                          </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
}

export default WeeklySelections;