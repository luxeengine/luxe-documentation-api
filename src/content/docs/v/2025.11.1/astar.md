---
title: "luxe: astar"
description: API version 2025.11.1
slug: "v/2025.11.1/astar"
---
- [AStar](#astar)   

---


## AStar
```wren
import "luxe: astar" for AStar
```
> A generic implementation of A* pathfinding in luxe.
>   
> For details about the pathfinding and things like costs, heuristics and 
> implementation details, please see https://www.redblobgames.com/pathfinding/a-star/introduction.html

<endpoint module="luxe: astar" class="AStar" signature="MAX"></endpoint>
### AStar.MAX
```wren
AStar.MAX : Num
```
> A value that defaults to `250`, for the max number of iterations that will be considered valid. If the max is reached, no path is returned. To update it, use `Astar.MAX = 400`.   

<endpoint module="luxe: astar" class="AStar" signature="MAX=(v : Num)"></endpoint>
### AStar.MAX
```wren
AStar.MAX=(v : Num) : unknown
```
> no docs found   

<endpoint module="luxe: astar" class="AStar" signature="path2D(start : Vec, end : Vec, cost_get_fn : Fn, neighbors_get_fn : Fn, heuristic_fn : Fn)"></endpoint>
### AStar.path2D(.....)
```wren
AStar.path2D(start : Vec, end : Vec, cost_get_fn : Fn, neighbors_get_fn : Fn, heuristic_fn : Fn) : List
```
> Returns a path between `start` and `end` if one was found, or `null` otherwise. The path is a `List` of nodes received from `start`, `end` or `neighbors_get_fn` and are unmodified.
> 
> Note: Check if `start`/`end` are walkable before calling this function.
> 
> Cost-calculating Function:
> ```js
> //no cost?
> _cost_get_fn = Fn.new {|from, to| 1 }
> //cost from a tilemap, simple (fake) example
> _cost_get_fn = Fn.new {|from, to| tiles.get_cost(to.x, to.y) }
> ```  
> 
> Getting the neighbors of a node:
> ```js
> _neighbors_get_fn = Fn.new {|node|
>   var list = []
>   //check above, below, left and right.
>   if(is_walkable(node.x, node.y+1)) list.add(Node.new(node.x, node.y+1))
>   if(is_walkable(node.x, node.y-1)) list.add(Node.new(node.x, node.y-1))
>   if(is_walkable(node.x+1, node.y)) list.add(Node.new(node.x+1, node.y))
>   if(is_walkable(node.x-1, node.y)) list.add(Node.new(node.x-1, node.y))
>   return list
> }
> ```
> 
> Getting the heuristic value of a point:
> ```js
> _heuristic_fn = Fn.new {|end, point|
>   var manhattan = ((end.x - point.x).abs + (end.y - point.y).abs)
>   return manhattan * 1.001 //fudge factor, see the linked articles on pathfinding
> }
> ```
> 
> Getting a path:
> ```js
> get_path(start, end) {
>   if(!is_walkable(start)) return null
>   if(!is_walkable(end)) return null
>   return AStar.path2D(start, end, _cost_get_fn, _neighbors_get_fn, _heuristic_fn)
> }
> ```   

