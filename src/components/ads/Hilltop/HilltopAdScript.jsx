import Script from 'next/script';

export default function HilltopAdScript() {
    return (
        <Script id="hilltop-ad-script" strategy="afterInteractive">
            {`
                aclib.runAutoTag({
                    zoneId: 'odgbyjtrpv',
                });
            `}
        </Script>
    );
}