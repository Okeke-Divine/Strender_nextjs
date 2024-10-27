import Script from "next/script";

export default function HilltopAdBanner1() {
    return (
        <div>
            <Script id="hilltop-ad-banner-1" strategy="afterInteractive">
                {`
                    aclib.runBanner({
                        zoneId: '8940898',
                    });
                `}
            </Script>
        </div>
    );
}
