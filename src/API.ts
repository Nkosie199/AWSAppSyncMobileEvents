/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConversationInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
};

export type ModelConversationConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CreateMessageInput = {
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
  owner?: string | null,
  chatbot?: boolean | null,
  isSent?: boolean | null,
  file?: S3ObjectInput | null,
  messageConversationId?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  chatbot?: ModelBooleanInput | null,
  isSent?: ModelBooleanInput | null,
  messageConversationId?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  registered?: boolean | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  registered?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type CreateConvoLinkInput = {
  id?: string | null,
  name?: string | null,
  status?: string | null,
  convoLinkUserId?: string | null,
  convoLinkConversationId?: string | null,
};

export type ModelConvoLinkConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  convoLinkUserId?: ModelIDInput | null,
  and?: Array< ModelConvoLinkConditionInput | null > | null,
  or?: Array< ModelConvoLinkConditionInput | null > | null,
  not?: ModelConvoLinkConditionInput | null,
};

export type UpdateConvoLinkInput = {
  id: string,
  name?: string | null,
  status?: string | null,
  convoLinkUserId?: string | null,
  convoLinkConversationId?: string | null,
};

export type SearchableMessageFilterInput = {
  id?: SearchableIDFilterInput | null,
  content?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  chatbot?: SearchableBooleanFilterInput | null,
  isSent?: SearchableBooleanFilterInput | null,
  messageConversationId?: SearchableIDFilterInput | null,
  and?: Array< SearchableMessageFilterInput | null > | null,
  or?: Array< SearchableMessageFilterInput | null > | null,
  not?: SearchableMessageFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableMessageSortInput = {
  field?: SearchableMessageSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableMessageSortableFields {
  id = "id",
  content = "content",
  createdAt = "createdAt",
  owner = "owner",
  chatbot = "chatbot",
  isSent = "isSent",
  messageConversationId = "messageConversationId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  username?: SearchableStringFilterInput | null,
  registered?: SearchableBooleanFilterInput | null,
  and?: Array< SearchableUserFilterInput | null > | null,
  or?: Array< SearchableUserFilterInput | null > | null,
  not?: SearchableUserFilterInput | null,
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserSortableFields {
  id = "id",
  username = "username",
  registered = "registered",
}


export type SearchableConvoLinkFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  status?: SearchableStringFilterInput | null,
  convoLinkUserId?: SearchableIDFilterInput | null,
  and?: Array< SearchableConvoLinkFilterInput | null > | null,
  or?: Array< SearchableConvoLinkFilterInput | null > | null,
  not?: SearchableConvoLinkFilterInput | null,
};

export type SearchableConvoLinkSortInput = {
  field?: SearchableConvoLinkSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableConvoLinkSortableFields {
  id = "id",
  name = "name",
  status = "status",
  convoLinkUserId = "convoLinkUserId",
}


export type CreateConvoMutationVariables = {
  input: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConvoMutation = {
  createConvo:  {
    __typename: "Conversation",
    id: string,
    name: string,
    createdAt: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    associated:  {
      __typename: "ModelConvoLinkConnection",
      nextToken: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    createdAt: string | null,
    owner: string | null,
    chatbot: boolean | null,
    isSent: boolean | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    messageConversationId: string | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      createdAt: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type RegisterUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type RegisterUserMutation = {
  registerUser:  {
    __typename: "User",
    id: string,
    username: string,
    registered: boolean | null,
    userConversations:  {
      __typename: "ModelConvoLinkConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateConvoLinkMutationVariables = {
  input: CreateConvoLinkInput,
  condition?: ModelConvoLinkConditionInput | null,
};

export type CreateConvoLinkMutation = {
  createConvoLink:  {
    __typename: "ConvoLink",
    id: string,
    name: string | null,
    status: string | null,
    convoLinkUserId: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      registered: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      createdAt: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConvoLinkMutationVariables = {
  input: UpdateConvoLinkInput,
  condition?: ModelConvoLinkConditionInput | null,
};

export type UpdateConvoLinkMutation = {
  updateConvoLink:  {
    __typename: "ConvoLink",
    id: string,
    name: string | null,
    status: string | null,
    convoLinkUserId: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      registered: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      createdAt: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DetectCelebsQueryVariables = {
  bucket?: string | null,
  key?: string | null,
};

export type DetectCelebsQuery = {
  detectCelebs:  {
    __typename: "AI",
    bucket: string | null,
    key: string | null,
    bot: string | null,
    text: string | null,
    language: string | null,
    voice: string | null,
    response: string | null,
  } | null,
};

export type DetectLabelsQueryVariables = {
  bucket?: string | null,
  key?: string | null,
};

export type DetectLabelsQuery = {
  detectLabels:  {
    __typename: "AI",
    bucket: string | null,
    key: string | null,
    bot: string | null,
    text: string | null,
    language: string | null,
    voice: string | null,
    response: string | null,
  } | null,
};

export type DetectLanguageQueryVariables = {
  text?: string | null,
};

export type DetectLanguageQuery = {
  detectLanguage:  {
    __typename: "AI",
    bucket: string | null,
    key: string | null,
    bot: string | null,
    text: string | null,
    language: string | null,
    voice: string | null,
    response: string | null,
  } | null,
};

export type DetectEntitiesQueryVariables = {
  language?: string | null,
  text?: string | null,
};

export type DetectEntitiesQuery = {
  detectEntities:  {
    __typename: "AI",
    bucket: string | null,
    key: string | null,
    bot: string | null,
    text: string | null,
    language: string | null,
    voice: string | null,
    response: string | null,
  } | null,
};

export type DetectSentimentQueryVariables = {
  language?: string | null,
  text?: string | null,
};

export type DetectSentimentQuery = {
  detectSentiment:  {
    __typename: "AI",
    bucket: string | null,
    key: string | null,
    bot: string | null,
    text: string | null,
    language: string | null,
    voice: string | null,
    response: string | null,
  } | null,
};

export type InvokeBotQueryVariables = {
  bot?: string | null,
  text?: string | null,
};

export type InvokeBotQuery = {
  invokeBot:  {
    __typename: "AI",
    bucket: string | null,
    key: string | null,
    bot: string | null,
    text: string | null,
    language: string | null,
    voice: string | null,
    response: string | null,
  } | null,
};

export type DictateQueryVariables = {
  bucket?: string | null,
  key?: string | null,
  voice?: string | null,
  text?: string | null,
};

export type DictateQuery = {
  dictate:  {
    __typename: "AI",
    bucket: string | null,
    key: string | null,
    bot: string | null,
    text: string | null,
    language: string | null,
    voice: string | null,
    response: string | null,
  } | null,
};

export type TranslateQueryVariables = {
  language?: string | null,
  text?: string | null,
};

export type TranslateQuery = {
  translate:  {
    __typename: "AI",
    bucket: string | null,
    key: string | null,
    bot: string | null,
    text: string | null,
    language: string | null,
    voice: string | null,
    response: string | null,
  } | null,
};

export type GetConvoQueryVariables = {
  id: string,
};

export type GetConvoQuery = {
  getConvo:  {
    __typename: "Conversation",
    id: string,
    name: string,
    createdAt: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    associated:  {
      __typename: "ModelConvoLinkConnection",
      nextToken: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    registered: boolean | null,
    userConversations:  {
      __typename: "ModelConvoLinkConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type SearchMessagesQueryVariables = {
  filter?: SearchableMessageFilterInput | null,
  sort?: SearchableMessageSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchMessagesQuery = {
  searchMessages:  {
    __typename: "SearchableMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string | null,
      createdAt: string | null,
      owner: string | null,
      chatbot: boolean | null,
      isSent: boolean | null,
      messageConversationId: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null,
  sort?: SearchableUserSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchUsersQuery = {
  searchUsers:  {
    __typename: "SearchableUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      registered: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type SearchConvoLinksQueryVariables = {
  filter?: SearchableConvoLinkFilterInput | null,
  sort?: SearchableConvoLinkSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchConvoLinksQuery = {
  searchConvoLinks:  {
    __typename: "SearchableConvoLinkConnection",
    items:  Array< {
      __typename: "ConvoLink",
      id: string,
      name: string | null,
      status: string | null,
      convoLinkUserId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  messageConversationId: string,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    createdAt: string | null,
    owner: string | null,
    chatbot: boolean | null,
    isSent: boolean | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    messageConversationId: string | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      createdAt: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateConvoLinkSubscriptionVariables = {
  convoLinkUserId?: string | null,
  status?: string | null,
};

export type OnUpdateConvoLinkSubscription = {
  onUpdateConvoLink:  {
    __typename: "ConvoLink",
    id: string,
    name: string | null,
    status: string | null,
    convoLinkUserId: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      registered: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      createdAt: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
