---
title: "luxe: string/po"
description: API version 2025.11.1
---
## `luxe: string/po{:lx}` module

- [PO](#po)   
- [POData](#podata)   
- [POElement](#poelement)   
- [POHeader](#poheader)   
- [POString](#postring)   

---


### PO
`import "luxe: string/po" for PO{:lx}`
> no docs found

- [parse_header](#PO.parse_header)(**lines**: `List{:lx}`)
- [parse_elements](#PO.parse_elements)(**lines**: `List{:lx}`)
- [parse](#PO.parse+2)(**asset_id**: `String{:lx}`, **bytes**: `String{:lx}`)


---

<endpoint module="luxe: string/po" class="PO" signature="parse_header(lines : List)"></endpoint>
<h4 class="signature_head">PO.parse_header</h4><a class="signature-arity" href="#PO.parse_header" title="Permanent link">1</a><signature id="PO.parse_header">

```lx
PO.parse_header(lines : List) : Result
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="PO" signature="parse_elements(lines : List)"></endpoint>
<h4 class="signature_head">PO.parse_elements</h4><a class="signature-arity" href="#PO.parse_elements" title="Permanent link">1</a><signature id="PO.parse_elements">

```lx
PO.parse_elements(lines : List) : List
```
</signature>

> converts the lines into chunks separated by lines   

<endpoint module="luxe: string/po" class="PO" signature="parse(asset_id : String, bytes : String)"></endpoint>
<h4 class="signature_head">PO.parse</h4><a class="signature-arity" href="#PO.parse+2" title="Permanent link">2</a><signature id="PO.parse+2">

```lx
PO.parse(asset_id : String, bytes : String) : Result
```
</signature>

> no docs found   


### POData
`import "luxe: string/po" for POData{:lx}`
> no docs found

- [language](#POData.language)
- [headers](#POData.headers)
- [elements](#POData.elements)
- [new](#POData.new+3)(**asset_id**: `String{:lx}`, **language**: `String{:lx}`, **headers**: `Map{:lx}`)
- [to_string](#POData.to_string)()


---

<endpoint module="luxe: string/po" class="POData" signature="language"></endpoint>
<h4 class="signature_head">POData.language</h4><a class="signature-arity" href="#POData.language" title="Permanent link">1</a><signature id="POData.language">

```lx
POData.language : String
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="headers"></endpoint>
<h4 class="signature_head">POData.headers</h4><a class="signature-arity" href="#POData.headers" title="Permanent link">1</a><signature id="POData.headers">

```lx
POData.headers : Map
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="elements"></endpoint>
<h4 class="signature_head">POData.elements</h4><a class="signature-arity" href="#POData.elements" title="Permanent link">1</a><signature id="POData.elements">

```lx
POData.elements : Map
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="new(asset_id : String, language : String, headers : Map)"></endpoint>
<h4 class="signature_head">POData.new</h4><a class="signature-arity" href="#POData.new+3" title="Permanent link">3</a><signature id="POData.new+3">

```lx
POData.new(asset_id : String, language : String, headers : Map) : POData
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="to_string()"></endpoint>
<h4 class="signature_head">POData.to_string</h4><a class="signature-arity" href="#POData.to_string" title="Permanent link">1</a><signature id="POData.to_string">

```lx
POData.to_string() : unknown
```
</signature>

> no docs found   


### POElement
`import "luxe: string/po" for POElement{:lx}`
> An element inside the PO file

- [id](#POElement.id)
- [key](#POElement.key)
- [file_index](#POElement.file_index)
- [plural_id](#POElement.plural_id)
- [comments](#POElement.comments)
- [is_plural](#POElement.is_plural)
- [strings](#POElement.strings)
- [new](#POElement.new+6)(**file_index**: `Num{:lx}`, **key**: `String{:lx}`, **plural_id**: `String{:lx}`, **id**: `String{:lx}`, **strings**: `List{:lx}`, **comments**: `List{:lx}`)
- [update_id](#POElement.update_id)(**id**: `String{:lx}`)
- [update_comments](#POElement.update_comments)(**comments**: `List{:lx}`)


---

<endpoint module="luxe: string/po" class="POElement" signature="id"></endpoint>
<h4 class="signature_head">POElement.id</h4><a class="signature-arity" href="#POElement.id" title="Permanent link">1</a><signature id="POElement.id">

```lx
POElement.id : String
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="key"></endpoint>
<h4 class="signature_head">POElement.key</h4><a class="signature-arity" href="#POElement.key" title="Permanent link">1</a><signature id="POElement.key">

```lx
POElement.key : String
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="file_index"></endpoint>
<h4 class="signature_head">POElement.file_index</h4><a class="signature-arity" href="#POElement.file_index" title="Permanent link">1</a><signature id="POElement.file_index">

```lx
POElement.file_index : Num
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="plural_id"></endpoint>
<h4 class="signature_head">POElement.plural_id</h4><a class="signature-arity" href="#POElement.plural_id" title="Permanent link">1</a><signature id="POElement.plural_id">

```lx
POElement.plural_id : String
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="comments"></endpoint>
<h4 class="signature_head">POElement.comments</h4><a class="signature-arity" href="#POElement.comments" title="Permanent link">1</a><signature id="POElement.comments">

```lx
POElement.comments : String
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="is_plural"></endpoint>
<h4 class="signature_head">POElement.is_plural</h4><a class="signature-arity" href="#POElement.is_plural" title="Permanent link">1</a><signature id="POElement.is_plural">

```lx
POElement.is_plural : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="strings"></endpoint>
<h4 class="signature_head">POElement.strings</h4><a class="signature-arity" href="#POElement.strings" title="Permanent link">1</a><signature id="POElement.strings">

```lx
POElement.strings : List
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="new(file_index : Num, key : String, plural_id : String, id : String, strings : List, comments : List)"></endpoint>
<h4 class="signature_head">POElement.new</h4><a class="signature-arity" href="#POElement.new+6" title="Permanent link">6</a><signature id="POElement.new+6">

```lx
POElement.new(file_index : Num, key : String, plural_id : String, id : String, strings : List, comments : List) : POElement
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="update_id(id : String)"></endpoint>
<h4 class="signature_head">POElement.update_id</h4><a class="signature-arity" href="#POElement.update_id" title="Permanent link">1</a><signature id="POElement.update_id">

```lx
POElement.update_id(id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="update_comments(comments : List)"></endpoint>
<h4 class="signature_head">POElement.update_comments</h4><a class="signature-arity" href="#POElement.update_comments" title="Permanent link">1</a><signature id="POElement.update_comments">

```lx
POElement.update_comments(comments : List) : unknown
```
</signature>

> no docs found   


### POHeader
`import "luxe: string/po" for POHeader{:lx}`
> a single header line

- [key](#POHeader.key)
- [value](#POHeader.value)
- [file_index](#POHeader.file_index)
- [new](#POHeader.new+3)(**file_index**: `Num{:lx}`, **key**: `String{:lx}`, **value**: `String{:lx}`)
- [update_value](#POHeader.update_value)(**value**: `String{:lx}`)


---

<endpoint module="luxe: string/po" class="POHeader" signature="key"></endpoint>
<h4 class="signature_head">POHeader.key</h4><a class="signature-arity" href="#POHeader.key" title="Permanent link">1</a><signature id="POHeader.key">

```lx
POHeader.key : String
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="value"></endpoint>
<h4 class="signature_head">POHeader.value</h4><a class="signature-arity" href="#POHeader.value" title="Permanent link">1</a><signature id="POHeader.value">

```lx
POHeader.value : String
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="file_index"></endpoint>
<h4 class="signature_head">POHeader.file_index</h4><a class="signature-arity" href="#POHeader.file_index" title="Permanent link">1</a><signature id="POHeader.file_index">

```lx
POHeader.file_index : Num
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="new(file_index : Num, key : String, value : String)"></endpoint>
<h4 class="signature_head">POHeader.new</h4><a class="signature-arity" href="#POHeader.new+3" title="Permanent link">3</a><signature id="POHeader.new+3">

```lx
POHeader.new(file_index : Num, key : String, value : String) : POHeader
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="update_value(value : String)"></endpoint>
<h4 class="signature_head">POHeader.update_value</h4><a class="signature-arity" href="#POHeader.update_value" title="Permanent link">1</a><signature id="POHeader.update_value">

```lx
POHeader.update_value(value : String) : unknown
```
</signature>

> no docs found   


### POString
`import "luxe: string/po" for POString{:lx}`
> a single msgstr, with an optional [index]

- [value](#POString.value)
- [index](#POString.index)
- [new](#POString.new+2)(**value**: `String{:lx}`, **index**: `Num{:lx}`)


---

<endpoint module="luxe: string/po" class="POString" signature="value"></endpoint>
<h4 class="signature_head">POString.value</h4><a class="signature-arity" href="#POString.value" title="Permanent link">1</a><signature id="POString.value">

```lx
POString.value : String
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POString" signature="index"></endpoint>
<h4 class="signature_head">POString.index</h4><a class="signature-arity" href="#POString.index" title="Permanent link">1</a><signature id="POString.index">

```lx
POString.index : Num
```
</signature>

> no docs found   

<endpoint module="luxe: string/po" class="POString" signature="new(value : String, index : Num)"></endpoint>
<h4 class="signature_head">POString.new</h4><a class="signature-arity" href="#POString.new+2" title="Permanent link">2</a><signature id="POString.new+2">

```lx
POString.new(value : String, index : Num) : POString
```
</signature>

> no docs found   

