

const Features = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <h2 className="text-center mb-4">Features</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Fast</h5>
              <p className="card-text">Vite provides lightning-fast startup and hot reload.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Type Safe</h5>
              <p className="card-text">TypeScript gives you confidence while coding.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Responsive</h5>
              <p className="card-text">Bootstrap ensures your site looks great on all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
