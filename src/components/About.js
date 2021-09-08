import React from "react";

function About() {
  return (
    <div className="mt-5">
      <section className="Intro">
        <div className="container">
          <div className="row">
          <div className="image col-6">
              <img
                src="https://static.wixstatic.com/media/2e2983_6da39c1068d6491e812dfb9068ba598e~mv2_d_1800_1800_s_2.png/v1/fill/w_383,h_382,al_c,q_85,usm_0.66_1.00_0.01/VNRVJIET.webp"
                alt=""
                width="500px"
                height="400px"
              />
            </div>
            <div className="about col-6">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt deserunt consectetur nostrum, omnis eaque ea fugit amet
                vitae ducimus consequuntur nam maxime enim dolorem explicabo,
                voluptatem similique impedit rerum laboriosam voluptatibus sint.
                Porro possimus ipsa hic cum maxime aperiam culpa voluptatum a
                praesentium, exercitationem amet, nobis quis facere optio eos.
              </p>
              <a href="#" className="btn btn-info" role="button">
                <i className="far fa-file"></i> contact us
              </a>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
