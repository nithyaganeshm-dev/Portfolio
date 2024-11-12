import Button from '../Buttons/Button'
import './Home.css'
import homeImg from '../../../public/Images/my-image.jpg'

const Home = () => {
  return (
    <div className='bg-home'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className='home-content'>
              <h1 className='home-title'>Hello Everyone, I'm Nithyaganesh</h1>
              <p className='home-description'>I’m from Salem, and I’m currently working on my Bachelor’s in Computer Science and Engineering at the Knowledge Institute of Technology. Tech has always been my passion, and I’ve been especially drawn to Full Stack Development – the MERN stack, in particular. It’s amazing to see how coding can transform ideas into real, impactful solutions.
                I’m always sharpening my skills, and NxtWave Academy has been a huge part of that journey.</p>
              <Button homeBtn="home-btn-one">Book a Call</Button>
              <Button homeBtn="home-btn-two">Download CV</Button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-none d-lg-block">
            <div className="home-image">
              <img src={homeImg} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
