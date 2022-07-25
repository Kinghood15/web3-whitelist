import '../../../assets/css/ContainerHome.css';
import banner from '../../../assets/img/monkeynft.png';
import logo280px from '../../../assets/img/ONECHAIN-NEWS280px.png';
import { HiOutlineInformationCircle } from "react-icons/hi";

const ContainerHome = () => {
    return (
        <div className="containerHome container xl mx-auto h-full pt-28 relative block laptop:flex" >
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
            <div className="containerRight w-full laptop:w-1/2 h-full mobile:h-auto smallMobile:h-auto mobile:py-8 smallMobile:py-8 flex items-center justify-center">
                <div className="boxBuy w-[95%] bigMobile:w-[85%] tablet:w-[80%] h-auto p-3">
                    <div className="boxBuyHeader border-b p-3 smallMobile:flex smallMobile:items-center smallMobile:justify-center">
                        <div className="rounded-xl w-32 h-24 flex items-center justify-center">
                            <img src={logo280px} alt="logo" className="w-28 h-16" />
                        </div>
                    </div>
                    <div className="boxBuyBody py-5">
                        <div className="boxTime my-3 w-full p-3 rounded-xl bg-white h-auto block bigMobile:flex bigMobile:justify-between">
                            <div className="p-2 bg-white bigMobile:bg-gray-100 rounded-2xl">
                                <div className="flex items-center">
                                    <h3 className="font-bold text-xs tablet:text-lg">Start time:</h3>
                                    <button className="p-2 text-sky-600"><HiOutlineInformationCircle /></button>
                                </div>
                                <p className="text-sm tablet:text-base text-gray-600">8/30/2024, 8:24:09 PM</p>
                            </div>
                            <div className="p-2 bg-white bigMobile:bg-gray-100 rounded-2xl">
                                <div className="flex items-center">
                                    <h3 className="font-bold text-xs tablet:text-lg">Close time:</h3>
                                    <button className="p-2 text-sky-600"><HiOutlineInformationCircle /></button>
                                </div>
                                <p className="text-sm tablet:text-base text-gray-600">8/23/2024, 8:24:09 PM</p>
                            </div>
                        </div>
                        <div className="boxDisplayBody my-3 w-full p-3 rounded-xl bg-white h-auto block  bigMobile:justify-between bigMobile:flex">
                            <div className="p-2">
                                <h3 className="font-bold text-xs tablet:text-lg w-auto h-auto bigMobile:h-auto mobile:h-10 smallMobile:h-8">Total Supply:</h3>
                                <p className="text-gray-600 text-base">10000000.0</p>
                            </div>
                            <div className="p-2">
                                <h3 className="font-bold text-xs tablet:text-lg w-auto h-auto bigMobile:h-auto mobile:h-10 smallMobile:h-8">Available for sale:</h3>
                                <p className="text-gray-600 text-base">10000000.0</p>
                            </div>
                            <div className="p-2">
                                <h3 className="font-bold text-xs tablet:text-lg w-auto h-auto bigMobile:h-auto mobile:h-10 smallMobile:h-8">Price:</h3>
                                <p className="text-gray-600 text-base">10000000.0</p>
                            </div>
                        </div>
                        <div className="boxInput my-3 bg-white rounded-xl border w-full h-24 flex">
                            <div className="boxInputLeft w-[60%] h-full ">
                                <div className="w-full h-full p-3">
                                    <input type="number" className="w-full h-[70%] rounded-xl outline-none" value="0.00" />
                                    <p className="w-full text-left h-[30%] text-gray-400 text-[11px] mobile:text-base ">Balence: 0.00 ETH</p>
                                </div>
                            </div>
                            <div className="boxInputRight w-[40%] h-full p-5">
                                <h1 className="font-bold text-xs tablet:text-lg">Token name:</h1>
                                <div className="selectorToken">
                                    <ul>
                                        <li>
                                            <p className="text-gray-600 text-sm mobile:text-base">Bitcoin</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="boxBuyFooter">
                        <button className="w-full h-20 bg-sky-600 rounded-xl text-white font-bold text-2xl bigMobile:text-xl mobile:text-lg">Buy Token</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContainerHome;