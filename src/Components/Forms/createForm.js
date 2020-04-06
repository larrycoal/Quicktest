import React from 'react'
import { Field } from 'redux-form'

const createForm = () => {

    renderInput = ({ label, input }) => {
        return (
            <div className="">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    return (
        <form className="" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
            <div className="field">
                <Field name={this.props.testName} component={this.renderInput} label={this.props.label} />
                <Field name={this.props.author} component={this.renderInput} label={this.props.author} />
                <button className="submit-test">Submit</button>
            </div>
        </form>
    )

}
export default createForm