import video from "../assets/bg_video.mp4";

function Home() {
  return (
    <div className="relative flex items-center justify-center h-screen">
  <video
    src={video}
    // autoPlay
    loop
    muted
    className="absolute inset-0 object-cover h-full w-full sm:object-fill"
  ></video>

  <div className=" z-20 absolute bottom-20 left-1 p-4 text-white text-left  ">Im text<br/>
  <a className="text-black z-20 bg-white font-bold py-2 px-4  text-justify">Explore the Westeros World!</a>
  </div>
</div>
  );
}

export default Home;
