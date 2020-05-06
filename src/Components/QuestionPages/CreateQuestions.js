import { Field, reduxForm } from 'redux-form'
import React from 'react'
import { connect } from 'react-redux'
import {addQuestion} from '../../Actions'
import history from '../History'

import '../stylesheet/main.css'

class CreateQuestions extends React.Component {
    state = { Questions: {} }


    renderOptions = ({ input, label }) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }
 
    onQuestionSubmit = async (formvalues) => {
        let Question={
            ...formvalues,
           TestName:this.props.match.params.testName,
            Answer:formvalues[formvalues.Answer],
        }
       await this.props.addQuestion(Question)
       this.props.reset()
    }

    renderForm() {
        return (
            <div className="Q-form">
                <form onSubmit={this.props.handleSubmit(this.onQuestionSubmit)}>
                    <div className="question">
                        <label>Question</label>
                        <Field name="question" component="textarea" />
                    </div>
                    <div className="options">
                        <Field name="OptionA" component={this.renderOptions} label="Options A" />
                        <Field name="OptionB" component={this.renderOptions} label="Options B" />
                        <Field name="OptionC" component={this.renderOptions} label="Options C" />
                        <div>
                        <label>Answer</label>
                            <Field name="Answer" component="select" >
                                <option></option>
                                <option value="OptionA">Option-A</option>
                                <option value="OptionB">Option-B</option>
                                <option value="OptionC">Option-C</option>
                            </Field>
                        </div>
                        <div className="submit-btn">
                        <button className="ui button primary">Submit</button>
                        <button className="ui button danger "onClick={()=>history.push('/')}>Done</button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }

    render() {
        return (
            this.renderForm()
        )
    }
}
const Questions = reduxForm(
    {
        form: "Questions"
    }
)(CreateQuestions)
const mapStateToProps = (state) => {
    return {
        question: state
    }
}
export default connect(mapStateToProps,{addQuestion})(Questions)