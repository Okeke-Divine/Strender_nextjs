import Script from "next/script";

export default function HilltopAdBanner1() {
    return (
        <div>
            <Script id="hilltop-ad-banner-1" strategy="afterInteractive">
                {`
            alert('me');
                (function(wtcws){
                    var d = document,
                        s = d.createElement('script'),
                        l = d.scripts[d.scripts.length - 1];
                    s.settings = wtcws || {};
                    s.src = "//scented-leather.com/bEXvVes.d/Gfl/0bYSWtdyiOY/Wm5auNZRX/Ic/leMm/9_u_Z/UxllkwPJTbU/2/O/DrcVyaNHD/QptuNrT/Yq4XNuzBIK0ZNmQC";
                    s.async = true;
                    s.referrerPolicy = 'no-referrer-when-downgrade';
                    l.parentNode.insertBefore(s, l);
                })({})
            `}
            </Script>
        </div>
    );
}