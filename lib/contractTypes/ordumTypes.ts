import type BN from 'bn.js';

export enum Categories {
	publicGood = 'PublicGood',
	infrastructure = 'Infrastructure',
	mediaArt = 'MediaArt'
}

export type IssuerProfile = {
	name: string,
	id: (number | string | BN),
	chain: Chains,
	isActive: boolean,
	registrationDate: (number | string | BN),
	categories: Array<Categories>,
	description: string,
	applications: Array<(number | string | BN)> | null
}

export enum Chains {
	polkadot = 'Polkadot',
	offChain = 'OffChain'
}

export type AccountId = string | number[]

export type ApplicantProfile = {
	name: string,
	teamSize: (number | string | BN),
	accountId: AccountId,
	description: string,
	registeredTime: (number | string | BN),
	applications: (number | string | BN) | null,
	categories: Array<Categories>
}

export type KeyManagement = {
	admin: AccountId,
	keyPointer: AccountId,
	allowedKeys: Array<AccountId>
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export enum Error {
	accountExists = 'AccountExists',
	notAuthorized = 'NotAuthorized',
	accountDontExists = 'AccountDontExists',
	profileDontExists = 'ProfileDontExists',
	maxKeysExceeded = 'MaxKeysExceeded',
	accountExistsOrMaxExceeded = 'AccountExistsOrMaxExceeded',
	unexpectedError = 'UnexpectedError'
}

export enum KeyAction {
	add = 'ADD',
	remove = 'REMOVE',
	changeAdmin = 'ChangeAdmin'
}
