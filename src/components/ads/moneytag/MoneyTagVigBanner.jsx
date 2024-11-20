import Script from "next/script";

export default function MoneyTagVigBanner() {
    return (
        <>
            <Script
                id="money-tag-script"
                strategy="afterInteractive"
            >
                {`(function(d,z,s){
                    s.src='https://'+d+'/401/'+z;
                    try{
                        (document.body||document.documentElement).appendChild(s);
                    } catch(e){
                        console.error(e);
                    }
                })('penaikaucmu.net',7529982,document.createElement('script'));`}
            </Script>
        </>
    );
}
