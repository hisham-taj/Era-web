import '../index.css'

const Visitpage = () =>{
    return(
        <div className="w-full h-screen max-sm:h-[50vh] flex">
            <div className="w-[50%] bg-[#ebedef] text-[#212f3c] flex justify-center items-center">
                <img className='absolute  w-[25%] ' src="/assets/img_circles-white_wide.svg" alt="" />
                <h1 className='ysabeau text-[50px] z-10 max-sm:text-[20px]'>Get Inspired by the Latest Trends – Visit Our Local Store for Fresh Collections!</h1>
            </div>
            <div className="w-[50%] z-10  flex justify-center">
                <img src="/assets/visit-store.jpg" alt="" />
            </div>
        </div>
    )
}

export default Visitpage;