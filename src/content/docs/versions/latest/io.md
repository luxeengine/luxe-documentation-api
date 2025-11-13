---
title: "luxe: io"
description: API version 2025.11.1
---
## `luxe: io{:lx}` module

- [DirNode](#dirnode)   
- [Flags](#flags)   
- [PlotType](#plottype)   
- [ProcFlags](#procflags)   

---


### DirNode
`import "luxe: io" for DirNode{:lx}`
> no docs found

- [path](#DirNode.path)
- [name](#DirNode.name)
- [ext](#DirNode.ext)
- [is_regular](#DirNode.is_regular)
- [is_directory](#DirNode.is_directory)
- [new](#DirNode.new+5)(**in_path**: `Any{:lx}`, **in_name**: `Any{:lx}`, **in_ext**: `Any{:lx}`, **in_is_regular**: `Any{:lx}`, **in_is_directory**: `Any{:lx}`)


---

<endpoint module="luxe: io" class="DirNode" signature="path"></endpoint>
<h4 class="signature_head">DirNode.path</h4><a class="signature-arity" href="#DirNode.path" title="Permanent link">1</a><signature id="DirNode.path">

```lx
DirNode.path : String
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="DirNode" signature="name"></endpoint>
<h4 class="signature_head">DirNode.name</h4><a class="signature-arity" href="#DirNode.name" title="Permanent link">1</a><signature id="DirNode.name">

```lx
DirNode.name : String
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="DirNode" signature="ext"></endpoint>
<h4 class="signature_head">DirNode.ext</h4><a class="signature-arity" href="#DirNode.ext" title="Permanent link">1</a><signature id="DirNode.ext">

```lx
DirNode.ext : String
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="DirNode" signature="is_regular"></endpoint>
<h4 class="signature_head">DirNode.is_regular</h4><a class="signature-arity" href="#DirNode.is_regular" title="Permanent link">1</a><signature id="DirNode.is_regular">

```lx
DirNode.is_regular : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="DirNode" signature="is_directory"></endpoint>
<h4 class="signature_head">DirNode.is_directory</h4><a class="signature-arity" href="#DirNode.is_directory" title="Permanent link">1</a><signature id="DirNode.is_directory">

```lx
DirNode.is_directory : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="DirNode" signature="new(in_path : Any, in_name : Any, in_ext : Any, in_is_regular : Any, in_is_directory : Any)"></endpoint>
<h4 class="signature_head">DirNode.new</h4><a class="signature-arity" href="#DirNode.new+5" title="Permanent link">5</a><signature id="DirNode.new+5">

```lx
DirNode.new(in_path : Any, in_name : Any, in_ext : Any, in_is_regular : Any, in_is_directory : Any) : DirNode
```
</signature>

> no docs found   


### Flags
`import "luxe: io" for Flags{:lx}`
> no docs found

- [new](#Flags.new)(**args**: `Any{:lx}`)
- [all](#Flags.all)()
- [has](#Flags.has)(**flag**: `Any{:lx}`)
- [value](#Flags.value)(**flag**: `Any{:lx}`)
- [value](#Flags.value+2)(**flag**: `Any{:lx}`, **require**: `Any{:lx}`)
- [values](#Flags.values)(**flag**: `Any{:lx}`)
- [values](#Flags.values+2)(**flag**: `Any{:lx}`, **require**: `Any{:lx}`)


---

<endpoint module="luxe: io" class="Flags" signature="new(args : Any)"></endpoint>
<h4 class="signature_head">Flags.new</h4><a class="signature-arity" href="#Flags.new" title="Permanent link">1</a><signature id="Flags.new">

```lx
Flags.new(args : Any) : Flags
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="Flags" signature="all()"></endpoint>
<h4 class="signature_head">Flags.all</h4><a class="signature-arity" href="#Flags.all" title="Permanent link">1</a><signature id="Flags.all">

```lx
Flags.all() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="Flags" signature="has(flag : Any)"></endpoint>
<h4 class="signature_head">Flags.has</h4><a class="signature-arity" href="#Flags.has" title="Permanent link">1</a><signature id="Flags.has">

```lx
Flags.has(flag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="Flags" signature="value(flag : Any)"></endpoint>
<h4 class="signature_head">Flags.value</h4><a class="signature-arity" href="#Flags.value" title="Permanent link">1</a><signature id="Flags.value">

```lx
Flags.value(flag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="Flags" signature="value(flag : Any, require : Any)"></endpoint>
<h4 class="signature_head">Flags.value</h4><a class="signature-arity" href="#Flags.value+2" title="Permanent link">2</a><signature id="Flags.value+2">

```lx
Flags.value(flag : Any, require : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="Flags" signature="values(flag : Any)"></endpoint>
<h4 class="signature_head">Flags.values</h4><a class="signature-arity" href="#Flags.values" title="Permanent link">1</a><signature id="Flags.values">

```lx
Flags.values(flag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="Flags" signature="values(flag : Any, require : Any)"></endpoint>
<h4 class="signature_head">Flags.values</h4><a class="signature-arity" href="#Flags.values+2" title="Permanent link">2</a><signature id="Flags.values+2">

```lx
Flags.values(flag : Any, require : Any) : unknown
```
</signature>

> no docs found   


### PlotType
`import "luxe: io" for PlotType{:lx}`
> no docs found

- [normal](#PlotType.normal)
- [counter](#PlotType.counter)


---

<endpoint module="luxe: io" class="PlotType" signature="normal"></endpoint>
<h4 class="signature_head">PlotType.normal</h4><a class="signature-arity" href="#PlotType.normal" title="Permanent link">1</a><signature id="PlotType.normal">

```lx
PlotType.normal : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="PlotType" signature="counter"></endpoint>
<h4 class="signature_head">PlotType.counter</h4><a class="signature-arity" href="#PlotType.counter" title="Permanent link">1</a><signature id="PlotType.counter">

```lx
PlotType.counter : unknown
```
</signature>

> no docs found   


### ProcFlags
`import "luxe: io" for ProcFlags{:lx}`
> no docs found

- [none](#ProcFlags.none)
- [setuid](#ProcFlags.setuid)
- [setgid](#ProcFlags.setgid)
- [windows_verbatim_arguments](#ProcFlags.windows_verbatim_arguments)
- [detached](#ProcFlags.detached)
- [windows_hide](#ProcFlags.windows_hide)
- [windows_hide_console](#ProcFlags.windows_hide_console)
- [windows_hide_gui](#ProcFlags.windows_hide_gui)


---

<endpoint module="luxe: io" class="ProcFlags" signature="none"></endpoint>
<h4 class="signature_head">ProcFlags.none</h4><a class="signature-arity" href="#ProcFlags.none" title="Permanent link">1</a><signature id="ProcFlags.none">

```lx
ProcFlags.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="ProcFlags" signature="setuid"></endpoint>
<h4 class="signature_head">ProcFlags.setuid</h4><a class="signature-arity" href="#ProcFlags.setuid" title="Permanent link">1</a><signature id="ProcFlags.setuid">

```lx
ProcFlags.setuid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="ProcFlags" signature="setgid"></endpoint>
<h4 class="signature_head">ProcFlags.setgid</h4><a class="signature-arity" href="#ProcFlags.setgid" title="Permanent link">1</a><signature id="ProcFlags.setgid">

```lx
ProcFlags.setgid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="ProcFlags" signature="windows_verbatim_arguments"></endpoint>
<h4 class="signature_head">ProcFlags.windows_verbatim_arguments</h4><a class="signature-arity" href="#ProcFlags.windows_verbatim_arguments" title="Permanent link">1</a><signature id="ProcFlags.windows_verbatim_arguments">

```lx
ProcFlags.windows_verbatim_arguments : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="ProcFlags" signature="detached"></endpoint>
<h4 class="signature_head">ProcFlags.detached</h4><a class="signature-arity" href="#ProcFlags.detached" title="Permanent link">1</a><signature id="ProcFlags.detached">

```lx
ProcFlags.detached : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="ProcFlags" signature="windows_hide"></endpoint>
<h4 class="signature_head">ProcFlags.windows_hide</h4><a class="signature-arity" href="#ProcFlags.windows_hide" title="Permanent link">1</a><signature id="ProcFlags.windows_hide">

```lx
ProcFlags.windows_hide : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="ProcFlags" signature="windows_hide_console"></endpoint>
<h4 class="signature_head">ProcFlags.windows_hide_console</h4><a class="signature-arity" href="#ProcFlags.windows_hide_console" title="Permanent link">1</a><signature id="ProcFlags.windows_hide_console">

```lx
ProcFlags.windows_hide_console : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: io" class="ProcFlags" signature="windows_hide_gui"></endpoint>
<h4 class="signature_head">ProcFlags.windows_hide_gui</h4><a class="signature-arity" href="#ProcFlags.windows_hide_gui" title="Permanent link">1</a><signature id="ProcFlags.windows_hide_gui">

```lx
ProcFlags.windows_hide_gui : unknown
```
</signature>

> no docs found   

