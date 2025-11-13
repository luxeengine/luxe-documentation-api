---
title: "luxe: id"
description: API version 2025.11.1
slug: "v/2025.11.1/id"
---
- [ID](#id)   

---


## ID
```wren
import "luxe: id" for ID
```
> IDs are useful in many cases, this API provides them in various forms like UUID or unique short strings.

<endpoint module="luxe: id" class="ID" signature="unique()"></endpoint>
### ID.unique(.)
```wren
ID.unique() : String
```
> Returns a unique short string ID for use.
> These are useful for default generated names, random urls, etc.
> 
> Note that these are "unique enough" but has higher risk of collision than a UUID.
> If you want _universally unique_ IDs that's what UUID is for.
> (Don't make assumptions about the length of the ID, for fixed length use `ID.unique(length: Num)`).
> 
>   ```js
>   Log.print(ID.unique()) //UuIyH
>   Log.print(ID.unique()) //39sjDw
>   Log.print(ID.unique()) //28zASZ
>   ```   

<endpoint module="luxe: id" class="ID" signature="unique(length : Num)"></endpoint>
### ID.unique(.)
```wren
ID.unique(length : Num) : String
```
> Returns a unique short string ID for use.
> These are useful for default generated names, random urls, etc.
> 
> Note that these are "unique enough" but has higher risk of collision than a UUID.
> If you want _universally unique_ IDs that's what UUID is for.
> 
>   ```js
>   Log.print(ID.unique(6)) //Uu2IyH
>   Log.print(ID.unique(8)) //39sjDwl4
>   ```   

<endpoint module="luxe: id" class="ID" signature="index(index : Num)"></endpoint>
### ID.index(.)
```wren
ID.index(index : Num) : String
```
> no docs found   

<endpoint module="luxe: id" class="ID" signature="uuid()"></endpoint>
### ID.uuid(.)
```wren
ID.uuid() : String
```
> Returns a UUID v4 ID.
> These are unique enough to not worry about collisions (not for cryptography).
> 
>   ```js
>   Log.print(ID.uuid()) //5606ba0f-968a-4ab7-8230-ba46cdb345da
>   Log.print(ID.uuid()) //48e3d469-e9fa-4a24-aa22-d653de9af5b2
>   Log.print(ID.uuid()) //a4861cc5-c2e4-4656-a3a4-176bc63e5d05
>   ```   

<endpoint module="luxe: id" class="ID" signature="uuid(from : String)"></endpoint>
### ID.uuid(.)
```wren
ID.uuid(from : String) : String
```
> Returns a UUID v4 from the given string (treated as bytes).
> This runs a 128 bit hash (spooky v2) over the string, converting the bits to a uuid string.
> 
>   ```js
>   Log.print(ID.uuid("hello")) //3768826a-d382-e6ca-5c94-1ed1c71ae043
>   Log.print(ID.uuid("luxe")) //7281a4a8-abc4-dc50-52ae-7f59626f242a
>   ```   

<endpoint module="luxe: id" class="ID" signature="uuid_validate(uuid : String)"></endpoint>
### ID.uuid_validate(.)
```wren
ID.uuid_validate(uuid : String) : unknown
```
> Returns true if the given UUID is valid (using regex matching).
> 
>   ```js
>   Log.print(ID.validate_uuid(ID.uuid())) //true
>   Log.print(ID.validate_uuid("hello"))   //false
>   ```   

<endpoint module="luxe: id" class="ID" signature="uuid_base62()"></endpoint>
### ID.uuid_base62(.)
```wren
ID.uuid_base62() : String
```
> Returns a UUID represented as a base62 string.
> 
>   ```js
>   Log.print(ID.uuid_base62()) //AXiFxIVixJM-EDCrnEHVkWJ
>   ```   

<endpoint module="luxe: id" class="ID" signature="uuid_combine(uuid_a : String, uuid_b : String)"></endpoint>
### ID.uuid_combine(..)
```wren
ID.uuid_combine(uuid_a : String, uuid_b : String) : String
```
> Returns a new UUID by combining the two UUIDs given.
> 
>   ```js
>   Log.print(ID.uuid_combine(ID.uuid(), ID.uuid())) //5f558462-7525-48c0-812d-a65df074ce42
>   ```   

