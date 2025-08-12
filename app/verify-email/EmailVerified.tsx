import Lottie from 'lottie-react';
import animationDataDark from '@/public/animations/verify_email.json';

const EmailVerificationMessage = () => {
    return (
        <div className="w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center z-10">
            <div className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
                <Lottie className='block' animationData={animationDataDark}></Lottie>
            </div>

            <div className="flex items-center justify-center">
                <div className="text-yellow-400 text-4xl">•</div>
                <h1 className="text-yellow-400 text-4xl mx-2">
                    Congratulations
                </h1>
                <div className="text-yellow-400 text-4xl">•</div>
            </div>

            <p className="text-white text-md md:text-xl mt-4 mb-1 px-4 tracking-wide">
                Email verified successfully!
            </p>

            <div className="text-zinc-300 flex items-center justify-center text-xs text-center px-4 tracking-wider">
                Thank you for subscribing! <br/> Stay tuned for the latest updates on ConUHacks X, arriving in your inbox soon!
            </div>
        </div>
    );
};

export default EmailVerificationMessage;