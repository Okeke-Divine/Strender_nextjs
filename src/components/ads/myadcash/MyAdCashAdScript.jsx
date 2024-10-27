import Script from 'next/script';

export default function MyAdCashAdScript() {
    return (
        <>
        <Script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js" />
        </>
    );
}