const BlueBg = ({ roundDir, stickySide, extra, left }) => {
  const shadowDirection = left
    ? "shadow-[-120vmax_0_0_100vmax_hsl(231deg,69%,60%)] lg:shadow-[-110vmax_0_0_100vmax_hsl(231deg,69%,60%)] 2xl:shadow-[-107vmax_0_0_100vmax_hsl(231deg,69%,60%)]"
    : "shadow-[120vmax_0_0_100vmax_hsl(231deg,69%,60%)]  lg:shadow-[110vmax_0_0_100vmax_hsl(231deg,69%,60%)] 2xl:shadow-[107vmax_0_0_100vmax_hsl(231deg,69%,60%)]";
  return (
    <div
      className={`absolute bottom-0 ${stickySide} -z-10 h-1/2 w-[90%] ${roundDir} bg-softBlue ${extra} clip ${shadowDirection}`}
    ></div>
  );
};

export default BlueBg;
