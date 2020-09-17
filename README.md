# graphql-code-generator-issues-4748

reproduction for https://github.com/dotansimha/graphql-code-generator/issues/4748

## start

```bash
yarn && yarn schema
```

## Issue

`documentMode: external` doesn't work well in `typescript-document-nodes` and `typescript-graphql-request`.

`UploadMutationVariables` should be `Operations.UploadMutationVariables` and `UploadDocument` should be `Documents.UploadDocument`
