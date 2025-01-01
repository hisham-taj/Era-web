import '../index.css'


const BabyPage = () => {
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center max-sm:bg-[#ebedef]  relative overflow-hidden">
      
     <div className="w-[70%] h-[60%] max-sm:h-[40%]  bg-[#ebedef] rounded-tl-3xl rounded-tr-3xl flex justify-center z-50">
      <img src="/assets/360_F_1076214838_DWZiIMU6UHHU8nHXNNUXOj2lqRZ3xfAz.jpg" alt="" />
     </div>
     <div className="w-[100%] h-[40%] bg-[#ebedef]  flex justify-center items-center">
      <h1 className='cinzel text-[40px] max-sm:text-[20px] text-[#212f3c] z-50'>Introducing the Latest Trends in Baby Fashion: Perfect for Your Precious Ones</h1>
     </div>

     <img className='absolute top-[40%]' src="/assets/img_circle-additional-dark-016_wide.svg" alt="" />
     <img className='absolute top-[87%] max-sm:top-[78%] ' src="/assets/img_dollar.svg" alt="" />

    </div>
    </>
  );
};

export default BabyPage;
