import React, { useState, useEffect } from 'react';
import '../../assets/css/Header.css';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/img/ONECHAIN-NEWS.png';
import logo280px from '../../assets/img/ONECHAIN-NEWS280px.png';
import metamask from '../../assets/img/metamask.png';
import { ethers } from "ethers";
import { IoWalletOutline } from "react-icons/io5";
import { AiFillCaretDown, AiOutlineCopy, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
    const [data, setData] = useState({
        'address': '',
        'Balance': null
    });
    const [address, setAddress] = useState('');
    const [Balance, setBalance] = useState(null);
    const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {
                // Setting balance
                // setData({
                //   ...data,d['Balance']: ethers.utils.formatEther(balance)
                // });
                setBalance(ethers.utils.formatEther(balance));
            });
    };
    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setAddress(account);
        // console.log("account in accountChangeHandler", account);
        // console.log("data in accountChangeHandler", data);

        // Setting a balance
        getbalance(account);
    };
    const [onClickHandleConnectWallet, setOnClickHandleConnectWallet] = useState(false);
    const handleClickWallet = (e) => {
        try {
            if (window.ethereum) {
                setOnClickHandleConnectWallet(true);
                alert("Wallet is already!");
                window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => accountChangeHandler(res[0]));
            } else {
                alert("install metamask extension!!");
                window.location.href = 'https://metamask.io';
            }
        } catch (error) {

        }
    }
    const [isClickHandleAccount, setIsClickHandleAccount] = useState(false);
    const handleClickAccount = () => {
        console.log("isClickHandleAccount", isClickHandleAccount);
        setIsClickHandleAccount(!isClickHandleAccount);
    }
    const onHandleClickCopy = () => {
        try {
            if (address) {
                navigator.clipboard.writeText(address).then(() => {
                    alert("Copied address from metamask!");
                });
            }
        } catch (error) {
            alert("Error copied address from metamask!");
        }
    }
    const [isClickHandleMenu, setIsClickHandleMenu] = useState(false);
    const onHandleClickMenu = () => {
        setIsClickHandleMenu(!isClickHandleMenu);
    }
    return (
        <div className="headerBody h-28 w-screen fixed px-3 z-20">
            <div className="container sm table:lg mx-auto  h-full">
                <div className="header-left flex items-center w-30 h-full float-left">
                    <div className="logo">
                        <img className="imageLogo" src={logo280px} alt="logo" />
                    </div>
                </div>
                <div className="hidden laptop:flex header-center h-full items-center float-left">
                    <button href="#" className="p-2 mx-3 text-center text-white hover:bg-sky-600 hover:rounded-full hover:font-bold w-20 h-10 justify-center">Home</button>
                    <button href="#" className="p-2 mx-3 text-center text-white hover:bg-sky-600 hover:rounded-full hover:font-bold w-20 h-10 justify-center">About</button>
                    <button href="#" className="p-2 mx-3 text-center text-white hover:bg-sky-600 hover:rounded-full hover:font-bold w-20 h-10 justify-center">Invertor</button>
                </div>
                <div className="header-right flex h-full items-center float-right relative">
                    <div className="mx-2 table:mx-5 flex laptop:hidden">
                        {/* <button><AiOutlineMenu /></button> */}
                        <div className="btnMenu">
                            {/* <button onClick={onHandleClickMenu} className="p-3 rounded-full bg-white">{isClickHandleMenu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}</button> */}
                        </div>
                        <div className="">
                            {(() => {
                                if (isClickHandleMenu) {
                                    return (
                                        // <>
                                        <div className="MenuHeader top-28 right-0 bg-white w-52 bigMobile:px-0 bigMobile:w-96 h-auto rounded-xl">
                                            <div className="header-center p-5 rounded-xl">
                                                <button href="#" className="w-full p-2 text-center text-black hover:bg-sky-600 hover:text-white hover:rounded-full hover:font-bold w-20 h-10">Home</button>
                                                <button href="#" className="w-full p-2 text-center text-black hover:bg-sky-600 hover:text-white hover:rounded-full hover:font-bold w-20 h-10">About</button>
                                                <button href="#" className="w-full p-2 text-center text-black hover:bg-sky-600 hover:text-white hover:rounded-full hover:font-bold w-20 h-10">Invertor</button>
                                                {(() => {
                                                    if (onClickHandleConnectWallet) {
                                                        return (
                                                            <>
                                                                <button onClick={handleClickAccount} className=" boxAddressUser w-44 h-10 bg-white rounded-full flex bigMobile:hidden items-center justify-center drop-shadow-2xl active:border-sky-600 ">
                                                                    <IoWalletOutline size={10} />
                                                                    <p className="font-bold px-3">{address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length)}</p>
                                                                    <AiFillCaretDown size="16" />
                                                                </button>
                                                                {(() => {
                                                                    if (address && Balance && isClickHandleAccount) {
                                                                        return (
                                                                            <div className={`block bigMobile:hidden boxAddressUserInfo w-full h-auto p-1 rounded absolute top-full right-0 bg-white z-20 `}>
                                                                                <button className="boxAddressUserInfo-header w-full my-2 border-b-2 flex justify-between items-center p-2">
                                                                                    <h1 className="font-bold">Address</h1>
                                                                                    <button className="p-2 px-3 rounded drop-shadow-lg border-black bg-gray-100">Disconnect</button>
                                                                                </button>
                                                                                <div className={'boxAddressUserInfo-body '}>
                                                                                    <div className="flex my-2">
                                                                                        <div className="">
                                                                                            <div className="flex px-3 flex items-center">
                                                                                                <IoWalletOutline />
                                                                                                <p className="px-3 font-bold flex items-center">{address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length)}</p>
                                                                                            </div>
                                                                                            <div className="flex px-3">
                                                                                                <img style={{ width: "24px", height: "24px" }} src={metamask} alt="metamask icon" />
                                                                                                <p className="px-1">Metamask</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <button onClick={onHandleClickCopy} className="p-3 rounded-full flex items-center"><AiOutlineCopy /></button>
                                                                                    </div>
                                                                                    <p className="p-3">Balance: {Balance}</p>
                                                                                </div>
                                                                                <div className="boxAddressUserInfo-footer">

                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    } else {
                                                                        return <></>
                                                                    }
                                                                })()}
                                                            </>
                                                        );
                                                    } else {
                                                        return (
                                                            <button onClick={handleClickWallet} className="border-t-2 w-full rounded-full bg-sky-600 text-white p-3 font-bold ">Connect Wallet</button>
                                                        )
                                                    }
                                                })()}
                                            </div>
                                        </div>
                                        // </>
                                    )
                                } else {
                                    return (
                                        <>

                                        </>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                    {(() => {
                        if (onClickHandleConnectWallet) {
                            return (
                                <>
                                    <button onClick={handleClickAccount} className="hidden bigMobile:flex boxAddressUser w-52 h-10 bg-white rounded-full items-center justify-between drop-shadow-2xl active:border-sky-600">
                                        <div className="boxWallet rounded-full bg-sky-600 p-3">
                                            <IoWalletOutline size={24} className="text-white" />
                                        </div>
                                        <p className="font-bold">{address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length)}</p>
                                        <div className="p-2">
                                            <AiFillCaretDown size="16" />
                                        </div>
                                    </button>
                                    {(() => {
                                        if (address && Balance && isClickHandleAccount) {
                                            return (
                                                <div className={`hidden bigMobile:block boxAddressUserInfo w-96 h-auto p-2 rounded-2xl absolute top-3/4 right-0 bg-white z-20 drop-shadow-2xl`}>
                                                    <button className="boxAddressUserInfo-header w-full my-2 border-b-2 flex justify-between items-center p-2">
                                                        <h1 className="font-bold">Address</h1>
                                                        <button className="p-2 px-5 rounded drop-shadow-lg border-black bg-gray-100">Disconnect</button>
                                                    </button>
                                                    <div className={'boxAddressUserInfo-body '}>
                                                        <div className="flex my-2">
                                                            <div className="">
                                                                <div className="flex px-3 flex items-center">
                                                                    <IoWalletOutline />
                                                                    <p className="px-3 font-bold flex items-center">{address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length)}</p>
                                                                </div>
                                                                <div className="flex px-3">
                                                                    <img style={{ width: "24px", height: "24px" }} src={metamask} alt="metamask icon" />
                                                                    <p className="px-1">Metamask</p>
                                                                </div>
                                                            </div>
                                                            <button onClick={onHandleClickCopy} className="p-3 rounded-full flex items-center"><AiOutlineCopy /></button>
                                                        </div>
                                                        <p className="p-3">Balance: {Balance}</p>
                                                    </div>
                                                    <div className="boxAddressUserInfo-footer">
                                                    </div>
                                                </div>
                                            );
                                        } else {
                                            return <></>
                                        }
                                    })()}
                                </>
                            );
                        } else {
                            return (
                                <button onClick={handleClickWallet} className="rounded-full bg-sky-600 text-white p-3 font-bold hidden bigMobile:block">Connect Wallet</button>
                            )
                        }
                    })()}

                </div>
            </div>
        </div>
    );
}
export default Header;