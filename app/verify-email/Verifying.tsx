import Lottie from 'lottie-react';
import animation_verification_in_progress from '@/public/animations/verification_in_progress.json'

const Verifying = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[calc(100vh-140px)]'>
            <Lottie animationData={animation_verification_in_progress}></Lottie>
            <div className='flex flex-col items-center justify-center md:justify-start px-2 mb-10 text-3xl'>
                <h1 className=":text-white">
                    Hang Tight!
                </h1>

                <p className="text-zinc-200 text-sm text-center mt-2 md:mt-1">
                    We&apos;re currently verifying your email. This may take a few moments...
                </p>
            </div>
        </div>
    );
};

export default Verifying;