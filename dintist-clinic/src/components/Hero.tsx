

const backgroundUrl = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80';

const Hero = () => (
  <section
    className="text-center py-5 position-relative"
    style={{
      backgroundImage: `url(${backgroundUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '60vh',
      color: '#fff',
    }}
  >
    <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(0, 80, 180, 0.5)', zIndex: 1}}></div>
    <div className="container position-relative" style={{zIndex: 2}}>
      <h1 className="display-4 mb-3">Welcome to Dintist Dental Clinic</h1>
      <p className="lead mb-4">We care about your smile.</p>
      <a href="/book" className="btn btn-lg btn-primary">Book an Appointment</a>
    </div>
  </section>
);

export default Hero;
