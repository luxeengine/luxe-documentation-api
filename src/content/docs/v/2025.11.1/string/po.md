---
title: "luxe: string/po"
description: API version 2025.11.1
slug: "v/2025.11.1/string/po"
---
- [PO](#po)   
- [POData](#podata)   
- [POElement](#poelement)   
- [POHeader](#poheader)   
- [POString](#postring)   

---


## PO
```lx
import "luxe: string/po" for PO
```
> no docs found

<endpoint module="luxe: string/po" class="PO" signature="parse_header(lines : List)"></endpoint>
### PO.parse_header(.)
```lx
PO.parse_header(lines : List) : Result
```
> no docs found   

<endpoint module="luxe: string/po" class="PO" signature="parse_elements(lines : List)"></endpoint>
### PO.parse_elements(.)
```lx
PO.parse_elements(lines : List) : List
```
> converts the lines into chunks separated by lines   

<endpoint module="luxe: string/po" class="PO" signature="parse(asset_id : String, bytes : String)"></endpoint>
### PO.parse(..)
```lx
PO.parse(asset_id : String, bytes : String) : Result
```
> no docs found   


## POData
```lx
import "luxe: string/po" for POData
```
> no docs found

<endpoint module="luxe: string/po" class="POData" signature="language"></endpoint>
### POData.language
```lx
POData.language : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="headers"></endpoint>
### POData.headers
```lx
POData.headers : Map
```
> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="elements"></endpoint>
### POData.elements
```lx
POData.elements : Map
```
> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="new(asset_id : String, language : String, headers : Map)"></endpoint>
### POData.new(...)
```lx
POData.new(asset_id : String, language : String, headers : Map) : POData
```
> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="to_string()"></endpoint>
### POData.to_string(.)
```lx
POData.to_string() : unknown
```
> no docs found   


## POElement
```lx
import "luxe: string/po" for POElement
```
> An element inside the PO file

<endpoint module="luxe: string/po" class="POElement" signature="id"></endpoint>
### POElement.id
```lx
POElement.id : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="key"></endpoint>
### POElement.key
```lx
POElement.key : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="file_index"></endpoint>
### POElement.file_index
```lx
POElement.file_index : Num
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="plural_id"></endpoint>
### POElement.plural_id
```lx
POElement.plural_id : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="comments"></endpoint>
### POElement.comments
```lx
POElement.comments : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="is_plural"></endpoint>
### POElement.is_plural
```lx
POElement.is_plural : Bool
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="strings"></endpoint>
### POElement.strings
```lx
POElement.strings : List
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="new(file_index : Num, key : String, plural_id : String, id : String, strings : List, comments : List)"></endpoint>
### POElement.new(......)
```lx
POElement.new(file_index : Num, key : String, plural_id : String, id : String, strings : List, comments : List) : POElement
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="update_id(id : String)"></endpoint>
### POElement.update_id(.)
```lx
POElement.update_id(id : String) : unknown
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="update_comments(comments : List)"></endpoint>
### POElement.update_comments(.)
```lx
POElement.update_comments(comments : List) : unknown
```
> no docs found   


## POHeader
```lx
import "luxe: string/po" for POHeader
```
> a single header line

<endpoint module="luxe: string/po" class="POHeader" signature="key"></endpoint>
### POHeader.key
```lx
POHeader.key : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="value"></endpoint>
### POHeader.value
```lx
POHeader.value : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="file_index"></endpoint>
### POHeader.file_index
```lx
POHeader.file_index : Num
```
> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="new(file_index : Num, key : String, value : String)"></endpoint>
### POHeader.new(...)
```lx
POHeader.new(file_index : Num, key : String, value : String) : POHeader
```
> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="update_value(value : String)"></endpoint>
### POHeader.update_value(.)
```lx
POHeader.update_value(value : String) : unknown
```
> no docs found   


## POString
```lx
import "luxe: string/po" for POString
```
> a single msgstr, with an optional [index]

<endpoint module="luxe: string/po" class="POString" signature="value"></endpoint>
### POString.value
```lx
POString.value : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POString" signature="index"></endpoint>
### POString.index
```lx
POString.index : Num
```
> no docs found   

<endpoint module="luxe: string/po" class="POString" signature="new(value : String, index : Num)"></endpoint>
### POString.new(..)
```lx
POString.new(value : String, index : Num) : POString
```
> no docs found   

