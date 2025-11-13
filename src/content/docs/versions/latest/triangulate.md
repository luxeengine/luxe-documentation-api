---
title: "luxe: triangulate"
description: API version 2025.11.1
---
## `luxe: triangulate{:lx}` module

- [Triangulate](#triangulate)   

---


### Triangulate
`import "luxe: triangulate" for Triangulate{:lx}`
> no docs found

- [get_svg](#Triangulate.get_svg+4)(**file_contents**: `String{:lx}`, **units**: `String{:lx}`, **dpi**: `Num{:lx}`, **tolerance**: `Num{:lx}`)
- [svg_to_image](#Triangulate.svg_to_image+5)(**file_contents**: `String{:lx}`, **units**: `String{:lx}`, **dpi**: `Num{:lx}`, **width**: `Num{:lx}`, **height**: `Num{:lx}`)
- [svg_to_geometry](#Triangulate.svg_to_geometry+6)(**file_contents**: `String{:lx}`, **units**: `String{:lx}`, **dpi**: `Num{:lx}`, **resolution**: `Num{:lx}`, **limit**: `Num{:lx}`, **basis**: `String{:lx}`)
- [svg_to_geometry](#Triangulate.svg_to_geometry+5)(**file_contents**: `String{:lx}`, **units**: `String{:lx}`, **dpi**: `Num{:lx}`, **resolution**: `Num{:lx}`, **limit**: `Num{:lx}`)
- [points](#Triangulate.points)(**points**: `List{:lx}`)
- [polys](#Triangulate.polys+2)(**points**: `List{:lx}`, **edges**: `List{:lx}`)


---

<endpoint module="luxe: triangulate" class="Triangulate" signature="get_svg(file_contents : String, units : String, dpi : Num, tolerance : Num)"></endpoint>
<h4 class="signature_head">Triangulate.get_svg</h4><a class="signature-arity" href="#Triangulate.get_svg+4" title="Permanent link">4</a><signature id="Triangulate.get_svg+4">

```lx
Triangulate.get_svg(file_contents : String, units : String, dpi : Num, tolerance : Num) : List
```
</signature>

> no docs found   

<endpoint module="luxe: triangulate" class="Triangulate" signature="svg_to_image(file_contents : String, units : String, dpi : Num, width : Num, height : Num)"></endpoint>
<h4 class="signature_head">Triangulate.svg_to_image</h4><a class="signature-arity" href="#Triangulate.svg_to_image+5" title="Permanent link">5</a><signature id="Triangulate.svg_to_image+5">

```lx
Triangulate.svg_to_image(file_contents : String, units : String, dpi : Num, width : Num, height : Num) : Image
```
</signature>

> no docs found   

<endpoint module="luxe: triangulate" class="Triangulate" signature="svg_to_geometry(file_contents : String, units : String, dpi : Num, resolution : Num, limit : Num, basis : String)"></endpoint>
<h4 class="signature_head">Triangulate.svg_to_geometry</h4><a class="signature-arity" href="#Triangulate.svg_to_geometry+6" title="Permanent link">6</a><signature id="Triangulate.svg_to_geometry+6">

```lx
Triangulate.svg_to_geometry(file_contents : String, units : String, dpi : Num, resolution : Num, limit : Num, basis : String) : Geometry
```
</signature>

> no docs found   

<endpoint module="luxe: triangulate" class="Triangulate" signature="svg_to_geometry(file_contents : String, units : String, dpi : Num, resolution : Num, limit : Num)"></endpoint>
<h4 class="signature_head">Triangulate.svg_to_geometry</h4><a class="signature-arity" href="#Triangulate.svg_to_geometry+5" title="Permanent link">5</a><signature id="Triangulate.svg_to_geometry+5">

```lx
Triangulate.svg_to_geometry(file_contents : String, units : String, dpi : Num, resolution : Num, limit : Num) : Geometry
```
</signature>

> no docs found   

<endpoint module="luxe: triangulate" class="Triangulate" signature="points(points : List)"></endpoint>
<h4 class="signature_head">Triangulate.points</h4><a class="signature-arity" href="#Triangulate.points" title="Permanent link">1</a><signature id="Triangulate.points">

```lx
Triangulate.points(points : List) : List
```
</signature>

> no docs found   

<endpoint module="luxe: triangulate" class="Triangulate" signature="polys(points : List, edges : List)"></endpoint>
<h4 class="signature_head">Triangulate.polys</h4><a class="signature-arity" href="#Triangulate.polys+2" title="Permanent link">2</a><signature id="Triangulate.polys+2">

```lx
Triangulate.polys(points : List, edges : List) : List
```
</signature>

> no docs found   

