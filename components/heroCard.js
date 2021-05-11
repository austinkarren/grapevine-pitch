import Image from 'next/image'
import heroStyles from "../styles/heroCard.module.css"

export default function Herocard(props) {
    let buttonText = props.buttonText;
    if (buttonText === "null") {
        

    }
    return(
        <>
                <div className={heroStyles.heroText}>
                    <div className={heroStyles.heroHeading}>
                        <h1>{props.title}</h1>
                        </div>
                    <div className={heroStyles.heroBody}>
                        <p>{props.parOne} </p>
                        <p>{props.parTwo}</p>
                    </div>
                    <button>{props.buttonText}</button>
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

