import image1 from '../../assets/images/banner/1.jpg'
import image2 from '../../assets/images/banner/2.jpg'
import image3 from '../../assets/images/banner/3.jpg'
import image4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mb-36">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={image1}
          className="w-full rounded-lg"
        />
        <div className="absolute transform rounded-lg -translate-y-1/2 left-0 right-5 top-1/2 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center ">
          <div className='text-white ml-10 w-1/3'>
          <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
          <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
         <button className="btn btn-warning mb-5">Discover More</button>
          <button className="text-white btn btn-outline md:ml-3">Latest Project</button>
         </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
        <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={image2}
          className="w-full rounded-lg"
        />
        <div className="absolute transform -translate-y-1/2 left-0 right-5 top-1/2 h-full bg-gradient-to-r rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center ">
          <div className='text-white ml-10 w-1/3'>
          <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
          <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
         <button className="btn btn-warning mb-5">Discover More</button>
          <button className="text-white btn btn-outline md:ml-3">Latest Project</button>
         </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide1" className="btn btn-circle"> ❮ </a>
          <a href="#slide3" className="btn btn-circle"> ❯ </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={image3}
          className="w-full rounded-lg"
        />
        <div className="absolute transform -translate-y-1/2 left-0 right-5 top-1/2 h-full bg-gradient-to-r rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center ">
          <div className='text-white ml-10 w-1/3'>
          <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
          <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
         <button className="btn btn-warning mb-5">Discover More</button>
          <button className="text-white btn btn-outline md:ml-3">Latest Project</button>
         </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide2" className="btn btn-circle"> ❮ </a>
          <a href="#slide4" className="btn btn-circle"> ❯ </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={image4}
          className="w-full rounded-lg"
        />
        <div className="absolute transform -translate-y-1/2 left-0 right-5 top-1/2 h-full bg-gradient-to-r rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center ">
          <div className='text-white ml-10 w-1/3'>
          <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
          <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
         <button className="btn btn-warning mb-5">Discover More</button>
          <button className="text-white btn btn-outline md:ml-3">Latest Project</button>
         </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide3" className="btn btn-circle"> ❮ </a>
          <a href="#slide1" className="btn btn-circle"> ❯ </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
