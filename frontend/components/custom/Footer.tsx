import Image from 'next/image';
import mapImage from '/images/map.png';

const Footer = () => {
    return ( 
        <div>
            <Image src={mapImage} alt="Map" />
        </div>
     );
}
 
export default Footer;