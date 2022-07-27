import '../../../assets/css/ContainerHome.css';
import ContainerHomeLeft from './ContainerHomeItem/ContainerHomeLeft';
import ContainerHomeRight from './ContainerHomeItem/ContainerHomeRight';
import ContainerHomeCenter from './ContainerHomeItem/ContainerHomeCenter';
import { useState, useEffect } from 'react';
const ContainerHome = () => {
    const [isTokenActive, setIsTokenActive] = useState(false);
    return (
        <div className="containerHome container xl mx-auto h-full pt-28 relative block laptop:flex" >
            {isTokenActive === true &&
            <>
                <ContainerHomeLeft />
                <ContainerHomeRight />
            </>
            }
            {isTokenActive === false &&
                <ContainerHomeCenter />
                // <></>
            }
        </div>
    );
};
export default ContainerHome;