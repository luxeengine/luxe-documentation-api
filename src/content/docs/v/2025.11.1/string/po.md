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
```wren
import "luxe: string/po" for PO
```
> no docs found

<endpoint module="luxe: string/po" class="PO" signature="parse_header(lines : List)"></endpoint>
### PO.parse_header(.)
```wren
PO.parse_header(lines : List) : Result
```
> no docs found   

<endpoint module="luxe: string/po" class="PO" signature="parse_elements(lines : List)"></endpoint>
### PO.parse_elements(.)
```wren
PO.parse_elements(lines : List) : List
```
> converts the lines into chunks separated by lines   

<endpoint module="luxe: string/po" class="PO" signature="parse(asset_id : String, bytes : String)"></endpoint>
### PO.parse(..)
```wren
PO.parse(asset_id : String, bytes : String) : Result
```
> no docs found   


## POData
```wren
import "luxe: string/po" for POData
```
> no docs found

<endpoint module="luxe: string/po" class="POData" signature="language"></endpoint>
### POData.language
```wren
POData.language : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="headers"></endpoint>
### POData.headers
```wren
POData.headers : Map
```
> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="elements"></endpoint>
### POData.elements
```wren
POData.elements : Map
```
> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="new(asset_id : String, language : String, headers : Map)"></endpoint>
### POData.new(...)
```wren
POData.new(asset_id : String, language : String, headers : Map) : POData
```
> no docs found   

<endpoint module="luxe: string/po" class="POData" signature="to_string()"></endpoint>
### POData.to_string(.)
```wren
POData.to_string() : unknown
```
> no docs found   


## POElement
```wren
import "luxe: string/po" for POElement
```
> An element inside the PO file

<endpoint module="luxe: string/po" class="POElement" signature="id"></endpoint>
### POElement.id
```wren
POElement.id : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="key"></endpoint>
### POElement.key
```wren
POElement.key : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="file_index"></endpoint>
### POElement.file_index
```wren
POElement.file_index : Num
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="plural_id"></endpoint>
### POElement.plural_id
```wren
POElement.plural_id : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="comments"></endpoint>
### POElement.comments
```wren
POElement.comments : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="is_plural"></endpoint>
### POElement.is_plural
```wren
POElement.is_plural : Bool
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="strings"></endpoint>
### POElement.strings
```wren
POElement.strings : List
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="new(file_index : Num, key : String, plural_id : String, id : String, strings : List, comments : List)"></endpoint>
### POElement.new(......)
```wren
POElement.new(file_index : Num, key : String, plural_id : String, id : String, strings : List, comments : List) : POElement
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="update_id(id : String)"></endpoint>
### POElement.update_id(.)
```wren
POElement.update_id(id : String) : unknown
```
> no docs found   

<endpoint module="luxe: string/po" class="POElement" signature="update_comments(comments : List)"></endpoint>
### POElement.update_comments(.)
```wren
POElement.update_comments(comments : List) : unknown
```
> no docs found   


## POHeader
```wren
import "luxe: string/po" for POHeader
```
> a single header line

<endpoint module="luxe: string/po" class="POHeader" signature="key"></endpoint>
### POHeader.key
```wren
POHeader.key : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="value"></endpoint>
### POHeader.value
```wren
POHeader.value : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="file_index"></endpoint>
### POHeader.file_index
```wren
POHeader.file_index : Num
```
> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="new(file_index : Num, key : String, value : String)"></endpoint>
### POHeader.new(...)
```wren
POHeader.new(file_index : Num, key : String, value : String) : POHeader
```
> no docs found   

<endpoint module="luxe: string/po" class="POHeader" signature="update_value(value : String)"></endpoint>
### POHeader.update_value(.)
```wren
POHeader.update_value(value : String) : unknown
```
> no docs found   


## POString
```wren
import "luxe: string/po" for POString
```
> a single msgstr, with an optional [index]

<endpoint module="luxe: string/po" class="POString" signature="value"></endpoint>
### POString.value
```wren
POString.value : String
```
> no docs found   

<endpoint module="luxe: string/po" class="POString" signature="index"></endpoint>
### POString.index
```wren
POString.index : Num
```
> no docs found   

<endpoint module="luxe: string/po" class="POString" signature="new(value : String, index : Num)"></endpoint>
### POString.new(..)
```wren
POString.new(value : String, index : Num) : POString
```
> no docs found   

