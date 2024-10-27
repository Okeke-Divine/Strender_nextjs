"use client";
import Script from 'next/script';

export default function MyAdCashAdBanner1() {
    return (
        <>
            <div>
                <Script id="ad-banner-script" strategy="afterInteractive">
                    {`
                        (async function waitForAClib() {
                            while (typeof aclib === 'undefined' || typeof aclib.runBanner !== 'function') {
                                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before next check
                            }
                            // Once aclib and runBanner are available, execute the function
                            aclib.runBanner({
                                zoneId: '8940898',
                            });
                        })();
                    `}
                </Script>
            </div>
        </>
    );
}
