import React from 'react';
import { connect } from 'react-redux';

const FavoriteWord = (props) => {
    return(
        <>
        <div>
        <h1>favorite words</h1>
            {props.favoriteWord ? 
            props.favoriteWord.map(word => 
                <div key = {Date.now()}>
                <p>{word.hwi.hw}</p>
            </div>
            ): null}
        </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        favoriteWord: state.favoriteWord
    };
};

export default connect(
    mapStateToProps, 
    {})(FavoriteWord)