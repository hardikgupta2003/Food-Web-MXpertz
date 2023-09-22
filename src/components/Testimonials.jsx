import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import '../App.css'

import {LiaStarSolid} from "react-icons/lia"

const Testimonials = () => {
  return (
    <div>

<MDBContainer
      fluid
      className="py-5 bg-orange-200"
      style={{  color: "#000" }}
      
    >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
        <p className=' font-extrabold text-xl hover-underlinee'>Testimonials</p>
          <h3 className="fw-bold m-4">What People are saying!</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard>
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                
              </div>
              <h5 className="font-weight-bold">Teresa May</h5>
              <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center gap-1"
              >
                <li>
                    <LiaStarSolid color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard>
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                
              </div>
              <h5 className="font-weight-bold">Maggie McLoan</h5>
              <h6 className="font-weight-bold my-3">
                Photographer at Studio LA
              </h6>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center gap-1"
              >
                <li>
                    <LiaStarSolid color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Autem, totam debitis suscipit saepe sapiente magnam officiis
                quaerat necessitatibus odio assumenda perferendis labore
                laboriosam.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard>
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                
              </div>
              <h5 className="font-weight-bold">Alexa Horwitz</h5>
              <h6 className="font-weight-bold my-3">
                Front-end Developer in NY
              </h6>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center gap-1"
              >
                <li>
                    <LiaStarSolid color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                <li>
                    <LiaStarSolid  color="gold"/>
                </li>
                
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Cras sit amet nibh libero, in gravida nulla metus scelerisque
                ante sollicitudin commodo cras purus odio, vestibulum in tempus
                viverra turpis.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    </div>
  )
}

export default Testimonials