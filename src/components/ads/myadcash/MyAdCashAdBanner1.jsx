"use client";
import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function MyAdCashAdBanner1() {
    return (
        <>
            <Script id="aclib" src="//acscdn.com/script/aclib.js" strategy="afterInteractive" />
            <div>
                <Script id="ad-banner-script" strategy="afterInteractive">
                    {`
                        if (typeof aclib !== 'undefined' && aclib.runBanner) {
                            aclib.runBanner({
                                zoneId: '8940898',
                            });
                        }
                    `}
                </Script>
            </div>
        </>
    );
}
