import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody,CardHeader,FormGroup,Progress, Nav,Table,Button,NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { CreateARecipe,Recipe,View,ExtraLargeTables,LargeTable,Edit,Update,Delete,SmallTable,ExtraSmallTable,DefaultTable } from "../../constant";
import { Target, Info, CheckCircle, PlusCircle } from 'react-feather';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Recipes = () => {
    return (
        <Fragment>
            <Breadcrumb parent="meals" title="Plans"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{Recipe}</h5><span>{"Subcategory of meals"}</span>

                                    <div className="text-right">
                    <FormGroup className="mb-0 mr-0"></FormGroup>
                    <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/app/plans/lifestyleCreate`}>{CreateARecipe}</Link>
                  </div>
                            </CardHeader>

                        
                            <div className="table-responsive">
                                <Table size="xl">
                                    <thead>
                                        <tr>
                                            <th>{"#"}</th>
                                            <th>{"Image"}</th>
                                            <th>{"Meal Name"}</th>
                                            <th>{"Duration"}</th>
                                            <th>{"Lifestyle"}</th>
                                            <th>{"Cal per serving"}</th>
                                            <th>{"Price per serving"}</th>
                                            <th>{"Cuisine"}</th>
                                            <th>{"Action"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"1"}</th>
                                            <td>{"img"}</td>
                                            <td>{"2-Person"}</td>
                                            <td>{"Classic"}</td>
                                            <td>{"This is for a family of 2"}</td>
                                            <td>{"$30"}</td>
                                            <td>{"2"}</td>
                                            <td>{"Fresh"}</td>
                                            
                                            <td className="">
                            <Button color="primary" size="lg"><i className="fa fa-pencil"></i> {Edit}</Button>
                            <Button color="" size="lg"><i className="fa fa-eye"></i> {View}</Button>
                            <Button color="transparent" size="lg"><i className="fa fa-link"></i> {Update}</Button>
                            <Button color="danger" size="lg"><i className="fa fa-trash"></i> {Delete}</Button>
                          </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"2"}</th>
                                            <td>{"img"}</td>
                                            <td>{"Family Box"}</td>
                                            <td>{"Vegetarian"}</td>
                                            <td>{"This is for a family of 4 with vegeterian meals"}</td>
                                            <td>{"$70"}</td>
                                            <td>{"4"}</td>
                                            <td>{"Cooked"}</td>
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

export default Recipes;