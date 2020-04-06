import React,{useEffect,useState} from 'react'
import {fetchTest} from '../../Actions'
import {connect} from 'react-redux'


class TakeTest extends React.Component{
    componentDidMount =async()=>{
        const {testId,testname}=this.props.match.params
       const response= await this.props.fetchTest(testId,testname)
       console.log(response)
    }
    render(){
        

        return(
            <div>
                hello
            </div>
        )
    }
}
export default connect(null,{fetchTest})(TakeTest)