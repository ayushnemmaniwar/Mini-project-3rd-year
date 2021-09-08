import React, { useState, useEffect } from "react";
import { Button, Card, Modal, ListGroup } from "react-bootstrap";
import { auth, db } from "./firebase";
import { AiFillDislike,AiFillLike } from 'react-icons/ai';
function Myimages() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const [uploads, setUploads] = useState();
  const [type,setType]=useState("uploads");
  const [likes,setLikes]=useState(0);
  const [dislikes,setDislikes]=useState(0);
  const [decision,setDecision]=useState(true);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  useEffect(() => {
    let isSubscribed = true;
    db.collection("uploads").orderBy("date")
      .onSnapshot((snap) => {
        const list = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUploads(list);
        return () => (isSubscribed = false);
      });
  }, []);
  function handleSubmit() {
    console.log(type);
    if (image && type) {
      setShow(false);
      db.collection("uploads").add({
        userid:auth.currentUser.uid,  
        image,
        name:auth.currentUser.displayName,
        date:Date(),
        type,
        likes:0,
        dislikes:0
      })
    } else {
      alert("all details should be filled correctly");
    }
  }
  function ImageUrl(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      var filecontent = reader.result;
      setImage(filecontent);
    };
  }
  return (
    <div>
      <h2 className="d-flex justify-content-center text-info">My Images</h2>

      <section className="p-5">
        <div className="container-fluid content-row">
          <div className="row">
            {uploads &&
              uploads.map((batch, index) => ( 
                batch.userid===auth.currentUser.uid && (
                <div className="col-3 m-3" key={index}>
                  <Card className="h-100" style={{ width: "18rem" }}>
                    <Card.Header>Image {index + 1}</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item> <img
                          src={batch.image}
                          className="card-img-top"
                          alt="..."
                        />
                      </ListGroup.Item>
                    </ListGroup>
                    <span className="mt-3 mb-3">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" style={{width:"30%"}}><AiFillLike/><span>{batch.likes}</span></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-danger" style={{width:"40%"}} ><AiFillDislike /> <span>{batch.dislikes}</span></button>
                    </span>
                  </Card>
                </div>)
              ))}

            <div className="col-3 m-3">
              <Card className="h-100" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">Add Image</Card.Title>
                  <Card.Text>
                    <div className="h1 text-center">
                      <Button variant="primary " onClick={handleShow}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                        </svg>
                      </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-info">Add Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }}>
            {/* <Card.Header>Add Slot</Card.Header> */}
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="input-group mb-3 my-3">
                  <input type="file" onChange={ImageUrl} />
                  {/* <label className="input-group-text" htmlFor="inputGroupFile02">
            Image Upload
          </label> */}
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <div className="form-check" style={{marginLeft:"5rem"}}>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={(e)=>setType("Mug art")}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Mug art
        </label>
      </div>
      <div className="form-check" style={{marginLeft:"5rem"}}>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={(e)=>setType("photo frame")}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          photo frame
        </label>
      </div>
      <div className="form-check" style={{marginLeft:"5rem"}}>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={(e)=>setType("Sculpture")}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Sculpture
        </label>
      </div>
      <div className="form-check" style={{marginLeft:"5rem"}}>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={(e)=>setType("Interior Design")}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Interior Design
        </label>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Myimages;
