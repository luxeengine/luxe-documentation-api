---
title: "luxe: containers"
description: API version 2025.11.1
---
## `luxe: containers{:lx}` module

- [Lists](#lists)   
- [MapOrdered](#mapordered)   

---


### Lists
`import "luxe: containers" for Lists{:lx}`
> The `Lists` API works with the built in Wren `List` type,
> offering more tools to operate on them.

- [first](#Lists.first)(**list**: `Sequence{:lx}`)
- [first](#Lists.first+2)(**list**: `Sequence{:lx}`, **callback**: `Fn{:lx}`)
- [binary_search](#Lists.binary_search+2)(**list**: `List{:lx}`, **value**: `Any{:lx}`)
- [binary_search_first](#Lists.binary_search_first+3)(**list**: `List{:lx}`, **value**: `Any{:lx}`, **fn**: `Fn{:lx}`)
- [equal](#Lists.equal+2)(**a**: `List{:lx}`, **b**: `List{:lx}`)
- [equalish](#Lists.equalish+2)(**a**: `List{:lx}`, **b**: `List{:lx}`)
- [flatten](#Lists.flatten)(**list**: `List{:lx}`)
- [add_unique](#Lists.add_unique+2)(**list**: `List{:lx}`, **value**: `Any{:lx}`)
- [append](#Lists.append+2)(**into**: `List{:lx}`, **list**: `List{:lx}`)
- [prepend](#Lists.prepend+2)(**into**: `List{:lx}`, **list**: `List{:lx}`)
- [remove_where](#Lists.remove_where+3)(**list**: `List{:lx}`, **value**: `Any{:lx}`, **fn**: `Fn{:lx}`)
- [remove_where](#Lists.remove_where+2)(**list**: `List{:lx}`, **fn**: `Fn{:lx}`)
- [contains](#Lists.contains+2)(**list**: `Any{:lx}`, **item**: `Any{:lx}`)
- [remove](#Lists.remove+2)(**list**: `Any{:lx}`, **to_remove**: `Any{:lx}`)
- [index_of](#Lists.index_of+2)(**list**: `Any{:lx}`, **item**: `Any{:lx}`)
- [index_of_where](#Lists.index_of_where+2)(**list**: `List{:lx}`, **fn**: `Fn{:lx}`)
- [index_of_where](#Lists.index_of_where+3)(**list**: `List{:lx}`, **value**: `Any{:lx}`, **fn**: `Fn{:lx}`)
- [bubble_sort](#Lists.bubble_sort+2)(**list**: `List{:lx}`, **compare**: `Fn{:lx}`)
- [quicksort](#Lists.quicksort+2)(**list**: `List{:lx}`, **compare**: `Fn{:lx}`)
- [quicksort](#Lists.quicksort+4)(**list**: `List{:lx}`, **low**: `Num{:lx}`, **high**: `Num{:lx}`, **compare**: `Fn{:lx}`)


---

<endpoint module="luxe: containers" class="Lists" signature="first(list : Sequence)"></endpoint>
<h4 class="signature_head">Lists.first</h4><a class="signature-arity" href="#Lists.first" title="Permanent link">1</a><signature id="Lists.first">

```lx
Lists.first(list : Sequence) : Any
```
</signature>

> Returns the first element of a Sequence, null if the sequence is empty.
> 
> ```js
>   var list = ["twig", 2, null, "tree", "petals", "faeries", 9]
>   Lists.first(list) //"twig"
> ```   

<endpoint module="luxe: containers" class="Lists" signature="first(list : Sequence, callback : Fn)"></endpoint>
<h4 class="signature_head">Lists.first</h4><a class="signature-arity" href="#Lists.first+2" title="Permanent link">2</a><signature id="Lists.first+2">

```lx
Lists.first(list : Sequence, callback : Fn) : Any
```
</signature>

> Searches for the first element in a sequence that fulfills a requirement and returns it.
> If no element fulfills the requirement, null is returned.
> 
> ```js
>   var list = ["twig", 2, null, "tree", "petals", "faeries", 9]
>   Lists.first(list){|elem| elem is String && elem.count > 4} //"petals"
> ```   

<endpoint module="luxe: containers" class="Lists" signature="binary_search(list : List, value : Any)"></endpoint>
<h4 class="signature_head">Lists.binary_search</h4><a class="signature-arity" href="#Lists.binary_search+2" title="Permanent link">2</a><signature id="Lists.binary_search+2">

```lx
Lists.binary_search(list : List, value : Any) : Num
```
</signature>

> Searches for `value` in `list` using a binary search. 
> Binary searches can be more efficient for finding items when there are many.
> This requires the list to be sorted, and values in the list to be comparable with `>`/`<`.
> 
> Returns the index in the list, or `-1` if not found.
> 
>   ```js
>   var to_find = 9
>   var list = [1,3,7,9,23,54]
>   var index = Lists.binary_search(list, to_find) //index is 3
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="binary_search_first(list : List, value : Any, fn : Fn)"></endpoint>
<h4 class="signature_head">Lists.binary_search_first</h4><a class="signature-arity" href="#Lists.binary_search_first+3" title="Permanent link">3</a><signature id="Lists.binary_search_first+3">

```lx
Lists.binary_search_first(list : List, value : Any, fn : Fn) : Num
```
</signature>

> Similar to `binary_search` but handles comparison via a callback.
> The callback should return 0 for equal, -1 for lower and 1 for higher.
> The callback puts the input value in the first argument.
> 
> Returns the index in the list, or `-1` if not found.
> 
>   ```js
>   var list = [1,3,7,9,23,54]
>   var index = Lists.binary_search_first(list, 9) {|value, other|
>     if(value == to_find) return 0
>     if(value < to_find)  return -1
>     return 1
>   }
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="equal(a : List, b : List)"></endpoint>
<h4 class="signature_head">Lists.equal</h4><a class="signature-arity" href="#Lists.equal+2" title="Permanent link">2</a><signature id="Lists.equal+2">

```lx
Lists.equal(a : List, b : List) : Bool
```
</signature>

> Compares two flat lists, returning true if the contents are the same and in the same order.
> Does not recurse nested lists. Uses `a[i] != b[i]` to compare.
> 
>   ```js
>   var listA = [1,9,7]
>   var listB = [1,7,9]
>   var equalA = Lists.equal(listA, [1,7,9]) //false
>   var equalB = Lists.equal(listB, [1,7,9]) //true
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="equalish(a : List, b : List)"></endpoint>
<h4 class="signature_head">Lists.equalish</h4><a class="signature-arity" href="#Lists.equalish+2" title="Permanent link">2</a><signature id="Lists.equalish+2">

```lx
Lists.equalish(a : List, b : List) : Bool
```
</signature>

> Similar to `equal` but values don't need to be in the same order.
> 
>   ```js
>   var listA = [1,9,7]
>   var listB = [1,7,9]
>   var equalA = Lists.equal(listA, [1,7,9]) //true
>   var equalB = Lists.equal(listB, [1,7,9]) //true
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="flatten(list : List)"></endpoint>
<h4 class="signature_head">Lists.flatten</h4><a class="signature-arity" href="#Lists.flatten" title="Permanent link">1</a><signature id="Lists.flatten">

```lx
Lists.flatten(list : List) : List
```
</signature>

> Converts a nested list of lists to a single flat list of values.
> 
>   ```js
>   var list = [1,[2,3,[4,[5]]]]
>   var flat = Lists.flatten(list) //[1,2,3,4,5]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="add_unique(list : List, value : Any)"></endpoint>
<h4 class="signature_head">Lists.add_unique</h4><a class="signature-arity" href="#Lists.add_unique+2" title="Permanent link">2</a><signature id="Lists.add_unique+2">

```lx
Lists.add_unique(list : List, value : Any) : Bool
```
</signature>

> Add an item to a list if the value doesn't already exist in the list.
> Uses `list.indexOf` to check. 
> 
> Returns true if the value was unique and added to the list.
> 
>   ```js
>   var list = [1,2,3]
>   Lists.add_unique(list, 0) //true
>   Lists.add_unique(list, 1) //false, already found
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="append(into : List, list : List)"></endpoint>
<h4 class="signature_head">Lists.append</h4><a class="signature-arity" href="#Lists.append+2" title="Permanent link">2</a><signature id="Lists.append+2">

```lx
Lists.append(into : List, list : List) : None
```
</signature>

> Append `list` at the end of `into` without allocating a new list. 
> This function modifies `into`.
> 
> Note that in Wren, `List` implements `+`, which is append too, 
> but that makes a new list with the two combined. `[1] + [2] = [1, 2]`
> 
>   ```js
>   var list = [1,2]
>   Lists.append(list, [3,4,5])
>   Log.print(list) //[1,2,3,4,5]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="prepend(into : List, list : List)"></endpoint>
<h4 class="signature_head">Lists.prepend</h4><a class="signature-arity" href="#Lists.prepend+2" title="Permanent link">2</a><signature id="Lists.prepend+2">

```lx
Lists.prepend(into : List, list : List) : None
```
</signature>

> Similar to `append`, but adds the items from `list` to the front of `into`.
> This function modifies `into`.
> 
>   ```js
>   var list = [1,2]
>   Lists.prepend(list, [3,4,5])
>   Log.print(list) //[3,4,5,1,2]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="remove_where(list : List, value : Any, fn : Fn)"></endpoint>
<h4 class="signature_head">Lists.remove_where</h4><a class="signature-arity" href="#Lists.remove_where+3" title="Permanent link">3</a><signature id="Lists.remove_where+3">

```lx
Lists.remove_where(list : List, value : Any, fn : Fn) : Any
```
</signature>

> Similar to `list.remove` but uses a function for the find/equality check.
> Uses `Lists.index_of_where` to find the index, so the callback 
> msut return true if the values are equal or false if not.
> 
> Returns the value if it was removed, or null if it wasn't found.
> 
>   ```js
>   var list = [1,2,3]
>   var fn = Fn.new {|value, other| value == other }
>   Lists.remove_where(list, 3, fn)  //3
>   Lists.remove_where(list, 6, fn)  //null
>   Log.print(list)               //[1,2]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="remove_where(list : List, fn : Fn)"></endpoint>
<h4 class="signature_head">Lists.remove_where</h4><a class="signature-arity" href="#Lists.remove_where+2" title="Permanent link">2</a><signature id="Lists.remove_where+2">

```lx
Lists.remove_where(list : List, fn : Fn) : Any
```
</signature>

> Similar to `list.remove` but uses a function for the find/equality check.
> Uses `Lists.index_of_where` to find the index, so the callback 
> msut return true if the values are equal or false if not.
> 
> Returns the value if it was removed, or null if it wasn't found.
> 
>   ```js
>   var list = [1,2,3]
>   var fn = Fn.new {|value, other| value == other }
>   Lists.remove_where(list, fn)  //3
>   Lists.remove_where(list, fn)  //null
>   Log.print(list)               //[1,2]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="contains(list : Any, item : Any)"></endpoint>
<h4 class="signature_head">Lists.contains</h4><a class="signature-arity" href="#Lists.contains+2" title="Permanent link">2</a><signature id="Lists.contains+2">

```lx
Lists.contains(list : Any, item : Any) : unknown
```
</signature>

> Deprecated. Use list.contains(item)
> Returns true if the list contains the item.   

<endpoint module="luxe: containers" class="Lists" signature="remove(list : Any, to_remove : Any)"></endpoint>
<h4 class="signature_head">Lists.remove</h4><a class="signature-arity" href="#Lists.remove+2" title="Permanent link">2</a><signature id="Lists.remove+2">

```lx
Lists.remove(list : Any, to_remove : Any) : unknown
```
</signature>

> Deprecated. Use list.remove(item)
> Returns the item if removed, or null.   

<endpoint module="luxe: containers" class="Lists" signature="index_of(list : Any, item : Any)"></endpoint>
<h4 class="signature_head">Lists.index_of</h4><a class="signature-arity" href="#Lists.index_of+2" title="Permanent link">2</a><signature id="Lists.index_of+2">

```lx
Lists.index_of(list : Any, item : Any) : unknown
```
</signature>

> Deprecated. Use list.indexOf(item)
> Returns the index, or -1 if the item isn't found.   

<endpoint module="luxe: containers" class="Lists" signature="index_of_where(list : List, fn : Fn)"></endpoint>
<h4 class="signature_head">Lists.index_of_where</h4><a class="signature-arity" href="#Lists.index_of_where+2" title="Permanent link">2</a><signature id="Lists.index_of_where+2">

```lx
Lists.index_of_where(list : List, fn : Fn) : Num
```
</signature>

> Returns the index of `value` in `list` or `-1` if not found,
> where comparison is handled by a callback function.
> 
>   ```js
>   var list = [1,2,3]
>   Lists.index_of_where(list, 3) {|value, other| value == other } //2
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="index_of_where(list : List, value : Any, fn : Fn)"></endpoint>
<h4 class="signature_head">Lists.index_of_where</h4><a class="signature-arity" href="#Lists.index_of_where+3" title="Permanent link">3</a><signature id="Lists.index_of_where+3">

```lx
Lists.index_of_where(list : List, value : Any, fn : Fn) : Num
```
</signature>

> Returns the index of `item` in `list` or `-1` if not found,
> where comparison is handled by a callback function.
> 
>   ```js
>   var list = [1,2,3]
>   Lists.index_of_where(list, 3) {|value, other| value == other } //2
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="bubble_sort(list : List, compare : Fn)"></endpoint>
<h4 class="signature_head">Lists.bubble_sort</h4><a class="signature-arity" href="#Lists.bubble_sort+2" title="Permanent link">2</a><signature id="Lists.bubble_sort+2">

```lx
Lists.bubble_sort(list : List, compare : Fn) : None
```
</signature>

> In-place sorting of `list` using the `compare` function. Modifies `list`. Uses bubble sort.
> The compare function should return `0` for equal, `-1` for lower values and `1` for higher values.
> 
>   ```js
>   var list = [5,2,67,23]
>   Lists.bubble_sort(list) {|a, b| b - a }
>   Log.print(list) // [67, 23, 5, 2]
> 
>   Lists.bubble_sort(list) {|a, b| a - b }
>   Log.print(list) // [2, 5, 23, 67]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="quicksort(list : List, compare : Fn)"></endpoint>
<h4 class="signature_head">Lists.quicksort</h4><a class="signature-arity" href="#Lists.quicksort+2" title="Permanent link">2</a><signature id="Lists.quicksort+2">

```lx
Lists.quicksort(list : List, compare : Fn) : List
```
</signature>

> In-place sorting of `list` using the `compare` function. Modifies `list`. Uses quick sort.
> The compare function should return `0` for equal, `-1` for lower values and `1` for higher values.
> 
>   ```js
>   var list = [5,2,67,23]
>   Lists.quicksort(list) {|a, b| b - a }
>   Log.print(list) // [67, 23, 5, 2]
> 
>   Lists.quicksort(list) {|a, b| a - b }
>   Log.print(list) // [2, 5, 23, 67]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="quicksort(list : List, low : Num, high : Num, compare : Fn)"></endpoint>
<h4 class="signature_head">Lists.quicksort</h4><a class="signature-arity" href="#Lists.quicksort+4" title="Permanent link">4</a><signature id="Lists.quicksort+4">

```lx
Lists.quicksort(list : List, low : Num, high : Num, compare : Fn) : List
```
</signature>

> Same as `quicksort` but a low and high index can be specified to sort just a portion of a list.
> The default for `quicksort(list, compare)` is `low = 0`, `high = list.count-1`.
> 
>   ```js
>   var list = [5,2,34,89,11,60,45]
>   Lists.quicksort(list, 2, 5) {|a, b| a - b }
>   Log.print(list) // [5, 2, |11, 34, 60, 89|, 45]
>   //note only the range between | was sorted
>   ```   


### MapOrdered
`import "luxe: containers" for MapOrdered{:lx}`
> A `Map` wrapper that keeps the order of the keys the same in which they're added.
> Note: The Wren `Map` class doesn't guarantee order of keys.

- [keys](#MapOrdered.keys)
- [map](#MapOrdered.map)
- [new](#MapOrdered.new)()
- [get](#MapOrdered.get)(**key**: `Any{:lx}`)
- [set](#MapOrdered.set+2)(**key**: `Any{:lx}`, **value**: `Any{:lx}`)
- [containsKey](#MapOrdered.containsKey)(**key**: `Any{:lx}`)
- [[key : Any]](#MapOrdered.[key : Any])
- [[key : Any]](#MapOrdered.[key : Any]=)=(value : Any)
- [iterate](#MapOrdered.iterate)(**iterator**: `Any{:lx}`)
- [iteratorValue](#MapOrdered.iteratorValue)(**iterator**: `Any{:lx}`)


---

<endpoint module="luxe: containers" class="MapOrdered" signature="keys"></endpoint>
<h4 class="signature_head">MapOrdered.keys</h4><a class="signature-arity" href="#MapOrdered.keys" title="Permanent link">1</a><signature id="MapOrdered.keys">

```lx
MapOrdered.keys : List
```
</signature>

> Returns the list of `keys` in the Map.
> Don't modify this.
> 
>   ```js
>   var map = MapOrdered.new()
>   map["one"] = 1
>   map["two"] = 2
>   Log.print(map.keys) //["one", "two"]
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="map"></endpoint>
<h4 class="signature_head">MapOrdered.map</h4><a class="signature-arity" href="#MapOrdered.map" title="Permanent link">1</a><signature id="MapOrdered.map">

```lx
MapOrdered.map : Map
```
</signature>

> Access to the underlying Wren `Map` data.
> Normally you don't modify this directly.
> 
>   ```js
>   var map = MapOrdered.new()
>   map["one"] = 1
>   map["two"] = 2
>   Log.print(map.map) //{two: 2, one: 1}
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="new()"></endpoint>
<h4 class="signature_head">MapOrdered.new</h4><a class="signature-arity" href="#MapOrdered.new" title="Permanent link">1</a><signature id="MapOrdered.new">

```lx
MapOrdered.new() : MapOrdered
```
</signature>

> Create a new ordered map.
> 
>   ```js
>   var map = MapOrdered.new()
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="get(key : Any)"></endpoint>
<h4 class="signature_head">MapOrdered.get</h4><a class="signature-arity" href="#MapOrdered.get" title="Permanent link">1</a><signature id="MapOrdered.get">

```lx
MapOrdered.get(key : Any) : unknown
```
</signature>

> Return the value associated with `key`, or `null` if not found.
> You can also use `map[key]` as an alternative.
> 
>   ```js
>   var map = MapOrdered.new()
>   map["one"] = 1
>   Log.print(map.get("one"))  //1
>   Log.print(map.get("two"))  //null
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="set(key : Any, value : Any)"></endpoint>
<h4 class="signature_head">MapOrdered.set</h4><a class="signature-arity" href="#MapOrdered.set+2" title="Permanent link">2</a><signature id="MapOrdered.set+2">

```lx
MapOrdered.set(key : Any, value : Any) : unknown
```
</signature>

> Set a `value` for a given `key`.
> You can also use `map[key] = value` as an alternative.
> 
>   ```js
>   var map = MapOrdered.new()
>   map.set("one", 1)
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="containsKey(key : Any)"></endpoint>
<h4 class="signature_head">MapOrdered.containsKey</h4><a class="signature-arity" href="#MapOrdered.containsKey" title="Permanent link">1</a><signature id="MapOrdered.containsKey">

```lx
MapOrdered.containsKey(key : Any) : unknown
```
</signature>

> Returns true if `key` is found in the map.
> 
>   ```js
>   var map = MapOrdered.new()
>   map["one"] = 1
>   Log.print(map.containsKey("one"))  //true
>   Log.print(map.containsKey("two"))  //false
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="[key : Any]"></endpoint>
<h4 class="signature_head">MapOrdered [key : Any]</h4><a class="signature-arity" href="#MapOrdered.[key : Any]" title="Permanent link">1</a><signature id="MapOrdered.[key : Any]">

```lx
MapOrdered [key : Any] : unknown
```
</signature>

> Return the value associated with `key`, or `null` if not found.
> 
>   ```js
>   var map = MapOrdered.new()
>   map["one"] = 1
>   Log.print(map["one"])  //1
>   Log.print(map["two"])  //null
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="[key : Any]=(value : Any)"></endpoint>
<h4 class="signature_head">MapOrdered [key : Any]</h4><a class="signature-arity" href="#MapOrdered.[key : Any]=" title="Permanent link">1</a><signature id="MapOrdered.[key : Any]=">

```lx
MapOrdered [key : Any]=(value : Any) : unknown
```
</signature>

>    

<endpoint module="luxe: containers" class="MapOrdered" signature="iterate(iterator : Any)"></endpoint>
<h4 class="signature_head">MapOrdered.iterate</h4><a class="signature-arity" href="#MapOrdered.iterate" title="Permanent link">1</a><signature id="MapOrdered.iterate">

```lx
MapOrdered.iterate(iterator : Any) : unknown
```
</signature>

> Implementation details for the Wren iterator protocol.   

<endpoint module="luxe: containers" class="MapOrdered" signature="iteratorValue(iterator : Any)"></endpoint>
<h4 class="signature_head">MapOrdered.iteratorValue</h4><a class="signature-arity" href="#MapOrdered.iteratorValue" title="Permanent link">1</a><signature id="MapOrdered.iteratorValue">

```lx
MapOrdered.iteratorValue(iterator : Any) : unknown
```
</signature>

> Implementation details for the Wren iterator protocol.   

