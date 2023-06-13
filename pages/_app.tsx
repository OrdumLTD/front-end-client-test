import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../store/userContext";
import { PropolsalContextProvider } from "@/store/submitPropolsal";
import { ChainAPIContextProvider } from "@/store/apiContext";
import { WalletContextProvider } from "@/store/walletContext";
import { CertContextProvider } from "@/store/contractContext";
import { SignUpContextProvider } from "@/store/signUpContext";
import { DashboardContextProvider } from "@/store/dashboardContext";

import { Space_Grotesk, Inter } from "@next/font/google";
import { OrdumAccountProvider, WalletLessUserProvider } from "@/store/walletLessSignUp";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <PropolsalContextProvider>
        <ChainAPIContextProvider>
          <WalletContextProvider>
            <CertContextProvider>
              <SignUpContextProvider>
                <OrdumAccountProvider>
                  <WalletLessUserProvider>
                    <main className={spaceGrotesk.className}>
                      <Component {...pageProps} />
                    </main>
                  </WalletLessUserProvider>
                </OrdumAccountProvider>
              </SignUpContextProvider>
            </CertContextProvider>
          </WalletContextProvider>
        </ChainAPIContextProvider>
      </PropolsalContextProvider>
    </UserContextProvider>
  );
}
