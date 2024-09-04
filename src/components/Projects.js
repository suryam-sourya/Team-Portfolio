import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Ecommerce from "../assets/img/capitalshop-free-template-353x278.jpg";
import Fitcloth from "../assets/img/Fitcloth.png";
import Sth from "../assets/img/Sth.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: Ecommerce,
    },
    {
      title: "Fitcloth",
      description: "Design & Development",
      imgUrl: Fitcloth,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Sth,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Our Work</h2>
                  <p>At CodeDploy, we specialize in end-to-end website development, from building full-scale company websites for small businesses to creating personalized portfolios for students and individuals. We also offer professional logo design services to help businesses establish a strong brand identity. With numerous successful projects already deployed and a growing list of happy customers, we take pride in delivering high-quality digital solutions that drive business growth.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bgimg" />
    </section>
  );
}