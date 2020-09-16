import * as Types from './schemas'

export type UploadMutationVariables = Types.Exact<{
  refId?: Types.Maybe<Types.Scalars['ID']>
  ref?: Types.Maybe<Types.Scalars['String']>
  field?: Types.Maybe<Types.Scalars['String']>
  source?: Types.Maybe<Types.Scalars['String']>
  file: Types.Scalars['Upload']
}>

export type UploadMutation = {
  upload: Pick<
    Types.UploadFile,
    | 'id'
    | 'createdAt'
    | 'updatedAt'
    | 'name'
    | 'alternativeText'
    | 'caption'
    | 'width'
    | 'height'
    | 'formats'
    | 'hash'
    | 'ext'
    | 'mime'
    | 'size'
    | 'url'
    | 'httpUrl'
    | 'previewUrl'
    | 'provider'
  >
}
