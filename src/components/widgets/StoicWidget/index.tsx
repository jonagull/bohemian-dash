import { CloudAltIcon, CloudIcon, GreekIcon } from "icons";
import React, { useEffect, useState } from "react";
import StoicQuotes from "./StoicQuotes.json";
interface StoicData {
    text: string;
    author: string;
    book: string | null;
}

export const StoicWidget = () => {
    const filteredQuotes: StoicData[] = StoicQuotes.filter((x) => {
        return x.text.length < 100;
    });

    const randomNumberCreator = () => {
        return Math.floor(Math.random() * filteredQuotes.length);
    };

    const [randomNumber, setRandomNumber] = useState(randomNumberCreator());

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomNumber(randomNumberCreator());
        }, 20000);
        return () => clearInterval(interval);
    }, []);

    return (
        <React.Fragment>
            <div className="stoic-widget__wrapper">
                <GreekIcon />
                <div className="quote__container">
                    {filteredQuotes && (
                        <p>{filteredQuotes[randomNumber]?.text}</p>
                    )}
                    {filteredQuotes && (
                        <h6>- {filteredQuotes[randomNumber]?.author}</h6>
                    )}
                </div>
                <div className="clouds__wrapper">
                    <div className="cloud-b__container">
                        <div className="inner-cloud-b__container">
                            <CloudAltIcon transform="scale (-1 1)" />
                        </div>
                        <div className="inner-cloud-a__container">
                            <CloudAltIcon transform="scale (-1 1)" />
                        </div>
                        <CloudIcon />
                        <div className="inner-cloud-c__container">
                            <CloudAltIcon transform="scale (-1 1)" />
                        </div>
                    </div>

                    <div className="cloud-c__container">
                        <div className="inner-cloud-b__container">
                            <CloudAltIcon transform="scale (-1 1)" />
                        </div>
                        <div className="inner-cloud-a__container">
                            <CloudAltIcon transform="scale (-1 1)" />
                        </div>
                        <CloudIcon />
                        <div className="inner-cloud-c__container">
                            <CloudAltIcon transform="scale(0.7, -0.7) rotate(-30px)" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
