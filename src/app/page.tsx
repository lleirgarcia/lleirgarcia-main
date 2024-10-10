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
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'lleir | QA Lead, QA Tech Lead, SDET, Coach, App Developer',
  description:
    "Here you are gonna find: who I am, my cultural mindset, how I can help you, and some of the applications I've created in my free time.: Coding - the art, the science, and the passion.",
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="container">
        {/* <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> */}
          {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> */}
            {/* <svg className="bi me-2" width="40" height="32"></svg> */}
            {/* <Image className="d-block mx-auto mb-4 rounded-circle" src="/images/ico.png"  alt="My portrait" width="50"  height="50"></Image> */}
          {/* </a> */}

          {/* <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact me</a></li>
          </ul> */}
        {/* </header> */}
      </div>

      <div className="px-4 py-5 my-5 text-center">
        <Image
          className="d-block mx-auto mb-4 rounded-circle"
          src="/images/me.jpeg"
          alt="My portrait"
          width="300"
          height="275"
        />
        <h1 className="display-5 fw-bold">
          I'm <span className="dark-orange">lleïr garcia</span>
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Here you are gonna find: <strong><b>who I am</b></strong>, 
            <strong><b>my cultural mindset</b></strong>, <strong><b>how I can help you</b></strong>, 
            and some of the <em>applications I've created</em> in my free time.
          </p>
        </div>
      </div>

      <div className="container py-4">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 rounded-3 custom-bg-dark-blue">
              <h2 className='dark-orange'>Quality Assurance +10 years</h2>
              <p>
                Professional dedicated to software quality for over 10 years. Always striving for excellence, first with 
                team members and then with tools and applications. I have worked in various environments and on different 
                applications, which has given me the opportunity to enhance my knowledge. I have developed multiple roles, 
                including test developer, QA, and lead.
              </p>
              <div>
                <a
                  href="https://www.linkedin.com/in/lleirgarcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gray icon-spacing bi bi-info-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="LinkedId"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
                <a
                  href="https://drive.google.com/file/d/19S5DTCl3oBCjXI8p9HI2NYeFQaysNI0G/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gray icon-spacing"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="My summary"
                >
                  <ArticleIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 custom-bg-dark-pink rounded-3">
              <h2 className='dark-orange'>Knowledge sharing IT industry</h2>
              <p>
                I help professionals through my social networks by sharing my knowledge about the industry, roles, projects, 
                and how to improve themselves. I provide guidance on what to focus on, and additionally, I advise and train 
                juniors to start off on the right foot in the software industry through a paid service.
              </p>
              <div>
                <a 
                  className="link-gray icon-spacing"
                  href="https://www.youtube.com/@aqualityguy"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="My Youtube Channel"
                >
                  <YouTubeIcon fontSize="large" />
                </a>
                <a
                  href="https://www.instagram.com/lleirgb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gray icon-spacing"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="My Instagram"
                >
                  <InstagramIcon fontSize="large" />
                </a>
                <a
                  href="https://www.tiktok.com/@aqualityguy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gray icon-spacing"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="My TikTok"
                >
                  <MusicVideoIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">My values</h2>
      </div>
      <div className="container px-4 py-5 d-flex flex-row flex-wrap gap-3 justify-content-center" id="featured-3">
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header dark-orange">Curiosity</div>
          <div className="card-body">
            <p className="card-text">
              Always reading, learning, trying, and seeking something beyond the <em>status quo</em> in both my job and personal life.
            </p>
          </div>
        </div>
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header dark-orange">Leadership</div>
          <div className="card-body">
            <p className="card-text">
              Without personal and group leadership, nothing is possible. Success in life starts with knowing where I want to go and how I can reach it.
            </p>
          </div>
        </div>
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header dark-orange">Self development</div>
          <div className="card-body">
            <p className="card-text">
              Believer in personal responsibility to develop as much as possible in order to unleash the potential we all have.
            </p>
          </div>
        </div>
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header dark-orange">Quality</div>
          <div className="card-body">
            <p className="card-text">
              Due to my professional work, I see in every part of the world a possibility for improvement.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">My apps</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <Image
                className="d-block mx-auto mb-4 rounded-circle"
                src="/images/braintor.jpg"
                alt="Braintor"
                width="50"
                height="50"
              />
            </div>
            <h3 className="fs-2 dark-orange">Braintor</h3>
            <p>
              <strong>Braintor</strong> It's an application focused on content creation. It only requires a text (usually a large one), 
              and Braintor assists you in your creative process by providing possible LinkedIn posts, Shorts for Reels, TikTok, or YouTube, 
              or simply giving you a detailed summary of the text.
              <em>* It is useful for YouTube video transcriptions to generate and create content from them.</em>
            </p>
            <a
              href="https://yto-ptimizer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gray icon-spacing bi bi-info-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Visit webpage"
            >
              <LinkIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/lleirgarcia/braintor-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gray icon-spacing bi bi-info-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="GitHub repository"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <div className="feature col">
            <div className="d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <Image
                className="d-block mx-auto mb-4 rounded-circle"
                src="/images/braintor.jpg"
                alt="Thecoach"
                width="50"
                height="50"
              />
            </div>
            <h3 className="fs-2 dark-orange">The Soft Coach</h3>
            <p>
              This app is based on my service as an <strong>autonomous consultant coach</strong> for people who are seeking their first job or looking 
              to improve the conditions of their current job.
            </p>
            <p>App is under construction. </p>
            <a href="#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">
              Release date (2025)
            </a>
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
