import { CertificateData, signCertificate } from "@phala/sdk";
import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { ApplicantProfile,IssuerProfile,Categories,Chains,AccountId} from "../contractTypes/ordumTypes";
import { ApiPromise } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";

