---
title: "luxe: system/physics/contact.block"
description: API version 2025.11.1
slug: "v/2025.11.1/system/physics/contact.block"
---
- [Contact](#contact)   
- [ContactHelper](#contacthelper)   
- [ContactKind](#contactkind)   

---


## Contact
```lx
import "luxe: system/physics/contact.block" for Contact
```
> no docs found

### Variables
```lx
var kind : ContactKind = ContactKind.none
var body : Num = 0
var collider : Num = 0
var contacts : List = []
var other_body : Num = 0
var other_collider : Num = 0
var other_contacts : List = []
var normal : Float3 = [0, 0, 0]
var overlap : Num = 0
```

## ContactHelper
```lx
import "luxe: system/physics/contact.block" for ContactHelper
```
> no docs found

<endpoint module="luxe: system/physics/contact.block" class="ContactHelper" signature="get_other(body : Entity, contact : Contact)"></endpoint>
### ContactHelper.get_other(..)
```lx
ContactHelper.get_other(body : Entity, contact : Contact) : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/contact.block" class="ContactHelper" signature="get_other_collider(collider : Entity, contact : Contact)"></endpoint>
### ContactHelper.get_other_collider(..)
```lx
ContactHelper.get_other_collider(collider : Entity, contact : Contact) : unknown
```
> no docs found   


## ContactKind
```lx
import "luxe: system/physics/contact.block" for ContactKind
```
> no docs found

<endpoint module="luxe: system/physics/contact.block" class="ContactKind" signature="none"></endpoint>
### ContactKind.none
```lx
ContactKind.none : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/contact.block" class="ContactKind" signature="begin"></endpoint>
### ContactKind.begin
```lx
ContactKind.begin : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/contact.block" class="ContactKind" signature="end"></endpoint>
### ContactKind.end
```lx
ContactKind.end : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/contact.block" class="ContactKind" signature="active"></endpoint>
### ContactKind.active
```lx
ContactKind.active : unknown
```
> no docs found   

