import React, {useState} from 'react';
import { connect } from 'react-redux';
import {fetchAllData} from '../actions';
import Word from './Word'

const WordSearch = props => {

    const [searchWord, setSearchWord] = useState('')

    if (props.isFetching) {
        return (
            <div>
                <h4>...LOADING...</h4>
            </div>
        );
    }

    const handleChange = e => {
        setSearchWord(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div style={{paddingBottom: '15%'}}>
        <div style={{padding: '25% 0 15% 0'}}>
            <form onSubmit={onSubmit}>
            <input 
            class = 'input'
            placeholder = 'find a definition'
            style = {{width: '80%'}}
            onChange={handleChange} 
            value={searchWord}
            name='searchWord'
            type='text'/>

            <button style={{marginLeft: '2%', fontWeight: 'bold'}} class='button is-success' 
            onClick = {() => props.fetchAllData(searchWord)}>Search</button>
            </form>

        </div>
         <Word />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        characters: state.characters
    };
}

export default connect(
mapStateToProps, 
{ fetchAllData }
)(WordSearch);