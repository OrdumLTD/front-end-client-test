import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../store/userContext";
import { PropolsalContextProvider } from "@/store/submitPropolsal";
import { ChainAPIContextProvider } from "@/store/apiContext";
import { WalletContextProvider } from "@/store/walletContext";
import { DashboardContextProvider } from "@/store/dashboardContext";

import { Space_Grotesk, Inter } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <PropolsalContextProvider>
        <ChainAPIContextProvider>
          <WalletContextProvider>
            <DashboardContextProvider>
              <main className={spaceGrotesk.className}>
                <Component {...pageProps} />
              </main>
            </DashboardContextProvider>
          </WalletContextProvider>
        </ChainAPIContextProvider>
      </PropolsalContextProvider>
    </UserContextProvider>
  );
}
