import Script from "next/script";

export default function MyAdCashAdBanner1() {
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
