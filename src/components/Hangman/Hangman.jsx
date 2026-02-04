import level1 from "../../assets/images/LEVEL 1.svg";
import level2 from "../../assets/images/LEVEL 2.svg";
import level3 from "../../assets/images/LEVEL 3.svg";
import level4 from "../../assets/images/LEVEL 4.svg";
import level5 from "../../assets/images/LEVEL 5.svg";
import level6 from "../../assets/images/LEVEL 6.svg";
import level7 from "../../assets/images/LEVEL 7.svg";
import level8 from "../../assets/images/LEVEL 8.svg";




function Hangman({ step }) {
    const images = [level1, level2, level3, level4, level5, level6, level7, level8];
    return (
        <div className="w-300px h-300px">
            <img src={step >= images.length ? images[images.length - 1] : images[step]} />
        </div>
    )
}
export default Hangman;