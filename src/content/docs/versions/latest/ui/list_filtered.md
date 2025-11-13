---
title: "luxe: ui/list_filtered"
description: API version 2025.11.1
---
## `luxe: ui/list_filtered{:lx}` module

- [State](#state)   
- [UIListFiltered](#uilistfiltered)   
- [UIListFilteredItem](#uilistfiltereditem)   

---


### State
`import "luxe: ui/list_filtered" for State{:lx}`
> no docs found

- [list](#State.list)
- [set_filter_sizes](#State.set_filter_sizes+2)(**height**: `Num{:lx}`, **text_size**: `Num{:lx}`)
- [set_filter_string](#State.set_filter_string)(**text**: `String{:lx}`)
- [add](#State.add+2)(**control**: `Any{:lx}`, **keywords**: `Any{:lx}`)
- [remove](#State.remove)(**control**: `Any{:lx}`)
- [clear](#State.clear)(**uiclear_action**: `Any{:lx}`)
- [refresh](#State.refresh)()
- [focus](#State.focus)()
- [placeholder](#State.placeholder=)=(v : Any)
- [placeholder](#State.placeholder)
- [events](#State.events)
- [new](#State.new+2)(**ui**: `Any{:lx}`, **control**: `Any{:lx}`)
- [has_filter](#State.has_filter)
- [get_filter](#State.get_filter)()
- [force_filter](#State.force_filter+2)(**text**: `Any{:lx}`, **focus**: `Any{:lx}`)
- [cancel_filter](#State.cancel_filter)()
- [filter](#State.filter)(**filter**: `String{:lx}`)
- [filter_and_sort](#State.filter_and_sort+2)(**items**: `List{:lx}`, **filter**: `String{:lx}`)


---

<endpoint module="luxe: ui/list_filtered" class="State" signature="list"></endpoint>
<h4 class="signature_head">State.list</h4><a class="signature-arity" href="#State.list" title="Permanent link">1</a><signature id="State.list">

```lx
State.list : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="set_filter_sizes(height : Num, text_size : Num)"></endpoint>
<h4 class="signature_head">State.set_filter_sizes</h4><a class="signature-arity" href="#State.set_filter_sizes+2" title="Permanent link">2</a><signature id="State.set_filter_sizes+2">

```lx
State.set_filter_sizes(height : Num, text_size : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="set_filter_string(text : String)"></endpoint>
<h4 class="signature_head">State.set_filter_string</h4><a class="signature-arity" href="#State.set_filter_string" title="Permanent link">1</a><signature id="State.set_filter_string">

```lx
State.set_filter_string(text : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="add(control : Any, keywords : Any)"></endpoint>
<h4 class="signature_head">State.add</h4><a class="signature-arity" href="#State.add+2" title="Permanent link">2</a><signature id="State.add+2">

```lx
State.add(control : Any, keywords : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="remove(control : Any)"></endpoint>
<h4 class="signature_head">State.remove</h4><a class="signature-arity" href="#State.remove" title="Permanent link">1</a><signature id="State.remove">

```lx
State.remove(control : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="clear(uiclear_action : Any)"></endpoint>
<h4 class="signature_head">State.clear</h4><a class="signature-arity" href="#State.clear" title="Permanent link">1</a><signature id="State.clear">

```lx
State.clear(uiclear_action : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="refresh()"></endpoint>
<h4 class="signature_head">State.refresh</h4><a class="signature-arity" href="#State.refresh" title="Permanent link">1</a><signature id="State.refresh">

```lx
State.refresh() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="focus()"></endpoint>
<h4 class="signature_head">State.focus</h4><a class="signature-arity" href="#State.focus" title="Permanent link">1</a><signature id="State.focus">

```lx
State.focus() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="placeholder=(v : Any)"></endpoint>
<h4 class="signature_head">State.placeholder</h4><a class="signature-arity" href="#State.placeholder=" title="Permanent link">1</a><signature id="State.placeholder=">

```lx
State.placeholder=(v : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="placeholder"></endpoint>
<h4 class="signature_head">State.placeholder</h4><a class="signature-arity" href="#State.placeholder" title="Permanent link">1</a><signature id="State.placeholder">

```lx
State.placeholder : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="events"></endpoint>
<h4 class="signature_head">State.events</h4><a class="signature-arity" href="#State.events" title="Permanent link">1</a><signature id="State.events">

```lx
State.events : Events
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="new(ui : Any, control : Any)"></endpoint>
<h4 class="signature_head">State.new</h4><a class="signature-arity" href="#State.new+2" title="Permanent link">2</a><signature id="State.new+2">

```lx
State.new(ui : Any, control : Any) : State
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="has_filter"></endpoint>
<h4 class="signature_head">State.has_filter</h4><a class="signature-arity" href="#State.has_filter" title="Permanent link">1</a><signature id="State.has_filter">

```lx
State.has_filter : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="get_filter()"></endpoint>
<h4 class="signature_head">State.get_filter</h4><a class="signature-arity" href="#State.get_filter" title="Permanent link">1</a><signature id="State.get_filter">

```lx
State.get_filter() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="force_filter(text : Any, focus : Any)"></endpoint>
<h4 class="signature_head">State.force_filter</h4><a class="signature-arity" href="#State.force_filter+2" title="Permanent link">2</a><signature id="State.force_filter+2">

```lx
State.force_filter(text : Any, focus : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="cancel_filter()"></endpoint>
<h4 class="signature_head">State.cancel_filter</h4><a class="signature-arity" href="#State.cancel_filter" title="Permanent link">1</a><signature id="State.cancel_filter">

```lx
State.cancel_filter() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="filter(filter : String)"></endpoint>
<h4 class="signature_head">State.filter</h4><a class="signature-arity" href="#State.filter" title="Permanent link">1</a><signature id="State.filter">

```lx
State.filter(filter : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="filter_and_sort(items : List, filter : String)"></endpoint>
<h4 class="signature_head">State.filter_and_sort</h4><a class="signature-arity" href="#State.filter_and_sort+2" title="Permanent link">2</a><signature id="State.filter_and_sort+2">

```lx
State.filter_and_sort(items : List, filter : String) : unknown
```
</signature>

> no docs found   


### UIListFiltered
`import "luxe: ui/list_filtered" for UIListFiltered{:lx}`
> no docs found

- [MATCH](#UIListFiltered.MATCH)
- [create](#UIListFiltered.create)(**ui**: `Any{:lx}`)
- [set_bounds](#UIListFiltered.set_bounds+5)(**list**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **w**: `Any{:lx}`, **h**: `Any{:lx}`)
- [set_size](#UIListFiltered.set_size+3)(**list**: `Any{:lx}`, **w**: `Any{:lx}`, **h**: `Any{:lx}`)
- [set_filter_sizes](#UIListFiltered.set_filter_sizes+3)(**list**: `Any{:lx}`, **height**: `Num{:lx}`, **text_size**: `Num{:lx}`)
- [on_filter](#UIListFiltered.on_filter+2)(**list**: `Control{:lx}`, **fn**: `Fn{:lx}`)
- [get_placeholder](#UIListFiltered.get_placeholder+2)(**list**: `Any{:lx}`, **text**: `Any{:lx}`)
- [set_placeholder](#UIListFiltered.set_placeholder+2)(**list**: `Any{:lx}`, **text**: `Any{:lx}`)
- [set_filter](#UIListFiltered.set_filter+2)(**list**: `Any{:lx}`, **fn**: `Any{:lx}`)
- [get_filter](#UIListFiltered.get_filter)(**list**: `Any{:lx}`)
- [set_filter_string](#UIListFiltered.set_filter_string+2)(**list**: `Any{:lx}`, **text**: `String{:lx}`)
- [get_list_view](#UIListFiltered.get_list_view)(**list**: `Any{:lx}`)
- [add](#UIListFiltered.add+3)(**list**: `Any{:lx}`, **control**: `Any{:lx}`, **keywords**: `Any{:lx}`)
- [remove](#UIListFiltered.remove+2)(**list**: `Any{:lx}`, **control**: `Any{:lx}`)
- [clear](#UIListFiltered.clear+2)(**list**: `Any{:lx}`, **uiclear_action**: `Any{:lx}`)
- [refresh](#UIListFiltered.refresh)(**list**: `Any{:lx}`)
- [focus](#UIListFiltered.focus)(**list**: `Any{:lx}`)


---

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="MATCH"></endpoint>
<h4 class="signature_head">UIListFiltered.MATCH</h4><a class="signature-arity" href="#UIListFiltered.MATCH" title="Permanent link">1</a><signature id="UIListFiltered.MATCH">

```lx
UIListFiltered.MATCH : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="create(ui : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.create</h4><a class="signature-arity" href="#UIListFiltered.create" title="Permanent link">1</a><signature id="UIListFiltered.create">

```lx
UIListFiltered.create(ui : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_bounds(list : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.set_bounds</h4><a class="signature-arity" href="#UIListFiltered.set_bounds+5" title="Permanent link">5</a><signature id="UIListFiltered.set_bounds+5">

```lx
UIListFiltered.set_bounds(list : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_size(list : Any, w : Any, h : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.set_size</h4><a class="signature-arity" href="#UIListFiltered.set_size+3" title="Permanent link">3</a><signature id="UIListFiltered.set_size+3">

```lx
UIListFiltered.set_size(list : Any, w : Any, h : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_filter_sizes(list : Any, height : Num, text_size : Num)"></endpoint>
<h4 class="signature_head">UIListFiltered.set_filter_sizes</h4><a class="signature-arity" href="#UIListFiltered.set_filter_sizes+3" title="Permanent link">3</a><signature id="UIListFiltered.set_filter_sizes+3">

```lx
UIListFiltered.set_filter_sizes(list : Any, height : Num, text_size : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="on_filter(list : Control, fn : Fn)"></endpoint>
<h4 class="signature_head">UIListFiltered.on_filter</h4><a class="signature-arity" href="#UIListFiltered.on_filter+2" title="Permanent link">2</a><signature id="UIListFiltered.on_filter+2">

```lx
UIListFiltered.on_filter(list : Control, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="get_placeholder(list : Any, text : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.get_placeholder</h4><a class="signature-arity" href="#UIListFiltered.get_placeholder+2" title="Permanent link">2</a><signature id="UIListFiltered.get_placeholder+2">

```lx
UIListFiltered.get_placeholder(list : Any, text : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_placeholder(list : Any, text : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.set_placeholder</h4><a class="signature-arity" href="#UIListFiltered.set_placeholder+2" title="Permanent link">2</a><signature id="UIListFiltered.set_placeholder+2">

```lx
UIListFiltered.set_placeholder(list : Any, text : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_filter(list : Any, fn : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.set_filter</h4><a class="signature-arity" href="#UIListFiltered.set_filter+2" title="Permanent link">2</a><signature id="UIListFiltered.set_filter+2">

```lx
UIListFiltered.set_filter(list : Any, fn : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="get_filter(list : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.get_filter</h4><a class="signature-arity" href="#UIListFiltered.get_filter" title="Permanent link">1</a><signature id="UIListFiltered.get_filter">

```lx
UIListFiltered.get_filter(list : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_filter_string(list : Any, text : String)"></endpoint>
<h4 class="signature_head">UIListFiltered.set_filter_string</h4><a class="signature-arity" href="#UIListFiltered.set_filter_string+2" title="Permanent link">2</a><signature id="UIListFiltered.set_filter_string+2">

```lx
UIListFiltered.set_filter_string(list : Any, text : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="get_list_view(list : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.get_list_view</h4><a class="signature-arity" href="#UIListFiltered.get_list_view" title="Permanent link">1</a><signature id="UIListFiltered.get_list_view">

```lx
UIListFiltered.get_list_view(list : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="add(list : Any, control : Any, keywords : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.add</h4><a class="signature-arity" href="#UIListFiltered.add+3" title="Permanent link">3</a><signature id="UIListFiltered.add+3">

```lx
UIListFiltered.add(list : Any, control : Any, keywords : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="remove(list : Any, control : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.remove</h4><a class="signature-arity" href="#UIListFiltered.remove+2" title="Permanent link">2</a><signature id="UIListFiltered.remove+2">

```lx
UIListFiltered.remove(list : Any, control : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="clear(list : Any, uiclear_action : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.clear</h4><a class="signature-arity" href="#UIListFiltered.clear+2" title="Permanent link">2</a><signature id="UIListFiltered.clear+2">

```lx
UIListFiltered.clear(list : Any, uiclear_action : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="refresh(list : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.refresh</h4><a class="signature-arity" href="#UIListFiltered.refresh" title="Permanent link">1</a><signature id="UIListFiltered.refresh">

```lx
UIListFiltered.refresh(list : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="focus(list : Any)"></endpoint>
<h4 class="signature_head">UIListFiltered.focus</h4><a class="signature-arity" href="#UIListFiltered.focus" title="Permanent link">1</a><signature id="UIListFiltered.focus">

```lx
UIListFiltered.focus(list : Any) : unknown
```
</signature>

> no docs found   


### UIListFilteredItem
`import "luxe: ui/list_filtered" for UIListFilteredItem{:lx}`
> no docs found

- [control](#UIListFilteredItem.control)
- [keywords](#UIListFilteredItem.keywords)
- [result](#UIListFilteredItem.result)
- [result](#UIListFilteredItem.result=)=(v : FuzzyResult)
- [new](#UIListFilteredItem.new+2)(**control**: `Control{:lx}`, **keywords**: `List{:lx}`)


---

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="control"></endpoint>
<h4 class="signature_head">UIListFilteredItem.control</h4><a class="signature-arity" href="#UIListFilteredItem.control" title="Permanent link">1</a><signature id="UIListFilteredItem.control">

```lx
UIListFilteredItem.control : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="keywords"></endpoint>
<h4 class="signature_head">UIListFilteredItem.keywords</h4><a class="signature-arity" href="#UIListFilteredItem.keywords" title="Permanent link">1</a><signature id="UIListFilteredItem.keywords">

```lx
UIListFilteredItem.keywords : List
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="result"></endpoint>
<h4 class="signature_head">UIListFilteredItem.result</h4><a class="signature-arity" href="#UIListFilteredItem.result" title="Permanent link">1</a><signature id="UIListFilteredItem.result">

```lx
UIListFilteredItem.result : FuzzyResult
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="result=(v : FuzzyResult)"></endpoint>
<h4 class="signature_head">UIListFilteredItem.result</h4><a class="signature-arity" href="#UIListFilteredItem.result=" title="Permanent link">1</a><signature id="UIListFilteredItem.result=">

```lx
UIListFilteredItem.result=(v : FuzzyResult) : FuzzyResult
```
</signature>

> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="new(control : Control, keywords : List)"></endpoint>
<h4 class="signature_head">UIListFilteredItem.new</h4><a class="signature-arity" href="#UIListFilteredItem.new+2" title="Permanent link">2</a><signature id="UIListFilteredItem.new+2">

```lx
UIListFilteredItem.new(control : Control, keywords : List) : UIListFilteredItem
```
</signature>

> no docs found   

