type Config = {
  apiBaseUrl: string
  enableDebugFeatures: boolean
  logNetworkRequests: boolean
}

export const config: Config = {
  apiBaseUrl: 'https://api-dev.pipeline.deltapartnersgroup.com',
  enableDebugFeatures: __DEV__,
  logNetworkRequests: __DEV__,
}
