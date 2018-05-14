import React, {Component} from 'react';
import {
    Col,
    Row
} from 'reactstrap';

class Recording extends Component {

    handleChange = function() {
        console.log('trying to handle');
    }
    render () {
        return (
            <Row>
                <Col md='3' className="input-wrapper">
                    <Row>
                        <Col md='2'>
                          <label className="orchid-label">1</label>
                        </Col>
                        <Col md='10'>
                            <input placeholder='First Name' type='text' onChange={this.handleChange}/>
                        </Col>
                    </Row>
                </Col>
                <Col md='3' className="input-wrapper">
                    <Row>
                        <Col md='2'>
                          <label className="orchid-label">1</label>
                        </Col>
                        <Col md='10'>
                            <input placeholder='Middle Name' type='text' onChange={this.handleChange}/>
                        </Col>
                    </Row>
                </Col>
                <Col md='3' className="input-wrapper">
                    <Row>
                        <Col md='2'>
                          <label className="orchid-label">1</label>
                        </Col>
                        <Col md='10'>
                            <input placeholder='Last Name' type='text' onChange={this.handleChange}/>
                        </Col>
                    </Row>
                </Col>
                <Col md='3' className="input-wrapper">
                    <Row>
                        <Col md='2'>
                          <label className="orchid-label">1</label>
                        </Col>
                        <Col md='10'>
                            <input placeholder='Service' type='text' onChange={this.handleChange}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Recording;