import gql from 'graphql-tag'

export const UploadDocument = gql`
  mutation Upload($refId: ID, $ref: String, $field: String, $source: String, $file: Upload!) {
    upload(refId: $refId, ref: $ref, field: $field, source: $source, file: $file) {
      id
      createdAt
      updatedAt
      name
      alternativeText
      caption
      width
      height
      formats
      hash
      ext
      mime
      size
      url
      httpUrl
      previewUrl
      provider
    }
  }
`
