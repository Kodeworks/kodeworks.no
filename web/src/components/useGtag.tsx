'use client';
import { useEffect, useState } from 'react';

const useGtag = () => {
		const [isGtagLoaded, setIsGtagLoaded] = useState(false);
    useEffect(() => {
        // Ensure code runs only in the browser
        if (typeof window !== 'undefined' && !isGtagLoaded) {
					const scriptTag = document.getElementById('gtag');
					if (!scriptTag) {
						loadGtag();
						console.log('Gtag loaded');
						cookieConsentListener();
						setIsGtagLoaded(true);
						// TODO Bytt ut med ekte cookie consent banner som trigger dispatchCookieConsentEvent basert på brukerens valg
						setTimeout(() => {
							dispatchCookieConsentEvent(ConsentStatus.GRANTED);
						}, 2000);
					}
        }
      }, []);


      // Check if window exists, so it only runs on client side
      function gtag(...args: any[]) {
        window && window.dataLayer.push(args);
      }

			function loadGtag() {
				const script = document.createElement('script');
				script.id = 'gtag';
				script.src = `https://www.googletagmanager.com/gtag/js?id=G-BRWDETNRQE`;
				script.async = true;
				script.onload = () => {
					initializeGtag();
					defaultConsent();
				};
				document.head.appendChild(script);

			}

			function cookieConsentListener() {
				window.addEventListener('cookieConsent', (event: CustomEvent) => {
					const consent = event.detail.consent;
					console.log('Cookie consent event received: ', consent);
					if (consent === 'granted') {
						allConsentGranted();
					}
				});
			}

      function initializeGtag() {
				window.dataLayer = window.dataLayer || [];
        gtag('js', new Date());
        gtag('config', 'G-FLXYDD6Z0S');
      }

      function defaultConsent() {
        gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
        });
      }

      function allConsentGranted() {
        gtag('consent', 'update', {
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'ad_storage': 'granted',
          'analytics_storage': 'granted'
        });
      }
};


export enum ConsentStatus {
	GRANTED = 'granted',
	DENIED = 'denied'
}

export const dispatchCookieConsentEvent = (status: ConsentStatus) => {
	const event = new CustomEvent('cookieConsent', {
		detail: {
			consent: status
		}
	});
	window.dispatchEvent(event);
}

export default useGtag;
