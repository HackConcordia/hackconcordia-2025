// utils/types.ts
type Join<K, P> = K extends string
    ? P extends string
    ? `${K}.${P}`
    : never
    : never;

export type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & string]: ObjectType[Key] extends object
    ? Join<Key, NestedKeyOf<ObjectType[Key]>>
    : Key;
}[keyof ObjectType & string];