"use client";
import Script from 'next/script';

export default function MyAdCashAdBanner1() {
    return (
        <>
            <div>
                <Script id="ad-banner-script" strategy="afterInteractive">
                    {`
                        // Block until aclib and runBanner are available
                        while (typeof aclib === 'undefined' || typeof aclib.runBanner !== 'function') {
                            // Empty loop to wait until aclib and aclib.runBanner are defined
                        }

                        // Once defined, execute the banner function
                        aclib.runBanner({
                            zoneId: '8940898',
                        });
                    `}
                </Script>
            </div>
        </>
    );
}
