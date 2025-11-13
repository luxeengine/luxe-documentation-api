---
title: "luxe: settings"
description: API version 2025.11.1
---
## `luxe: settings{:lx}` module

- [Settings](#settings)   
- [SettingsType](#settingstype)   

---


### Settings
`import "luxe: settings" for Settings{:lx}`
> no docs found

- [apply](#Settings.apply)(**settings_id**: `String{:lx}`)
- [apply](#Settings.apply+2)(**settings_id**: `String{:lx}`, **settings_lx_data**: `String{:lx}`)
- [unapply](#Settings.unapply)(**settings_id**: `String{:lx}`)
- [forget](#Settings.forget)(**key**: `String{:lx}`)
- [has](#Settings.has)(**key**: `String{:lx}`)
- [get](#Settings.get+2)(**key**: `String{:lx}`, **default**: `Any{:lx}`)
- [set_string](#Settings.set_string+3)(**key**: `String{:lx}`, **value**: `String{:lx}`, **length**: `Num{:lx}`)
- [set_number](#Settings.set_number+2)(**key**: `String{:lx}`, **value**: `Num{:lx}`)
- [set_bool](#Settings.set_bool+2)(**key**: `String{:lx}`, **value**: `Bool{:lx}`)
- [set_float2](#Settings.set_float2+3)(**key**: `String{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [set_float3](#Settings.set_float3+4)(**key**: `String{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_float4](#Settings.set_float4+5)(**key**: `String{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`)
- [set](#Settings.set+2)(**key**: `String{:lx}`, **value**: `Any{:lx}`)


---

<endpoint module="luxe: settings" class="Settings" signature="apply(settings_id : String)"></endpoint>
<h4 class="signature_head">Settings.apply</h4><a class="signature-arity" href="#Settings.apply" title="Permanent link">1</a><signature id="Settings.apply">

```lx
Settings.apply(settings_id : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="apply(settings_id : String, settings_lx_data : String)"></endpoint>
<h4 class="signature_head">Settings.apply</h4><a class="signature-arity" href="#Settings.apply+2" title="Permanent link">2</a><signature id="Settings.apply+2">

```lx
Settings.apply(settings_id : String, settings_lx_data : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="unapply(settings_id : String)"></endpoint>
<h4 class="signature_head">Settings.unapply</h4><a class="signature-arity" href="#Settings.unapply" title="Permanent link">1</a><signature id="Settings.unapply">

```lx
Settings.unapply(settings_id : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="forget(key : String)"></endpoint>
<h4 class="signature_head">Settings.forget</h4><a class="signature-arity" href="#Settings.forget" title="Permanent link">1</a><signature id="Settings.forget">

```lx
Settings.forget(key : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="has(key : String)"></endpoint>
<h4 class="signature_head">Settings.has</h4><a class="signature-arity" href="#Settings.has" title="Permanent link">1</a><signature id="Settings.has">

```lx
Settings.has(key : String) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="get(key : String, default : Any)"></endpoint>
<h4 class="signature_head">Settings.get</h4><a class="signature-arity" href="#Settings.get+2" title="Permanent link">2</a><signature id="Settings.get+2">

```lx
Settings.get(key : String, default : Any) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="set_string(key : String, value : String, length : Num)"></endpoint>
<h4 class="signature_head">Settings.set_string</h4><a class="signature-arity" href="#Settings.set_string+3" title="Permanent link">3</a><signature id="Settings.set_string+3">

```lx
Settings.set_string(key : String, value : String, length : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="set_number(key : String, value : Num)"></endpoint>
<h4 class="signature_head">Settings.set_number</h4><a class="signature-arity" href="#Settings.set_number+2" title="Permanent link">2</a><signature id="Settings.set_number+2">

```lx
Settings.set_number(key : String, value : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="set_bool(key : String, value : Bool)"></endpoint>
<h4 class="signature_head">Settings.set_bool</h4><a class="signature-arity" href="#Settings.set_bool+2" title="Permanent link">2</a><signature id="Settings.set_bool+2">

```lx
Settings.set_bool(key : String, value : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="set_float2(key : String, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Settings.set_float2</h4><a class="signature-arity" href="#Settings.set_float2+3" title="Permanent link">3</a><signature id="Settings.set_float2+3">

```lx
Settings.set_float2(key : String, x : Num, y : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="set_float3(key : String, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Settings.set_float3</h4><a class="signature-arity" href="#Settings.set_float3+4" title="Permanent link">4</a><signature id="Settings.set_float3+4">

```lx
Settings.set_float3(key : String, x : Num, y : Num, z : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="set_float4(key : String, x : Num, y : Num, z : Num, w : Num)"></endpoint>
<h4 class="signature_head">Settings.set_float4</h4><a class="signature-arity" href="#Settings.set_float4+5" title="Permanent link">5</a><signature id="Settings.set_float4+5">

```lx
Settings.set_float4(key : String, x : Num, y : Num, z : Num, w : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="Settings" signature="set(key : String, value : Any)"></endpoint>
<h4 class="signature_head">Settings.set</h4><a class="signature-arity" href="#Settings.set+2" title="Permanent link">2</a><signature id="Settings.set+2">

```lx
Settings.set(key : String, value : Any) : None
```
</signature>

> no docs found   


### SettingsType
`import "luxe: settings" for SettingsType{:lx}`
> no docs found

- [unknown](#SettingsType.unknown)
- [boolean](#SettingsType.boolean)
- [number](#SettingsType.number)
- [string](#SettingsType.string)
- [float2](#SettingsType.float2)
- [float3](#SettingsType.float3)
- [float4](#SettingsType.float4)
- [name](#SettingsType.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: settings" class="SettingsType" signature="unknown"></endpoint>
<h4 class="signature_head">SettingsType.unknown</h4><a class="signature-arity" href="#SettingsType.unknown" title="Permanent link">1</a><signature id="SettingsType.unknown">

```lx
SettingsType.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="SettingsType" signature="boolean"></endpoint>
<h4 class="signature_head">SettingsType.boolean</h4><a class="signature-arity" href="#SettingsType.boolean" title="Permanent link">1</a><signature id="SettingsType.boolean">

```lx
SettingsType.boolean : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="SettingsType" signature="number"></endpoint>
<h4 class="signature_head">SettingsType.number</h4><a class="signature-arity" href="#SettingsType.number" title="Permanent link">1</a><signature id="SettingsType.number">

```lx
SettingsType.number : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="SettingsType" signature="string"></endpoint>
<h4 class="signature_head">SettingsType.string</h4><a class="signature-arity" href="#SettingsType.string" title="Permanent link">1</a><signature id="SettingsType.string">

```lx
SettingsType.string : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="SettingsType" signature="float2"></endpoint>
<h4 class="signature_head">SettingsType.float2</h4><a class="signature-arity" href="#SettingsType.float2" title="Permanent link">1</a><signature id="SettingsType.float2">

```lx
SettingsType.float2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="SettingsType" signature="float3"></endpoint>
<h4 class="signature_head">SettingsType.float3</h4><a class="signature-arity" href="#SettingsType.float3" title="Permanent link">1</a><signature id="SettingsType.float3">

```lx
SettingsType.float3 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="SettingsType" signature="float4"></endpoint>
<h4 class="signature_head">SettingsType.float4</h4><a class="signature-arity" href="#SettingsType.float4" title="Permanent link">1</a><signature id="SettingsType.float4">

```lx
SettingsType.float4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: settings" class="SettingsType" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">SettingsType.name</h4><a class="signature-arity" href="#SettingsType.name" title="Permanent link">1</a><signature id="SettingsType.name">

```lx
SettingsType.name(value : Any) : unknown
```
</signature>

> no docs found   

