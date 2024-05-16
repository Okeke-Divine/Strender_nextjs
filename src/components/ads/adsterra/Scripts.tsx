import Script from "next/script";

type Props = {
  pId: string;
};

const AdsterraAdSense: React.FC<Props> = ({ pId }) => {
  return (
    <Script
      async
      src={`//pl23325452.highcpmgate.com/ffb1350a3987200d368c5f4b66815a32/invoke.js`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default AdsterraAdSense;