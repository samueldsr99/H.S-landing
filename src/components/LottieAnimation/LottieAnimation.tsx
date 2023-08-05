import Lottie from "lottie-react";

export interface LottieAnimationProps {
  animationData: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  return <Lottie animationData={JSON.parse(animationData)} renderer="svg" autoplay loop />;
};

export default LottieAnimation;
