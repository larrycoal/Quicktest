import React from 'react'
import { connect } from 'react-redux'
import { createTest } from '../../Actions'
import { Field, reduxForm } from 'redux-form'



import '../stylesheet/main.css'



class TestCreate extends React.Component {

    renderInput = ({ label, input }) => {
        return (
            <div className="">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }
    onFormSubmit = (formValues) => {
        this.props.onSubmit()
        const data = {
            Date: new Date().toDateString()
        }
        this.props.createTest({ ...formValues, ...data })
    }

    render() {
        return (
            <div className="">
                <form className="" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    <div className="field">
                        <Field name="testName" component={this.renderInput} label="TESTNAME:" />
                        <Field name="author" component={this.renderInput} label="AUTHOR:" />
                        <button className="submit-test">Submit</button>
                    </div>
                </form>
            </div>
        )
    };
}
const createAuthor = reduxForm({
    form: "testCreate"
})(TestCreate)

export default connect(null, { createTest })(createAuthor)