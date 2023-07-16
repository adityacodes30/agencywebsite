import {useRef , useEffect} from "react"
import styles from './styles/blob.module.css'
import { useScroll } from "framer-motion";

const Blob = () =>
{
    const blobRef = useRef(null);

    const {scrollY}= useScroll()
    
    const handlePointerMove = (event) => {
        const { clientX, clientY } = event;
    
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: 'forwards'}
        );
      };

      useEffect(() => {
        document.addEventListener("pointermove", handlePointerMove);
    
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
        };
      }, []);

    return <div className={styles.blob} ref={blobRef}  onPointerMove={handlePointerMove}></div>
}

export default Blob;