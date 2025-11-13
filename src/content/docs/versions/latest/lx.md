---
title: "luxe: lx"
description: API version 2025.11.1
---
## `luxe: lx{:lx}` module

- [LX](#lx)   
- [LXMerge](#lxmerge)   

---


### LX
`import "luxe: lx" for LX{:lx}`
> no docs found

- [parse_bytes](#LX.parse_bytes+2)(**source_name**: `Any{:lx}`, **bytes**: `Any{:lx}`)
- [read](#LX.read)(**path**: `Any{:lx}`)
- [read](#LX.read+2)(**source_id**: `Any{:lx}`, **path**: `Any{:lx}`)
- [parse](#LX.parse)(**data**: `Any{:lx}`)
- [parse](#LX.parse+2)(**source_path**: `Any{:lx}`, **data**: `Any{:lx}`)
- [parse](#LX.parse+3)(**source_path**: `Any{:lx}`, **data**: `Any{:lx}`, **quiet**: `Bool{:lx}`)
- [apply](#LX.apply+2)(**from**: `Any{:lx}`, **to**: `Any{:lx}`)
- [clone](#LX.clone)(**lx**: `Any{:lx}`)
- [equal](#LX.equal+2)(**lxA**: `Any{:lx}`, **lxB**: `Any{:lx}`)
- [delta](#LX.delta+2)(**lxA**: `Any{:lx}`, **lxB**: `Any{:lx}`)
- [delta_apply](#LX.delta_apply+2)(**lx**: `Any{:lx}`, **delta**: `Any{:lx}`)
- [delta_unapply](#LX.delta_unapply+2)(**lx**: `Any{:lx}`, **delta**: `Any{:lx}`)
- [key_get](#LX.key_get+2)(**lx**: `Any{:lx}`, **key**: `Any{:lx}`)
- [key_get_via_list](#LX.key_get_via_list+2)(**lx**: `Any{:lx}`, **key**: `Any{:lx}`)
- [key_remove](#LX.key_remove+2)(**lx**: `Any{:lx}`, **key**: `Any{:lx}`)
- [key_remove_via_list](#LX.key_remove_via_list+2)(**lx**: `Any{:lx}`, **key**: `Any{:lx}`)
- [key_set](#LX.key_set+3)(**lx**: `Any{:lx}`, **key**: `Any{:lx}`, **value**: `Any{:lx}`)
- [key_set_via_list](#LX.key_set_via_list+3)(**lx**: `Any{:lx}`, **key**: `Any{:lx}`, **value**: `Any{:lx}`)
- [stringify](#LX.stringify)(**root**: `Any{:lx}`)
- [stringify](#LX.stringify+2)(**root**: `Any{:lx}`, **spaces**: `Any{:lx}`)
- [stringify](#LX.stringify+3)(**root**: `Any{:lx}`, **spaces**: `Any{:lx}`, **with_root**: `Any{:lx}`)
- [stringify_to_bytes](#LX.stringify_to_bytes+4)(**root**: `Any{:lx}`, **max_size**: `Any{:lx}`, **spaces**: `Any{:lx}`, **with_root**: `Any{:lx}`)
- [write](#LX.write+2)(**contents**: `Any{:lx}`, **path**: `Any{:lx}`)
- [write](#LX.write+3)(**contents**: `Any{:lx}`, **path**: `Any{:lx}`, **spaces**: `Any{:lx}`)
- [write](#LX.write+4)(**contents**: `Any{:lx}`, **path**: `Any{:lx}`, **spaces**: `Any{:lx}`, **with_root**: `Any{:lx}`)
- [stringify_to_file](#LX.stringify_to_file+2)(**root**: `Any{:lx}`, **path**: `Any{:lx}`)
- [stringify_to_file](#LX.stringify_to_file+4)(**root**: `Any{:lx}`, **path**: `Any{:lx}`, **spaces**: `Any{:lx}`, **with_root**: `Any{:lx}`)
- [flatten](#LX.flatten)(**lx**: `Any{:lx}`)
- [flatten](#LX.flatten+2)(**lx**: `Any{:lx}`, **delimiter**: `Any{:lx}`)
- [unflatten](#LX.unflatten)(**lx**: `Any{:lx}`)


---

<endpoint module="luxe: lx" class="LX" signature="parse_bytes(source_name : Any, bytes : Any)"></endpoint>
<h4 class="signature_head">LX.parse_bytes</h4><a class="signature-arity" href="#LX.parse_bytes+2" title="Permanent link">2</a><signature id="LX.parse_bytes+2">

```lx
LX.parse_bytes(source_name : Any, bytes : Any) : Result
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="read(path : Any)"></endpoint>
<h4 class="signature_head">LX.read</h4><a class="signature-arity" href="#LX.read" title="Permanent link">1</a><signature id="LX.read">

```lx
LX.read(path : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="read(source_id : Any, path : Any)"></endpoint>
<h4 class="signature_head">LX.read</h4><a class="signature-arity" href="#LX.read+2" title="Permanent link">2</a><signature id="LX.read+2">

```lx
LX.read(source_id : Any, path : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="parse(data : Any)"></endpoint>
<h4 class="signature_head">LX.parse</h4><a class="signature-arity" href="#LX.parse" title="Permanent link">1</a><signature id="LX.parse">

```lx
LX.parse(data : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="parse(source_path : Any, data : Any)"></endpoint>
<h4 class="signature_head">LX.parse</h4><a class="signature-arity" href="#LX.parse+2" title="Permanent link">2</a><signature id="LX.parse+2">

```lx
LX.parse(source_path : Any, data : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="parse(source_path : Any, data : Any, quiet : Bool)"></endpoint>
<h4 class="signature_head">LX.parse</h4><a class="signature-arity" href="#LX.parse+3" title="Permanent link">3</a><signature id="LX.parse+3">

```lx
LX.parse(source_path : Any, data : Any, quiet : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="apply(from : Any, to : Any)"></endpoint>
<h4 class="signature_head">LX.apply</h4><a class="signature-arity" href="#LX.apply+2" title="Permanent link">2</a><signature id="LX.apply+2">

```lx
LX.apply(from : Any, to : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="clone(lx : Any)"></endpoint>
<h4 class="signature_head">LX.clone</h4><a class="signature-arity" href="#LX.clone" title="Permanent link">1</a><signature id="LX.clone">

```lx
LX.clone(lx : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="equal(lxA : Any, lxB : Any)"></endpoint>
<h4 class="signature_head">LX.equal</h4><a class="signature-arity" href="#LX.equal+2" title="Permanent link">2</a><signature id="LX.equal+2">

```lx
LX.equal(lxA : Any, lxB : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="delta(lxA : Any, lxB : Any)"></endpoint>
<h4 class="signature_head">LX.delta</h4><a class="signature-arity" href="#LX.delta+2" title="Permanent link">2</a><signature id="LX.delta+2">

```lx
LX.delta(lxA : Any, lxB : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="delta_apply(lx : Any, delta : Any)"></endpoint>
<h4 class="signature_head">LX.delta_apply</h4><a class="signature-arity" href="#LX.delta_apply+2" title="Permanent link">2</a><signature id="LX.delta_apply+2">

```lx
LX.delta_apply(lx : Any, delta : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="delta_unapply(lx : Any, delta : Any)"></endpoint>
<h4 class="signature_head">LX.delta_unapply</h4><a class="signature-arity" href="#LX.delta_unapply+2" title="Permanent link">2</a><signature id="LX.delta_unapply+2">

```lx
LX.delta_unapply(lx : Any, delta : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="key_get(lx : Any, key : Any)"></endpoint>
<h4 class="signature_head">LX.key_get</h4><a class="signature-arity" href="#LX.key_get+2" title="Permanent link">2</a><signature id="LX.key_get+2">

```lx
LX.key_get(lx : Any, key : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="key_get_via_list(lx : Any, key : Any)"></endpoint>
<h4 class="signature_head">LX.key_get_via_list</h4><a class="signature-arity" href="#LX.key_get_via_list+2" title="Permanent link">2</a><signature id="LX.key_get_via_list+2">

```lx
LX.key_get_via_list(lx : Any, key : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="key_remove(lx : Any, key : Any)"></endpoint>
<h4 class="signature_head">LX.key_remove</h4><a class="signature-arity" href="#LX.key_remove+2" title="Permanent link">2</a><signature id="LX.key_remove+2">

```lx
LX.key_remove(lx : Any, key : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="key_remove_via_list(lx : Any, key : Any)"></endpoint>
<h4 class="signature_head">LX.key_remove_via_list</h4><a class="signature-arity" href="#LX.key_remove_via_list+2" title="Permanent link">2</a><signature id="LX.key_remove_via_list+2">

```lx
LX.key_remove_via_list(lx : Any, key : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="key_set(lx : Any, key : Any, value : Any)"></endpoint>
<h4 class="signature_head">LX.key_set</h4><a class="signature-arity" href="#LX.key_set+3" title="Permanent link">3</a><signature id="LX.key_set+3">

```lx
LX.key_set(lx : Any, key : Any, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="key_set_via_list(lx : Any, key : Any, value : Any)"></endpoint>
<h4 class="signature_head">LX.key_set_via_list</h4><a class="signature-arity" href="#LX.key_set_via_list+3" title="Permanent link">3</a><signature id="LX.key_set_via_list+3">

```lx
LX.key_set_via_list(lx : Any, key : Any, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="stringify(root : Any)"></endpoint>
<h4 class="signature_head">LX.stringify</h4><a class="signature-arity" href="#LX.stringify" title="Permanent link">1</a><signature id="LX.stringify">

```lx
LX.stringify(root : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="stringify(root : Any, spaces : Any)"></endpoint>
<h4 class="signature_head">LX.stringify</h4><a class="signature-arity" href="#LX.stringify+2" title="Permanent link">2</a><signature id="LX.stringify+2">

```lx
LX.stringify(root : Any, spaces : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="stringify(root : Any, spaces : Any, with_root : Any)"></endpoint>
<h4 class="signature_head">LX.stringify</h4><a class="signature-arity" href="#LX.stringify+3" title="Permanent link">3</a><signature id="LX.stringify+3">

```lx
LX.stringify(root : Any, spaces : Any, with_root : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="stringify_to_bytes(root : Any, max_size : Any, spaces : Any, with_root : Any)"></endpoint>
<h4 class="signature_head">LX.stringify_to_bytes</h4><a class="signature-arity" href="#LX.stringify_to_bytes+4" title="Permanent link">4</a><signature id="LX.stringify_to_bytes+4">

```lx
LX.stringify_to_bytes(root : Any, max_size : Any, spaces : Any, with_root : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="write(contents : Any, path : Any)"></endpoint>
<h4 class="signature_head">LX.write</h4><a class="signature-arity" href="#LX.write+2" title="Permanent link">2</a><signature id="LX.write+2">

```lx
LX.write(contents : Any, path : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="write(contents : Any, path : Any, spaces : Any)"></endpoint>
<h4 class="signature_head">LX.write</h4><a class="signature-arity" href="#LX.write+3" title="Permanent link">3</a><signature id="LX.write+3">

```lx
LX.write(contents : Any, path : Any, spaces : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="write(contents : Any, path : Any, spaces : Any, with_root : Any)"></endpoint>
<h4 class="signature_head">LX.write</h4><a class="signature-arity" href="#LX.write+4" title="Permanent link">4</a><signature id="LX.write+4">

```lx
LX.write(contents : Any, path : Any, spaces : Any, with_root : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="stringify_to_file(root : Any, path : Any)"></endpoint>
<h4 class="signature_head">LX.stringify_to_file</h4><a class="signature-arity" href="#LX.stringify_to_file+2" title="Permanent link">2</a><signature id="LX.stringify_to_file+2">

```lx
LX.stringify_to_file(root : Any, path : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="stringify_to_file(root : Any, path : Any, spaces : Any, with_root : Any)"></endpoint>
<h4 class="signature_head">LX.stringify_to_file</h4><a class="signature-arity" href="#LX.stringify_to_file+4" title="Permanent link">4</a><signature id="LX.stringify_to_file+4">

```lx
LX.stringify_to_file(root : Any, path : Any, spaces : Any, with_root : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="flatten(lx : Any)"></endpoint>
<h4 class="signature_head">LX.flatten</h4><a class="signature-arity" href="#LX.flatten" title="Permanent link">1</a><signature id="LX.flatten">

```lx
LX.flatten(lx : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="flatten(lx : Any, delimiter : Any)"></endpoint>
<h4 class="signature_head">LX.flatten</h4><a class="signature-arity" href="#LX.flatten+2" title="Permanent link">2</a><signature id="LX.flatten+2">

```lx
LX.flatten(lx : Any, delimiter : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LX" signature="unflatten(lx : Any)"></endpoint>
<h4 class="signature_head">LX.unflatten</h4><a class="signature-arity" href="#LX.unflatten" title="Permanent link">1</a><signature id="LX.unflatten">

```lx
LX.unflatten(lx : Any) : unknown
```
</signature>

> no docs found   


### LXMerge
`import "luxe: lx" for LXMerge{:lx}`
> no docs found

- [merge_map](#LXMerge.merge_map+2)(**from_map**: `Map{:lx}`, **to_map**: `Map{:lx}`)
- [merge_list](#LXMerge.merge_list+2)(**from_list**: `List{:lx}`, **to_list**: `List{:lx}`)
- [merge](#LXMerge.merge+2)(**from**: `Any{:lx}`, **to**: `Any{:lx}`)


---

<endpoint module="luxe: lx" class="LXMerge" signature="merge_map(from_map : Map, to_map : Map)"></endpoint>
<h4 class="signature_head">LXMerge.merge_map</h4><a class="signature-arity" href="#LXMerge.merge_map+2" title="Permanent link">2</a><signature id="LXMerge.merge_map+2">

```lx
LXMerge.merge_map(from_map : Map, to_map : Map) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LXMerge" signature="merge_list(from_list : List, to_list : List)"></endpoint>
<h4 class="signature_head">LXMerge.merge_list</h4><a class="signature-arity" href="#LXMerge.merge_list+2" title="Permanent link">2</a><signature id="LXMerge.merge_list+2">

```lx
LXMerge.merge_list(from_list : List, to_list : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: lx" class="LXMerge" signature="merge(from : Any, to : Any)"></endpoint>
<h4 class="signature_head">LXMerge.merge</h4><a class="signature-arity" href="#LXMerge.merge+2" title="Permanent link">2</a><signature id="LXMerge.merge+2">

```lx
LXMerge.merge(from : Any, to : Any) : unknown
```
</signature>

> no docs found   

