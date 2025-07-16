

const backgroundUrl = 'https://media.istockphoto.com/id/2160564088/photo/portrait-of-happy-man-sitting-at-dentist-chair-in-modern-clinic-and-smiling-patient-enjoying.webp?a=1&b=1&s=612x612&w=0&k=20&c=xwVINKAzVY9LaoqB0Eky6nt-9tHHhiB8YZrs-DJ-mzc=';

const Hero = () => {
  return (
    <section
      className="text-center py-5 position-relative hero-bg"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        color: '#fff',
      }}
    >
      {/* Overlay that covers the whole image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 80, 180, 0.5)',
          zIndex: 1,
        }}
      ></div>
      <div
        className="hero-text position-relative mx-auto"
        style={{
          zIndex: 2,
          borderRadius: '1rem',
          padding: '2rem',
          display: 'inline-block',
          marginTop: '3rem',
          maxWidth: '700px',
        }}
      >
        <h1 className="display-4 mb-3 hero-text">Welcome to Dintist Dental Clinic</h1>
        <p className="lead mb-4 hero-text">We care about your smile.</p>
        <a href="/book" className="btn btn-lg btn-primary">Book an Appointment</a>
      </div>
    </section>
  );
};

export default Hero;
