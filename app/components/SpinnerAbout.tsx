import Image
 from "next/image";
const  Spinner = () => {
  return (
  <>
    <div className=''>
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <p className="text-[#111111] f-p22 text-2xl">Shatermt.com<span className="f-satoshi">/</span>about<span className="f-satoshi">-</span>me</p>
        <div className="progress-box">
      <div className='progress mt-9'></div>
      <div className="progress-blur"></div>
        </div>
      </div>
        <div className="absolute bottom-0">
        <Image src="/images/footer-desktop.svg" alt="Shatermt.com" width={2416} height={278} />
        </div>
    </div>
  </>
  );
};

export default  Spinner;



