import Script from 'next/script';

export default function HilltopAdScript() {
    return (
        <>
        <Script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js" />
        {/* <Script id="hilltop-ad-script" strategy="afterInteractive">
            {`
                aclib.runAutoTag({
                    zoneId: 'odgbyjtrpv',
                });
            `}
        </Script> */}
        </>
    );
}