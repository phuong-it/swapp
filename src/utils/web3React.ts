import { InjectedConnector } from '@web3-react/injected-connector'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'

const POLLING_INTERVAL = 12000
const chainId = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10);

const injected = new InjectedConnector({ supportedChainIds: [chainId] })

export const connectors = { MetaMask: injected }

export const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}
