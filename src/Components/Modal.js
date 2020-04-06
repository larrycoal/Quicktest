import React from 'react'
import ReactDom from 'react-dom'
import history from './History'


const Modal = (props) => {
    return ReactDom.createPortal(
        <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div>
                <form onSubmit={props.onSubmit} className="ui form"style={{width:"70%",padding:"5%"}}>
                    <div className="field" >
                    <label>Author</label>
                    <input type="text" onChange={props.onauthorChange} value={props.author} />
                    </div>
                    <div className="field" >
                    <label>TestName</label>
                    <input type="text" onChange={props.onFormChange} value={props.testName} />
                    </div>
                    <input type="submit" className="ui button primary right" />
                </form>
            </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal