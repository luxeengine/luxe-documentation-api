---
title: "luxe: pqueue"
description: API version 2025.11.1
---
## `luxe: pqueue{:lx}` module

- [MaxPQ](#maxpq)   
- [MinPQ](#minpq)   

---


### MaxPQ
`import "luxe: pqueue" for MaxPQ{:lx}`
> A priority queue that returns larger values first.
> 
> A priority queue holds various values and will sort
> them into an ordered list by priority. When queried
> via `peek` or values removed via `pop` the values are sorted.

- [value](#MaxPQ.value)
- [count](#MaxPQ.count)
- [new](#MaxPQ.new)()
- [new](#MaxPQ.new)(**get_priority_fn**: `Any{:lx}`)
- [add](#MaxPQ.add)(**value**: `Any{:lx}`)
- [pop](#MaxPQ.pop)()
- [peek](#MaxPQ.peek)()


---

<endpoint module="luxe: pqueue" class="MaxPQ" signature="value"></endpoint>
<h4 class="signature_head">MaxPQ.value</h4><a class="signature-arity" href="#MaxPQ.value" title="Permanent link">1</a><signature id="MaxPQ.value">

```lx
MaxPQ.value : unknown
```
</signature>

> Returns the internal array. Read only, modify the queue via `add` and `pop`.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="count"></endpoint>
<h4 class="signature_head">MaxPQ.count</h4><a class="signature-arity" href="#MaxPQ.count" title="Permanent link">1</a><signature id="MaxPQ.count">

```lx
MaxPQ.count : unknown
```
</signature>

> Returns the number of items in the priority queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="new()"></endpoint>
<h4 class="signature_head">MaxPQ.new</h4><a class="signature-arity" href="#MaxPQ.new" title="Permanent link">1</a><signature id="MaxPQ.new">

```lx
MaxPQ.new() : MaxPQ
```
</signature>

> Create a new priority queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="new(get_priority_fn : Any)"></endpoint>
<h4 class="signature_head">MaxPQ.new</h4><a class="signature-arity" href="#MaxPQ.new" title="Permanent link">1</a><signature id="MaxPQ.new">

```lx
MaxPQ.new(get_priority_fn : Any) : MaxPQ
```
</signature>

> Create a new priority queue with a callback for the priority of a value.
> The callback takes one parameter, the value, and should return a priority number 
> for that value.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="add(value : Any)"></endpoint>
<h4 class="signature_head">MaxPQ.add</h4><a class="signature-arity" href="#MaxPQ.add" title="Permanent link">1</a><signature id="MaxPQ.add">

```lx
MaxPQ.add(value : Any) : unknown
```
</signature>

> Add a value to the queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="pop()"></endpoint>
<h4 class="signature_head">MaxPQ.pop</h4><a class="signature-arity" href="#MaxPQ.pop" title="Permanent link">1</a><signature id="MaxPQ.pop">

```lx
MaxPQ.pop() : unknown
```
</signature>

> Return the next value, removing it from the queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="peek()"></endpoint>
<h4 class="signature_head">MaxPQ.peek</h4><a class="signature-arity" href="#MaxPQ.peek" title="Permanent link">1</a><signature id="MaxPQ.peek">

```lx
MaxPQ.peek() : unknown
```
</signature>

> Return the next value without removing it from the queue.   


### MinPQ
`import "luxe: pqueue" for MinPQ{:lx}`
> A priority queue that returns smaller values first.
> 
> A priority queue holds various values and will sort
> them into an ordered list by priority. When queried
> via `peek` or values removed via `pop` the values are sorted.

- [value](#MinPQ.value)
- [count](#MinPQ.count)
- [new](#MinPQ.new)()
- [new](#MinPQ.new)(**get_priority_fn**: `Any{:lx}`)
- [add](#MinPQ.add)(**value**: `Any{:lx}`)
- [pop](#MinPQ.pop)()
- [peek](#MinPQ.peek)()


---

<endpoint module="luxe: pqueue" class="MinPQ" signature="value"></endpoint>
<h4 class="signature_head">MinPQ.value</h4><a class="signature-arity" href="#MinPQ.value" title="Permanent link">1</a><signature id="MinPQ.value">

```lx
MinPQ.value : unknown
```
</signature>

> Returns the internal array. Read only, modify the queue via `add` and `pop`.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="count"></endpoint>
<h4 class="signature_head">MinPQ.count</h4><a class="signature-arity" href="#MinPQ.count" title="Permanent link">1</a><signature id="MinPQ.count">

```lx
MinPQ.count : unknown
```
</signature>

> Returns the number of items in the priority queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="new()"></endpoint>
<h4 class="signature_head">MinPQ.new</h4><a class="signature-arity" href="#MinPQ.new" title="Permanent link">1</a><signature id="MinPQ.new">

```lx
MinPQ.new() : MinPQ
```
</signature>

> Create a new priority queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="new(get_priority_fn : Any)"></endpoint>
<h4 class="signature_head">MinPQ.new</h4><a class="signature-arity" href="#MinPQ.new" title="Permanent link">1</a><signature id="MinPQ.new">

```lx
MinPQ.new(get_priority_fn : Any) : MinPQ
```
</signature>

> Create a new priority queue with a callback for the priority of a value.
> The callback takes one parameter, the value, and should return a priority number 
> for that value.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="add(value : Any)"></endpoint>
<h4 class="signature_head">MinPQ.add</h4><a class="signature-arity" href="#MinPQ.add" title="Permanent link">1</a><signature id="MinPQ.add">

```lx
MinPQ.add(value : Any) : unknown
```
</signature>

> Add a value to the queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="pop()"></endpoint>
<h4 class="signature_head">MinPQ.pop</h4><a class="signature-arity" href="#MinPQ.pop" title="Permanent link">1</a><signature id="MinPQ.pop">

```lx
MinPQ.pop() : unknown
```
</signature>

> Return the next value, removing it from the queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="peek()"></endpoint>
<h4 class="signature_head">MinPQ.peek</h4><a class="signature-arity" href="#MinPQ.peek" title="Permanent link">1</a><signature id="MinPQ.peek">

```lx
MinPQ.peek() : unknown
```
</signature>

> Return the next value without removing it from the queue.   

