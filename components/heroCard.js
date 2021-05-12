import Image from 'next/image'
import heroStyles from "../styles/heroCard.module.css"

export default function Herocard(props) {
    return(
        <>
                <div className={heroStyles.heroText}>
                    <div className={heroStyles.heroHeading}>
                        <h1>{props.title}</h1>
                        <h2>{props.titleTwo}</h2>
                        </div>
                    <div className={heroStyles.heroBody}>
                        <p>{props.parOne} </p>
                        <p>{props.parTwo}</p>
                    </div>
                    {props.buttonText &&
                    
                    <button className={heroStyles.button}>{props.buttonText}</button>
                    }
                </div>
                <div className={heroStyles.heroImage}>
                    <Image
                        src={props.imageSource}
                        height={props.imageHeight}
                        width={props.imageWidth}
                        >
                    </Image>
                </div>
        </>
    )
}

