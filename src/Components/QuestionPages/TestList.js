import React from 'react'
import { Link } from 'react-router-dom'

const TestList = (props) => {
    if (!props.test) {
        return <div>loading</div>
    }
    return Object.values(props.test).map(test => {
        let url = `/quicktest/${test.testName}/${test.userId}`
        return (
            <div className="test-list">
                <div className="test">
                    <span id="test-label">Test Name:</span><span >{(test.testName).toUpperCase()}</span>
                </div>
                <div className="test">
                    <span id="test-label">Created On:</span><span>{test.Date}</span> 
                </div>
                <div className="test">
                    <span id="test-label">Test Link:</span><span>{<Link to={url}>copy link</Link>}</span>
                </div>

            </div>
        )
    })
}
export default TestList