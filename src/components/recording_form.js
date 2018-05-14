import React, {Component} from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';

import RecordingContent from './recording_content';

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
            completedForm: false,
            date:'',
            fullName:'',
            company:'',
            address:'',
            jobNum:'',
            project:'',
            fees:'',
            upfrontFee:''
        }
    }

    handleChange = function(props) {
        return function(event) {
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this);
    }

    handleSubmit = function(event) {
        this.setState({completedForm: true});
        event.preventDefault();
    }.bind(this);

    handleClick = function() {
        this.setState({
            completedForm: false,
            date:'',
            fullName:'',
            company:'',
            address:'',
            jobNum:'',
            project:'',
            fees:'',
            upfrontFee:''
        });
    }.bind(this)

    renderButton = function() {
        if(this.state.completedForm){
            return <a className="clear-button" onClick={this.handleClick}>Clear</a>
        }
        return <input type="submit" className="execute-button" value="Execute"/>
    }
 
    render () {

        this.inputData = [
            {placeholder:'Date', prop: 'date', state: this.state.date},
            {placeholder:'Full Name', prop: 'fullName', state: this.state.fullName},
            {placeholder:'Company', prop: 'company', state: this.state.company},
            {placeholder:'Address', prop: 'address', state: this.state.address},
            {placeholder:'Job Number', prop: 'jobNum', state: this.state.jobNum},
            {placeholder:'Project', prop: 'project', state: this.state.project},
            {placeholder:'Fees', prop: 'fees', state: this.state.fees},
            {placeholder:'Upfront Fee', prop: 'upfrontFee', state: this.state.upfrontFee}
        ]
        return (
            <div className="card-wrapper">
                <Card>
                    <form onSubmit={this.handleSubmit} id="recording-form">
                        <Row>
                            {
                            _.map(this.inputData, (data, indexKey) => {
                                return <RecordingInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                            })
                            }
                        </Row>
                        <Row>
                            <Col md="12" className="button-wrapper">
                                {this.renderButton()}
                            </Col>
                        </Row>  
                    </form>
                    <RecordingContent data={this.state}/>                 
                </Card>
            </div> 
        );
    }
}

export default Recording;