import React, {Component} from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';

class Recording extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName:'',
            middleName:'',
            lastName:'',
            service:'',
        }
    }

    handleChange = function(props) {
        return function(event) {
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this);
    }

    render () {
        return (
            <div className="card-wrapper">
                <Card>
                    <Row>
                        <Col md='3' className="input-wrapper">
                            <Row>
                                <Col md='12'>
                                    <input placeholder='First Name' type='text' onChange={this.handleChange({inputTitle: 'firstName'})}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <div className="input-description">First Name</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md='3' className="input-wrapper">
                            <Row>
                                <Col md='12'>
                                    <input placeholder='Middle Name' type='text' onChange={this.handleChange({inputTitle: 'middleName'})}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <div className="input-description">Middle Name</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md='3' className="input-wrapper">
                            <Row>
                                <Col md='12'>
                                    <input placeholder='Last Name' type='text' onChange={this.handleChange({inputTitle: 'lastName'})}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <div className="input-description">Last Name</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md='3' className="input-wrapper">
                            <Row>
                                <Col md='12'>
                                    <input placeholder='Service' type='text' onChange={this.handleChange({inputTitle: 'service'})}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <div className="input-description">Service</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>                   
                </Card>
            </div> 
        );
    }
}

export default Recording;