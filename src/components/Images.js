import React, { useState, useEffect } from "react";
import { Button, Card, Modal, ListGroup } from "react-bootstrap";
import { auth, db } from "./firebase";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
function Images() {
  const [images, setImages] = useState([1, 2, 3]);
  const [type,setType]=useState();
  const [filter,setFilter]=useState("");
  const [likes,setLikes]=useState(0);
  const [dislikes,setDislikes]=useState(0);
  const [decision,setDecision]=useState(true);
  useEffect(() => {
    let isSubscribed = true;
    db.collection("uploads")
      .orderBy("date")
      .onSnapshot((snap) => {
        const list = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImages(list);
        return () => (isSubscribed = false);
      });
  }, []);
  function checktype(e)
  {
    e.preventDefault();
    setFilter(type);
  }
  return (
    <div>
      <h2 className="d-flex justify-content-center text-info">All Images</h2>
      <form onSubmit={(e)=>{
          checktype(e);
      }}>
          <h3 style={{marginLeft:"5rem"}}>Choose design</h3>
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
      <button className="btn-primary" style={{marginLeft:"5rem"}}>Submit</button>
      </form>
      <section className="p-5">
        <div className="container-fluid content-row">
          <div className="row">
            {
                filter?(
            images &&
              images.map((batch, index) => (
                batch.type===filter && 
                <div className="col-3 m-3 " key={index}>
                  <Card className="h-100"  style={{ width: "18rem" }}>
                    <Card.Header>
                      {" "}
                      {batch.name} uploaded on {batch.date}
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        {" "}
                        <img
                          src={batch.image}
                          className="card-img-top"
                          alt="..."
                        />
                      </ListGroup.Item>
                    </ListGroup>
                    
                    <span className="mt-3 mb-3">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-success"
                        style={{ width: "30%" }}
                        onClick={(e)=>{
                            
                            db.collection("uploads").doc(batch.id).update({likes:batch.likes+1})

                            
                          }}
                      >
                        <AiFillLike />
                        <span>{batch.likes}</span>
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-danger"
                        style={{ width: "40%" }}
                        onClick={(e)=>{
                           
                            db.collection("uploads").doc(batch.id).update({dislikes:batch.dislikes+1})
                            
                          }}
                      >
                        <AiFillDislike /> <span>{batch.dislikes}</span>
                      </button>
                    </span>
                  </Card>
                </div>
              ))):(images &&
                images.map((batch, index) => (
                  <div className="col-3 m-3" key={index}>
                    <Card className="h-100" style={{ width: "18rem" }}>
                      <Card.Header>
                        {" "}
                        {batch.name} uploaded on {batch.date}
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          {" "}
                          <img
                            src={batch.image}
                            className="card-img-top"
                            alt="..."
                          />
                        </ListGroup.Item>
                      </ListGroup>
                      <span className="mt-3 mb-3">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className="btn btn-success"
                          style={{ width: "30%" }}
                          onClick={(e)=>{
                            
                            db.collection("uploads").doc(batch.id).update({likes:batch.likes+1})

                            
                          }}
                        >
                          <AiFillLike />
                          <span>{batch.likes}</span>
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className="btn btn-danger"
                          style={{ width: "40%" }}
                          onClick={(e)=>{
                         
                            db.collection("uploads").doc(batch.id).update({dislikes:batch.dislikes+1})
                            
                          }}
                        >
                          <AiFillDislike /> <span>{batch.dislikes}</span>
                        </button>
                      </span>
                    </Card>
                  </div>
                )))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Images;
