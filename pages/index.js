import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import {useGetUser} from '../actions/user';

const ROLES = ['Computer Scientist', 'Finance & Economics Major', 'Perpetual Learner']

const  Index = () => {

  const {data, loading} = useGetUser();

  return (
      <BaseLayout user={data} loading={loading} className="cover">
        <div className="main-section">
          {/* <div className="background-image">
            <img src="/images/background-index.png" />
          </div> */}
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section mt-5">
                  <div className={`flipper`}>
                    <div className="back">
                      {/* <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div> */}
                      <img className="image" src="/images/isometric_tech.jpg"/> 
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Get to know more about me
                  </h1>
                </div>
                <Typed 
                  loop
                  strings={ROLES}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|">
                </Typed>
                <div className="hero-welcome-bio">
                  <h1>
                    I'm a programmer fanatic!
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="section-2">
            <h1 style={{fontWeight: "bold"}}>Check my blog in the block section and explore about programming your self!</h1>
          </Container>
          <Container fluid className="section-3">
            <h1>Checkout my youtube channel and my other social media accounts!</h1>
            <div className="social-media container">
              <p>Youtube Accounts: Arturo Filio Villa, return Help</p>
              <p>Instagram Account: return_help</p>
              <p>Twitter Account: return Help</p>
            </div>
          </Container>
          </div>
      </BaseLayout>  
  )
}

export default Index;