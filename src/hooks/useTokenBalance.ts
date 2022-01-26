import { useWeb3React } from '@web3-react/core'

const useTokenBalance = (tokenAddress: string) => {
  const { account } = useWeb3React()

  return {
    account,
  }
}

export default useTokenBalance
