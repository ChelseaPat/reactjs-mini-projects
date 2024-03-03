import React, { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({url}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(url) {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (error) {
            console.error('OH NO SOMETHING IS WRONG: ', error.message);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScrollPercentage() {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () =>{
            window.removeEventListener('scroll', () => {});
        }
    }, []);

    if (errorMessage) {
        return <div>IT WENT WRONG!</div>
    }

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div 
                    className="current-progress-bar"
                    style={{width: `${scrollPercentage}%`}}
                    >
                    </div>
                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ? 
                    data.map((dataItem) => <p>{dataItem.title}</p>)
                    : null
                }
            </div>
        </div>
    );
}