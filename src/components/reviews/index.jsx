import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody,CardHeader,FormGroup,Progress, Nav,Table,Button,NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { CreateARecipe,Recipe,View,ExtraLargeTables,LargeTable,Edit,Update,Delete,SmallTable,ExtraSmallTable,DefaultTable } from "../../constant";
import { Target, Info, CheckCircle, PlusCircle } from 'react-feather';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Reviews = () => {
    return (
        <Fragment>
            <Breadcrumb parent="reviews" title="Reviews"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Review</h5><span>All user review</span>

                                    <div className="text-right">
                    <FormGroup className="mb-0 mr-0"></FormGroup>
                  </div>
                            </CardHeader>

                        
                            <div className="table-responsive">
                                <Table size="xl">
                                    <thead>
                                        <tr>
                                            <th>{"#"}</th>
                                            <th>{"Image"}</th>
                                            <th>{"Rating"}</th>
                                            <th>{"Description"}</th>
                                            <th>{"Author"}</th>
                                            <th>{"Recipe"}</th>
                                            <th>{"Flagged"}</th>
                                           
                                            <th>{"Action"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"1"}</th>
                                            <td>{"img"}</td>
                                            <td>{"5"}</td>
                                            <td>{"Very nice"}</td>
                                            <td>{"Jane Doe"}</td>
                                            <td>{"Rice Stew"}</td>
                                           
                                            <td>{"No"}</td>
                                            
                                            <td className="">
                            <Button color="primary" size="lg"><i className="fa fa-pencil"></i> {Edit}</Button>
                            <Button color="" size="lg"><i className="fa fa-eye"></i> {View}</Button>
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

export default Reviews;