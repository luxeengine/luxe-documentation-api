---
title: "luxe: plot"
description: API version 2025.11.1
---
## `luxe: plot{:lx}` module

- [Plot](#plot)   

---


### Plot
`import "luxe: plot" for Plot{:lx}`
> A service API to plot values for games + debugging.
> Can plot values from anywhere as a counter or as a running history.
> Counter plots add values to their total and add the total to the history at the end of the frame.

- [define](#Plot.define+2)(**id**: `String{:lx}`, **type**: `PlotType{:lx}`)
- [define](#Plot.define+3)(**id**: `String{:lx}`, **type**: `PlotType{:lx}`, **max_history**: `Num{:lx}`)
- [update](#Plot.update+2)(**id**: `String{:lx}`, **value**: `Num{:lx}`)
- [list](#Plot.list)()
- [history](#Plot.history)(**id**: `String{:lx}`)
- [latest](#Plot.latest)(**id**: `String{:lx}`)
- [average](#Plot.average)(**id**: `String{:lx}`)


---

<endpoint module="luxe: plot" class="Plot" signature="define(id : String, type : PlotType)"></endpoint>
<h4 class="signature_head">Plot.define</h4><a class="signature-arity" href="#Plot.define+2" title="Permanent link">2</a><signature id="Plot.define+2">

```lx
Plot.define(id : String, type : PlotType) : unknown
```
</signature>

> Define a new plot by id, with the given `type`. The max history defaults to 60 values if not specified.   

<endpoint module="luxe: plot" class="Plot" signature="define(id : String, type : PlotType, max_history : Num)"></endpoint>
<h4 class="signature_head">Plot.define</h4><a class="signature-arity" href="#Plot.define+3" title="Permanent link">3</a><signature id="Plot.define+3">

```lx
Plot.define(id : String, type : PlotType, max_history : Num) : unknown
```
</signature>

> Define a new plot by id, with the given `type` and `max_history`   

<endpoint module="luxe: plot" class="Plot" signature="update(id : String, value : Num)"></endpoint>
<h4 class="signature_head">Plot.update</h4><a class="signature-arity" href="#Plot.update+2" title="Permanent link">2</a><signature id="Plot.update+2">

```lx
Plot.update(id : String, value : Num) : unknown
```
</signature>

> Update a given plot by id, with the given `value`. 
> For `PlotType.normal` this will add the value to the history.
> For `PlotType.counter` this will add the value to the total so far this frame.   

<endpoint module="luxe: plot" class="Plot" signature="list()"></endpoint>
<h4 class="signature_head">Plot.list</h4><a class="signature-arity" href="#Plot.list" title="Permanent link">1</a><signature id="Plot.list">

```lx
Plot.list() : unknown
```
</signature>

> Get a list of plots defined, as string id (e.g Strings.get(id) is needed)   

<endpoint module="luxe: plot" class="Plot" signature="history(id : String)"></endpoint>
<h4 class="signature_head">Plot.history</h4><a class="signature-arity" href="#Plot.history" title="Permanent link">1</a><signature id="Plot.history">

```lx
Plot.history(id : String) : List
```
</signature>

> Get the history for a given plot, as a list of values   

<endpoint module="luxe: plot" class="Plot" signature="latest(id : String)"></endpoint>
<h4 class="signature_head">Plot.latest</h4><a class="signature-arity" href="#Plot.latest" title="Permanent link">1</a><signature id="Plot.latest">

```lx
Plot.latest(id : String) : Num
```
</signature>

> Get the latest value for a given plot   

<endpoint module="luxe: plot" class="Plot" signature="average(id : String)"></endpoint>
<h4 class="signature_head">Plot.average</h4><a class="signature-arity" href="#Plot.average" title="Permanent link">1</a><signature id="Plot.average">

```lx
Plot.average(id : String) : Num
```
</signature>

> Get the average value for a given plot, averaging out the history   

