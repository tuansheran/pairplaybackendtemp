
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Couple
 * 
 */
export type Couple = $Result.DefaultSelection<Prisma.$CouplePayload>
/**
 * Model DateIdea
 * 
 */
export type DateIdea = $Result.DefaultSelection<Prisma.$DateIdeaPayload>
/**
 * Model SavedDateIdea
 * 
 */
export type SavedDateIdea = $Result.DefaultSelection<Prisma.$SavedDateIdeaPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.couple`: Exposes CRUD operations for the **Couple** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couples
    * const couples = await prisma.couple.findMany()
    * ```
    */
  get couple(): Prisma.CoupleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dateIdea`: Exposes CRUD operations for the **DateIdea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateIdeas
    * const dateIdeas = await prisma.dateIdea.findMany()
    * ```
    */
  get dateIdea(): Prisma.DateIdeaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedDateIdea`: Exposes CRUD operations for the **SavedDateIdea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedDateIdeas
    * const savedDateIdeas = await prisma.savedDateIdea.findMany()
    * ```
    */
  get savedDateIdea(): Prisma.SavedDateIdeaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Couple: 'Couple',
    DateIdea: 'DateIdea',
    SavedDateIdea: 'SavedDateIdea',
    Request: 'Request'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "couple" | "dateIdea" | "savedDateIdea" | "request"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Couple: {
        payload: Prisma.$CouplePayload<ExtArgs>
        fields: Prisma.CoupleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoupleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoupleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          findFirst: {
            args: Prisma.CoupleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoupleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          findMany: {
            args: Prisma.CoupleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>[]
          }
          create: {
            args: Prisma.CoupleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          createMany: {
            args: Prisma.CoupleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoupleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>[]
          }
          delete: {
            args: Prisma.CoupleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          update: {
            args: Prisma.CoupleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          deleteMany: {
            args: Prisma.CoupleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoupleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoupleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>[]
          }
          upsert: {
            args: Prisma.CoupleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          aggregate: {
            args: Prisma.CoupleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouple>
          }
          groupBy: {
            args: Prisma.CoupleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoupleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoupleCountArgs<ExtArgs>
            result: $Utils.Optional<CoupleCountAggregateOutputType> | number
          }
        }
      }
      DateIdea: {
        payload: Prisma.$DateIdeaPayload<ExtArgs>
        fields: Prisma.DateIdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DateIdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DateIdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>
          }
          findFirst: {
            args: Prisma.DateIdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DateIdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>
          }
          findMany: {
            args: Prisma.DateIdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>[]
          }
          create: {
            args: Prisma.DateIdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>
          }
          createMany: {
            args: Prisma.DateIdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DateIdeaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>[]
          }
          delete: {
            args: Prisma.DateIdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>
          }
          update: {
            args: Prisma.DateIdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>
          }
          deleteMany: {
            args: Prisma.DateIdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DateIdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DateIdeaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>[]
          }
          upsert: {
            args: Prisma.DateIdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateIdeaPayload>
          }
          aggregate: {
            args: Prisma.DateIdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDateIdea>
          }
          groupBy: {
            args: Prisma.DateIdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DateIdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DateIdeaCountArgs<ExtArgs>
            result: $Utils.Optional<DateIdeaCountAggregateOutputType> | number
          }
        }
      }
      SavedDateIdea: {
        payload: Prisma.$SavedDateIdeaPayload<ExtArgs>
        fields: Prisma.SavedDateIdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedDateIdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedDateIdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>
          }
          findFirst: {
            args: Prisma.SavedDateIdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedDateIdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>
          }
          findMany: {
            args: Prisma.SavedDateIdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>[]
          }
          create: {
            args: Prisma.SavedDateIdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>
          }
          createMany: {
            args: Prisma.SavedDateIdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedDateIdeaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>[]
          }
          delete: {
            args: Prisma.SavedDateIdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>
          }
          update: {
            args: Prisma.SavedDateIdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>
          }
          deleteMany: {
            args: Prisma.SavedDateIdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedDateIdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedDateIdeaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>[]
          }
          upsert: {
            args: Prisma.SavedDateIdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedDateIdeaPayload>
          }
          aggregate: {
            args: Prisma.SavedDateIdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedDateIdea>
          }
          groupBy: {
            args: Prisma.SavedDateIdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedDateIdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedDateIdeaCountArgs<ExtArgs>
            result: $Utils.Optional<SavedDateIdeaCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    couple?: CoupleOmit
    dateIdea?: DateIdeaOmit
    savedDateIdea?: SavedDateIdeaOmit
    request?: RequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentRequests: number
    receivedRequests: number
    SavedDateIdeas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
    SavedDateIdeas?: boolean | UserCountOutputTypeCountSavedDateIdeasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedDateIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedDateIdeaWhereInput
  }


  /**
   * Count Type CoupleCountOutputType
   */

  export type CoupleCountOutputType = {
    users: number
  }

  export type CoupleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CoupleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CoupleCountOutputType without action
   */
  export type CoupleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleCountOutputType
     */
    select?: CoupleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoupleCountOutputType without action
   */
  export type CoupleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DateIdeaCountOutputType
   */

  export type DateIdeaCountOutputType = {
    savedBy: number
  }

  export type DateIdeaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | DateIdeaCountOutputTypeCountSavedByArgs
  }

  // Custom InputTypes
  /**
   * DateIdeaCountOutputType without action
   */
  export type DateIdeaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdeaCountOutputType
     */
    select?: DateIdeaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DateIdeaCountOutputType without action
   */
  export type DateIdeaCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedDateIdeaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    shareCode: string | null
    coupleId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    shareCode: string | null
    coupleId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    shareCode: number
    coupleId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    shareCode?: true
    coupleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    shareCode?: true
    coupleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    shareCode?: true
    coupleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    shareCode: string
    coupleId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    shareCode?: boolean
    coupleId?: boolean
    couple?: boolean | User$coupleArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    SavedDateIdeas?: boolean | User$SavedDateIdeasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    shareCode?: boolean
    coupleId?: boolean
    couple?: boolean | User$coupleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    shareCode?: boolean
    coupleId?: boolean
    couple?: boolean | User$coupleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    shareCode?: boolean
    coupleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "shareCode" | "coupleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | User$coupleArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    SavedDateIdeas?: boolean | User$SavedDateIdeasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | User$coupleArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | User$coupleArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      couple: Prisma.$CouplePayload<ExtArgs> | null
      sentRequests: Prisma.$RequestPayload<ExtArgs>[]
      receivedRequests: Prisma.$RequestPayload<ExtArgs>[]
      SavedDateIdeas: Prisma.$SavedDateIdeaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      shareCode: string
      coupleId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    couple<T extends User$coupleArgs<ExtArgs> = {}>(args?: Subset<T, User$coupleArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SavedDateIdeas<T extends User$SavedDateIdeasArgs<ExtArgs> = {}>(args?: Subset<T, User$SavedDateIdeasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly shareCode: FieldRef<"User", 'String'>
    readonly coupleId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.couple
   */
  export type User$coupleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
  }

  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.SavedDateIdeas
   */
  export type User$SavedDateIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    where?: SavedDateIdeaWhereInput
    orderBy?: SavedDateIdeaOrderByWithRelationInput | SavedDateIdeaOrderByWithRelationInput[]
    cursor?: SavedDateIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedDateIdeaScalarFieldEnum | SavedDateIdeaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Couple
   */

  export type AggregateCouple = {
    _count: CoupleCountAggregateOutputType | null
    _min: CoupleMinAggregateOutputType | null
    _max: CoupleMaxAggregateOutputType | null
  }

  export type CoupleMinAggregateOutputType = {
    id: string | null
    coupleName: string | null
    startDate: Date | null
  }

  export type CoupleMaxAggregateOutputType = {
    id: string | null
    coupleName: string | null
    startDate: Date | null
  }

  export type CoupleCountAggregateOutputType = {
    id: number
    coupleName: number
    startDate: number
    _all: number
  }


  export type CoupleMinAggregateInputType = {
    id?: true
    coupleName?: true
    startDate?: true
  }

  export type CoupleMaxAggregateInputType = {
    id?: true
    coupleName?: true
    startDate?: true
  }

  export type CoupleCountAggregateInputType = {
    id?: true
    coupleName?: true
    startDate?: true
    _all?: true
  }

  export type CoupleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couple to aggregate.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couples
    **/
    _count?: true | CoupleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoupleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoupleMaxAggregateInputType
  }

  export type GetCoupleAggregateType<T extends CoupleAggregateArgs> = {
        [P in keyof T & keyof AggregateCouple]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouple[P]>
      : GetScalarType<T[P], AggregateCouple[P]>
  }




  export type CoupleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithAggregationInput | CoupleOrderByWithAggregationInput[]
    by: CoupleScalarFieldEnum[] | CoupleScalarFieldEnum
    having?: CoupleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoupleCountAggregateInputType | true
    _min?: CoupleMinAggregateInputType
    _max?: CoupleMaxAggregateInputType
  }

  export type CoupleGroupByOutputType = {
    id: string
    coupleName: string
    startDate: Date
    _count: CoupleCountAggregateOutputType | null
    _min: CoupleMinAggregateOutputType | null
    _max: CoupleMaxAggregateOutputType | null
  }

  type GetCoupleGroupByPayload<T extends CoupleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoupleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoupleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoupleGroupByOutputType[P]>
            : GetScalarType<T[P], CoupleGroupByOutputType[P]>
        }
      >
    >


  export type CoupleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleName?: boolean
    startDate?: boolean
    users?: boolean | Couple$usersArgs<ExtArgs>
    _count?: boolean | CoupleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couple"]>

  export type CoupleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleName?: boolean
    startDate?: boolean
  }, ExtArgs["result"]["couple"]>

  export type CoupleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleName?: boolean
    startDate?: boolean
  }, ExtArgs["result"]["couple"]>

  export type CoupleSelectScalar = {
    id?: boolean
    coupleName?: boolean
    startDate?: boolean
  }

  export type CoupleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coupleName" | "startDate", ExtArgs["result"]["couple"]>
  export type CoupleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Couple$usersArgs<ExtArgs>
    _count?: boolean | CoupleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoupleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CoupleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CouplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Couple"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coupleName: string
      startDate: Date
    }, ExtArgs["result"]["couple"]>
    composites: {}
  }

  type CoupleGetPayload<S extends boolean | null | undefined | CoupleDefaultArgs> = $Result.GetResult<Prisma.$CouplePayload, S>

  type CoupleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoupleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoupleCountAggregateInputType | true
    }

  export interface CoupleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Couple'], meta: { name: 'Couple' } }
    /**
     * Find zero or one Couple that matches the filter.
     * @param {CoupleFindUniqueArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoupleFindUniqueArgs>(args: SelectSubset<T, CoupleFindUniqueArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Couple that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoupleFindUniqueOrThrowArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoupleFindUniqueOrThrowArgs>(args: SelectSubset<T, CoupleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Couple that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindFirstArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoupleFindFirstArgs>(args?: SelectSubset<T, CoupleFindFirstArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Couple that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindFirstOrThrowArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoupleFindFirstOrThrowArgs>(args?: SelectSubset<T, CoupleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Couples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couples
     * const couples = await prisma.couple.findMany()
     * 
     * // Get first 10 Couples
     * const couples = await prisma.couple.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coupleWithIdOnly = await prisma.couple.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoupleFindManyArgs>(args?: SelectSubset<T, CoupleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Couple.
     * @param {CoupleCreateArgs} args - Arguments to create a Couple.
     * @example
     * // Create one Couple
     * const Couple = await prisma.couple.create({
     *   data: {
     *     // ... data to create a Couple
     *   }
     * })
     * 
     */
    create<T extends CoupleCreateArgs>(args: SelectSubset<T, CoupleCreateArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Couples.
     * @param {CoupleCreateManyArgs} args - Arguments to create many Couples.
     * @example
     * // Create many Couples
     * const couple = await prisma.couple.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoupleCreateManyArgs>(args?: SelectSubset<T, CoupleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Couples and returns the data saved in the database.
     * @param {CoupleCreateManyAndReturnArgs} args - Arguments to create many Couples.
     * @example
     * // Create many Couples
     * const couple = await prisma.couple.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Couples and only return the `id`
     * const coupleWithIdOnly = await prisma.couple.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoupleCreateManyAndReturnArgs>(args?: SelectSubset<T, CoupleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Couple.
     * @param {CoupleDeleteArgs} args - Arguments to delete one Couple.
     * @example
     * // Delete one Couple
     * const Couple = await prisma.couple.delete({
     *   where: {
     *     // ... filter to delete one Couple
     *   }
     * })
     * 
     */
    delete<T extends CoupleDeleteArgs>(args: SelectSubset<T, CoupleDeleteArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Couple.
     * @param {CoupleUpdateArgs} args - Arguments to update one Couple.
     * @example
     * // Update one Couple
     * const couple = await prisma.couple.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoupleUpdateArgs>(args: SelectSubset<T, CoupleUpdateArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Couples.
     * @param {CoupleDeleteManyArgs} args - Arguments to filter Couples to delete.
     * @example
     * // Delete a few Couples
     * const { count } = await prisma.couple.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoupleDeleteManyArgs>(args?: SelectSubset<T, CoupleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couples
     * const couple = await prisma.couple.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoupleUpdateManyArgs>(args: SelectSubset<T, CoupleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couples and returns the data updated in the database.
     * @param {CoupleUpdateManyAndReturnArgs} args - Arguments to update many Couples.
     * @example
     * // Update many Couples
     * const couple = await prisma.couple.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Couples and only return the `id`
     * const coupleWithIdOnly = await prisma.couple.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoupleUpdateManyAndReturnArgs>(args: SelectSubset<T, CoupleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Couple.
     * @param {CoupleUpsertArgs} args - Arguments to update or create a Couple.
     * @example
     * // Update or create a Couple
     * const couple = await prisma.couple.upsert({
     *   create: {
     *     // ... data to create a Couple
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Couple we want to update
     *   }
     * })
     */
    upsert<T extends CoupleUpsertArgs>(args: SelectSubset<T, CoupleUpsertArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Couples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleCountArgs} args - Arguments to filter Couples to count.
     * @example
     * // Count the number of Couples
     * const count = await prisma.couple.count({
     *   where: {
     *     // ... the filter for the Couples we want to count
     *   }
     * })
    **/
    count<T extends CoupleCountArgs>(
      args?: Subset<T, CoupleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoupleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Couple.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoupleAggregateArgs>(args: Subset<T, CoupleAggregateArgs>): Prisma.PrismaPromise<GetCoupleAggregateType<T>>

    /**
     * Group by Couple.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoupleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoupleGroupByArgs['orderBy'] }
        : { orderBy?: CoupleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoupleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoupleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Couple model
   */
  readonly fields: CoupleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Couple.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoupleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Couple$usersArgs<ExtArgs> = {}>(args?: Subset<T, Couple$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Couple model
   */
  interface CoupleFieldRefs {
    readonly id: FieldRef<"Couple", 'String'>
    readonly coupleName: FieldRef<"Couple", 'String'>
    readonly startDate: FieldRef<"Couple", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Couple findUnique
   */
  export type CoupleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple findUniqueOrThrow
   */
  export type CoupleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple findFirst
   */
  export type CoupleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couples.
     */
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple findFirstOrThrow
   */
  export type CoupleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couples.
     */
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple findMany
   */
  export type CoupleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couples to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple create
   */
  export type CoupleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The data needed to create a Couple.
     */
    data: XOR<CoupleCreateInput, CoupleUncheckedCreateInput>
  }

  /**
   * Couple createMany
   */
  export type CoupleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Couples.
     */
    data: CoupleCreateManyInput | CoupleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Couple createManyAndReturn
   */
  export type CoupleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * The data used to create many Couples.
     */
    data: CoupleCreateManyInput | CoupleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Couple update
   */
  export type CoupleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The data needed to update a Couple.
     */
    data: XOR<CoupleUpdateInput, CoupleUncheckedUpdateInput>
    /**
     * Choose, which Couple to update.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple updateMany
   */
  export type CoupleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Couples.
     */
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyInput>
    /**
     * Filter which Couples to update
     */
    where?: CoupleWhereInput
    /**
     * Limit how many Couples to update.
     */
    limit?: number
  }

  /**
   * Couple updateManyAndReturn
   */
  export type CoupleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * The data used to update Couples.
     */
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyInput>
    /**
     * Filter which Couples to update
     */
    where?: CoupleWhereInput
    /**
     * Limit how many Couples to update.
     */
    limit?: number
  }

  /**
   * Couple upsert
   */
  export type CoupleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The filter to search for the Couple to update in case it exists.
     */
    where: CoupleWhereUniqueInput
    /**
     * In case the Couple found by the `where` argument doesn't exist, create a new Couple with this data.
     */
    create: XOR<CoupleCreateInput, CoupleUncheckedCreateInput>
    /**
     * In case the Couple was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoupleUpdateInput, CoupleUncheckedUpdateInput>
  }

  /**
   * Couple delete
   */
  export type CoupleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter which Couple to delete.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple deleteMany
   */
  export type CoupleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couples to delete
     */
    where?: CoupleWhereInput
    /**
     * Limit how many Couples to delete.
     */
    limit?: number
  }

  /**
   * Couple.users
   */
  export type Couple$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Couple without action
   */
  export type CoupleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
  }


  /**
   * Model DateIdea
   */

  export type AggregateDateIdea = {
    _count: DateIdeaCountAggregateOutputType | null
    _min: DateIdeaMinAggregateOutputType | null
    _max: DateIdeaMaxAggregateOutputType | null
  }

  export type DateIdeaMinAggregateOutputType = {
    id: string | null
    idea: string | null
    createdAt: Date | null
  }

  export type DateIdeaMaxAggregateOutputType = {
    id: string | null
    idea: string | null
    createdAt: Date | null
  }

  export type DateIdeaCountAggregateOutputType = {
    id: number
    idea: number
    createdAt: number
    _all: number
  }


  export type DateIdeaMinAggregateInputType = {
    id?: true
    idea?: true
    createdAt?: true
  }

  export type DateIdeaMaxAggregateInputType = {
    id?: true
    idea?: true
    createdAt?: true
  }

  export type DateIdeaCountAggregateInputType = {
    id?: true
    idea?: true
    createdAt?: true
    _all?: true
  }

  export type DateIdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateIdea to aggregate.
     */
    where?: DateIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateIdeas to fetch.
     */
    orderBy?: DateIdeaOrderByWithRelationInput | DateIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateIdeas
    **/
    _count?: true | DateIdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateIdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateIdeaMaxAggregateInputType
  }

  export type GetDateIdeaAggregateType<T extends DateIdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateDateIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateIdea[P]>
      : GetScalarType<T[P], AggregateDateIdea[P]>
  }




  export type DateIdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateIdeaWhereInput
    orderBy?: DateIdeaOrderByWithAggregationInput | DateIdeaOrderByWithAggregationInput[]
    by: DateIdeaScalarFieldEnum[] | DateIdeaScalarFieldEnum
    having?: DateIdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateIdeaCountAggregateInputType | true
    _min?: DateIdeaMinAggregateInputType
    _max?: DateIdeaMaxAggregateInputType
  }

  export type DateIdeaGroupByOutputType = {
    id: string
    idea: string
    createdAt: Date
    _count: DateIdeaCountAggregateOutputType | null
    _min: DateIdeaMinAggregateOutputType | null
    _max: DateIdeaMaxAggregateOutputType | null
  }

  type GetDateIdeaGroupByPayload<T extends DateIdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DateIdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateIdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateIdeaGroupByOutputType[P]>
            : GetScalarType<T[P], DateIdeaGroupByOutputType[P]>
        }
      >
    >


  export type DateIdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idea?: boolean
    createdAt?: boolean
    savedBy?: boolean | DateIdea$savedByArgs<ExtArgs>
    _count?: boolean | DateIdeaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateIdea"]>

  export type DateIdeaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idea?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dateIdea"]>

  export type DateIdeaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idea?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dateIdea"]>

  export type DateIdeaSelectScalar = {
    id?: boolean
    idea?: boolean
    createdAt?: boolean
  }

  export type DateIdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idea" | "createdAt", ExtArgs["result"]["dateIdea"]>
  export type DateIdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | DateIdea$savedByArgs<ExtArgs>
    _count?: boolean | DateIdeaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DateIdeaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DateIdeaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DateIdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DateIdea"
    objects: {
      savedBy: Prisma.$SavedDateIdeaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idea: string
      createdAt: Date
    }, ExtArgs["result"]["dateIdea"]>
    composites: {}
  }

  type DateIdeaGetPayload<S extends boolean | null | undefined | DateIdeaDefaultArgs> = $Result.GetResult<Prisma.$DateIdeaPayload, S>

  type DateIdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DateIdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DateIdeaCountAggregateInputType | true
    }

  export interface DateIdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DateIdea'], meta: { name: 'DateIdea' } }
    /**
     * Find zero or one DateIdea that matches the filter.
     * @param {DateIdeaFindUniqueArgs} args - Arguments to find a DateIdea
     * @example
     * // Get one DateIdea
     * const dateIdea = await prisma.dateIdea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DateIdeaFindUniqueArgs>(args: SelectSubset<T, DateIdeaFindUniqueArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DateIdea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DateIdeaFindUniqueOrThrowArgs} args - Arguments to find a DateIdea
     * @example
     * // Get one DateIdea
     * const dateIdea = await prisma.dateIdea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DateIdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, DateIdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateIdea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateIdeaFindFirstArgs} args - Arguments to find a DateIdea
     * @example
     * // Get one DateIdea
     * const dateIdea = await prisma.dateIdea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DateIdeaFindFirstArgs>(args?: SelectSubset<T, DateIdeaFindFirstArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateIdea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateIdeaFindFirstOrThrowArgs} args - Arguments to find a DateIdea
     * @example
     * // Get one DateIdea
     * const dateIdea = await prisma.dateIdea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DateIdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, DateIdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DateIdeas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateIdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateIdeas
     * const dateIdeas = await prisma.dateIdea.findMany()
     * 
     * // Get first 10 DateIdeas
     * const dateIdeas = await prisma.dateIdea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateIdeaWithIdOnly = await prisma.dateIdea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DateIdeaFindManyArgs>(args?: SelectSubset<T, DateIdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DateIdea.
     * @param {DateIdeaCreateArgs} args - Arguments to create a DateIdea.
     * @example
     * // Create one DateIdea
     * const DateIdea = await prisma.dateIdea.create({
     *   data: {
     *     // ... data to create a DateIdea
     *   }
     * })
     * 
     */
    create<T extends DateIdeaCreateArgs>(args: SelectSubset<T, DateIdeaCreateArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DateIdeas.
     * @param {DateIdeaCreateManyArgs} args - Arguments to create many DateIdeas.
     * @example
     * // Create many DateIdeas
     * const dateIdea = await prisma.dateIdea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DateIdeaCreateManyArgs>(args?: SelectSubset<T, DateIdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DateIdeas and returns the data saved in the database.
     * @param {DateIdeaCreateManyAndReturnArgs} args - Arguments to create many DateIdeas.
     * @example
     * // Create many DateIdeas
     * const dateIdea = await prisma.dateIdea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DateIdeas and only return the `id`
     * const dateIdeaWithIdOnly = await prisma.dateIdea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DateIdeaCreateManyAndReturnArgs>(args?: SelectSubset<T, DateIdeaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DateIdea.
     * @param {DateIdeaDeleteArgs} args - Arguments to delete one DateIdea.
     * @example
     * // Delete one DateIdea
     * const DateIdea = await prisma.dateIdea.delete({
     *   where: {
     *     // ... filter to delete one DateIdea
     *   }
     * })
     * 
     */
    delete<T extends DateIdeaDeleteArgs>(args: SelectSubset<T, DateIdeaDeleteArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DateIdea.
     * @param {DateIdeaUpdateArgs} args - Arguments to update one DateIdea.
     * @example
     * // Update one DateIdea
     * const dateIdea = await prisma.dateIdea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DateIdeaUpdateArgs>(args: SelectSubset<T, DateIdeaUpdateArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DateIdeas.
     * @param {DateIdeaDeleteManyArgs} args - Arguments to filter DateIdeas to delete.
     * @example
     * // Delete a few DateIdeas
     * const { count } = await prisma.dateIdea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DateIdeaDeleteManyArgs>(args?: SelectSubset<T, DateIdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateIdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateIdeas
     * const dateIdea = await prisma.dateIdea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DateIdeaUpdateManyArgs>(args: SelectSubset<T, DateIdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateIdeas and returns the data updated in the database.
     * @param {DateIdeaUpdateManyAndReturnArgs} args - Arguments to update many DateIdeas.
     * @example
     * // Update many DateIdeas
     * const dateIdea = await prisma.dateIdea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DateIdeas and only return the `id`
     * const dateIdeaWithIdOnly = await prisma.dateIdea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DateIdeaUpdateManyAndReturnArgs>(args: SelectSubset<T, DateIdeaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DateIdea.
     * @param {DateIdeaUpsertArgs} args - Arguments to update or create a DateIdea.
     * @example
     * // Update or create a DateIdea
     * const dateIdea = await prisma.dateIdea.upsert({
     *   create: {
     *     // ... data to create a DateIdea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateIdea we want to update
     *   }
     * })
     */
    upsert<T extends DateIdeaUpsertArgs>(args: SelectSubset<T, DateIdeaUpsertArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DateIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateIdeaCountArgs} args - Arguments to filter DateIdeas to count.
     * @example
     * // Count the number of DateIdeas
     * const count = await prisma.dateIdea.count({
     *   where: {
     *     // ... the filter for the DateIdeas we want to count
     *   }
     * })
    **/
    count<T extends DateIdeaCountArgs>(
      args?: Subset<T, DateIdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateIdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateIdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DateIdeaAggregateArgs>(args: Subset<T, DateIdeaAggregateArgs>): Prisma.PrismaPromise<GetDateIdeaAggregateType<T>>

    /**
     * Group by DateIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateIdeaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DateIdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateIdeaGroupByArgs['orderBy'] }
        : { orderBy?: DateIdeaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DateIdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DateIdea model
   */
  readonly fields: DateIdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DateIdea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DateIdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedBy<T extends DateIdea$savedByArgs<ExtArgs> = {}>(args?: Subset<T, DateIdea$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DateIdea model
   */
  interface DateIdeaFieldRefs {
    readonly id: FieldRef<"DateIdea", 'String'>
    readonly idea: FieldRef<"DateIdea", 'String'>
    readonly createdAt: FieldRef<"DateIdea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DateIdea findUnique
   */
  export type DateIdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which DateIdea to fetch.
     */
    where: DateIdeaWhereUniqueInput
  }

  /**
   * DateIdea findUniqueOrThrow
   */
  export type DateIdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which DateIdea to fetch.
     */
    where: DateIdeaWhereUniqueInput
  }

  /**
   * DateIdea findFirst
   */
  export type DateIdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which DateIdea to fetch.
     */
    where?: DateIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateIdeas to fetch.
     */
    orderBy?: DateIdeaOrderByWithRelationInput | DateIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateIdeas.
     */
    cursor?: DateIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateIdeas.
     */
    distinct?: DateIdeaScalarFieldEnum | DateIdeaScalarFieldEnum[]
  }

  /**
   * DateIdea findFirstOrThrow
   */
  export type DateIdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which DateIdea to fetch.
     */
    where?: DateIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateIdeas to fetch.
     */
    orderBy?: DateIdeaOrderByWithRelationInput | DateIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateIdeas.
     */
    cursor?: DateIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateIdeas.
     */
    distinct?: DateIdeaScalarFieldEnum | DateIdeaScalarFieldEnum[]
  }

  /**
   * DateIdea findMany
   */
  export type DateIdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which DateIdeas to fetch.
     */
    where?: DateIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateIdeas to fetch.
     */
    orderBy?: DateIdeaOrderByWithRelationInput | DateIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateIdeas.
     */
    cursor?: DateIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateIdeas.
     */
    skip?: number
    distinct?: DateIdeaScalarFieldEnum | DateIdeaScalarFieldEnum[]
  }

  /**
   * DateIdea create
   */
  export type DateIdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a DateIdea.
     */
    data: XOR<DateIdeaCreateInput, DateIdeaUncheckedCreateInput>
  }

  /**
   * DateIdea createMany
   */
  export type DateIdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DateIdeas.
     */
    data: DateIdeaCreateManyInput | DateIdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DateIdea createManyAndReturn
   */
  export type DateIdeaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * The data used to create many DateIdeas.
     */
    data: DateIdeaCreateManyInput | DateIdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DateIdea update
   */
  export type DateIdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a DateIdea.
     */
    data: XOR<DateIdeaUpdateInput, DateIdeaUncheckedUpdateInput>
    /**
     * Choose, which DateIdea to update.
     */
    where: DateIdeaWhereUniqueInput
  }

  /**
   * DateIdea updateMany
   */
  export type DateIdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DateIdeas.
     */
    data: XOR<DateIdeaUpdateManyMutationInput, DateIdeaUncheckedUpdateManyInput>
    /**
     * Filter which DateIdeas to update
     */
    where?: DateIdeaWhereInput
    /**
     * Limit how many DateIdeas to update.
     */
    limit?: number
  }

  /**
   * DateIdea updateManyAndReturn
   */
  export type DateIdeaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * The data used to update DateIdeas.
     */
    data: XOR<DateIdeaUpdateManyMutationInput, DateIdeaUncheckedUpdateManyInput>
    /**
     * Filter which DateIdeas to update
     */
    where?: DateIdeaWhereInput
    /**
     * Limit how many DateIdeas to update.
     */
    limit?: number
  }

  /**
   * DateIdea upsert
   */
  export type DateIdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the DateIdea to update in case it exists.
     */
    where: DateIdeaWhereUniqueInput
    /**
     * In case the DateIdea found by the `where` argument doesn't exist, create a new DateIdea with this data.
     */
    create: XOR<DateIdeaCreateInput, DateIdeaUncheckedCreateInput>
    /**
     * In case the DateIdea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateIdeaUpdateInput, DateIdeaUncheckedUpdateInput>
  }

  /**
   * DateIdea delete
   */
  export type DateIdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
    /**
     * Filter which DateIdea to delete.
     */
    where: DateIdeaWhereUniqueInput
  }

  /**
   * DateIdea deleteMany
   */
  export type DateIdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateIdeas to delete
     */
    where?: DateIdeaWhereInput
    /**
     * Limit how many DateIdeas to delete.
     */
    limit?: number
  }

  /**
   * DateIdea.savedBy
   */
  export type DateIdea$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    where?: SavedDateIdeaWhereInput
    orderBy?: SavedDateIdeaOrderByWithRelationInput | SavedDateIdeaOrderByWithRelationInput[]
    cursor?: SavedDateIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedDateIdeaScalarFieldEnum | SavedDateIdeaScalarFieldEnum[]
  }

  /**
   * DateIdea without action
   */
  export type DateIdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateIdea
     */
    select?: DateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateIdea
     */
    omit?: DateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateIdeaInclude<ExtArgs> | null
  }


  /**
   * Model SavedDateIdea
   */

  export type AggregateSavedDateIdea = {
    _count: SavedDateIdeaCountAggregateOutputType | null
    _avg: SavedDateIdeaAvgAggregateOutputType | null
    _sum: SavedDateIdeaSumAggregateOutputType | null
    _min: SavedDateIdeaMinAggregateOutputType | null
    _max: SavedDateIdeaMaxAggregateOutputType | null
  }

  export type SavedDateIdeaAvgAggregateOutputType = {
    id: number | null
  }

  export type SavedDateIdeaSumAggregateOutputType = {
    id: number | null
  }

  export type SavedDateIdeaMinAggregateOutputType = {
    id: number | null
    userId: string | null
    dateIdeaId: string | null
  }

  export type SavedDateIdeaMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    dateIdeaId: string | null
  }

  export type SavedDateIdeaCountAggregateOutputType = {
    id: number
    userId: number
    dateIdeaId: number
    _all: number
  }


  export type SavedDateIdeaAvgAggregateInputType = {
    id?: true
  }

  export type SavedDateIdeaSumAggregateInputType = {
    id?: true
  }

  export type SavedDateIdeaMinAggregateInputType = {
    id?: true
    userId?: true
    dateIdeaId?: true
  }

  export type SavedDateIdeaMaxAggregateInputType = {
    id?: true
    userId?: true
    dateIdeaId?: true
  }

  export type SavedDateIdeaCountAggregateInputType = {
    id?: true
    userId?: true
    dateIdeaId?: true
    _all?: true
  }

  export type SavedDateIdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedDateIdea to aggregate.
     */
    where?: SavedDateIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedDateIdeas to fetch.
     */
    orderBy?: SavedDateIdeaOrderByWithRelationInput | SavedDateIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedDateIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedDateIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedDateIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedDateIdeas
    **/
    _count?: true | SavedDateIdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedDateIdeaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedDateIdeaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedDateIdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedDateIdeaMaxAggregateInputType
  }

  export type GetSavedDateIdeaAggregateType<T extends SavedDateIdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedDateIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedDateIdea[P]>
      : GetScalarType<T[P], AggregateSavedDateIdea[P]>
  }




  export type SavedDateIdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedDateIdeaWhereInput
    orderBy?: SavedDateIdeaOrderByWithAggregationInput | SavedDateIdeaOrderByWithAggregationInput[]
    by: SavedDateIdeaScalarFieldEnum[] | SavedDateIdeaScalarFieldEnum
    having?: SavedDateIdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedDateIdeaCountAggregateInputType | true
    _avg?: SavedDateIdeaAvgAggregateInputType
    _sum?: SavedDateIdeaSumAggregateInputType
    _min?: SavedDateIdeaMinAggregateInputType
    _max?: SavedDateIdeaMaxAggregateInputType
  }

  export type SavedDateIdeaGroupByOutputType = {
    id: number
    userId: string
    dateIdeaId: string
    _count: SavedDateIdeaCountAggregateOutputType | null
    _avg: SavedDateIdeaAvgAggregateOutputType | null
    _sum: SavedDateIdeaSumAggregateOutputType | null
    _min: SavedDateIdeaMinAggregateOutputType | null
    _max: SavedDateIdeaMaxAggregateOutputType | null
  }

  type GetSavedDateIdeaGroupByPayload<T extends SavedDateIdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedDateIdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedDateIdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedDateIdeaGroupByOutputType[P]>
            : GetScalarType<T[P], SavedDateIdeaGroupByOutputType[P]>
        }
      >
    >


  export type SavedDateIdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateIdeaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dateIdea?: boolean | DateIdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedDateIdea"]>

  export type SavedDateIdeaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateIdeaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dateIdea?: boolean | DateIdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedDateIdea"]>

  export type SavedDateIdeaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateIdeaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dateIdea?: boolean | DateIdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedDateIdea"]>

  export type SavedDateIdeaSelectScalar = {
    id?: boolean
    userId?: boolean
    dateIdeaId?: boolean
  }

  export type SavedDateIdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateIdeaId", ExtArgs["result"]["savedDateIdea"]>
  export type SavedDateIdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dateIdea?: boolean | DateIdeaDefaultArgs<ExtArgs>
  }
  export type SavedDateIdeaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dateIdea?: boolean | DateIdeaDefaultArgs<ExtArgs>
  }
  export type SavedDateIdeaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dateIdea?: boolean | DateIdeaDefaultArgs<ExtArgs>
  }

  export type $SavedDateIdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedDateIdea"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dateIdea: Prisma.$DateIdeaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      dateIdeaId: string
    }, ExtArgs["result"]["savedDateIdea"]>
    composites: {}
  }

  type SavedDateIdeaGetPayload<S extends boolean | null | undefined | SavedDateIdeaDefaultArgs> = $Result.GetResult<Prisma.$SavedDateIdeaPayload, S>

  type SavedDateIdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedDateIdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedDateIdeaCountAggregateInputType | true
    }

  export interface SavedDateIdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedDateIdea'], meta: { name: 'SavedDateIdea' } }
    /**
     * Find zero or one SavedDateIdea that matches the filter.
     * @param {SavedDateIdeaFindUniqueArgs} args - Arguments to find a SavedDateIdea
     * @example
     * // Get one SavedDateIdea
     * const savedDateIdea = await prisma.savedDateIdea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedDateIdeaFindUniqueArgs>(args: SelectSubset<T, SavedDateIdeaFindUniqueArgs<ExtArgs>>): Prisma__SavedDateIdeaClient<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedDateIdea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedDateIdeaFindUniqueOrThrowArgs} args - Arguments to find a SavedDateIdea
     * @example
     * // Get one SavedDateIdea
     * const savedDateIdea = await prisma.savedDateIdea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedDateIdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedDateIdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedDateIdeaClient<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedDateIdea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedDateIdeaFindFirstArgs} args - Arguments to find a SavedDateIdea
     * @example
     * // Get one SavedDateIdea
     * const savedDateIdea = await prisma.savedDateIdea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedDateIdeaFindFirstArgs>(args?: SelectSubset<T, SavedDateIdeaFindFirstArgs<ExtArgs>>): Prisma__SavedDateIdeaClient<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedDateIdea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedDateIdeaFindFirstOrThrowArgs} args - Arguments to find a SavedDateIdea
     * @example
     * // Get one SavedDateIdea
     * const savedDateIdea = await prisma.savedDateIdea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedDateIdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedDateIdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedDateIdeaClient<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedDateIdeas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedDateIdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedDateIdeas
     * const savedDateIdeas = await prisma.savedDateIdea.findMany()
     * 
     * // Get first 10 SavedDateIdeas
     * const savedDateIdeas = await prisma.savedDateIdea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedDateIdeaWithIdOnly = await prisma.savedDateIdea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedDateIdeaFindManyArgs>(args?: SelectSubset<T, SavedDateIdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedDateIdea.
     * @param {SavedDateIdeaCreateArgs} args - Arguments to create a SavedDateIdea.
     * @example
     * // Create one SavedDateIdea
     * const SavedDateIdea = await prisma.savedDateIdea.create({
     *   data: {
     *     // ... data to create a SavedDateIdea
     *   }
     * })
     * 
     */
    create<T extends SavedDateIdeaCreateArgs>(args: SelectSubset<T, SavedDateIdeaCreateArgs<ExtArgs>>): Prisma__SavedDateIdeaClient<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedDateIdeas.
     * @param {SavedDateIdeaCreateManyArgs} args - Arguments to create many SavedDateIdeas.
     * @example
     * // Create many SavedDateIdeas
     * const savedDateIdea = await prisma.savedDateIdea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedDateIdeaCreateManyArgs>(args?: SelectSubset<T, SavedDateIdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedDateIdeas and returns the data saved in the database.
     * @param {SavedDateIdeaCreateManyAndReturnArgs} args - Arguments to create many SavedDateIdeas.
     * @example
     * // Create many SavedDateIdeas
     * const savedDateIdea = await prisma.savedDateIdea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedDateIdeas and only return the `id`
     * const savedDateIdeaWithIdOnly = await prisma.savedDateIdea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedDateIdeaCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedDateIdeaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedDateIdea.
     * @param {SavedDateIdeaDeleteArgs} args - Arguments to delete one SavedDateIdea.
     * @example
     * // Delete one SavedDateIdea
     * const SavedDateIdea = await prisma.savedDateIdea.delete({
     *   where: {
     *     // ... filter to delete one SavedDateIdea
     *   }
     * })
     * 
     */
    delete<T extends SavedDateIdeaDeleteArgs>(args: SelectSubset<T, SavedDateIdeaDeleteArgs<ExtArgs>>): Prisma__SavedDateIdeaClient<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedDateIdea.
     * @param {SavedDateIdeaUpdateArgs} args - Arguments to update one SavedDateIdea.
     * @example
     * // Update one SavedDateIdea
     * const savedDateIdea = await prisma.savedDateIdea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedDateIdeaUpdateArgs>(args: SelectSubset<T, SavedDateIdeaUpdateArgs<ExtArgs>>): Prisma__SavedDateIdeaClient<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedDateIdeas.
     * @param {SavedDateIdeaDeleteManyArgs} args - Arguments to filter SavedDateIdeas to delete.
     * @example
     * // Delete a few SavedDateIdeas
     * const { count } = await prisma.savedDateIdea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedDateIdeaDeleteManyArgs>(args?: SelectSubset<T, SavedDateIdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedDateIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedDateIdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedDateIdeas
     * const savedDateIdea = await prisma.savedDateIdea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedDateIdeaUpdateManyArgs>(args: SelectSubset<T, SavedDateIdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedDateIdeas and returns the data updated in the database.
     * @param {SavedDateIdeaUpdateManyAndReturnArgs} args - Arguments to update many SavedDateIdeas.
     * @example
     * // Update many SavedDateIdeas
     * const savedDateIdea = await prisma.savedDateIdea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedDateIdeas and only return the `id`
     * const savedDateIdeaWithIdOnly = await prisma.savedDateIdea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedDateIdeaUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedDateIdeaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedDateIdea.
     * @param {SavedDateIdeaUpsertArgs} args - Arguments to update or create a SavedDateIdea.
     * @example
     * // Update or create a SavedDateIdea
     * const savedDateIdea = await prisma.savedDateIdea.upsert({
     *   create: {
     *     // ... data to create a SavedDateIdea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedDateIdea we want to update
     *   }
     * })
     */
    upsert<T extends SavedDateIdeaUpsertArgs>(args: SelectSubset<T, SavedDateIdeaUpsertArgs<ExtArgs>>): Prisma__SavedDateIdeaClient<$Result.GetResult<Prisma.$SavedDateIdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedDateIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedDateIdeaCountArgs} args - Arguments to filter SavedDateIdeas to count.
     * @example
     * // Count the number of SavedDateIdeas
     * const count = await prisma.savedDateIdea.count({
     *   where: {
     *     // ... the filter for the SavedDateIdeas we want to count
     *   }
     * })
    **/
    count<T extends SavedDateIdeaCountArgs>(
      args?: Subset<T, SavedDateIdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedDateIdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedDateIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedDateIdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedDateIdeaAggregateArgs>(args: Subset<T, SavedDateIdeaAggregateArgs>): Prisma.PrismaPromise<GetSavedDateIdeaAggregateType<T>>

    /**
     * Group by SavedDateIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedDateIdeaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedDateIdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedDateIdeaGroupByArgs['orderBy'] }
        : { orderBy?: SavedDateIdeaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedDateIdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedDateIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedDateIdea model
   */
  readonly fields: SavedDateIdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedDateIdea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedDateIdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dateIdea<T extends DateIdeaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DateIdeaDefaultArgs<ExtArgs>>): Prisma__DateIdeaClient<$Result.GetResult<Prisma.$DateIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedDateIdea model
   */
  interface SavedDateIdeaFieldRefs {
    readonly id: FieldRef<"SavedDateIdea", 'Int'>
    readonly userId: FieldRef<"SavedDateIdea", 'String'>
    readonly dateIdeaId: FieldRef<"SavedDateIdea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavedDateIdea findUnique
   */
  export type SavedDateIdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which SavedDateIdea to fetch.
     */
    where: SavedDateIdeaWhereUniqueInput
  }

  /**
   * SavedDateIdea findUniqueOrThrow
   */
  export type SavedDateIdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which SavedDateIdea to fetch.
     */
    where: SavedDateIdeaWhereUniqueInput
  }

  /**
   * SavedDateIdea findFirst
   */
  export type SavedDateIdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which SavedDateIdea to fetch.
     */
    where?: SavedDateIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedDateIdeas to fetch.
     */
    orderBy?: SavedDateIdeaOrderByWithRelationInput | SavedDateIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedDateIdeas.
     */
    cursor?: SavedDateIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedDateIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedDateIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedDateIdeas.
     */
    distinct?: SavedDateIdeaScalarFieldEnum | SavedDateIdeaScalarFieldEnum[]
  }

  /**
   * SavedDateIdea findFirstOrThrow
   */
  export type SavedDateIdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which SavedDateIdea to fetch.
     */
    where?: SavedDateIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedDateIdeas to fetch.
     */
    orderBy?: SavedDateIdeaOrderByWithRelationInput | SavedDateIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedDateIdeas.
     */
    cursor?: SavedDateIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedDateIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedDateIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedDateIdeas.
     */
    distinct?: SavedDateIdeaScalarFieldEnum | SavedDateIdeaScalarFieldEnum[]
  }

  /**
   * SavedDateIdea findMany
   */
  export type SavedDateIdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * Filter, which SavedDateIdeas to fetch.
     */
    where?: SavedDateIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedDateIdeas to fetch.
     */
    orderBy?: SavedDateIdeaOrderByWithRelationInput | SavedDateIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedDateIdeas.
     */
    cursor?: SavedDateIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedDateIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedDateIdeas.
     */
    skip?: number
    distinct?: SavedDateIdeaScalarFieldEnum | SavedDateIdeaScalarFieldEnum[]
  }

  /**
   * SavedDateIdea create
   */
  export type SavedDateIdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedDateIdea.
     */
    data: XOR<SavedDateIdeaCreateInput, SavedDateIdeaUncheckedCreateInput>
  }

  /**
   * SavedDateIdea createMany
   */
  export type SavedDateIdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedDateIdeas.
     */
    data: SavedDateIdeaCreateManyInput | SavedDateIdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedDateIdea createManyAndReturn
   */
  export type SavedDateIdeaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * The data used to create many SavedDateIdeas.
     */
    data: SavedDateIdeaCreateManyInput | SavedDateIdeaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedDateIdea update
   */
  export type SavedDateIdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedDateIdea.
     */
    data: XOR<SavedDateIdeaUpdateInput, SavedDateIdeaUncheckedUpdateInput>
    /**
     * Choose, which SavedDateIdea to update.
     */
    where: SavedDateIdeaWhereUniqueInput
  }

  /**
   * SavedDateIdea updateMany
   */
  export type SavedDateIdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedDateIdeas.
     */
    data: XOR<SavedDateIdeaUpdateManyMutationInput, SavedDateIdeaUncheckedUpdateManyInput>
    /**
     * Filter which SavedDateIdeas to update
     */
    where?: SavedDateIdeaWhereInput
    /**
     * Limit how many SavedDateIdeas to update.
     */
    limit?: number
  }

  /**
   * SavedDateIdea updateManyAndReturn
   */
  export type SavedDateIdeaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * The data used to update SavedDateIdeas.
     */
    data: XOR<SavedDateIdeaUpdateManyMutationInput, SavedDateIdeaUncheckedUpdateManyInput>
    /**
     * Filter which SavedDateIdeas to update
     */
    where?: SavedDateIdeaWhereInput
    /**
     * Limit how many SavedDateIdeas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedDateIdea upsert
   */
  export type SavedDateIdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedDateIdea to update in case it exists.
     */
    where: SavedDateIdeaWhereUniqueInput
    /**
     * In case the SavedDateIdea found by the `where` argument doesn't exist, create a new SavedDateIdea with this data.
     */
    create: XOR<SavedDateIdeaCreateInput, SavedDateIdeaUncheckedCreateInput>
    /**
     * In case the SavedDateIdea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedDateIdeaUpdateInput, SavedDateIdeaUncheckedUpdateInput>
  }

  /**
   * SavedDateIdea delete
   */
  export type SavedDateIdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
    /**
     * Filter which SavedDateIdea to delete.
     */
    where: SavedDateIdeaWhereUniqueInput
  }

  /**
   * SavedDateIdea deleteMany
   */
  export type SavedDateIdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedDateIdeas to delete
     */
    where?: SavedDateIdeaWhereInput
    /**
     * Limit how many SavedDateIdeas to delete.
     */
    limit?: number
  }

  /**
   * SavedDateIdea without action
   */
  export type SavedDateIdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedDateIdea
     */
    select?: SavedDateIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedDateIdea
     */
    omit?: SavedDateIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedDateIdeaInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    status: number
    createdAt: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    status: string
    createdAt: Date
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "status" | "createdAt", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly senderId: FieldRef<"Request", 'String'>
    readonly receiverId: FieldRef<"Request", 'String'>
    readonly status: FieldRef<"Request", 'String'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    shareCode: 'shareCode',
    coupleId: 'coupleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CoupleScalarFieldEnum: {
    id: 'id',
    coupleName: 'coupleName',
    startDate: 'startDate'
  };

  export type CoupleScalarFieldEnum = (typeof CoupleScalarFieldEnum)[keyof typeof CoupleScalarFieldEnum]


  export const DateIdeaScalarFieldEnum: {
    id: 'id',
    idea: 'idea',
    createdAt: 'createdAt'
  };

  export type DateIdeaScalarFieldEnum = (typeof DateIdeaScalarFieldEnum)[keyof typeof DateIdeaScalarFieldEnum]


  export const SavedDateIdeaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateIdeaId: 'dateIdeaId'
  };

  export type SavedDateIdeaScalarFieldEnum = (typeof SavedDateIdeaScalarFieldEnum)[keyof typeof SavedDateIdeaScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    shareCode?: StringFilter<"User"> | string
    coupleId?: StringNullableFilter<"User"> | string | null
    couple?: XOR<CoupleNullableScalarRelationFilter, CoupleWhereInput> | null
    sentRequests?: RequestListRelationFilter
    receivedRequests?: RequestListRelationFilter
    SavedDateIdeas?: SavedDateIdeaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shareCode?: SortOrder
    coupleId?: SortOrderInput | SortOrder
    couple?: CoupleOrderByWithRelationInput
    sentRequests?: RequestOrderByRelationAggregateInput
    receivedRequests?: RequestOrderByRelationAggregateInput
    SavedDateIdeas?: SavedDateIdeaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    shareCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    coupleId?: StringNullableFilter<"User"> | string | null
    couple?: XOR<CoupleNullableScalarRelationFilter, CoupleWhereInput> | null
    sentRequests?: RequestListRelationFilter
    receivedRequests?: RequestListRelationFilter
    SavedDateIdeas?: SavedDateIdeaListRelationFilter
  }, "id" | "email" | "shareCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shareCode?: SortOrder
    coupleId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    shareCode?: StringWithAggregatesFilter<"User"> | string
    coupleId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CoupleWhereInput = {
    AND?: CoupleWhereInput | CoupleWhereInput[]
    OR?: CoupleWhereInput[]
    NOT?: CoupleWhereInput | CoupleWhereInput[]
    id?: StringFilter<"Couple"> | string
    coupleName?: StringFilter<"Couple"> | string
    startDate?: DateTimeFilter<"Couple"> | Date | string
    users?: UserListRelationFilter
  }

  export type CoupleOrderByWithRelationInput = {
    id?: SortOrder
    coupleName?: SortOrder
    startDate?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type CoupleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoupleWhereInput | CoupleWhereInput[]
    OR?: CoupleWhereInput[]
    NOT?: CoupleWhereInput | CoupleWhereInput[]
    coupleName?: StringFilter<"Couple"> | string
    startDate?: DateTimeFilter<"Couple"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type CoupleOrderByWithAggregationInput = {
    id?: SortOrder
    coupleName?: SortOrder
    startDate?: SortOrder
    _count?: CoupleCountOrderByAggregateInput
    _max?: CoupleMaxOrderByAggregateInput
    _min?: CoupleMinOrderByAggregateInput
  }

  export type CoupleScalarWhereWithAggregatesInput = {
    AND?: CoupleScalarWhereWithAggregatesInput | CoupleScalarWhereWithAggregatesInput[]
    OR?: CoupleScalarWhereWithAggregatesInput[]
    NOT?: CoupleScalarWhereWithAggregatesInput | CoupleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Couple"> | string
    coupleName?: StringWithAggregatesFilter<"Couple"> | string
    startDate?: DateTimeWithAggregatesFilter<"Couple"> | Date | string
  }

  export type DateIdeaWhereInput = {
    AND?: DateIdeaWhereInput | DateIdeaWhereInput[]
    OR?: DateIdeaWhereInput[]
    NOT?: DateIdeaWhereInput | DateIdeaWhereInput[]
    id?: StringFilter<"DateIdea"> | string
    idea?: StringFilter<"DateIdea"> | string
    createdAt?: DateTimeFilter<"DateIdea"> | Date | string
    savedBy?: SavedDateIdeaListRelationFilter
  }

  export type DateIdeaOrderByWithRelationInput = {
    id?: SortOrder
    idea?: SortOrder
    createdAt?: SortOrder
    savedBy?: SavedDateIdeaOrderByRelationAggregateInput
  }

  export type DateIdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DateIdeaWhereInput | DateIdeaWhereInput[]
    OR?: DateIdeaWhereInput[]
    NOT?: DateIdeaWhereInput | DateIdeaWhereInput[]
    idea?: StringFilter<"DateIdea"> | string
    createdAt?: DateTimeFilter<"DateIdea"> | Date | string
    savedBy?: SavedDateIdeaListRelationFilter
  }, "id">

  export type DateIdeaOrderByWithAggregationInput = {
    id?: SortOrder
    idea?: SortOrder
    createdAt?: SortOrder
    _count?: DateIdeaCountOrderByAggregateInput
    _max?: DateIdeaMaxOrderByAggregateInput
    _min?: DateIdeaMinOrderByAggregateInput
  }

  export type DateIdeaScalarWhereWithAggregatesInput = {
    AND?: DateIdeaScalarWhereWithAggregatesInput | DateIdeaScalarWhereWithAggregatesInput[]
    OR?: DateIdeaScalarWhereWithAggregatesInput[]
    NOT?: DateIdeaScalarWhereWithAggregatesInput | DateIdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DateIdea"> | string
    idea?: StringWithAggregatesFilter<"DateIdea"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DateIdea"> | Date | string
  }

  export type SavedDateIdeaWhereInput = {
    AND?: SavedDateIdeaWhereInput | SavedDateIdeaWhereInput[]
    OR?: SavedDateIdeaWhereInput[]
    NOT?: SavedDateIdeaWhereInput | SavedDateIdeaWhereInput[]
    id?: IntFilter<"SavedDateIdea"> | number
    userId?: StringFilter<"SavedDateIdea"> | string
    dateIdeaId?: StringFilter<"SavedDateIdea"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dateIdea?: XOR<DateIdeaScalarRelationFilter, DateIdeaWhereInput>
  }

  export type SavedDateIdeaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateIdeaId?: SortOrder
    user?: UserOrderByWithRelationInput
    dateIdea?: DateIdeaOrderByWithRelationInput
  }

  export type SavedDateIdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_dateIdeaId?: SavedDateIdeaUserIdDateIdeaIdCompoundUniqueInput
    AND?: SavedDateIdeaWhereInput | SavedDateIdeaWhereInput[]
    OR?: SavedDateIdeaWhereInput[]
    NOT?: SavedDateIdeaWhereInput | SavedDateIdeaWhereInput[]
    userId?: StringFilter<"SavedDateIdea"> | string
    dateIdeaId?: StringFilter<"SavedDateIdea"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dateIdea?: XOR<DateIdeaScalarRelationFilter, DateIdeaWhereInput>
  }, "id" | "userId_dateIdeaId">

  export type SavedDateIdeaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateIdeaId?: SortOrder
    _count?: SavedDateIdeaCountOrderByAggregateInput
    _avg?: SavedDateIdeaAvgOrderByAggregateInput
    _max?: SavedDateIdeaMaxOrderByAggregateInput
    _min?: SavedDateIdeaMinOrderByAggregateInput
    _sum?: SavedDateIdeaSumOrderByAggregateInput
  }

  export type SavedDateIdeaScalarWhereWithAggregatesInput = {
    AND?: SavedDateIdeaScalarWhereWithAggregatesInput | SavedDateIdeaScalarWhereWithAggregatesInput[]
    OR?: SavedDateIdeaScalarWhereWithAggregatesInput[]
    NOT?: SavedDateIdeaScalarWhereWithAggregatesInput | SavedDateIdeaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavedDateIdea"> | number
    userId?: StringWithAggregatesFilter<"SavedDateIdea"> | string
    dateIdeaId?: StringWithAggregatesFilter<"SavedDateIdea"> | string
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    senderId?: StringFilter<"Request"> | string
    receiverId?: StringFilter<"Request"> | string
    status?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    senderId?: StringFilter<"Request"> | string
    receiverId?: StringFilter<"Request"> | string
    status?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    senderId?: StringWithAggregatesFilter<"Request"> | string
    receiverId?: StringWithAggregatesFilter<"Request"> | string
    status?: StringWithAggregatesFilter<"Request"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    couple?: CoupleCreateNestedOneWithoutUsersInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutReceiverInput
    SavedDateIdeas?: SavedDateIdeaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    coupleId?: string | null
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutReceiverInput
    SavedDateIdeas?: SavedDateIdeaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    couple?: CoupleUpdateOneWithoutUsersNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutReceiverNestedInput
    SavedDateIdeas?: SavedDateIdeaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutReceiverNestedInput
    SavedDateIdeas?: SavedDateIdeaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    coupleId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoupleCreateInput = {
    id?: string
    coupleName: string
    startDate?: Date | string
    users?: UserCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateInput = {
    id?: string
    coupleName: string
    startDate?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleCreateManyInput = {
    id?: string
    coupleName: string
    startDate?: Date | string
  }

  export type CoupleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateIdeaCreateInput = {
    id?: string
    idea: string
    createdAt?: Date | string
    savedBy?: SavedDateIdeaCreateNestedManyWithoutDateIdeaInput
  }

  export type DateIdeaUncheckedCreateInput = {
    id?: string
    idea: string
    createdAt?: Date | string
    savedBy?: SavedDateIdeaUncheckedCreateNestedManyWithoutDateIdeaInput
  }

  export type DateIdeaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idea?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: SavedDateIdeaUpdateManyWithoutDateIdeaNestedInput
  }

  export type DateIdeaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idea?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: SavedDateIdeaUncheckedUpdateManyWithoutDateIdeaNestedInput
  }

  export type DateIdeaCreateManyInput = {
    id?: string
    idea: string
    createdAt?: Date | string
  }

  export type DateIdeaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    idea?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateIdeaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idea?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedDateIdeaCreateInput = {
    user: UserCreateNestedOneWithoutSavedDateIdeasInput
    dateIdea: DateIdeaCreateNestedOneWithoutSavedByInput
  }

  export type SavedDateIdeaUncheckedCreateInput = {
    id?: number
    userId: string
    dateIdeaId: string
  }

  export type SavedDateIdeaUpdateInput = {
    user?: UserUpdateOneRequiredWithoutSavedDateIdeasNestedInput
    dateIdea?: DateIdeaUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedDateIdeaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    dateIdeaId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedDateIdeaCreateManyInput = {
    id?: number
    userId: string
    dateIdeaId: string
  }

  export type SavedDateIdeaUpdateManyMutationInput = {

  }

  export type SavedDateIdeaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    dateIdeaId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentRequestsInput
    receiver: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: string
    createdAt?: Date | string
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: string
    createdAt?: Date | string
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CoupleNullableScalarRelationFilter = {
    is?: CoupleWhereInput | null
    isNot?: CoupleWhereInput | null
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type SavedDateIdeaListRelationFilter = {
    every?: SavedDateIdeaWhereInput
    some?: SavedDateIdeaWhereInput
    none?: SavedDateIdeaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedDateIdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shareCode?: SortOrder
    coupleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shareCode?: SortOrder
    coupleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shareCode?: SortOrder
    coupleId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoupleCountOrderByAggregateInput = {
    id?: SortOrder
    coupleName?: SortOrder
    startDate?: SortOrder
  }

  export type CoupleMaxOrderByAggregateInput = {
    id?: SortOrder
    coupleName?: SortOrder
    startDate?: SortOrder
  }

  export type CoupleMinOrderByAggregateInput = {
    id?: SortOrder
    coupleName?: SortOrder
    startDate?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateIdeaCountOrderByAggregateInput = {
    id?: SortOrder
    idea?: SortOrder
    createdAt?: SortOrder
  }

  export type DateIdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    idea?: SortOrder
    createdAt?: SortOrder
  }

  export type DateIdeaMinOrderByAggregateInput = {
    id?: SortOrder
    idea?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DateIdeaScalarRelationFilter = {
    is?: DateIdeaWhereInput
    isNot?: DateIdeaWhereInput
  }

  export type SavedDateIdeaUserIdDateIdeaIdCompoundUniqueInput = {
    userId: string
    dateIdeaId: string
  }

  export type SavedDateIdeaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateIdeaId?: SortOrder
  }

  export type SavedDateIdeaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SavedDateIdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateIdeaId?: SortOrder
  }

  export type SavedDateIdeaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateIdeaId?: SortOrder
  }

  export type SavedDateIdeaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CoupleCreateNestedOneWithoutUsersInput = {
    create?: XOR<CoupleCreateWithoutUsersInput, CoupleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CoupleCreateOrConnectWithoutUsersInput
    connect?: CoupleWhereUniqueInput
  }

  export type RequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput> | RequestCreateWithoutSenderInput[] | RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSenderInput | RequestCreateOrConnectWithoutSenderInput[]
    createMany?: RequestCreateManySenderInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutReceiverInput = {
    create?: XOR<RequestCreateWithoutReceiverInput, RequestUncheckedCreateWithoutReceiverInput> | RequestCreateWithoutReceiverInput[] | RequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutReceiverInput | RequestCreateOrConnectWithoutReceiverInput[]
    createMany?: RequestCreateManyReceiverInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type SavedDateIdeaCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedDateIdeaCreateWithoutUserInput, SavedDateIdeaUncheckedCreateWithoutUserInput> | SavedDateIdeaCreateWithoutUserInput[] | SavedDateIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedDateIdeaCreateOrConnectWithoutUserInput | SavedDateIdeaCreateOrConnectWithoutUserInput[]
    createMany?: SavedDateIdeaCreateManyUserInputEnvelope
    connect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput> | RequestCreateWithoutSenderInput[] | RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSenderInput | RequestCreateOrConnectWithoutSenderInput[]
    createMany?: RequestCreateManySenderInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<RequestCreateWithoutReceiverInput, RequestUncheckedCreateWithoutReceiverInput> | RequestCreateWithoutReceiverInput[] | RequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutReceiverInput | RequestCreateOrConnectWithoutReceiverInput[]
    createMany?: RequestCreateManyReceiverInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type SavedDateIdeaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedDateIdeaCreateWithoutUserInput, SavedDateIdeaUncheckedCreateWithoutUserInput> | SavedDateIdeaCreateWithoutUserInput[] | SavedDateIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedDateIdeaCreateOrConnectWithoutUserInput | SavedDateIdeaCreateOrConnectWithoutUserInput[]
    createMany?: SavedDateIdeaCreateManyUserInputEnvelope
    connect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CoupleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CoupleCreateWithoutUsersInput, CoupleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CoupleCreateOrConnectWithoutUsersInput
    upsert?: CoupleUpsertWithoutUsersInput
    disconnect?: CoupleWhereInput | boolean
    delete?: CoupleWhereInput | boolean
    connect?: CoupleWhereUniqueInput
    update?: XOR<XOR<CoupleUpdateToOneWithWhereWithoutUsersInput, CoupleUpdateWithoutUsersInput>, CoupleUncheckedUpdateWithoutUsersInput>
  }

  export type RequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput> | RequestCreateWithoutSenderInput[] | RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSenderInput | RequestCreateOrConnectWithoutSenderInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutSenderInput | RequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RequestCreateManySenderInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutSenderInput | RequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutSenderInput | RequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<RequestCreateWithoutReceiverInput, RequestUncheckedCreateWithoutReceiverInput> | RequestCreateWithoutReceiverInput[] | RequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutReceiverInput | RequestCreateOrConnectWithoutReceiverInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutReceiverInput | RequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: RequestCreateManyReceiverInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutReceiverInput | RequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutReceiverInput | RequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type SavedDateIdeaUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedDateIdeaCreateWithoutUserInput, SavedDateIdeaUncheckedCreateWithoutUserInput> | SavedDateIdeaCreateWithoutUserInput[] | SavedDateIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedDateIdeaCreateOrConnectWithoutUserInput | SavedDateIdeaCreateOrConnectWithoutUserInput[]
    upsert?: SavedDateIdeaUpsertWithWhereUniqueWithoutUserInput | SavedDateIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedDateIdeaCreateManyUserInputEnvelope
    set?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    disconnect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    delete?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    connect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    update?: SavedDateIdeaUpdateWithWhereUniqueWithoutUserInput | SavedDateIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedDateIdeaUpdateManyWithWhereWithoutUserInput | SavedDateIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedDateIdeaScalarWhereInput | SavedDateIdeaScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput> | RequestCreateWithoutSenderInput[] | RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSenderInput | RequestCreateOrConnectWithoutSenderInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutSenderInput | RequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RequestCreateManySenderInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutSenderInput | RequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutSenderInput | RequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<RequestCreateWithoutReceiverInput, RequestUncheckedCreateWithoutReceiverInput> | RequestCreateWithoutReceiverInput[] | RequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutReceiverInput | RequestCreateOrConnectWithoutReceiverInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutReceiverInput | RequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: RequestCreateManyReceiverInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutReceiverInput | RequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutReceiverInput | RequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type SavedDateIdeaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedDateIdeaCreateWithoutUserInput, SavedDateIdeaUncheckedCreateWithoutUserInput> | SavedDateIdeaCreateWithoutUserInput[] | SavedDateIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedDateIdeaCreateOrConnectWithoutUserInput | SavedDateIdeaCreateOrConnectWithoutUserInput[]
    upsert?: SavedDateIdeaUpsertWithWhereUniqueWithoutUserInput | SavedDateIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedDateIdeaCreateManyUserInputEnvelope
    set?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    disconnect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    delete?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    connect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    update?: SavedDateIdeaUpdateWithWhereUniqueWithoutUserInput | SavedDateIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedDateIdeaUpdateManyWithWhereWithoutUserInput | SavedDateIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedDateIdeaScalarWhereInput | SavedDateIdeaScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutCoupleInput = {
    create?: XOR<UserCreateWithoutCoupleInput, UserUncheckedCreateWithoutCoupleInput> | UserCreateWithoutCoupleInput[] | UserUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoupleInput | UserCreateOrConnectWithoutCoupleInput[]
    createMany?: UserCreateManyCoupleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCoupleInput = {
    create?: XOR<UserCreateWithoutCoupleInput, UserUncheckedCreateWithoutCoupleInput> | UserCreateWithoutCoupleInput[] | UserUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoupleInput | UserCreateOrConnectWithoutCoupleInput[]
    createMany?: UserCreateManyCoupleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<UserCreateWithoutCoupleInput, UserUncheckedCreateWithoutCoupleInput> | UserCreateWithoutCoupleInput[] | UserUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoupleInput | UserCreateOrConnectWithoutCoupleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoupleInput | UserUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: UserCreateManyCoupleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoupleInput | UserUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoupleInput | UserUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<UserCreateWithoutCoupleInput, UserUncheckedCreateWithoutCoupleInput> | UserCreateWithoutCoupleInput[] | UserUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoupleInput | UserCreateOrConnectWithoutCoupleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoupleInput | UserUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: UserCreateManyCoupleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoupleInput | UserUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoupleInput | UserUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SavedDateIdeaCreateNestedManyWithoutDateIdeaInput = {
    create?: XOR<SavedDateIdeaCreateWithoutDateIdeaInput, SavedDateIdeaUncheckedCreateWithoutDateIdeaInput> | SavedDateIdeaCreateWithoutDateIdeaInput[] | SavedDateIdeaUncheckedCreateWithoutDateIdeaInput[]
    connectOrCreate?: SavedDateIdeaCreateOrConnectWithoutDateIdeaInput | SavedDateIdeaCreateOrConnectWithoutDateIdeaInput[]
    createMany?: SavedDateIdeaCreateManyDateIdeaInputEnvelope
    connect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
  }

  export type SavedDateIdeaUncheckedCreateNestedManyWithoutDateIdeaInput = {
    create?: XOR<SavedDateIdeaCreateWithoutDateIdeaInput, SavedDateIdeaUncheckedCreateWithoutDateIdeaInput> | SavedDateIdeaCreateWithoutDateIdeaInput[] | SavedDateIdeaUncheckedCreateWithoutDateIdeaInput[]
    connectOrCreate?: SavedDateIdeaCreateOrConnectWithoutDateIdeaInput | SavedDateIdeaCreateOrConnectWithoutDateIdeaInput[]
    createMany?: SavedDateIdeaCreateManyDateIdeaInputEnvelope
    connect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
  }

  export type SavedDateIdeaUpdateManyWithoutDateIdeaNestedInput = {
    create?: XOR<SavedDateIdeaCreateWithoutDateIdeaInput, SavedDateIdeaUncheckedCreateWithoutDateIdeaInput> | SavedDateIdeaCreateWithoutDateIdeaInput[] | SavedDateIdeaUncheckedCreateWithoutDateIdeaInput[]
    connectOrCreate?: SavedDateIdeaCreateOrConnectWithoutDateIdeaInput | SavedDateIdeaCreateOrConnectWithoutDateIdeaInput[]
    upsert?: SavedDateIdeaUpsertWithWhereUniqueWithoutDateIdeaInput | SavedDateIdeaUpsertWithWhereUniqueWithoutDateIdeaInput[]
    createMany?: SavedDateIdeaCreateManyDateIdeaInputEnvelope
    set?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    disconnect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    delete?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    connect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    update?: SavedDateIdeaUpdateWithWhereUniqueWithoutDateIdeaInput | SavedDateIdeaUpdateWithWhereUniqueWithoutDateIdeaInput[]
    updateMany?: SavedDateIdeaUpdateManyWithWhereWithoutDateIdeaInput | SavedDateIdeaUpdateManyWithWhereWithoutDateIdeaInput[]
    deleteMany?: SavedDateIdeaScalarWhereInput | SavedDateIdeaScalarWhereInput[]
  }

  export type SavedDateIdeaUncheckedUpdateManyWithoutDateIdeaNestedInput = {
    create?: XOR<SavedDateIdeaCreateWithoutDateIdeaInput, SavedDateIdeaUncheckedCreateWithoutDateIdeaInput> | SavedDateIdeaCreateWithoutDateIdeaInput[] | SavedDateIdeaUncheckedCreateWithoutDateIdeaInput[]
    connectOrCreate?: SavedDateIdeaCreateOrConnectWithoutDateIdeaInput | SavedDateIdeaCreateOrConnectWithoutDateIdeaInput[]
    upsert?: SavedDateIdeaUpsertWithWhereUniqueWithoutDateIdeaInput | SavedDateIdeaUpsertWithWhereUniqueWithoutDateIdeaInput[]
    createMany?: SavedDateIdeaCreateManyDateIdeaInputEnvelope
    set?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    disconnect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    delete?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    connect?: SavedDateIdeaWhereUniqueInput | SavedDateIdeaWhereUniqueInput[]
    update?: SavedDateIdeaUpdateWithWhereUniqueWithoutDateIdeaInput | SavedDateIdeaUpdateWithWhereUniqueWithoutDateIdeaInput[]
    updateMany?: SavedDateIdeaUpdateManyWithWhereWithoutDateIdeaInput | SavedDateIdeaUpdateManyWithWhereWithoutDateIdeaInput[]
    deleteMany?: SavedDateIdeaScalarWhereInput | SavedDateIdeaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSavedDateIdeasInput = {
    create?: XOR<UserCreateWithoutSavedDateIdeasInput, UserUncheckedCreateWithoutSavedDateIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedDateIdeasInput
    connect?: UserWhereUniqueInput
  }

  export type DateIdeaCreateNestedOneWithoutSavedByInput = {
    create?: XOR<DateIdeaCreateWithoutSavedByInput, DateIdeaUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: DateIdeaCreateOrConnectWithoutSavedByInput
    connect?: DateIdeaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedDateIdeasNestedInput = {
    create?: XOR<UserCreateWithoutSavedDateIdeasInput, UserUncheckedCreateWithoutSavedDateIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedDateIdeasInput
    upsert?: UserUpsertWithoutSavedDateIdeasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedDateIdeasInput, UserUpdateWithoutSavedDateIdeasInput>, UserUncheckedUpdateWithoutSavedDateIdeasInput>
  }

  export type DateIdeaUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<DateIdeaCreateWithoutSavedByInput, DateIdeaUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: DateIdeaCreateOrConnectWithoutSavedByInput
    upsert?: DateIdeaUpsertWithoutSavedByInput
    connect?: DateIdeaWhereUniqueInput
    update?: XOR<XOR<DateIdeaUpdateToOneWithWhereWithoutSavedByInput, DateIdeaUpdateWithoutSavedByInput>, DateIdeaUncheckedUpdateWithoutSavedByInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CoupleCreateWithoutUsersInput = {
    id?: string
    coupleName: string
    startDate?: Date | string
  }

  export type CoupleUncheckedCreateWithoutUsersInput = {
    id?: string
    coupleName: string
    startDate?: Date | string
  }

  export type CoupleCreateOrConnectWithoutUsersInput = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutUsersInput, CoupleUncheckedCreateWithoutUsersInput>
  }

  export type RequestCreateWithoutSenderInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type RequestUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    status?: string
    createdAt?: Date | string
  }

  export type RequestCreateOrConnectWithoutSenderInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput>
  }

  export type RequestCreateManySenderInputEnvelope = {
    data: RequestCreateManySenderInput | RequestCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutReceiverInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type RequestUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    status?: string
    createdAt?: Date | string
  }

  export type RequestCreateOrConnectWithoutReceiverInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutReceiverInput, RequestUncheckedCreateWithoutReceiverInput>
  }

  export type RequestCreateManyReceiverInputEnvelope = {
    data: RequestCreateManyReceiverInput | RequestCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type SavedDateIdeaCreateWithoutUserInput = {
    dateIdea: DateIdeaCreateNestedOneWithoutSavedByInput
  }

  export type SavedDateIdeaUncheckedCreateWithoutUserInput = {
    id?: number
    dateIdeaId: string
  }

  export type SavedDateIdeaCreateOrConnectWithoutUserInput = {
    where: SavedDateIdeaWhereUniqueInput
    create: XOR<SavedDateIdeaCreateWithoutUserInput, SavedDateIdeaUncheckedCreateWithoutUserInput>
  }

  export type SavedDateIdeaCreateManyUserInputEnvelope = {
    data: SavedDateIdeaCreateManyUserInput | SavedDateIdeaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CoupleUpsertWithoutUsersInput = {
    update: XOR<CoupleUpdateWithoutUsersInput, CoupleUncheckedUpdateWithoutUsersInput>
    create: XOR<CoupleCreateWithoutUsersInput, CoupleUncheckedCreateWithoutUsersInput>
    where?: CoupleWhereInput
  }

  export type CoupleUpdateToOneWithWhereWithoutUsersInput = {
    where?: CoupleWhereInput
    data: XOR<CoupleUpdateWithoutUsersInput, CoupleUncheckedUpdateWithoutUsersInput>
  }

  export type CoupleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutSenderInput, RequestUncheckedUpdateWithoutSenderInput>
    create: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutSenderInput, RequestUncheckedUpdateWithoutSenderInput>
  }

  export type RequestUpdateManyWithWhereWithoutSenderInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    senderId?: StringFilter<"Request"> | string
    receiverId?: StringFilter<"Request"> | string
    status?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
  }

  export type RequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutReceiverInput, RequestUncheckedUpdateWithoutReceiverInput>
    create: XOR<RequestCreateWithoutReceiverInput, RequestUncheckedCreateWithoutReceiverInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutReceiverInput, RequestUncheckedUpdateWithoutReceiverInput>
  }

  export type RequestUpdateManyWithWhereWithoutReceiverInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutReceiverInput>
  }

  export type SavedDateIdeaUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedDateIdeaWhereUniqueInput
    update: XOR<SavedDateIdeaUpdateWithoutUserInput, SavedDateIdeaUncheckedUpdateWithoutUserInput>
    create: XOR<SavedDateIdeaCreateWithoutUserInput, SavedDateIdeaUncheckedCreateWithoutUserInput>
  }

  export type SavedDateIdeaUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedDateIdeaWhereUniqueInput
    data: XOR<SavedDateIdeaUpdateWithoutUserInput, SavedDateIdeaUncheckedUpdateWithoutUserInput>
  }

  export type SavedDateIdeaUpdateManyWithWhereWithoutUserInput = {
    where: SavedDateIdeaScalarWhereInput
    data: XOR<SavedDateIdeaUpdateManyMutationInput, SavedDateIdeaUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedDateIdeaScalarWhereInput = {
    AND?: SavedDateIdeaScalarWhereInput | SavedDateIdeaScalarWhereInput[]
    OR?: SavedDateIdeaScalarWhereInput[]
    NOT?: SavedDateIdeaScalarWhereInput | SavedDateIdeaScalarWhereInput[]
    id?: IntFilter<"SavedDateIdea"> | number
    userId?: StringFilter<"SavedDateIdea"> | string
    dateIdeaId?: StringFilter<"SavedDateIdea"> | string
  }

  export type UserCreateWithoutCoupleInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutReceiverInput
    SavedDateIdeas?: SavedDateIdeaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoupleInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutReceiverInput
    SavedDateIdeas?: SavedDateIdeaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoupleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoupleInput, UserUncheckedCreateWithoutCoupleInput>
  }

  export type UserCreateManyCoupleInputEnvelope = {
    data: UserCreateManyCoupleInput | UserCreateManyCoupleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCoupleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCoupleInput, UserUncheckedUpdateWithoutCoupleInput>
    create: XOR<UserCreateWithoutCoupleInput, UserUncheckedCreateWithoutCoupleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCoupleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCoupleInput, UserUncheckedUpdateWithoutCoupleInput>
  }

  export type UserUpdateManyWithWhereWithoutCoupleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCoupleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    shareCode?: StringFilter<"User"> | string
    coupleId?: StringNullableFilter<"User"> | string | null
  }

  export type SavedDateIdeaCreateWithoutDateIdeaInput = {
    user: UserCreateNestedOneWithoutSavedDateIdeasInput
  }

  export type SavedDateIdeaUncheckedCreateWithoutDateIdeaInput = {
    id?: number
    userId: string
  }

  export type SavedDateIdeaCreateOrConnectWithoutDateIdeaInput = {
    where: SavedDateIdeaWhereUniqueInput
    create: XOR<SavedDateIdeaCreateWithoutDateIdeaInput, SavedDateIdeaUncheckedCreateWithoutDateIdeaInput>
  }

  export type SavedDateIdeaCreateManyDateIdeaInputEnvelope = {
    data: SavedDateIdeaCreateManyDateIdeaInput | SavedDateIdeaCreateManyDateIdeaInput[]
    skipDuplicates?: boolean
  }

  export type SavedDateIdeaUpsertWithWhereUniqueWithoutDateIdeaInput = {
    where: SavedDateIdeaWhereUniqueInput
    update: XOR<SavedDateIdeaUpdateWithoutDateIdeaInput, SavedDateIdeaUncheckedUpdateWithoutDateIdeaInput>
    create: XOR<SavedDateIdeaCreateWithoutDateIdeaInput, SavedDateIdeaUncheckedCreateWithoutDateIdeaInput>
  }

  export type SavedDateIdeaUpdateWithWhereUniqueWithoutDateIdeaInput = {
    where: SavedDateIdeaWhereUniqueInput
    data: XOR<SavedDateIdeaUpdateWithoutDateIdeaInput, SavedDateIdeaUncheckedUpdateWithoutDateIdeaInput>
  }

  export type SavedDateIdeaUpdateManyWithWhereWithoutDateIdeaInput = {
    where: SavedDateIdeaScalarWhereInput
    data: XOR<SavedDateIdeaUpdateManyMutationInput, SavedDateIdeaUncheckedUpdateManyWithoutDateIdeaInput>
  }

  export type UserCreateWithoutSavedDateIdeasInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    couple?: CoupleCreateNestedOneWithoutUsersInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSavedDateIdeasInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    coupleId?: string | null
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSavedDateIdeasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedDateIdeasInput, UserUncheckedCreateWithoutSavedDateIdeasInput>
  }

  export type DateIdeaCreateWithoutSavedByInput = {
    id?: string
    idea: string
    createdAt?: Date | string
  }

  export type DateIdeaUncheckedCreateWithoutSavedByInput = {
    id?: string
    idea: string
    createdAt?: Date | string
  }

  export type DateIdeaCreateOrConnectWithoutSavedByInput = {
    where: DateIdeaWhereUniqueInput
    create: XOR<DateIdeaCreateWithoutSavedByInput, DateIdeaUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedDateIdeasInput = {
    update: XOR<UserUpdateWithoutSavedDateIdeasInput, UserUncheckedUpdateWithoutSavedDateIdeasInput>
    create: XOR<UserCreateWithoutSavedDateIdeasInput, UserUncheckedCreateWithoutSavedDateIdeasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedDateIdeasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedDateIdeasInput, UserUncheckedUpdateWithoutSavedDateIdeasInput>
  }

  export type UserUpdateWithoutSavedDateIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    couple?: CoupleUpdateOneWithoutUsersNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedDateIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type DateIdeaUpsertWithoutSavedByInput = {
    update: XOR<DateIdeaUpdateWithoutSavedByInput, DateIdeaUncheckedUpdateWithoutSavedByInput>
    create: XOR<DateIdeaCreateWithoutSavedByInput, DateIdeaUncheckedCreateWithoutSavedByInput>
    where?: DateIdeaWhereInput
  }

  export type DateIdeaUpdateToOneWithWhereWithoutSavedByInput = {
    where?: DateIdeaWhereInput
    data: XOR<DateIdeaUpdateWithoutSavedByInput, DateIdeaUncheckedUpdateWithoutSavedByInput>
  }

  export type DateIdeaUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    idea?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateIdeaUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    idea?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    couple?: CoupleCreateNestedOneWithoutUsersInput
    receivedRequests?: RequestCreateNestedManyWithoutReceiverInput
    SavedDateIdeas?: SavedDateIdeaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    coupleId?: string | null
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutReceiverInput
    SavedDateIdeas?: SavedDateIdeaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    couple?: CoupleCreateNestedOneWithoutUsersInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    SavedDateIdeas?: SavedDateIdeaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    name: string
    shareCode: string
    coupleId?: string | null
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    SavedDateIdeas?: SavedDateIdeaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    couple?: CoupleUpdateOneWithoutUsersNestedInput
    receivedRequests?: RequestUpdateManyWithoutReceiverNestedInput
    SavedDateIdeas?: SavedDateIdeaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedRequests?: RequestUncheckedUpdateManyWithoutReceiverNestedInput
    SavedDateIdeas?: SavedDateIdeaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    couple?: CoupleUpdateOneWithoutUsersNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    SavedDateIdeas?: SavedDateIdeaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    SavedDateIdeas?: SavedDateIdeaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RequestCreateManySenderInput = {
    id?: string
    receiverId: string
    status?: string
    createdAt?: Date | string
  }

  export type RequestCreateManyReceiverInput = {
    id?: string
    senderId: string
    status?: string
    createdAt?: Date | string
  }

  export type SavedDateIdeaCreateManyUserInput = {
    id?: number
    dateIdeaId: string
  }

  export type RequestUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedDateIdeaUpdateWithoutUserInput = {
    dateIdea?: DateIdeaUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedDateIdeaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIdeaId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedDateIdeaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIdeaId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyCoupleInput = {
    id?: string
    email: string
    name: string
    shareCode: string
  }

  export type UserUpdateWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutReceiverNestedInput
    SavedDateIdeas?: SavedDateIdeaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutReceiverNestedInput
    SavedDateIdeas?: SavedDateIdeaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
  }

  export type SavedDateIdeaCreateManyDateIdeaInput = {
    id?: number
    userId: string
  }

  export type SavedDateIdeaUpdateWithoutDateIdeaInput = {
    user?: UserUpdateOneRequiredWithoutSavedDateIdeasNestedInput
  }

  export type SavedDateIdeaUncheckedUpdateWithoutDateIdeaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedDateIdeaUncheckedUpdateManyWithoutDateIdeaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}