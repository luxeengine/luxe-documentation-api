---
title: "luxe: system/values.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/values.modifier"
---
- [Data](#data)   
- [Value](#value)   
- [Values](#values)   
- [ValuesKind](#valueskind)   
- [ValuesType](#valuestype)   

---


## Data
```lx
import "luxe: system/values.modifier" for Data
```
> no docs found

### Variables
```lx
var values : List = []
```

## Value
```lx
import "luxe: system/values.modifier" for Value
```
> no docs found

### Variables
```lx
var kind : ValuesKind = ValuesKind.number
var name : String = "value"
var number : Num = 0
var string : String = ""
var boolean : Bool = false
var float2 : Float2 = [0, 0]
var float3 : Float3 = [0, 0, 0]
var float4 : Float4 = [0, 0, 0, 0]
var color : Color = [1, 1, 1, 1]
```

## Values
```lx
import "luxe: system/values.modifier" for Values
```
> Values is a modifier that lets you store Key -> Value pairs. Store values like numbers, 
> strings, and colors on an entity, which can then be accessed by name (a Key).
> 
>   ```js
>   //we can use an enum for keys
>   class Keys {
>     static watered { "watered" }
>     static apples { "apples" }
>   }
>   var tree = Entity.create(world)
>   Values.create(tree)
>   Values.set(tree, Keys.watered, true)
>   Values.set(tree, Keys.apples, 10)
>   Values.set(tree, "keys are strings", true)
> 
>   var watered = Values.get(tree, Keys.watered, false)
>   var apples = Values.get(tree, Keys.apples, -1)
>   Log.print("The tree is %(watered ? "watered" : "thirsty") and has %(apples) apples!")
>   ```

<endpoint module="luxe: system/values.modifier" class="Values" signature="create(entity : Entity)"></endpoint>
### Values.create(.)
```lx
Values.create(entity : Entity) : None
```
> Attach a `Values` modifier to `entity`.
> 
>   ```js
>   var entity = Entity.create(world)
>   Values.create(entity)
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="destroy(entity : Entity)"></endpoint>
### Values.destroy(.)
```lx
Values.destroy(entity : Entity) : None
```
> Detach and destroy the `Values` attached to `entity`
> 
>   ```js
>   Values.destroy(entity)
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="has(entity : Entity)"></endpoint>
### Values.has(.)
```lx
Values.has(entity : Entity) : Bool
```
> Returns true if `entity` has a `Values` modifier attached.
> 
>   ```js
>   if(Values.has(entity)) {
>     Log.print("Has a Values modifier!")
>   }
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="has_key(entity : Entity, key : String)"></endpoint>
### Values.has_key(..)
```lx
Values.has_key(entity : Entity, key : String) : Bool
```
> Returns true the entity's Values modifier has a value with the given 'key'
> 
>   ```js
>   if(Values.has_key(entity, "apples")) {
>     Log.print("The tree has some apples!")
>   }
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="remove_key(entity : Entity, key : String)"></endpoint>
### Values.remove_key(..)
```lx
Values.remove_key(entity : Entity, key : String) : None
```
> Removes a value by key from 'entity's Values modifier, if it exists
> 
>   ```js
>   Values.remove_key(tree, "apples")
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="get_keys(entity : Entity)"></endpoint>
### Values.get_keys(.)
```lx
Values.get_keys(entity : Entity) : List
```
> Get a List of all the String keys for values on 'entity's Values modifier
> 
>   ```js
>   var keys = Values.get_keys(grass)
>   for (key in keys) {
>     Log.print("Has Value Key: %(key)")
>   }
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="get(entity : Entity, key : String, default : Any)"></endpoint>
### Values.get(...)
```lx
Values.get(entity : Entity, key : String, default : Any) : Any
```
> Get the current value stored with `key` on the Values modifier on `entity`,
> with a default value which is returned if the key isn't found.
> 
>   ```js
>   var seeds = Values.get(watermelon, "seeds", 0)
>   Log.print("The watermelon has %(seeds) seeds!")
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="set(entity : Entity, key : String, value : Any)"></endpoint>
### Values.set(...)
```lx
Values.set(entity : Entity, key : String, value : Any) : None
```
> Set the value stored at the 'key' on the Values modifier on 'entity'.
> 
>   ```js
>   if(Values.has(seed)) {
>     Values.set(seed, "planted", true)
>   }
>   ```   


## ValuesKind
```lx
import "luxe: system/values.modifier" for ValuesKind
```
> no docs found

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="number"></endpoint>
### ValuesKind.number
```lx
ValuesKind.number : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="string"></endpoint>
### ValuesKind.string
```lx
ValuesKind.string : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="boolean"></endpoint>
### ValuesKind.boolean
```lx
ValuesKind.boolean : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="float2"></endpoint>
### ValuesKind.float2
```lx
ValuesKind.float2 : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="float3"></endpoint>
### ValuesKind.float3
```lx
ValuesKind.float3 : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="float4"></endpoint>
### ValuesKind.float4
```lx
ValuesKind.float4 : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="color"></endpoint>
### ValuesKind.color
```lx
ValuesKind.color : unknown
```
> no docs found   


## ValuesType
```lx
import "luxe: system/values.modifier" for ValuesType
```
> no docs found

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="unknown"></endpoint>
### ValuesType.unknown
```lx
ValuesType.unknown : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="bool"></endpoint>
### ValuesType.bool
```lx
ValuesType.bool : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="number"></endpoint>
### ValuesType.number
```lx
ValuesType.number : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="string"></endpoint>
### ValuesType.string
```lx
ValuesType.string : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="float2"></endpoint>
### ValuesType.float2
```lx
ValuesType.float2 : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="float3"></endpoint>
### ValuesType.float3
```lx
ValuesType.float3 : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="float4"></endpoint>
### ValuesType.float4
```lx
ValuesType.float4 : unknown
```
> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="name(value : Any)"></endpoint>
### ValuesType.name(.)
```lx
ValuesType.name(value : Any) : unknown
```
> no docs found   

