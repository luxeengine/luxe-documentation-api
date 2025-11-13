---
title: "luxe: plot"
description: API version 2025.11.1
slug: "v/2025.11.1/plot"
---
- [Plot](#plot)   

---


## Plot
```lx
import "luxe: plot" for Plot
```
> A service API to plot values for games + debugging.
> Can plot values from anywhere as a counter or as a running history.
> Counter plots add values to their total and add the total to the history at the end of the frame.

<endpoint module="luxe: plot" class="Plot" signature="define(id : String, type : PlotType)"></endpoint>
### Plot.define(..)
```lx
Plot.define(id : String, type : PlotType) : unknown
```
> Define a new plot by id, with the given `type`. The max history defaults to 60 values if not specified.   

<endpoint module="luxe: plot" class="Plot" signature="define(id : String, type : PlotType, max_history : Num)"></endpoint>
### Plot.define(...)
```lx
Plot.define(id : String, type : PlotType, max_history : Num) : unknown
```
> Define a new plot by id, with the given `type` and `max_history`   

<endpoint module="luxe: plot" class="Plot" signature="update(id : String, value : Num)"></endpoint>
### Plot.update(..)
```lx
Plot.update(id : String, value : Num) : unknown
```
> Update a given plot by id, with the given `value`. 
> For `PlotType.normal` this will add the value to the history.
> For `PlotType.counter` this will add the value to the total so far this frame.   

<endpoint module="luxe: plot" class="Plot" signature="list()"></endpoint>
### Plot.list(.)
```lx
Plot.list() : unknown
```
> Get a list of plots defined, as string id (e.g Strings.get(id) is needed)   

<endpoint module="luxe: plot" class="Plot" signature="history(id : String)"></endpoint>
### Plot.history(.)
```lx
Plot.history(id : String) : List
```
> Get the history for a given plot, as a list of values   

<endpoint module="luxe: plot" class="Plot" signature="latest(id : String)"></endpoint>
### Plot.latest(.)
```lx
Plot.latest(id : String) : Num
```
> Get the latest value for a given plot   

<endpoint module="luxe: plot" class="Plot" signature="average(id : String)"></endpoint>
### Plot.average(.)
```lx
Plot.average(id : String) : Num
```
> Get the average value for a given plot, averaging out the history   

