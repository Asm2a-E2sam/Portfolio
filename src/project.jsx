import './App.css'
function Project(args) {
  return (
    <div className='box shadow-lg mx-1 my-3 position-relative rounded' style={{ backgroundColor: `#353a40` }}>
      <img src={`./assets/${args.img}`} alt=""  className="rounded w-100 h-100" />
      <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white" style={{ background: `#353a40B3`, opacity: 0, transition: 'opacity 0.3s ease', borderRadius: '8px' }}>
        <h3>{args.title}</h3>
        <p>{args.details}</p>
        <a href={`${args.url}`} className="btn btn-dark rounded my-btn" style={{ background: `#353a40`}}>Go to Website</a>
      </div>
    </div>
  );
}

export default Project;
