import React from 'react';
import { Card, CardImgOverlay, CardTitle, CardText, CardImg, Col } from 'reactstrap';
import Row from "reactstrap/es/Row";

const CharacterCard = ({name, status, image}) => {
    return(
        <Col sm="12" md={{ size: 4 }}>
            <Row>
                <Card style={{border:'solid 2px black', margin: '10px auto'}}>
                    <CardImgOverlay>
                        <CardTitle style={{ border: 'solid 2px black', background: 'grey'}}>
                            {name}
                        </CardTitle>
                        <CardText style={{ border: 'solid 2px black', background: 'grey'}}>
                            {status}
                        </CardText>
                    </CardImgOverlay>
                    <CardImg src={image} />
                </Card>
            </Row>

        </Col>
    );
}

export default CharacterCard;