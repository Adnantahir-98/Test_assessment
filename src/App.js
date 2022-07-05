import './App.css';
import {useState} from 'react'
import Header from './components/header'
import movies from './data'
import { useSelector, useDispatch } from 'react-redux'
import {Container, Row, Col, Card, Button, Modal, Form} from 'react-bootstrap'
import movie, {updateMovie} from './redux/movie'



function App() {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = (id) => {

    setShow(true)
  }

  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")

  const dispatch = useDispatch()
  const movieList = useSelector((state) => state.movie.value);
  console.log(movieList[0].id)

  return (
    <div className="App">
      <Header />

      <Container>
        <Row>
          {movieList.map((movie) => {
            return (
            <Col md={4}>
              <Card key={movie.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.img} onClick={()=>handleShow(movieList[0].id)} className="img-fluid"  />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            )
          })}
        </Row>
      </Container>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Movie Name..." value={movieList.title} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select>
                  <option>Genre</option>
                </Form.Select>
              </Form.Group>
              <p>Release Date: 238923</p>
              <p>Producer: John</p>
              <p>Active/Inactive</p>
              <Button
              onClick={() => {
                dispatch(
                  updateMovie({ id: movie.id, movie: movieList })
                );
                }}> 
                Update
              </Button>
            </fieldset>
          </Form>
        </Modal.Body>
      </Modal>
      
    </div>
  )
}

export default App
