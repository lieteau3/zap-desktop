import { connect } from 'react-redux'
import { Onboarding } from 'components/Onboarding'
import {
  setAlias,
  setAutopilot,
  setConnectionType,
  setConnectionHost,
  setConnectionCert,
  setConnectionMacaroon,
  setConnectionString,
  setName,
  setPassword,
  setSeed,
  setLndconnect,
  validateHost,
  validateCert,
  validateMacaroon,
  resetOnboarding
} from 'reducers/onboarding'
import {
  setUnlockWalletError,
  setStartLndError,
  startLnd,
  stopLnd,
  fetchSeed,
  createNewWallet,
  recoverOldWallet,
  unlockWallet,
  lndSelectors
} from 'reducers/lnd'

const mapStateToProps = state => ({
  alias: state.onboarding.alias,
  name: state.onboarding.name,
  autopilot: state.onboarding.autopilot,
  connectionType: state.onboarding.connectionType,
  connectionHost: state.onboarding.connectionHost,
  connectionCert: state.onboarding.connectionCert,
  connectionMacaroon: state.onboarding.connectionMacaroon,
  connectionString: state.onboarding.connectionString,
  lndConnect: state.onboarding.lndConnect,
  lightningGrpcActive: state.lnd.lightningGrpcActive,
  walletUnlockerGrpcActive: state.lnd.walletUnlockerGrpcActive,
  startLndHostError: lndSelectors.startLndHostError(state),
  startLndCertError: lndSelectors.startLndCertError(state),
  startLndMacaroonError: lndSelectors.startLndMacaroonError(state),
  seed: state.onboarding.seed,
  unlockWalletError: state.lnd.unlockWalletError,
  onboarded: state.onboarding.onboarded,
  fetchingSeed: state.lnd.fetchingSeed
})

const mapDispatchToProps = {
  setAlias,
  setAutopilot,
  setConnectionType,
  setConnectionHost,
  setConnectionCert,
  setConnectionMacaroon,
  setConnectionString,
  setStartLndError,
  setName,
  setPassword,
  setSeed,
  setUnlockWalletError,
  setLndconnect,
  startLnd,
  stopLnd,
  validateHost,
  validateCert,
  validateMacaroon,
  fetchSeed,
  createNewWallet,
  recoverOldWallet,
  resetOnboarding,
  unlockWallet
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Onboarding)
