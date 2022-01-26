import { useCallback } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { connectors } from '../utils/web3React'

const useAuth = () => {
  const { chainId, account, library, deactivate, activate } = useWeb3React()

  const login = useCallback(() => {
    const connector = connectors.MetaMask
    if (connector) {
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          //  TODO
        } else {
          // TODO
        }
      })
    } else {

    }
  }, [])

  const logout = useCallback(() => {
    deactivate()
  }, [deactivate, chainId])

  return { login, logout, account, library }
}

export default useAuth
