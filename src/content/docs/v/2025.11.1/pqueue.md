---
title: "luxe: pqueue"
description: API version 2025.11.1
slug: "v/2025.11.1/pqueue"
---
- [MaxPQ](#maxpq)   
- [MinPQ](#minpq)   

---


## MaxPQ
```lx
import "luxe: pqueue" for MaxPQ
```
> A priority queue that returns larger values first.
> 
> A priority queue holds various values and will sort
> them into an ordered list by priority. When queried
> via `peek` or values removed via `pop` the values are sorted.

<endpoint module="luxe: pqueue" class="MaxPQ" signature="value"></endpoint>
### MaxPQ.value
```lx
MaxPQ.value : unknown
```
> Returns the internal array. Read only, modify the queue via `add` and `pop`.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="count"></endpoint>
### MaxPQ.count
```lx
MaxPQ.count : unknown
```
> Returns the number of items in the priority queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="new()"></endpoint>
### MaxPQ.new(.)
```lx
MaxPQ.new() : MaxPQ
```
> Create a new priority queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="new(get_priority_fn : Any)"></endpoint>
### MaxPQ.new(.)
```lx
MaxPQ.new(get_priority_fn : Any) : MaxPQ
```
> Create a new priority queue with a callback for the priority of a value.
> The callback takes one parameter, the value, and should return a priority number 
> for that value.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="add(value : Any)"></endpoint>
### MaxPQ.add(.)
```lx
MaxPQ.add(value : Any) : unknown
```
> Add a value to the queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="pop()"></endpoint>
### MaxPQ.pop(.)
```lx
MaxPQ.pop() : unknown
```
> Return the next value, removing it from the queue.   

<endpoint module="luxe: pqueue" class="MaxPQ" signature="peek()"></endpoint>
### MaxPQ.peek(.)
```lx
MaxPQ.peek() : unknown
```
> Return the next value without removing it from the queue.   


## MinPQ
```lx
import "luxe: pqueue" for MinPQ
```
> A priority queue that returns smaller values first.
> 
> A priority queue holds various values and will sort
> them into an ordered list by priority. When queried
> via `peek` or values removed via `pop` the values are sorted.

<endpoint module="luxe: pqueue" class="MinPQ" signature="value"></endpoint>
### MinPQ.value
```lx
MinPQ.value : unknown
```
> Returns the internal array. Read only, modify the queue via `add` and `pop`.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="count"></endpoint>
### MinPQ.count
```lx
MinPQ.count : unknown
```
> Returns the number of items in the priority queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="new()"></endpoint>
### MinPQ.new(.)
```lx
MinPQ.new() : MinPQ
```
> Create a new priority queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="new(get_priority_fn : Any)"></endpoint>
### MinPQ.new(.)
```lx
MinPQ.new(get_priority_fn : Any) : MinPQ
```
> Create a new priority queue with a callback for the priority of a value.
> The callback takes one parameter, the value, and should return a priority number 
> for that value.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="add(value : Any)"></endpoint>
### MinPQ.add(.)
```lx
MinPQ.add(value : Any) : unknown
```
> Add a value to the queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="pop()"></endpoint>
### MinPQ.pop(.)
```lx
MinPQ.pop() : unknown
```
> Return the next value, removing it from the queue.   

<endpoint module="luxe: pqueue" class="MinPQ" signature="peek()"></endpoint>
### MinPQ.peek(.)
```lx
MinPQ.peek() : unknown
```
> Return the next value without removing it from the queue.   

