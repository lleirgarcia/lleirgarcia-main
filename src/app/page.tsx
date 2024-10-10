import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';

export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
    </Head>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"></svg>
            <span className="fs-4">poner un logo</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact me</a></li>
          </ul>
        </header>
      </div>

      <div className="px-4 py-5 my-5 text-center">
        <Image className="d-block mx-auto mb-4 rounded-circle" src="/images/me.jpeg"  alt="My portrait" width="300"  height="275"></Image>
        <h1 className="display-5 fw-bold">
          I'm <span className="dark-orange">lleïr garcia</span>
        </h1>
        <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Here you are gonna find: <strong>who I am</strong>, <strong>my cultural mindset</strong>, <strong>how I can help you</strong>, and some of the <em>applications I've created</em> in my free time.
        </p>
          {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div> */}
        </div>
      </div>

<div className="container py-4">
      <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 rounded-3 custom-bg-dark-blue">
          <h2 className='dark-orange'>Quality Assurance +10 years</h2>
          <p>Professional dedicated to softwatre quality for more than 10 years. Seeking always the excelence, first with the team members and second with tools and applications.
            Working in differents environments and applications that have bring me the opportunity to improve my knowledge. Developing different roles as a test developer, QA and Lead.
          </p>
          <div>
          <a
            href="https://www.linkedin.com/in/lleirgarcia/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-gray icon-spacing"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://drive.google.com/file/d/19S5DTCl3oBCjXI8p9HI2NYeFQaysNI0G/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-gray icon-spacing"
          >
            <ArticleIcon fontSize="large" />
          </a>
          </div>          
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 custom-bg-dark-pink rounded-3">
          <h2 className='dark-orange'>Knowledge sharing IT industry</h2>
          <p>I helps professionals trought my social networks sharing my knowledge about the industry, roles, projects and how to improve
              themselves, what to focus and more over I advise and train juniors to get off on the right foot in the software industry in a payed service.
          </p>
          <div>
          <a 
            className="link-gray icon-spacing"
            href="https://www.youtube.com/@aqualityguy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/lleirgb/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-gray icon-spacing"
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a
            href="https://www.tiktok.com/@aqualityguy"
            target="_blank"
            rel="noopener noreferrer"
            className="link-gray icon-spacing"
          >
            <MusicVideoIcon fontSize="large" />
          </a>
          </div>
        </div>
      </div>
    </div>
</div>

<div className="container px-4 py-5" id="featured-3">
<h2 className="pb-2 border-bottom">My values</h2></div>
  <div className="container px-4 py-5 d-flex flex-row flex-wrap gap-3 justify-content-center" id="featured-3">
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header dark-orange">Criosity</div>
      <div className="card-body">
        <p className="card-text">Always reading, learning, trying and looking for something else outside the <em>statu quo</em> in my job and my personal life.</p>
      </div>
    </div>
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header dark-orange">Leadership</div>
      <div className="card-body">
        <p className="card-text">Withotu own and group leadership nothing is possible, succes in life starts in where I wanna go and how I can reach it.</p>
      </div>
    </div>
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header dark-orange">Self development</div>
      <div className="card-body">
        <p className="card-text">Believer of the own responsaiblity to develop as a human being as much as possible to bring the potential that all we have.</p>
      </div>
    </div>
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header dark-orange">Quality</div>
      <div className="card-body">
        <p className="card-text">Due my profesional job I see in every part of this world a possibility to improve.</p>
      </div>
    </div>

  </div>



      <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">My apps</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="d-inline-flex align-items-center justify-content-center   fs-2 mb-3">
          <Image className="d-block mx-auto mb-4 rounded-circle" src="/images/braintor.jpg"  alt="Braintor" width="50"  height="50"></Image>
        </div>
        <h3 className="fs-2 dark-orange">Braintor</h3>
        <p><strong>Braintor</strong> it's an application focused in content creation. It only needs a text (usually a big one) and Braintor helps you in your creative process
          bringing you posible LinkedIn posts, Shorts for Reels, Tiktok or Youtube or just to bring you a full detail about the text.
          <em>* Is it useful in Youtube video transcriptions in order to get and create content from them.</em></p>
        <a className="btn btn-primary" target="_blank" href="https://yto-ptimizer.vercel.app/" role="button">Use it</a>
        
      </div>
      <div className="feature col">
        <div className="d-inline-flex align-items-center justify-content-center fs-2 mb-3">
          <Image className="d-block mx-auto mb-4 rounded-circle" src="/images/braintor.jpg"  alt="Thecoach" width="50"  height="50"></Image>
        </div>
        <h3 className="fs-2  dark-orange">The Soft Coach</h3>
        <p>This app is based in my service as an <strong>autonomus consultant coach</strong> for people who is seeking for the first job or is looking for 
          improve their conditions of their current job.</p>
        <p> App is under construction. </p>
        <a href="#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Release date (2025)</a>
      </div>
    </div>
  </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 lleirgarcia.com. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}