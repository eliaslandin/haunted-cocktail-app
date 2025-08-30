import { component, html } from "haunted";
import type { ToastNotificationType } from "../utils/types";

export const IconComponent = ({
  type,
}: {
  type: ToastNotificationType | "cocktail" | "x" | "ghost";
}) => {
  if (type === "success") {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-check-circle"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`;
  }

  if (type === "error") {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="red"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x-circle"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    `;
  }

  if (type === "info") {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="blue"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-info"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;
  }

  if (type === "cocktail") {
    return html`
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.21795 0C0.379398 0 -0.681258 2.08 0.493758 3.50277L10.0573 15.0966V22.1538H5.13098C4.88101 22.1538 4.64127 22.2511 4.46452 22.4242C4.28776 22.5973 4.18846 22.8321 4.18846 23.0769C4.18846 23.3217 4.28776 23.5565 4.46452 23.7296C4.64127 23.9027 4.88101 24 5.13098 24H16.8698C17.1198 24 17.3595 23.9027 17.5363 23.7296C17.713 23.5565 17.8124 23.3217 17.8124 23.0769C17.8124 22.8321 17.713 22.5973 17.5363 22.4242C17.3595 22.2511 17.1198 22.1538 16.8698 22.1538H11.9436V15.0954L21.5071 3.50277C22.6808 2.07877 21.6202 0 19.7816 0H2.21795ZM4.59689 5.53846L1.96033 2.34215C1.92386 2.29605 1.90152 2.24074 1.89591 2.18268C1.8903 2.12462 1.90166 2.06619 1.92866 2.01421C1.95566 1.96222 1.99719 1.91883 2.04841 1.88907C2.09963 1.85932 2.15843 1.84443 2.21795 1.84615H19.7816C20.0719 1.84615 20.1963 2.15385 20.0405 2.34215L17.4039 5.53846H4.59689Z"
          fill="var(--primary)"
        />
      </svg>
    `;
  }

  if (type === "x") {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
  }

  if (type === "ghost") {
    return html`
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 5C35.9674 5 41.6903 7.37053 45.9099 11.5901C50.1295 15.8097 52.5 21.5326 52.5 27.5V49.05C52.5 53.625 47.585 56.5175 43.5875 54.2975L42.68 53.81C40.18 52.53 38.22 52.11 35.4575 53.525L34.9625 53.795C33.5377 54.6089 31.9345 55.0598 30.2944 55.1077C28.6542 55.1557 27.0274 54.7993 25.5575 54.07L25.0375 53.795C21.845 51.97 19.6225 52.515 16.4125 54.295C12.4125 56.52 7.5 53.6275 7.5 49.0525V27.5C7.5 21.5326 9.87053 15.8097 14.0901 11.5901C18.3097 7.37053 24.0326 5 30 5ZM21.25 22.5C20.2554 22.5 19.3016 22.8951 18.5983 23.5983C17.8951 24.3016 17.5 25.2554 17.5 26.25C17.5 27.2446 17.8951 28.1984 18.5983 28.9017C19.3016 29.6049 20.2554 30 21.25 30C22.2446 30 23.1984 29.6049 23.9017 28.9017C24.6049 28.1984 25 27.2446 25 26.25C25 25.2554 24.6049 24.3016 23.9017 23.5983C23.1984 22.8951 22.2446 22.5 21.25 22.5ZM38.75 22.5C37.7554 22.5 36.8016 22.8951 36.0983 23.5983C35.3951 24.3016 35 25.2554 35 26.25C35 27.2446 35.3951 28.1984 36.0983 28.9017C36.8016 29.6049 37.7554 30 38.75 30C39.7446 30 40.6984 29.6049 41.4016 28.9017C42.1049 28.1984 42.5 27.2446 42.5 26.25C42.5 25.2554 42.1049 24.3016 41.4016 23.5983C40.6984 22.8951 39.7446 22.5 38.75 22.5Z"
          fill="#646CFF"
        />
      </svg>
    `;
  }
};

customElements.define("icon-component", component(IconComponent));
