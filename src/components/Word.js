import React from 'react';
import { connect } from 'react-redux';
import { favoriteWord } from '../actions'

const Word = props => {
    return (
        <div>
            {props.wordResult.length ?
            props.wordResult.map(word => {
                return (
                    props.wordResult[0] === word ?
                    <div style={{paddingBottom: '2%'}} key = {word.meta.uuid}>
                       
                        <div className= 'main'>
                        <i class="first far fa-star" onClick={()=>props.favoriteWord(word)}/>
                        <h1 className= 'main-header'>{word.hwi.hw}</h1>
                        <p style={{fontWeight: 'bold', fontStyle:'italic'}}>{word.fl}</p>
                        </div>
                        <div className= 'main-word'>
                        <ul>
                        {word.shortdef.map(def => {
                           return <li key={Date.now()}>-{def}</li>
                        })}
                        </ul>
                        </div>
                    </div>
                    :
                    <div style={{paddingBottom: '2%'}} key = {word.meta.uuid}>
                        <div>
                        <i class="second far fa-star" onClick={() => props.favoriteWord(word)}/>
                        <h1 className= 'secondary-header'>{word.hwi.hw}</h1>
                        <p style={{fontWeight: 'bold', fontStyle:'italic'}}>{word.fl}</p>
                        </div>
                        <div>
                        <ul>
                        {word.shortdef.map(def => {
                           return <li key={Date.now()}>-{def}</li>
                        })}
                        </ul>
                        </div>
                    </div>
                )
            })
            : props.error.length ? 
            <p>sorry, that word does not exist yet.</p> : null}

        </div>
       
    );
};

const mapStateToProps = state => {
    return {
        wordResult: state.wordResult,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { favoriteWord })(Word)