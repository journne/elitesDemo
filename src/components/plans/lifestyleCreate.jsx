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


const Lifestyle = (props) => {

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
              <Col sm="4">
                <Card>
                  <CardBody>
                    <Form className="theme-form" onSubmit={handleSubmit(AddRecipe)}>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Choice</Label>
                            <Input className="form-control" type="text"  name="title" placeholder="Lifestyle Choice" innerRef={register({ required: true })} />
                            <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Status</Label>
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
                            <Label>Date Created</Label>
                            <DatePicker className="datepicker-here form-control"  selected={startDate} onChange={handleStartDate} />
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

export default withRouter(Lifestyle);