import React, {useState} from 'react'
import './slideShow.scss'
import ImgComp from './ImgComp'
import fod1 from './img/fod1.jpg'
import fod2 from './img/fod2.jpg'
import fod3 from './img/fod3.jpg'
import fod4 from './img/fod4.jpg'
import fod5 from './img/fod5.jpg'

function SlideShow() {
    let sliderArr = 
    [
    <ImgComp src={fod1} />, 
    <ImgComp src={fod2} />, 
    <ImgComp src={fod3} />, 
    <ImgComp src={fod4} />, 
    <ImgComp src={fod5} />
    ]
    const [x, setX] = useState(0)
    const goLeft = () =>{
        x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x+100)
    }
    const goRight = () =>{
       x === -100 * (sliderArr.length -1) ? setX(0) : setX(x-100)

    }
    return (
        <div className="slider">
            {
                sliderArr.map((item, index) =>{
                    return (
                        <div key={index} className='slide' style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
            <i class="fas fa-caret-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
            <i class="fas fa-caret-right"></i>
            </button>
        </div>
    )
}

export default SlideShow
