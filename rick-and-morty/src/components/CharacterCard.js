import React from 'react';
import { Card, CardImgOverlay, CardTitle, CardText, CardImg, Col } from 'reactstrap';

const CharacterCard = ({name, status, image}) => {
    return(
        <Col sm="12" md={{ size: 4 }}>
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
        </Col>
    );
}

export default CharacterCard;