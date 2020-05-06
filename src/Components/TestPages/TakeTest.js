import React from 'react'
import { fetchQuestion } from '../../Actions'
import { connect } from 'react-redux'

import '../stylesheet/main.css'



class TakeTest extends React.Component {
    state = {
        num: 0,
        result:0,
        total:0
    }
    componentDidMount = () => {
        const { testId, testname } = this.props.match.params
        this.props.fetchQuestion(testId, testname)
    }
    checkAnswer=(val,answer)=>{
        let result = this.state.result
        let num = this.state.num
        num++
        if(val === answer){
           result++
           
        }
        this.setState({result,num})
        console.log(this.state.total)
    }
    renderTest = () => {
        if (!this.props.quiz) {
            return
        }
        let quiz = Object.values(this.props.quiz)
          if(this.state.total !== quiz.length){
              this.setState({total:quiz.length})
          }
        return (
            <div>
                <div>
                <h1>{quiz[this.state.num].question}</h1>
                </div>
                <div className="test-options">
                    <button onClick={()=>this.checkAnswer(quiz[this.state.num].OptionA,quiz[this.state.num].Answer)}>{quiz[this.state.num].OptionA}</button>
                    <button onClick={()=>this.checkAnswer(quiz[this.state.num].OptionB,quiz[this.state.num].Answer)}>{quiz[this.state.num].OptionB}</button>
                    <button onClick={()=>this.checkAnswer(quiz[this.state.num].OptionC,quiz[this.state.num].Answer)}>{quiz[this.state.num].OptionC}</button>
                    <button onClick={()=>this.checkAnswer(quiz[this.state.num].OptionC,quiz[this.state.num].Answer)}>{quiz[this.state.num].OptionC}</button>
                    {this.state.result}
                </div>
            </div>
        )
    }

    render() {

        return (
            <div className="test-main">
                {this.renderTest()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.question)
    return { quiz: state.question }
}

export default connect(mapStateToProps, { fetchQuestion })(TakeTest)