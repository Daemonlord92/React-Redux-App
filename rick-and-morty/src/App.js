import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { getData} from "./actions/dataGrabber"

function App(props) {

    useEffect(() => {
        props.getData()
    }, [])
  return (
    <div className="App">
        <p>{props.data}</p>
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

const mapDispatchToProps = {
    getData
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (App);
