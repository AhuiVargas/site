import Script from "next/script";
import Providers from "./providers";
import HeadComp from "../components/HeadComp";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<HeadComp />

			<Script
				src="https://scripts.simpleanalyticscdn.com/latest.js"
				strategy="afterInteractive"
			/>

			<Script
				id="clarity-script"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
				    __html: `
                        (function(c,l,a,r,i,t,y){
                          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "s1s1d8afat");
                    `,
				}}
			/>

			<Providers>
				<Component {...pageProps} />
			</Providers>
		</>
	);
}

export default MyApp;