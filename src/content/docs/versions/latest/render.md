---
title: "luxe: render"
description: API version 2025.11.1
---
## `luxe: render{:lx}` module

- [Atlas](#atlas)   
- [BlendFactor](#blendfactor)   
- [BlendOperation](#blendoperation)   
- [Clip](#clip)   
- [ColorWriteMask](#colorwritemask)   
- [CompareFunction](#comparefunction)   
- [ComputeLayerDesc](#computelayerdesc)   
- [ComputeLayerInput](#computelayerinput)   
- [CullMode](#cullmode)   
- [Geometry](#geometry)   
- [Image](#image)   
- [ImageDesc](#imagedesc)   
- [ImageType](#imagetype)   
- [ImageUsage](#imageusage)   
- [IndexType](#indextype)   
- [InputBuffer](#inputbuffer)   
- [LayerCompute](#layercompute)   
- [LayerPass](#layerpass)   
- [LoadAction](#loadaction)   
- [Material](#material)   
- [MaterialDesc](#materialdesc)   
- [MaterialFunction](#materialfunction)   
- [MaterialInput](#materialinput)   
- [MaterialInputBlock](#materialinputblock)   
- [MaterialInputImage](#materialinputimage)   
- [MaterialInputType](#materialinputtype)   
- [MaterialReplace](#materialreplace)   
- [PassLayerDesc](#passlayerdesc)   
- [PixelFormat](#pixelformat)   
- [Pose](#pose)   
- [PoseGraph](#posegraph)   
- [PoseNode](#posenode)   
- [Primitive](#primitive)   
- [Render](#render)   
- [RenderDest](#renderdest)   
- [RenderDestColor](#renderdestcolor)   
- [RenderDestDepth](#renderdestdepth)   
- [RenderDestStencil](#renderdeststencil)   
- [RenderLayerDesc](#renderlayerdesc)   
- [RenderPathContext](#renderpathcontext)   
- [RenderViewDesc](#renderviewdesc)   
- [SamplerAddressMode](#sampleraddressmode)   
- [SamplerMinMagFilter](#samplerminmagfilter)   
- [SamplerMipFilter](#samplermipfilter)   
- [SamplerState](#samplerstate)   
- [SortType](#sorttype)   
- [StencilOperation](#stenciloperation)   
- [StoreAction](#storeaction)   
- [TextAlign](#textalign)   
- [TextAttrType](#textattrtype)   
- [TextWrapMode](#textwrapmode)   
- [VertexAttr](#vertexattr)   
- [VertexAttrFormat](#vertexattrformat)   
- [VertexFormat](#vertexformat)   
- [VertexInputRate](#vertexinputrate)   
- [VertexLayout](#vertexlayout)   
- [Winding](#winding)   

---


### Atlas
`import "luxe: render" for Atlas{:lx}`
> no docs found

- [create](#Atlas.create+2)(**size**: `Any{:lx}`, **material**: `Any{:lx}`)
- [destroy](#Atlas.destroy)(**atlas**: `Any{:lx}`)
- [valid](#Atlas.valid)(**atlas**: `Any{:lx}`)
- [get_size](#Atlas.get_size)(**atlas**: `Any{:lx}`)
- [get_material](#Atlas.get_material)(**atlas**: `Any{:lx}`)
- [rect_add](#Atlas.rect_add+5)(**atlas**: `Any{:lx}`, **atlas_image_id**: `Any{:lx}`, **frame**: `Any{:lx}`, **rect**: `Any{:lx}`, **rotated**: `Any{:lx}`)
- [rect_remove](#Atlas.rect_remove+2)(**atlas**: `Any{:lx}`, **atlas_image_id**: `Any{:lx}`)
- [rect_get_frame](#Atlas.rect_get_frame+2)(**atlas**: `Any{:lx}`, **atlas_image**: `Any{:lx}`)
- [rect_get_rect](#Atlas.rect_get_rect+2)(**atlas**: `Any{:lx}`, **atlas_image**: `Any{:lx}`)
- [rect_get_rotated](#Atlas.rect_get_rotated+2)(**atlas**: `Any{:lx}`, **atlas_image**: `Any{:lx}`)
- [rect_exists](#Atlas.rect_exists+2)(**atlas**: `Any{:lx}`, **atlas_image**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="Atlas" signature="create(size : Any, material : Any)"></endpoint>
<h4 class="signature_head">Atlas.create</h4><a class="signature-arity" href="#Atlas.create+2" title="Permanent link">2</a><signature id="Atlas.create+2">

```lx
Atlas.create(size : Any, material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="destroy(atlas : Any)"></endpoint>
<h4 class="signature_head">Atlas.destroy</h4><a class="signature-arity" href="#Atlas.destroy" title="Permanent link">1</a><signature id="Atlas.destroy">

```lx
Atlas.destroy(atlas : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="valid(atlas : Any)"></endpoint>
<h4 class="signature_head">Atlas.valid</h4><a class="signature-arity" href="#Atlas.valid" title="Permanent link">1</a><signature id="Atlas.valid">

```lx
Atlas.valid(atlas : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="get_size(atlas : Any)"></endpoint>
<h4 class="signature_head">Atlas.get_size</h4><a class="signature-arity" href="#Atlas.get_size" title="Permanent link">1</a><signature id="Atlas.get_size">

```lx
Atlas.get_size(atlas : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="get_material(atlas : Any)"></endpoint>
<h4 class="signature_head">Atlas.get_material</h4><a class="signature-arity" href="#Atlas.get_material" title="Permanent link">1</a><signature id="Atlas.get_material">

```lx
Atlas.get_material(atlas : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_add(atlas : Any, atlas_image_id : Any, frame : Any, rect : Any, rotated : Any)"></endpoint>
<h4 class="signature_head">Atlas.rect_add</h4><a class="signature-arity" href="#Atlas.rect_add+5" title="Permanent link">5</a><signature id="Atlas.rect_add+5">

```lx
Atlas.rect_add(atlas : Any, atlas_image_id : Any, frame : Any, rect : Any, rotated : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_remove(atlas : Any, atlas_image_id : Any)"></endpoint>
<h4 class="signature_head">Atlas.rect_remove</h4><a class="signature-arity" href="#Atlas.rect_remove+2" title="Permanent link">2</a><signature id="Atlas.rect_remove+2">

```lx
Atlas.rect_remove(atlas : Any, atlas_image_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_frame(atlas : Any, atlas_image : Any)"></endpoint>
<h4 class="signature_head">Atlas.rect_get_frame</h4><a class="signature-arity" href="#Atlas.rect_get_frame+2" title="Permanent link">2</a><signature id="Atlas.rect_get_frame+2">

```lx
Atlas.rect_get_frame(atlas : Any, atlas_image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_rect(atlas : Any, atlas_image : Any)"></endpoint>
<h4 class="signature_head">Atlas.rect_get_rect</h4><a class="signature-arity" href="#Atlas.rect_get_rect+2" title="Permanent link">2</a><signature id="Atlas.rect_get_rect+2">

```lx
Atlas.rect_get_rect(atlas : Any, atlas_image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_rotated(atlas : Any, atlas_image : Any)"></endpoint>
<h4 class="signature_head">Atlas.rect_get_rotated</h4><a class="signature-arity" href="#Atlas.rect_get_rotated+2" title="Permanent link">2</a><signature id="Atlas.rect_get_rotated+2">

```lx
Atlas.rect_get_rotated(atlas : Any, atlas_image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_exists(atlas : Any, atlas_image : Any)"></endpoint>
<h4 class="signature_head">Atlas.rect_exists</h4><a class="signature-arity" href="#Atlas.rect_exists+2" title="Permanent link">2</a><signature id="Atlas.rect_exists+2">

```lx
Atlas.rect_exists(atlas : Any, atlas_image : Any) : unknown
```
</signature>

> no docs found   


### BlendFactor
`import "luxe: render" for BlendFactor{:lx}`
> no docs found

- [zero](#BlendFactor.zero)
- [one](#BlendFactor.one)
- [source_color](#BlendFactor.source_color)
- [one_minus_source_color](#BlendFactor.one_minus_source_color)
- [source_alpha](#BlendFactor.source_alpha)
- [one_minus_source_alpha](#BlendFactor.one_minus_source_alpha)
- [destination_color](#BlendFactor.destination_color)
- [one_minus_destination_color](#BlendFactor.one_minus_destination_color)
- [destination_alpha](#BlendFactor.destination_alpha)
- [one_minus_destination_alpha](#BlendFactor.one_minus_destination_alpha)
- [source_alpha_saturated](#BlendFactor.source_alpha_saturated)
- [blend_color](#BlendFactor.blend_color)
- [one_minus_blend_color](#BlendFactor.one_minus_blend_color)
- [blend_alpha](#BlendFactor.blend_alpha)
- [one_minus_blend_alpha](#BlendFactor.one_minus_blend_alpha)
- [invalid](#BlendFactor.invalid)
- [from_string](#BlendFactor.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="BlendFactor" signature="zero"></endpoint>
<h4 class="signature_head">BlendFactor.zero</h4><a class="signature-arity" href="#BlendFactor.zero" title="Permanent link">1</a><signature id="BlendFactor.zero">

```lx
BlendFactor.zero : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one"></endpoint>
<h4 class="signature_head">BlendFactor.one</h4><a class="signature-arity" href="#BlendFactor.one" title="Permanent link">1</a><signature id="BlendFactor.one">

```lx
BlendFactor.one : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_color"></endpoint>
<h4 class="signature_head">BlendFactor.source_color</h4><a class="signature-arity" href="#BlendFactor.source_color" title="Permanent link">1</a><signature id="BlendFactor.source_color">

```lx
BlendFactor.source_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_source_color"></endpoint>
<h4 class="signature_head">BlendFactor.one_minus_source_color</h4><a class="signature-arity" href="#BlendFactor.one_minus_source_color" title="Permanent link">1</a><signature id="BlendFactor.one_minus_source_color">

```lx
BlendFactor.one_minus_source_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_alpha"></endpoint>
<h4 class="signature_head">BlendFactor.source_alpha</h4><a class="signature-arity" href="#BlendFactor.source_alpha" title="Permanent link">1</a><signature id="BlendFactor.source_alpha">

```lx
BlendFactor.source_alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_source_alpha"></endpoint>
<h4 class="signature_head">BlendFactor.one_minus_source_alpha</h4><a class="signature-arity" href="#BlendFactor.one_minus_source_alpha" title="Permanent link">1</a><signature id="BlendFactor.one_minus_source_alpha">

```lx
BlendFactor.one_minus_source_alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="destination_color"></endpoint>
<h4 class="signature_head">BlendFactor.destination_color</h4><a class="signature-arity" href="#BlendFactor.destination_color" title="Permanent link">1</a><signature id="BlendFactor.destination_color">

```lx
BlendFactor.destination_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_destination_color"></endpoint>
<h4 class="signature_head">BlendFactor.one_minus_destination_color</h4><a class="signature-arity" href="#BlendFactor.one_minus_destination_color" title="Permanent link">1</a><signature id="BlendFactor.one_minus_destination_color">

```lx
BlendFactor.one_minus_destination_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="destination_alpha"></endpoint>
<h4 class="signature_head">BlendFactor.destination_alpha</h4><a class="signature-arity" href="#BlendFactor.destination_alpha" title="Permanent link">1</a><signature id="BlendFactor.destination_alpha">

```lx
BlendFactor.destination_alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_destination_alpha"></endpoint>
<h4 class="signature_head">BlendFactor.one_minus_destination_alpha</h4><a class="signature-arity" href="#BlendFactor.one_minus_destination_alpha" title="Permanent link">1</a><signature id="BlendFactor.one_minus_destination_alpha">

```lx
BlendFactor.one_minus_destination_alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_alpha_saturated"></endpoint>
<h4 class="signature_head">BlendFactor.source_alpha_saturated</h4><a class="signature-arity" href="#BlendFactor.source_alpha_saturated" title="Permanent link">1</a><signature id="BlendFactor.source_alpha_saturated">

```lx
BlendFactor.source_alpha_saturated : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="blend_color"></endpoint>
<h4 class="signature_head">BlendFactor.blend_color</h4><a class="signature-arity" href="#BlendFactor.blend_color" title="Permanent link">1</a><signature id="BlendFactor.blend_color">

```lx
BlendFactor.blend_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_blend_color"></endpoint>
<h4 class="signature_head">BlendFactor.one_minus_blend_color</h4><a class="signature-arity" href="#BlendFactor.one_minus_blend_color" title="Permanent link">1</a><signature id="BlendFactor.one_minus_blend_color">

```lx
BlendFactor.one_minus_blend_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="blend_alpha"></endpoint>
<h4 class="signature_head">BlendFactor.blend_alpha</h4><a class="signature-arity" href="#BlendFactor.blend_alpha" title="Permanent link">1</a><signature id="BlendFactor.blend_alpha">

```lx
BlendFactor.blend_alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_blend_alpha"></endpoint>
<h4 class="signature_head">BlendFactor.one_minus_blend_alpha</h4><a class="signature-arity" href="#BlendFactor.one_minus_blend_alpha" title="Permanent link">1</a><signature id="BlendFactor.one_minus_blend_alpha">

```lx
BlendFactor.one_minus_blend_alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="invalid"></endpoint>
<h4 class="signature_head">BlendFactor.invalid</h4><a class="signature-arity" href="#BlendFactor.invalid" title="Permanent link">1</a><signature id="BlendFactor.invalid">

```lx
BlendFactor.invalid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">BlendFactor.from_string</h4><a class="signature-arity" href="#BlendFactor.from_string" title="Permanent link">1</a><signature id="BlendFactor.from_string">

```lx
BlendFactor.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### BlendOperation
`import "luxe: render" for BlendOperation{:lx}`
> no docs found

- [add](#BlendOperation.add)
- [subtract](#BlendOperation.subtract)
- [reverse_subtract](#BlendOperation.reverse_subtract)
- [min](#BlendOperation.min)
- [max](#BlendOperation.max)
- [from_string](#BlendOperation.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="BlendOperation" signature="add"></endpoint>
<h4 class="signature_head">BlendOperation.add</h4><a class="signature-arity" href="#BlendOperation.add" title="Permanent link">1</a><signature id="BlendOperation.add">

```lx
BlendOperation.add : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="subtract"></endpoint>
<h4 class="signature_head">BlendOperation.subtract</h4><a class="signature-arity" href="#BlendOperation.subtract" title="Permanent link">1</a><signature id="BlendOperation.subtract">

```lx
BlendOperation.subtract : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="reverse_subtract"></endpoint>
<h4 class="signature_head">BlendOperation.reverse_subtract</h4><a class="signature-arity" href="#BlendOperation.reverse_subtract" title="Permanent link">1</a><signature id="BlendOperation.reverse_subtract">

```lx
BlendOperation.reverse_subtract : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="min"></endpoint>
<h4 class="signature_head">BlendOperation.min</h4><a class="signature-arity" href="#BlendOperation.min" title="Permanent link">1</a><signature id="BlendOperation.min">

```lx
BlendOperation.min : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="max"></endpoint>
<h4 class="signature_head">BlendOperation.max</h4><a class="signature-arity" href="#BlendOperation.max" title="Permanent link">1</a><signature id="BlendOperation.max">

```lx
BlendOperation.max : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">BlendOperation.from_string</h4><a class="signature-arity" href="#BlendOperation.from_string" title="Permanent link">1</a><signature id="BlendOperation.from_string">

```lx
BlendOperation.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### Clip
`import "luxe: render" for Clip{:lx}`
> no docs found

- [get_duration](#Clip.get_duration)(**clip**: `Clip{:lx}`)


---

<endpoint module="luxe: render" class="Clip" signature="get_duration(clip : Clip)"></endpoint>
<h4 class="signature_head">Clip.get_duration</h4><a class="signature-arity" href="#Clip.get_duration" title="Permanent link">1</a><signature id="Clip.get_duration">

```lx
Clip.get_duration(clip : Clip) : Num
```
</signature>

> no docs found   


### ColorWriteMask
`import "luxe: render" for ColorWriteMask{:lx}`
> no docs found

- [none](#ColorWriteMask.none)
- [red](#ColorWriteMask.red)
- [green](#ColorWriteMask.green)
- [blue](#ColorWriteMask.blue)
- [alpha](#ColorWriteMask.alpha)
- [all](#ColorWriteMask.all)
- [invalid](#ColorWriteMask.invalid)
- [from_map](#ColorWriteMask.from_map)(**value**: `Any{:lx}`)
- [from_string](#ColorWriteMask.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="ColorWriteMask" signature="none"></endpoint>
<h4 class="signature_head">ColorWriteMask.none</h4><a class="signature-arity" href="#ColorWriteMask.none" title="Permanent link">1</a><signature id="ColorWriteMask.none">

```lx
ColorWriteMask.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="red"></endpoint>
<h4 class="signature_head">ColorWriteMask.red</h4><a class="signature-arity" href="#ColorWriteMask.red" title="Permanent link">1</a><signature id="ColorWriteMask.red">

```lx
ColorWriteMask.red : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="green"></endpoint>
<h4 class="signature_head">ColorWriteMask.green</h4><a class="signature-arity" href="#ColorWriteMask.green" title="Permanent link">1</a><signature id="ColorWriteMask.green">

```lx
ColorWriteMask.green : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="blue"></endpoint>
<h4 class="signature_head">ColorWriteMask.blue</h4><a class="signature-arity" href="#ColorWriteMask.blue" title="Permanent link">1</a><signature id="ColorWriteMask.blue">

```lx
ColorWriteMask.blue : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="alpha"></endpoint>
<h4 class="signature_head">ColorWriteMask.alpha</h4><a class="signature-arity" href="#ColorWriteMask.alpha" title="Permanent link">1</a><signature id="ColorWriteMask.alpha">

```lx
ColorWriteMask.alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="all"></endpoint>
<h4 class="signature_head">ColorWriteMask.all</h4><a class="signature-arity" href="#ColorWriteMask.all" title="Permanent link">1</a><signature id="ColorWriteMask.all">

```lx
ColorWriteMask.all : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="invalid"></endpoint>
<h4 class="signature_head">ColorWriteMask.invalid</h4><a class="signature-arity" href="#ColorWriteMask.invalid" title="Permanent link">1</a><signature id="ColorWriteMask.invalid">

```lx
ColorWriteMask.invalid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="from_map(value : Any)"></endpoint>
<h4 class="signature_head">ColorWriteMask.from_map</h4><a class="signature-arity" href="#ColorWriteMask.from_map" title="Permanent link">1</a><signature id="ColorWriteMask.from_map">

```lx
ColorWriteMask.from_map(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">ColorWriteMask.from_string</h4><a class="signature-arity" href="#ColorWriteMask.from_string" title="Permanent link">1</a><signature id="ColorWriteMask.from_string">

```lx
ColorWriteMask.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### CompareFunction
`import "luxe: render" for CompareFunction{:lx}`
> no docs found

- [never](#CompareFunction.never)
- [less](#CompareFunction.less)
- [equal](#CompareFunction.equal)
- [less_equal](#CompareFunction.less_equal)
- [greater](#CompareFunction.greater)
- [not_equal](#CompareFunction.not_equal)
- [greater_equal](#CompareFunction.greater_equal)
- [always](#CompareFunction.always)
- [from_string](#CompareFunction.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="CompareFunction" signature="never"></endpoint>
<h4 class="signature_head">CompareFunction.never</h4><a class="signature-arity" href="#CompareFunction.never" title="Permanent link">1</a><signature id="CompareFunction.never">

```lx
CompareFunction.never : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="less"></endpoint>
<h4 class="signature_head">CompareFunction.less</h4><a class="signature-arity" href="#CompareFunction.less" title="Permanent link">1</a><signature id="CompareFunction.less">

```lx
CompareFunction.less : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="equal"></endpoint>
<h4 class="signature_head">CompareFunction.equal</h4><a class="signature-arity" href="#CompareFunction.equal" title="Permanent link">1</a><signature id="CompareFunction.equal">

```lx
CompareFunction.equal : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="less_equal"></endpoint>
<h4 class="signature_head">CompareFunction.less_equal</h4><a class="signature-arity" href="#CompareFunction.less_equal" title="Permanent link">1</a><signature id="CompareFunction.less_equal">

```lx
CompareFunction.less_equal : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="greater"></endpoint>
<h4 class="signature_head">CompareFunction.greater</h4><a class="signature-arity" href="#CompareFunction.greater" title="Permanent link">1</a><signature id="CompareFunction.greater">

```lx
CompareFunction.greater : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="not_equal"></endpoint>
<h4 class="signature_head">CompareFunction.not_equal</h4><a class="signature-arity" href="#CompareFunction.not_equal" title="Permanent link">1</a><signature id="CompareFunction.not_equal">

```lx
CompareFunction.not_equal : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="greater_equal"></endpoint>
<h4 class="signature_head">CompareFunction.greater_equal</h4><a class="signature-arity" href="#CompareFunction.greater_equal" title="Permanent link">1</a><signature id="CompareFunction.greater_equal">

```lx
CompareFunction.greater_equal : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="always"></endpoint>
<h4 class="signature_head">CompareFunction.always</h4><a class="signature-arity" href="#CompareFunction.always" title="Permanent link">1</a><signature id="CompareFunction.always">

```lx
CompareFunction.always : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">CompareFunction.from_string</h4><a class="signature-arity" href="#CompareFunction.from_string" title="Permanent link">1</a><signature id="CompareFunction.from_string">

```lx
CompareFunction.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### ComputeLayerDesc
`import "luxe: render" for ComputeLayerDesc{:lx}`
> no docs found

- [new](#ComputeLayerDesc.new)()
- [display_id](#ComputeLayerDesc.display_id)
- [display_id](#ComputeLayerDesc.display_id=)=(v : String)
- [compute_id](#ComputeLayerDesc.compute_id)
- [compute_id](#ComputeLayerDesc.compute_id=)=(v : String)
- [dimensions](#ComputeLayerDesc.dimensions)
- [inputs](#ComputeLayerDesc.inputs)
- [inputs](#ComputeLayerDesc.inputs=)=(v : List)
- [x](#ComputeLayerDesc.x)
- [x](#ComputeLayerDesc.x=)=(v : Num)
- [y](#ComputeLayerDesc.y)
- [y](#ComputeLayerDesc.y=)=(v : Num)
- [z](#ComputeLayerDesc.z)
- [z](#ComputeLayerDesc.z=)=(v : Num)


---

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="new()"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.new</h4><a class="signature-arity" href="#ComputeLayerDesc.new" title="Permanent link">1</a><signature id="ComputeLayerDesc.new">

```lx
ComputeLayerDesc.new() : ComputeLayerDesc
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="display_id"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.display_id</h4><a class="signature-arity" href="#ComputeLayerDesc.display_id" title="Permanent link">1</a><signature id="ComputeLayerDesc.display_id">

```lx
ComputeLayerDesc.display_id : String
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="display_id=(v : String)"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.display_id</h4><a class="signature-arity" href="#ComputeLayerDesc.display_id=" title="Permanent link">1</a><signature id="ComputeLayerDesc.display_id=">

```lx
ComputeLayerDesc.display_id=(v : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="compute_id"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.compute_id</h4><a class="signature-arity" href="#ComputeLayerDesc.compute_id" title="Permanent link">1</a><signature id="ComputeLayerDesc.compute_id">

```lx
ComputeLayerDesc.compute_id : String
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="compute_id=(v : String)"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.compute_id</h4><a class="signature-arity" href="#ComputeLayerDesc.compute_id=" title="Permanent link">1</a><signature id="ComputeLayerDesc.compute_id=">

```lx
ComputeLayerDesc.compute_id=(v : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="dimensions"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.dimensions</h4><a class="signature-arity" href="#ComputeLayerDesc.dimensions" title="Permanent link">1</a><signature id="ComputeLayerDesc.dimensions">

```lx
ComputeLayerDesc.dimensions : Float3
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="inputs"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.inputs</h4><a class="signature-arity" href="#ComputeLayerDesc.inputs" title="Permanent link">1</a><signature id="ComputeLayerDesc.inputs">

```lx
ComputeLayerDesc.inputs : List
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="inputs=(v : List)"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.inputs</h4><a class="signature-arity" href="#ComputeLayerDesc.inputs=" title="Permanent link">1</a><signature id="ComputeLayerDesc.inputs=">

```lx
ComputeLayerDesc.inputs=(v : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="x"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.x</h4><a class="signature-arity" href="#ComputeLayerDesc.x" title="Permanent link">1</a><signature id="ComputeLayerDesc.x">

```lx
ComputeLayerDesc.x : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="x=(v : Num)"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.x</h4><a class="signature-arity" href="#ComputeLayerDesc.x=" title="Permanent link">1</a><signature id="ComputeLayerDesc.x=">

```lx
ComputeLayerDesc.x=(v : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="y"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.y</h4><a class="signature-arity" href="#ComputeLayerDesc.y" title="Permanent link">1</a><signature id="ComputeLayerDesc.y">

```lx
ComputeLayerDesc.y : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="y=(v : Num)"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.y</h4><a class="signature-arity" href="#ComputeLayerDesc.y=" title="Permanent link">1</a><signature id="ComputeLayerDesc.y=">

```lx
ComputeLayerDesc.y=(v : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="z"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.z</h4><a class="signature-arity" href="#ComputeLayerDesc.z" title="Permanent link">1</a><signature id="ComputeLayerDesc.z">

```lx
ComputeLayerDesc.z : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="z=(v : Num)"></endpoint>
<h4 class="signature_head">ComputeLayerDesc.z</h4><a class="signature-arity" href="#ComputeLayerDesc.z=" title="Permanent link">1</a><signature id="ComputeLayerDesc.z=">

```lx
ComputeLayerDesc.z=(v : Num) : unknown
```
</signature>

> no docs found   


### ComputeLayerInput
`import "luxe: render" for ComputeLayerInput{:lx}`
> no docs found

- [library](#ComputeLayerInput.library)
- [type](#ComputeLayerInput.type)
- [input](#ComputeLayerInput.input)
- [buffer](#ComputeLayerInput.buffer)
- [new](#ComputeLayerInput.new+4)(**library**: `Any{:lx}`, **type**: `String{:lx}`, **input**: `String{:lx}`, **buffer**: `InputBuffer{:lx}`)


---

<endpoint module="luxe: render" class="ComputeLayerInput" signature="library"></endpoint>
<h4 class="signature_head">ComputeLayerInput.library</h4><a class="signature-arity" href="#ComputeLayerInput.library" title="Permanent link">1</a><signature id="ComputeLayerInput.library">

```lx
ComputeLayerInput.library : String
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="type"></endpoint>
<h4 class="signature_head">ComputeLayerInput.type</h4><a class="signature-arity" href="#ComputeLayerInput.type" title="Permanent link">1</a><signature id="ComputeLayerInput.type">

```lx
ComputeLayerInput.type : String
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="input"></endpoint>
<h4 class="signature_head">ComputeLayerInput.input</h4><a class="signature-arity" href="#ComputeLayerInput.input" title="Permanent link">1</a><signature id="ComputeLayerInput.input">

```lx
ComputeLayerInput.input : String
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="buffer"></endpoint>
<h4 class="signature_head">ComputeLayerInput.buffer</h4><a class="signature-arity" href="#ComputeLayerInput.buffer" title="Permanent link">1</a><signature id="ComputeLayerInput.buffer">

```lx
ComputeLayerInput.buffer : InputBuffer
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="new(library : Any, type : String, input : String, buffer : InputBuffer)"></endpoint>
<h4 class="signature_head">ComputeLayerInput.new</h4><a class="signature-arity" href="#ComputeLayerInput.new+4" title="Permanent link">4</a><signature id="ComputeLayerInput.new+4">

```lx
ComputeLayerInput.new(library : Any, type : String, input : String, buffer : InputBuffer) : ComputeLayerInput
```
</signature>

> no docs found   


### CullMode
`import "luxe: render" for CullMode{:lx}`
> no docs found

- [none](#CullMode.none)
- [front](#CullMode.front)
- [back](#CullMode.back)
- [from_string](#CullMode.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="CullMode" signature="none"></endpoint>
<h4 class="signature_head">CullMode.none</h4><a class="signature-arity" href="#CullMode.none" title="Permanent link">1</a><signature id="CullMode.none">

```lx
CullMode.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="front"></endpoint>
<h4 class="signature_head">CullMode.front</h4><a class="signature-arity" href="#CullMode.front" title="Permanent link">1</a><signature id="CullMode.front">

```lx
CullMode.front : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="back"></endpoint>
<h4 class="signature_head">CullMode.back</h4><a class="signature-arity" href="#CullMode.back" title="Permanent link">1</a><signature id="CullMode.back">

```lx
CullMode.back : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">CullMode.from_string</h4><a class="signature-arity" href="#CullMode.from_string" title="Permanent link">1</a><signature id="CullMode.from_string">

```lx
CullMode.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### Geometry
`import "luxe: render" for Geometry{:lx}`
> no docs found

- [create](#Geometry.create+5)(**primitive**: `Any{:lx}`, **material**: `Any{:lx}`, **index_count**: `Any{:lx}`, **index_type**: `Any{:lx}`, **index_buffer**: `Any{:lx}`)
- [create](#Geometry.create+3)(**primitive**: `Any{:lx}`, **material**: `Any{:lx}`, **vert_count**: `Any{:lx}`)
- [destroy](#Geometry.destroy)(**geo**: `Any{:lx}`)
- [valid](#Geometry.valid)(**geo**: `Any{:lx}`)
- [set_world_matrix](#Geometry.set_world_matrix+2)(**geo**: `Any{:lx}`, **world**: `Any{:lx}`)
- [set_vertex_buffer](#Geometry.set_vertex_buffer+3)(**geo**: `Any{:lx}`, **index**: `Any{:lx}`, **vertex_buffer**: `Any{:lx}`)
- [get_vertex_buffer](#Geometry.get_vertex_buffer+2)(**geo**: `Any{:lx}`, **index**: `Any{:lx}`)
- [get_index_buffer](#Geometry.get_index_buffer)(**geo**: `Any{:lx}`)
- [set_instance_count](#Geometry.set_instance_count+2)(**geo**: `Any{:lx}`, **count**: `Any{:lx}`)
- [get_instance_count](#Geometry.get_instance_count)(**geo**: `Any{:lx}`)
- [set_vert_count](#Geometry.set_vert_count+2)(**geo**: `Any{:lx}`, **count**: `Any{:lx}`)
- [set_material](#Geometry.set_material+2)(**geo**: `Any{:lx}`, **material**: `Any{:lx}`)
- [set_stencil_references](#Geometry.set_stencil_references+3)(**geo**: `Any{:lx}`, **back**: `Any{:lx}`, **front**: `Any{:lx}`)
- [set_stencil_reference](#Geometry.set_stencil_reference+2)(**geo**: `Any{:lx}`, **value**: `Any{:lx}`)
- [set_aabb](#Geometry.set_aabb+7)(**geo**: `Any{:lx}`, **center_x**: `Any{:lx}`, **center_y**: `Any{:lx}`, **center_z**: `Any{:lx}`, **radius_x**: `Any{:lx}`, **radius_y**: `Any{:lx}`, **radius_z**: `Any{:lx}`)
- [get_aabb](#Geometry.get_aabb)(**geo**: `Any{:lx}`)
- [get_world_obb](#Geometry.get_world_obb)(**geo**: `Any{:lx}`)
- [get_vert_count](#Geometry.get_vert_count)(**geo**: `Any{:lx}`)
- [get_material](#Geometry.get_material)(**geo**: `Any{:lx}`)
- [obb_intersect_ray](#Geometry.obb_intersect_ray+7)(**geo**: `Any{:lx}`, **ray_x**: `Any{:lx}`, **ray_y**: `Any{:lx}`, **ray_z**: `Any{:lx}`, **ray_dir_x**: `Any{:lx}`, **ray_dir_y**: `Any{:lx}`, **ray_dir_z**: `Any{:lx}`)
- [layer_include_add](#Geometry.layer_include_add+2)(**geo**: `Any{:lx}`, **layer_id**: `Any{:lx}`)
- [layer_include_remove](#Geometry.layer_include_remove+2)(**geo**: `Any{:lx}`, **layer_id**: `Any{:lx}`)
- [layer_exclude_add](#Geometry.layer_exclude_add+2)(**geo**: `Any{:lx}`, **layer_id**: `Any{:lx}`)
- [layer_exclude_remove](#Geometry.layer_exclude_remove+2)(**geo**: `Any{:lx}`, **layer_id**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="Geometry" signature="create(primitive : Any, material : Any, index_count : Any, index_type : Any, index_buffer : Any)"></endpoint>
<h4 class="signature_head">Geometry.create</h4><a class="signature-arity" href="#Geometry.create+5" title="Permanent link">5</a><signature id="Geometry.create+5">

```lx
Geometry.create(primitive : Any, material : Any, index_count : Any, index_type : Any, index_buffer : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="create(primitive : Any, material : Any, vert_count : Any)"></endpoint>
<h4 class="signature_head">Geometry.create</h4><a class="signature-arity" href="#Geometry.create+3" title="Permanent link">3</a><signature id="Geometry.create+3">

```lx
Geometry.create(primitive : Any, material : Any, vert_count : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="destroy(geo : Any)"></endpoint>
<h4 class="signature_head">Geometry.destroy</h4><a class="signature-arity" href="#Geometry.destroy" title="Permanent link">1</a><signature id="Geometry.destroy">

```lx
Geometry.destroy(geo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="valid(geo : Any)"></endpoint>
<h4 class="signature_head">Geometry.valid</h4><a class="signature-arity" href="#Geometry.valid" title="Permanent link">1</a><signature id="Geometry.valid">

```lx
Geometry.valid(geo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_world_matrix(geo : Any, world : Any)"></endpoint>
<h4 class="signature_head">Geometry.set_world_matrix</h4><a class="signature-arity" href="#Geometry.set_world_matrix+2" title="Permanent link">2</a><signature id="Geometry.set_world_matrix+2">

```lx
Geometry.set_world_matrix(geo : Any, world : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_vertex_buffer(geo : Any, index : Any, vertex_buffer : Any)"></endpoint>
<h4 class="signature_head">Geometry.set_vertex_buffer</h4><a class="signature-arity" href="#Geometry.set_vertex_buffer+3" title="Permanent link">3</a><signature id="Geometry.set_vertex_buffer+3">

```lx
Geometry.set_vertex_buffer(geo : Any, index : Any, vertex_buffer : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_vertex_buffer(geo : Any, index : Any)"></endpoint>
<h4 class="signature_head">Geometry.get_vertex_buffer</h4><a class="signature-arity" href="#Geometry.get_vertex_buffer+2" title="Permanent link">2</a><signature id="Geometry.get_vertex_buffer+2">

```lx
Geometry.get_vertex_buffer(geo : Any, index : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_index_buffer(geo : Any)"></endpoint>
<h4 class="signature_head">Geometry.get_index_buffer</h4><a class="signature-arity" href="#Geometry.get_index_buffer" title="Permanent link">1</a><signature id="Geometry.get_index_buffer">

```lx
Geometry.get_index_buffer(geo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_instance_count(geo : Any, count : Any)"></endpoint>
<h4 class="signature_head">Geometry.set_instance_count</h4><a class="signature-arity" href="#Geometry.set_instance_count+2" title="Permanent link">2</a><signature id="Geometry.set_instance_count+2">

```lx
Geometry.set_instance_count(geo : Any, count : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_instance_count(geo : Any)"></endpoint>
<h4 class="signature_head">Geometry.get_instance_count</h4><a class="signature-arity" href="#Geometry.get_instance_count" title="Permanent link">1</a><signature id="Geometry.get_instance_count">

```lx
Geometry.get_instance_count(geo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_vert_count(geo : Any, count : Any)"></endpoint>
<h4 class="signature_head">Geometry.set_vert_count</h4><a class="signature-arity" href="#Geometry.set_vert_count+2" title="Permanent link">2</a><signature id="Geometry.set_vert_count+2">

```lx
Geometry.set_vert_count(geo : Any, count : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_material(geo : Any, material : Any)"></endpoint>
<h4 class="signature_head">Geometry.set_material</h4><a class="signature-arity" href="#Geometry.set_material+2" title="Permanent link">2</a><signature id="Geometry.set_material+2">

```lx
Geometry.set_material(geo : Any, material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_stencil_references(geo : Any, back : Any, front : Any)"></endpoint>
<h4 class="signature_head">Geometry.set_stencil_references</h4><a class="signature-arity" href="#Geometry.set_stencil_references+3" title="Permanent link">3</a><signature id="Geometry.set_stencil_references+3">

```lx
Geometry.set_stencil_references(geo : Any, back : Any, front : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_stencil_reference(geo : Any, value : Any)"></endpoint>
<h4 class="signature_head">Geometry.set_stencil_reference</h4><a class="signature-arity" href="#Geometry.set_stencil_reference+2" title="Permanent link">2</a><signature id="Geometry.set_stencil_reference+2">

```lx
Geometry.set_stencil_reference(geo : Any, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_aabb(geo : Any, center_x : Any, center_y : Any, center_z : Any, radius_x : Any, radius_y : Any, radius_z : Any)"></endpoint>
<h4 class="signature_head">Geometry.set_aabb</h4><a class="signature-arity" href="#Geometry.set_aabb+7" title="Permanent link">7</a><signature id="Geometry.set_aabb+7">

```lx
Geometry.set_aabb(geo : Any, center_x : Any, center_y : Any, center_z : Any, radius_x : Any, radius_y : Any, radius_z : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_aabb(geo : Any)"></endpoint>
<h4 class="signature_head">Geometry.get_aabb</h4><a class="signature-arity" href="#Geometry.get_aabb" title="Permanent link">1</a><signature id="Geometry.get_aabb">

```lx
Geometry.get_aabb(geo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_world_obb(geo : Any)"></endpoint>
<h4 class="signature_head">Geometry.get_world_obb</h4><a class="signature-arity" href="#Geometry.get_world_obb" title="Permanent link">1</a><signature id="Geometry.get_world_obb">

```lx
Geometry.get_world_obb(geo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_vert_count(geo : Any)"></endpoint>
<h4 class="signature_head">Geometry.get_vert_count</h4><a class="signature-arity" href="#Geometry.get_vert_count" title="Permanent link">1</a><signature id="Geometry.get_vert_count">

```lx
Geometry.get_vert_count(geo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_material(geo : Any)"></endpoint>
<h4 class="signature_head">Geometry.get_material</h4><a class="signature-arity" href="#Geometry.get_material" title="Permanent link">1</a><signature id="Geometry.get_material">

```lx
Geometry.get_material(geo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="obb_intersect_ray(geo : Any, ray_x : Any, ray_y : Any, ray_z : Any, ray_dir_x : Any, ray_dir_y : Any, ray_dir_z : Any)"></endpoint>
<h4 class="signature_head">Geometry.obb_intersect_ray</h4><a class="signature-arity" href="#Geometry.obb_intersect_ray+7" title="Permanent link">7</a><signature id="Geometry.obb_intersect_ray+7">

```lx
Geometry.obb_intersect_ray(geo : Any, ray_x : Any, ray_y : Any, ray_z : Any, ray_dir_x : Any, ray_dir_y : Any, ray_dir_z : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_include_add(geo : Any, layer_id : Any)"></endpoint>
<h4 class="signature_head">Geometry.layer_include_add</h4><a class="signature-arity" href="#Geometry.layer_include_add+2" title="Permanent link">2</a><signature id="Geometry.layer_include_add+2">

```lx
Geometry.layer_include_add(geo : Any, layer_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_include_remove(geo : Any, layer_id : Any)"></endpoint>
<h4 class="signature_head">Geometry.layer_include_remove</h4><a class="signature-arity" href="#Geometry.layer_include_remove+2" title="Permanent link">2</a><signature id="Geometry.layer_include_remove+2">

```lx
Geometry.layer_include_remove(geo : Any, layer_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_exclude_add(geo : Any, layer_id : Any)"></endpoint>
<h4 class="signature_head">Geometry.layer_exclude_add</h4><a class="signature-arity" href="#Geometry.layer_exclude_add+2" title="Permanent link">2</a><signature id="Geometry.layer_exclude_add+2">

```lx
Geometry.layer_exclude_add(geo : Any, layer_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_exclude_remove(geo : Any, layer_id : Any)"></endpoint>
<h4 class="signature_head">Geometry.layer_exclude_remove</h4><a class="signature-arity" href="#Geometry.layer_exclude_remove+2" title="Permanent link">2</a><signature id="Geometry.layer_exclude_remove+2">

```lx
Geometry.layer_exclude_remove(geo : Any, layer_id : Any) : unknown
```
</signature>

> no docs found   


### Image
`import "luxe: render" for Image{:lx}`
> no docs found

- [create](#Image.create)(**desc**: `Any{:lx}`)
- [redefine](#Image.redefine+2)(**image**: `Any{:lx}`, **desc**: `Any{:lx}`)
- [destroy](#Image.destroy)(**name**: `Any{:lx}`)
- [valid](#Image.valid)(**name**: `Any{:lx}`)
- [get_resource](#Image.get_resource)(**name**: `Any{:lx}`)
- [generate_mipmaps](#Image.generate_mipmaps)(**image**: `Any{:lx}`)
- [update](#Image.update+8)(**image**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **w**: `Any{:lx}`, **h**: `Any{:lx}`, **level**: `Any{:lx}`, **slice**: `Any{:lx}`, **bytes**: `Any{:lx}`)
- [get_type](#Image.get_type)(**image**: `Any{:lx}`)
- [get_width](#Image.get_width)(**image**: `Any{:lx}`)
- [get_height](#Image.get_height)(**image**: `Any{:lx}`)
- [get_depth](#Image.get_depth)(**image**: `Any{:lx}`)
- [get_pixel_format](#Image.get_pixel_format)(**image**: `Any{:lx}`)
- [get_mipmap_levels](#Image.get_mipmap_levels)(**image**: `Any{:lx}`)
- [get_array_length](#Image.get_array_length)(**image**: `Any{:lx}`)
- [get_sample_count](#Image.get_sample_count)(**image**: `Any{:lx}`)
- [get_bytes](#Image.get_bytes+2)(**image**: `Any{:lx}`, **into_bytes**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="Image" signature="create(desc : Any)"></endpoint>
<h4 class="signature_head">Image.create</h4><a class="signature-arity" href="#Image.create" title="Permanent link">1</a><signature id="Image.create">

```lx
Image.create(desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="redefine(image : Any, desc : Any)"></endpoint>
<h4 class="signature_head">Image.redefine</h4><a class="signature-arity" href="#Image.redefine+2" title="Permanent link">2</a><signature id="Image.redefine+2">

```lx
Image.redefine(image : Any, desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="destroy(name : Any)"></endpoint>
<h4 class="signature_head">Image.destroy</h4><a class="signature-arity" href="#Image.destroy" title="Permanent link">1</a><signature id="Image.destroy">

```lx
Image.destroy(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="valid(name : Any)"></endpoint>
<h4 class="signature_head">Image.valid</h4><a class="signature-arity" href="#Image.valid" title="Permanent link">1</a><signature id="Image.valid">

```lx
Image.valid(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_resource(name : Any)"></endpoint>
<h4 class="signature_head">Image.get_resource</h4><a class="signature-arity" href="#Image.get_resource" title="Permanent link">1</a><signature id="Image.get_resource">

```lx
Image.get_resource(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="generate_mipmaps(image : Any)"></endpoint>
<h4 class="signature_head">Image.generate_mipmaps</h4><a class="signature-arity" href="#Image.generate_mipmaps" title="Permanent link">1</a><signature id="Image.generate_mipmaps">

```lx
Image.generate_mipmaps(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="update(image : Any, x : Any, y : Any, w : Any, h : Any, level : Any, slice : Any, bytes : Any)"></endpoint>
<h4 class="signature_head">Image.update</h4><a class="signature-arity" href="#Image.update+8" title="Permanent link">8</a><signature id="Image.update+8">

```lx
Image.update(image : Any, x : Any, y : Any, w : Any, h : Any, level : Any, slice : Any, bytes : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_type(image : Any)"></endpoint>
<h4 class="signature_head">Image.get_type</h4><a class="signature-arity" href="#Image.get_type" title="Permanent link">1</a><signature id="Image.get_type">

```lx
Image.get_type(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_width(image : Any)"></endpoint>
<h4 class="signature_head">Image.get_width</h4><a class="signature-arity" href="#Image.get_width" title="Permanent link">1</a><signature id="Image.get_width">

```lx
Image.get_width(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_height(image : Any)"></endpoint>
<h4 class="signature_head">Image.get_height</h4><a class="signature-arity" href="#Image.get_height" title="Permanent link">1</a><signature id="Image.get_height">

```lx
Image.get_height(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_depth(image : Any)"></endpoint>
<h4 class="signature_head">Image.get_depth</h4><a class="signature-arity" href="#Image.get_depth" title="Permanent link">1</a><signature id="Image.get_depth">

```lx
Image.get_depth(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_pixel_format(image : Any)"></endpoint>
<h4 class="signature_head">Image.get_pixel_format</h4><a class="signature-arity" href="#Image.get_pixel_format" title="Permanent link">1</a><signature id="Image.get_pixel_format">

```lx
Image.get_pixel_format(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_mipmap_levels(image : Any)"></endpoint>
<h4 class="signature_head">Image.get_mipmap_levels</h4><a class="signature-arity" href="#Image.get_mipmap_levels" title="Permanent link">1</a><signature id="Image.get_mipmap_levels">

```lx
Image.get_mipmap_levels(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_array_length(image : Any)"></endpoint>
<h4 class="signature_head">Image.get_array_length</h4><a class="signature-arity" href="#Image.get_array_length" title="Permanent link">1</a><signature id="Image.get_array_length">

```lx
Image.get_array_length(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_sample_count(image : Any)"></endpoint>
<h4 class="signature_head">Image.get_sample_count</h4><a class="signature-arity" href="#Image.get_sample_count" title="Permanent link">1</a><signature id="Image.get_sample_count">

```lx
Image.get_sample_count(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_bytes(image : Any, into_bytes : Any)"></endpoint>
<h4 class="signature_head">Image.get_bytes</h4><a class="signature-arity" href="#Image.get_bytes+2" title="Permanent link">2</a><signature id="Image.get_bytes+2">

```lx
Image.get_bytes(image : Any, into_bytes : Any) : unknown
```
</signature>

> no docs found   


### ImageDesc
`import "luxe: render" for ImageDesc{:lx}`
> no docs found

- [display_id](#ImageDesc.display_id)
- [display_id](#ImageDesc.display_id=)=(v : Any)
- [type](#ImageDesc.type)
- [type](#ImageDesc.type=)=(v : Any)
- [pixel_format](#ImageDesc.pixel_format)
- [pixel_format](#ImageDesc.pixel_format=)=(v : Any)
- [width](#ImageDesc.width)
- [width](#ImageDesc.width=)=(v : Any)
- [height](#ImageDesc.height)
- [height](#ImageDesc.height=)=(v : Any)
- [depth](#ImageDesc.depth)
- [depth](#ImageDesc.depth=)=(v : Any)
- [mipmap_levels](#ImageDesc.mipmap_levels)
- [mipmap_levels](#ImageDesc.mipmap_levels=)=(v : Any)
- [array_length](#ImageDesc.array_length)
- [array_length](#ImageDesc.array_length=)=(v : Any)
- [sample_count](#ImageDesc.sample_count)
- [sample_count](#ImageDesc.sample_count=)=(v : Any)
- [usage](#ImageDesc.usage)
- [usage](#ImageDesc.usage=)=(v : Any)
- [new](#ImageDesc.new)()


---

<endpoint module="luxe: render" class="ImageDesc" signature="display_id"></endpoint>
<h4 class="signature_head">ImageDesc.display_id</h4><a class="signature-arity" href="#ImageDesc.display_id" title="Permanent link">1</a><signature id="ImageDesc.display_id">

```lx
ImageDesc.display_id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="display_id=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.display_id</h4><a class="signature-arity" href="#ImageDesc.display_id=" title="Permanent link">1</a><signature id="ImageDesc.display_id=">

```lx
ImageDesc.display_id=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="type"></endpoint>
<h4 class="signature_head">ImageDesc.type</h4><a class="signature-arity" href="#ImageDesc.type" title="Permanent link">1</a><signature id="ImageDesc.type">

```lx
ImageDesc.type : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="type=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.type</h4><a class="signature-arity" href="#ImageDesc.type=" title="Permanent link">1</a><signature id="ImageDesc.type=">

```lx
ImageDesc.type=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="pixel_format"></endpoint>
<h4 class="signature_head">ImageDesc.pixel_format</h4><a class="signature-arity" href="#ImageDesc.pixel_format" title="Permanent link">1</a><signature id="ImageDesc.pixel_format">

```lx
ImageDesc.pixel_format : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="pixel_format=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.pixel_format</h4><a class="signature-arity" href="#ImageDesc.pixel_format=" title="Permanent link">1</a><signature id="ImageDesc.pixel_format=">

```lx
ImageDesc.pixel_format=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="width"></endpoint>
<h4 class="signature_head">ImageDesc.width</h4><a class="signature-arity" href="#ImageDesc.width" title="Permanent link">1</a><signature id="ImageDesc.width">

```lx
ImageDesc.width : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="width=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.width</h4><a class="signature-arity" href="#ImageDesc.width=" title="Permanent link">1</a><signature id="ImageDesc.width=">

```lx
ImageDesc.width=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="height"></endpoint>
<h4 class="signature_head">ImageDesc.height</h4><a class="signature-arity" href="#ImageDesc.height" title="Permanent link">1</a><signature id="ImageDesc.height">

```lx
ImageDesc.height : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="height=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.height</h4><a class="signature-arity" href="#ImageDesc.height=" title="Permanent link">1</a><signature id="ImageDesc.height=">

```lx
ImageDesc.height=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="depth"></endpoint>
<h4 class="signature_head">ImageDesc.depth</h4><a class="signature-arity" href="#ImageDesc.depth" title="Permanent link">1</a><signature id="ImageDesc.depth">

```lx
ImageDesc.depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="depth=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.depth</h4><a class="signature-arity" href="#ImageDesc.depth=" title="Permanent link">1</a><signature id="ImageDesc.depth=">

```lx
ImageDesc.depth=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="mipmap_levels"></endpoint>
<h4 class="signature_head">ImageDesc.mipmap_levels</h4><a class="signature-arity" href="#ImageDesc.mipmap_levels" title="Permanent link">1</a><signature id="ImageDesc.mipmap_levels">

```lx
ImageDesc.mipmap_levels : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="mipmap_levels=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.mipmap_levels</h4><a class="signature-arity" href="#ImageDesc.mipmap_levels=" title="Permanent link">1</a><signature id="ImageDesc.mipmap_levels=">

```lx
ImageDesc.mipmap_levels=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="array_length"></endpoint>
<h4 class="signature_head">ImageDesc.array_length</h4><a class="signature-arity" href="#ImageDesc.array_length" title="Permanent link">1</a><signature id="ImageDesc.array_length">

```lx
ImageDesc.array_length : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="array_length=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.array_length</h4><a class="signature-arity" href="#ImageDesc.array_length=" title="Permanent link">1</a><signature id="ImageDesc.array_length=">

```lx
ImageDesc.array_length=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="sample_count"></endpoint>
<h4 class="signature_head">ImageDesc.sample_count</h4><a class="signature-arity" href="#ImageDesc.sample_count" title="Permanent link">1</a><signature id="ImageDesc.sample_count">

```lx
ImageDesc.sample_count : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="sample_count=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.sample_count</h4><a class="signature-arity" href="#ImageDesc.sample_count=" title="Permanent link">1</a><signature id="ImageDesc.sample_count=">

```lx
ImageDesc.sample_count=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="usage"></endpoint>
<h4 class="signature_head">ImageDesc.usage</h4><a class="signature-arity" href="#ImageDesc.usage" title="Permanent link">1</a><signature id="ImageDesc.usage">

```lx
ImageDesc.usage : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="usage=(v : Any)"></endpoint>
<h4 class="signature_head">ImageDesc.usage</h4><a class="signature-arity" href="#ImageDesc.usage=" title="Permanent link">1</a><signature id="ImageDesc.usage=">

```lx
ImageDesc.usage=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="new()"></endpoint>
<h4 class="signature_head">ImageDesc.new</h4><a class="signature-arity" href="#ImageDesc.new" title="Permanent link">1</a><signature id="ImageDesc.new">

```lx
ImageDesc.new() : ImageDesc
```
</signature>

> no docs found   


### ImageType
`import "luxe: render" for ImageType{:lx}`
> no docs found

- [invalid](#ImageType.invalid)
- [image1D](#ImageType.image1D)
- [image1DArray](#ImageType.image1DArray)
- [image2D](#ImageType.image2D)
- [image2DArray](#ImageType.image2DArray)
- [image2DMultisample](#ImageType.image2DMultisample)
- [imageCube](#ImageType.imageCube)
- [imageCubeArray](#ImageType.imageCubeArray)
- [image3D](#ImageType.image3D)
- [from_string](#ImageType.from_string)(**value**: `Any{:lx}`)
- [name](#ImageType.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="ImageType" signature="invalid"></endpoint>
<h4 class="signature_head">ImageType.invalid</h4><a class="signature-arity" href="#ImageType.invalid" title="Permanent link">1</a><signature id="ImageType.invalid">

```lx
ImageType.invalid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image1D"></endpoint>
<h4 class="signature_head">ImageType.image1D</h4><a class="signature-arity" href="#ImageType.image1D" title="Permanent link">1</a><signature id="ImageType.image1D">

```lx
ImageType.image1D : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image1DArray"></endpoint>
<h4 class="signature_head">ImageType.image1DArray</h4><a class="signature-arity" href="#ImageType.image1DArray" title="Permanent link">1</a><signature id="ImageType.image1DArray">

```lx
ImageType.image1DArray : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2D"></endpoint>
<h4 class="signature_head">ImageType.image2D</h4><a class="signature-arity" href="#ImageType.image2D" title="Permanent link">1</a><signature id="ImageType.image2D">

```lx
ImageType.image2D : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2DArray"></endpoint>
<h4 class="signature_head">ImageType.image2DArray</h4><a class="signature-arity" href="#ImageType.image2DArray" title="Permanent link">1</a><signature id="ImageType.image2DArray">

```lx
ImageType.image2DArray : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2DMultisample"></endpoint>
<h4 class="signature_head">ImageType.image2DMultisample</h4><a class="signature-arity" href="#ImageType.image2DMultisample" title="Permanent link">1</a><signature id="ImageType.image2DMultisample">

```lx
ImageType.image2DMultisample : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="imageCube"></endpoint>
<h4 class="signature_head">ImageType.imageCube</h4><a class="signature-arity" href="#ImageType.imageCube" title="Permanent link">1</a><signature id="ImageType.imageCube">

```lx
ImageType.imageCube : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="imageCubeArray"></endpoint>
<h4 class="signature_head">ImageType.imageCubeArray</h4><a class="signature-arity" href="#ImageType.imageCubeArray" title="Permanent link">1</a><signature id="ImageType.imageCubeArray">

```lx
ImageType.imageCubeArray : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image3D"></endpoint>
<h4 class="signature_head">ImageType.image3D</h4><a class="signature-arity" href="#ImageType.image3D" title="Permanent link">1</a><signature id="ImageType.image3D">

```lx
ImageType.image3D : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">ImageType.from_string</h4><a class="signature-arity" href="#ImageType.from_string" title="Permanent link">1</a><signature id="ImageType.from_string">

```lx
ImageType.from_string(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">ImageType.name</h4><a class="signature-arity" href="#ImageType.name" title="Permanent link">1</a><signature id="ImageType.name">

```lx
ImageType.name(value : Any) : unknown
```
</signature>

> no docs found   


### ImageUsage
`import "luxe: render" for ImageUsage{:lx}`
> no docs found

- [unknown](#ImageUsage.unknown)
- [shader_read](#ImageUsage.shader_read)
- [shader_write](#ImageUsage.shader_write)
- [shader_read_write](#ImageUsage.shader_read_write)
- [render_target](#ImageUsage.render_target)
- [pixel_format_view](#ImageUsage.pixel_format_view)
- [stream](#ImageUsage.stream)


---

<endpoint module="luxe: render" class="ImageUsage" signature="unknown"></endpoint>
<h4 class="signature_head">ImageUsage.unknown</h4><a class="signature-arity" href="#ImageUsage.unknown" title="Permanent link">1</a><signature id="ImageUsage.unknown">

```lx
ImageUsage.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_read"></endpoint>
<h4 class="signature_head">ImageUsage.shader_read</h4><a class="signature-arity" href="#ImageUsage.shader_read" title="Permanent link">1</a><signature id="ImageUsage.shader_read">

```lx
ImageUsage.shader_read : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_write"></endpoint>
<h4 class="signature_head">ImageUsage.shader_write</h4><a class="signature-arity" href="#ImageUsage.shader_write" title="Permanent link">1</a><signature id="ImageUsage.shader_write">

```lx
ImageUsage.shader_write : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_read_write"></endpoint>
<h4 class="signature_head">ImageUsage.shader_read_write</h4><a class="signature-arity" href="#ImageUsage.shader_read_write" title="Permanent link">1</a><signature id="ImageUsage.shader_read_write">

```lx
ImageUsage.shader_read_write : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="render_target"></endpoint>
<h4 class="signature_head">ImageUsage.render_target</h4><a class="signature-arity" href="#ImageUsage.render_target" title="Permanent link">1</a><signature id="ImageUsage.render_target">

```lx
ImageUsage.render_target : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="pixel_format_view"></endpoint>
<h4 class="signature_head">ImageUsage.pixel_format_view</h4><a class="signature-arity" href="#ImageUsage.pixel_format_view" title="Permanent link">1</a><signature id="ImageUsage.pixel_format_view">

```lx
ImageUsage.pixel_format_view : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="stream"></endpoint>
<h4 class="signature_head">ImageUsage.stream</h4><a class="signature-arity" href="#ImageUsage.stream" title="Permanent link">1</a><signature id="ImageUsage.stream">

```lx
ImageUsage.stream : unknown
```
</signature>

> no docs found   


### IndexType
`import "luxe: render" for IndexType{:lx}`
> no docs found

- [none](#IndexType.none)
- [u16](#IndexType.u16)
- [u32](#IndexType.u32)
- [size_of](#IndexType.size_of)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="IndexType" signature="none"></endpoint>
<h4 class="signature_head">IndexType.none</h4><a class="signature-arity" href="#IndexType.none" title="Permanent link">1</a><signature id="IndexType.none">

```lx
IndexType.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="u16"></endpoint>
<h4 class="signature_head">IndexType.u16</h4><a class="signature-arity" href="#IndexType.u16" title="Permanent link">1</a><signature id="IndexType.u16">

```lx
IndexType.u16 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="u32"></endpoint>
<h4 class="signature_head">IndexType.u32</h4><a class="signature-arity" href="#IndexType.u32" title="Permanent link">1</a><signature id="IndexType.u32">

```lx
IndexType.u32 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="size_of(value : Any)"></endpoint>
<h4 class="signature_head">IndexType.size_of</h4><a class="signature-arity" href="#IndexType.size_of" title="Permanent link">1</a><signature id="IndexType.size_of">

```lx
IndexType.size_of(value : Any) : unknown
```
</signature>

> no docs found   


### InputBuffer
`import "luxe: render" for InputBuffer{:lx}`
> no docs found

- [create](#InputBuffer.create+4)(**library**: `String{:lx}`, **type**: `String{:lx}`, **input**: `String{:lx}`, **N**: `Num{:lx}`)
- [set](#InputBuffer.set+2)(**buffer**: `InputBuffer{:lx}`, **data**: `String{:lx}`)


---

<endpoint module="luxe: render" class="InputBuffer" signature="create(library : String, type : String, input : String, N : Num)"></endpoint>
<h4 class="signature_head">InputBuffer.create</h4><a class="signature-arity" href="#InputBuffer.create+4" title="Permanent link">4</a><signature id="InputBuffer.create+4">

```lx
InputBuffer.create(library : String, type : String, input : String, N : Num) : InputBuffer
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="InputBuffer" signature="set(buffer : InputBuffer, data : String)"></endpoint>
<h4 class="signature_head">InputBuffer.set</h4><a class="signature-arity" href="#InputBuffer.set+2" title="Permanent link">2</a><signature id="InputBuffer.set+2">

```lx
InputBuffer.set(buffer : InputBuffer, data : String) : unknown
```
</signature>

> no docs found   


### LayerCompute
`import "luxe: render" for LayerCompute{:lx}`
> no docs found

- [id](#LayerCompute.id)
- [id](#LayerCompute.id=)=(v : Any)
- [new](#LayerCompute.new)(**desc**: `ComputeLayerDesc{:lx}`)
- [update](#LayerCompute.update)(**desc**: `ComputeLayerDesc{:lx}`)
- [queue](#LayerCompute.queue)(**path**: `RenderPath{:lx}`)


---

<endpoint module="luxe: render" class="LayerCompute" signature="id"></endpoint>
<h4 class="signature_head">LayerCompute.id</h4><a class="signature-arity" href="#LayerCompute.id" title="Permanent link">1</a><signature id="LayerCompute.id">

```lx
LayerCompute.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="id=(v : Any)"></endpoint>
<h4 class="signature_head">LayerCompute.id</h4><a class="signature-arity" href="#LayerCompute.id=" title="Permanent link">1</a><signature id="LayerCompute.id=">

```lx
LayerCompute.id=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="new(desc : ComputeLayerDesc)"></endpoint>
<h4 class="signature_head">LayerCompute.new</h4><a class="signature-arity" href="#LayerCompute.new" title="Permanent link">1</a><signature id="LayerCompute.new">

```lx
LayerCompute.new(desc : ComputeLayerDesc) : LayerCompute
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="update(desc : ComputeLayerDesc)"></endpoint>
<h4 class="signature_head">LayerCompute.update</h4><a class="signature-arity" href="#LayerCompute.update" title="Permanent link">1</a><signature id="LayerCompute.update">

```lx
LayerCompute.update(desc : ComputeLayerDesc) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="queue(path : RenderPath)"></endpoint>
<h4 class="signature_head">LayerCompute.queue</h4><a class="signature-arity" href="#LayerCompute.queue" title="Permanent link">1</a><signature id="LayerCompute.queue">

```lx
LayerCompute.queue(path : RenderPath) : unknown
```
</signature>

> no docs found   


### LayerPass
`import "luxe: render" for LayerPass{:lx}`
> no docs found

- [id](#LayerPass.id)
- [id](#LayerPass.id=)=(v : Any)
- [new](#LayerPass.new)(**pass**: `Any{:lx}`)
- [queue](#LayerPass.queue)(**path**: `Any{:lx}`)
- [new](#LayerPass.new+2)(**path**: `Any{:lx}`, **pass**: `Any{:lx}`)
- [create_dest](#LayerPass.create_dest)(**pass**: `Any{:lx}`)
- [update_material](#LayerPass.update_material)(**desc**: `Any{:lx}`)
- [create_material](#LayerPass.create_material)(**pass**: `PassLayerDesc{:lx}`)


---

<endpoint module="luxe: render" class="LayerPass" signature="id"></endpoint>
<h4 class="signature_head">LayerPass.id</h4><a class="signature-arity" href="#LayerPass.id" title="Permanent link">1</a><signature id="LayerPass.id">

```lx
LayerPass.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="id=(v : Any)"></endpoint>
<h4 class="signature_head">LayerPass.id</h4><a class="signature-arity" href="#LayerPass.id=" title="Permanent link">1</a><signature id="LayerPass.id=">

```lx
LayerPass.id=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="new(pass : Any)"></endpoint>
<h4 class="signature_head">LayerPass.new</h4><a class="signature-arity" href="#LayerPass.new" title="Permanent link">1</a><signature id="LayerPass.new">

```lx
LayerPass.new(pass : Any) : LayerPass
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="queue(path : Any)"></endpoint>
<h4 class="signature_head">LayerPass.queue</h4><a class="signature-arity" href="#LayerPass.queue" title="Permanent link">1</a><signature id="LayerPass.queue">

```lx
LayerPass.queue(path : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="new(path : Any, pass : Any)"></endpoint>
<h4 class="signature_head">LayerPass.new</h4><a class="signature-arity" href="#LayerPass.new+2" title="Permanent link">2</a><signature id="LayerPass.new+2">

```lx
LayerPass.new(path : Any, pass : Any) : LayerPass
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="create_dest(pass : Any)"></endpoint>
<h4 class="signature_head">LayerPass.create_dest</h4><a class="signature-arity" href="#LayerPass.create_dest" title="Permanent link">1</a><signature id="LayerPass.create_dest">

```lx
LayerPass.create_dest(pass : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="update_material(desc : Any)"></endpoint>
<h4 class="signature_head">LayerPass.update_material</h4><a class="signature-arity" href="#LayerPass.update_material" title="Permanent link">1</a><signature id="LayerPass.update_material">

```lx
LayerPass.update_material(desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="create_material(pass : PassLayerDesc)"></endpoint>
<h4 class="signature_head">LayerPass.create_material</h4><a class="signature-arity" href="#LayerPass.create_material" title="Permanent link">1</a><signature id="LayerPass.create_material">

```lx
LayerPass.create_material(pass : PassLayerDesc) : unknown
```
</signature>

> no docs found   


### LoadAction
`import "luxe: render" for LoadAction{:lx}`
> no docs found

- [dont_care](#LoadAction.dont_care)
- [load](#LoadAction.load)
- [clear](#LoadAction.clear)


---

<endpoint module="luxe: render" class="LoadAction" signature="dont_care"></endpoint>
<h4 class="signature_head">LoadAction.dont_care</h4><a class="signature-arity" href="#LoadAction.dont_care" title="Permanent link">1</a><signature id="LoadAction.dont_care">

```lx
LoadAction.dont_care : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LoadAction" signature="load"></endpoint>
<h4 class="signature_head">LoadAction.load</h4><a class="signature-arity" href="#LoadAction.load" title="Permanent link">1</a><signature id="LoadAction.load">

```lx
LoadAction.load : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="LoadAction" signature="clear"></endpoint>
<h4 class="signature_head">LoadAction.clear</h4><a class="signature-arity" href="#LoadAction.clear" title="Permanent link">1</a><signature id="LoadAction.clear">

```lx
LoadAction.clear : unknown
```
</signature>

> no docs found   


### Material
`import "luxe: render" for Material{:lx}`
> no docs found

- [create](#Material.create)(**basis_type**: `Any{:lx}`)
- [clone](#Material.clone)(**material**: `Any{:lx}`)
- [destroy](#Material.destroy)(**material**: `Any{:lx}`)
- [valid](#Material.valid)(**material**: `Any{:lx}`)
- [undefine](#Material.undefine)(**name**: `Any{:lx}`)
- [get_source_id](#Material.get_source_id)(**material**: `Any{:lx}`)
- [set_source_id](#Material.set_source_id+2)(**material**: `Any{:lx}`, **source_id**: `Any{:lx}`)
- [set_stencil_references](#Material.set_stencil_references+3)(**material**: `Any{:lx}`, **back**: `Any{:lx}`, **front**: `Any{:lx}`)
- [set_stencil_reference](#Material.set_stencil_reference+2)(**material**: `Any{:lx}`, **value**: `Any{:lx}`)
- [get_input_list](#Material.get_input_list)(**material**: `Any{:lx}`)
- [get_input_image](#Material.get_input_image+2)(**material**: `Any{:lx}`, **name**: `Any{:lx}`)
- [has_input](#Material.has_input+2)(**material**: `Any{:lx}`, **name**: `Any{:lx}`)
- [get_input_type](#Material.get_input_type+2)(**material**: `Any{:lx}`, **name**: `Any{:lx}`)
- [is_input_array](#Material.is_input_array+2)(**material**: `Any{:lx}`, **name**: `Any{:lx}`)
- [set_input](#Material.set_input+3)(**material**: `Any{:lx}`, **name**: `Any{:lx}`, **value**: `Any{:lx}`)
- [define](#Material.define+2)(**name**: `Any{:lx}`, **desc**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="Material" signature="create(basis_type : Any)"></endpoint>
<h4 class="signature_head">Material.create</h4><a class="signature-arity" href="#Material.create" title="Permanent link">1</a><signature id="Material.create">

```lx
Material.create(basis_type : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="clone(material : Any)"></endpoint>
<h4 class="signature_head">Material.clone</h4><a class="signature-arity" href="#Material.clone" title="Permanent link">1</a><signature id="Material.clone">

```lx
Material.clone(material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="destroy(material : Any)"></endpoint>
<h4 class="signature_head">Material.destroy</h4><a class="signature-arity" href="#Material.destroy" title="Permanent link">1</a><signature id="Material.destroy">

```lx
Material.destroy(material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="valid(material : Any)"></endpoint>
<h4 class="signature_head">Material.valid</h4><a class="signature-arity" href="#Material.valid" title="Permanent link">1</a><signature id="Material.valid">

```lx
Material.valid(material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="undefine(name : Any)"></endpoint>
<h4 class="signature_head">Material.undefine</h4><a class="signature-arity" href="#Material.undefine" title="Permanent link">1</a><signature id="Material.undefine">

```lx
Material.undefine(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_source_id(material : Any)"></endpoint>
<h4 class="signature_head">Material.get_source_id</h4><a class="signature-arity" href="#Material.get_source_id" title="Permanent link">1</a><signature id="Material.get_source_id">

```lx
Material.get_source_id(material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_source_id(material : Any, source_id : Any)"></endpoint>
<h4 class="signature_head">Material.set_source_id</h4><a class="signature-arity" href="#Material.set_source_id+2" title="Permanent link">2</a><signature id="Material.set_source_id+2">

```lx
Material.set_source_id(material : Any, source_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_stencil_references(material : Any, back : Any, front : Any)"></endpoint>
<h4 class="signature_head">Material.set_stencil_references</h4><a class="signature-arity" href="#Material.set_stencil_references+3" title="Permanent link">3</a><signature id="Material.set_stencil_references+3">

```lx
Material.set_stencil_references(material : Any, back : Any, front : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_stencil_reference(material : Any, value : Any)"></endpoint>
<h4 class="signature_head">Material.set_stencil_reference</h4><a class="signature-arity" href="#Material.set_stencil_reference+2" title="Permanent link">2</a><signature id="Material.set_stencil_reference+2">

```lx
Material.set_stencil_reference(material : Any, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_list(material : Any)"></endpoint>
<h4 class="signature_head">Material.get_input_list</h4><a class="signature-arity" href="#Material.get_input_list" title="Permanent link">1</a><signature id="Material.get_input_list">

```lx
Material.get_input_list(material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_image(material : Any, name : Any)"></endpoint>
<h4 class="signature_head">Material.get_input_image</h4><a class="signature-arity" href="#Material.get_input_image+2" title="Permanent link">2</a><signature id="Material.get_input_image+2">

```lx
Material.get_input_image(material : Any, name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="has_input(material : Any, name : Any)"></endpoint>
<h4 class="signature_head">Material.has_input</h4><a class="signature-arity" href="#Material.has_input+2" title="Permanent link">2</a><signature id="Material.has_input+2">

```lx
Material.has_input(material : Any, name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_type(material : Any, name : Any)"></endpoint>
<h4 class="signature_head">Material.get_input_type</h4><a class="signature-arity" href="#Material.get_input_type+2" title="Permanent link">2</a><signature id="Material.get_input_type+2">

```lx
Material.get_input_type(material : Any, name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="is_input_array(material : Any, name : Any)"></endpoint>
<h4 class="signature_head">Material.is_input_array</h4><a class="signature-arity" href="#Material.is_input_array+2" title="Permanent link">2</a><signature id="Material.is_input_array+2">

```lx
Material.is_input_array(material : Any, name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_input(material : Any, name : Any, value : Any)"></endpoint>
<h4 class="signature_head">Material.set_input</h4><a class="signature-arity" href="#Material.set_input+3" title="Permanent link">3</a><signature id="Material.set_input+3">

```lx
Material.set_input(material : Any, name : Any, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Material" signature="define(name : Any, desc : Any)"></endpoint>
<h4 class="signature_head">Material.define</h4><a class="signature-arity" href="#Material.define+2" title="Permanent link">2</a><signature id="Material.define+2">

```lx
Material.define(name : Any, desc : Any) : unknown
```
</signature>

> no docs found   


### MaterialDesc
`import "luxe: render" for MaterialDesc{:lx}`
> no docs found

- `var pass_usage : List = null{:lx}`
- [new](#MaterialDesc.new)()
- [vertex_format](#MaterialDesc.vertex_format)
- [vertex_format](#MaterialDesc.vertex_format=)=(v : Any)
- [vertex](#MaterialDesc.vertex)
- [vertex](#MaterialDesc.vertex=)=(v : Any)
- [fragment](#MaterialDesc.fragment)
- [fragment](#MaterialDesc.fragment=)=(v : Any)
- [geometry](#MaterialDesc.geometry)
- [geometry](#MaterialDesc.geometry=)=(v : Any)
- [depth_bias_enabled](#MaterialDesc.depth_bias_enabled)
- [depth_bias_enabled](#MaterialDesc.depth_bias_enabled=)=(v : Any)
- [depth_bias](#MaterialDesc.depth_bias)
- [depth_bias](#MaterialDesc.depth_bias=)=(v : Any)
- [depth_bias_slope_scale](#MaterialDesc.depth_bias_slope_scale)
- [depth_bias_slope_scale](#MaterialDesc.depth_bias_slope_scale=)=(v : Any)
- [depth_test](#MaterialDesc.depth_test)
- [depth_test](#MaterialDesc.depth_test=)=(v : Any)
- [depth_write](#MaterialDesc.depth_write)
- [depth_write](#MaterialDesc.depth_write=)=(v : Any)
- [depth_compare](#MaterialDesc.depth_compare)
- [depth_compare](#MaterialDesc.depth_compare=)=(v : Any)
- [stencil_test](#MaterialDesc.stencil_test)
- [stencil_test](#MaterialDesc.stencil_test=)=(v : Any)
- [write_mask](#MaterialDesc.write_mask)
- [write_mask](#MaterialDesc.write_mask=)=(v : Any)
- [blending](#MaterialDesc.blending)
- [blending](#MaterialDesc.blending=)=(v : Any)
- [alpha_blend](#MaterialDesc.alpha_blend)
- [alpha_blend](#MaterialDesc.alpha_blend=)=(v : Any)
- [rgb_blend](#MaterialDesc.rgb_blend)
- [rgb_blend](#MaterialDesc.rgb_blend=)=(v : Any)
- [src_alpha](#MaterialDesc.src_alpha)
- [src_alpha](#MaterialDesc.src_alpha=)=(v : Any)
- [src_rgb](#MaterialDesc.src_rgb)
- [src_rgb](#MaterialDesc.src_rgb=)=(v : Any)
- [dest_alpha](#MaterialDesc.dest_alpha)
- [dest_alpha](#MaterialDesc.dest_alpha=)=(v : Any)
- [dest_rgb](#MaterialDesc.dest_rgb)
- [dest_rgb](#MaterialDesc.dest_rgb=)=(v : Any)
- [blend_color](#MaterialDesc.blend_color)
- [blend_color](#MaterialDesc.blend_color=)=(v : Any)
- [cull](#MaterialDesc.cull)
- [cull](#MaterialDesc.cull=)=(v : Any)
- [winding](#MaterialDesc.winding)
- [winding](#MaterialDesc.winding=)=(v : Any)
- [layers](#MaterialDesc.layers)
- [layers](#MaterialDesc.layers=)=(v : Any)
- [inputs](#MaterialDesc.inputs)
- [inputs](#MaterialDesc.inputs=)=(v : Any)
- [blocks](#MaterialDesc.blocks)
- [blocks](#MaterialDesc.blocks=)=(v : Any)
- [replace](#MaterialDesc.replace)
- [replace](#MaterialDesc.replace=)=(v : Any)
- [stencil_back_failure_stencil](#MaterialDesc.stencil_back_failure_stencil)
- [stencil_back_failure_stencil](#MaterialDesc.stencil_back_failure_stencil=)=(v : Any)
- [stencil_back_failure_depth](#MaterialDesc.stencil_back_failure_depth)
- [stencil_back_failure_depth](#MaterialDesc.stencil_back_failure_depth=)=(v : Any)
- [stencil_back_pass_depth_stencil](#MaterialDesc.stencil_back_pass_depth_stencil)
- [stencil_back_pass_depth_stencil](#MaterialDesc.stencil_back_pass_depth_stencil=)=(v : Any)
- [stencil_back_compare](#MaterialDesc.stencil_back_compare)
- [stencil_back_compare](#MaterialDesc.stencil_back_compare=)=(v : Any)
- [stencil_back_mask_read](#MaterialDesc.stencil_back_mask_read)
- [stencil_back_mask_read](#MaterialDesc.stencil_back_mask_read=)=(v : Any)
- [stencil_back_mask_write](#MaterialDesc.stencil_back_mask_write)
- [stencil_back_mask_write](#MaterialDesc.stencil_back_mask_write=)=(v : Any)
- [stencil_back_reference](#MaterialDesc.stencil_back_reference)
- [stencil_back_reference](#MaterialDesc.stencil_back_reference=)=(v : Any)
- [stencil_front_failure_stencil](#MaterialDesc.stencil_front_failure_stencil)
- [stencil_front_failure_stencil](#MaterialDesc.stencil_front_failure_stencil=)=(v : Any)
- [stencil_front_failure_depth](#MaterialDesc.stencil_front_failure_depth)
- [stencil_front_failure_depth](#MaterialDesc.stencil_front_failure_depth=)=(v : Any)
- [stencil_front_pass_depth_stencil](#MaterialDesc.stencil_front_pass_depth_stencil)
- [stencil_front_pass_depth_stencil](#MaterialDesc.stencil_front_pass_depth_stencil=)=(v : Any)
- [stencil_front_compare](#MaterialDesc.stencil_front_compare)
- [stencil_front_compare](#MaterialDesc.stencil_front_compare=)=(v : Any)
- [stencil_front_mask_read](#MaterialDesc.stencil_front_mask_read)
- [stencil_front_mask_read](#MaterialDesc.stencil_front_mask_read=)=(v : Any)
- [stencil_front_mask_write](#MaterialDesc.stencil_front_mask_write)
- [stencil_front_mask_write](#MaterialDesc.stencil_front_mask_write=)=(v : Any)
- [stencil_front_reference](#MaterialDesc.stencil_front_reference)
- [stencil_front_reference](#MaterialDesc.stencil_front_reference=)=(v : Any)


---

<endpoint module="luxe: render" class="MaterialDesc" signature="new()"></endpoint>
<h4 class="signature_head">MaterialDesc.new</h4><a class="signature-arity" href="#MaterialDesc.new" title="Permanent link">1</a><signature id="MaterialDesc.new">

```lx
MaterialDesc.new() : MaterialDesc
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex_format"></endpoint>
<h4 class="signature_head">MaterialDesc.vertex_format</h4><a class="signature-arity" href="#MaterialDesc.vertex_format" title="Permanent link">1</a><signature id="MaterialDesc.vertex_format">

```lx
MaterialDesc.vertex_format : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex_format=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.vertex_format</h4><a class="signature-arity" href="#MaterialDesc.vertex_format=" title="Permanent link">1</a><signature id="MaterialDesc.vertex_format=">

```lx
MaterialDesc.vertex_format=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex"></endpoint>
<h4 class="signature_head">MaterialDesc.vertex</h4><a class="signature-arity" href="#MaterialDesc.vertex" title="Permanent link">1</a><signature id="MaterialDesc.vertex">

```lx
MaterialDesc.vertex : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.vertex</h4><a class="signature-arity" href="#MaterialDesc.vertex=" title="Permanent link">1</a><signature id="MaterialDesc.vertex=">

```lx
MaterialDesc.vertex=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="fragment"></endpoint>
<h4 class="signature_head">MaterialDesc.fragment</h4><a class="signature-arity" href="#MaterialDesc.fragment" title="Permanent link">1</a><signature id="MaterialDesc.fragment">

```lx
MaterialDesc.fragment : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="fragment=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.fragment</h4><a class="signature-arity" href="#MaterialDesc.fragment=" title="Permanent link">1</a><signature id="MaterialDesc.fragment=">

```lx
MaterialDesc.fragment=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="geometry"></endpoint>
<h4 class="signature_head">MaterialDesc.geometry</h4><a class="signature-arity" href="#MaterialDesc.geometry" title="Permanent link">1</a><signature id="MaterialDesc.geometry">

```lx
MaterialDesc.geometry : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="geometry=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.geometry</h4><a class="signature-arity" href="#MaterialDesc.geometry=" title="Permanent link">1</a><signature id="MaterialDesc.geometry=">

```lx
MaterialDesc.geometry=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_enabled"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_bias_enabled</h4><a class="signature-arity" href="#MaterialDesc.depth_bias_enabled" title="Permanent link">1</a><signature id="MaterialDesc.depth_bias_enabled">

```lx
MaterialDesc.depth_bias_enabled : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_enabled=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_bias_enabled</h4><a class="signature-arity" href="#MaterialDesc.depth_bias_enabled=" title="Permanent link">1</a><signature id="MaterialDesc.depth_bias_enabled=">

```lx
MaterialDesc.depth_bias_enabled=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_bias</h4><a class="signature-arity" href="#MaterialDesc.depth_bias" title="Permanent link">1</a><signature id="MaterialDesc.depth_bias">

```lx
MaterialDesc.depth_bias : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_bias</h4><a class="signature-arity" href="#MaterialDesc.depth_bias=" title="Permanent link">1</a><signature id="MaterialDesc.depth_bias=">

```lx
MaterialDesc.depth_bias=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_slope_scale"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_bias_slope_scale</h4><a class="signature-arity" href="#MaterialDesc.depth_bias_slope_scale" title="Permanent link">1</a><signature id="MaterialDesc.depth_bias_slope_scale">

```lx
MaterialDesc.depth_bias_slope_scale : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_slope_scale=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_bias_slope_scale</h4><a class="signature-arity" href="#MaterialDesc.depth_bias_slope_scale=" title="Permanent link">1</a><signature id="MaterialDesc.depth_bias_slope_scale=">

```lx
MaterialDesc.depth_bias_slope_scale=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_test"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_test</h4><a class="signature-arity" href="#MaterialDesc.depth_test" title="Permanent link">1</a><signature id="MaterialDesc.depth_test">

```lx
MaterialDesc.depth_test : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_test=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_test</h4><a class="signature-arity" href="#MaterialDesc.depth_test=" title="Permanent link">1</a><signature id="MaterialDesc.depth_test=">

```lx
MaterialDesc.depth_test=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_write"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_write</h4><a class="signature-arity" href="#MaterialDesc.depth_write" title="Permanent link">1</a><signature id="MaterialDesc.depth_write">

```lx
MaterialDesc.depth_write : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_write=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_write</h4><a class="signature-arity" href="#MaterialDesc.depth_write=" title="Permanent link">1</a><signature id="MaterialDesc.depth_write=">

```lx
MaterialDesc.depth_write=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_compare"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_compare</h4><a class="signature-arity" href="#MaterialDesc.depth_compare" title="Permanent link">1</a><signature id="MaterialDesc.depth_compare">

```lx
MaterialDesc.depth_compare : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_compare=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.depth_compare</h4><a class="signature-arity" href="#MaterialDesc.depth_compare=" title="Permanent link">1</a><signature id="MaterialDesc.depth_compare=">

```lx
MaterialDesc.depth_compare=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_test"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_test</h4><a class="signature-arity" href="#MaterialDesc.stencil_test" title="Permanent link">1</a><signature id="MaterialDesc.stencil_test">

```lx
MaterialDesc.stencil_test : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_test=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_test</h4><a class="signature-arity" href="#MaterialDesc.stencil_test=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_test=">

```lx
MaterialDesc.stencil_test=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="write_mask"></endpoint>
<h4 class="signature_head">MaterialDesc.write_mask</h4><a class="signature-arity" href="#MaterialDesc.write_mask" title="Permanent link">1</a><signature id="MaterialDesc.write_mask">

```lx
MaterialDesc.write_mask : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="write_mask=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.write_mask</h4><a class="signature-arity" href="#MaterialDesc.write_mask=" title="Permanent link">1</a><signature id="MaterialDesc.write_mask=">

```lx
MaterialDesc.write_mask=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blending"></endpoint>
<h4 class="signature_head">MaterialDesc.blending</h4><a class="signature-arity" href="#MaterialDesc.blending" title="Permanent link">1</a><signature id="MaterialDesc.blending">

```lx
MaterialDesc.blending : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blending=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.blending</h4><a class="signature-arity" href="#MaterialDesc.blending=" title="Permanent link">1</a><signature id="MaterialDesc.blending=">

```lx
MaterialDesc.blending=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="alpha_blend"></endpoint>
<h4 class="signature_head">MaterialDesc.alpha_blend</h4><a class="signature-arity" href="#MaterialDesc.alpha_blend" title="Permanent link">1</a><signature id="MaterialDesc.alpha_blend">

```lx
MaterialDesc.alpha_blend : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="alpha_blend=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.alpha_blend</h4><a class="signature-arity" href="#MaterialDesc.alpha_blend=" title="Permanent link">1</a><signature id="MaterialDesc.alpha_blend=">

```lx
MaterialDesc.alpha_blend=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="rgb_blend"></endpoint>
<h4 class="signature_head">MaterialDesc.rgb_blend</h4><a class="signature-arity" href="#MaterialDesc.rgb_blend" title="Permanent link">1</a><signature id="MaterialDesc.rgb_blend">

```lx
MaterialDesc.rgb_blend : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="rgb_blend=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.rgb_blend</h4><a class="signature-arity" href="#MaterialDesc.rgb_blend=" title="Permanent link">1</a><signature id="MaterialDesc.rgb_blend=">

```lx
MaterialDesc.rgb_blend=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_alpha"></endpoint>
<h4 class="signature_head">MaterialDesc.src_alpha</h4><a class="signature-arity" href="#MaterialDesc.src_alpha" title="Permanent link">1</a><signature id="MaterialDesc.src_alpha">

```lx
MaterialDesc.src_alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_alpha=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.src_alpha</h4><a class="signature-arity" href="#MaterialDesc.src_alpha=" title="Permanent link">1</a><signature id="MaterialDesc.src_alpha=">

```lx
MaterialDesc.src_alpha=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_rgb"></endpoint>
<h4 class="signature_head">MaterialDesc.src_rgb</h4><a class="signature-arity" href="#MaterialDesc.src_rgb" title="Permanent link">1</a><signature id="MaterialDesc.src_rgb">

```lx
MaterialDesc.src_rgb : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_rgb=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.src_rgb</h4><a class="signature-arity" href="#MaterialDesc.src_rgb=" title="Permanent link">1</a><signature id="MaterialDesc.src_rgb=">

```lx
MaterialDesc.src_rgb=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_alpha"></endpoint>
<h4 class="signature_head">MaterialDesc.dest_alpha</h4><a class="signature-arity" href="#MaterialDesc.dest_alpha" title="Permanent link">1</a><signature id="MaterialDesc.dest_alpha">

```lx
MaterialDesc.dest_alpha : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_alpha=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.dest_alpha</h4><a class="signature-arity" href="#MaterialDesc.dest_alpha=" title="Permanent link">1</a><signature id="MaterialDesc.dest_alpha=">

```lx
MaterialDesc.dest_alpha=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_rgb"></endpoint>
<h4 class="signature_head">MaterialDesc.dest_rgb</h4><a class="signature-arity" href="#MaterialDesc.dest_rgb" title="Permanent link">1</a><signature id="MaterialDesc.dest_rgb">

```lx
MaterialDesc.dest_rgb : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_rgb=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.dest_rgb</h4><a class="signature-arity" href="#MaterialDesc.dest_rgb=" title="Permanent link">1</a><signature id="MaterialDesc.dest_rgb=">

```lx
MaterialDesc.dest_rgb=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blend_color"></endpoint>
<h4 class="signature_head">MaterialDesc.blend_color</h4><a class="signature-arity" href="#MaterialDesc.blend_color" title="Permanent link">1</a><signature id="MaterialDesc.blend_color">

```lx
MaterialDesc.blend_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blend_color=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.blend_color</h4><a class="signature-arity" href="#MaterialDesc.blend_color=" title="Permanent link">1</a><signature id="MaterialDesc.blend_color=">

```lx
MaterialDesc.blend_color=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="cull"></endpoint>
<h4 class="signature_head">MaterialDesc.cull</h4><a class="signature-arity" href="#MaterialDesc.cull" title="Permanent link">1</a><signature id="MaterialDesc.cull">

```lx
MaterialDesc.cull : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="cull=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.cull</h4><a class="signature-arity" href="#MaterialDesc.cull=" title="Permanent link">1</a><signature id="MaterialDesc.cull=">

```lx
MaterialDesc.cull=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="winding"></endpoint>
<h4 class="signature_head">MaterialDesc.winding</h4><a class="signature-arity" href="#MaterialDesc.winding" title="Permanent link">1</a><signature id="MaterialDesc.winding">

```lx
MaterialDesc.winding : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="winding=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.winding</h4><a class="signature-arity" href="#MaterialDesc.winding=" title="Permanent link">1</a><signature id="MaterialDesc.winding=">

```lx
MaterialDesc.winding=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="layers"></endpoint>
<h4 class="signature_head">MaterialDesc.layers</h4><a class="signature-arity" href="#MaterialDesc.layers" title="Permanent link">1</a><signature id="MaterialDesc.layers">

```lx
MaterialDesc.layers : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="layers=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.layers</h4><a class="signature-arity" href="#MaterialDesc.layers=" title="Permanent link">1</a><signature id="MaterialDesc.layers=">

```lx
MaterialDesc.layers=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="inputs"></endpoint>
<h4 class="signature_head">MaterialDesc.inputs</h4><a class="signature-arity" href="#MaterialDesc.inputs" title="Permanent link">1</a><signature id="MaterialDesc.inputs">

```lx
MaterialDesc.inputs : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="inputs=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.inputs</h4><a class="signature-arity" href="#MaterialDesc.inputs=" title="Permanent link">1</a><signature id="MaterialDesc.inputs=">

```lx
MaterialDesc.inputs=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blocks"></endpoint>
<h4 class="signature_head">MaterialDesc.blocks</h4><a class="signature-arity" href="#MaterialDesc.blocks" title="Permanent link">1</a><signature id="MaterialDesc.blocks">

```lx
MaterialDesc.blocks : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blocks=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.blocks</h4><a class="signature-arity" href="#MaterialDesc.blocks=" title="Permanent link">1</a><signature id="MaterialDesc.blocks=">

```lx
MaterialDesc.blocks=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="replace"></endpoint>
<h4 class="signature_head">MaterialDesc.replace</h4><a class="signature-arity" href="#MaterialDesc.replace" title="Permanent link">1</a><signature id="MaterialDesc.replace">

```lx
MaterialDesc.replace : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="replace=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.replace</h4><a class="signature-arity" href="#MaterialDesc.replace=" title="Permanent link">1</a><signature id="MaterialDesc.replace=">

```lx
MaterialDesc.replace=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_stencil"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_failure_stencil</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_failure_stencil" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_failure_stencil">

```lx
MaterialDesc.stencil_back_failure_stencil : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_stencil=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_failure_stencil</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_failure_stencil=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_failure_stencil=">

```lx
MaterialDesc.stencil_back_failure_stencil=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_depth"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_failure_depth</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_failure_depth" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_failure_depth">

```lx
MaterialDesc.stencil_back_failure_depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_depth=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_failure_depth</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_failure_depth=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_failure_depth=">

```lx
MaterialDesc.stencil_back_failure_depth=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_pass_depth_stencil"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_pass_depth_stencil</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_pass_depth_stencil" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_pass_depth_stencil">

```lx
MaterialDesc.stencil_back_pass_depth_stencil : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_pass_depth_stencil=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_pass_depth_stencil</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_pass_depth_stencil=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_pass_depth_stencil=">

```lx
MaterialDesc.stencil_back_pass_depth_stencil=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_compare"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_compare</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_compare" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_compare">

```lx
MaterialDesc.stencil_back_compare : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_compare=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_compare</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_compare=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_compare=">

```lx
MaterialDesc.stencil_back_compare=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_read"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_mask_read</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_mask_read" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_mask_read">

```lx
MaterialDesc.stencil_back_mask_read : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_read=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_mask_read</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_mask_read=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_mask_read=">

```lx
MaterialDesc.stencil_back_mask_read=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_write"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_mask_write</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_mask_write" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_mask_write">

```lx
MaterialDesc.stencil_back_mask_write : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_write=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_mask_write</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_mask_write=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_mask_write=">

```lx
MaterialDesc.stencil_back_mask_write=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_reference"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_reference</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_reference" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_reference">

```lx
MaterialDesc.stencil_back_reference : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_reference=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_back_reference</h4><a class="signature-arity" href="#MaterialDesc.stencil_back_reference=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_back_reference=">

```lx
MaterialDesc.stencil_back_reference=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_stencil"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_failure_stencil</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_failure_stencil" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_failure_stencil">

```lx
MaterialDesc.stencil_front_failure_stencil : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_stencil=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_failure_stencil</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_failure_stencil=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_failure_stencil=">

```lx
MaterialDesc.stencil_front_failure_stencil=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_depth"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_failure_depth</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_failure_depth" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_failure_depth">

```lx
MaterialDesc.stencil_front_failure_depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_depth=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_failure_depth</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_failure_depth=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_failure_depth=">

```lx
MaterialDesc.stencil_front_failure_depth=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_pass_depth_stencil"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_pass_depth_stencil</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_pass_depth_stencil" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_pass_depth_stencil">

```lx
MaterialDesc.stencil_front_pass_depth_stencil : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_pass_depth_stencil=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_pass_depth_stencil</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_pass_depth_stencil=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_pass_depth_stencil=">

```lx
MaterialDesc.stencil_front_pass_depth_stencil=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_compare"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_compare</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_compare" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_compare">

```lx
MaterialDesc.stencil_front_compare : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_compare=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_compare</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_compare=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_compare=">

```lx
MaterialDesc.stencil_front_compare=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_read"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_mask_read</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_mask_read" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_mask_read">

```lx
MaterialDesc.stencil_front_mask_read : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_read=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_mask_read</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_mask_read=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_mask_read=">

```lx
MaterialDesc.stencil_front_mask_read=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_write"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_mask_write</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_mask_write" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_mask_write">

```lx
MaterialDesc.stencil_front_mask_write : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_write=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_mask_write</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_mask_write=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_mask_write=">

```lx
MaterialDesc.stencil_front_mask_write=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_reference"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_reference</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_reference" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_reference">

```lx
MaterialDesc.stencil_front_reference : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_reference=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialDesc.stencil_front_reference</h4><a class="signature-arity" href="#MaterialDesc.stencil_front_reference=" title="Permanent link">1</a><signature id="MaterialDesc.stencil_front_reference=">

```lx
MaterialDesc.stencil_front_reference=(v : Any) : unknown
```
</signature>

> no docs found   


### MaterialFunction
`import "luxe: render" for MaterialFunction{:lx}`
> no docs found

- [library](#MaterialFunction.library)
- [library](#MaterialFunction.library=)=(v : Any)
- [function](#MaterialFunction.function)
- [function](#MaterialFunction.function=)=(v : Any)
- [new](#MaterialFunction.new)()


---

<endpoint module="luxe: render" class="MaterialFunction" signature="library"></endpoint>
<h4 class="signature_head">MaterialFunction.library</h4><a class="signature-arity" href="#MaterialFunction.library" title="Permanent link">1</a><signature id="MaterialFunction.library">

```lx
MaterialFunction.library : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="library=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialFunction.library</h4><a class="signature-arity" href="#MaterialFunction.library=" title="Permanent link">1</a><signature id="MaterialFunction.library=">

```lx
MaterialFunction.library=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="function"></endpoint>
<h4 class="signature_head">MaterialFunction.function</h4><a class="signature-arity" href="#MaterialFunction.function" title="Permanent link">1</a><signature id="MaterialFunction.function">

```lx
MaterialFunction.function : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="function=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialFunction.function</h4><a class="signature-arity" href="#MaterialFunction.function=" title="Permanent link">1</a><signature id="MaterialFunction.function=">

```lx
MaterialFunction.function=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="new()"></endpoint>
<h4 class="signature_head">MaterialFunction.new</h4><a class="signature-arity" href="#MaterialFunction.new" title="Permanent link">1</a><signature id="MaterialFunction.new">

```lx
MaterialFunction.new() : MaterialFunction
```
</signature>

> no docs found   


### MaterialInput
`import "luxe: render" for MaterialInput{:lx}`
> no docs found

- [name](#MaterialInput.name)
- [name](#MaterialInput.name=)=(name : Any)
- [type](#MaterialInput.type)
- [type](#MaterialInput.type=)=(type : Any)
- [value](#MaterialInput.value)
- [value](#MaterialInput.value=)=(value : Any)
- [count](#MaterialInput.count)
- [count](#MaterialInput.count=)=(count : Any)
- [new](#MaterialInput.new)()
- [new](#MaterialInput.new+4)(**name**: `Any{:lx}`, **type**: `Any{:lx}`, **value**: `Any{:lx}`, **count**: `Any{:lx}`)
- [new](#MaterialInput.new+3)(**name**: `Any{:lx}`, **type**: `Any{:lx}`, **value**: `Any{:lx}`)
- [init](#MaterialInput.init+4)(**name**: `Any{:lx}`, **type**: `Any{:lx}`, **value**: `Any{:lx}`, **count**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="MaterialInput" signature="name"></endpoint>
<h4 class="signature_head">MaterialInput.name</h4><a class="signature-arity" href="#MaterialInput.name" title="Permanent link">1</a><signature id="MaterialInput.name">

```lx
MaterialInput.name : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="name=(name : Any)"></endpoint>
<h4 class="signature_head">MaterialInput.name</h4><a class="signature-arity" href="#MaterialInput.name=" title="Permanent link">1</a><signature id="MaterialInput.name=">

```lx
MaterialInput.name=(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="type"></endpoint>
<h4 class="signature_head">MaterialInput.type</h4><a class="signature-arity" href="#MaterialInput.type" title="Permanent link">1</a><signature id="MaterialInput.type">

```lx
MaterialInput.type : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="type=(type : Any)"></endpoint>
<h4 class="signature_head">MaterialInput.type</h4><a class="signature-arity" href="#MaterialInput.type=" title="Permanent link">1</a><signature id="MaterialInput.type=">

```lx
MaterialInput.type=(type : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="value"></endpoint>
<h4 class="signature_head">MaterialInput.value</h4><a class="signature-arity" href="#MaterialInput.value" title="Permanent link">1</a><signature id="MaterialInput.value">

```lx
MaterialInput.value : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="value=(value : Any)"></endpoint>
<h4 class="signature_head">MaterialInput.value</h4><a class="signature-arity" href="#MaterialInput.value=" title="Permanent link">1</a><signature id="MaterialInput.value=">

```lx
MaterialInput.value=(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="count"></endpoint>
<h4 class="signature_head">MaterialInput.count</h4><a class="signature-arity" href="#MaterialInput.count" title="Permanent link">1</a><signature id="MaterialInput.count">

```lx
MaterialInput.count : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="count=(count : Any)"></endpoint>
<h4 class="signature_head">MaterialInput.count</h4><a class="signature-arity" href="#MaterialInput.count=" title="Permanent link">1</a><signature id="MaterialInput.count=">

```lx
MaterialInput.count=(count : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new()"></endpoint>
<h4 class="signature_head">MaterialInput.new</h4><a class="signature-arity" href="#MaterialInput.new" title="Permanent link">1</a><signature id="MaterialInput.new">

```lx
MaterialInput.new() : MaterialInput
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new(name : Any, type : Any, value : Any, count : Any)"></endpoint>
<h4 class="signature_head">MaterialInput.new</h4><a class="signature-arity" href="#MaterialInput.new+4" title="Permanent link">4</a><signature id="MaterialInput.new+4">

```lx
MaterialInput.new(name : Any, type : Any, value : Any, count : Any) : MaterialInput
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new(name : Any, type : Any, value : Any)"></endpoint>
<h4 class="signature_head">MaterialInput.new</h4><a class="signature-arity" href="#MaterialInput.new+3" title="Permanent link">3</a><signature id="MaterialInput.new+3">

```lx
MaterialInput.new(name : Any, type : Any, value : Any) : MaterialInput
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="init(name : Any, type : Any, value : Any, count : Any)"></endpoint>
<h4 class="signature_head">MaterialInput.init</h4><a class="signature-arity" href="#MaterialInput.init+4" title="Permanent link">4</a><signature id="MaterialInput.init+4">

```lx
MaterialInput.init(name : Any, type : Any, value : Any, count : Any) : unknown
```
</signature>

> no docs found   


### MaterialInputBlock
`import "luxe: render" for MaterialInputBlock{:lx}`
> no docs found

- [get_defined](#MaterialInputBlock.get_defined)(**name**: `Any{:lx}`)
- [has_input](#MaterialInputBlock.has_input+2)(**block**: `Any{:lx}`, **name**: `Any{:lx}`)
- [is_input_array](#MaterialInputBlock.is_input_array+2)(**block**: `Any{:lx}`, **name**: `Any{:lx}`)
- [set_floats](#MaterialInputBlock.set_floats+3)(**block**: `MaterialInputBlock{:lx}`, **name**: `String{:lx}`, **value**: `Floats{:lx}`)
- [set_bytes](#MaterialInputBlock.set_bytes+3)(**block**: `MaterialInputBlock{:lx}`, **name**: `String{:lx}`, **value**: `Bytes{:lx}`)
- [set](#MaterialInputBlock.set+3)(**block**: `Any{:lx}`, **name**: `Any{:lx}`, **value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="MaterialInputBlock" signature="get_defined(name : Any)"></endpoint>
<h4 class="signature_head">MaterialInputBlock.get_defined</h4><a class="signature-arity" href="#MaterialInputBlock.get_defined" title="Permanent link">1</a><signature id="MaterialInputBlock.get_defined">

```lx
MaterialInputBlock.get_defined(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="has_input(block : Any, name : Any)"></endpoint>
<h4 class="signature_head">MaterialInputBlock.has_input</h4><a class="signature-arity" href="#MaterialInputBlock.has_input+2" title="Permanent link">2</a><signature id="MaterialInputBlock.has_input+2">

```lx
MaterialInputBlock.has_input(block : Any, name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="is_input_array(block : Any, name : Any)"></endpoint>
<h4 class="signature_head">MaterialInputBlock.is_input_array</h4><a class="signature-arity" href="#MaterialInputBlock.is_input_array+2" title="Permanent link">2</a><signature id="MaterialInputBlock.is_input_array+2">

```lx
MaterialInputBlock.is_input_array(block : Any, name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set_floats(block : MaterialInputBlock, name : String, value : Floats)"></endpoint>
<h4 class="signature_head">MaterialInputBlock.set_floats</h4><a class="signature-arity" href="#MaterialInputBlock.set_floats+3" title="Permanent link">3</a><signature id="MaterialInputBlock.set_floats+3">

```lx
MaterialInputBlock.set_floats(block : MaterialInputBlock, name : String, value : Floats) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set_bytes(block : MaterialInputBlock, name : String, value : Bytes)"></endpoint>
<h4 class="signature_head">MaterialInputBlock.set_bytes</h4><a class="signature-arity" href="#MaterialInputBlock.set_bytes+3" title="Permanent link">3</a><signature id="MaterialInputBlock.set_bytes+3">

```lx
MaterialInputBlock.set_bytes(block : MaterialInputBlock, name : String, value : Bytes) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set(block : Any, name : Any, value : Any)"></endpoint>
<h4 class="signature_head">MaterialInputBlock.set</h4><a class="signature-arity" href="#MaterialInputBlock.set+3" title="Permanent link">3</a><signature id="MaterialInputBlock.set+3">

```lx
MaterialInputBlock.set(block : Any, name : Any, value : Any) : unknown
```
</signature>

> no docs found   


### MaterialInputImage
`import "luxe: render" for MaterialInputImage{:lx}`
> no docs found

- [image](#MaterialInputImage.image)
- [image](#MaterialInputImage.image=)=(image : Any)
- [type](#MaterialInputImage.type)
- [type](#MaterialInputImage.type=)=(type : Any)
- [sampler](#MaterialInputImage.sampler)
- [sampler](#MaterialInputImage.sampler=)=(value : Any)
- [new](#MaterialInputImage.new)()
- [new](#MaterialInputImage.new+2)(**in_image**: `Any{:lx}`, **in_sampler**: `Any{:lx}`)
- [new](#MaterialInputImage.new+3)(**in_image**: `Any{:lx}`, **in_sampler**: `Any{:lx}`, **in_type**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="MaterialInputImage" signature="image"></endpoint>
<h4 class="signature_head">MaterialInputImage.image</h4><a class="signature-arity" href="#MaterialInputImage.image" title="Permanent link">1</a><signature id="MaterialInputImage.image">

```lx
MaterialInputImage.image : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="image=(image : Any)"></endpoint>
<h4 class="signature_head">MaterialInputImage.image</h4><a class="signature-arity" href="#MaterialInputImage.image=" title="Permanent link">1</a><signature id="MaterialInputImage.image=">

```lx
MaterialInputImage.image=(image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="type"></endpoint>
<h4 class="signature_head">MaterialInputImage.type</h4><a class="signature-arity" href="#MaterialInputImage.type" title="Permanent link">1</a><signature id="MaterialInputImage.type">

```lx
MaterialInputImage.type : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="type=(type : Any)"></endpoint>
<h4 class="signature_head">MaterialInputImage.type</h4><a class="signature-arity" href="#MaterialInputImage.type=" title="Permanent link">1</a><signature id="MaterialInputImage.type=">

```lx
MaterialInputImage.type=(type : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="sampler"></endpoint>
<h4 class="signature_head">MaterialInputImage.sampler</h4><a class="signature-arity" href="#MaterialInputImage.sampler" title="Permanent link">1</a><signature id="MaterialInputImage.sampler">

```lx
MaterialInputImage.sampler : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="sampler=(value : Any)"></endpoint>
<h4 class="signature_head">MaterialInputImage.sampler</h4><a class="signature-arity" href="#MaterialInputImage.sampler=" title="Permanent link">1</a><signature id="MaterialInputImage.sampler=">

```lx
MaterialInputImage.sampler=(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new()"></endpoint>
<h4 class="signature_head">MaterialInputImage.new</h4><a class="signature-arity" href="#MaterialInputImage.new" title="Permanent link">1</a><signature id="MaterialInputImage.new">

```lx
MaterialInputImage.new() : MaterialInputImage
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new(in_image : Any, in_sampler : Any)"></endpoint>
<h4 class="signature_head">MaterialInputImage.new</h4><a class="signature-arity" href="#MaterialInputImage.new+2" title="Permanent link">2</a><signature id="MaterialInputImage.new+2">

```lx
MaterialInputImage.new(in_image : Any, in_sampler : Any) : MaterialInputImage
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new(in_image : Any, in_sampler : Any, in_type : Any)"></endpoint>
<h4 class="signature_head">MaterialInputImage.new</h4><a class="signature-arity" href="#MaterialInputImage.new+3" title="Permanent link">3</a><signature id="MaterialInputImage.new+3">

```lx
MaterialInputImage.new(in_image : Any, in_sampler : Any, in_type : Any) : MaterialInputImage
```
</signature>

> no docs found   


### MaterialInputType
`import "luxe: render" for MaterialInputType{:lx}`
> no docs found

- [invalid](#MaterialInputType.invalid)
- [bool](#MaterialInputType.bool)
- [bool2](#MaterialInputType.bool2)
- [bool4](#MaterialInputType.bool4)
- [int](#MaterialInputType.int)
- [int2](#MaterialInputType.int2)
- [int4](#MaterialInputType.int4)
- [uint](#MaterialInputType.uint)
- [uint2](#MaterialInputType.uint2)
- [uint4](#MaterialInputType.uint4)
- [float](#MaterialInputType.float)
- [float2](#MaterialInputType.float2)
- [float4](#MaterialInputType.float4)
- [mat4](#MaterialInputType.mat4)
- [image](#MaterialInputType.image)
- [from_string](#MaterialInputType.from_string)(**value**: `Any{:lx}`)
- [name](#MaterialInputType.name)(**value**: `Any{:lx}`)
- [size_of](#MaterialInputType.size_of)(**value**: `Any{:lx}`)
- [default_of](#MaterialInputType.default_of)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="MaterialInputType" signature="invalid"></endpoint>
<h4 class="signature_head">MaterialInputType.invalid</h4><a class="signature-arity" href="#MaterialInputType.invalid" title="Permanent link">1</a><signature id="MaterialInputType.invalid">

```lx
MaterialInputType.invalid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool"></endpoint>
<h4 class="signature_head">MaterialInputType.bool</h4><a class="signature-arity" href="#MaterialInputType.bool" title="Permanent link">1</a><signature id="MaterialInputType.bool">

```lx
MaterialInputType.bool : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool2"></endpoint>
<h4 class="signature_head">MaterialInputType.bool2</h4><a class="signature-arity" href="#MaterialInputType.bool2" title="Permanent link">1</a><signature id="MaterialInputType.bool2">

```lx
MaterialInputType.bool2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool4"></endpoint>
<h4 class="signature_head">MaterialInputType.bool4</h4><a class="signature-arity" href="#MaterialInputType.bool4" title="Permanent link">1</a><signature id="MaterialInputType.bool4">

```lx
MaterialInputType.bool4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int"></endpoint>
<h4 class="signature_head">MaterialInputType.int</h4><a class="signature-arity" href="#MaterialInputType.int" title="Permanent link">1</a><signature id="MaterialInputType.int">

```lx
MaterialInputType.int : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int2"></endpoint>
<h4 class="signature_head">MaterialInputType.int2</h4><a class="signature-arity" href="#MaterialInputType.int2" title="Permanent link">1</a><signature id="MaterialInputType.int2">

```lx
MaterialInputType.int2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int4"></endpoint>
<h4 class="signature_head">MaterialInputType.int4</h4><a class="signature-arity" href="#MaterialInputType.int4" title="Permanent link">1</a><signature id="MaterialInputType.int4">

```lx
MaterialInputType.int4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint"></endpoint>
<h4 class="signature_head">MaterialInputType.uint</h4><a class="signature-arity" href="#MaterialInputType.uint" title="Permanent link">1</a><signature id="MaterialInputType.uint">

```lx
MaterialInputType.uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint2"></endpoint>
<h4 class="signature_head">MaterialInputType.uint2</h4><a class="signature-arity" href="#MaterialInputType.uint2" title="Permanent link">1</a><signature id="MaterialInputType.uint2">

```lx
MaterialInputType.uint2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint4"></endpoint>
<h4 class="signature_head">MaterialInputType.uint4</h4><a class="signature-arity" href="#MaterialInputType.uint4" title="Permanent link">1</a><signature id="MaterialInputType.uint4">

```lx
MaterialInputType.uint4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float"></endpoint>
<h4 class="signature_head">MaterialInputType.float</h4><a class="signature-arity" href="#MaterialInputType.float" title="Permanent link">1</a><signature id="MaterialInputType.float">

```lx
MaterialInputType.float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float2"></endpoint>
<h4 class="signature_head">MaterialInputType.float2</h4><a class="signature-arity" href="#MaterialInputType.float2" title="Permanent link">1</a><signature id="MaterialInputType.float2">

```lx
MaterialInputType.float2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float4"></endpoint>
<h4 class="signature_head">MaterialInputType.float4</h4><a class="signature-arity" href="#MaterialInputType.float4" title="Permanent link">1</a><signature id="MaterialInputType.float4">

```lx
MaterialInputType.float4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="mat4"></endpoint>
<h4 class="signature_head">MaterialInputType.mat4</h4><a class="signature-arity" href="#MaterialInputType.mat4" title="Permanent link">1</a><signature id="MaterialInputType.mat4">

```lx
MaterialInputType.mat4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="image"></endpoint>
<h4 class="signature_head">MaterialInputType.image</h4><a class="signature-arity" href="#MaterialInputType.image" title="Permanent link">1</a><signature id="MaterialInputType.image">

```lx
MaterialInputType.image : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">MaterialInputType.from_string</h4><a class="signature-arity" href="#MaterialInputType.from_string" title="Permanent link">1</a><signature id="MaterialInputType.from_string">

```lx
MaterialInputType.from_string(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">MaterialInputType.name</h4><a class="signature-arity" href="#MaterialInputType.name" title="Permanent link">1</a><signature id="MaterialInputType.name">

```lx
MaterialInputType.name(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="size_of(value : Any)"></endpoint>
<h4 class="signature_head">MaterialInputType.size_of</h4><a class="signature-arity" href="#MaterialInputType.size_of" title="Permanent link">1</a><signature id="MaterialInputType.size_of">

```lx
MaterialInputType.size_of(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="default_of(value : Any)"></endpoint>
<h4 class="signature_head">MaterialInputType.default_of</h4><a class="signature-arity" href="#MaterialInputType.default_of" title="Permanent link">1</a><signature id="MaterialInputType.default_of">

```lx
MaterialInputType.default_of(value : Any) : unknown
```
</signature>

> no docs found   


### MaterialReplace
`import "luxe: render" for MaterialReplace{:lx}`
> no docs found

- [tag](#MaterialReplace.tag)
- [tag](#MaterialReplace.tag=)=(v : Any)
- [basis](#MaterialReplace.basis)
- [basis](#MaterialReplace.basis=)=(v : Any)
- [new](#MaterialReplace.new)()


---

<endpoint module="luxe: render" class="MaterialReplace" signature="tag"></endpoint>
<h4 class="signature_head">MaterialReplace.tag</h4><a class="signature-arity" href="#MaterialReplace.tag" title="Permanent link">1</a><signature id="MaterialReplace.tag">

```lx
MaterialReplace.tag : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="tag=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialReplace.tag</h4><a class="signature-arity" href="#MaterialReplace.tag=" title="Permanent link">1</a><signature id="MaterialReplace.tag=">

```lx
MaterialReplace.tag=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="basis"></endpoint>
<h4 class="signature_head">MaterialReplace.basis</h4><a class="signature-arity" href="#MaterialReplace.basis" title="Permanent link">1</a><signature id="MaterialReplace.basis">

```lx
MaterialReplace.basis : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="basis=(v : Any)"></endpoint>
<h4 class="signature_head">MaterialReplace.basis</h4><a class="signature-arity" href="#MaterialReplace.basis=" title="Permanent link">1</a><signature id="MaterialReplace.basis=">

```lx
MaterialReplace.basis=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="new()"></endpoint>
<h4 class="signature_head">MaterialReplace.new</h4><a class="signature-arity" href="#MaterialReplace.new" title="Permanent link">1</a><signature id="MaterialReplace.new">

```lx
MaterialReplace.new() : MaterialReplace
```
</signature>

> no docs found   


### PassLayerDesc
`import "luxe: render" for PassLayerDesc{:lx}`
> no docs found

- `var display_id : String = "Pass Layer"{:lx}`
- `var pass_usage : List = null{:lx}`
- [new](#PassLayerDesc.new)()
- [dest](#PassLayerDesc.dest)
- [dest](#PassLayerDesc.dest=)=(v : Any)
- [basis](#PassLayerDesc.basis)
- [basis](#PassLayerDesc.basis=)=(v : Any)
- [inputs](#PassLayerDesc.inputs)
- [inputs](#PassLayerDesc.inputs=)=(v : Any)
- [targets](#PassLayerDesc.targets)
- [targets](#PassLayerDesc.targets=)=(v : Any)
- [vertex](#PassLayerDesc.vertex=)=(v : Any)
- [vertex](#PassLayerDesc.vertex)
- [fragment](#PassLayerDesc.fragment=)=(v : Any)
- [fragment](#PassLayerDesc.fragment)
- [clear_color](#PassLayerDesc.clear_color)
- [clear_color](#PassLayerDesc.clear_color=)=(v : Any)
- [clear_depth](#PassLayerDesc.clear_depth)
- [clear_depth](#PassLayerDesc.clear_depth=)=(v : Any)
- [blending](#PassLayerDesc.blending)
- [blending](#PassLayerDesc.blending=)=(v : Any)
- [write_mask](#PassLayerDesc.write_mask)
- [write_mask](#PassLayerDesc.write_mask=)=(v : Any)
- [depth_test](#PassLayerDesc.depth_test)
- [depth_test](#PassLayerDesc.depth_test=)=(v : Any)
- [depth_write](#PassLayerDesc.depth_write)
- [depth_write](#PassLayerDesc.depth_write=)=(v : Any)
- [depth_compare](#PassLayerDesc.depth_compare)
- [depth_compare](#PassLayerDesc.depth_compare=)=(v : Any)


---

<endpoint module="luxe: render" class="PassLayerDesc" signature="new()"></endpoint>
<h4 class="signature_head">PassLayerDesc.new</h4><a class="signature-arity" href="#PassLayerDesc.new" title="Permanent link">1</a><signature id="PassLayerDesc.new">

```lx
PassLayerDesc.new() : PassLayerDesc
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="dest"></endpoint>
<h4 class="signature_head">PassLayerDesc.dest</h4><a class="signature-arity" href="#PassLayerDesc.dest" title="Permanent link">1</a><signature id="PassLayerDesc.dest">

```lx
PassLayerDesc.dest : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="dest=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.dest</h4><a class="signature-arity" href="#PassLayerDesc.dest=" title="Permanent link">1</a><signature id="PassLayerDesc.dest=">

```lx
PassLayerDesc.dest=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="basis"></endpoint>
<h4 class="signature_head">PassLayerDesc.basis</h4><a class="signature-arity" href="#PassLayerDesc.basis" title="Permanent link">1</a><signature id="PassLayerDesc.basis">

```lx
PassLayerDesc.basis : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="basis=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.basis</h4><a class="signature-arity" href="#PassLayerDesc.basis=" title="Permanent link">1</a><signature id="PassLayerDesc.basis=">

```lx
PassLayerDesc.basis=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="inputs"></endpoint>
<h4 class="signature_head">PassLayerDesc.inputs</h4><a class="signature-arity" href="#PassLayerDesc.inputs" title="Permanent link">1</a><signature id="PassLayerDesc.inputs">

```lx
PassLayerDesc.inputs : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="inputs=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.inputs</h4><a class="signature-arity" href="#PassLayerDesc.inputs=" title="Permanent link">1</a><signature id="PassLayerDesc.inputs=">

```lx
PassLayerDesc.inputs=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="targets"></endpoint>
<h4 class="signature_head">PassLayerDesc.targets</h4><a class="signature-arity" href="#PassLayerDesc.targets" title="Permanent link">1</a><signature id="PassLayerDesc.targets">

```lx
PassLayerDesc.targets : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="targets=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.targets</h4><a class="signature-arity" href="#PassLayerDesc.targets=" title="Permanent link">1</a><signature id="PassLayerDesc.targets=">

```lx
PassLayerDesc.targets=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="vertex=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.vertex</h4><a class="signature-arity" href="#PassLayerDesc.vertex=" title="Permanent link">1</a><signature id="PassLayerDesc.vertex=">

```lx
PassLayerDesc.vertex=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="vertex"></endpoint>
<h4 class="signature_head">PassLayerDesc.vertex</h4><a class="signature-arity" href="#PassLayerDesc.vertex" title="Permanent link">1</a><signature id="PassLayerDesc.vertex">

```lx
PassLayerDesc.vertex : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="fragment=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.fragment</h4><a class="signature-arity" href="#PassLayerDesc.fragment=" title="Permanent link">1</a><signature id="PassLayerDesc.fragment=">

```lx
PassLayerDesc.fragment=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="fragment"></endpoint>
<h4 class="signature_head">PassLayerDesc.fragment</h4><a class="signature-arity" href="#PassLayerDesc.fragment" title="Permanent link">1</a><signature id="PassLayerDesc.fragment">

```lx
PassLayerDesc.fragment : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_color"></endpoint>
<h4 class="signature_head">PassLayerDesc.clear_color</h4><a class="signature-arity" href="#PassLayerDesc.clear_color" title="Permanent link">1</a><signature id="PassLayerDesc.clear_color">

```lx
PassLayerDesc.clear_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_color=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.clear_color</h4><a class="signature-arity" href="#PassLayerDesc.clear_color=" title="Permanent link">1</a><signature id="PassLayerDesc.clear_color=">

```lx
PassLayerDesc.clear_color=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_depth"></endpoint>
<h4 class="signature_head">PassLayerDesc.clear_depth</h4><a class="signature-arity" href="#PassLayerDesc.clear_depth" title="Permanent link">1</a><signature id="PassLayerDesc.clear_depth">

```lx
PassLayerDesc.clear_depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_depth=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.clear_depth</h4><a class="signature-arity" href="#PassLayerDesc.clear_depth=" title="Permanent link">1</a><signature id="PassLayerDesc.clear_depth=">

```lx
PassLayerDesc.clear_depth=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="blending"></endpoint>
<h4 class="signature_head">PassLayerDesc.blending</h4><a class="signature-arity" href="#PassLayerDesc.blending" title="Permanent link">1</a><signature id="PassLayerDesc.blending">

```lx
PassLayerDesc.blending : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="blending=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.blending</h4><a class="signature-arity" href="#PassLayerDesc.blending=" title="Permanent link">1</a><signature id="PassLayerDesc.blending=">

```lx
PassLayerDesc.blending=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="write_mask"></endpoint>
<h4 class="signature_head">PassLayerDesc.write_mask</h4><a class="signature-arity" href="#PassLayerDesc.write_mask" title="Permanent link">1</a><signature id="PassLayerDesc.write_mask">

```lx
PassLayerDesc.write_mask : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="write_mask=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.write_mask</h4><a class="signature-arity" href="#PassLayerDesc.write_mask=" title="Permanent link">1</a><signature id="PassLayerDesc.write_mask=">

```lx
PassLayerDesc.write_mask=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_test"></endpoint>
<h4 class="signature_head">PassLayerDesc.depth_test</h4><a class="signature-arity" href="#PassLayerDesc.depth_test" title="Permanent link">1</a><signature id="PassLayerDesc.depth_test">

```lx
PassLayerDesc.depth_test : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_test=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.depth_test</h4><a class="signature-arity" href="#PassLayerDesc.depth_test=" title="Permanent link">1</a><signature id="PassLayerDesc.depth_test=">

```lx
PassLayerDesc.depth_test=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_write"></endpoint>
<h4 class="signature_head">PassLayerDesc.depth_write</h4><a class="signature-arity" href="#PassLayerDesc.depth_write" title="Permanent link">1</a><signature id="PassLayerDesc.depth_write">

```lx
PassLayerDesc.depth_write : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_write=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.depth_write</h4><a class="signature-arity" href="#PassLayerDesc.depth_write=" title="Permanent link">1</a><signature id="PassLayerDesc.depth_write=">

```lx
PassLayerDesc.depth_write=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_compare"></endpoint>
<h4 class="signature_head">PassLayerDesc.depth_compare</h4><a class="signature-arity" href="#PassLayerDesc.depth_compare" title="Permanent link">1</a><signature id="PassLayerDesc.depth_compare">

```lx
PassLayerDesc.depth_compare : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_compare=(v : Any)"></endpoint>
<h4 class="signature_head">PassLayerDesc.depth_compare</h4><a class="signature-arity" href="#PassLayerDesc.depth_compare=" title="Permanent link">1</a><signature id="PassLayerDesc.depth_compare=">

```lx
PassLayerDesc.depth_compare=(v : Any) : unknown
```
</signature>

> no docs found   


### PixelFormat
`import "luxe: render" for PixelFormat{:lx}`
> no docs found

- [invalid](#PixelFormat.invalid)
- [rgb8Unorm](#PixelFormat.rgb8Unorm)
- [rgb8Unorm_srgb](#PixelFormat.rgb8Unorm_srgb)
- [rgb8Snorm](#PixelFormat.rgb8Snorm)
- [rgb8Uint](#PixelFormat.rgb8Uint)
- [rgb8Sint](#PixelFormat.rgb8Sint)
- [rgb16Unorm](#PixelFormat.rgb16Unorm)
- [rgb16Snorm](#PixelFormat.rgb16Snorm)
- [rgb16Uint](#PixelFormat.rgb16Uint)
- [rgb16Sint](#PixelFormat.rgb16Sint)
- [rgb16Float](#PixelFormat.rgb16Float)
- [rgb32Uint](#PixelFormat.rgb32Uint)
- [rgb32Sint](#PixelFormat.rgb32Sint)
- [rgb32Float](#PixelFormat.rgb32Float)
- [rgba8Unorm](#PixelFormat.rgba8Unorm)
- [rgba8Unorm_srgb](#PixelFormat.rgba8Unorm_srgb)
- [rgba8Snorm](#PixelFormat.rgba8Snorm)
- [rgba8Uint](#PixelFormat.rgba8Uint)
- [rgba8Sint](#PixelFormat.rgba8Sint)
- [rgba16Unorm](#PixelFormat.rgba16Unorm)
- [rgba16Snorm](#PixelFormat.rgba16Snorm)
- [rgba16Uint](#PixelFormat.rgba16Uint)
- [rgba16Sint](#PixelFormat.rgba16Sint)
- [rgba16Float](#PixelFormat.rgba16Float)
- [rgba32Uint](#PixelFormat.rgba32Uint)
- [rgba32Sint](#PixelFormat.rgba32Sint)
- [rgba32Float](#PixelFormat.rgba32Float)
- [r11g11b10Float](#PixelFormat.r11g11b10Float)
- [bgra8Unorm](#PixelFormat.bgra8Unorm)
- [bgra8Unorm_srgb](#PixelFormat.bgra8Unorm_srgb)
- [depth16Unorm](#PixelFormat.depth16Unorm)
- [depth32Float](#PixelFormat.depth32Float)
- [stencil8](#PixelFormat.stencil8)
- [depth24Unorm_stencil8](#PixelFormat.depth24Unorm_stencil8)
- [depth32Float_stencil8](#PixelFormat.depth32Float_stencil8)
- [bc1_rgba](#PixelFormat.bc1_rgba)
- [bc3_rgba](#PixelFormat.bc3_rgba)
- [r8Unorm](#PixelFormat.r8Unorm)
- [r8Snorm](#PixelFormat.r8Snorm)
- [r8Uint](#PixelFormat.r8Uint)
- [r8Sint](#PixelFormat.r8Sint)
- [rg8Unorm](#PixelFormat.rg8Unorm)
- [rg8Snorm](#PixelFormat.rg8Snorm)
- [rg8Uint](#PixelFormat.rg8Uint)
- [rg8Sint](#PixelFormat.rg8Sint)
- [r16Uint](#PixelFormat.r16Uint)
- [r16Sint](#PixelFormat.r16Sint)
- [r16Float](#PixelFormat.r16Float)
- [rg16Uint](#PixelFormat.rg16Uint)
- [rg16Sint](#PixelFormat.rg16Sint)
- [rg16Float](#PixelFormat.rg16Float)
- [r32Uint](#PixelFormat.r32Uint)
- [r32Sint](#PixelFormat.r32Sint)
- [r32Float](#PixelFormat.r32Float)
- [rg32Uint](#PixelFormat.rg32Uint)
- [rg32Sint](#PixelFormat.rg32Sint)
- [rg32Float](#PixelFormat.rg32Float)
- [from_string](#PixelFormat.from_string)(**value**: `Any{:lx}`)
- [name](#PixelFormat.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="PixelFormat" signature="invalid"></endpoint>
<h4 class="signature_head">PixelFormat.invalid</h4><a class="signature-arity" href="#PixelFormat.invalid" title="Permanent link">1</a><signature id="PixelFormat.invalid">

```lx
PixelFormat.invalid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Unorm"></endpoint>
<h4 class="signature_head">PixelFormat.rgb8Unorm</h4><a class="signature-arity" href="#PixelFormat.rgb8Unorm" title="Permanent link">1</a><signature id="PixelFormat.rgb8Unorm">

```lx
PixelFormat.rgb8Unorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Unorm_srgb"></endpoint>
<h4 class="signature_head">PixelFormat.rgb8Unorm_srgb</h4><a class="signature-arity" href="#PixelFormat.rgb8Unorm_srgb" title="Permanent link">1</a><signature id="PixelFormat.rgb8Unorm_srgb">

```lx
PixelFormat.rgb8Unorm_srgb : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Snorm"></endpoint>
<h4 class="signature_head">PixelFormat.rgb8Snorm</h4><a class="signature-arity" href="#PixelFormat.rgb8Snorm" title="Permanent link">1</a><signature id="PixelFormat.rgb8Snorm">

```lx
PixelFormat.rgb8Snorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rgb8Uint</h4><a class="signature-arity" href="#PixelFormat.rgb8Uint" title="Permanent link">1</a><signature id="PixelFormat.rgb8Uint">

```lx
PixelFormat.rgb8Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rgb8Sint</h4><a class="signature-arity" href="#PixelFormat.rgb8Sint" title="Permanent link">1</a><signature id="PixelFormat.rgb8Sint">

```lx
PixelFormat.rgb8Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Unorm"></endpoint>
<h4 class="signature_head">PixelFormat.rgb16Unorm</h4><a class="signature-arity" href="#PixelFormat.rgb16Unorm" title="Permanent link">1</a><signature id="PixelFormat.rgb16Unorm">

```lx
PixelFormat.rgb16Unorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Snorm"></endpoint>
<h4 class="signature_head">PixelFormat.rgb16Snorm</h4><a class="signature-arity" href="#PixelFormat.rgb16Snorm" title="Permanent link">1</a><signature id="PixelFormat.rgb16Snorm">

```lx
PixelFormat.rgb16Snorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rgb16Uint</h4><a class="signature-arity" href="#PixelFormat.rgb16Uint" title="Permanent link">1</a><signature id="PixelFormat.rgb16Uint">

```lx
PixelFormat.rgb16Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rgb16Sint</h4><a class="signature-arity" href="#PixelFormat.rgb16Sint" title="Permanent link">1</a><signature id="PixelFormat.rgb16Sint">

```lx
PixelFormat.rgb16Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Float"></endpoint>
<h4 class="signature_head">PixelFormat.rgb16Float</h4><a class="signature-arity" href="#PixelFormat.rgb16Float" title="Permanent link">1</a><signature id="PixelFormat.rgb16Float">

```lx
PixelFormat.rgb16Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rgb32Uint</h4><a class="signature-arity" href="#PixelFormat.rgb32Uint" title="Permanent link">1</a><signature id="PixelFormat.rgb32Uint">

```lx
PixelFormat.rgb32Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rgb32Sint</h4><a class="signature-arity" href="#PixelFormat.rgb32Sint" title="Permanent link">1</a><signature id="PixelFormat.rgb32Sint">

```lx
PixelFormat.rgb32Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Float"></endpoint>
<h4 class="signature_head">PixelFormat.rgb32Float</h4><a class="signature-arity" href="#PixelFormat.rgb32Float" title="Permanent link">1</a><signature id="PixelFormat.rgb32Float">

```lx
PixelFormat.rgb32Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Unorm"></endpoint>
<h4 class="signature_head">PixelFormat.rgba8Unorm</h4><a class="signature-arity" href="#PixelFormat.rgba8Unorm" title="Permanent link">1</a><signature id="PixelFormat.rgba8Unorm">

```lx
PixelFormat.rgba8Unorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Unorm_srgb"></endpoint>
<h4 class="signature_head">PixelFormat.rgba8Unorm_srgb</h4><a class="signature-arity" href="#PixelFormat.rgba8Unorm_srgb" title="Permanent link">1</a><signature id="PixelFormat.rgba8Unorm_srgb">

```lx
PixelFormat.rgba8Unorm_srgb : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Snorm"></endpoint>
<h4 class="signature_head">PixelFormat.rgba8Snorm</h4><a class="signature-arity" href="#PixelFormat.rgba8Snorm" title="Permanent link">1</a><signature id="PixelFormat.rgba8Snorm">

```lx
PixelFormat.rgba8Snorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rgba8Uint</h4><a class="signature-arity" href="#PixelFormat.rgba8Uint" title="Permanent link">1</a><signature id="PixelFormat.rgba8Uint">

```lx
PixelFormat.rgba8Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rgba8Sint</h4><a class="signature-arity" href="#PixelFormat.rgba8Sint" title="Permanent link">1</a><signature id="PixelFormat.rgba8Sint">

```lx
PixelFormat.rgba8Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Unorm"></endpoint>
<h4 class="signature_head">PixelFormat.rgba16Unorm</h4><a class="signature-arity" href="#PixelFormat.rgba16Unorm" title="Permanent link">1</a><signature id="PixelFormat.rgba16Unorm">

```lx
PixelFormat.rgba16Unorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Snorm"></endpoint>
<h4 class="signature_head">PixelFormat.rgba16Snorm</h4><a class="signature-arity" href="#PixelFormat.rgba16Snorm" title="Permanent link">1</a><signature id="PixelFormat.rgba16Snorm">

```lx
PixelFormat.rgba16Snorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rgba16Uint</h4><a class="signature-arity" href="#PixelFormat.rgba16Uint" title="Permanent link">1</a><signature id="PixelFormat.rgba16Uint">

```lx
PixelFormat.rgba16Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rgba16Sint</h4><a class="signature-arity" href="#PixelFormat.rgba16Sint" title="Permanent link">1</a><signature id="PixelFormat.rgba16Sint">

```lx
PixelFormat.rgba16Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Float"></endpoint>
<h4 class="signature_head">PixelFormat.rgba16Float</h4><a class="signature-arity" href="#PixelFormat.rgba16Float" title="Permanent link">1</a><signature id="PixelFormat.rgba16Float">

```lx
PixelFormat.rgba16Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rgba32Uint</h4><a class="signature-arity" href="#PixelFormat.rgba32Uint" title="Permanent link">1</a><signature id="PixelFormat.rgba32Uint">

```lx
PixelFormat.rgba32Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rgba32Sint</h4><a class="signature-arity" href="#PixelFormat.rgba32Sint" title="Permanent link">1</a><signature id="PixelFormat.rgba32Sint">

```lx
PixelFormat.rgba32Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Float"></endpoint>
<h4 class="signature_head">PixelFormat.rgba32Float</h4><a class="signature-arity" href="#PixelFormat.rgba32Float" title="Permanent link">1</a><signature id="PixelFormat.rgba32Float">

```lx
PixelFormat.rgba32Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r11g11b10Float"></endpoint>
<h4 class="signature_head">PixelFormat.r11g11b10Float</h4><a class="signature-arity" href="#PixelFormat.r11g11b10Float" title="Permanent link">1</a><signature id="PixelFormat.r11g11b10Float">

```lx
PixelFormat.r11g11b10Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bgra8Unorm"></endpoint>
<h4 class="signature_head">PixelFormat.bgra8Unorm</h4><a class="signature-arity" href="#PixelFormat.bgra8Unorm" title="Permanent link">1</a><signature id="PixelFormat.bgra8Unorm">

```lx
PixelFormat.bgra8Unorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bgra8Unorm_srgb"></endpoint>
<h4 class="signature_head">PixelFormat.bgra8Unorm_srgb</h4><a class="signature-arity" href="#PixelFormat.bgra8Unorm_srgb" title="Permanent link">1</a><signature id="PixelFormat.bgra8Unorm_srgb">

```lx
PixelFormat.bgra8Unorm_srgb : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth16Unorm"></endpoint>
<h4 class="signature_head">PixelFormat.depth16Unorm</h4><a class="signature-arity" href="#PixelFormat.depth16Unorm" title="Permanent link">1</a><signature id="PixelFormat.depth16Unorm">

```lx
PixelFormat.depth16Unorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth32Float"></endpoint>
<h4 class="signature_head">PixelFormat.depth32Float</h4><a class="signature-arity" href="#PixelFormat.depth32Float" title="Permanent link">1</a><signature id="PixelFormat.depth32Float">

```lx
PixelFormat.depth32Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="stencil8"></endpoint>
<h4 class="signature_head">PixelFormat.stencil8</h4><a class="signature-arity" href="#PixelFormat.stencil8" title="Permanent link">1</a><signature id="PixelFormat.stencil8">

```lx
PixelFormat.stencil8 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth24Unorm_stencil8"></endpoint>
<h4 class="signature_head">PixelFormat.depth24Unorm_stencil8</h4><a class="signature-arity" href="#PixelFormat.depth24Unorm_stencil8" title="Permanent link">1</a><signature id="PixelFormat.depth24Unorm_stencil8">

```lx
PixelFormat.depth24Unorm_stencil8 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth32Float_stencil8"></endpoint>
<h4 class="signature_head">PixelFormat.depth32Float_stencil8</h4><a class="signature-arity" href="#PixelFormat.depth32Float_stencil8" title="Permanent link">1</a><signature id="PixelFormat.depth32Float_stencil8">

```lx
PixelFormat.depth32Float_stencil8 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bc1_rgba"></endpoint>
<h4 class="signature_head">PixelFormat.bc1_rgba</h4><a class="signature-arity" href="#PixelFormat.bc1_rgba" title="Permanent link">1</a><signature id="PixelFormat.bc1_rgba">

```lx
PixelFormat.bc1_rgba : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bc3_rgba"></endpoint>
<h4 class="signature_head">PixelFormat.bc3_rgba</h4><a class="signature-arity" href="#PixelFormat.bc3_rgba" title="Permanent link">1</a><signature id="PixelFormat.bc3_rgba">

```lx
PixelFormat.bc3_rgba : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Unorm"></endpoint>
<h4 class="signature_head">PixelFormat.r8Unorm</h4><a class="signature-arity" href="#PixelFormat.r8Unorm" title="Permanent link">1</a><signature id="PixelFormat.r8Unorm">

```lx
PixelFormat.r8Unorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Snorm"></endpoint>
<h4 class="signature_head">PixelFormat.r8Snorm</h4><a class="signature-arity" href="#PixelFormat.r8Snorm" title="Permanent link">1</a><signature id="PixelFormat.r8Snorm">

```lx
PixelFormat.r8Snorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Uint"></endpoint>
<h4 class="signature_head">PixelFormat.r8Uint</h4><a class="signature-arity" href="#PixelFormat.r8Uint" title="Permanent link">1</a><signature id="PixelFormat.r8Uint">

```lx
PixelFormat.r8Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Sint"></endpoint>
<h4 class="signature_head">PixelFormat.r8Sint</h4><a class="signature-arity" href="#PixelFormat.r8Sint" title="Permanent link">1</a><signature id="PixelFormat.r8Sint">

```lx
PixelFormat.r8Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Unorm"></endpoint>
<h4 class="signature_head">PixelFormat.rg8Unorm</h4><a class="signature-arity" href="#PixelFormat.rg8Unorm" title="Permanent link">1</a><signature id="PixelFormat.rg8Unorm">

```lx
PixelFormat.rg8Unorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Snorm"></endpoint>
<h4 class="signature_head">PixelFormat.rg8Snorm</h4><a class="signature-arity" href="#PixelFormat.rg8Snorm" title="Permanent link">1</a><signature id="PixelFormat.rg8Snorm">

```lx
PixelFormat.rg8Snorm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rg8Uint</h4><a class="signature-arity" href="#PixelFormat.rg8Uint" title="Permanent link">1</a><signature id="PixelFormat.rg8Uint">

```lx
PixelFormat.rg8Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rg8Sint</h4><a class="signature-arity" href="#PixelFormat.rg8Sint" title="Permanent link">1</a><signature id="PixelFormat.rg8Sint">

```lx
PixelFormat.rg8Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Uint"></endpoint>
<h4 class="signature_head">PixelFormat.r16Uint</h4><a class="signature-arity" href="#PixelFormat.r16Uint" title="Permanent link">1</a><signature id="PixelFormat.r16Uint">

```lx
PixelFormat.r16Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Sint"></endpoint>
<h4 class="signature_head">PixelFormat.r16Sint</h4><a class="signature-arity" href="#PixelFormat.r16Sint" title="Permanent link">1</a><signature id="PixelFormat.r16Sint">

```lx
PixelFormat.r16Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Float"></endpoint>
<h4 class="signature_head">PixelFormat.r16Float</h4><a class="signature-arity" href="#PixelFormat.r16Float" title="Permanent link">1</a><signature id="PixelFormat.r16Float">

```lx
PixelFormat.r16Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rg16Uint</h4><a class="signature-arity" href="#PixelFormat.rg16Uint" title="Permanent link">1</a><signature id="PixelFormat.rg16Uint">

```lx
PixelFormat.rg16Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rg16Sint</h4><a class="signature-arity" href="#PixelFormat.rg16Sint" title="Permanent link">1</a><signature id="PixelFormat.rg16Sint">

```lx
PixelFormat.rg16Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Float"></endpoint>
<h4 class="signature_head">PixelFormat.rg16Float</h4><a class="signature-arity" href="#PixelFormat.rg16Float" title="Permanent link">1</a><signature id="PixelFormat.rg16Float">

```lx
PixelFormat.rg16Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Uint"></endpoint>
<h4 class="signature_head">PixelFormat.r32Uint</h4><a class="signature-arity" href="#PixelFormat.r32Uint" title="Permanent link">1</a><signature id="PixelFormat.r32Uint">

```lx
PixelFormat.r32Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Sint"></endpoint>
<h4 class="signature_head">PixelFormat.r32Sint</h4><a class="signature-arity" href="#PixelFormat.r32Sint" title="Permanent link">1</a><signature id="PixelFormat.r32Sint">

```lx
PixelFormat.r32Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Float"></endpoint>
<h4 class="signature_head">PixelFormat.r32Float</h4><a class="signature-arity" href="#PixelFormat.r32Float" title="Permanent link">1</a><signature id="PixelFormat.r32Float">

```lx
PixelFormat.r32Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Uint"></endpoint>
<h4 class="signature_head">PixelFormat.rg32Uint</h4><a class="signature-arity" href="#PixelFormat.rg32Uint" title="Permanent link">1</a><signature id="PixelFormat.rg32Uint">

```lx
PixelFormat.rg32Uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Sint"></endpoint>
<h4 class="signature_head">PixelFormat.rg32Sint</h4><a class="signature-arity" href="#PixelFormat.rg32Sint" title="Permanent link">1</a><signature id="PixelFormat.rg32Sint">

```lx
PixelFormat.rg32Sint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Float"></endpoint>
<h4 class="signature_head">PixelFormat.rg32Float</h4><a class="signature-arity" href="#PixelFormat.rg32Float" title="Permanent link">1</a><signature id="PixelFormat.rg32Float">

```lx
PixelFormat.rg32Float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">PixelFormat.from_string</h4><a class="signature-arity" href="#PixelFormat.from_string" title="Permanent link">1</a><signature id="PixelFormat.from_string">

```lx
PixelFormat.from_string(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">PixelFormat.name</h4><a class="signature-arity" href="#PixelFormat.name" title="Permanent link">1</a><signature id="PixelFormat.name">

```lx
PixelFormat.name(value : Any) : unknown
```
</signature>

> no docs found   


### Pose
`import "luxe: render" for Pose{:lx}`
> no docs found

- [create](#Pose.create)(**skeleton**: `Skeleton{:lx}`)
- [destroy](#Pose.destroy)(**pose**: `Pose{:lx}`)
- [reset](#Pose.reset)(**pose**: `Pose{:lx}`)
- [copy](#Pose.copy+2)(**from**: `Pose{:lx}`, **to**: `Pose{:lx}`)
- [get_bone_pos_joint](#Pose.get_bone_pos_joint+2)(**pose**: `Pose{:lx}`, **bone_id**: `String{:lx}`)
- [get_bone_pos](#Pose.get_bone_pos+2)(**pose**: `Pose{:lx}`, **bone_id**: `String{:lx}`)
- [get_bone_up](#Pose.get_bone_up+2)(**pose**: `Pose{:lx}`, **bone_id**: `String{:lx}`)
- [get_bone_forward](#Pose.get_bone_forward+2)(**pose**: `Pose{:lx}`, **bone_id**: `String{:lx}`)
- [get_bone_right](#Pose.get_bone_right+2)(**pose**: `Pose{:lx}`, **bone_id**: `String{:lx}`)


---

<endpoint module="luxe: render" class="Pose" signature="create(skeleton : Skeleton)"></endpoint>
<h4 class="signature_head">Pose.create</h4><a class="signature-arity" href="#Pose.create" title="Permanent link">1</a><signature id="Pose.create">

```lx
Pose.create(skeleton : Skeleton) : Pose
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Pose" signature="destroy(pose : Pose)"></endpoint>
<h4 class="signature_head">Pose.destroy</h4><a class="signature-arity" href="#Pose.destroy" title="Permanent link">1</a><signature id="Pose.destroy">

```lx
Pose.destroy(pose : Pose) : None
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Pose" signature="reset(pose : Pose)"></endpoint>
<h4 class="signature_head">Pose.reset</h4><a class="signature-arity" href="#Pose.reset" title="Permanent link">1</a><signature id="Pose.reset">

```lx
Pose.reset(pose : Pose) : None
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Pose" signature="copy(from : Pose, to : Pose)"></endpoint>
<h4 class="signature_head">Pose.copy</h4><a class="signature-arity" href="#Pose.copy+2" title="Permanent link">2</a><signature id="Pose.copy+2">

```lx
Pose.copy(from : Pose, to : Pose) : None
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_pos_joint(pose : Pose, bone_id : String)"></endpoint>
<h4 class="signature_head">Pose.get_bone_pos_joint</h4><a class="signature-arity" href="#Pose.get_bone_pos_joint+2" title="Permanent link">2</a><signature id="Pose.get_bone_pos_joint+2">

```lx
Pose.get_bone_pos_joint(pose : Pose, bone_id : String) : Float3
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_pos(pose : Pose, bone_id : String)"></endpoint>
<h4 class="signature_head">Pose.get_bone_pos</h4><a class="signature-arity" href="#Pose.get_bone_pos+2" title="Permanent link">2</a><signature id="Pose.get_bone_pos+2">

```lx
Pose.get_bone_pos(pose : Pose, bone_id : String) : Float3
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_up(pose : Pose, bone_id : String)"></endpoint>
<h4 class="signature_head">Pose.get_bone_up</h4><a class="signature-arity" href="#Pose.get_bone_up+2" title="Permanent link">2</a><signature id="Pose.get_bone_up+2">

```lx
Pose.get_bone_up(pose : Pose, bone_id : String) : Float3
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_forward(pose : Pose, bone_id : String)"></endpoint>
<h4 class="signature_head">Pose.get_bone_forward</h4><a class="signature-arity" href="#Pose.get_bone_forward+2" title="Permanent link">2</a><signature id="Pose.get_bone_forward+2">

```lx
Pose.get_bone_forward(pose : Pose, bone_id : String) : Float3
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_right(pose : Pose, bone_id : String)"></endpoint>
<h4 class="signature_head">Pose.get_bone_right</h4><a class="signature-arity" href="#Pose.get_bone_right+2" title="Permanent link">2</a><signature id="Pose.get_bone_right+2">

```lx
Pose.get_bone_right(pose : Pose, bone_id : String) : Float3
```
</signature>

> no docs found   


### PoseGraph
`import "luxe: render" for PoseGraph{:lx}`
> no docs found

- [create](#PoseGraph.create)(**skeleton**: `Skeleton{:lx}`)
- [destroy](#PoseGraph.destroy)(**graph**: `PoseGraph{:lx}`)
- [valid](#PoseGraph.valid)(**graph**: `PoseGraph{:lx}`)
- [tick](#PoseGraph.tick+2)(**graph**: `PoseGraph{:lx}`, **delta**: `Num{:lx}`)
- [pose](#PoseGraph.pose)(**graph**: `PoseGraph{:lx}`)
- [set_time](#PoseGraph.set_time+2)(**graph**: `PoseGraph{:lx}`, **time**: `Num{:lx}`)
- [get_time](#PoseGraph.get_time)(**graph**: `PoseGraph{:lx}`)
- [node_add](#PoseGraph.node_add+2)(**graph**: `PoseGraph{:lx}`, **node**: `PoseNode{:lx}`)
- [node_remove](#PoseGraph.node_remove+2)(**graph**: `PoseGraph{:lx}`, **index**: `Num{:lx}`)
- [node_at](#PoseGraph.node_at+2)(**graph**: `PoseGraph{:lx}`, **index**: `Num{:lx}`)
- [node_index](#PoseGraph.node_index+2)(**graph**: `PoseGraph{:lx}`, **node**: `PoseNode{:lx}`)
- [node_count](#PoseGraph.node_count)(**graph**: `PoseGraph{:lx}`)


---

<endpoint module="luxe: render" class="PoseGraph" signature="create(skeleton : Skeleton)"></endpoint>
<h4 class="signature_head">PoseGraph.create</h4><a class="signature-arity" href="#PoseGraph.create" title="Permanent link">1</a><signature id="PoseGraph.create">

```lx
PoseGraph.create(skeleton : Skeleton) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="destroy(graph : PoseGraph)"></endpoint>
<h4 class="signature_head">PoseGraph.destroy</h4><a class="signature-arity" href="#PoseGraph.destroy" title="Permanent link">1</a><signature id="PoseGraph.destroy">

```lx
PoseGraph.destroy(graph : PoseGraph) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="valid(graph : PoseGraph)"></endpoint>
<h4 class="signature_head">PoseGraph.valid</h4><a class="signature-arity" href="#PoseGraph.valid" title="Permanent link">1</a><signature id="PoseGraph.valid">

```lx
PoseGraph.valid(graph : PoseGraph) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="tick(graph : PoseGraph, delta : Num)"></endpoint>
<h4 class="signature_head">PoseGraph.tick</h4><a class="signature-arity" href="#PoseGraph.tick+2" title="Permanent link">2</a><signature id="PoseGraph.tick+2">

```lx
PoseGraph.tick(graph : PoseGraph, delta : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="pose(graph : PoseGraph)"></endpoint>
<h4 class="signature_head">PoseGraph.pose</h4><a class="signature-arity" href="#PoseGraph.pose" title="Permanent link">1</a><signature id="PoseGraph.pose">

```lx
PoseGraph.pose(graph : PoseGraph) : Pose
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="set_time(graph : PoseGraph, time : Num)"></endpoint>
<h4 class="signature_head">PoseGraph.set_time</h4><a class="signature-arity" href="#PoseGraph.set_time+2" title="Permanent link">2</a><signature id="PoseGraph.set_time+2">

```lx
PoseGraph.set_time(graph : PoseGraph, time : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="get_time(graph : PoseGraph)"></endpoint>
<h4 class="signature_head">PoseGraph.get_time</h4><a class="signature-arity" href="#PoseGraph.get_time" title="Permanent link">1</a><signature id="PoseGraph.get_time">

```lx
PoseGraph.get_time(graph : PoseGraph) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_add(graph : PoseGraph, node : PoseNode)"></endpoint>
<h4 class="signature_head">PoseGraph.node_add</h4><a class="signature-arity" href="#PoseGraph.node_add+2" title="Permanent link">2</a><signature id="PoseGraph.node_add+2">

```lx
PoseGraph.node_add(graph : PoseGraph, node : PoseNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_remove(graph : PoseGraph, index : Num)"></endpoint>
<h4 class="signature_head">PoseGraph.node_remove</h4><a class="signature-arity" href="#PoseGraph.node_remove+2" title="Permanent link">2</a><signature id="PoseGraph.node_remove+2">

```lx
PoseGraph.node_remove(graph : PoseGraph, index : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_at(graph : PoseGraph, index : Num)"></endpoint>
<h4 class="signature_head">PoseGraph.node_at</h4><a class="signature-arity" href="#PoseGraph.node_at+2" title="Permanent link">2</a><signature id="PoseGraph.node_at+2">

```lx
PoseGraph.node_at(graph : PoseGraph, index : Num) : PoseNode
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_index(graph : PoseGraph, node : PoseNode)"></endpoint>
<h4 class="signature_head">PoseGraph.node_index</h4><a class="signature-arity" href="#PoseGraph.node_index+2" title="Permanent link">2</a><signature id="PoseGraph.node_index+2">

```lx
PoseGraph.node_index(graph : PoseGraph, node : PoseNode) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_count(graph : PoseGraph)"></endpoint>
<h4 class="signature_head">PoseGraph.node_count</h4><a class="signature-arity" href="#PoseGraph.node_count" title="Permanent link">1</a><signature id="PoseGraph.node_count">

```lx
PoseGraph.node_count(graph : PoseGraph) : Num
```
</signature>

> no docs found   


### PoseNode
`import "luxe: render" for PoseNode{:lx}`
> no docs found

- [create](#PoseNode.create)(**node_type_id**: `String{:lx}`)
- [destroy](#PoseNode.destroy)(**node**: `PoseNode{:lx}`)
- [valid](#PoseNode.valid)(**node**: `PoseNode{:lx}`)
- [pose](#PoseNode.pose)(**node**: `PoseNode{:lx}`)
- [block](#PoseNode.block)(**node**: `PoseNode{:lx}`)
- [input](#PoseNode.input)(**node**: `PoseNode{:lx}`)


---

<endpoint module="luxe: render" class="PoseNode" signature="create(node_type_id : String)"></endpoint>
<h4 class="signature_head">PoseNode.create</h4><a class="signature-arity" href="#PoseNode.create" title="Permanent link">1</a><signature id="PoseNode.create">

```lx
PoseNode.create(node_type_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="destroy(node : PoseNode)"></endpoint>
<h4 class="signature_head">PoseNode.destroy</h4><a class="signature-arity" href="#PoseNode.destroy" title="Permanent link">1</a><signature id="PoseNode.destroy">

```lx
PoseNode.destroy(node : PoseNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="valid(node : PoseNode)"></endpoint>
<h4 class="signature_head">PoseNode.valid</h4><a class="signature-arity" href="#PoseNode.valid" title="Permanent link">1</a><signature id="PoseNode.valid">

```lx
PoseNode.valid(node : PoseNode) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="pose(node : PoseNode)"></endpoint>
<h4 class="signature_head">PoseNode.pose</h4><a class="signature-arity" href="#PoseNode.pose" title="Permanent link">1</a><signature id="PoseNode.pose">

```lx
PoseNode.pose(node : PoseNode) : Pose
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="block(node : PoseNode)"></endpoint>
<h4 class="signature_head">PoseNode.block</h4><a class="signature-arity" href="#PoseNode.block" title="Permanent link">1</a><signature id="PoseNode.block">

```lx
PoseNode.block(node : PoseNode) : Block
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="input(node : PoseNode)"></endpoint>
<h4 class="signature_head">PoseNode.input</h4><a class="signature-arity" href="#PoseNode.input" title="Permanent link">1</a><signature id="PoseNode.input">

```lx
PoseNode.input(node : PoseNode) : Any
```
</signature>

> no docs found   


### Primitive
`import "luxe: render" for Primitive{:lx}`
> no docs found

- [point](#Primitive.point)
- [line](#Primitive.line)
- [line_strip](#Primitive.line_strip)
- [triangle](#Primitive.triangle)
- [triangle_strip](#Primitive.triangle_strip)
- [from_string](#Primitive.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="Primitive" signature="point"></endpoint>
<h4 class="signature_head">Primitive.point</h4><a class="signature-arity" href="#Primitive.point" title="Permanent link">1</a><signature id="Primitive.point">

```lx
Primitive.point : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="line"></endpoint>
<h4 class="signature_head">Primitive.line</h4><a class="signature-arity" href="#Primitive.line" title="Permanent link">1</a><signature id="Primitive.line">

```lx
Primitive.line : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="line_strip"></endpoint>
<h4 class="signature_head">Primitive.line_strip</h4><a class="signature-arity" href="#Primitive.line_strip" title="Permanent link">1</a><signature id="Primitive.line_strip">

```lx
Primitive.line_strip : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="triangle"></endpoint>
<h4 class="signature_head">Primitive.triangle</h4><a class="signature-arity" href="#Primitive.triangle" title="Permanent link">1</a><signature id="Primitive.triangle">

```lx
Primitive.triangle : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="triangle_strip"></endpoint>
<h4 class="signature_head">Primitive.triangle_strip</h4><a class="signature-arity" href="#Primitive.triangle_strip" title="Permanent link">1</a><signature id="Primitive.triangle_strip">

```lx
Primitive.triangle_strip : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">Primitive.from_string</h4><a class="signature-arity" href="#Primitive.from_string" title="Permanent link">1</a><signature id="Primitive.from_string">

```lx
Primitive.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### Render
`import "luxe: render" for Render{:lx}`
> no docs found

- [dispatch](#Render.dispatch+5)(**library**: `String{:lx}`, **function**: `String{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [submit](#Render.submit+6)(**set**: `RenderSet{:lx}`, **target_path**: `RenderPath{:lx}`, **target_resource**: `String{:lx}`, **target_region**: `Float4{:lx}`, **mat_proj**: `Floats{:lx}`, **mat_view**: `Floats{:lx}`)
- [submit_now](#Render.submit_now+6)(**set**: `RenderSet{:lx}`, **target_path**: `RenderPath{:lx}`, **target_resource**: `String{:lx}`, **target_region**: `Float4{:lx}`, **mat_proj**: `Floats{:lx}`, **mat_view**: `Floats{:lx}`)
- [submit_fn](#Render.submit_fn+8)(**set**: `RenderSet{:lx}`, **target_path**: `String{:lx}`, **target_resource**: `String{:lx}`, **target_region**: `Float4{:lx}`, **mat_proj**: `Floats{:lx}`, **mat_view**: `Floats{:lx}`, **settings**: `Maps{:lx}`, **fn**: `Fn{:lx}`)
- [create_set](#Render.create_set)()
- [destroy_set](#Render.destroy_set)(**set**: `RenderSet{:lx}`)
- [valid_set](#Render.valid_set)(**set**: `RenderSet{:lx}`)
- [set_add](#Render.set_add+2)(**set**: `RenderSet{:lx}`, **geo**: `Geometry{:lx}`)
- [set_remove](#Render.set_remove+2)(**set**: `RenderSet{:lx}`, **geo**: `Geometry{:lx}`)
- [set_get_geometry](#Render.set_get_geometry+2)(**set**: `RenderSet{:lx}`, **into**: `List{:lx}`)
- [set_get_count](#Render.set_get_count)(**set**: `RenderSet{:lx}`)
- [create_path](#Render.create_path)()
- [destroy_path](#Render.destroy_path)(**path**: `RenderPath{:lx}`)
- [valid_path](#Render.valid_path)(**path**: `RenderPath{:lx}`)
- [display_dpi](#Render.display_dpi)()
- [display_scale](#Render.display_scale)()
- [window_w](#Render.window_w)()
- [window_h](#Render.window_h)()
- [window_state](#Render.window_state)()
- [window_focus](#Render.window_focus)()
- [window_hide](#Render.window_hide)(**state**: `Any{:lx}`)
- [drawable_w](#Render.drawable_w)()
- [drawable_h](#Render.drawable_h)()
- [drawable_ratio](#Render.drawable_ratio)()
- [window_set_title](#Render.window_set_title)(**title**: `String{:lx}`)
- [get_path_vertices](#Render.get_path_vertices+13)(**into_pos**: `Any{:lx}`, **offset_pos**: `Any{:lx}`, **stride_pos**: `Any{:lx}`, **into_color**: `Any{:lx}`, **offset_color**: `Any{:lx}`, **stride_color**: `Any{:lx}`, **points**: `Any{:lx}`, **color**: `Any{:lx}`, **thickness**: `Any{:lx}`, **cap**: `Any{:lx}`, **join**: `Any{:lx}`, **closed**: `Any{:lx}`, **miter_limit**: `Any{:lx}`)
- [get_path_vertex_count](#Render.get_path_vertex_count+6)(**points**: `Any{:lx}`, **thickness**: `Any{:lx}`, **cap**: `Any{:lx}`, **join**: `Any{:lx}`, **closed**: `Any{:lx}`, **miter_limit**: `Any{:lx}`)
- [push_render_dest](#Render.push_render_dest+2)(**dest**: `Any{:lx}`, **into**: `Any{:lx}`)
- [path_add_render_layers](#Render.path_add_render_layers+4)(**path**: `Any{:lx}`, **name**: `Any{:lx}`, **layers_add**: `Any{:lx}`, **layer**: `Any{:lx}`)
- [path_add_render_layers](#Render.path_add_render_layers+5)(**path**: `Any{:lx}`, **name**: `Any{:lx}`, **layers_add**: `Any{:lx}`, **layers_exclude**: `Any{:lx}`, **layer**: `RenderLayerDesc{:lx}`)
- [path_add_render_layer](#Render.path_add_render_layer+3)(**path**: `Any{:lx}`, **name**: `Any{:lx}`, **layer**: `RenderLayerDesc{:lx}`)
- [path_add_compute_layer](#Render.path_add_compute_layer+5)(**path**: `Any{:lx}`, **compute_id**: `Any{:lx}`, **display**: `Any{:lx}`, **dimensions**: `Any{:lx}`, **inputs**: `Any{:lx}`)
- [path_add_pass_layer](#Render.path_add_pass_layer+4)(**path**: `Any{:lx}`, **name**: `Any{:lx}`, **dest**: `Any{:lx}`, **material**: `Any{:lx}`)
- [path_remove](#Render.path_remove+2)(**path**: `Any{:lx}`, **name**: `Any{:lx}`)
- [path_update](#Render.path_update+3)(**path**: `Any{:lx}`, **name**: `Any{:lx}`, **layer**: `RenderLayerDesc{:lx}`)
- [define_compute](#Render.define_compute+4)(**name**: `String{:lx}`, **library**: `String{:lx}`, **function**: `String{:lx}`, **blocks**: `List{:lx}`)
- [undefine_compute](#Render.undefine_compute)(**name**: `Any{:lx}`)
- [undefine_sampler_state](#Render.undefine_sampler_state)(**name**: `Any{:lx}`)
- [define_sampler_state](#Render.define_sampler_state+2)(**name**: `Any{:lx}`, **desc**: `Any{:lx}`)
- [define_vertex_format](#Render.define_vertex_format+2)(**name**: `Any{:lx}`, **desc**: `Any{:lx}`)
- [undefine_vertex_format](#Render.undefine_vertex_format)(**name**: `Any{:lx}`)
- [define_resource](#Render.define_resource+2)(**name**: `Any{:lx}`, **image**: `Any{:lx}`)
- [resource_get_image](#Render.resource_get_image)(**name**: `Any{:lx}`)
- [undefine_resource](#Render.undefine_resource)(**name**: `Any{:lx}`)
- [create_vertex_buffer](#Render.create_vertex_buffer+2)(**data**: `Any{:lx}`, **length**: `Any{:lx}`)
- [vertex_buffer_get_size](#Render.vertex_buffer_get_size)(**vertex_buffer**: `Any{:lx}`)
- [vertex_buffer_get_data](#Render.vertex_buffer_get_data+4)(**vertex_buffer**: `Any{:lx}`, **into**: `Any{:lx}`, **length**: `Any{:lx}`, **offset**: `Any{:lx}`)
- [vertex_buffer_replace](#Render.vertex_buffer_replace+3)(**vertex_buffer**: `Any{:lx}`, **data**: `Any{:lx}`, **length**: `Any{:lx}`)
- [vertex_buffer_update](#Render.vertex_buffer_update+5)(**vertex_buffer**: `Any{:lx}`, **data**: `Any{:lx}`, **length**: `Any{:lx}`, **data_src_offset**: `Any{:lx}`, **dest_offset**: `Any{:lx}`)
- [destroy_vertex_buffer](#Render.destroy_vertex_buffer)(**vertex_buffer**: `Any{:lx}`)
- [create_index_buffer](#Render.create_index_buffer+2)(**data**: `Any{:lx}`, **length**: `Any{:lx}`)
- [create_index_buffer32](#Render.create_index_buffer32+2)(**data**: `Any{:lx}`, **length**: `Any{:lx}`)
- [index_buffer_get_size](#Render.index_buffer_get_size)(**index_buffer**: `Any{:lx}`)
- [index_buffer_get_data](#Render.index_buffer_get_data+4)(**index_buffer**: `Any{:lx}`, **into**: `Any{:lx}`, **length**: `Any{:lx}`, **offset**: `Any{:lx}`)
- [index_buffer_replace](#Render.index_buffer_replace+3)(**index_buffer**: `Any{:lx}`, **data**: `Any{:lx}`, **length**: `Any{:lx}`)
- [index_buffer_update](#Render.index_buffer_update+5)(**index_buffer**: `Any{:lx}`, **data**: `Any{:lx}`, **length**: `Any{:lx}`, **data_src_offset**: `Any{:lx}`, **dest_offset**: `Any{:lx}`)
- [destroy_index_buffer](#Render.destroy_index_buffer)(**index_buffer**: `Any{:lx}`)
- [create_text](#Render.create_text+5)(**material**: `Any{:lx}`, **default_size**: `Any{:lx}`, **default_font**: `Any{:lx}`, **default_color**: `Any{:lx}`, **render_set**: `Any{:lx}`)
- [destroy_text](#Render.destroy_text)(**text**: `Any{:lx}`)
- [valid_text](#Render.valid_text)(**text**: `Any{:lx}`)
- [text_attr_clear](#Render.text_attr_clear)(**text**: `Any{:lx}`)
- [text_set_text_buffer](#Render.text_set_text_buffer+2)(**text**: `Any{:lx}`, **string**: `Any{:lx}`)
- [text_set_attr](#Render.text_set_attr+6)(**text**: `Text{:lx}`, **start**: `Num{:lx}`, **length**: `Num{:lx}`, **type**: `TextAttrType{:lx}`, **key**: `String{:lx}`, **value**: `Any{:lx}`)
- [text_set_outline](#Render.text_set_outline+5)(**text**: `Text{:lx}`, **radius**: `Num{:lx}`, **softness**: `Num{:lx}`, **color**: `Color{:lx}`, **offset**: `Float2{:lx}`)
- [text_set_shadow](#Render.text_set_shadow+5)(**text**: `Text{:lx}`, **radius**: `Num{:lx}`, **softness**: `Num{:lx}`, **color**: `Color{:lx}`, **offset**: `Float2{:lx}`)
- [text_set_pos](#Render.text_set_pos+4)(**text**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **z**: `Any{:lx}`)
- [text_set_align](#Render.text_set_align+3)(**text**: `Any{:lx}`, **align**: `Any{:lx}`, **align_vertical**: `Any{:lx}`)
- [text_set_bounds](#Render.text_set_bounds+5)(**text**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **w**: `Any{:lx}`, **h**: `Any{:lx}`)
- [text_commit](#Render.text_commit)(**text**: `Any{:lx}`)
- [text_get_geometry](#Render.text_get_geometry)(**text**: `Any{:lx}`)
- [text_get_extents](#Render.text_get_extents+3)(**text**: `Any{:lx}`, **offset**: `Any{:lx}`, **count**: `Any{:lx}`)
- [text_get_extents](#Render.text_get_extents)(**text**: `Any{:lx}`)
- [text_get_character_bounds](#Render.text_get_character_bounds+2)(**text**: `Any{:lx}`, **index**: `Any{:lx}`)
- [text_set_enable_markup](#Render.text_set_enable_markup+2)(**text**: `Text{:lx}`, **enable**: `Bool{:lx}`)
- [text_get_enable_markup](#Render.text_get_enable_markup)(**text**: `Text{:lx}`)
- [text_set_text](#Render.text_set_text+2)(**text**: `Any{:lx}`, **string**: `Any{:lx}`)
- [kVertexAttributes](#Render.kVertexAttributes)
- [kColorTargets](#Render.kColorTargets)
- [kMaterialLayerTargets](#Render.kMaterialLayerTargets)
- [kMaterialInputs](#Render.kMaterialInputs)
- [kMaterialReplace](#Render.kMaterialReplace)
- [kMaterialPassUsage](#Render.kMaterialPassUsage)
- [kStencilUnset](#Render.kStencilUnset)


---

<endpoint module="luxe: render" class="Render" signature="dispatch(library : String, function : String, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Render.dispatch</h4><a class="signature-arity" href="#Render.dispatch+5" title="Permanent link">5</a><signature id="Render.dispatch+5">

```lx
Render.dispatch(library : String, function : String, x : Num, y : Num, z : Num) : None
```
</signature>

> Dispatch a compute function directly (todo: doesn't have a way to get inputs atm)   

<endpoint module="luxe: render" class="Render" signature="submit(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats)"></endpoint>
<h4 class="signature_head">Render.submit</h4><a class="signature-arity" href="#Render.submit+6" title="Permanent link">6</a><signature id="Render.submit+6">

```lx
Render.submit(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="submit_now(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats)"></endpoint>
<h4 class="signature_head">Render.submit_now</h4><a class="signature-arity" href="#Render.submit_now+6" title="Permanent link">6</a><signature id="Render.submit_now+6">

```lx
Render.submit_now(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="submit_fn(set : RenderSet, target_path : String, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats, settings : Maps, fn : Fn)"></endpoint>
<h4 class="signature_head">Render.submit_fn</h4><a class="signature-arity" href="#Render.submit_fn+8" title="Permanent link">8</a><signature id="Render.submit_fn+8">

```lx
Render.submit_fn(set : RenderSet, target_path : String, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats, settings : Maps, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_set()"></endpoint>
<h4 class="signature_head">Render.create_set</h4><a class="signature-arity" href="#Render.create_set" title="Permanent link">1</a><signature id="Render.create_set">

```lx
Render.create_set() : RenderSet
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_set(set : RenderSet)"></endpoint>
<h4 class="signature_head">Render.destroy_set</h4><a class="signature-arity" href="#Render.destroy_set" title="Permanent link">1</a><signature id="Render.destroy_set">

```lx
Render.destroy_set(set : RenderSet) : None
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_set(set : RenderSet)"></endpoint>
<h4 class="signature_head">Render.valid_set</h4><a class="signature-arity" href="#Render.valid_set" title="Permanent link">1</a><signature id="Render.valid_set">

```lx
Render.valid_set(set : RenderSet) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_add(set : RenderSet, geo : Geometry)"></endpoint>
<h4 class="signature_head">Render.set_add</h4><a class="signature-arity" href="#Render.set_add+2" title="Permanent link">2</a><signature id="Render.set_add+2">

```lx
Render.set_add(set : RenderSet, geo : Geometry) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_remove(set : RenderSet, geo : Geometry)"></endpoint>
<h4 class="signature_head">Render.set_remove</h4><a class="signature-arity" href="#Render.set_remove+2" title="Permanent link">2</a><signature id="Render.set_remove+2">

```lx
Render.set_remove(set : RenderSet, geo : Geometry) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_get_geometry(set : RenderSet, into : List)"></endpoint>
<h4 class="signature_head">Render.set_get_geometry</h4><a class="signature-arity" href="#Render.set_get_geometry+2" title="Permanent link">2</a><signature id="Render.set_get_geometry+2">

```lx
Render.set_get_geometry(set : RenderSet, into : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_get_count(set : RenderSet)"></endpoint>
<h4 class="signature_head">Render.set_get_count</h4><a class="signature-arity" href="#Render.set_get_count" title="Permanent link">1</a><signature id="Render.set_get_count">

```lx
Render.set_get_count(set : RenderSet) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_path()"></endpoint>
<h4 class="signature_head">Render.create_path</h4><a class="signature-arity" href="#Render.create_path" title="Permanent link">1</a><signature id="Render.create_path">

```lx
Render.create_path() : RenderPath
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_path(path : RenderPath)"></endpoint>
<h4 class="signature_head">Render.destroy_path</h4><a class="signature-arity" href="#Render.destroy_path" title="Permanent link">1</a><signature id="Render.destroy_path">

```lx
Render.destroy_path(path : RenderPath) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_path(path : RenderPath)"></endpoint>
<h4 class="signature_head">Render.valid_path</h4><a class="signature-arity" href="#Render.valid_path" title="Permanent link">1</a><signature id="Render.valid_path">

```lx
Render.valid_path(path : RenderPath) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="display_dpi()"></endpoint>
<h4 class="signature_head">Render.display_dpi</h4><a class="signature-arity" href="#Render.display_dpi" title="Permanent link">1</a><signature id="Render.display_dpi">

```lx
Render.display_dpi() : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="display_scale()"></endpoint>
<h4 class="signature_head">Render.display_scale</h4><a class="signature-arity" href="#Render.display_scale" title="Permanent link">1</a><signature id="Render.display_scale">

```lx
Render.display_scale() : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_w()"></endpoint>
<h4 class="signature_head">Render.window_w</h4><a class="signature-arity" href="#Render.window_w" title="Permanent link">1</a><signature id="Render.window_w">

```lx
Render.window_w() : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_h()"></endpoint>
<h4 class="signature_head">Render.window_h</h4><a class="signature-arity" href="#Render.window_h" title="Permanent link">1</a><signature id="Render.window_h">

```lx
Render.window_h() : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_state()"></endpoint>
<h4 class="signature_head">Render.window_state</h4><a class="signature-arity" href="#Render.window_state" title="Permanent link">1</a><signature id="Render.window_state">

```lx
Render.window_state() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_focus()"></endpoint>
<h4 class="signature_head">Render.window_focus</h4><a class="signature-arity" href="#Render.window_focus" title="Permanent link">1</a><signature id="Render.window_focus">

```lx
Render.window_focus() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_hide(state : Any)"></endpoint>
<h4 class="signature_head">Render.window_hide</h4><a class="signature-arity" href="#Render.window_hide" title="Permanent link">1</a><signature id="Render.window_hide">

```lx
Render.window_hide(state : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_w()"></endpoint>
<h4 class="signature_head">Render.drawable_w</h4><a class="signature-arity" href="#Render.drawable_w" title="Permanent link">1</a><signature id="Render.drawable_w">

```lx
Render.drawable_w() : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_h()"></endpoint>
<h4 class="signature_head">Render.drawable_h</h4><a class="signature-arity" href="#Render.drawable_h" title="Permanent link">1</a><signature id="Render.drawable_h">

```lx
Render.drawable_h() : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_ratio()"></endpoint>
<h4 class="signature_head">Render.drawable_ratio</h4><a class="signature-arity" href="#Render.drawable_ratio" title="Permanent link">1</a><signature id="Render.drawable_ratio">

```lx
Render.drawable_ratio() : Num
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_set_title(title : String)"></endpoint>
<h4 class="signature_head">Render.window_set_title</h4><a class="signature-arity" href="#Render.window_set_title" title="Permanent link">1</a><signature id="Render.window_set_title">

```lx
Render.window_set_title(title : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="get_path_vertices(into_pos : Any, offset_pos : Any, stride_pos : Any, into_color : Any, offset_color : Any, stride_color : Any, points : Any, color : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any)"></endpoint>
<h4 class="signature_head">Render.get_path_vertices</h4><a class="signature-arity" href="#Render.get_path_vertices+13" title="Permanent link">13</a><signature id="Render.get_path_vertices+13">

```lx
Render.get_path_vertices(into_pos : Any, offset_pos : Any, stride_pos : Any, into_color : Any, offset_color : Any, stride_color : Any, points : Any, color : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="get_path_vertex_count(points : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any)"></endpoint>
<h4 class="signature_head">Render.get_path_vertex_count</h4><a class="signature-arity" href="#Render.get_path_vertex_count+6" title="Permanent link">6</a><signature id="Render.get_path_vertex_count+6">

```lx
Render.get_path_vertex_count(points : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="push_render_dest(dest : Any, into : Any)"></endpoint>
<h4 class="signature_head">Render.push_render_dest</h4><a class="signature-arity" href="#Render.push_render_dest+2" title="Permanent link">2</a><signature id="Render.push_render_dest+2">

```lx
Render.push_render_dest(dest : Any, into : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layers(path : Any, name : Any, layers_add : Any, layer : Any)"></endpoint>
<h4 class="signature_head">Render.path_add_render_layers</h4><a class="signature-arity" href="#Render.path_add_render_layers+4" title="Permanent link">4</a><signature id="Render.path_add_render_layers+4">

```lx
Render.path_add_render_layers(path : Any, name : Any, layers_add : Any, layer : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layers(path : Any, name : Any, layers_add : Any, layers_exclude : Any, layer : RenderLayerDesc)"></endpoint>
<h4 class="signature_head">Render.path_add_render_layers</h4><a class="signature-arity" href="#Render.path_add_render_layers+5" title="Permanent link">5</a><signature id="Render.path_add_render_layers+5">

```lx
Render.path_add_render_layers(path : Any, name : Any, layers_add : Any, layers_exclude : Any, layer : RenderLayerDesc) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layer(path : Any, name : Any, layer : RenderLayerDesc)"></endpoint>
<h4 class="signature_head">Render.path_add_render_layer</h4><a class="signature-arity" href="#Render.path_add_render_layer+3" title="Permanent link">3</a><signature id="Render.path_add_render_layer+3">

```lx
Render.path_add_render_layer(path : Any, name : Any, layer : RenderLayerDesc) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_compute_layer(path : Any, compute_id : Any, display : Any, dimensions : Any, inputs : Any)"></endpoint>
<h4 class="signature_head">Render.path_add_compute_layer</h4><a class="signature-arity" href="#Render.path_add_compute_layer+5" title="Permanent link">5</a><signature id="Render.path_add_compute_layer+5">

```lx
Render.path_add_compute_layer(path : Any, compute_id : Any, display : Any, dimensions : Any, inputs : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_pass_layer(path : Any, name : Any, dest : Any, material : Any)"></endpoint>
<h4 class="signature_head">Render.path_add_pass_layer</h4><a class="signature-arity" href="#Render.path_add_pass_layer+4" title="Permanent link">4</a><signature id="Render.path_add_pass_layer+4">

```lx
Render.path_add_pass_layer(path : Any, name : Any, dest : Any, material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_remove(path : Any, name : Any)"></endpoint>
<h4 class="signature_head">Render.path_remove</h4><a class="signature-arity" href="#Render.path_remove+2" title="Permanent link">2</a><signature id="Render.path_remove+2">

```lx
Render.path_remove(path : Any, name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_update(path : Any, name : Any, layer : RenderLayerDesc)"></endpoint>
<h4 class="signature_head">Render.path_update</h4><a class="signature-arity" href="#Render.path_update+3" title="Permanent link">3</a><signature id="Render.path_update+3">

```lx
Render.path_update(path : Any, name : Any, layer : RenderLayerDesc) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_compute(name : String, library : String, function : String, blocks : List)"></endpoint>
<h4 class="signature_head">Render.define_compute</h4><a class="signature-arity" href="#Render.define_compute+4" title="Permanent link">4</a><signature id="Render.define_compute+4">

```lx
Render.define_compute(name : String, library : String, function : String, blocks : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_compute(name : Any)"></endpoint>
<h4 class="signature_head">Render.undefine_compute</h4><a class="signature-arity" href="#Render.undefine_compute" title="Permanent link">1</a><signature id="Render.undefine_compute">

```lx
Render.undefine_compute(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_sampler_state(name : Any)"></endpoint>
<h4 class="signature_head">Render.undefine_sampler_state</h4><a class="signature-arity" href="#Render.undefine_sampler_state" title="Permanent link">1</a><signature id="Render.undefine_sampler_state">

```lx
Render.undefine_sampler_state(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_sampler_state(name : Any, desc : Any)"></endpoint>
<h4 class="signature_head">Render.define_sampler_state</h4><a class="signature-arity" href="#Render.define_sampler_state+2" title="Permanent link">2</a><signature id="Render.define_sampler_state+2">

```lx
Render.define_sampler_state(name : Any, desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_vertex_format(name : Any, desc : Any)"></endpoint>
<h4 class="signature_head">Render.define_vertex_format</h4><a class="signature-arity" href="#Render.define_vertex_format+2" title="Permanent link">2</a><signature id="Render.define_vertex_format+2">

```lx
Render.define_vertex_format(name : Any, desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_vertex_format(name : Any)"></endpoint>
<h4 class="signature_head">Render.undefine_vertex_format</h4><a class="signature-arity" href="#Render.undefine_vertex_format" title="Permanent link">1</a><signature id="Render.undefine_vertex_format">

```lx
Render.undefine_vertex_format(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_resource(name : Any, image : Any)"></endpoint>
<h4 class="signature_head">Render.define_resource</h4><a class="signature-arity" href="#Render.define_resource+2" title="Permanent link">2</a><signature id="Render.define_resource+2">

```lx
Render.define_resource(name : Any, image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="resource_get_image(name : Any)"></endpoint>
<h4 class="signature_head">Render.resource_get_image</h4><a class="signature-arity" href="#Render.resource_get_image" title="Permanent link">1</a><signature id="Render.resource_get_image">

```lx
Render.resource_get_image(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_resource(name : Any)"></endpoint>
<h4 class="signature_head">Render.undefine_resource</h4><a class="signature-arity" href="#Render.undefine_resource" title="Permanent link">1</a><signature id="Render.undefine_resource">

```lx
Render.undefine_resource(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_vertex_buffer(data : Any, length : Any)"></endpoint>
<h4 class="signature_head">Render.create_vertex_buffer</h4><a class="signature-arity" href="#Render.create_vertex_buffer+2" title="Permanent link">2</a><signature id="Render.create_vertex_buffer+2">

```lx
Render.create_vertex_buffer(data : Any, length : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_get_size(vertex_buffer : Any)"></endpoint>
<h4 class="signature_head">Render.vertex_buffer_get_size</h4><a class="signature-arity" href="#Render.vertex_buffer_get_size" title="Permanent link">1</a><signature id="Render.vertex_buffer_get_size">

```lx
Render.vertex_buffer_get_size(vertex_buffer : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_get_data(vertex_buffer : Any, into : Any, length : Any, offset : Any)"></endpoint>
<h4 class="signature_head">Render.vertex_buffer_get_data</h4><a class="signature-arity" href="#Render.vertex_buffer_get_data+4" title="Permanent link">4</a><signature id="Render.vertex_buffer_get_data+4">

```lx
Render.vertex_buffer_get_data(vertex_buffer : Any, into : Any, length : Any, offset : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_replace(vertex_buffer : Any, data : Any, length : Any)"></endpoint>
<h4 class="signature_head">Render.vertex_buffer_replace</h4><a class="signature-arity" href="#Render.vertex_buffer_replace+3" title="Permanent link">3</a><signature id="Render.vertex_buffer_replace+3">

```lx
Render.vertex_buffer_replace(vertex_buffer : Any, data : Any, length : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_update(vertex_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any)"></endpoint>
<h4 class="signature_head">Render.vertex_buffer_update</h4><a class="signature-arity" href="#Render.vertex_buffer_update+5" title="Permanent link">5</a><signature id="Render.vertex_buffer_update+5">

```lx
Render.vertex_buffer_update(vertex_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_vertex_buffer(vertex_buffer : Any)"></endpoint>
<h4 class="signature_head">Render.destroy_vertex_buffer</h4><a class="signature-arity" href="#Render.destroy_vertex_buffer" title="Permanent link">1</a><signature id="Render.destroy_vertex_buffer">

```lx
Render.destroy_vertex_buffer(vertex_buffer : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_index_buffer(data : Any, length : Any)"></endpoint>
<h4 class="signature_head">Render.create_index_buffer</h4><a class="signature-arity" href="#Render.create_index_buffer+2" title="Permanent link">2</a><signature id="Render.create_index_buffer+2">

```lx
Render.create_index_buffer(data : Any, length : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_index_buffer32(data : Any, length : Any)"></endpoint>
<h4 class="signature_head">Render.create_index_buffer32</h4><a class="signature-arity" href="#Render.create_index_buffer32+2" title="Permanent link">2</a><signature id="Render.create_index_buffer32+2">

```lx
Render.create_index_buffer32(data : Any, length : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_get_size(index_buffer : Any)"></endpoint>
<h4 class="signature_head">Render.index_buffer_get_size</h4><a class="signature-arity" href="#Render.index_buffer_get_size" title="Permanent link">1</a><signature id="Render.index_buffer_get_size">

```lx
Render.index_buffer_get_size(index_buffer : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_get_data(index_buffer : Any, into : Any, length : Any, offset : Any)"></endpoint>
<h4 class="signature_head">Render.index_buffer_get_data</h4><a class="signature-arity" href="#Render.index_buffer_get_data+4" title="Permanent link">4</a><signature id="Render.index_buffer_get_data+4">

```lx
Render.index_buffer_get_data(index_buffer : Any, into : Any, length : Any, offset : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_replace(index_buffer : Any, data : Any, length : Any)"></endpoint>
<h4 class="signature_head">Render.index_buffer_replace</h4><a class="signature-arity" href="#Render.index_buffer_replace+3" title="Permanent link">3</a><signature id="Render.index_buffer_replace+3">

```lx
Render.index_buffer_replace(index_buffer : Any, data : Any, length : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_update(index_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any)"></endpoint>
<h4 class="signature_head">Render.index_buffer_update</h4><a class="signature-arity" href="#Render.index_buffer_update+5" title="Permanent link">5</a><signature id="Render.index_buffer_update+5">

```lx
Render.index_buffer_update(index_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_index_buffer(index_buffer : Any)"></endpoint>
<h4 class="signature_head">Render.destroy_index_buffer</h4><a class="signature-arity" href="#Render.destroy_index_buffer" title="Permanent link">1</a><signature id="Render.destroy_index_buffer">

```lx
Render.destroy_index_buffer(index_buffer : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_text(material : Any, default_size : Any, default_font : Any, default_color : Any, render_set : Any)"></endpoint>
<h4 class="signature_head">Render.create_text</h4><a class="signature-arity" href="#Render.create_text+5" title="Permanent link">5</a><signature id="Render.create_text+5">

```lx
Render.create_text(material : Any, default_size : Any, default_font : Any, default_color : Any, render_set : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_text(text : Any)"></endpoint>
<h4 class="signature_head">Render.destroy_text</h4><a class="signature-arity" href="#Render.destroy_text" title="Permanent link">1</a><signature id="Render.destroy_text">

```lx
Render.destroy_text(text : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_text(text : Any)"></endpoint>
<h4 class="signature_head">Render.valid_text</h4><a class="signature-arity" href="#Render.valid_text" title="Permanent link">1</a><signature id="Render.valid_text">

```lx
Render.valid_text(text : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_attr_clear(text : Any)"></endpoint>
<h4 class="signature_head">Render.text_attr_clear</h4><a class="signature-arity" href="#Render.text_attr_clear" title="Permanent link">1</a><signature id="Render.text_attr_clear">

```lx
Render.text_attr_clear(text : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_text_buffer(text : Any, string : Any)"></endpoint>
<h4 class="signature_head">Render.text_set_text_buffer</h4><a class="signature-arity" href="#Render.text_set_text_buffer+2" title="Permanent link">2</a><signature id="Render.text_set_text_buffer+2">

```lx
Render.text_set_text_buffer(text : Any, string : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_attr(text : Text, start : Num, length : Num, type : TextAttrType, key : String, value : Any)"></endpoint>
<h4 class="signature_head">Render.text_set_attr</h4><a class="signature-arity" href="#Render.text_set_attr+6" title="Permanent link">6</a><signature id="Render.text_set_attr+6">

```lx
Render.text_set_attr(text : Text, start : Num, length : Num, type : TextAttrType, key : String, value : Any) : None
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_outline(text : Text, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
<h4 class="signature_head">Render.text_set_outline</h4><a class="signature-arity" href="#Render.text_set_outline+5" title="Permanent link">5</a><signature id="Render.text_set_outline+5">

```lx
Render.text_set_outline(text : Text, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_shadow(text : Text, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
<h4 class="signature_head">Render.text_set_shadow</h4><a class="signature-arity" href="#Render.text_set_shadow+5" title="Permanent link">5</a><signature id="Render.text_set_shadow+5">

```lx
Render.text_set_shadow(text : Text, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_pos(text : Any, x : Any, y : Any, z : Any)"></endpoint>
<h4 class="signature_head">Render.text_set_pos</h4><a class="signature-arity" href="#Render.text_set_pos+4" title="Permanent link">4</a><signature id="Render.text_set_pos+4">

```lx
Render.text_set_pos(text : Any, x : Any, y : Any, z : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_align(text : Any, align : Any, align_vertical : Any)"></endpoint>
<h4 class="signature_head">Render.text_set_align</h4><a class="signature-arity" href="#Render.text_set_align+3" title="Permanent link">3</a><signature id="Render.text_set_align+3">

```lx
Render.text_set_align(text : Any, align : Any, align_vertical : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_bounds(text : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
<h4 class="signature_head">Render.text_set_bounds</h4><a class="signature-arity" href="#Render.text_set_bounds+5" title="Permanent link">5</a><signature id="Render.text_set_bounds+5">

```lx
Render.text_set_bounds(text : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_commit(text : Any)"></endpoint>
<h4 class="signature_head">Render.text_commit</h4><a class="signature-arity" href="#Render.text_commit" title="Permanent link">1</a><signature id="Render.text_commit">

```lx
Render.text_commit(text : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_geometry(text : Any)"></endpoint>
<h4 class="signature_head">Render.text_get_geometry</h4><a class="signature-arity" href="#Render.text_get_geometry" title="Permanent link">1</a><signature id="Render.text_get_geometry">

```lx
Render.text_get_geometry(text : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_extents(text : Any, offset : Any, count : Any)"></endpoint>
<h4 class="signature_head">Render.text_get_extents</h4><a class="signature-arity" href="#Render.text_get_extents+3" title="Permanent link">3</a><signature id="Render.text_get_extents+3">

```lx
Render.text_get_extents(text : Any, offset : Any, count : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_extents(text : Any)"></endpoint>
<h4 class="signature_head">Render.text_get_extents</h4><a class="signature-arity" href="#Render.text_get_extents" title="Permanent link">1</a><signature id="Render.text_get_extents">

```lx
Render.text_get_extents(text : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_character_bounds(text : Any, index : Any)"></endpoint>
<h4 class="signature_head">Render.text_get_character_bounds</h4><a class="signature-arity" href="#Render.text_get_character_bounds+2" title="Permanent link">2</a><signature id="Render.text_get_character_bounds+2">

```lx
Render.text_get_character_bounds(text : Any, index : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_enable_markup(text : Text, enable : Bool)"></endpoint>
<h4 class="signature_head">Render.text_set_enable_markup</h4><a class="signature-arity" href="#Render.text_set_enable_markup+2" title="Permanent link">2</a><signature id="Render.text_set_enable_markup+2">

```lx
Render.text_set_enable_markup(text : Text, enable : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_enable_markup(text : Text)"></endpoint>
<h4 class="signature_head">Render.text_get_enable_markup</h4><a class="signature-arity" href="#Render.text_get_enable_markup" title="Permanent link">1</a><signature id="Render.text_get_enable_markup">

```lx
Render.text_get_enable_markup(text : Text) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_text(text : Any, string : Any)"></endpoint>
<h4 class="signature_head">Render.text_set_text</h4><a class="signature-arity" href="#Render.text_set_text+2" title="Permanent link">2</a><signature id="Render.text_set_text+2">

```lx
Render.text_set_text(text : Any, string : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="kVertexAttributes"></endpoint>
<h4 class="signature_head">Render.kVertexAttributes</h4><a class="signature-arity" href="#Render.kVertexAttributes" title="Permanent link">1</a><signature id="Render.kVertexAttributes">

```lx
Render.kVertexAttributes : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="kColorTargets"></endpoint>
<h4 class="signature_head">Render.kColorTargets</h4><a class="signature-arity" href="#Render.kColorTargets" title="Permanent link">1</a><signature id="Render.kColorTargets">

```lx
Render.kColorTargets : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialLayerTargets"></endpoint>
<h4 class="signature_head">Render.kMaterialLayerTargets</h4><a class="signature-arity" href="#Render.kMaterialLayerTargets" title="Permanent link">1</a><signature id="Render.kMaterialLayerTargets">

```lx
Render.kMaterialLayerTargets : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialInputs"></endpoint>
<h4 class="signature_head">Render.kMaterialInputs</h4><a class="signature-arity" href="#Render.kMaterialInputs" title="Permanent link">1</a><signature id="Render.kMaterialInputs">

```lx
Render.kMaterialInputs : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialReplace"></endpoint>
<h4 class="signature_head">Render.kMaterialReplace</h4><a class="signature-arity" href="#Render.kMaterialReplace" title="Permanent link">1</a><signature id="Render.kMaterialReplace">

```lx
Render.kMaterialReplace : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialPassUsage"></endpoint>
<h4 class="signature_head">Render.kMaterialPassUsage</h4><a class="signature-arity" href="#Render.kMaterialPassUsage" title="Permanent link">1</a><signature id="Render.kMaterialPassUsage">

```lx
Render.kMaterialPassUsage : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Render" signature="kStencilUnset"></endpoint>
<h4 class="signature_head">Render.kStencilUnset</h4><a class="signature-arity" href="#Render.kStencilUnset" title="Permanent link">1</a><signature id="Render.kStencilUnset">

```lx
Render.kStencilUnset : unknown
```
</signature>

> no docs found   


### RenderDest
`import "luxe: render" for RenderDest{:lx}`
> no docs found

- [target_region](#RenderDest.target_region)
- [color](#RenderDest.color)
- [depth](#RenderDest.depth)
- [stencil](#RenderDest.stencil)
- [color](#RenderDest.color=)=(color : Any)
- [depth](#RenderDest.depth=)=(depth : Any)
- [stencil](#RenderDest.stencil=)=(stencil : Any)
- [new](#RenderDest.new)()


---

<endpoint module="luxe: render" class="RenderDest" signature="target_region"></endpoint>
<h4 class="signature_head">RenderDest.target_region</h4><a class="signature-arity" href="#RenderDest.target_region" title="Permanent link">1</a><signature id="RenderDest.target_region">

```lx
RenderDest.target_region : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="color"></endpoint>
<h4 class="signature_head">RenderDest.color</h4><a class="signature-arity" href="#RenderDest.color" title="Permanent link">1</a><signature id="RenderDest.color">

```lx
RenderDest.color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="depth"></endpoint>
<h4 class="signature_head">RenderDest.depth</h4><a class="signature-arity" href="#RenderDest.depth" title="Permanent link">1</a><signature id="RenderDest.depth">

```lx
RenderDest.depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="stencil"></endpoint>
<h4 class="signature_head">RenderDest.stencil</h4><a class="signature-arity" href="#RenderDest.stencil" title="Permanent link">1</a><signature id="RenderDest.stencil">

```lx
RenderDest.stencil : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="color=(color : Any)"></endpoint>
<h4 class="signature_head">RenderDest.color</h4><a class="signature-arity" href="#RenderDest.color=" title="Permanent link">1</a><signature id="RenderDest.color=">

```lx
RenderDest.color=(color : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="depth=(depth : Any)"></endpoint>
<h4 class="signature_head">RenderDest.depth</h4><a class="signature-arity" href="#RenderDest.depth=" title="Permanent link">1</a><signature id="RenderDest.depth=">

```lx
RenderDest.depth=(depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="stencil=(stencil : Any)"></endpoint>
<h4 class="signature_head">RenderDest.stencil</h4><a class="signature-arity" href="#RenderDest.stencil=" title="Permanent link">1</a><signature id="RenderDest.stencil=">

```lx
RenderDest.stencil=(stencil : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="new()"></endpoint>
<h4 class="signature_head">RenderDest.new</h4><a class="signature-arity" href="#RenderDest.new" title="Permanent link">1</a><signature id="RenderDest.new">

```lx
RenderDest.new() : RenderDest
```
</signature>

> no docs found   


### RenderDestColor
`import "luxe: render" for RenderDestColor{:lx}`
> no docs found

- [render_target](#RenderDestColor.render_target)
- [render_target](#RenderDestColor.render_target=)=(render_target : Any)
- [clear_color](#RenderDestColor.clear_color)
- [clear_color](#RenderDestColor.clear_color=)=(clear_color : Any)
- [load_action](#RenderDestColor.load_action)
- [load_action](#RenderDestColor.load_action=)=(load_action : Any)
- [store_action](#RenderDestColor.store_action)
- [store_action](#RenderDestColor.store_action=)=(store_action : Any)
- [level](#RenderDestColor.level)
- [level](#RenderDestColor.level=)=(level : Any)
- [slice](#RenderDestColor.slice)
- [slice](#RenderDestColor.slice=)=(slice : Any)
- [depth](#RenderDestColor.depth)
- [depth](#RenderDestColor.depth=)=(depth : Any)
- [new](#RenderDestColor.new)()


---

<endpoint module="luxe: render" class="RenderDestColor" signature="render_target"></endpoint>
<h4 class="signature_head">RenderDestColor.render_target</h4><a class="signature-arity" href="#RenderDestColor.render_target" title="Permanent link">1</a><signature id="RenderDestColor.render_target">

```lx
RenderDestColor.render_target : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="render_target=(render_target : Any)"></endpoint>
<h4 class="signature_head">RenderDestColor.render_target</h4><a class="signature-arity" href="#RenderDestColor.render_target=" title="Permanent link">1</a><signature id="RenderDestColor.render_target=">

```lx
RenderDestColor.render_target=(render_target : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="clear_color"></endpoint>
<h4 class="signature_head">RenderDestColor.clear_color</h4><a class="signature-arity" href="#RenderDestColor.clear_color" title="Permanent link">1</a><signature id="RenderDestColor.clear_color">

```lx
RenderDestColor.clear_color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="clear_color=(clear_color : Any)"></endpoint>
<h4 class="signature_head">RenderDestColor.clear_color</h4><a class="signature-arity" href="#RenderDestColor.clear_color=" title="Permanent link">1</a><signature id="RenderDestColor.clear_color=">

```lx
RenderDestColor.clear_color=(clear_color : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="load_action"></endpoint>
<h4 class="signature_head">RenderDestColor.load_action</h4><a class="signature-arity" href="#RenderDestColor.load_action" title="Permanent link">1</a><signature id="RenderDestColor.load_action">

```lx
RenderDestColor.load_action : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="load_action=(load_action : Any)"></endpoint>
<h4 class="signature_head">RenderDestColor.load_action</h4><a class="signature-arity" href="#RenderDestColor.load_action=" title="Permanent link">1</a><signature id="RenderDestColor.load_action=">

```lx
RenderDestColor.load_action=(load_action : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="store_action"></endpoint>
<h4 class="signature_head">RenderDestColor.store_action</h4><a class="signature-arity" href="#RenderDestColor.store_action" title="Permanent link">1</a><signature id="RenderDestColor.store_action">

```lx
RenderDestColor.store_action : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="store_action=(store_action : Any)"></endpoint>
<h4 class="signature_head">RenderDestColor.store_action</h4><a class="signature-arity" href="#RenderDestColor.store_action=" title="Permanent link">1</a><signature id="RenderDestColor.store_action=">

```lx
RenderDestColor.store_action=(store_action : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="level"></endpoint>
<h4 class="signature_head">RenderDestColor.level</h4><a class="signature-arity" href="#RenderDestColor.level" title="Permanent link">1</a><signature id="RenderDestColor.level">

```lx
RenderDestColor.level : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="level=(level : Any)"></endpoint>
<h4 class="signature_head">RenderDestColor.level</h4><a class="signature-arity" href="#RenderDestColor.level=" title="Permanent link">1</a><signature id="RenderDestColor.level=">

```lx
RenderDestColor.level=(level : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="slice"></endpoint>
<h4 class="signature_head">RenderDestColor.slice</h4><a class="signature-arity" href="#RenderDestColor.slice" title="Permanent link">1</a><signature id="RenderDestColor.slice">

```lx
RenderDestColor.slice : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="slice=(slice : Any)"></endpoint>
<h4 class="signature_head">RenderDestColor.slice</h4><a class="signature-arity" href="#RenderDestColor.slice=" title="Permanent link">1</a><signature id="RenderDestColor.slice=">

```lx
RenderDestColor.slice=(slice : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="depth"></endpoint>
<h4 class="signature_head">RenderDestColor.depth</h4><a class="signature-arity" href="#RenderDestColor.depth" title="Permanent link">1</a><signature id="RenderDestColor.depth">

```lx
RenderDestColor.depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="depth=(depth : Any)"></endpoint>
<h4 class="signature_head">RenderDestColor.depth</h4><a class="signature-arity" href="#RenderDestColor.depth=" title="Permanent link">1</a><signature id="RenderDestColor.depth=">

```lx
RenderDestColor.depth=(depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="new()"></endpoint>
<h4 class="signature_head">RenderDestColor.new</h4><a class="signature-arity" href="#RenderDestColor.new" title="Permanent link">1</a><signature id="RenderDestColor.new">

```lx
RenderDestColor.new() : RenderDestColor
```
</signature>

> no docs found   


### RenderDestDepth
`import "luxe: render" for RenderDestDepth{:lx}`
> no docs found

- [render_target](#RenderDestDepth.render_target)
- [render_target](#RenderDestDepth.render_target=)=(render_target : Any)
- [clear_depth](#RenderDestDepth.clear_depth)
- [clear_depth](#RenderDestDepth.clear_depth=)=(clear_depth : Any)
- [load_action](#RenderDestDepth.load_action)
- [load_action](#RenderDestDepth.load_action=)=(load_action : Any)
- [store_action](#RenderDestDepth.store_action)
- [store_action](#RenderDestDepth.store_action=)=(store_action : Any)
- [level](#RenderDestDepth.level)
- [level](#RenderDestDepth.level=)=(level : Any)
- [slice](#RenderDestDepth.slice)
- [slice](#RenderDestDepth.slice=)=(slice : Any)
- [depth](#RenderDestDepth.depth)
- [depth](#RenderDestDepth.depth=)=(depth : Any)
- [new](#RenderDestDepth.new)()


---

<endpoint module="luxe: render" class="RenderDestDepth" signature="render_target"></endpoint>
<h4 class="signature_head">RenderDestDepth.render_target</h4><a class="signature-arity" href="#RenderDestDepth.render_target" title="Permanent link">1</a><signature id="RenderDestDepth.render_target">

```lx
RenderDestDepth.render_target : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="render_target=(render_target : Any)"></endpoint>
<h4 class="signature_head">RenderDestDepth.render_target</h4><a class="signature-arity" href="#RenderDestDepth.render_target=" title="Permanent link">1</a><signature id="RenderDestDepth.render_target=">

```lx
RenderDestDepth.render_target=(render_target : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="clear_depth"></endpoint>
<h4 class="signature_head">RenderDestDepth.clear_depth</h4><a class="signature-arity" href="#RenderDestDepth.clear_depth" title="Permanent link">1</a><signature id="RenderDestDepth.clear_depth">

```lx
RenderDestDepth.clear_depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="clear_depth=(clear_depth : Any)"></endpoint>
<h4 class="signature_head">RenderDestDepth.clear_depth</h4><a class="signature-arity" href="#RenderDestDepth.clear_depth=" title="Permanent link">1</a><signature id="RenderDestDepth.clear_depth=">

```lx
RenderDestDepth.clear_depth=(clear_depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="load_action"></endpoint>
<h4 class="signature_head">RenderDestDepth.load_action</h4><a class="signature-arity" href="#RenderDestDepth.load_action" title="Permanent link">1</a><signature id="RenderDestDepth.load_action">

```lx
RenderDestDepth.load_action : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="load_action=(load_action : Any)"></endpoint>
<h4 class="signature_head">RenderDestDepth.load_action</h4><a class="signature-arity" href="#RenderDestDepth.load_action=" title="Permanent link">1</a><signature id="RenderDestDepth.load_action=">

```lx
RenderDestDepth.load_action=(load_action : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="store_action"></endpoint>
<h4 class="signature_head">RenderDestDepth.store_action</h4><a class="signature-arity" href="#RenderDestDepth.store_action" title="Permanent link">1</a><signature id="RenderDestDepth.store_action">

```lx
RenderDestDepth.store_action : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="store_action=(store_action : Any)"></endpoint>
<h4 class="signature_head">RenderDestDepth.store_action</h4><a class="signature-arity" href="#RenderDestDepth.store_action=" title="Permanent link">1</a><signature id="RenderDestDepth.store_action=">

```lx
RenderDestDepth.store_action=(store_action : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="level"></endpoint>
<h4 class="signature_head">RenderDestDepth.level</h4><a class="signature-arity" href="#RenderDestDepth.level" title="Permanent link">1</a><signature id="RenderDestDepth.level">

```lx
RenderDestDepth.level : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="level=(level : Any)"></endpoint>
<h4 class="signature_head">RenderDestDepth.level</h4><a class="signature-arity" href="#RenderDestDepth.level=" title="Permanent link">1</a><signature id="RenderDestDepth.level=">

```lx
RenderDestDepth.level=(level : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="slice"></endpoint>
<h4 class="signature_head">RenderDestDepth.slice</h4><a class="signature-arity" href="#RenderDestDepth.slice" title="Permanent link">1</a><signature id="RenderDestDepth.slice">

```lx
RenderDestDepth.slice : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="slice=(slice : Any)"></endpoint>
<h4 class="signature_head">RenderDestDepth.slice</h4><a class="signature-arity" href="#RenderDestDepth.slice=" title="Permanent link">1</a><signature id="RenderDestDepth.slice=">

```lx
RenderDestDepth.slice=(slice : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="depth"></endpoint>
<h4 class="signature_head">RenderDestDepth.depth</h4><a class="signature-arity" href="#RenderDestDepth.depth" title="Permanent link">1</a><signature id="RenderDestDepth.depth">

```lx
RenderDestDepth.depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="depth=(depth : Any)"></endpoint>
<h4 class="signature_head">RenderDestDepth.depth</h4><a class="signature-arity" href="#RenderDestDepth.depth=" title="Permanent link">1</a><signature id="RenderDestDepth.depth=">

```lx
RenderDestDepth.depth=(depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="new()"></endpoint>
<h4 class="signature_head">RenderDestDepth.new</h4><a class="signature-arity" href="#RenderDestDepth.new" title="Permanent link">1</a><signature id="RenderDestDepth.new">

```lx
RenderDestDepth.new() : RenderDestDepth
```
</signature>

> no docs found   


### RenderDestStencil
`import "luxe: render" for RenderDestStencil{:lx}`
> no docs found

- [render_target](#RenderDestStencil.render_target)
- [render_target](#RenderDestStencil.render_target=)=(render_target : Any)
- [clear_stencil](#RenderDestStencil.clear_stencil)
- [clear_stencil](#RenderDestStencil.clear_stencil=)=(clear_stencil : Any)
- [load_action](#RenderDestStencil.load_action)
- [load_action](#RenderDestStencil.load_action=)=(load_action : Any)
- [store_action](#RenderDestStencil.store_action)
- [store_action](#RenderDestStencil.store_action=)=(store_action : Any)
- [level](#RenderDestStencil.level)
- [level](#RenderDestStencil.level=)=(level : Any)
- [slice](#RenderDestStencil.slice)
- [slice](#RenderDestStencil.slice=)=(slice : Any)
- [depth](#RenderDestStencil.depth)
- [depth](#RenderDestStencil.depth=)=(depth : Any)
- [new](#RenderDestStencil.new)()


---

<endpoint module="luxe: render" class="RenderDestStencil" signature="render_target"></endpoint>
<h4 class="signature_head">RenderDestStencil.render_target</h4><a class="signature-arity" href="#RenderDestStencil.render_target" title="Permanent link">1</a><signature id="RenderDestStencil.render_target">

```lx
RenderDestStencil.render_target : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="render_target=(render_target : Any)"></endpoint>
<h4 class="signature_head">RenderDestStencil.render_target</h4><a class="signature-arity" href="#RenderDestStencil.render_target=" title="Permanent link">1</a><signature id="RenderDestStencil.render_target=">

```lx
RenderDestStencil.render_target=(render_target : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="clear_stencil"></endpoint>
<h4 class="signature_head">RenderDestStencil.clear_stencil</h4><a class="signature-arity" href="#RenderDestStencil.clear_stencil" title="Permanent link">1</a><signature id="RenderDestStencil.clear_stencil">

```lx
RenderDestStencil.clear_stencil : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="clear_stencil=(clear_stencil : Any)"></endpoint>
<h4 class="signature_head">RenderDestStencil.clear_stencil</h4><a class="signature-arity" href="#RenderDestStencil.clear_stencil=" title="Permanent link">1</a><signature id="RenderDestStencil.clear_stencil=">

```lx
RenderDestStencil.clear_stencil=(clear_stencil : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="load_action"></endpoint>
<h4 class="signature_head">RenderDestStencil.load_action</h4><a class="signature-arity" href="#RenderDestStencil.load_action" title="Permanent link">1</a><signature id="RenderDestStencil.load_action">

```lx
RenderDestStencil.load_action : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="load_action=(load_action : Any)"></endpoint>
<h4 class="signature_head">RenderDestStencil.load_action</h4><a class="signature-arity" href="#RenderDestStencil.load_action=" title="Permanent link">1</a><signature id="RenderDestStencil.load_action=">

```lx
RenderDestStencil.load_action=(load_action : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="store_action"></endpoint>
<h4 class="signature_head">RenderDestStencil.store_action</h4><a class="signature-arity" href="#RenderDestStencil.store_action" title="Permanent link">1</a><signature id="RenderDestStencil.store_action">

```lx
RenderDestStencil.store_action : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="store_action=(store_action : Any)"></endpoint>
<h4 class="signature_head">RenderDestStencil.store_action</h4><a class="signature-arity" href="#RenderDestStencil.store_action=" title="Permanent link">1</a><signature id="RenderDestStencil.store_action=">

```lx
RenderDestStencil.store_action=(store_action : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="level"></endpoint>
<h4 class="signature_head">RenderDestStencil.level</h4><a class="signature-arity" href="#RenderDestStencil.level" title="Permanent link">1</a><signature id="RenderDestStencil.level">

```lx
RenderDestStencil.level : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="level=(level : Any)"></endpoint>
<h4 class="signature_head">RenderDestStencil.level</h4><a class="signature-arity" href="#RenderDestStencil.level=" title="Permanent link">1</a><signature id="RenderDestStencil.level=">

```lx
RenderDestStencil.level=(level : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="slice"></endpoint>
<h4 class="signature_head">RenderDestStencil.slice</h4><a class="signature-arity" href="#RenderDestStencil.slice" title="Permanent link">1</a><signature id="RenderDestStencil.slice">

```lx
RenderDestStencil.slice : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="slice=(slice : Any)"></endpoint>
<h4 class="signature_head">RenderDestStencil.slice</h4><a class="signature-arity" href="#RenderDestStencil.slice=" title="Permanent link">1</a><signature id="RenderDestStencil.slice=">

```lx
RenderDestStencil.slice=(slice : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="depth"></endpoint>
<h4 class="signature_head">RenderDestStencil.depth</h4><a class="signature-arity" href="#RenderDestStencil.depth" title="Permanent link">1</a><signature id="RenderDestStencil.depth">

```lx
RenderDestStencil.depth : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="depth=(depth : Any)"></endpoint>
<h4 class="signature_head">RenderDestStencil.depth</h4><a class="signature-arity" href="#RenderDestStencil.depth=" title="Permanent link">1</a><signature id="RenderDestStencil.depth=">

```lx
RenderDestStencil.depth=(depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="new()"></endpoint>
<h4 class="signature_head">RenderDestStencil.new</h4><a class="signature-arity" href="#RenderDestStencil.new" title="Permanent link">1</a><signature id="RenderDestStencil.new">

```lx
RenderDestStencil.new() : RenderDestStencil
```
</signature>

> no docs found   


### RenderLayerDesc
`import "luxe: render" for RenderLayerDesc{:lx}`
> no docs found

- [display_id](#RenderLayerDesc.display_id)
- [display_id](#RenderLayerDesc.display_id=)=(display_id : Any)
- [sort](#RenderLayerDesc.sort)
- [sort](#RenderLayerDesc.sort=)=(sort : Any)
- [material_override](#RenderLayerDesc.material_override)
- [material_override](#RenderLayerDesc.material_override=)=(material_override : Any)
- [replace_tag](#RenderLayerDesc.replace_tag)
- [replace_tag](#RenderLayerDesc.replace_tag=)=(replace_tag : Any)
- [dest](#RenderLayerDesc.dest)
- [dest](#RenderLayerDesc.dest=)=(dest : Any)
- [new](#RenderLayerDesc.new)()


---

<endpoint module="luxe: render" class="RenderLayerDesc" signature="display_id"></endpoint>
<h4 class="signature_head">RenderLayerDesc.display_id</h4><a class="signature-arity" href="#RenderLayerDesc.display_id" title="Permanent link">1</a><signature id="RenderLayerDesc.display_id">

```lx
RenderLayerDesc.display_id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="display_id=(display_id : Any)"></endpoint>
<h4 class="signature_head">RenderLayerDesc.display_id</h4><a class="signature-arity" href="#RenderLayerDesc.display_id=" title="Permanent link">1</a><signature id="RenderLayerDesc.display_id=">

```lx
RenderLayerDesc.display_id=(display_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="sort"></endpoint>
<h4 class="signature_head">RenderLayerDesc.sort</h4><a class="signature-arity" href="#RenderLayerDesc.sort" title="Permanent link">1</a><signature id="RenderLayerDesc.sort">

```lx
RenderLayerDesc.sort : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="sort=(sort : Any)"></endpoint>
<h4 class="signature_head">RenderLayerDesc.sort</h4><a class="signature-arity" href="#RenderLayerDesc.sort=" title="Permanent link">1</a><signature id="RenderLayerDesc.sort=">

```lx
RenderLayerDesc.sort=(sort : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="material_override"></endpoint>
<h4 class="signature_head">RenderLayerDesc.material_override</h4><a class="signature-arity" href="#RenderLayerDesc.material_override" title="Permanent link">1</a><signature id="RenderLayerDesc.material_override">

```lx
RenderLayerDesc.material_override : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="material_override=(material_override : Any)"></endpoint>
<h4 class="signature_head">RenderLayerDesc.material_override</h4><a class="signature-arity" href="#RenderLayerDesc.material_override=" title="Permanent link">1</a><signature id="RenderLayerDesc.material_override=">

```lx
RenderLayerDesc.material_override=(material_override : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="replace_tag"></endpoint>
<h4 class="signature_head">RenderLayerDesc.replace_tag</h4><a class="signature-arity" href="#RenderLayerDesc.replace_tag" title="Permanent link">1</a><signature id="RenderLayerDesc.replace_tag">

```lx
RenderLayerDesc.replace_tag : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="replace_tag=(replace_tag : Any)"></endpoint>
<h4 class="signature_head">RenderLayerDesc.replace_tag</h4><a class="signature-arity" href="#RenderLayerDesc.replace_tag=" title="Permanent link">1</a><signature id="RenderLayerDesc.replace_tag=">

```lx
RenderLayerDesc.replace_tag=(replace_tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="dest"></endpoint>
<h4 class="signature_head">RenderLayerDesc.dest</h4><a class="signature-arity" href="#RenderLayerDesc.dest" title="Permanent link">1</a><signature id="RenderLayerDesc.dest">

```lx
RenderLayerDesc.dest : RenderDest
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="dest=(dest : Any)"></endpoint>
<h4 class="signature_head">RenderLayerDesc.dest</h4><a class="signature-arity" href="#RenderLayerDesc.dest=" title="Permanent link">1</a><signature id="RenderLayerDesc.dest=">

```lx
RenderLayerDesc.dest=(dest : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="new()"></endpoint>
<h4 class="signature_head">RenderLayerDesc.new</h4><a class="signature-arity" href="#RenderLayerDesc.new" title="Permanent link">1</a><signature id="RenderLayerDesc.new">

```lx
RenderLayerDesc.new() : RenderLayerDesc
```
</signature>

> no docs found   


### RenderPathContext
`import "luxe: render" for RenderPathContext{:lx}`
> no docs found

- [settings](#RenderPathContext.settings)
- [new](#RenderPathContext.new+2)(**path**: `String{:lx}`, **settings**: `Map{:lx}`)
- [path](#RenderPathContext.path)
- [change_path](#RenderPathContext.change_path)(**path**: `String{:lx}`)
- [layer_render](#RenderPathContext.layer_render+2)(**name**: `String{:lx}`, **render_layer_desc**: `RenderLayerDesc{:lx}`)
- [layers_render](#RenderPathContext.layers_render+3)(**name**: `Any{:lx}`, **layers_add**: `Any{:lx}`, **render_layer_desc**: `Any{:lx}`)
- [layers_render](#RenderPathContext.layers_render+4)(**name**: `Any{:lx}`, **layers_add**: `Any{:lx}`, **layers_exclude**: `Any{:lx}`, **render_layer_desc**: `Any{:lx}`)
- [layer_pass](#RenderPathContext.layer_pass)(**pass_layer_desc**: `Any{:lx}`)
- [layer_compute](#RenderPathContext.layer_compute)(**compute_layer_desc**: `ComputeLayerDesc{:lx}`)
- [get](#RenderPathContext.get+2)(**key**: `Any{:lx}`, **default**: `Any{:lx}`)
- [set](#RenderPathContext.set+2)(**key**: `Any{:lx}`, **value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="RenderPathContext" signature="settings"></endpoint>
<h4 class="signature_head">RenderPathContext.settings</h4><a class="signature-arity" href="#RenderPathContext.settings" title="Permanent link">1</a><signature id="RenderPathContext.settings">

```lx
RenderPathContext.settings : Map
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="new(path : String, settings : Map)"></endpoint>
<h4 class="signature_head">RenderPathContext.new</h4><a class="signature-arity" href="#RenderPathContext.new+2" title="Permanent link">2</a><signature id="RenderPathContext.new+2">

```lx
RenderPathContext.new(path : String, settings : Map) : RenderPathContext
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="path"></endpoint>
<h4 class="signature_head">RenderPathContext.path</h4><a class="signature-arity" href="#RenderPathContext.path" title="Permanent link">1</a><signature id="RenderPathContext.path">

```lx
RenderPathContext.path : String
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="change_path(path : String)"></endpoint>
<h4 class="signature_head">RenderPathContext.change_path</h4><a class="signature-arity" href="#RenderPathContext.change_path" title="Permanent link">1</a><signature id="RenderPathContext.change_path">

```lx
RenderPathContext.change_path(path : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_render(name : String, render_layer_desc : RenderLayerDesc)"></endpoint>
<h4 class="signature_head">RenderPathContext.layer_render</h4><a class="signature-arity" href="#RenderPathContext.layer_render+2" title="Permanent link">2</a><signature id="RenderPathContext.layer_render+2">

```lx
RenderPathContext.layer_render(name : String, render_layer_desc : RenderLayerDesc) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layers_render(name : Any, layers_add : Any, render_layer_desc : Any)"></endpoint>
<h4 class="signature_head">RenderPathContext.layers_render</h4><a class="signature-arity" href="#RenderPathContext.layers_render+3" title="Permanent link">3</a><signature id="RenderPathContext.layers_render+3">

```lx
RenderPathContext.layers_render(name : Any, layers_add : Any, render_layer_desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layers_render(name : Any, layers_add : Any, layers_exclude : Any, render_layer_desc : Any)"></endpoint>
<h4 class="signature_head">RenderPathContext.layers_render</h4><a class="signature-arity" href="#RenderPathContext.layers_render+4" title="Permanent link">4</a><signature id="RenderPathContext.layers_render+4">

```lx
RenderPathContext.layers_render(name : Any, layers_add : Any, layers_exclude : Any, render_layer_desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_pass(pass_layer_desc : Any)"></endpoint>
<h4 class="signature_head">RenderPathContext.layer_pass</h4><a class="signature-arity" href="#RenderPathContext.layer_pass" title="Permanent link">1</a><signature id="RenderPathContext.layer_pass">

```lx
RenderPathContext.layer_pass(pass_layer_desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_compute(compute_layer_desc : ComputeLayerDesc)"></endpoint>
<h4 class="signature_head">RenderPathContext.layer_compute</h4><a class="signature-arity" href="#RenderPathContext.layer_compute" title="Permanent link">1</a><signature id="RenderPathContext.layer_compute">

```lx
RenderPathContext.layer_compute(compute_layer_desc : ComputeLayerDesc) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="get(key : Any, default : Any)"></endpoint>
<h4 class="signature_head">RenderPathContext.get</h4><a class="signature-arity" href="#RenderPathContext.get+2" title="Permanent link">2</a><signature id="RenderPathContext.get+2">

```lx
RenderPathContext.get(key : Any, default : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="set(key : Any, value : Any)"></endpoint>
<h4 class="signature_head">RenderPathContext.set</h4><a class="signature-arity" href="#RenderPathContext.set+2" title="Permanent link">2</a><signature id="RenderPathContext.set+2">

```lx
RenderPathContext.set(key : Any, value : Any) : unknown
```
</signature>

> no docs found   


### RenderViewDesc
`import "luxe: render" for RenderViewDesc{:lx}`
> no docs found

- [target](#RenderViewDesc.target)
- [target](#RenderViewDesc.target=)=(v : Any)
- [target](#RenderViewDesc.target)(**v**: `Any{:lx}`)
- [path](#RenderViewDesc.path)
- [path](#RenderViewDesc.path=)=(v : Any)
- [path](#RenderViewDesc.path)(**v**: `Any{:lx}`)
- [region](#RenderViewDesc.region)
- [region](#RenderViewDesc.region=)=(v : Any)
- [region](#RenderViewDesc.region)(**v**: `Any{:lx}`)
- [settings](#RenderViewDesc.settings)
- [settings](#RenderViewDesc.settings=)=(v : Any)
- [settings](#RenderViewDesc.settings)(**v**: `Any{:lx}`)
- [new](#RenderViewDesc.new+4)(**target_resource**: `Any{:lx}`, **target_path**: `Any{:lx}`, **target_region**: `Any{:lx}`, **target_settings**: `Any{:lx}`)
- [new](#RenderViewDesc.new)()


---

<endpoint module="luxe: render" class="RenderViewDesc" signature="target"></endpoint>
<h4 class="signature_head">RenderViewDesc.target</h4><a class="signature-arity" href="#RenderViewDesc.target" title="Permanent link">1</a><signature id="RenderViewDesc.target">

```lx
RenderViewDesc.target : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="target=(v : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.target</h4><a class="signature-arity" href="#RenderViewDesc.target=" title="Permanent link">1</a><signature id="RenderViewDesc.target=">

```lx
RenderViewDesc.target=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="target(v : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.target</h4><a class="signature-arity" href="#RenderViewDesc.target" title="Permanent link">1</a><signature id="RenderViewDesc.target">

```lx
RenderViewDesc.target(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path"></endpoint>
<h4 class="signature_head">RenderViewDesc.path</h4><a class="signature-arity" href="#RenderViewDesc.path" title="Permanent link">1</a><signature id="RenderViewDesc.path">

```lx
RenderViewDesc.path : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path=(v : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.path</h4><a class="signature-arity" href="#RenderViewDesc.path=" title="Permanent link">1</a><signature id="RenderViewDesc.path=">

```lx
RenderViewDesc.path=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path(v : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.path</h4><a class="signature-arity" href="#RenderViewDesc.path" title="Permanent link">1</a><signature id="RenderViewDesc.path">

```lx
RenderViewDesc.path(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region"></endpoint>
<h4 class="signature_head">RenderViewDesc.region</h4><a class="signature-arity" href="#RenderViewDesc.region" title="Permanent link">1</a><signature id="RenderViewDesc.region">

```lx
RenderViewDesc.region : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region=(v : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.region</h4><a class="signature-arity" href="#RenderViewDesc.region=" title="Permanent link">1</a><signature id="RenderViewDesc.region=">

```lx
RenderViewDesc.region=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region(v : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.region</h4><a class="signature-arity" href="#RenderViewDesc.region" title="Permanent link">1</a><signature id="RenderViewDesc.region">

```lx
RenderViewDesc.region(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings"></endpoint>
<h4 class="signature_head">RenderViewDesc.settings</h4><a class="signature-arity" href="#RenderViewDesc.settings" title="Permanent link">1</a><signature id="RenderViewDesc.settings">

```lx
RenderViewDesc.settings : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings=(v : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.settings</h4><a class="signature-arity" href="#RenderViewDesc.settings=" title="Permanent link">1</a><signature id="RenderViewDesc.settings=">

```lx
RenderViewDesc.settings=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings(v : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.settings</h4><a class="signature-arity" href="#RenderViewDesc.settings" title="Permanent link">1</a><signature id="RenderViewDesc.settings">

```lx
RenderViewDesc.settings(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="new(target_resource : Any, target_path : Any, target_region : Any, target_settings : Any)"></endpoint>
<h4 class="signature_head">RenderViewDesc.new</h4><a class="signature-arity" href="#RenderViewDesc.new+4" title="Permanent link">4</a><signature id="RenderViewDesc.new+4">

```lx
RenderViewDesc.new(target_resource : Any, target_path : Any, target_region : Any, target_settings : Any) : RenderViewDesc
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="new()"></endpoint>
<h4 class="signature_head">RenderViewDesc.new</h4><a class="signature-arity" href="#RenderViewDesc.new" title="Permanent link">1</a><signature id="RenderViewDesc.new">

```lx
RenderViewDesc.new() : RenderViewDesc
```
</signature>

> no docs found   


### SamplerAddressMode
`import "luxe: render" for SamplerAddressMode{:lx}`
> no docs found

- [clamp_to_edge](#SamplerAddressMode.clamp_to_edge)
- [repeat](#SamplerAddressMode.repeat)
- [mirror_repeat](#SamplerAddressMode.mirror_repeat)
- [from_string](#SamplerAddressMode.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="SamplerAddressMode" signature="clamp_to_edge"></endpoint>
<h4 class="signature_head">SamplerAddressMode.clamp_to_edge</h4><a class="signature-arity" href="#SamplerAddressMode.clamp_to_edge" title="Permanent link">1</a><signature id="SamplerAddressMode.clamp_to_edge">

```lx
SamplerAddressMode.clamp_to_edge : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="repeat"></endpoint>
<h4 class="signature_head">SamplerAddressMode.repeat</h4><a class="signature-arity" href="#SamplerAddressMode.repeat" title="Permanent link">1</a><signature id="SamplerAddressMode.repeat">

```lx
SamplerAddressMode.repeat : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="mirror_repeat"></endpoint>
<h4 class="signature_head">SamplerAddressMode.mirror_repeat</h4><a class="signature-arity" href="#SamplerAddressMode.mirror_repeat" title="Permanent link">1</a><signature id="SamplerAddressMode.mirror_repeat">

```lx
SamplerAddressMode.mirror_repeat : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">SamplerAddressMode.from_string</h4><a class="signature-arity" href="#SamplerAddressMode.from_string" title="Permanent link">1</a><signature id="SamplerAddressMode.from_string">

```lx
SamplerAddressMode.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### SamplerMinMagFilter
`import "luxe: render" for SamplerMinMagFilter{:lx}`
> no docs found

- [nearest](#SamplerMinMagFilter.nearest)
- [linear](#SamplerMinMagFilter.linear)
- [from_string](#SamplerMinMagFilter.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="nearest"></endpoint>
<h4 class="signature_head">SamplerMinMagFilter.nearest</h4><a class="signature-arity" href="#SamplerMinMagFilter.nearest" title="Permanent link">1</a><signature id="SamplerMinMagFilter.nearest">

```lx
SamplerMinMagFilter.nearest : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="linear"></endpoint>
<h4 class="signature_head">SamplerMinMagFilter.linear</h4><a class="signature-arity" href="#SamplerMinMagFilter.linear" title="Permanent link">1</a><signature id="SamplerMinMagFilter.linear">

```lx
SamplerMinMagFilter.linear : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">SamplerMinMagFilter.from_string</h4><a class="signature-arity" href="#SamplerMinMagFilter.from_string" title="Permanent link">1</a><signature id="SamplerMinMagFilter.from_string">

```lx
SamplerMinMagFilter.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### SamplerMipFilter
`import "luxe: render" for SamplerMipFilter{:lx}`
> no docs found

- [none](#SamplerMipFilter.none)
- [nearest](#SamplerMipFilter.nearest)
- [linear](#SamplerMipFilter.linear)
- [from_string](#SamplerMipFilter.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="SamplerMipFilter" signature="none"></endpoint>
<h4 class="signature_head">SamplerMipFilter.none</h4><a class="signature-arity" href="#SamplerMipFilter.none" title="Permanent link">1</a><signature id="SamplerMipFilter.none">

```lx
SamplerMipFilter.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="nearest"></endpoint>
<h4 class="signature_head">SamplerMipFilter.nearest</h4><a class="signature-arity" href="#SamplerMipFilter.nearest" title="Permanent link">1</a><signature id="SamplerMipFilter.nearest">

```lx
SamplerMipFilter.nearest : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="linear"></endpoint>
<h4 class="signature_head">SamplerMipFilter.linear</h4><a class="signature-arity" href="#SamplerMipFilter.linear" title="Permanent link">1</a><signature id="SamplerMipFilter.linear">

```lx
SamplerMipFilter.linear : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">SamplerMipFilter.from_string</h4><a class="signature-arity" href="#SamplerMipFilter.from_string" title="Permanent link">1</a><signature id="SamplerMipFilter.from_string">

```lx
SamplerMipFilter.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### SamplerState
`import "luxe: render" for SamplerState{:lx}`
> no docs found

- [new](#SamplerState.new)()
- [address_r](#SamplerState.address_r)
- [address_r](#SamplerState.address_r=)=(v : Any)
- [address_s](#SamplerState.address_s)
- [address_s](#SamplerState.address_s=)=(v : Any)
- [address_t](#SamplerState.address_t)
- [address_t](#SamplerState.address_t=)=(v : Any)
- [filter_min](#SamplerState.filter_min)
- [filter_min](#SamplerState.filter_min=)=(v : Any)
- [filter_mag](#SamplerState.filter_mag)
- [filter_mag](#SamplerState.filter_mag=)=(v : Any)
- [filter_mip](#SamplerState.filter_mip)
- [filter_mip](#SamplerState.filter_mip=)=(v : Any)


---

<endpoint module="luxe: render" class="SamplerState" signature="new()"></endpoint>
<h4 class="signature_head">SamplerState.new</h4><a class="signature-arity" href="#SamplerState.new" title="Permanent link">1</a><signature id="SamplerState.new">

```lx
SamplerState.new() : SamplerState
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_r"></endpoint>
<h4 class="signature_head">SamplerState.address_r</h4><a class="signature-arity" href="#SamplerState.address_r" title="Permanent link">1</a><signature id="SamplerState.address_r">

```lx
SamplerState.address_r : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_r=(v : Any)"></endpoint>
<h4 class="signature_head">SamplerState.address_r</h4><a class="signature-arity" href="#SamplerState.address_r=" title="Permanent link">1</a><signature id="SamplerState.address_r=">

```lx
SamplerState.address_r=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_s"></endpoint>
<h4 class="signature_head">SamplerState.address_s</h4><a class="signature-arity" href="#SamplerState.address_s" title="Permanent link">1</a><signature id="SamplerState.address_s">

```lx
SamplerState.address_s : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_s=(v : Any)"></endpoint>
<h4 class="signature_head">SamplerState.address_s</h4><a class="signature-arity" href="#SamplerState.address_s=" title="Permanent link">1</a><signature id="SamplerState.address_s=">

```lx
SamplerState.address_s=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_t"></endpoint>
<h4 class="signature_head">SamplerState.address_t</h4><a class="signature-arity" href="#SamplerState.address_t" title="Permanent link">1</a><signature id="SamplerState.address_t">

```lx
SamplerState.address_t : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_t=(v : Any)"></endpoint>
<h4 class="signature_head">SamplerState.address_t</h4><a class="signature-arity" href="#SamplerState.address_t=" title="Permanent link">1</a><signature id="SamplerState.address_t=">

```lx
SamplerState.address_t=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_min"></endpoint>
<h4 class="signature_head">SamplerState.filter_min</h4><a class="signature-arity" href="#SamplerState.filter_min" title="Permanent link">1</a><signature id="SamplerState.filter_min">

```lx
SamplerState.filter_min : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_min=(v : Any)"></endpoint>
<h4 class="signature_head">SamplerState.filter_min</h4><a class="signature-arity" href="#SamplerState.filter_min=" title="Permanent link">1</a><signature id="SamplerState.filter_min=">

```lx
SamplerState.filter_min=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mag"></endpoint>
<h4 class="signature_head">SamplerState.filter_mag</h4><a class="signature-arity" href="#SamplerState.filter_mag" title="Permanent link">1</a><signature id="SamplerState.filter_mag">

```lx
SamplerState.filter_mag : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mag=(v : Any)"></endpoint>
<h4 class="signature_head">SamplerState.filter_mag</h4><a class="signature-arity" href="#SamplerState.filter_mag=" title="Permanent link">1</a><signature id="SamplerState.filter_mag=">

```lx
SamplerState.filter_mag=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mip"></endpoint>
<h4 class="signature_head">SamplerState.filter_mip</h4><a class="signature-arity" href="#SamplerState.filter_mip" title="Permanent link">1</a><signature id="SamplerState.filter_mip">

```lx
SamplerState.filter_mip : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mip=(v : Any)"></endpoint>
<h4 class="signature_head">SamplerState.filter_mip</h4><a class="signature-arity" href="#SamplerState.filter_mip=" title="Permanent link">1</a><signature id="SamplerState.filter_mip=">

```lx
SamplerState.filter_mip=(v : Any) : unknown
```
</signature>

> no docs found   


### SortType
`import "luxe: render" for SortType{:lx}`
> no docs found

- [front_to_back](#SortType.front_to_back)
- [back_to_front](#SortType.back_to_front)
- [sort_by_z](#SortType.sort_by_z)
- [sort_by_z_reverse](#SortType.sort_by_z_reverse)
- [none](#SortType.none)


---

<endpoint module="luxe: render" class="SortType" signature="front_to_back"></endpoint>
<h4 class="signature_head">SortType.front_to_back</h4><a class="signature-arity" href="#SortType.front_to_back" title="Permanent link">1</a><signature id="SortType.front_to_back">

```lx
SortType.front_to_back : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SortType" signature="back_to_front"></endpoint>
<h4 class="signature_head">SortType.back_to_front</h4><a class="signature-arity" href="#SortType.back_to_front" title="Permanent link">1</a><signature id="SortType.back_to_front">

```lx
SortType.back_to_front : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SortType" signature="sort_by_z"></endpoint>
<h4 class="signature_head">SortType.sort_by_z</h4><a class="signature-arity" href="#SortType.sort_by_z" title="Permanent link">1</a><signature id="SortType.sort_by_z">

```lx
SortType.sort_by_z : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SortType" signature="sort_by_z_reverse"></endpoint>
<h4 class="signature_head">SortType.sort_by_z_reverse</h4><a class="signature-arity" href="#SortType.sort_by_z_reverse" title="Permanent link">1</a><signature id="SortType.sort_by_z_reverse">

```lx
SortType.sort_by_z_reverse : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="SortType" signature="none"></endpoint>
<h4 class="signature_head">SortType.none</h4><a class="signature-arity" href="#SortType.none" title="Permanent link">1</a><signature id="SortType.none">

```lx
SortType.none : unknown
```
</signature>

> no docs found   


### StencilOperation
`import "luxe: render" for StencilOperation{:lx}`
> no docs found

- [keep](#StencilOperation.keep)
- [zero](#StencilOperation.zero)
- [replace](#StencilOperation.replace)
- [increment_clamp](#StencilOperation.increment_clamp)
- [decrement_clamp](#StencilOperation.decrement_clamp)
- [invert](#StencilOperation.invert)
- [increment_wrap](#StencilOperation.increment_wrap)
- [decrement_wrap](#StencilOperation.decrement_wrap)
- [invalid](#StencilOperation.invalid)
- [from_string](#StencilOperation.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="StencilOperation" signature="keep"></endpoint>
<h4 class="signature_head">StencilOperation.keep</h4><a class="signature-arity" href="#StencilOperation.keep" title="Permanent link">1</a><signature id="StencilOperation.keep">

```lx
StencilOperation.keep : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="zero"></endpoint>
<h4 class="signature_head">StencilOperation.zero</h4><a class="signature-arity" href="#StencilOperation.zero" title="Permanent link">1</a><signature id="StencilOperation.zero">

```lx
StencilOperation.zero : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="replace"></endpoint>
<h4 class="signature_head">StencilOperation.replace</h4><a class="signature-arity" href="#StencilOperation.replace" title="Permanent link">1</a><signature id="StencilOperation.replace">

```lx
StencilOperation.replace : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="increment_clamp"></endpoint>
<h4 class="signature_head">StencilOperation.increment_clamp</h4><a class="signature-arity" href="#StencilOperation.increment_clamp" title="Permanent link">1</a><signature id="StencilOperation.increment_clamp">

```lx
StencilOperation.increment_clamp : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="decrement_clamp"></endpoint>
<h4 class="signature_head">StencilOperation.decrement_clamp</h4><a class="signature-arity" href="#StencilOperation.decrement_clamp" title="Permanent link">1</a><signature id="StencilOperation.decrement_clamp">

```lx
StencilOperation.decrement_clamp : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="invert"></endpoint>
<h4 class="signature_head">StencilOperation.invert</h4><a class="signature-arity" href="#StencilOperation.invert" title="Permanent link">1</a><signature id="StencilOperation.invert">

```lx
StencilOperation.invert : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="increment_wrap"></endpoint>
<h4 class="signature_head">StencilOperation.increment_wrap</h4><a class="signature-arity" href="#StencilOperation.increment_wrap" title="Permanent link">1</a><signature id="StencilOperation.increment_wrap">

```lx
StencilOperation.increment_wrap : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="decrement_wrap"></endpoint>
<h4 class="signature_head">StencilOperation.decrement_wrap</h4><a class="signature-arity" href="#StencilOperation.decrement_wrap" title="Permanent link">1</a><signature id="StencilOperation.decrement_wrap">

```lx
StencilOperation.decrement_wrap : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="invalid"></endpoint>
<h4 class="signature_head">StencilOperation.invalid</h4><a class="signature-arity" href="#StencilOperation.invalid" title="Permanent link">1</a><signature id="StencilOperation.invalid">

```lx
StencilOperation.invalid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">StencilOperation.from_string</h4><a class="signature-arity" href="#StencilOperation.from_string" title="Permanent link">1</a><signature id="StencilOperation.from_string">

```lx
StencilOperation.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### StoreAction
`import "luxe: render" for StoreAction{:lx}`
> no docs found

- [dont_care](#StoreAction.dont_care)
- [store](#StoreAction.store)


---

<endpoint module="luxe: render" class="StoreAction" signature="dont_care"></endpoint>
<h4 class="signature_head">StoreAction.dont_care</h4><a class="signature-arity" href="#StoreAction.dont_care" title="Permanent link">1</a><signature id="StoreAction.dont_care">

```lx
StoreAction.dont_care : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="StoreAction" signature="store"></endpoint>
<h4 class="signature_head">StoreAction.store</h4><a class="signature-arity" href="#StoreAction.store" title="Permanent link">1</a><signature id="StoreAction.store">

```lx
StoreAction.store : unknown
```
</signature>

> no docs found   


### TextAlign
`import "luxe: render" for TextAlign{:lx}`
> no docs found

- [left](#TextAlign.left)
- [center](#TextAlign.center)
- [right](#TextAlign.right)
- [top](#TextAlign.top)
- [bottom](#TextAlign.bottom)
- [from_string](#TextAlign.from_string)(**value**: `Any{:lx}`)
- [name](#TextAlign.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="TextAlign" signature="left"></endpoint>
<h4 class="signature_head">TextAlign.left</h4><a class="signature-arity" href="#TextAlign.left" title="Permanent link">1</a><signature id="TextAlign.left">

```lx
TextAlign.left : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="center"></endpoint>
<h4 class="signature_head">TextAlign.center</h4><a class="signature-arity" href="#TextAlign.center" title="Permanent link">1</a><signature id="TextAlign.center">

```lx
TextAlign.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="right"></endpoint>
<h4 class="signature_head">TextAlign.right</h4><a class="signature-arity" href="#TextAlign.right" title="Permanent link">1</a><signature id="TextAlign.right">

```lx
TextAlign.right : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="top"></endpoint>
<h4 class="signature_head">TextAlign.top</h4><a class="signature-arity" href="#TextAlign.top" title="Permanent link">1</a><signature id="TextAlign.top">

```lx
TextAlign.top : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="bottom"></endpoint>
<h4 class="signature_head">TextAlign.bottom</h4><a class="signature-arity" href="#TextAlign.bottom" title="Permanent link">1</a><signature id="TextAlign.bottom">

```lx
TextAlign.bottom : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">TextAlign.from_string</h4><a class="signature-arity" href="#TextAlign.from_string" title="Permanent link">1</a><signature id="TextAlign.from_string">

```lx
TextAlign.from_string(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">TextAlign.name</h4><a class="signature-arity" href="#TextAlign.name" title="Permanent link">1</a><signature id="TextAlign.name">

```lx
TextAlign.name(value : Any) : unknown
```
</signature>

> no docs found   


### TextAttrType
`import "luxe: render" for TextAttrType{:lx}`
> no docs found

- [unknown](#TextAttrType.unknown)
- [handle32](#TextAttrType.handle32)
- [handle64](#TextAttrType.handle64)
- [number](#TextAttrType.number)
- [string](#TextAttrType.string)
- [color](#TextAttrType.color)
- [float2](#TextAttrType.float2)
- [name](#TextAttrType.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="TextAttrType" signature="unknown"></endpoint>
<h4 class="signature_head">TextAttrType.unknown</h4><a class="signature-arity" href="#TextAttrType.unknown" title="Permanent link">1</a><signature id="TextAttrType.unknown">

```lx
TextAttrType.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="handle32"></endpoint>
<h4 class="signature_head">TextAttrType.handle32</h4><a class="signature-arity" href="#TextAttrType.handle32" title="Permanent link">1</a><signature id="TextAttrType.handle32">

```lx
TextAttrType.handle32 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="handle64"></endpoint>
<h4 class="signature_head">TextAttrType.handle64</h4><a class="signature-arity" href="#TextAttrType.handle64" title="Permanent link">1</a><signature id="TextAttrType.handle64">

```lx
TextAttrType.handle64 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="number"></endpoint>
<h4 class="signature_head">TextAttrType.number</h4><a class="signature-arity" href="#TextAttrType.number" title="Permanent link">1</a><signature id="TextAttrType.number">

```lx
TextAttrType.number : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="string"></endpoint>
<h4 class="signature_head">TextAttrType.string</h4><a class="signature-arity" href="#TextAttrType.string" title="Permanent link">1</a><signature id="TextAttrType.string">

```lx
TextAttrType.string : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="color"></endpoint>
<h4 class="signature_head">TextAttrType.color</h4><a class="signature-arity" href="#TextAttrType.color" title="Permanent link">1</a><signature id="TextAttrType.color">

```lx
TextAttrType.color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="float2"></endpoint>
<h4 class="signature_head">TextAttrType.float2</h4><a class="signature-arity" href="#TextAttrType.float2" title="Permanent link">1</a><signature id="TextAttrType.float2">

```lx
TextAttrType.float2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">TextAttrType.name</h4><a class="signature-arity" href="#TextAttrType.name" title="Permanent link">1</a><signature id="TextAttrType.name">

```lx
TextAttrType.name(value : Any) : unknown
```
</signature>

> no docs found   


### TextWrapMode
`import "luxe: render" for TextWrapMode{:lx}`
> no docs found

- [unknown](#TextWrapMode.unknown)
- [none](#TextWrapMode.none)
- [word](#TextWrapMode.word)
- [from_string](#TextWrapMode.from_string)(**value**: `Any{:lx}`)
- [name](#TextWrapMode.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="TextWrapMode" signature="unknown"></endpoint>
<h4 class="signature_head">TextWrapMode.unknown</h4><a class="signature-arity" href="#TextWrapMode.unknown" title="Permanent link">1</a><signature id="TextWrapMode.unknown">

```lx
TextWrapMode.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="none"></endpoint>
<h4 class="signature_head">TextWrapMode.none</h4><a class="signature-arity" href="#TextWrapMode.none" title="Permanent link">1</a><signature id="TextWrapMode.none">

```lx
TextWrapMode.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="word"></endpoint>
<h4 class="signature_head">TextWrapMode.word</h4><a class="signature-arity" href="#TextWrapMode.word" title="Permanent link">1</a><signature id="TextWrapMode.word">

```lx
TextWrapMode.word : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">TextWrapMode.from_string</h4><a class="signature-arity" href="#TextWrapMode.from_string" title="Permanent link">1</a><signature id="TextWrapMode.from_string">

```lx
TextWrapMode.from_string(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">TextWrapMode.name</h4><a class="signature-arity" href="#TextWrapMode.name" title="Permanent link">1</a><signature id="TextWrapMode.name">

```lx
TextWrapMode.name(value : Any) : unknown
```
</signature>

> no docs found   


### VertexAttr
`import "luxe: render" for VertexAttr{:lx}`
> no docs found

- [new](#VertexAttr.new)(**name**: `Any{:lx}`)
- [name](#VertexAttr.name)
- [name](#VertexAttr.name=)=(v : Any)
- [format](#VertexAttr.format)
- [format](#VertexAttr.format=)=(v : Any)
- [offset](#VertexAttr.offset)
- [offset](#VertexAttr.offset=)=(v : Any)
- [buffer_index](#VertexAttr.buffer_index)
- [buffer_index](#VertexAttr.buffer_index=)=(v : Any)


---

<endpoint module="luxe: render" class="VertexAttr" signature="new(name : Any)"></endpoint>
<h4 class="signature_head">VertexAttr.new</h4><a class="signature-arity" href="#VertexAttr.new" title="Permanent link">1</a><signature id="VertexAttr.new">

```lx
VertexAttr.new(name : Any) : VertexAttr
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="name"></endpoint>
<h4 class="signature_head">VertexAttr.name</h4><a class="signature-arity" href="#VertexAttr.name" title="Permanent link">1</a><signature id="VertexAttr.name">

```lx
VertexAttr.name : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="name=(v : Any)"></endpoint>
<h4 class="signature_head">VertexAttr.name</h4><a class="signature-arity" href="#VertexAttr.name=" title="Permanent link">1</a><signature id="VertexAttr.name=">

```lx
VertexAttr.name=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="format"></endpoint>
<h4 class="signature_head">VertexAttr.format</h4><a class="signature-arity" href="#VertexAttr.format" title="Permanent link">1</a><signature id="VertexAttr.format">

```lx
VertexAttr.format : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="format=(v : Any)"></endpoint>
<h4 class="signature_head">VertexAttr.format</h4><a class="signature-arity" href="#VertexAttr.format=" title="Permanent link">1</a><signature id="VertexAttr.format=">

```lx
VertexAttr.format=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="offset"></endpoint>
<h4 class="signature_head">VertexAttr.offset</h4><a class="signature-arity" href="#VertexAttr.offset" title="Permanent link">1</a><signature id="VertexAttr.offset">

```lx
VertexAttr.offset : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="offset=(v : Any)"></endpoint>
<h4 class="signature_head">VertexAttr.offset</h4><a class="signature-arity" href="#VertexAttr.offset=" title="Permanent link">1</a><signature id="VertexAttr.offset=">

```lx
VertexAttr.offset=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="buffer_index"></endpoint>
<h4 class="signature_head">VertexAttr.buffer_index</h4><a class="signature-arity" href="#VertexAttr.buffer_index" title="Permanent link">1</a><signature id="VertexAttr.buffer_index">

```lx
VertexAttr.buffer_index : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="buffer_index=(v : Any)"></endpoint>
<h4 class="signature_head">VertexAttr.buffer_index</h4><a class="signature-arity" href="#VertexAttr.buffer_index=" title="Permanent link">1</a><signature id="VertexAttr.buffer_index=">

```lx
VertexAttr.buffer_index=(v : Any) : unknown
```
</signature>

> no docs found   


### VertexAttrFormat
`import "luxe: render" for VertexAttrFormat{:lx}`
> no docs found

- [invalid](#VertexAttrFormat.invalid)
- [bool](#VertexAttrFormat.bool)
- [bool2](#VertexAttrFormat.bool2)
- [bool3](#VertexAttrFormat.bool3)
- [bool4](#VertexAttrFormat.bool4)
- [int](#VertexAttrFormat.int)
- [int2](#VertexAttrFormat.int2)
- [int3](#VertexAttrFormat.int3)
- [int4](#VertexAttrFormat.int4)
- [uint](#VertexAttrFormat.uint)
- [uint2](#VertexAttrFormat.uint2)
- [uint3](#VertexAttrFormat.uint3)
- [uint4](#VertexAttrFormat.uint4)
- [float](#VertexAttrFormat.float)
- [float2](#VertexAttrFormat.float2)
- [float3](#VertexAttrFormat.float3)
- [float4](#VertexAttrFormat.float4)
- [double](#VertexAttrFormat.double)
- [double2](#VertexAttrFormat.double2)
- [double3](#VertexAttrFormat.double3)
- [double4](#VertexAttrFormat.double4)
- [mat4](#VertexAttrFormat.mat4)
- [from_string](#VertexAttrFormat.from_string)(**value**: `Any{:lx}`)
- [size_of](#VertexAttrFormat.size_of)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="VertexAttrFormat" signature="invalid"></endpoint>
<h4 class="signature_head">VertexAttrFormat.invalid</h4><a class="signature-arity" href="#VertexAttrFormat.invalid" title="Permanent link">1</a><signature id="VertexAttrFormat.invalid">

```lx
VertexAttrFormat.invalid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool"></endpoint>
<h4 class="signature_head">VertexAttrFormat.bool</h4><a class="signature-arity" href="#VertexAttrFormat.bool" title="Permanent link">1</a><signature id="VertexAttrFormat.bool">

```lx
VertexAttrFormat.bool : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool2"></endpoint>
<h4 class="signature_head">VertexAttrFormat.bool2</h4><a class="signature-arity" href="#VertexAttrFormat.bool2" title="Permanent link">1</a><signature id="VertexAttrFormat.bool2">

```lx
VertexAttrFormat.bool2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool3"></endpoint>
<h4 class="signature_head">VertexAttrFormat.bool3</h4><a class="signature-arity" href="#VertexAttrFormat.bool3" title="Permanent link">1</a><signature id="VertexAttrFormat.bool3">

```lx
VertexAttrFormat.bool3 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool4"></endpoint>
<h4 class="signature_head">VertexAttrFormat.bool4</h4><a class="signature-arity" href="#VertexAttrFormat.bool4" title="Permanent link">1</a><signature id="VertexAttrFormat.bool4">

```lx
VertexAttrFormat.bool4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int"></endpoint>
<h4 class="signature_head">VertexAttrFormat.int</h4><a class="signature-arity" href="#VertexAttrFormat.int" title="Permanent link">1</a><signature id="VertexAttrFormat.int">

```lx
VertexAttrFormat.int : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int2"></endpoint>
<h4 class="signature_head">VertexAttrFormat.int2</h4><a class="signature-arity" href="#VertexAttrFormat.int2" title="Permanent link">1</a><signature id="VertexAttrFormat.int2">

```lx
VertexAttrFormat.int2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int3"></endpoint>
<h4 class="signature_head">VertexAttrFormat.int3</h4><a class="signature-arity" href="#VertexAttrFormat.int3" title="Permanent link">1</a><signature id="VertexAttrFormat.int3">

```lx
VertexAttrFormat.int3 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int4"></endpoint>
<h4 class="signature_head">VertexAttrFormat.int4</h4><a class="signature-arity" href="#VertexAttrFormat.int4" title="Permanent link">1</a><signature id="VertexAttrFormat.int4">

```lx
VertexAttrFormat.int4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint"></endpoint>
<h4 class="signature_head">VertexAttrFormat.uint</h4><a class="signature-arity" href="#VertexAttrFormat.uint" title="Permanent link">1</a><signature id="VertexAttrFormat.uint">

```lx
VertexAttrFormat.uint : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint2"></endpoint>
<h4 class="signature_head">VertexAttrFormat.uint2</h4><a class="signature-arity" href="#VertexAttrFormat.uint2" title="Permanent link">1</a><signature id="VertexAttrFormat.uint2">

```lx
VertexAttrFormat.uint2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint3"></endpoint>
<h4 class="signature_head">VertexAttrFormat.uint3</h4><a class="signature-arity" href="#VertexAttrFormat.uint3" title="Permanent link">1</a><signature id="VertexAttrFormat.uint3">

```lx
VertexAttrFormat.uint3 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint4"></endpoint>
<h4 class="signature_head">VertexAttrFormat.uint4</h4><a class="signature-arity" href="#VertexAttrFormat.uint4" title="Permanent link">1</a><signature id="VertexAttrFormat.uint4">

```lx
VertexAttrFormat.uint4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float"></endpoint>
<h4 class="signature_head">VertexAttrFormat.float</h4><a class="signature-arity" href="#VertexAttrFormat.float" title="Permanent link">1</a><signature id="VertexAttrFormat.float">

```lx
VertexAttrFormat.float : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float2"></endpoint>
<h4 class="signature_head">VertexAttrFormat.float2</h4><a class="signature-arity" href="#VertexAttrFormat.float2" title="Permanent link">1</a><signature id="VertexAttrFormat.float2">

```lx
VertexAttrFormat.float2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float3"></endpoint>
<h4 class="signature_head">VertexAttrFormat.float3</h4><a class="signature-arity" href="#VertexAttrFormat.float3" title="Permanent link">1</a><signature id="VertexAttrFormat.float3">

```lx
VertexAttrFormat.float3 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float4"></endpoint>
<h4 class="signature_head">VertexAttrFormat.float4</h4><a class="signature-arity" href="#VertexAttrFormat.float4" title="Permanent link">1</a><signature id="VertexAttrFormat.float4">

```lx
VertexAttrFormat.float4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double"></endpoint>
<h4 class="signature_head">VertexAttrFormat.double</h4><a class="signature-arity" href="#VertexAttrFormat.double" title="Permanent link">1</a><signature id="VertexAttrFormat.double">

```lx
VertexAttrFormat.double : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double2"></endpoint>
<h4 class="signature_head">VertexAttrFormat.double2</h4><a class="signature-arity" href="#VertexAttrFormat.double2" title="Permanent link">1</a><signature id="VertexAttrFormat.double2">

```lx
VertexAttrFormat.double2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double3"></endpoint>
<h4 class="signature_head">VertexAttrFormat.double3</h4><a class="signature-arity" href="#VertexAttrFormat.double3" title="Permanent link">1</a><signature id="VertexAttrFormat.double3">

```lx
VertexAttrFormat.double3 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double4"></endpoint>
<h4 class="signature_head">VertexAttrFormat.double4</h4><a class="signature-arity" href="#VertexAttrFormat.double4" title="Permanent link">1</a><signature id="VertexAttrFormat.double4">

```lx
VertexAttrFormat.double4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="mat4"></endpoint>
<h4 class="signature_head">VertexAttrFormat.mat4</h4><a class="signature-arity" href="#VertexAttrFormat.mat4" title="Permanent link">1</a><signature id="VertexAttrFormat.mat4">

```lx
VertexAttrFormat.mat4 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">VertexAttrFormat.from_string</h4><a class="signature-arity" href="#VertexAttrFormat.from_string" title="Permanent link">1</a><signature id="VertexAttrFormat.from_string">

```lx
VertexAttrFormat.from_string(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="size_of(value : Any)"></endpoint>
<h4 class="signature_head">VertexAttrFormat.size_of</h4><a class="signature-arity" href="#VertexAttrFormat.size_of" title="Permanent link">1</a><signature id="VertexAttrFormat.size_of">

```lx
VertexAttrFormat.size_of(value : Any) : unknown
```
</signature>

> no docs found   


### VertexFormat
`import "luxe: render" for VertexFormat{:lx}`
> no docs found

- [new](#VertexFormat.new)()
- [attributes](#VertexFormat.attributes)
- [attributes](#VertexFormat.attributes=)=(v : Any)
- [layouts](#VertexFormat.layouts)
- [layouts](#VertexFormat.layouts=)=(v : Any)


---

<endpoint module="luxe: render" class="VertexFormat" signature="new()"></endpoint>
<h4 class="signature_head">VertexFormat.new</h4><a class="signature-arity" href="#VertexFormat.new" title="Permanent link">1</a><signature id="VertexFormat.new">

```lx
VertexFormat.new() : VertexFormat
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="attributes"></endpoint>
<h4 class="signature_head">VertexFormat.attributes</h4><a class="signature-arity" href="#VertexFormat.attributes" title="Permanent link">1</a><signature id="VertexFormat.attributes">

```lx
VertexFormat.attributes : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="attributes=(v : Any)"></endpoint>
<h4 class="signature_head">VertexFormat.attributes</h4><a class="signature-arity" href="#VertexFormat.attributes=" title="Permanent link">1</a><signature id="VertexFormat.attributes=">

```lx
VertexFormat.attributes=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="layouts"></endpoint>
<h4 class="signature_head">VertexFormat.layouts</h4><a class="signature-arity" href="#VertexFormat.layouts" title="Permanent link">1</a><signature id="VertexFormat.layouts">

```lx
VertexFormat.layouts : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="layouts=(v : Any)"></endpoint>
<h4 class="signature_head">VertexFormat.layouts</h4><a class="signature-arity" href="#VertexFormat.layouts=" title="Permanent link">1</a><signature id="VertexFormat.layouts=">

```lx
VertexFormat.layouts=(v : Any) : unknown
```
</signature>

> no docs found   


### VertexInputRate
`import "luxe: render" for VertexInputRate{:lx}`
> no docs found

- [vertex](#VertexInputRate.vertex)
- [instance](#VertexInputRate.instance)
- [from_string](#VertexInputRate.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="VertexInputRate" signature="vertex"></endpoint>
<h4 class="signature_head">VertexInputRate.vertex</h4><a class="signature-arity" href="#VertexInputRate.vertex" title="Permanent link">1</a><signature id="VertexInputRate.vertex">

```lx
VertexInputRate.vertex : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexInputRate" signature="instance"></endpoint>
<h4 class="signature_head">VertexInputRate.instance</h4><a class="signature-arity" href="#VertexInputRate.instance" title="Permanent link">1</a><signature id="VertexInputRate.instance">

```lx
VertexInputRate.instance : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexInputRate" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">VertexInputRate.from_string</h4><a class="signature-arity" href="#VertexInputRate.from_string" title="Permanent link">1</a><signature id="VertexInputRate.from_string">

```lx
VertexInputRate.from_string(value : Any) : unknown
```
</signature>

> no docs found   


### VertexLayout
`import "luxe: render" for VertexLayout{:lx}`
> no docs found

- [new](#VertexLayout.new)()
- [stride](#VertexLayout.stride)
- [stride](#VertexLayout.stride=)=(v : Any)


---

<endpoint module="luxe: render" class="VertexLayout" signature="new()"></endpoint>
<h4 class="signature_head">VertexLayout.new</h4><a class="signature-arity" href="#VertexLayout.new" title="Permanent link">1</a><signature id="VertexLayout.new">

```lx
VertexLayout.new() : VertexLayout
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexLayout" signature="stride"></endpoint>
<h4 class="signature_head">VertexLayout.stride</h4><a class="signature-arity" href="#VertexLayout.stride" title="Permanent link">1</a><signature id="VertexLayout.stride">

```lx
VertexLayout.stride : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="VertexLayout" signature="stride=(v : Any)"></endpoint>
<h4 class="signature_head">VertexLayout.stride</h4><a class="signature-arity" href="#VertexLayout.stride=" title="Permanent link">1</a><signature id="VertexLayout.stride=">

```lx
VertexLayout.stride=(v : Any) : unknown
```
</signature>

> no docs found   


### Winding
`import "luxe: render" for Winding{:lx}`
> no docs found

- [clockwise](#Winding.clockwise)
- [counter_clockwise](#Winding.counter_clockwise)
- [from_string](#Winding.from_string)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: render" class="Winding" signature="clockwise"></endpoint>
<h4 class="signature_head">Winding.clockwise</h4><a class="signature-arity" href="#Winding.clockwise" title="Permanent link">1</a><signature id="Winding.clockwise">

```lx
Winding.clockwise : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Winding" signature="counter_clockwise"></endpoint>
<h4 class="signature_head">Winding.counter_clockwise</h4><a class="signature-arity" href="#Winding.counter_clockwise" title="Permanent link">1</a><signature id="Winding.counter_clockwise">

```lx
Winding.counter_clockwise : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: render" class="Winding" signature="from_string(value : Any)"></endpoint>
<h4 class="signature_head">Winding.from_string</h4><a class="signature-arity" href="#Winding.from_string" title="Permanent link">1</a><signature id="Winding.from_string">

```lx
Winding.from_string(value : Any) : unknown
```
</signature>

> no docs found   

