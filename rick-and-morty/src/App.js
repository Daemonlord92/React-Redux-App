import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CharacterCard from "./components/CharacterCard";

import { connect } from 'react-redux'
import { getData } from "./actions/dataGrabber"

function App(props) {

    useEffect(() => {
        props.getData()
    }, [])
    console.log(props)
  return (
    <Container>
            <Col>
                <Row>
                    <h1>Rick and Morty</h1>
                </Row>
                <Row>
                    { props.data.map(character => <CharacterCard name={character.name} image={character.image} status={character.status} />)}
                </Row>
            </Col>

    </Container>
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
