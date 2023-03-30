import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);

    const handleShowAll = () => {
        setShowAll(true);
    };

    useEffect(() => {
        console.log('helow from useEffect')
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then((res) => res.json())
        .then((data) => setSingleData(data.data));
    },[uniqueId]);
    console.log(singleData)


    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            // console.log(value.data.tools);
            setData(value.data.tools);
        };

        loadData();
    }, []);
    // console.log(data);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:px-12 my-6">

                {/* {
            // option:---- 1
            data.map((singleData) => {
                // console.log(singleData);
                return <SingleData singleData={singleData}></SingleData>
            })
         }    */}

                {
                    // option:---- 2
                    data.slice(0, showAll ? 12 : 6).map((singleData) => <SingleData singleData={singleData} key={singleData.id} setUniqueId={setUniqueId}></SingleData>)
                }
            </div>
            {
                !showAll && (
                    <span onClick={handleShowAll}>
                        <Button>See More</Button>
                    </span>
                )
            }
            <Modal singleData={singleData}></Modal>
        </>
    );
};

export default Card;