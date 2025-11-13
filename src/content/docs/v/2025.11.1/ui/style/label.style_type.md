---
title: "luxe: ui/style/label.style_type"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/style/label.style_type"
---
- [Data](#data)   
- [LabelColors](#labelcolors)   
- [Scroll](#scroll)   
- [UIOverflowScroll](#uioverflowscroll)   
- [UITextWrapMode](#uitextwrapmode)   

---


## Data
```lx
import "luxe: ui/style/label.style_type" for Data
```
> no docs found

### Variables
```lx
var style : Asset = null
var size : Num = 14
var colors : LabelColors = Object
var font : Asset = "luxe: font/lato"
var scroll : Scroll = Object
var wrap : UITextWrapMode = UITextWrapMode.none
var outline : Object = Object
var shadow : Object = Object
```

## LabelColors
```lx
import "luxe: ui/style/label.style_type" for LabelColors
```
> no docs found

### Variables
```lx
var normal : Color = [1, 1, 1, 1]
var hover : Color = [1, 0, 0.487, 1]
var select : Color = [1, 1, 1, 0.15]
```

## Scroll
```lx
import "luxe: ui/style/label.style_type" for Scroll
```
> no docs found

### Variables
```lx
var mode : UIOverflowScroll = UIOverflowScroll.none
var speed : Num = 16
var wait : Num = 2
var pause : Num = 2
```

## UIOverflowScroll
```lx
import "luxe: ui/style/label.style_type" for UIOverflowScroll
```
> no docs found

<endpoint module="luxe: ui/style/label.style_type" class="UIOverflowScroll" signature="none"></endpoint>
### UIOverflowScroll.none
```lx
UIOverflowScroll.none : unknown
```
> no docs found   

<endpoint module="luxe: ui/style/label.style_type" class="UIOverflowScroll" signature="always"></endpoint>
### UIOverflowScroll.always
```lx
UIOverflowScroll.always : unknown
```
> no docs found   

<endpoint module="luxe: ui/style/label.style_type" class="UIOverflowScroll" signature="width_overflow"></endpoint>
### UIOverflowScroll.width_overflow
```lx
UIOverflowScroll.width_overflow : unknown
```
> no docs found   


## UITextWrapMode
```lx
import "luxe: ui/style/label.style_type" for UITextWrapMode
```
> no docs found

<endpoint module="luxe: ui/style/label.style_type" class="UITextWrapMode" signature="unknown"></endpoint>
### UITextWrapMode.unknown
```lx
UITextWrapMode.unknown : unknown
```
> no docs found   

<endpoint module="luxe: ui/style/label.style_type" class="UITextWrapMode" signature="none"></endpoint>
### UITextWrapMode.none
```lx
UITextWrapMode.none : unknown
```
> no docs found   

<endpoint module="luxe: ui/style/label.style_type" class="UITextWrapMode" signature="word"></endpoint>
### UITextWrapMode.word
```lx
UITextWrapMode.word : unknown
```
> no docs found   

