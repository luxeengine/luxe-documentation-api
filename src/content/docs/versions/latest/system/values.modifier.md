---
title: "luxe: system/values.modifier"
description: API version 2025.11.1
---
## `luxe: system/values.modifier{:lx}` module

- [Data](#data)   
- [Value](#value)   
- [Values](#values)   
- [ValuesKind](#valueskind)   
- [ValuesType](#valuestype)   

---


### Data
`import "luxe: system/values.modifier" for Data{:lx}`
> no docs found

- `var values : List = []{:lx}`


---


### Value
`import "luxe: system/values.modifier" for Value{:lx}`
> no docs found

- `var kind : ValuesKind = ValuesKind.number{:lx}`
- `var name : String = "value"{:lx}`
- `var number : Num = 0{:lx}`
- `var string : String = ""{:lx}`
- `var boolean : Bool = false{:lx}`
- `var float2 : Float2 = [0, 0]{:lx}`
- `var float3 : Float3 = [0, 0, 0]{:lx}`
- `var float4 : Float4 = [0, 0, 0, 0]{:lx}`
- `var color : Color = [1, 1, 1, 1]{:lx}`


---


### Values
`import "luxe: system/values.modifier" for Values{:lx}`
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

- [create](#Values.create)(**entity**: `Entity{:lx}`)
- [destroy](#Values.destroy)(**entity**: `Entity{:lx}`)
- [has](#Values.has)(**entity**: `Entity{:lx}`)
- [has_key](#Values.has_key+2)(**entity**: `Entity{:lx}`, **key**: `String{:lx}`)
- [remove_key](#Values.remove_key+2)(**entity**: `Entity{:lx}`, **key**: `String{:lx}`)
- [get_keys](#Values.get_keys)(**entity**: `Entity{:lx}`)
- [get](#Values.get+3)(**entity**: `Entity{:lx}`, **key**: `String{:lx}`, **default**: `Any{:lx}`)
- [set](#Values.set+3)(**entity**: `Entity{:lx}`, **key**: `String{:lx}`, **value**: `Any{:lx}`)


---

<endpoint module="luxe: system/values.modifier" class="Values" signature="create(entity : Entity)"></endpoint>
<h4 class="signature_head">Values.create</h4><a class="signature-arity" href="#Values.create" title="Permanent link">1</a><signature id="Values.create">

```lx
Values.create(entity : Entity) : None
```
</signature>

> Attach a `Values` modifier to `entity`.
> 
>   ```js
>   var entity = Entity.create(world)
>   Values.create(entity)
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="destroy(entity : Entity)"></endpoint>
<h4 class="signature_head">Values.destroy</h4><a class="signature-arity" href="#Values.destroy" title="Permanent link">1</a><signature id="Values.destroy">

```lx
Values.destroy(entity : Entity) : None
```
</signature>

> Detach and destroy the `Values` attached to `entity`
> 
>   ```js
>   Values.destroy(entity)
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="has(entity : Entity)"></endpoint>
<h4 class="signature_head">Values.has</h4><a class="signature-arity" href="#Values.has" title="Permanent link">1</a><signature id="Values.has">

```lx
Values.has(entity : Entity) : Bool
```
</signature>

> Returns true if `entity` has a `Values` modifier attached.
> 
>   ```js
>   if(Values.has(entity)) {
>     Log.print("Has a Values modifier!")
>   }
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="has_key(entity : Entity, key : String)"></endpoint>
<h4 class="signature_head">Values.has_key</h4><a class="signature-arity" href="#Values.has_key+2" title="Permanent link">2</a><signature id="Values.has_key+2">

```lx
Values.has_key(entity : Entity, key : String) : Bool
```
</signature>

> Returns true the entity's Values modifier has a value with the given 'key'
> 
>   ```js
>   if(Values.has_key(entity, "apples")) {
>     Log.print("The tree has some apples!")
>   }
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="remove_key(entity : Entity, key : String)"></endpoint>
<h4 class="signature_head">Values.remove_key</h4><a class="signature-arity" href="#Values.remove_key+2" title="Permanent link">2</a><signature id="Values.remove_key+2">

```lx
Values.remove_key(entity : Entity, key : String) : None
```
</signature>

> Removes a value by key from 'entity's Values modifier, if it exists
> 
>   ```js
>   Values.remove_key(tree, "apples")
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="get_keys(entity : Entity)"></endpoint>
<h4 class="signature_head">Values.get_keys</h4><a class="signature-arity" href="#Values.get_keys" title="Permanent link">1</a><signature id="Values.get_keys">

```lx
Values.get_keys(entity : Entity) : List
```
</signature>

> Get a List of all the String keys for values on 'entity's Values modifier
> 
>   ```js
>   var keys = Values.get_keys(grass)
>   for (key in keys) {
>     Log.print("Has Value Key: %(key)")
>   }
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="get(entity : Entity, key : String, default : Any)"></endpoint>
<h4 class="signature_head">Values.get</h4><a class="signature-arity" href="#Values.get+3" title="Permanent link">3</a><signature id="Values.get+3">

```lx
Values.get(entity : Entity, key : String, default : Any) : Any
```
</signature>

> Get the current value stored with `key` on the Values modifier on `entity`,
> with a default value which is returned if the key isn't found.
> 
>   ```js
>   var seeds = Values.get(watermelon, "seeds", 0)
>   Log.print("The watermelon has %(seeds) seeds!")
>   ```   

<endpoint module="luxe: system/values.modifier" class="Values" signature="set(entity : Entity, key : String, value : Any)"></endpoint>
<h4 class="signature_head">Values.set</h4><a class="signature-arity" href="#Values.set+3" title="Permanent link">3</a><signature id="Values.set+3">

```lx
Values.set(entity : Entity, key : String, value : Any) : None
```
</signature>

> Set the value stored at the 'key' on the Values modifier on 'entity'.
> 
>   ```js
>   if(Values.has(seed)) {
>     Values.set(seed, "planted", true)
>   }
>   ```   


### ValuesKind
`import "luxe: system/values.modifier" for ValuesKind{:lx}`
> no docs found

- [number](#ValuesKind.number)
- [string](#ValuesKind.string)
- [boolean](#ValuesKind.boolean)
- [float2](#ValuesKind.float2)
- [float3](#ValuesKind.float3)
- [float4](#ValuesKind.float4)
- [color](#ValuesKind.color)


---

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="number"></endpoint>
<h4 class="signature_head">ValuesKind.number</h4><a class="signature-arity" href="#ValuesKind.number" title="Permanent link">1</a><signature id="ValuesKind.number">

```lx
ValuesKind.number : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="string"></endpoint>
<h4 class="signature_head">ValuesKind.string</h4><a class="signature-arity" href="#ValuesKind.string" title="Permanent link">1</a><signature id="ValuesKind.string">

```lx
ValuesKind.string : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="boolean"></endpoint>
<h4 class="signature_head">ValuesKind.boolean</h4><a class="signature-arity" href="#ValuesKind.boolean" title="Permanent link">1</a><signature id="ValuesKind.boolean">

```lx
ValuesKind.boolean : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="float2"></endpoint>
<h4 class="signature_head">ValuesKind.float2</h4><a class="signature-arity" href="#ValuesKind.float2" title="Permanent link">1</a><signature id="ValuesKind.float2">

```lx
ValuesKind.float2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="float3"></endpoint>
<h4 class="signature_head">ValuesKind.float3</h4><a class="signature-arity" href="#ValuesKind.float3" title="Permanent link">1</a><signature id="ValuesKind.float3">

```lx
ValuesKind.float3 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="float4"></endpoint>
<h4 class="signature_head">ValuesKind.float4</h4><a class="signature-arity" href="#ValuesKind.float4" title="Permanent link">1</a><signature id="ValuesKind.float4">

```lx
ValuesKind.float4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesKind" signature="color"></endpoint>
<h4 class="signature_head">ValuesKind.color</h4><a class="signature-arity" href="#ValuesKind.color" title="Permanent link">1</a><signature id="ValuesKind.color">

```lx
ValuesKind.color : unknown
```
</signature>

> no docs found   


### ValuesType
`import "luxe: system/values.modifier" for ValuesType{:lx}`
> no docs found

- [unknown](#ValuesType.unknown)
- [bool](#ValuesType.bool)
- [number](#ValuesType.number)
- [string](#ValuesType.string)
- [float2](#ValuesType.float2)
- [float3](#ValuesType.float3)
- [float4](#ValuesType.float4)
- [name](#ValuesType.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="unknown"></endpoint>
<h4 class="signature_head">ValuesType.unknown</h4><a class="signature-arity" href="#ValuesType.unknown" title="Permanent link">1</a><signature id="ValuesType.unknown">

```lx
ValuesType.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="bool"></endpoint>
<h4 class="signature_head">ValuesType.bool</h4><a class="signature-arity" href="#ValuesType.bool" title="Permanent link">1</a><signature id="ValuesType.bool">

```lx
ValuesType.bool : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="number"></endpoint>
<h4 class="signature_head">ValuesType.number</h4><a class="signature-arity" href="#ValuesType.number" title="Permanent link">1</a><signature id="ValuesType.number">

```lx
ValuesType.number : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="string"></endpoint>
<h4 class="signature_head">ValuesType.string</h4><a class="signature-arity" href="#ValuesType.string" title="Permanent link">1</a><signature id="ValuesType.string">

```lx
ValuesType.string : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="float2"></endpoint>
<h4 class="signature_head">ValuesType.float2</h4><a class="signature-arity" href="#ValuesType.float2" title="Permanent link">1</a><signature id="ValuesType.float2">

```lx
ValuesType.float2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="float3"></endpoint>
<h4 class="signature_head">ValuesType.float3</h4><a class="signature-arity" href="#ValuesType.float3" title="Permanent link">1</a><signature id="ValuesType.float3">

```lx
ValuesType.float3 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="float4"></endpoint>
<h4 class="signature_head">ValuesType.float4</h4><a class="signature-arity" href="#ValuesType.float4" title="Permanent link">1</a><signature id="ValuesType.float4">

```lx
ValuesType.float4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/values.modifier" class="ValuesType" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">ValuesType.name</h4><a class="signature-arity" href="#ValuesType.name" title="Permanent link">1</a><signature id="ValuesType.name">

```lx
ValuesType.name(value : Any) : unknown
```
</signature>

> no docs found   

