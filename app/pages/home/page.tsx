import HomeArticle from "./components/HomeArticle";

export default function Home() {
  return (
    <div className="relative w-full  h-full overflow-hidden items-center flex justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute min-w-full min-h-full max-w-none -z-10"
      >
        <source
          src="/videos/pexels-dan-cristian-pădureț-3024112-1920x1080-50fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="max-w-[1500px] flex justify-end w-full">
        <HomeArticle />
      </div>
    </div>
  );
}
