/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const detectCelebs = /* GraphQL */ `
  query DetectCelebs($bucket: String, $key: String) {
    detectCelebs(bucket: $bucket, key: $key) {
      bucket
      key
      bot
      text
      language
      voice
      response
    }
  }
`;
export const detectLabels = /* GraphQL */ `
  query DetectLabels($bucket: String, $key: String) {
    detectLabels(bucket: $bucket, key: $key) {
      bucket
      key
      bot
      text
      language
      voice
      response
    }
  }
`;
export const detectLanguage = /* GraphQL */ `
  query DetectLanguage($text: String) {
    detectLanguage(text: $text) {
      bucket
      key
      bot
      text
      language
      voice
      response
    }
  }
`;
export const detectEntities = /* GraphQL */ `
  query DetectEntities($language: String, $text: String) {
    detectEntities(language: $language, text: $text) {
      bucket
      key
      bot
      text
      language
      voice
      response
    }
  }
`;
export const detectSentiment = /* GraphQL */ `
  query DetectSentiment($language: String, $text: String) {
    detectSentiment(language: $language, text: $text) {
      bucket
      key
      bot
      text
      language
      voice
      response
    }
  }
`;
export const invokeBot = /* GraphQL */ `
  query InvokeBot($bot: String, $text: String) {
    invokeBot(bot: $bot, text: $text) {
      bucket
      key
      bot
      text
      language
      voice
      response
    }
  }
`;
export const dictate = /* GraphQL */ `
  query Dictate($bucket: String, $key: String, $voice: String, $text: String) {
    dictate(bucket: $bucket, key: $key, voice: $voice, text: $text) {
      bucket
      key
      bot
      text
      language
      voice
      response
    }
  }
`;
export const translate = /* GraphQL */ `
  query Translate($language: String, $text: String) {
    translate(language: $language, text: $text) {
      bucket
      key
      bot
      text
      language
      voice
      response
    }
  }
`;
export const getConvo = /* GraphQL */ `
  query GetConvo($id: ID!) {
    getConvo(id: $id) {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const searchMessages = /* GraphQL */ `
  query SearchMessages(
    $filter: SearchableMessageFilterInput
    $sort: SearchableMessageSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchMessages(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        content
        createdAt
        owner
        chatbot
        isSent
        messageConversationId
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        username
        registered
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
export const searchConvoLinks = /* GraphQL */ `
  query SearchConvoLinks(
    $filter: SearchableConvoLinkFilterInput
    $sort: SearchableConvoLinkSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchConvoLinks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        status
        convoLinkUserId
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
