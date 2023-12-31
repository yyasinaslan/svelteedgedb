// GENERATED by @edgedb/generate v0.3.3

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export type $UserλShape = $.typeutil.flatten<_std.$Object_6b06be9b27fe11ee83ff159af7e1bb81λShape & {
  "userGroup": $.LinkDesc<$UserGroup, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "password": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "emailVerifiedAt": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "role": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<users[is UserGroup]": $.LinkDesc<$UserGroup, $.Cardinality.Many, {}, false, false,  false, false>;
  "<users": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null, [
  ..._std.$Object_6b06be9b27fe11ee83ff159af7e1bb81['__exclusives__'],
]>;
const $User = $.makeType<$User>(_.spec, "5704b4d0-3d9e-11ee-802a-c35c56dc9eb2", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null);

export type $UserGroupλShape = $.typeutil.flatten<_std.$Object_6b06be9b27fe11ee83ff159af7e1bb81λShape & {
  "users": $.LinkDesc<$User, $.Cardinality.Many, {}, false, true,  false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<userGroup[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<userGroup": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $UserGroup = $.ObjectType<"default::UserGroup", $UserGroupλShape, null, [
  ..._std.$Object_6b06be9b27fe11ee83ff159af7e1bb81['__exclusives__'],
]>;
const $UserGroup = $.makeType<$UserGroup>(_.spec, "5100fb92-466f-11ee-b3ab-2754c782cd8a", _.syntax.literal);

const UserGroup: $.$expr_PathNode<$.TypeSet<$UserGroup, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($UserGroup, $.Cardinality.Many), null);



export { $User, User, $UserGroup, UserGroup };

type __defaultExports = {
  "User": typeof User;
  "UserGroup": typeof UserGroup
};
const __defaultExports: __defaultExports = {
  "User": User,
  "UserGroup": UserGroup
};
export default __defaultExports;
