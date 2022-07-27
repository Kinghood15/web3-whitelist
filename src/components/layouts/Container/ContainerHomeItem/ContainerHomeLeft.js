import banner from '../../../../assets/img/monkeynft.png';
import { useState, useEffect } from 'react';

const ContainerHomeLeft = () => {
    const [isContainerLeft, setIsContainerLeft] = useState(false);
    return (


        // Display basic and token circulate
        <div className="containerLeft w-full laptop:w-1/2 h-full mobile:py-5 smallMobile:py-5 flex items-center rounded relative">
            <div className="banner w-full absolute top-[10%] ">
                <img src={banner} alt="banner" className="w-full h-auto rounded" />
            </div>
            <div className="text-box absolute top-[60%] mobile:top-[30%] smallMobile:top-[20%] w-[95%] ">
                <h1 className="text-9xl tablet:text-8xl bigMobile:text-6xl mobile:text-4xl smallMobile:text-2xl leading-[120px] tablet:leading-[120px] bigMobile:leading-[100px] mobile:leading-[90px] smallMobile:leading-[70px]">Buy & exchange </h1>
                <h2>crypto tokens instantly.</h2>
                <h3 className="w-[95%] laptop:w-[90%] text-justify text-base smallMobile:text-sm smallMobile:text-sm mt-5 smallMobile:leading ">Onechain is the only crypto wallet than can seamlessly move Ethereum between your bank account and decentralized exchanges like uniswap.</h3>
            </div>
        </div>

    );
}
export default ContainerHomeLeft;