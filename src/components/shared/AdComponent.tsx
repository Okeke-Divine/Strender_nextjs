"use client";
import { useEffect } from "react";

interface Window {
  adsbygoogle: { push: (arg: object) => void }[];
}


const AdsComponent = (props: any) => {
  const { dataAdSlot } = props;

  useEffect(() => {
    try {
      // (window.adsbygoogle = window.adsbygoogle || []).push({});
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    } catch (e) {
      console.error("Adsbygoogle error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2431766066357656"
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdsComponent;
