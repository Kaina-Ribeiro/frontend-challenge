import { StaticImageData } from 'next/image';
import image1 from '../../assets/carousel.png';
import image2 from '../../assets/carousel.png';
import image3 from '../../assets/carousel.png';

export const images: StaticImageData[] = [image1, image2, image3];

const imageByIndex = (index: number): StaticImageData => images[index % images.length];

export default imageByIndex;
