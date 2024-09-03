import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Carousel.css';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'data:image/jpeg;base64,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',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="carousel-container">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className="carousel-image"
                src={step.imgPath}
                alt={`Slide ${index + 1}`}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className="carousel-mobile-stepper"
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default Carousel;
