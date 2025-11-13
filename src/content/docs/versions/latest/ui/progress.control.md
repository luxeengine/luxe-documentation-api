---
title: "luxe: ui/progress.control"
description: API version 2025.11.1
---
## `luxe: ui/progress.control{:lx}` module

- [Data](#data)   
- [UIProgress](#uiprogress)   

---


### Data
`import "luxe: ui/progress.control" for Data{:lx}`
> no docs found

- `var progress : Num = 0{:lx}`


---


### UIProgress
`import "luxe: ui/progress.control" for UIProgress{:lx}`
> no docs found

- [create](#UIProgress.create)(**ui_entity**: `Any{:lx}`)
- [set_progress](#UIProgress.set_progress+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [get_progress](#UIProgress.get_progress)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/progress.control" class="UIProgress" signature="create(ui_entity : Any)"></endpoint>
<h4 class="signature_head">UIProgress.create</h4><a class="signature-arity" href="#UIProgress.create" title="Permanent link">1</a><signature id="UIProgress.create">

```lx
UIProgress.create(ui_entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/progress.control" class="UIProgress" signature="set_progress(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">UIProgress.set_progress</h4><a class="signature-arity" href="#UIProgress.set_progress+2" title="Permanent link">2</a><signature id="UIProgress.set_progress+2">

```lx
UIProgress.set_progress(control : Control, value : Num) : unknown
```
</signature>

> Set the progress amount (0...1)   

<endpoint module="luxe: ui/progress.control" class="UIProgress" signature="get_progress(control : Control)"></endpoint>
<h4 class="signature_head">UIProgress.get_progress</h4><a class="signature-arity" href="#UIProgress.get_progress" title="Permanent link">1</a><signature id="UIProgress.get_progress">

```lx
UIProgress.get_progress(control : Control) : Num
```
</signature>

> Get the progress amount (0...1)   

