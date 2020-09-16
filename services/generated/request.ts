import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql'
import * as Operations from './operations'

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction()
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Upload(variables: UploadMutationVariables): Promise<UploadMutation> {
      return withWrapper(() => client.request<UploadMutation>(print(UploadDocument), variables))
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
