"use client"
import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function MyAdCashAdBanner1() {
    const adContainerRef = useRef(null);

    useEffect(() => {
        const runBannerWithDelay = () => {
            setTimeout(() => {
                if (typeof aclib !== 'undefined' && typeof aclib.runBanner === 'function' && adContainerRef.current) {
                    aclib.runBanner({
                        zoneId: '8940898',
                        container: adContainerRef.current, // Specify the container for the ad
                    });
                }
            }, 1000); // Adjust delay as needed (1000ms = 1 second)
        };

        // Trigger `runBannerWithDelay` when aclib has loaded
        window.addEventListener('aclib-loaded', runBannerWithDelay);

        return () => {
            window.removeEventListener('aclib-loaded', runBannerWithDelay);
        };
    }, []);

    return (
        <>
            <Script
                id="aclib"
                src="//acscdn.com/script/aclib.js"
                onLoad={() => window.dispatchEvent(new Event('aclib-loaded'))}
                strategy="afterInteractive"
            />
            <div ref={adContainerRef} />
        </>
    );
}
