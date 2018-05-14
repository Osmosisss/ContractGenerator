import React, {Component} from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';

function RecordingInput(props) {
    return (
            <Col md='3' className="input-wrapper">
                <Row>
                    <Col md='12'>
                        <input placeholder={props.placeholder} value={props.state} type='text' onChange={props.onChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col md='12'>
                        <div className="input-description">{props.placeholder}</div>
                    </Col>
                </Row>
            </Col>
    )
}

class Recording extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName:'',
            middleName:'',
            lastName:'',
            service:'',
            project:'',
            date:'',
            artist:'',
            organization:''
        }
    }

    handleChange = function(props) {
        return function(event) {
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this);
    }

    render () {

        this.inputData = [
            {placeholder:'First Name', prop: 'firstName', state: this.state.firstName},
            {placeholder:'Middle Name', prop: 'middleName', state: this.state.middleName},
            {placeholder:'Last Name', prop: 'lastName', state: this.state.lastName},
            {placeholder:'Service', prop: 'service', state: this.state.service},
            {placeholder:'Project', prop: 'project', state: this.state.project},
            {placeholder:'Date', prop: 'date', state: this.state.date},
            {placeholder:'Artist', prop: 'artist', state: this.state.artist},
            {placeholder:'Organization', prop: 'organization', state: this.state.organization}
        ]
        return (
            <div className="card-wrapper">
                <Card>
                    <Row>
                        {
                        _.map(this.inputData, (data, indexKey) => {
                            return <RecordingInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                        })
                        }
                    </Row>                   
                </Card>
            </div> 
        );
    }
}

export default Recording;