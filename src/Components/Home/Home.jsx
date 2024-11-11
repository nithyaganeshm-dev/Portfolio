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
              <h1 className='home-title'>Hey, I'm Nithyaganesh, An Aspiring Full Stack Developer</h1>
              <p className='home-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quos placeat alias aperiam neque, adipisci dolore. Quos quod ipsa autem?</p>
              <Button homeBtn="home-btn-one">Book a Call</Button>
              <Button homeBtn="home-btn-two">Download Resume</Button>
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
