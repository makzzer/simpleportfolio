import Layout from "../Components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";

console.log(experiences);

const Index = () => (
  <Layout>
    {/** Header Card */}
    <header className="row">
      <div className="md-col-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/THIS.JPG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Maximiliano Sanchez</h1>
              <h3 className="text-info">Fullstack Developer</h3>
              <p>
                Hello! I’m Maximiliano Sánchez, an IT Specialist with 9 years of
                experience in the field. My expertise spans from customer
                relations to product design, software development, debugging,
                testing, and maintenance. I thrive in dynamic environments and
                excel at adapting to changes, making me a valuable team player.
                Additionally, I’m deeply committed to continuous learning and
                personal growth.
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**Second section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1 className="mb-2">Experience</h1>
            <hr></hr>

            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3>
                  <h5>{`${from} - ${to}`}</h5>
                  <p className="text-justify">{description}</p>
                </li>
              ))}
            </ul>
            <Link className="btn btn-light" href="/">
              Know more
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/**Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-light text-center">Portfolio</h1>
            </div>
            {/**aca voy a hacer una tarjeta de prueba */}

            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={image} alt="" className="card-img-top"></img>
                  </div>
                  <div className="card-body bg-dark text-light x">
                    <h3 className="text-center">{name}</h3>
                    <p>{description}</p>
                    <Link href="#">Visit site</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      
      
      {/**aca es el boton para ver mas projectos */}
        <div className="text-center pt-2">
          <Link href="/portfolio" className="btn btn-outline-light text-dark">More projects
          </Link>
        </div>
      
      </div>
    </div>
  </Layout>
);

export default Index;

{
  /** para formatear el codigo es --> option+shift+F */
}
