/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConvo = /* GraphQL */ `
  mutation CreateConvo(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConvo(input: $input, condition: $condition) {
      id
      name
      createdAt
      messages {
        nextToken
      }
      associated {
        nextToken
      }
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
      id
      username
      registered
      userConversations {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createConvoLink = /* GraphQL */ `
  mutation CreateConvoLink(
    $input: CreateConvoLinkInput!
    $condition: ModelConvoLinkConditionInput
  ) {
    createConvoLink(input: $input, condition: $condition) {
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
export const updateConvoLink = /* GraphQL */ `
  mutation UpdateConvoLink(
    $input: UpdateConvoLinkInput!
    $condition: ModelConvoLinkConditionInput
  ) {
    updateConvoLink(input: $input, condition: $condition) {
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
