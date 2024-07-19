import { useState } from 'react';
import Separator from './separator';

const Stepper = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    }

    const previousStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    }

    return (
        <div className='stepper'>
            <div className='stepper-content'>
                {steps.map((_, index) => (
                    <div key={index} className={`step ${currentStep === index ? 'current' : ''}`}>
                        <div className='round-index'>{index + 1}</div>
                        {index < steps.length - 1 && <Separator/>}
                    </div>
                ))}
            </div>

            <div className='stepper-navigation'>
                <button onClick={previousStep} disabled={currentStep === 0}>Previous</button>
                <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next</button>
            </div>
            <div className='component-wrapper'>{steps[currentStep].component}</div>
        </div>
    );
}

export default Stepper;
