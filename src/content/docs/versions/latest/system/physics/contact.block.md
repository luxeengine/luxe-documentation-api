---
title: "luxe: system/physics/contact.block"
description: API version 2025.11.1
---
## `luxe: system/physics/contact.block{:lx}` module

- [Contact](#contact)   
- [ContactHelper](#contacthelper)   
- [ContactKind](#contactkind)   

---


### Contact
`import "luxe: system/physics/contact.block" for Contact{:lx}`
> no docs found

- `var kind : ContactKind = ContactKind.none{:lx}`
- `var body : Num = 0{:lx}`
- `var collider : Num = 0{:lx}`
- `var contacts : List = []{:lx}`
- `var other_body : Num = 0{:lx}`
- `var other_collider : Num = 0{:lx}`
- `var other_contacts : List = []{:lx}`
- `var normal : Float3 = [0, 0, 0]{:lx}`
- `var overlap : Num = 0{:lx}`


---


### ContactHelper
`import "luxe: system/physics/contact.block" for ContactHelper{:lx}`
> no docs found

- [get_other](#ContactHelper.get_other+2)(**body**: `Entity{:lx}`, **contact**: `Contact{:lx}`)
- [get_other_collider](#ContactHelper.get_other_collider+2)(**collider**: `Entity{:lx}`, **contact**: `Contact{:lx}`)


---

<endpoint module="luxe: system/physics/contact.block" class="ContactHelper" signature="get_other(body : Entity, contact : Contact)"></endpoint>
<h4 class="signature_head">ContactHelper.get_other</h4><a class="signature-arity" href="#ContactHelper.get_other+2" title="Permanent link">2</a><signature id="ContactHelper.get_other+2">

```lx
ContactHelper.get_other(body : Entity, contact : Contact) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/contact.block" class="ContactHelper" signature="get_other_collider(collider : Entity, contact : Contact)"></endpoint>
<h4 class="signature_head">ContactHelper.get_other_collider</h4><a class="signature-arity" href="#ContactHelper.get_other_collider+2" title="Permanent link">2</a><signature id="ContactHelper.get_other_collider+2">

```lx
ContactHelper.get_other_collider(collider : Entity, contact : Contact) : unknown
```
</signature>

> no docs found   


### ContactKind
`import "luxe: system/physics/contact.block" for ContactKind{:lx}`
> no docs found

- [none](#ContactKind.none)
- [begin](#ContactKind.begin)
- [end](#ContactKind.end)
- [active](#ContactKind.active)


---

<endpoint module="luxe: system/physics/contact.block" class="ContactKind" signature="none"></endpoint>
<h4 class="signature_head">ContactKind.none</h4><a class="signature-arity" href="#ContactKind.none" title="Permanent link">1</a><signature id="ContactKind.none">

```lx
ContactKind.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/contact.block" class="ContactKind" signature="begin"></endpoint>
<h4 class="signature_head">ContactKind.begin</h4><a class="signature-arity" href="#ContactKind.begin" title="Permanent link">1</a><signature id="ContactKind.begin">

```lx
ContactKind.begin : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/contact.block" class="ContactKind" signature="end"></endpoint>
<h4 class="signature_head">ContactKind.end</h4><a class="signature-arity" href="#ContactKind.end" title="Permanent link">1</a><signature id="ContactKind.end">

```lx
ContactKind.end : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/contact.block" class="ContactKind" signature="active"></endpoint>
<h4 class="signature_head">ContactKind.active</h4><a class="signature-arity" href="#ContactKind.active" title="Permanent link">1</a><signature id="ContactKind.active">

```lx
ContactKind.active : unknown
```
</signature>

> no docs found   

