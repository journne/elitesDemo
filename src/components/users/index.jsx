import React, { useState, Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,CardFooter,Card,CardBody,CardHeader,FormGroup,Progress, Nav,Table,Button,NavItem, NavLink, TabContent, TabPane, Modal, ModalHeader,Media,ModalBody, ModalFooter,Form, Label, Input } from "reactstrap"
import { CreateARecipe,Recipe,View,ExtraLargeTables,LargeTable,Edit,Update,Delete,SmallTable,ExtraSmallTable,DefaultTable,BasicModal,Simple,StaticExample,NewMessage,SendMessage,ModalTitle,Close,SaveChanges,VerticallyCentered,TooltipsAndPopovers,UsingTheGrid,SizesModal,LargeModal,SmallModal,ScrollingLongContent,DefaultStyle,COD,Fast,NoBorder,OfferStyleBorder,InlineStyle,Free,Submit,Cancel,VerticalStyle,HorizontalStyle,SolidBorderStyle,Local,XYZSeller,ABCSeller,Standard,DeliveryOption,BuyingOption,VaryingModalContent,BasicFormControl,BasicHTMLInputControl,EdgesInputStyle,FlatInputStyle,RaiseInputStyle,SolidInputStyle,InputSizing,CustomControls,
        EmailAddress,Password,ExampleSelect,ExampleMultipleSelect,ExampleTextarea,SimpleInput,Placeholder,Date,Month, Time,ColorPicker,LargeInput,SmallInput,MaximumLength,CustomSelect,Disabled,Textarea,StaticText,UploadFile,Telephone,DateAndTime,Week,Number,  
      LargeSelect,DefaultSelect,SmallSelect,DefaultInput,URL } from "../../constant";
import { Target, Info, CheckCircle, PlusCircle } from 'react-feather';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Users = () => {
const [modal, setModal] = useState(false);
    const [scrollingmodal, setscrollingModal] = useState(false);
    const [Verticalcenter, setVerticalcenter] = useState(false);
    const [tooltippopover, setTooltipPopover] = useState(false);
    const [grid, setGrid] = useState(false);
    const [VaryingContentone, setVaryingContentone] = useState(false);
    const [VaryingContenttwo, setVaryingContenttwo] = useState(false);
    const [VaryingContentthree, setVaryingContentthree] = useState(false);
    const [Large, setLarge] = useState(false);
    const [Small, setSmall] = useState(false);

    const toggle = () => setModal(!modal);
    const Scrollmodaltoggle = () => setscrollingModal(!scrollingmodal);
    const Verticalcentermodaltoggle = () => setVerticalcenter(!Verticalcenter);
    const Tooltippopovermodaltoggle = () => setTooltipPopover(!tooltippopover);
    const Gridmodaltoggle = () => setGrid(!grid);
    const VaryingContentonetoggle = () => setVaryingContentone(!VaryingContentone);
    const VaryingContenttwotoggle = () => setVaryingContenttwo(!VaryingContenttwo);
    const VaryingContentthreetoggle = () => setVaryingContentthree(!VaryingContentthree);
    const LargeModaltoggle = () => setLarge(!Large);
    const SmallModaltoggle = () => setSmall(!Small);






    return (
        <Fragment>
            <Breadcrumb parent="users" title="All Users"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Users</h5><span>Subscribed Users</span>

                                    <div className="text-right">
                    <FormGroup className="mb-0 mr-0"></FormGroup>
                    <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/app/users/userCreate`}>Create A User</Link>
                  </div>
                            </CardHeader>

                        
                            <div className="table-responsive">
                                <Table size="xl">
                                    <thead>
                                        <tr>
                                            <th>{"#"}</th>
                                            <th>{"Customer"}</th>
                                            <th>{"Plan"}</th>
                                            <th>{"Lifestyle"}</th>
                                            <th>{"# of Recipes"}</th>
                                            <th>{"Delivery Address"}</th>
                                            <th>{"Email"}</th>
                                            <th>{"Phone"}</th>
                                            <th>{"Elites Points"}</th>
                                            <th>{"Action"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"1"}</th>
                                            <td>{"John"}</td>
                                            <td>{"2-Person"}</td>
                                            <td>{"Classic"}</td>
                                            <td>{"3"}</td>
                                            <td>{"45 Johnson St."}</td>
                                            <td>{"Tuesday, June 20, 2020"}</td>
                                            <td>{"On the way"}</td>
                                            <td>{"$30"}</td>
                                           
                                            
                                            <td className="">

                           <Button color="primary" size="lg" onClick={LargeModaltoggle}><i className="fa fa-pencil"></i> {Edit}</Button>
                    
                



                            
                <Button color="" size="lg" onClick={LargeModaltoggle}><i className="fa fa-eye"></i> {View}</Button>
               
                    <Modal isOpen={Large} toggle={LargeModaltoggle} size="lg">
                      <ModalHeader toggle={LargeModaltoggle}>
                        {View}
                      </ModalHeader>
                      <ModalBody>

<Card>
             
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Customer Name</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Email</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" placeholder="Type your title in Placeholder" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{Password}</Label>
                        <Col sm="9">
                          <Input className="form-control" type="password" placeholder="Password input" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{Number}</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="number" placeholder="Number" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{Telephone}</Label>
                        <Col sm="9">
                          <Input className="form-control m-input digits" type="tel" defaultValue="91-(999)-999-999" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{URL}</Label>
                        <Col sm="9">
                          <Input className="form-control" type="url" defaultValue="https://getbootstrap.com" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{DateAndTime}</Label>
                        <Col sm="9">
                          <Input className="form-control digits" id="example-datetime-local-input" type="datetime-local" defaultValue="2018-01-19T18:45:00" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{Date}</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="date" defaultValue="2018-01-01" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{Month}</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="month" defaultValue="2018-01" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{Week}</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="week" defaultValue="2018-W09" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{Time}</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="time" defaultValue="21:45:00" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label pt-0">{ColorPicker}</Label>
                        <Col sm="9">
                          <Input className="form-control" style={{ height: '35px' }} type="color" defaultValue="#563d7c" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">
                          {MaximumLength}
                        </Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" placeholder="Content must be in 6 characters" maxLength="6" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label pt-0">{StaticText}</Label>
                        <Col sm="9">
                          <div className="form-control-static">
                            {"Hello !... This is static text"} 
                          
                          </div>
                        </Col>
                      </FormGroup>
                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">{Textarea}</Label>
                        <Col sm="9">
                          <textarea className="form-control" rows="5" cols="5" placeholder="Default textarea"></textarea>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Form>
            </Card>









            <Card>
                    <CardBody>
                <Form className="mega-vertical">
                  <Row>
                    <Col sm="12">
                      <p className="mega-title m-b-5">{DeliveryOption}</p>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio23" type="radio" name="radio1" value="option1" />
                            <Label for="radio23"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                            <p>{"Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-secondary mr-3">
                            <Input id="radio24" type="radio" name="radio1" value="option1" />
                            <Label for="radio24"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Fast} <span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                            <p>{"Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-success mr-3">
                            <Input id="radio25" type="radio" name="radio1" value="option1" />
                            <Label for="radio25"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Standard} <span className="badge badge-success pull-right digits">{"80 INR"}</span></h6>
                            <p>{"Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-info mr-3">
                            <Input id="radio5" type="radio" name="radio1" value="option1" />
                            <Label for="radio5"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Local} <span className="badge badge-info pull-right digits">{Free}</span></h6>
                            <p>{"Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="12">
                      <p className="mega-title m-b-5">{BuyingOption}</p>
                    </Col>
                    <Col sm="6">
                      <Card className="mb-0">
                        <Media className="p-20">
                          <div className="radio radio-warning mr-3">
                            <Input id="radio26" type="radio" name="radio1" value="option1" />
                            <Label for="radio26"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{XYZSeller}<span className="badge badge-warning pull-right digits">{"250 INR"}</span></h6>
                            <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{"5 start rating"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card className="mb-0">
                        <Media className="p-20">
                          <div className="radio radio-danger mr-3">
                            <Input id="radio27" type="radio" name="radio1" value="option1" />
                            <Label for="radio27"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{ABCSeller}<span className="badge badge-danger pull-right digits">{"150 INR"}</span></h6>
                            <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{"1 start rating"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
                    </Card>

                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={toggle}>{Close}</Button>
                        </ModalFooter>
                    </Modal>
                   
                       
                            <Button color="transparent" size="lg"><i className="fa fa-link"></i> {Update}</Button>
                            <Button color="danger" size="lg"><i className="fa fa-trash"></i> {Delete}</Button>
                          </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"2"}</th>
                                            <td>{"Mary"}</td>
                                            <td>{"Family Box"}</td>
                                            <td>{"Vegetarian"}</td>
                                            <td>{"6"}</td>
                                            <td>{"16 Lola Coker St."}</td>
                                            <td>{"Friday, June 15, 2020"}</td>
                                            <td>{"$70"}</td>
                                            <td>{"Packaged"}</td>
                                            <td className="">
                            <Button color="primary" size="lg"><i className="fa fa-pencil"></i> {Edit}</Button>
                            <Button color="green" size="lg"><i className="fa fa-eye"></i> {View}</Button>
                            <Button color="transparent" size="lg"><i className="fa fa-link"></i> {Update}</Button>
                            <Button color="danger" size="lg"><i className="fa fa-trash"></i> {Delete}</Button>
                          </td>
                                        </tr>
                                       
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                   
                </Row>
            </Container>
        </Fragment>
    );
};

export default Users;