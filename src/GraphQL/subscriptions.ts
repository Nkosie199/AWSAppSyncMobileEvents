/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($messageConversationId: ID!) {
    onCreateMessage(messageConversationId: $messageConversationId) {
      id
      content
      createdAt
      owner
      chatbot
      isSent
      file {
        bucket
        region
        key
      }
      messageConversationId
      conversation {
        id
        name
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateConvoLink = /* GraphQL */ `
  subscription OnUpdateConvoLink($convoLinkUserId: ID, $status: String) {
    onUpdateConvoLink(convoLinkUserId: $convoLinkUserId, status: $status) {
      id
      name
      status
      convoLinkUserId
      user {
        id
        username
        registered
        createdAt
        updatedAt
        owner
      }
      conversation {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
