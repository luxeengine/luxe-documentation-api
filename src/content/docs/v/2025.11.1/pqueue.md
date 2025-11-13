---
title: "luxe: pqueue"
description: API version 2025.11.1
slug: "v/2025.11.1/pqueue"
---
- [MaxPQ](#maxpq)   
- [MinPQ](#minpq)   

---


## MaxPQ
```wren
import "luxe: pqueue" for MaxPQ
```
> A priority queue that returns larger values first.
> 
> A priority queue holds various values and will sort
> them into an ordered list by priority. When queried
> via `peek` or values removed via `pop` the values are sorted.

<endpoint module="luxe: pqueue" class="MaxPQ" signature="value"></endpoint>
### MaxPQ.value
```wren
MaxPQ.value : unknown
```
> Returns the internal array. Read only, modify the queue via `add` and `pop`.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="count"></endpoint>
### MaxPQ.count
```wren
MaxPQ.count : unknown
```
> Returns the number of items in the priority queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="new()"></endpoint>
### MaxPQ.new(.)
```wren
MaxPQ.new() : MaxPQ
```
> Create a new priority queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="new(get_priority_fn : Any)"></endpoint>
### MaxPQ.new(.)
```wren
MaxPQ.new(get_priority_fn : Any) : MaxPQ
```
> Create a new priority queue with a callback for the priority of a value.
> The callback takes one parameter, the value, and should return a priority number 
> for that value.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="add(value : Any)"></endpoint>
### MaxPQ.add(.)
```wren
MaxPQ.add(value : Any) : unknown
```
> Add a value to the queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="pop()"></endpoint>
### MaxPQ.pop(.)
```wren
MaxPQ.pop() : unknown
```
> Return the next value, removing it from the queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="peek()"></endpoint>
### MaxPQ.peek(.)
```wren
MaxPQ.peek() : unknown
```
> Return the next value without removing it from the queue.   


## MinPQ
```wren
import "luxe: pqueue" for MinPQ
```
> A priority queue that returns smaller values first.
> 
> A priority queue holds various values and will sort
> them into an ordered list by priority. When queried
> via `peek` or values removed via `pop` the values are sorted.

<endpoint module="luxe: pqueue" class="MinPQ" signature="value"></endpoint>
### MinPQ.value
```wren
MinPQ.value : unknown
```
> Returns the internal array. Read only, modify the queue via `add` and `pop`.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="count"></endpoint>
### MinPQ.count
```wren
MinPQ.count : unknown
```
> Returns the number of items in the priority queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="new()"></endpoint>
### MinPQ.new(.)
```wren
MinPQ.new() : MinPQ
```
> Create a new priority queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="new(get_priority_fn : Any)"></endpoint>
### MinPQ.new(.)
```wren
MinPQ.new(get_priority_fn : Any) : MinPQ
```
> Create a new priority queue with a callback for the priority of a value.
> The callback takes one parameter, the value, and should return a priority number 
> for that value.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="add(value : Any)"></endpoint>
### MinPQ.add(.)
```wren
MinPQ.add(value : Any) : unknown
```
> Add a value to the queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="pop()"></endpoint>
### MinPQ.pop(.)
```wren
MinPQ.pop() : unknown
```
> Return the next value, removing it from the queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="peek()"></endpoint>
### MinPQ.peek(.)
```wren
MinPQ.peek() : unknown
```
> Return the next value without removing it from the queue.   

