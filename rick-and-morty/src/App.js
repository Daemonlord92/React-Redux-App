import React, { useEffect } from 'react';
import CharacterCard from "./components/CharacterCard";

import { connect } from 'react-redux'
import { getData } from "./actions/dataGrabber"

function App(props) {

    useEffect(() => {
        props.getData()
    }, [])
    console.log(props)
  return (
    <div className="App">
        { props.data.map(character => <p>{character.name}</p>)}
    </div>
  );
}

function mapStateToProps(state) {
    return {
        data: state.data,
        isDataLoading: state.isLoading,
        dataError: state.err
    }
}

//const mapDispatchToProps = dispatch = {
 //   getData
//}

export default connect(
    mapStateToProps,
    { getData }
) (App);
