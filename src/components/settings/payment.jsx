import React, { Fragment,useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader'
import {Container,Row,Col,Card,CardBody,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import DatePicker from "react-datepicker";
import {useForm} from 'react-hook-form'
import {addRecipe} from '../../redux/recipes/action'
import { useDispatch } from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import {MealName,Duration,ProjectTitle,ClientName,ProjectRate,ProjectStatus,ProgressLevel,ProjectSize,Small,Medium,Big,StartingDate,EndingDate,EnterSomeDetails,UploadProjectFile,Add,Cancel,Done,Doing} from '../../constant'
import SimpleMDE from "react-simplemde-editor";
import { MDEEditorExample } from "../../constant";


const Payment = (props) => {

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
        <Breadcrumb parent="settings" title="Payment" /> 
        <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <Form className="theme-form" onSubmit={handleSubmit(AddRecipe)}>
                    
                      
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Sk_Live</Label>
                            <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.client_name && 'Client Name is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>

                       <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Pk_Live</Label>
                            <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.client_name && 'Client Name is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Name</Label>
                            <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.client_name && 'Client Name is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Image</Label>
                            <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.client_name && 'Client Name is required'}</span>
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

export default withRouter(Payment);