import HomeArticle from "./components/HomeArticle";

export default function Home() {
  return (
    <div className="relative w-full  h-full overflow-hidden items-center flex justify-center">
      <video
        autoPlay
        loop
        muted
        style={{ objectFit: "cover" }}
        className="absolute min-w-full max-h-full -z-10 
      "
      >
        <source
          src="/videos/pexels-dan-cristian-pădureț-3024112-1920x1080-50fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="max-w-[1500px] flex justify-end w-full mx-[50px]">
        <HomeArticle />
      </div>
    </div>
  );
}
