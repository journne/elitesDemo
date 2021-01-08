import React, { Fragment,useState,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader'
import { Typeahead } from 'react-bootstrap-typeahead';
import {Container,Row,Col,Card,CardBody,CardHeader,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import DatePicker from "react-datepicker";
import {useForm} from 'react-hook-form'
import {addRecipe} from '../../redux/recipes/action'
import { useDispatch } from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import {MealName,Duration,StartingDate,EndingDate,Add,Cancel,Done,Doing } from '../../constant'
import SimpleMDE from "react-simplemde-editor";
import { MDEEditorExample } from "../../constant";


const Recipe = (props) => {

const [text,setText] = useState(`Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`)
    const handleChange = () => {
        setText("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.")
    }

    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())

    const handleStartDate = date => {
      setstartDate(date);
    };

    const handleEndDate = date => {
      setendDate(date);
    };
    
    const getUploadParams = ({ meta }) => { 
        return { 
          url: 'https://httpbin.org/post' 
        }
    }
    

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { }

    const AddRecipe = data => {
      if (data !== '') {
        dispatch(addRecipe(data))
        props.history.push(`${process.env.PUBLIC_URL}/app/project/project-list`)
      } else {
        errors.showMessages();
      }
    };

    return (
        <Fragment>
        <Breadcrumb parent="meals" title="Create Recipe" /> 
        <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <Form className="theme-form" onSubmit={handleSubmit(AddRecipe)}>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Title</Label>
                            <Input className="form-control" type="text"  name="title" placeholder="" innerRef={register({ required: true })} />
                            <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Featured</Label>
                            <Input type="select" name="status" placeholder="Select Status" className="form-control digits" innerRef={register({ required: true })}>
                              <option value="Yes">{Done}</option>
                              <option value="No">{Doing}</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>At</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                          <FormGroup>
                            <Label>Description</Label>
                            <Input  type="textarea" className="form-control" name="description" rows="3" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.description && 'Some Details is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Lifestyle</Label>
                            <select className="form-control digits">
                              <option>Vegan</option>
                              <option>Millet</option>
                              <option>Corn</option>
                            </select>
                          </FormGroup>
                        </Col>
                        </Row>  

                   
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>{Duration}</Label>
                            <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.client_name && 'Client Name is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                      <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Ingredients</h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="bloodhound">
                                        <Form className="theme-form">
                                            <FormGroup>
                                                <Typeahead
                                                    id="custom-typeahead"
                                                    allowNew
                                                    multiple
                                                    newSelectionPrefix="Add a new item: "
                                                    options={[]}
                                                    placeholder="Type anything..."
                                                />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Fat (g)</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Saturated Fat (g)</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Unsaturated Fat (g)</Label>
                          <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Carbs (g)</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Fiber (g)</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Sugars (g)</Label>
                          <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Protein (g)</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Others (g)</Label>
                           <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Cholestrol (mg)</Label>
                          <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Lifestyle</Label>
                            <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Season</Label>
                            <Input type="select"  name="progress_level" className="form-control digits" innerRef={register({ required: true })}>
                              <option value="Summer">{"25"}</option>
                              <option value="Winter">{"50"}</option>
                              <option value="Fall">{"70"}</option>
                              <option value="Autumn">{"100"}</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Cuisine</Label>
                            <Input type="select" name="status" placeholder="Select Cuisine" className="form-control digits" innerRef={register({ required: true })}>
                              <option value="African">{Done}</option>
                              <option value="Jamaican">{Doing}</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Calories per serving</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Energy (kJ)</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Sodium (mg)</Label>
                           <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Servings</Label>
                            <select className="form-control digits">
                              <option>2</option>
                              <option>4</option>
                              <option>6</option>
                            </select>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>{StartingDate}</Label>
                            <DatePicker className="datepicker-here form-control"  selected={startDate} onChange={handleStartDate} />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>{EndingDate}</Label>
                            <DatePicker className="datepicker-here form-control"  selected={endDate} endDate={endDate} onChange={handleEndDate} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Categories</Label>
                            <select className="form-control digits">
                              <option>Meat & Vegetable</option>
                              <option>Millet</option>
                              <option>Corn</option>
                            </select>
                          </FormGroup>
                        </Col>
                        </Row>

                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Introduction</Label>
                            <Input  type="textarea" className="form-control" name="description" rows="3" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.description && 'Some Details is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Allergens</Label>
                            <Input  type="textarea" className="form-control" name="description" rows="3" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.description && 'Some Details is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Instructions</Label>
                           <SimpleMDE
                        id="editor_container"
                        onChange={handleChange}
                        value={text}
                        options={{
                            autofocus: true,
                            spellChecker: false
                        }}
                        />
                            <span style={{ color: "red" }}>{errors.description && 'Some Details is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>

                       
                      
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Upload Image File</Label>
                                <Dropzone
                                    getUploadParams={getUploadParams}
                                    onChangeStatus={handleChangeStatus}
                                    maxFiles={1}
                                    multiple={false}
                                    canCancel={false}
                                    inputContent="Drop A File"
                                    styles={{
                                        dropzone: { width: '100%', height: 50 },
                                        dropzoneActive: { borderColor: 'green' },
                                    }}
                                />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup className="mb-0">
                              <Button color="success" className="mr-3">{Add}</Button>
                              <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                              <Button color="danger">{Cancel}</Button>
                              </Link>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Fragment>
    );
}

export default withRouter(Recipe);