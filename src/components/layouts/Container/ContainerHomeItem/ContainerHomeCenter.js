import banner from '../../../../assets/img/monkeynft.png';
import { useState, useEffect } from 'react';
const ContainerHomeCenter = () => {
    const [expiryTime, setExpiryTime] = useState("27 July 2022 9:36:25");
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownlMinutes: '',
            countdownSeconds: ''
        }
    );
    const countdownTimer = () => {

        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            if(remainingDayTime>0) {
                const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
                const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
                const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
    
                const runningCountdownTime = {
                    countdownDays: totalDays,
                    countdownHours: totalHours,
                    countdownMinutes: totalMinutes,
                    countdownSeconds: totalSeconds
                }
    
                setCountdownTime(runningCountdownTime);
            }
            

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }
        }, 1000);
    }
    useEffect(() => {
        countdownTimer();
    });
    return (
        <div className="containerCenter w-full h-full mobile:py-5 smallMobile:py-5 flex items-center rounded relative">
            <div className="coming-soon w-full h-full flex items-center justify-center relative">
                <img src={banner} alt="banner" className="w-full h-full rounded" />
                {/* <div className="banner w-full relative top-[10%] ">
                    
                </div> */}
                <div className="absolute w-full">
                    <h2 className="w-full p-3 text-center text-5xl tablet:text-4xl bigMobile:text-3xl mobile:text-xl smallMobile:text-lg leading-[50px] tablet:leading-[40px] bigMobile:leading-[30px] mobile:leading-[20px] smallMobile:leading-[10px] font-bold text-white">We are opening up soon!</h2>
                    <div className="countdown w-full flex items-center justify-center flex-row">
                        <div className="container-day p-5 tablet:p-5 bigMobile:p-3 mobile:p-2 smallMobile:p-1 text-center bg-white rounded-xl mx-3">
                            <h3 className="day text-5xl tablet:text-4xl bigMobile:text-3xl mobile:text-xl smallMobile:text-lg font-bold text-black">{countdownTime.countdownDays}</h3>
                            <h3 className="text-black text-lg tablet:text-base bigMobile:text-tiny mobile:text-sm smallMobile:text-xs">Day</h3>
                        </div>
                        <div className="container-hour p-5 tablet:p-5 bigMobile:p-3 mobile:p-2 smallMobile:p-1 text-center bg-white rounded-xl mx-3">
                            <h3 className="hour text-5xl tablet:text-4xl bigMobile:text-3xl mobile:text-xl smallMobile:text-lg font-bold text-black">{countdownTime.countdownHours}</h3>
                            <h3 className="text-black text-lg tablet:text-base bigMobile:text-tiny mobile:text-sm smallMobile:text-xs">Hour</h3>
                        </div>
                        <div className="container-minute p-5 tablet:p-5 bigMobile:p-3 mobile:p-2 smallMobile:p-1 text-center bg-white rounded-xl mx-3">
                            <h3 className="minute text-5xl tablet:text-4xl bigMobile:text-3xl mobile:text-xl smallMobile:text-lg font-bold text-black">{countdownTime.countdownMinutes}</h3>
                            <h3 className="text-black text-lg tablet:text-base bigMobile:text-tiny mobile:text-sm smallMobile:text-xs">Minute</h3>
                        </div>
                        <div className="container-second p-5 tablet:p-5 bigMobile:p-3 mobile:p-2 smallMobile:p-1 text-center bg-white rounded-xl mx-3">
                            <h3 className="second text-5xl tablet:text-4xl bigMobile:text-3xl mobile:text-xl smallMobile:text-lg font-bold text-black">{countdownTime.countdownSeconds}</h3>
                            <h3 className="text-black text-lg tablet:text-base bigMobile:text-tiny mobile:text-sm smallMobile:text-xs">Second</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ContainerHomeCenter;