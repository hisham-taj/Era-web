import '../index.css'

const Footer = () =>{
    return(
        <div id='footer' className='w-full h-[30vh] barlow bg-[#212f3c] mt-5 flex'>
            <div className='w-[40%] m-6 flex flex-col  text-white text-[16px] max-sm:text-[12px] justify-center'>
                <h3>Shop Address:</h3>
                <br />
                <p>Era Boutique,</p>
                <p>Church building,</p>
                <p>near Chala hss</p>
                <p>Kannur, Kerala</p>
                <p>+91 7025099458</p>
            </div>
            <div className='w-[60%] flex items-center justify-between max-sm:flex-col max-sm:justify-center'>
                <button className='bg-[#239b56] text-white w-[8vw] h-[7vh] max-sm:w-[30vw] rounded-lg hover:bg-white hover:text-[#239b56] border-2 border-[#239b56] transition duration-300'>Whatsapp</button>
                <p className='text-white max-sm:text-[10px]'>Connect with us for more details</p>
            </div>
        </div>
    )
}

export default Footer;