export const typeDefs = /* GraphQL */ `type AggregateCategoriesEnEmbd {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateShop {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CategoriesEnEmbd {
  name: String!
}

type CategoriesEnEmbdConnection {
  pageInfo: PageInfo!
  edges: [CategoriesEnEmbdEdge]!
  aggregate: AggregateCategoriesEnEmbd!
}

input CategoriesEnEmbdCreateInput {
  name: String!
}

input CategoriesEnEmbdCreateOneInput {
  create: CategoriesEnEmbdCreateInput
}

type CategoriesEnEmbdEdge {
  node: CategoriesEnEmbd!
  cursor: String!
}

enum CategoriesEnEmbdOrderByInput {
  name_ASC
  name_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoriesEnEmbdPreviousValues {
  name: String!
}

type CategoriesEnEmbdSubscriptionPayload {
  mutation: MutationType!
  node: CategoriesEnEmbd
  updatedFields: [String!]
  previousValues: CategoriesEnEmbdPreviousValues
}

input CategoriesEnEmbdSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoriesEnEmbdWhereInput
  AND: [CategoriesEnEmbdSubscriptionWhereInput!]
  OR: [CategoriesEnEmbdSubscriptionWhereInput!]
  NOT: [CategoriesEnEmbdSubscriptionWhereInput!]
}

input CategoriesEnEmbdUpdateDataInput {
  name: String
}

input CategoriesEnEmbdUpdateManyMutationInput {
  name: String
}

input CategoriesEnEmbdUpdateOneInput {
  create: CategoriesEnEmbdCreateInput
  update: CategoriesEnEmbdUpdateDataInput
  upsert: CategoriesEnEmbdUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input CategoriesEnEmbdUpsertNestedInput {
  update: CategoriesEnEmbdUpdateDataInput!
  create: CategoriesEnEmbdCreateInput!
}

input CategoriesEnEmbdWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CategoriesEnEmbdWhereInput!]
  OR: [CategoriesEnEmbdWhereInput!]
  NOT: [CategoriesEnEmbdWhereInput!]
}

type Category {
  id: ID!
  iconCode: String!
  en: CategoriesEnEmbd
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  iconCode: String!
  en: CategoriesEnEmbdCreateOneInput
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  iconCode_ASC
  iconCode_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  iconCode: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateInput {
  iconCode: String
  en: CategoriesEnEmbdUpdateOneInput
}

input CategoryUpdateManyMutationInput {
  iconCode: String
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  iconCode: String
  iconCode_not: String
  iconCode_in: [String!]
  iconCode_not_in: [String!]
  iconCode_lt: String
  iconCode_lte: String
  iconCode_gt: String
  iconCode_gte: String
  iconCode_contains: String
  iconCode_not_contains: String
  iconCode_starts_with: String
  iconCode_not_starts_with: String
  iconCode_ends_with: String
  iconCode_not_ends_with: String
  en: CategoriesEnEmbdWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCategoriesEnEmbd(data: CategoriesEnEmbdCreateInput!): CategoriesEnEmbd!
  updateManyCategoriesEnEmbds(data: CategoriesEnEmbdUpdateManyMutationInput!, where: CategoriesEnEmbdWhereInput): BatchPayload!
  deleteManyCategoriesEnEmbds(where: CategoriesEnEmbdWhereInput): BatchPayload!
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createShop(data: ShopCreateInput!): Shop!
  updateShop(data: ShopUpdateInput!, where: ShopWhereUniqueInput!): Shop
  updateManyShops(data: ShopUpdateManyMutationInput!, where: ShopWhereInput): BatchPayload!
  upsertShop(where: ShopWhereUniqueInput!, create: ShopCreateInput!, update: ShopUpdateInput!): Shop!
  deleteShop(where: ShopWhereUniqueInput!): Shop
  deleteManyShops(where: ShopWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  categoriesEnEmbds(where: CategoriesEnEmbdWhereInput, orderBy: CategoriesEnEmbdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CategoriesEnEmbd]!
  categoriesEnEmbdsConnection(where: CategoriesEnEmbdWhereInput, orderBy: CategoriesEnEmbdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoriesEnEmbdConnection!
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  shop(where: ShopWhereUniqueInput!): Shop
  shops(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shop]!
  shopsConnection(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShopConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Shop {
  id: ID!
  name: String!
  address: String
  owner: User!
}

type ShopConnection {
  pageInfo: PageInfo!
  edges: [ShopEdge]!
  aggregate: AggregateShop!
}

input ShopCreateInput {
  name: String!
  address: String
  owner: UserCreateOneWithoutShopsInput!
}

input ShopCreateManyWithoutOwnerInput {
  create: [ShopCreateWithoutOwnerInput!]
  connect: [ShopWhereUniqueInput!]
}

input ShopCreateWithoutOwnerInput {
  name: String!
  address: String
}

type ShopEdge {
  node: Shop!
  cursor: String!
}

enum ShopOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ShopPreviousValues {
  id: ID!
  name: String!
  address: String
}

input ShopScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  AND: [ShopScalarWhereInput!]
  OR: [ShopScalarWhereInput!]
  NOT: [ShopScalarWhereInput!]
}

type ShopSubscriptionPayload {
  mutation: MutationType!
  node: Shop
  updatedFields: [String!]
  previousValues: ShopPreviousValues
}

input ShopSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ShopWhereInput
  AND: [ShopSubscriptionWhereInput!]
  OR: [ShopSubscriptionWhereInput!]
  NOT: [ShopSubscriptionWhereInput!]
}

input ShopUpdateInput {
  name: String
  address: String
  owner: UserUpdateOneRequiredWithoutShopsInput
}

input ShopUpdateManyDataInput {
  name: String
  address: String
}

input ShopUpdateManyMutationInput {
  name: String
  address: String
}

input ShopUpdateManyWithoutOwnerInput {
  create: [ShopCreateWithoutOwnerInput!]
  delete: [ShopWhereUniqueInput!]
  connect: [ShopWhereUniqueInput!]
  disconnect: [ShopWhereUniqueInput!]
  update: [ShopUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ShopUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ShopScalarWhereInput!]
  updateMany: [ShopUpdateManyWithWhereNestedInput!]
}

input ShopUpdateManyWithWhereNestedInput {
  where: ShopScalarWhereInput!
  data: ShopUpdateManyDataInput!
}

input ShopUpdateWithoutOwnerDataInput {
  name: String
  address: String
}

input ShopUpdateWithWhereUniqueWithoutOwnerInput {
  where: ShopWhereUniqueInput!
  data: ShopUpdateWithoutOwnerDataInput!
}

input ShopUpsertWithWhereUniqueWithoutOwnerInput {
  where: ShopWhereUniqueInput!
  update: ShopUpdateWithoutOwnerDataInput!
  create: ShopCreateWithoutOwnerInput!
}

input ShopWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  owner: UserWhereInput
  AND: [ShopWhereInput!]
  OR: [ShopWhereInput!]
  NOT: [ShopWhereInput!]
}

input ShopWhereUniqueInput {
  id: ID
}

type Subscription {
  categoriesEnEmbd(where: CategoriesEnEmbdSubscriptionWhereInput): CategoriesEnEmbdSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  shop(where: ShopSubscriptionWhereInput): ShopSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String
  shops(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shop!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String
  shops: ShopCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutShopsInput {
  create: UserCreateWithoutShopsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutShopsInput {
  name: String!
  email: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  shops: ShopUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateOneRequiredWithoutShopsInput {
  create: UserCreateWithoutShopsInput
  update: UserUpdateWithoutShopsDataInput
  upsert: UserUpsertWithoutShopsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutShopsDataInput {
  name: String
  email: String
}

input UserUpsertWithoutShopsInput {
  update: UserUpdateWithoutShopsDataInput!
  create: UserCreateWithoutShopsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  shops_every: ShopWhereInput
  shops_some: ShopWhereInput
  shops_none: ShopWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`