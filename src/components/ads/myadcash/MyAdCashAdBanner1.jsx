import Script from "next/script";

export default function HilltopAdBanner1() {
    return (
        <div>
            <Script>
                {`
                    aclib.runBanner({
                        zoneId: '8940898',
                    });
                `}
            </Script>
        </div>
    );
}
