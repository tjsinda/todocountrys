import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { dataContext } from '../../App';
import { useNavigate } from 'react-router-dom'

function Cards({ data }) {

    const navigate = useNavigate()
    const { setSelected } = useContext(dataContext)

    function goSingle() {
        setSelected(data)
        navigate(`/single/${data.cca3}`)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.flags.png} />
            <Card.Body>
                <Card.Title> <h1>{data.name.common}</h1> </Card.Title>
                <Card.Text>
                    
                </Card.Text>
                <Button onClick={goSingle} variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;