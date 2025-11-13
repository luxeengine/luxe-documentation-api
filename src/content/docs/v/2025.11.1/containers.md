---
title: "luxe: containers"
description: API version 2025.11.1
slug: "v/2025.11.1/containers"
---
- [Lists](#lists)   
- [MapOrdered](#mapordered)   

---


## Lists
```wren
import "luxe: containers" for Lists
```
> The `Lists` API works with the built in Wren `List` type,
> offering more tools to operate on them.

<endpoint module="luxe: containers" class="Lists" signature="first(list : Sequence)"></endpoint>
### Lists.first(.)
```wren
Lists.first(list : Sequence) : Any
```
> Returns the first element of a Sequence, null if the sequence is empty.
> 
> ```js
>   var list = ["twig", 2, null, "tree", "petals", "faeries", 9]
>   Lists.first(list) //"twig"
> ```   

<endpoint module="luxe: containers" class="Lists" signature="first(list : Sequence, callback : Fn)"></endpoint>
### Lists.first(..)
```wren
Lists.first(list : Sequence, callback : Fn) : Any
```
> Searches for the first element in a sequence that fulfills a requirement and returns it.
> If no element fulfills the requirement, null is returned.
> 
> ```js
>   var list = ["twig", 2, null, "tree", "petals", "faeries", 9]
>   Lists.first(list){|elem| elem is String && elem.count > 4} //"petals"
> ```   

<endpoint module="luxe: containers" class="Lists" signature="binary_search(list : List, value : Any)"></endpoint>
### Lists.binary_search(..)
```wren
Lists.binary_search(list : List, value : Any) : Num
```
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
### Lists.binary_search_first(...)
```wren
Lists.binary_search_first(list : List, value : Any, fn : Fn) : Num
```
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
### Lists.equal(..)
```wren
Lists.equal(a : List, b : List) : Bool
```
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
### Lists.equalish(..)
```wren
Lists.equalish(a : List, b : List) : Bool
```
> Similar to `equal` but values don't need to be in the same order.
> 
>   ```js
>   var listA = [1,9,7]
>   var listB = [1,7,9]
>   var equalA = Lists.equal(listA, [1,7,9]) //true
>   var equalB = Lists.equal(listB, [1,7,9]) //true
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="flatten(list : List)"></endpoint>
### Lists.flatten(.)
```wren
Lists.flatten(list : List) : List
```
> Converts a nested list of lists to a single flat list of values.
> 
>   ```js
>   var list = [1,[2,3,[4,[5]]]]
>   var flat = Lists.flatten(list) //[1,2,3,4,5]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="add_unique(list : List, value : Any)"></endpoint>
### Lists.add_unique(..)
```wren
Lists.add_unique(list : List, value : Any) : Bool
```
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
### Lists.append(..)
```wren
Lists.append(into : List, list : List) : None
```
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
### Lists.prepend(..)
```wren
Lists.prepend(into : List, list : List) : None
```
> Similar to `append`, but adds the items from `list` to the front of `into`.
> This function modifies `into`.
> 
>   ```js
>   var list = [1,2]
>   Lists.prepend(list, [3,4,5])
>   Log.print(list) //[3,4,5,1,2]
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="remove_where(list : List, value : Any, fn : Fn)"></endpoint>
### Lists.remove_where(...)
```wren
Lists.remove_where(list : List, value : Any, fn : Fn) : Any
```
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
### Lists.remove_where(..)
```wren
Lists.remove_where(list : List, fn : Fn) : Any
```
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
### Lists.contains(..)
```wren
Lists.contains(list : Any, item : Any) : unknown
```
> Deprecated. Use list.contains(item)
> Returns true if the list contains the item.   

<endpoint module="luxe: containers" class="Lists" signature="remove(list : Any, to_remove : Any)"></endpoint>
### Lists.remove(..)
```wren
Lists.remove(list : Any, to_remove : Any) : unknown
```
> Deprecated. Use list.remove(item)
> Returns the item if removed, or null.   

<endpoint module="luxe: containers" class="Lists" signature="index_of(list : Any, item : Any)"></endpoint>
### Lists.index_of(..)
```wren
Lists.index_of(list : Any, item : Any) : unknown
```
> Deprecated. Use list.indexOf(item)
> Returns the index, or -1 if the item isn't found.   

<endpoint module="luxe: containers" class="Lists" signature="index_of_where(list : List, fn : Fn)"></endpoint>
### Lists.index_of_where(..)
```wren
Lists.index_of_where(list : List, fn : Fn) : Num
```
> Returns the index of `value` in `list` or `-1` if not found,
> where comparison is handled by a callback function.
> 
>   ```js
>   var list = [1,2,3]
>   Lists.index_of_where(list, 3) {|value, other| value == other } //2
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="index_of_where(list : List, value : Any, fn : Fn)"></endpoint>
### Lists.index_of_where(...)
```wren
Lists.index_of_where(list : List, value : Any, fn : Fn) : Num
```
> Returns the index of `item` in `list` or `-1` if not found,
> where comparison is handled by a callback function.
> 
>   ```js
>   var list = [1,2,3]
>   Lists.index_of_where(list, 3) {|value, other| value == other } //2
>   ```   

<endpoint module="luxe: containers" class="Lists" signature="bubble_sort(list : List, compare : Fn)"></endpoint>
### Lists.bubble_sort(..)
```wren
Lists.bubble_sort(list : List, compare : Fn) : None
```
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
### Lists.quicksort(..)
```wren
Lists.quicksort(list : List, compare : Fn) : List
```
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
### Lists.quicksort(....)
```wren
Lists.quicksort(list : List, low : Num, high : Num, compare : Fn) : List
```
> Same as `quicksort` but a low and high index can be specified to sort just a portion of a list.
> The default for `quicksort(list, compare)` is `low = 0`, `high = list.count-1`.
> 
>   ```js
>   var list = [5,2,34,89,11,60,45]
>   Lists.quicksort(list, 2, 5) {|a, b| a - b }
>   Log.print(list) // [5, 2, |11, 34, 60, 89|, 45]
>   //note only the range between | was sorted
>   ```   


## MapOrdered
```wren
import "luxe: containers" for MapOrdered
```
> A `Map` wrapper that keeps the order of the keys the same in which they're added.
> Note: The Wren `Map` class doesn't guarantee order of keys.

<endpoint module="luxe: containers" class="MapOrdered" signature="keys"></endpoint>
### MapOrdered.keys
```wren
MapOrdered.keys : List
```
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
### MapOrdered.map
```wren
MapOrdered.map : Map
```
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
### MapOrdered.new(.)
```wren
MapOrdered.new() : MapOrdered
```
> Create a new ordered map.
> 
>   ```js
>   var map = MapOrdered.new()
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="get(key : Any)"></endpoint>
### MapOrdered.get(.)
```wren
MapOrdered.get(key : Any) : unknown
```
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
### MapOrdered.set(..)
```wren
MapOrdered.set(key : Any, value : Any) : unknown
```
> Set a `value` for a given `key`.
> You can also use `map[key] = value` as an alternative.
> 
>   ```js
>   var map = MapOrdered.new()
>   map.set("one", 1)
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="containsKey(key : Any)"></endpoint>
### MapOrdered.containsKey(.)
```wren
MapOrdered.containsKey(key : Any) : unknown
```
> Returns true if `key` is found in the map.
> 
>   ```js
>   var map = MapOrdered.new()
>   map["one"] = 1
>   Log.print(map.containsKey("one"))  //true
>   Log.print(map.containsKey("two"))  //false
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="[key : Any]"></endpoint>
### MapOrdered [key : Any](.)
```wren
MapOrdered [key : Any] : unknown
```
> Return the value associated with `key`, or `null` if not found.
> 
>   ```js
>   var map = MapOrdered.new()
>   map["one"] = 1
>   Log.print(map["one"])  //1
>   Log.print(map["two"])  //null
>   ```   

<endpoint module="luxe: containers" class="MapOrdered" signature="[key : Any]=(value : Any)"></endpoint>
### MapOrdered [key : Any](.)
```wren
MapOrdered [key : Any]=(value : Any) : unknown
```
>    

<endpoint module="luxe: containers" class="MapOrdered" signature="iterate(iterator : Any)"></endpoint>
### MapOrdered.iterate(.)
```wren
MapOrdered.iterate(iterator : Any) : unknown
```
> Implementation details for the Wren iterator protocol.   

<endpoint module="luxe: containers" class="MapOrdered" signature="iteratorValue(iterator : Any)"></endpoint>
### MapOrdered.iteratorValue(.)
```wren
MapOrdered.iteratorValue(iterator : Any) : unknown
```
> Implementation details for the Wren iterator protocol.   

