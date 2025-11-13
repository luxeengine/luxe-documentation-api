---
title: "luxe: ui/list_filtered"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/list_filtered"
---
- [State](#state)   
- [UIListFiltered](#uilistfiltered)   
- [UIListFilteredItem](#uilistfiltereditem)   

---


## State
```wren
import "luxe: ui/list_filtered" for State
```
> no docs found

<endpoint module="luxe: ui/list_filtered" class="State" signature="list"></endpoint>
### State.list
```wren
State.list : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="set_filter_sizes(height : Num, text_size : Num)"></endpoint>
### State.set_filter_sizes(..)
```wren
State.set_filter_sizes(height : Num, text_size : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="set_filter_string(text : String)"></endpoint>
### State.set_filter_string(.)
```wren
State.set_filter_string(text : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="add(control : Any, keywords : Any)"></endpoint>
### State.add(..)
```wren
State.add(control : Any, keywords : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="remove(control : Any)"></endpoint>
### State.remove(.)
```wren
State.remove(control : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="clear(uiclear_action : Any)"></endpoint>
### State.clear(.)
```wren
State.clear(uiclear_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="refresh()"></endpoint>
### State.refresh(.)
```wren
State.refresh() : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="focus()"></endpoint>
### State.focus(.)
```wren
State.focus() : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="placeholder=(v : Any)"></endpoint>
### State.placeholder
```wren
State.placeholder=(v : Any) : String
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="placeholder"></endpoint>
### State.placeholder
```wren
State.placeholder : String
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="events"></endpoint>
### State.events
```wren
State.events : Events
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="new(ui : Any, control : Any)"></endpoint>
### State.new(..)
```wren
State.new(ui : Any, control : Any) : State
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="has_filter"></endpoint>
### State.has_filter
```wren
State.has_filter : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="get_filter()"></endpoint>
### State.get_filter(.)
```wren
State.get_filter() : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="force_filter(text : Any, focus : Any)"></endpoint>
### State.force_filter(..)
```wren
State.force_filter(text : Any, focus : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="cancel_filter()"></endpoint>
### State.cancel_filter(.)
```wren
State.cancel_filter() : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="filter(filter : String)"></endpoint>
### State.filter(.)
```wren
State.filter(filter : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="State" signature="filter_and_sort(items : List, filter : String)"></endpoint>
### State.filter_and_sort(..)
```wren
State.filter_and_sort(items : List, filter : String) : unknown
```
> no docs found   


## UIListFiltered
```wren
import "luxe: ui/list_filtered" for UIListFiltered
```
> no docs found

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="MATCH"></endpoint>
### UIListFiltered.MATCH
```wren
UIListFiltered.MATCH : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="create(ui : Any)"></endpoint>
### UIListFiltered.create(.)
```wren
UIListFiltered.create(ui : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_bounds(list : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### UIListFiltered.set_bounds(.....)
```wren
UIListFiltered.set_bounds(list : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_size(list : Any, w : Any, h : Any)"></endpoint>
### UIListFiltered.set_size(...)
```wren
UIListFiltered.set_size(list : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_filter_sizes(list : Any, height : Num, text_size : Num)"></endpoint>
### UIListFiltered.set_filter_sizes(...)
```wren
UIListFiltered.set_filter_sizes(list : Any, height : Num, text_size : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="on_filter(list : Control, fn : Fn)"></endpoint>
### UIListFiltered.on_filter(..)
```wren
UIListFiltered.on_filter(list : Control, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="get_placeholder(list : Any, text : Any)"></endpoint>
### UIListFiltered.get_placeholder(..)
```wren
UIListFiltered.get_placeholder(list : Any, text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_placeholder(list : Any, text : Any)"></endpoint>
### UIListFiltered.set_placeholder(..)
```wren
UIListFiltered.set_placeholder(list : Any, text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_filter(list : Any, fn : Any)"></endpoint>
### UIListFiltered.set_filter(..)
```wren
UIListFiltered.set_filter(list : Any, fn : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="get_filter(list : Any)"></endpoint>
### UIListFiltered.get_filter(.)
```wren
UIListFiltered.get_filter(list : Any) : String
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="set_filter_string(list : Any, text : String)"></endpoint>
### UIListFiltered.set_filter_string(..)
```wren
UIListFiltered.set_filter_string(list : Any, text : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="get_list_view(list : Any)"></endpoint>
### UIListFiltered.get_list_view(.)
```wren
UIListFiltered.get_list_view(list : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="add(list : Any, control : Any, keywords : Any)"></endpoint>
### UIListFiltered.add(...)
```wren
UIListFiltered.add(list : Any, control : Any, keywords : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="remove(list : Any, control : Any)"></endpoint>
### UIListFiltered.remove(..)
```wren
UIListFiltered.remove(list : Any, control : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="clear(list : Any, uiclear_action : Any)"></endpoint>
### UIListFiltered.clear(..)
```wren
UIListFiltered.clear(list : Any, uiclear_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="refresh(list : Any)"></endpoint>
### UIListFiltered.refresh(.)
```wren
UIListFiltered.refresh(list : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFiltered" signature="focus(list : Any)"></endpoint>
### UIListFiltered.focus(.)
```wren
UIListFiltered.focus(list : Any) : unknown
```
> no docs found   


## UIListFilteredItem
```wren
import "luxe: ui/list_filtered" for UIListFilteredItem
```
> no docs found

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="control"></endpoint>
### UIListFilteredItem.control
```wren
UIListFilteredItem.control : Control
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="keywords"></endpoint>
### UIListFilteredItem.keywords
```wren
UIListFilteredItem.keywords : List
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="result"></endpoint>
### UIListFilteredItem.result
```wren
UIListFilteredItem.result : FuzzyResult
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="result=(v : FuzzyResult)"></endpoint>
### UIListFilteredItem.result
```wren
UIListFilteredItem.result=(v : FuzzyResult) : FuzzyResult
```
> no docs found   

<endpoint module="luxe: ui/list_filtered" class="UIListFilteredItem" signature="new(control : Control, keywords : List)"></endpoint>
### UIListFilteredItem.new(..)
```wren
UIListFilteredItem.new(control : Control, keywords : List) : UIListFilteredItem
```
> no docs found   

