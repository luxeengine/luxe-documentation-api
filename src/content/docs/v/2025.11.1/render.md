---
title: "luxe: render"
description: API version 2025.11.1
slug: "v/2025.11.1/render"
---
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


## Atlas
```lx
import "luxe: render" for Atlas
```
> no docs found

<endpoint module="luxe: render" class="Atlas" signature="create(size : Any, material : Any)"></endpoint>
### Atlas.create(..)
```lx
Atlas.create(size : Any, material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="destroy(atlas : Any)"></endpoint>
### Atlas.destroy(.)
```lx
Atlas.destroy(atlas : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="valid(atlas : Any)"></endpoint>
### Atlas.valid(.)
```lx
Atlas.valid(atlas : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="get_size(atlas : Any)"></endpoint>
### Atlas.get_size(.)
```lx
Atlas.get_size(atlas : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="get_material(atlas : Any)"></endpoint>
### Atlas.get_material(.)
```lx
Atlas.get_material(atlas : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_add(atlas : Any, atlas_image_id : Any, frame : Any, rect : Any, rotated : Any)"></endpoint>
### Atlas.rect_add(.....)
```lx
Atlas.rect_add(atlas : Any, atlas_image_id : Any, frame : Any, rect : Any, rotated : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_remove(atlas : Any, atlas_image_id : Any)"></endpoint>
### Atlas.rect_remove(..)
```lx
Atlas.rect_remove(atlas : Any, atlas_image_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_frame(atlas : Any, atlas_image : Any)"></endpoint>
### Atlas.rect_get_frame(..)
```lx
Atlas.rect_get_frame(atlas : Any, atlas_image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_rect(atlas : Any, atlas_image : Any)"></endpoint>
### Atlas.rect_get_rect(..)
```lx
Atlas.rect_get_rect(atlas : Any, atlas_image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_rotated(atlas : Any, atlas_image : Any)"></endpoint>
### Atlas.rect_get_rotated(..)
```lx
Atlas.rect_get_rotated(atlas : Any, atlas_image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_exists(atlas : Any, atlas_image : Any)"></endpoint>
### Atlas.rect_exists(..)
```lx
Atlas.rect_exists(atlas : Any, atlas_image : Any) : unknown
```
> no docs found   


## BlendFactor
```lx
import "luxe: render" for BlendFactor
```
> no docs found

<endpoint module="luxe: render" class="BlendFactor" signature="zero"></endpoint>
### BlendFactor.zero
```lx
BlendFactor.zero : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one"></endpoint>
### BlendFactor.one
```lx
BlendFactor.one : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_color"></endpoint>
### BlendFactor.source_color
```lx
BlendFactor.source_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_source_color"></endpoint>
### BlendFactor.one_minus_source_color
```lx
BlendFactor.one_minus_source_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_alpha"></endpoint>
### BlendFactor.source_alpha
```lx
BlendFactor.source_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_source_alpha"></endpoint>
### BlendFactor.one_minus_source_alpha
```lx
BlendFactor.one_minus_source_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="destination_color"></endpoint>
### BlendFactor.destination_color
```lx
BlendFactor.destination_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_destination_color"></endpoint>
### BlendFactor.one_minus_destination_color
```lx
BlendFactor.one_minus_destination_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="destination_alpha"></endpoint>
### BlendFactor.destination_alpha
```lx
BlendFactor.destination_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_destination_alpha"></endpoint>
### BlendFactor.one_minus_destination_alpha
```lx
BlendFactor.one_minus_destination_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_alpha_saturated"></endpoint>
### BlendFactor.source_alpha_saturated
```lx
BlendFactor.source_alpha_saturated : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="blend_color"></endpoint>
### BlendFactor.blend_color
```lx
BlendFactor.blend_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_blend_color"></endpoint>
### BlendFactor.one_minus_blend_color
```lx
BlendFactor.one_minus_blend_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="blend_alpha"></endpoint>
### BlendFactor.blend_alpha
```lx
BlendFactor.blend_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_blend_alpha"></endpoint>
### BlendFactor.one_minus_blend_alpha
```lx
BlendFactor.one_minus_blend_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="invalid"></endpoint>
### BlendFactor.invalid
```lx
BlendFactor.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="from_string(value : Any)"></endpoint>
### BlendFactor.from_string(.)
```lx
BlendFactor.from_string(value : Any) : unknown
```
> no docs found   


## BlendOperation
```lx
import "luxe: render" for BlendOperation
```
> no docs found

<endpoint module="luxe: render" class="BlendOperation" signature="add"></endpoint>
### BlendOperation.add
```lx
BlendOperation.add : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="subtract"></endpoint>
### BlendOperation.subtract
```lx
BlendOperation.subtract : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="reverse_subtract"></endpoint>
### BlendOperation.reverse_subtract
```lx
BlendOperation.reverse_subtract : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="min"></endpoint>
### BlendOperation.min
```lx
BlendOperation.min : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="max"></endpoint>
### BlendOperation.max
```lx
BlendOperation.max : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="from_string(value : Any)"></endpoint>
### BlendOperation.from_string(.)
```lx
BlendOperation.from_string(value : Any) : unknown
```
> no docs found   


## Clip
```lx
import "luxe: render" for Clip
```
> no docs found

<endpoint module="luxe: render" class="Clip" signature="get_duration(clip : Clip)"></endpoint>
### Clip.get_duration(.)
```lx
Clip.get_duration(clip : Clip) : Num
```
> no docs found   


## ColorWriteMask
```lx
import "luxe: render" for ColorWriteMask
```
> no docs found

<endpoint module="luxe: render" class="ColorWriteMask" signature="none"></endpoint>
### ColorWriteMask.none
```lx
ColorWriteMask.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="red"></endpoint>
### ColorWriteMask.red
```lx
ColorWriteMask.red : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="green"></endpoint>
### ColorWriteMask.green
```lx
ColorWriteMask.green : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="blue"></endpoint>
### ColorWriteMask.blue
```lx
ColorWriteMask.blue : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="alpha"></endpoint>
### ColorWriteMask.alpha
```lx
ColorWriteMask.alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="all"></endpoint>
### ColorWriteMask.all
```lx
ColorWriteMask.all : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="invalid"></endpoint>
### ColorWriteMask.invalid
```lx
ColorWriteMask.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="from_map(value : Any)"></endpoint>
### ColorWriteMask.from_map(.)
```lx
ColorWriteMask.from_map(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="from_string(value : Any)"></endpoint>
### ColorWriteMask.from_string(.)
```lx
ColorWriteMask.from_string(value : Any) : unknown
```
> no docs found   


## CompareFunction
```lx
import "luxe: render" for CompareFunction
```
> no docs found

<endpoint module="luxe: render" class="CompareFunction" signature="never"></endpoint>
### CompareFunction.never
```lx
CompareFunction.never : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="less"></endpoint>
### CompareFunction.less
```lx
CompareFunction.less : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="equal"></endpoint>
### CompareFunction.equal
```lx
CompareFunction.equal : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="less_equal"></endpoint>
### CompareFunction.less_equal
```lx
CompareFunction.less_equal : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="greater"></endpoint>
### CompareFunction.greater
```lx
CompareFunction.greater : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="not_equal"></endpoint>
### CompareFunction.not_equal
```lx
CompareFunction.not_equal : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="greater_equal"></endpoint>
### CompareFunction.greater_equal
```lx
CompareFunction.greater_equal : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="always"></endpoint>
### CompareFunction.always
```lx
CompareFunction.always : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="from_string(value : Any)"></endpoint>
### CompareFunction.from_string(.)
```lx
CompareFunction.from_string(value : Any) : unknown
```
> no docs found   


## ComputeLayerDesc
```lx
import "luxe: render" for ComputeLayerDesc
```
> no docs found

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="new()"></endpoint>
### ComputeLayerDesc.new(.)
```lx
ComputeLayerDesc.new() : ComputeLayerDesc
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="display_id"></endpoint>
### ComputeLayerDesc.display_id
```lx
ComputeLayerDesc.display_id : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="display_id=(v : String)"></endpoint>
### ComputeLayerDesc.display_id
```lx
ComputeLayerDesc.display_id=(v : String) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="compute_id"></endpoint>
### ComputeLayerDesc.compute_id
```lx
ComputeLayerDesc.compute_id : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="compute_id=(v : String)"></endpoint>
### ComputeLayerDesc.compute_id
```lx
ComputeLayerDesc.compute_id=(v : String) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="dimensions"></endpoint>
### ComputeLayerDesc.dimensions
```lx
ComputeLayerDesc.dimensions : Float3
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="inputs"></endpoint>
### ComputeLayerDesc.inputs
```lx
ComputeLayerDesc.inputs : List
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="inputs=(v : List)"></endpoint>
### ComputeLayerDesc.inputs
```lx
ComputeLayerDesc.inputs=(v : List) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="x"></endpoint>
### ComputeLayerDesc.x
```lx
ComputeLayerDesc.x : Num
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="x=(v : Num)"></endpoint>
### ComputeLayerDesc.x
```lx
ComputeLayerDesc.x=(v : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="y"></endpoint>
### ComputeLayerDesc.y
```lx
ComputeLayerDesc.y : Num
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="y=(v : Num)"></endpoint>
### ComputeLayerDesc.y
```lx
ComputeLayerDesc.y=(v : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="z"></endpoint>
### ComputeLayerDesc.z
```lx
ComputeLayerDesc.z : Num
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="z=(v : Num)"></endpoint>
### ComputeLayerDesc.z
```lx
ComputeLayerDesc.z=(v : Num) : unknown
```
> no docs found   


## ComputeLayerInput
```lx
import "luxe: render" for ComputeLayerInput
```
> no docs found

<endpoint module="luxe: render" class="ComputeLayerInput" signature="library"></endpoint>
### ComputeLayerInput.library
```lx
ComputeLayerInput.library : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="type"></endpoint>
### ComputeLayerInput.type
```lx
ComputeLayerInput.type : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="input"></endpoint>
### ComputeLayerInput.input
```lx
ComputeLayerInput.input : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="buffer"></endpoint>
### ComputeLayerInput.buffer
```lx
ComputeLayerInput.buffer : InputBuffer
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="new(library : Any, type : String, input : String, buffer : InputBuffer)"></endpoint>
### ComputeLayerInput.new(....)
```lx
ComputeLayerInput.new(library : Any, type : String, input : String, buffer : InputBuffer) : ComputeLayerInput
```
> no docs found   


## CullMode
```lx
import "luxe: render" for CullMode
```
> no docs found

<endpoint module="luxe: render" class="CullMode" signature="none"></endpoint>
### CullMode.none
```lx
CullMode.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="front"></endpoint>
### CullMode.front
```lx
CullMode.front : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="back"></endpoint>
### CullMode.back
```lx
CullMode.back : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="from_string(value : Any)"></endpoint>
### CullMode.from_string(.)
```lx
CullMode.from_string(value : Any) : unknown
```
> no docs found   


## Geometry
```lx
import "luxe: render" for Geometry
```
> no docs found

<endpoint module="luxe: render" class="Geometry" signature="create(primitive : Any, material : Any, index_count : Any, index_type : Any, index_buffer : Any)"></endpoint>
### Geometry.create(.....)
```lx
Geometry.create(primitive : Any, material : Any, index_count : Any, index_type : Any, index_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="create(primitive : Any, material : Any, vert_count : Any)"></endpoint>
### Geometry.create(...)
```lx
Geometry.create(primitive : Any, material : Any, vert_count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="destroy(geo : Any)"></endpoint>
### Geometry.destroy(.)
```lx
Geometry.destroy(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="valid(geo : Any)"></endpoint>
### Geometry.valid(.)
```lx
Geometry.valid(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_world_matrix(geo : Any, world : Any)"></endpoint>
### Geometry.set_world_matrix(..)
```lx
Geometry.set_world_matrix(geo : Any, world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_vertex_buffer(geo : Any, index : Any, vertex_buffer : Any)"></endpoint>
### Geometry.set_vertex_buffer(...)
```lx
Geometry.set_vertex_buffer(geo : Any, index : Any, vertex_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_vertex_buffer(geo : Any, index : Any)"></endpoint>
### Geometry.get_vertex_buffer(..)
```lx
Geometry.get_vertex_buffer(geo : Any, index : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_index_buffer(geo : Any)"></endpoint>
### Geometry.get_index_buffer(.)
```lx
Geometry.get_index_buffer(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_instance_count(geo : Any, count : Any)"></endpoint>
### Geometry.set_instance_count(..)
```lx
Geometry.set_instance_count(geo : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_instance_count(geo : Any)"></endpoint>
### Geometry.get_instance_count(.)
```lx
Geometry.get_instance_count(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_vert_count(geo : Any, count : Any)"></endpoint>
### Geometry.set_vert_count(..)
```lx
Geometry.set_vert_count(geo : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_material(geo : Any, material : Any)"></endpoint>
### Geometry.set_material(..)
```lx
Geometry.set_material(geo : Any, material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_stencil_references(geo : Any, back : Any, front : Any)"></endpoint>
### Geometry.set_stencil_references(...)
```lx
Geometry.set_stencil_references(geo : Any, back : Any, front : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_stencil_reference(geo : Any, value : Any)"></endpoint>
### Geometry.set_stencil_reference(..)
```lx
Geometry.set_stencil_reference(geo : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_aabb(geo : Any, center_x : Any, center_y : Any, center_z : Any, radius_x : Any, radius_y : Any, radius_z : Any)"></endpoint>
### Geometry.set_aabb(.......)
```lx
Geometry.set_aabb(geo : Any, center_x : Any, center_y : Any, center_z : Any, radius_x : Any, radius_y : Any, radius_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_aabb(geo : Any)"></endpoint>
### Geometry.get_aabb(.)
```lx
Geometry.get_aabb(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_world_obb(geo : Any)"></endpoint>
### Geometry.get_world_obb(.)
```lx
Geometry.get_world_obb(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_vert_count(geo : Any)"></endpoint>
### Geometry.get_vert_count(.)
```lx
Geometry.get_vert_count(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_material(geo : Any)"></endpoint>
### Geometry.get_material(.)
```lx
Geometry.get_material(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="obb_intersect_ray(geo : Any, ray_x : Any, ray_y : Any, ray_z : Any, ray_dir_x : Any, ray_dir_y : Any, ray_dir_z : Any)"></endpoint>
### Geometry.obb_intersect_ray(.......)
```lx
Geometry.obb_intersect_ray(geo : Any, ray_x : Any, ray_y : Any, ray_z : Any, ray_dir_x : Any, ray_dir_y : Any, ray_dir_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_include_add(geo : Any, layer_id : Any)"></endpoint>
### Geometry.layer_include_add(..)
```lx
Geometry.layer_include_add(geo : Any, layer_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_include_remove(geo : Any, layer_id : Any)"></endpoint>
### Geometry.layer_include_remove(..)
```lx
Geometry.layer_include_remove(geo : Any, layer_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_exclude_add(geo : Any, layer_id : Any)"></endpoint>
### Geometry.layer_exclude_add(..)
```lx
Geometry.layer_exclude_add(geo : Any, layer_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_exclude_remove(geo : Any, layer_id : Any)"></endpoint>
### Geometry.layer_exclude_remove(..)
```lx
Geometry.layer_exclude_remove(geo : Any, layer_id : Any) : unknown
```
> no docs found   


## Image
```lx
import "luxe: render" for Image
```
> no docs found

<endpoint module="luxe: render" class="Image" signature="create(desc : Any)"></endpoint>
### Image.create(.)
```lx
Image.create(desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="redefine(image : Any, desc : Any)"></endpoint>
### Image.redefine(..)
```lx
Image.redefine(image : Any, desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="destroy(name : Any)"></endpoint>
### Image.destroy(.)
```lx
Image.destroy(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="valid(name : Any)"></endpoint>
### Image.valid(.)
```lx
Image.valid(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_resource(name : Any)"></endpoint>
### Image.get_resource(.)
```lx
Image.get_resource(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="generate_mipmaps(image : Any)"></endpoint>
### Image.generate_mipmaps(.)
```lx
Image.generate_mipmaps(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="update(image : Any, x : Any, y : Any, w : Any, h : Any, level : Any, slice : Any, bytes : Any)"></endpoint>
### Image.update(........)
```lx
Image.update(image : Any, x : Any, y : Any, w : Any, h : Any, level : Any, slice : Any, bytes : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_type(image : Any)"></endpoint>
### Image.get_type(.)
```lx
Image.get_type(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_width(image : Any)"></endpoint>
### Image.get_width(.)
```lx
Image.get_width(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_height(image : Any)"></endpoint>
### Image.get_height(.)
```lx
Image.get_height(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_depth(image : Any)"></endpoint>
### Image.get_depth(.)
```lx
Image.get_depth(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_pixel_format(image : Any)"></endpoint>
### Image.get_pixel_format(.)
```lx
Image.get_pixel_format(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_mipmap_levels(image : Any)"></endpoint>
### Image.get_mipmap_levels(.)
```lx
Image.get_mipmap_levels(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_array_length(image : Any)"></endpoint>
### Image.get_array_length(.)
```lx
Image.get_array_length(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_sample_count(image : Any)"></endpoint>
### Image.get_sample_count(.)
```lx
Image.get_sample_count(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_bytes(image : Any, into_bytes : Any)"></endpoint>
### Image.get_bytes(..)
```lx
Image.get_bytes(image : Any, into_bytes : Any) : unknown
```
> no docs found   


## ImageDesc
```lx
import "luxe: render" for ImageDesc
```
> no docs found

<endpoint module="luxe: render" class="ImageDesc" signature="display_id"></endpoint>
### ImageDesc.display_id
```lx
ImageDesc.display_id : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="display_id=(v : Any)"></endpoint>
### ImageDesc.display_id
```lx
ImageDesc.display_id=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="type"></endpoint>
### ImageDesc.type
```lx
ImageDesc.type : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="type=(v : Any)"></endpoint>
### ImageDesc.type
```lx
ImageDesc.type=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="pixel_format"></endpoint>
### ImageDesc.pixel_format
```lx
ImageDesc.pixel_format : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="pixel_format=(v : Any)"></endpoint>
### ImageDesc.pixel_format
```lx
ImageDesc.pixel_format=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="width"></endpoint>
### ImageDesc.width
```lx
ImageDesc.width : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="width=(v : Any)"></endpoint>
### ImageDesc.width
```lx
ImageDesc.width=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="height"></endpoint>
### ImageDesc.height
```lx
ImageDesc.height : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="height=(v : Any)"></endpoint>
### ImageDesc.height
```lx
ImageDesc.height=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="depth"></endpoint>
### ImageDesc.depth
```lx
ImageDesc.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="depth=(v : Any)"></endpoint>
### ImageDesc.depth
```lx
ImageDesc.depth=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="mipmap_levels"></endpoint>
### ImageDesc.mipmap_levels
```lx
ImageDesc.mipmap_levels : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="mipmap_levels=(v : Any)"></endpoint>
### ImageDesc.mipmap_levels
```lx
ImageDesc.mipmap_levels=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="array_length"></endpoint>
### ImageDesc.array_length
```lx
ImageDesc.array_length : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="array_length=(v : Any)"></endpoint>
### ImageDesc.array_length
```lx
ImageDesc.array_length=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="sample_count"></endpoint>
### ImageDesc.sample_count
```lx
ImageDesc.sample_count : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="sample_count=(v : Any)"></endpoint>
### ImageDesc.sample_count
```lx
ImageDesc.sample_count=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="usage"></endpoint>
### ImageDesc.usage
```lx
ImageDesc.usage : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="usage=(v : Any)"></endpoint>
### ImageDesc.usage
```lx
ImageDesc.usage=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="new()"></endpoint>
### ImageDesc.new(.)
```lx
ImageDesc.new() : ImageDesc
```
> no docs found   


## ImageType
```lx
import "luxe: render" for ImageType
```
> no docs found

<endpoint module="luxe: render" class="ImageType" signature="invalid"></endpoint>
### ImageType.invalid
```lx
ImageType.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image1D"></endpoint>
### ImageType.image1D
```lx
ImageType.image1D : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image1DArray"></endpoint>
### ImageType.image1DArray
```lx
ImageType.image1DArray : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2D"></endpoint>
### ImageType.image2D
```lx
ImageType.image2D : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2DArray"></endpoint>
### ImageType.image2DArray
```lx
ImageType.image2DArray : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2DMultisample"></endpoint>
### ImageType.image2DMultisample
```lx
ImageType.image2DMultisample : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="imageCube"></endpoint>
### ImageType.imageCube
```lx
ImageType.imageCube : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="imageCubeArray"></endpoint>
### ImageType.imageCubeArray
```lx
ImageType.imageCubeArray : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image3D"></endpoint>
### ImageType.image3D
```lx
ImageType.image3D : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="from_string(value : Any)"></endpoint>
### ImageType.from_string(.)
```lx
ImageType.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="name(value : Any)"></endpoint>
### ImageType.name(.)
```lx
ImageType.name(value : Any) : unknown
```
> no docs found   


## ImageUsage
```lx
import "luxe: render" for ImageUsage
```
> no docs found

<endpoint module="luxe: render" class="ImageUsage" signature="unknown"></endpoint>
### ImageUsage.unknown
```lx
ImageUsage.unknown : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_read"></endpoint>
### ImageUsage.shader_read
```lx
ImageUsage.shader_read : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_write"></endpoint>
### ImageUsage.shader_write
```lx
ImageUsage.shader_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_read_write"></endpoint>
### ImageUsage.shader_read_write
```lx
ImageUsage.shader_read_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="render_target"></endpoint>
### ImageUsage.render_target
```lx
ImageUsage.render_target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="pixel_format_view"></endpoint>
### ImageUsage.pixel_format_view
```lx
ImageUsage.pixel_format_view : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="stream"></endpoint>
### ImageUsage.stream
```lx
ImageUsage.stream : unknown
```
> no docs found   


## IndexType
```lx
import "luxe: render" for IndexType
```
> no docs found

<endpoint module="luxe: render" class="IndexType" signature="none"></endpoint>
### IndexType.none
```lx
IndexType.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="u16"></endpoint>
### IndexType.u16
```lx
IndexType.u16 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="u32"></endpoint>
### IndexType.u32
```lx
IndexType.u32 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="size_of(value : Any)"></endpoint>
### IndexType.size_of(.)
```lx
IndexType.size_of(value : Any) : unknown
```
> no docs found   


## InputBuffer
```lx
import "luxe: render" for InputBuffer
```
> no docs found

<endpoint module="luxe: render" class="InputBuffer" signature="create(library : String, type : String, input : String, N : Num)"></endpoint>
### InputBuffer.create(....)
```lx
InputBuffer.create(library : String, type : String, input : String, N : Num) : InputBuffer
```
> no docs found   

<endpoint module="luxe: render" class="InputBuffer" signature="set(buffer : InputBuffer, data : String)"></endpoint>
### InputBuffer.set(..)
```lx
InputBuffer.set(buffer : InputBuffer, data : String) : unknown
```
> no docs found   


## LayerCompute
```lx
import "luxe: render" for LayerCompute
```
> no docs found

<endpoint module="luxe: render" class="LayerCompute" signature="id"></endpoint>
### LayerCompute.id
```lx
LayerCompute.id : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="id=(v : Any)"></endpoint>
### LayerCompute.id
```lx
LayerCompute.id=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="new(desc : ComputeLayerDesc)"></endpoint>
### LayerCompute.new(.)
```lx
LayerCompute.new(desc : ComputeLayerDesc) : LayerCompute
```
> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="update(desc : ComputeLayerDesc)"></endpoint>
### LayerCompute.update(.)
```lx
LayerCompute.update(desc : ComputeLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="queue(path : RenderPath)"></endpoint>
### LayerCompute.queue(.)
```lx
LayerCompute.queue(path : RenderPath) : unknown
```
> no docs found   


## LayerPass
```lx
import "luxe: render" for LayerPass
```
> no docs found

<endpoint module="luxe: render" class="LayerPass" signature="id"></endpoint>
### LayerPass.id
```lx
LayerPass.id : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="id=(v : Any)"></endpoint>
### LayerPass.id
```lx
LayerPass.id=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="new(pass : Any)"></endpoint>
### LayerPass.new(.)
```lx
LayerPass.new(pass : Any) : LayerPass
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="queue(path : Any)"></endpoint>
### LayerPass.queue(.)
```lx
LayerPass.queue(path : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="new(path : Any, pass : Any)"></endpoint>
### LayerPass.new(..)
```lx
LayerPass.new(path : Any, pass : Any) : LayerPass
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="create_dest(pass : Any)"></endpoint>
### LayerPass.create_dest(.)
```lx
LayerPass.create_dest(pass : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="update_material(desc : Any)"></endpoint>
### LayerPass.update_material(.)
```lx
LayerPass.update_material(desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="create_material(pass : PassLayerDesc)"></endpoint>
### LayerPass.create_material(.)
```lx
LayerPass.create_material(pass : PassLayerDesc) : unknown
```
> no docs found   


## LoadAction
```lx
import "luxe: render" for LoadAction
```
> no docs found

<endpoint module="luxe: render" class="LoadAction" signature="dont_care"></endpoint>
### LoadAction.dont_care
```lx
LoadAction.dont_care : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LoadAction" signature="load"></endpoint>
### LoadAction.load
```lx
LoadAction.load : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LoadAction" signature="clear"></endpoint>
### LoadAction.clear
```lx
LoadAction.clear : unknown
```
> no docs found   


## Material
```lx
import "luxe: render" for Material
```
> no docs found

<endpoint module="luxe: render" class="Material" signature="create(basis_type : Any)"></endpoint>
### Material.create(.)
```lx
Material.create(basis_type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="clone(material : Any)"></endpoint>
### Material.clone(.)
```lx
Material.clone(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="destroy(material : Any)"></endpoint>
### Material.destroy(.)
```lx
Material.destroy(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="valid(material : Any)"></endpoint>
### Material.valid(.)
```lx
Material.valid(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="undefine(name : Any)"></endpoint>
### Material.undefine(.)
```lx
Material.undefine(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_source_id(material : Any)"></endpoint>
### Material.get_source_id(.)
```lx
Material.get_source_id(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_source_id(material : Any, source_id : Any)"></endpoint>
### Material.set_source_id(..)
```lx
Material.set_source_id(material : Any, source_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_stencil_references(material : Any, back : Any, front : Any)"></endpoint>
### Material.set_stencil_references(...)
```lx
Material.set_stencil_references(material : Any, back : Any, front : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_stencil_reference(material : Any, value : Any)"></endpoint>
### Material.set_stencil_reference(..)
```lx
Material.set_stencil_reference(material : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_list(material : Any)"></endpoint>
### Material.get_input_list(.)
```lx
Material.get_input_list(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_image(material : Any, name : Any)"></endpoint>
### Material.get_input_image(..)
```lx
Material.get_input_image(material : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="has_input(material : Any, name : Any)"></endpoint>
### Material.has_input(..)
```lx
Material.has_input(material : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_type(material : Any, name : Any)"></endpoint>
### Material.get_input_type(..)
```lx
Material.get_input_type(material : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="is_input_array(material : Any, name : Any)"></endpoint>
### Material.is_input_array(..)
```lx
Material.is_input_array(material : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_input(material : Any, name : Any, value : Any)"></endpoint>
### Material.set_input(...)
```lx
Material.set_input(material : Any, name : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="define(name : Any, desc : Any)"></endpoint>
### Material.define(..)
```lx
Material.define(name : Any, desc : Any) : unknown
```
> no docs found   


## MaterialDesc
```lx
import "luxe: render" for MaterialDesc
```
> no docs found

### Variables
```lx
var pass_usage : List = null
```
<endpoint module="luxe: render" class="MaterialDesc" signature="new()"></endpoint>
### MaterialDesc.new(.)
```lx
MaterialDesc.new() : MaterialDesc
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex_format"></endpoint>
### MaterialDesc.vertex_format
```lx
MaterialDesc.vertex_format : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex_format=(v : Any)"></endpoint>
### MaterialDesc.vertex_format
```lx
MaterialDesc.vertex_format=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex"></endpoint>
### MaterialDesc.vertex
```lx
MaterialDesc.vertex : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex=(v : Any)"></endpoint>
### MaterialDesc.vertex
```lx
MaterialDesc.vertex=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="fragment"></endpoint>
### MaterialDesc.fragment
```lx
MaterialDesc.fragment : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="fragment=(v : Any)"></endpoint>
### MaterialDesc.fragment
```lx
MaterialDesc.fragment=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="geometry"></endpoint>
### MaterialDesc.geometry
```lx
MaterialDesc.geometry : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="geometry=(v : Any)"></endpoint>
### MaterialDesc.geometry
```lx
MaterialDesc.geometry=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_enabled"></endpoint>
### MaterialDesc.depth_bias_enabled
```lx
MaterialDesc.depth_bias_enabled : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_enabled=(v : Any)"></endpoint>
### MaterialDesc.depth_bias_enabled
```lx
MaterialDesc.depth_bias_enabled=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias"></endpoint>
### MaterialDesc.depth_bias
```lx
MaterialDesc.depth_bias : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias=(v : Any)"></endpoint>
### MaterialDesc.depth_bias
```lx
MaterialDesc.depth_bias=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_slope_scale"></endpoint>
### MaterialDesc.depth_bias_slope_scale
```lx
MaterialDesc.depth_bias_slope_scale : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_slope_scale=(v : Any)"></endpoint>
### MaterialDesc.depth_bias_slope_scale
```lx
MaterialDesc.depth_bias_slope_scale=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_test"></endpoint>
### MaterialDesc.depth_test
```lx
MaterialDesc.depth_test : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_test=(v : Any)"></endpoint>
### MaterialDesc.depth_test
```lx
MaterialDesc.depth_test=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_write"></endpoint>
### MaterialDesc.depth_write
```lx
MaterialDesc.depth_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_write=(v : Any)"></endpoint>
### MaterialDesc.depth_write
```lx
MaterialDesc.depth_write=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_compare"></endpoint>
### MaterialDesc.depth_compare
```lx
MaterialDesc.depth_compare : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_compare=(v : Any)"></endpoint>
### MaterialDesc.depth_compare
```lx
MaterialDesc.depth_compare=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_test"></endpoint>
### MaterialDesc.stencil_test
```lx
MaterialDesc.stencil_test : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_test=(v : Any)"></endpoint>
### MaterialDesc.stencil_test
```lx
MaterialDesc.stencil_test=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="write_mask"></endpoint>
### MaterialDesc.write_mask
```lx
MaterialDesc.write_mask : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="write_mask=(v : Any)"></endpoint>
### MaterialDesc.write_mask
```lx
MaterialDesc.write_mask=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blending"></endpoint>
### MaterialDesc.blending
```lx
MaterialDesc.blending : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blending=(v : Any)"></endpoint>
### MaterialDesc.blending
```lx
MaterialDesc.blending=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="alpha_blend"></endpoint>
### MaterialDesc.alpha_blend
```lx
MaterialDesc.alpha_blend : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="alpha_blend=(v : Any)"></endpoint>
### MaterialDesc.alpha_blend
```lx
MaterialDesc.alpha_blend=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="rgb_blend"></endpoint>
### MaterialDesc.rgb_blend
```lx
MaterialDesc.rgb_blend : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="rgb_blend=(v : Any)"></endpoint>
### MaterialDesc.rgb_blend
```lx
MaterialDesc.rgb_blend=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_alpha"></endpoint>
### MaterialDesc.src_alpha
```lx
MaterialDesc.src_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_alpha=(v : Any)"></endpoint>
### MaterialDesc.src_alpha
```lx
MaterialDesc.src_alpha=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_rgb"></endpoint>
### MaterialDesc.src_rgb
```lx
MaterialDesc.src_rgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_rgb=(v : Any)"></endpoint>
### MaterialDesc.src_rgb
```lx
MaterialDesc.src_rgb=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_alpha"></endpoint>
### MaterialDesc.dest_alpha
```lx
MaterialDesc.dest_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_alpha=(v : Any)"></endpoint>
### MaterialDesc.dest_alpha
```lx
MaterialDesc.dest_alpha=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_rgb"></endpoint>
### MaterialDesc.dest_rgb
```lx
MaterialDesc.dest_rgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_rgb=(v : Any)"></endpoint>
### MaterialDesc.dest_rgb
```lx
MaterialDesc.dest_rgb=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blend_color"></endpoint>
### MaterialDesc.blend_color
```lx
MaterialDesc.blend_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blend_color=(v : Any)"></endpoint>
### MaterialDesc.blend_color
```lx
MaterialDesc.blend_color=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="cull"></endpoint>
### MaterialDesc.cull
```lx
MaterialDesc.cull : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="cull=(v : Any)"></endpoint>
### MaterialDesc.cull
```lx
MaterialDesc.cull=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="winding"></endpoint>
### MaterialDesc.winding
```lx
MaterialDesc.winding : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="winding=(v : Any)"></endpoint>
### MaterialDesc.winding
```lx
MaterialDesc.winding=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="layers"></endpoint>
### MaterialDesc.layers
```lx
MaterialDesc.layers : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="layers=(v : Any)"></endpoint>
### MaterialDesc.layers
```lx
MaterialDesc.layers=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="inputs"></endpoint>
### MaterialDesc.inputs
```lx
MaterialDesc.inputs : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="inputs=(v : Any)"></endpoint>
### MaterialDesc.inputs
```lx
MaterialDesc.inputs=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blocks"></endpoint>
### MaterialDesc.blocks
```lx
MaterialDesc.blocks : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blocks=(v : Any)"></endpoint>
### MaterialDesc.blocks
```lx
MaterialDesc.blocks=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="replace"></endpoint>
### MaterialDesc.replace
```lx
MaterialDesc.replace : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="replace=(v : Any)"></endpoint>
### MaterialDesc.replace
```lx
MaterialDesc.replace=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_stencil"></endpoint>
### MaterialDesc.stencil_back_failure_stencil
```lx
MaterialDesc.stencil_back_failure_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_stencil=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_failure_stencil
```lx
MaterialDesc.stencil_back_failure_stencil=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_depth"></endpoint>
### MaterialDesc.stencil_back_failure_depth
```lx
MaterialDesc.stencil_back_failure_depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_depth=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_failure_depth
```lx
MaterialDesc.stencil_back_failure_depth=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_pass_depth_stencil"></endpoint>
### MaterialDesc.stencil_back_pass_depth_stencil
```lx
MaterialDesc.stencil_back_pass_depth_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_pass_depth_stencil=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_pass_depth_stencil
```lx
MaterialDesc.stencil_back_pass_depth_stencil=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_compare"></endpoint>
### MaterialDesc.stencil_back_compare
```lx
MaterialDesc.stencil_back_compare : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_compare=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_compare
```lx
MaterialDesc.stencil_back_compare=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_read"></endpoint>
### MaterialDesc.stencil_back_mask_read
```lx
MaterialDesc.stencil_back_mask_read : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_read=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_mask_read
```lx
MaterialDesc.stencil_back_mask_read=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_write"></endpoint>
### MaterialDesc.stencil_back_mask_write
```lx
MaterialDesc.stencil_back_mask_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_write=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_mask_write
```lx
MaterialDesc.stencil_back_mask_write=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_reference"></endpoint>
### MaterialDesc.stencil_back_reference
```lx
MaterialDesc.stencil_back_reference : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_reference=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_reference
```lx
MaterialDesc.stencil_back_reference=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_stencil"></endpoint>
### MaterialDesc.stencil_front_failure_stencil
```lx
MaterialDesc.stencil_front_failure_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_stencil=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_failure_stencil
```lx
MaterialDesc.stencil_front_failure_stencil=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_depth"></endpoint>
### MaterialDesc.stencil_front_failure_depth
```lx
MaterialDesc.stencil_front_failure_depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_depth=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_failure_depth
```lx
MaterialDesc.stencil_front_failure_depth=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_pass_depth_stencil"></endpoint>
### MaterialDesc.stencil_front_pass_depth_stencil
```lx
MaterialDesc.stencil_front_pass_depth_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_pass_depth_stencil=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_pass_depth_stencil
```lx
MaterialDesc.stencil_front_pass_depth_stencil=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_compare"></endpoint>
### MaterialDesc.stencil_front_compare
```lx
MaterialDesc.stencil_front_compare : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_compare=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_compare
```lx
MaterialDesc.stencil_front_compare=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_read"></endpoint>
### MaterialDesc.stencil_front_mask_read
```lx
MaterialDesc.stencil_front_mask_read : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_read=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_mask_read
```lx
MaterialDesc.stencil_front_mask_read=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_write"></endpoint>
### MaterialDesc.stencil_front_mask_write
```lx
MaterialDesc.stencil_front_mask_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_write=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_mask_write
```lx
MaterialDesc.stencil_front_mask_write=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_reference"></endpoint>
### MaterialDesc.stencil_front_reference
```lx
MaterialDesc.stencil_front_reference : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_reference=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_reference
```lx
MaterialDesc.stencil_front_reference=(v : Any) : unknown
```
> no docs found   


## MaterialFunction
```lx
import "luxe: render" for MaterialFunction
```
> no docs found

<endpoint module="luxe: render" class="MaterialFunction" signature="library"></endpoint>
### MaterialFunction.library
```lx
MaterialFunction.library : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="library=(v : Any)"></endpoint>
### MaterialFunction.library
```lx
MaterialFunction.library=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="function"></endpoint>
### MaterialFunction.function
```lx
MaterialFunction.function : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="function=(v : Any)"></endpoint>
### MaterialFunction.function
```lx
MaterialFunction.function=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="new()"></endpoint>
### MaterialFunction.new(.)
```lx
MaterialFunction.new() : MaterialFunction
```
> no docs found   


## MaterialInput
```lx
import "luxe: render" for MaterialInput
```
> no docs found

<endpoint module="luxe: render" class="MaterialInput" signature="name"></endpoint>
### MaterialInput.name
```lx
MaterialInput.name : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="name=(name : Any)"></endpoint>
### MaterialInput.name
```lx
MaterialInput.name=(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="type"></endpoint>
### MaterialInput.type
```lx
MaterialInput.type : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="type=(type : Any)"></endpoint>
### MaterialInput.type
```lx
MaterialInput.type=(type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="value"></endpoint>
### MaterialInput.value
```lx
MaterialInput.value : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="value=(value : Any)"></endpoint>
### MaterialInput.value
```lx
MaterialInput.value=(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="count"></endpoint>
### MaterialInput.count
```lx
MaterialInput.count : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="count=(count : Any)"></endpoint>
### MaterialInput.count
```lx
MaterialInput.count=(count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new()"></endpoint>
### MaterialInput.new(.)
```lx
MaterialInput.new() : MaterialInput
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new(name : Any, type : Any, value : Any, count : Any)"></endpoint>
### MaterialInput.new(....)
```lx
MaterialInput.new(name : Any, type : Any, value : Any, count : Any) : MaterialInput
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new(name : Any, type : Any, value : Any)"></endpoint>
### MaterialInput.new(...)
```lx
MaterialInput.new(name : Any, type : Any, value : Any) : MaterialInput
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="init(name : Any, type : Any, value : Any, count : Any)"></endpoint>
### MaterialInput.init(....)
```lx
MaterialInput.init(name : Any, type : Any, value : Any, count : Any) : unknown
```
> no docs found   


## MaterialInputBlock
```lx
import "luxe: render" for MaterialInputBlock
```
> no docs found

<endpoint module="luxe: render" class="MaterialInputBlock" signature="get_defined(name : Any)"></endpoint>
### MaterialInputBlock.get_defined(.)
```lx
MaterialInputBlock.get_defined(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="has_input(block : Any, name : Any)"></endpoint>
### MaterialInputBlock.has_input(..)
```lx
MaterialInputBlock.has_input(block : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="is_input_array(block : Any, name : Any)"></endpoint>
### MaterialInputBlock.is_input_array(..)
```lx
MaterialInputBlock.is_input_array(block : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set_floats(block : MaterialInputBlock, name : String, value : Floats)"></endpoint>
### MaterialInputBlock.set_floats(...)
```lx
MaterialInputBlock.set_floats(block : MaterialInputBlock, name : String, value : Floats) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set_bytes(block : MaterialInputBlock, name : String, value : Bytes)"></endpoint>
### MaterialInputBlock.set_bytes(...)
```lx
MaterialInputBlock.set_bytes(block : MaterialInputBlock, name : String, value : Bytes) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set(block : Any, name : Any, value : Any)"></endpoint>
### MaterialInputBlock.set(...)
```lx
MaterialInputBlock.set(block : Any, name : Any, value : Any) : unknown
```
> no docs found   


## MaterialInputImage
```lx
import "luxe: render" for MaterialInputImage
```
> no docs found

<endpoint module="luxe: render" class="MaterialInputImage" signature="image"></endpoint>
### MaterialInputImage.image
```lx
MaterialInputImage.image : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="image=(image : Any)"></endpoint>
### MaterialInputImage.image
```lx
MaterialInputImage.image=(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="type"></endpoint>
### MaterialInputImage.type
```lx
MaterialInputImage.type : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="type=(type : Any)"></endpoint>
### MaterialInputImage.type
```lx
MaterialInputImage.type=(type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="sampler"></endpoint>
### MaterialInputImage.sampler
```lx
MaterialInputImage.sampler : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="sampler=(value : Any)"></endpoint>
### MaterialInputImage.sampler
```lx
MaterialInputImage.sampler=(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new()"></endpoint>
### MaterialInputImage.new(.)
```lx
MaterialInputImage.new() : MaterialInputImage
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new(in_image : Any, in_sampler : Any)"></endpoint>
### MaterialInputImage.new(..)
```lx
MaterialInputImage.new(in_image : Any, in_sampler : Any) : MaterialInputImage
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new(in_image : Any, in_sampler : Any, in_type : Any)"></endpoint>
### MaterialInputImage.new(...)
```lx
MaterialInputImage.new(in_image : Any, in_sampler : Any, in_type : Any) : MaterialInputImage
```
> no docs found   


## MaterialInputType
```lx
import "luxe: render" for MaterialInputType
```
> no docs found

<endpoint module="luxe: render" class="MaterialInputType" signature="invalid"></endpoint>
### MaterialInputType.invalid
```lx
MaterialInputType.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool"></endpoint>
### MaterialInputType.bool
```lx
MaterialInputType.bool : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool2"></endpoint>
### MaterialInputType.bool2
```lx
MaterialInputType.bool2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool4"></endpoint>
### MaterialInputType.bool4
```lx
MaterialInputType.bool4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int"></endpoint>
### MaterialInputType.int
```lx
MaterialInputType.int : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int2"></endpoint>
### MaterialInputType.int2
```lx
MaterialInputType.int2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int4"></endpoint>
### MaterialInputType.int4
```lx
MaterialInputType.int4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint"></endpoint>
### MaterialInputType.uint
```lx
MaterialInputType.uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint2"></endpoint>
### MaterialInputType.uint2
```lx
MaterialInputType.uint2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint4"></endpoint>
### MaterialInputType.uint4
```lx
MaterialInputType.uint4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float"></endpoint>
### MaterialInputType.float
```lx
MaterialInputType.float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float2"></endpoint>
### MaterialInputType.float2
```lx
MaterialInputType.float2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float4"></endpoint>
### MaterialInputType.float4
```lx
MaterialInputType.float4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="mat4"></endpoint>
### MaterialInputType.mat4
```lx
MaterialInputType.mat4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="image"></endpoint>
### MaterialInputType.image
```lx
MaterialInputType.image : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="from_string(value : Any)"></endpoint>
### MaterialInputType.from_string(.)
```lx
MaterialInputType.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="name(value : Any)"></endpoint>
### MaterialInputType.name(.)
```lx
MaterialInputType.name(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="size_of(value : Any)"></endpoint>
### MaterialInputType.size_of(.)
```lx
MaterialInputType.size_of(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="default_of(value : Any)"></endpoint>
### MaterialInputType.default_of(.)
```lx
MaterialInputType.default_of(value : Any) : unknown
```
> no docs found   


## MaterialReplace
```lx
import "luxe: render" for MaterialReplace
```
> no docs found

<endpoint module="luxe: render" class="MaterialReplace" signature="tag"></endpoint>
### MaterialReplace.tag
```lx
MaterialReplace.tag : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="tag=(v : Any)"></endpoint>
### MaterialReplace.tag
```lx
MaterialReplace.tag=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="basis"></endpoint>
### MaterialReplace.basis
```lx
MaterialReplace.basis : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="basis=(v : Any)"></endpoint>
### MaterialReplace.basis
```lx
MaterialReplace.basis=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="new()"></endpoint>
### MaterialReplace.new(.)
```lx
MaterialReplace.new() : MaterialReplace
```
> no docs found   


## PassLayerDesc
```lx
import "luxe: render" for PassLayerDesc
```
> no docs found

### Variables
```lx
var display_id : String = "Pass Layer"
var pass_usage : List = null
```
<endpoint module="luxe: render" class="PassLayerDesc" signature="new()"></endpoint>
### PassLayerDesc.new(.)
```lx
PassLayerDesc.new() : PassLayerDesc
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="dest"></endpoint>
### PassLayerDesc.dest
```lx
PassLayerDesc.dest : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="dest=(v : Any)"></endpoint>
### PassLayerDesc.dest
```lx
PassLayerDesc.dest=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="basis"></endpoint>
### PassLayerDesc.basis
```lx
PassLayerDesc.basis : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="basis=(v : Any)"></endpoint>
### PassLayerDesc.basis
```lx
PassLayerDesc.basis=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="inputs"></endpoint>
### PassLayerDesc.inputs
```lx
PassLayerDesc.inputs : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="inputs=(v : Any)"></endpoint>
### PassLayerDesc.inputs
```lx
PassLayerDesc.inputs=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="targets"></endpoint>
### PassLayerDesc.targets
```lx
PassLayerDesc.targets : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="targets=(v : Any)"></endpoint>
### PassLayerDesc.targets
```lx
PassLayerDesc.targets=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="vertex=(v : Any)"></endpoint>
### PassLayerDesc.vertex
```lx
PassLayerDesc.vertex=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="vertex"></endpoint>
### PassLayerDesc.vertex
```lx
PassLayerDesc.vertex : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="fragment=(v : Any)"></endpoint>
### PassLayerDesc.fragment
```lx
PassLayerDesc.fragment=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="fragment"></endpoint>
### PassLayerDesc.fragment
```lx
PassLayerDesc.fragment : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_color"></endpoint>
### PassLayerDesc.clear_color
```lx
PassLayerDesc.clear_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_color=(v : Any)"></endpoint>
### PassLayerDesc.clear_color
```lx
PassLayerDesc.clear_color=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_depth"></endpoint>
### PassLayerDesc.clear_depth
```lx
PassLayerDesc.clear_depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_depth=(v : Any)"></endpoint>
### PassLayerDesc.clear_depth
```lx
PassLayerDesc.clear_depth=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="blending"></endpoint>
### PassLayerDesc.blending
```lx
PassLayerDesc.blending : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="blending=(v : Any)"></endpoint>
### PassLayerDesc.blending
```lx
PassLayerDesc.blending=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="write_mask"></endpoint>
### PassLayerDesc.write_mask
```lx
PassLayerDesc.write_mask : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="write_mask=(v : Any)"></endpoint>
### PassLayerDesc.write_mask
```lx
PassLayerDesc.write_mask=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_test"></endpoint>
### PassLayerDesc.depth_test
```lx
PassLayerDesc.depth_test : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_test=(v : Any)"></endpoint>
### PassLayerDesc.depth_test
```lx
PassLayerDesc.depth_test=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_write"></endpoint>
### PassLayerDesc.depth_write
```lx
PassLayerDesc.depth_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_write=(v : Any)"></endpoint>
### PassLayerDesc.depth_write
```lx
PassLayerDesc.depth_write=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_compare"></endpoint>
### PassLayerDesc.depth_compare
```lx
PassLayerDesc.depth_compare : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_compare=(v : Any)"></endpoint>
### PassLayerDesc.depth_compare
```lx
PassLayerDesc.depth_compare=(v : Any) : unknown
```
> no docs found   


## PixelFormat
```lx
import "luxe: render" for PixelFormat
```
> no docs found

<endpoint module="luxe: render" class="PixelFormat" signature="invalid"></endpoint>
### PixelFormat.invalid
```lx
PixelFormat.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Unorm"></endpoint>
### PixelFormat.rgb8Unorm
```lx
PixelFormat.rgb8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Unorm_srgb"></endpoint>
### PixelFormat.rgb8Unorm_srgb
```lx
PixelFormat.rgb8Unorm_srgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Snorm"></endpoint>
### PixelFormat.rgb8Snorm
```lx
PixelFormat.rgb8Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Uint"></endpoint>
### PixelFormat.rgb8Uint
```lx
PixelFormat.rgb8Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Sint"></endpoint>
### PixelFormat.rgb8Sint
```lx
PixelFormat.rgb8Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Unorm"></endpoint>
### PixelFormat.rgb16Unorm
```lx
PixelFormat.rgb16Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Snorm"></endpoint>
### PixelFormat.rgb16Snorm
```lx
PixelFormat.rgb16Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Uint"></endpoint>
### PixelFormat.rgb16Uint
```lx
PixelFormat.rgb16Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Sint"></endpoint>
### PixelFormat.rgb16Sint
```lx
PixelFormat.rgb16Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Float"></endpoint>
### PixelFormat.rgb16Float
```lx
PixelFormat.rgb16Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Uint"></endpoint>
### PixelFormat.rgb32Uint
```lx
PixelFormat.rgb32Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Sint"></endpoint>
### PixelFormat.rgb32Sint
```lx
PixelFormat.rgb32Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Float"></endpoint>
### PixelFormat.rgb32Float
```lx
PixelFormat.rgb32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Unorm"></endpoint>
### PixelFormat.rgba8Unorm
```lx
PixelFormat.rgba8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Unorm_srgb"></endpoint>
### PixelFormat.rgba8Unorm_srgb
```lx
PixelFormat.rgba8Unorm_srgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Snorm"></endpoint>
### PixelFormat.rgba8Snorm
```lx
PixelFormat.rgba8Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Uint"></endpoint>
### PixelFormat.rgba8Uint
```lx
PixelFormat.rgba8Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Sint"></endpoint>
### PixelFormat.rgba8Sint
```lx
PixelFormat.rgba8Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Unorm"></endpoint>
### PixelFormat.rgba16Unorm
```lx
PixelFormat.rgba16Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Snorm"></endpoint>
### PixelFormat.rgba16Snorm
```lx
PixelFormat.rgba16Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Uint"></endpoint>
### PixelFormat.rgba16Uint
```lx
PixelFormat.rgba16Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Sint"></endpoint>
### PixelFormat.rgba16Sint
```lx
PixelFormat.rgba16Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Float"></endpoint>
### PixelFormat.rgba16Float
```lx
PixelFormat.rgba16Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Uint"></endpoint>
### PixelFormat.rgba32Uint
```lx
PixelFormat.rgba32Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Sint"></endpoint>
### PixelFormat.rgba32Sint
```lx
PixelFormat.rgba32Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Float"></endpoint>
### PixelFormat.rgba32Float
```lx
PixelFormat.rgba32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r11g11b10Float"></endpoint>
### PixelFormat.r11g11b10Float
```lx
PixelFormat.r11g11b10Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bgra8Unorm"></endpoint>
### PixelFormat.bgra8Unorm
```lx
PixelFormat.bgra8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bgra8Unorm_srgb"></endpoint>
### PixelFormat.bgra8Unorm_srgb
```lx
PixelFormat.bgra8Unorm_srgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth16Unorm"></endpoint>
### PixelFormat.depth16Unorm
```lx
PixelFormat.depth16Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth32Float"></endpoint>
### PixelFormat.depth32Float
```lx
PixelFormat.depth32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="stencil8"></endpoint>
### PixelFormat.stencil8
```lx
PixelFormat.stencil8 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth24Unorm_stencil8"></endpoint>
### PixelFormat.depth24Unorm_stencil8
```lx
PixelFormat.depth24Unorm_stencil8 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth32Float_stencil8"></endpoint>
### PixelFormat.depth32Float_stencil8
```lx
PixelFormat.depth32Float_stencil8 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bc1_rgba"></endpoint>
### PixelFormat.bc1_rgba
```lx
PixelFormat.bc1_rgba : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bc3_rgba"></endpoint>
### PixelFormat.bc3_rgba
```lx
PixelFormat.bc3_rgba : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Unorm"></endpoint>
### PixelFormat.r8Unorm
```lx
PixelFormat.r8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Snorm"></endpoint>
### PixelFormat.r8Snorm
```lx
PixelFormat.r8Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Uint"></endpoint>
### PixelFormat.r8Uint
```lx
PixelFormat.r8Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Sint"></endpoint>
### PixelFormat.r8Sint
```lx
PixelFormat.r8Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Unorm"></endpoint>
### PixelFormat.rg8Unorm
```lx
PixelFormat.rg8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Snorm"></endpoint>
### PixelFormat.rg8Snorm
```lx
PixelFormat.rg8Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Uint"></endpoint>
### PixelFormat.rg8Uint
```lx
PixelFormat.rg8Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Sint"></endpoint>
### PixelFormat.rg8Sint
```lx
PixelFormat.rg8Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Uint"></endpoint>
### PixelFormat.r16Uint
```lx
PixelFormat.r16Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Sint"></endpoint>
### PixelFormat.r16Sint
```lx
PixelFormat.r16Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Float"></endpoint>
### PixelFormat.r16Float
```lx
PixelFormat.r16Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Uint"></endpoint>
### PixelFormat.rg16Uint
```lx
PixelFormat.rg16Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Sint"></endpoint>
### PixelFormat.rg16Sint
```lx
PixelFormat.rg16Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Float"></endpoint>
### PixelFormat.rg16Float
```lx
PixelFormat.rg16Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Uint"></endpoint>
### PixelFormat.r32Uint
```lx
PixelFormat.r32Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Sint"></endpoint>
### PixelFormat.r32Sint
```lx
PixelFormat.r32Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Float"></endpoint>
### PixelFormat.r32Float
```lx
PixelFormat.r32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Uint"></endpoint>
### PixelFormat.rg32Uint
```lx
PixelFormat.rg32Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Sint"></endpoint>
### PixelFormat.rg32Sint
```lx
PixelFormat.rg32Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Float"></endpoint>
### PixelFormat.rg32Float
```lx
PixelFormat.rg32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="from_string(value : Any)"></endpoint>
### PixelFormat.from_string(.)
```lx
PixelFormat.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="name(value : Any)"></endpoint>
### PixelFormat.name(.)
```lx
PixelFormat.name(value : Any) : unknown
```
> no docs found   


## Pose
```lx
import "luxe: render" for Pose
```
> no docs found

<endpoint module="luxe: render" class="Pose" signature="create(skeleton : Skeleton)"></endpoint>
### Pose.create(.)
```lx
Pose.create(skeleton : Skeleton) : Pose
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="destroy(pose : Pose)"></endpoint>
### Pose.destroy(.)
```lx
Pose.destroy(pose : Pose) : None
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="reset(pose : Pose)"></endpoint>
### Pose.reset(.)
```lx
Pose.reset(pose : Pose) : None
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="copy(from : Pose, to : Pose)"></endpoint>
### Pose.copy(..)
```lx
Pose.copy(from : Pose, to : Pose) : None
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_pos_joint(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_pos_joint(..)
```lx
Pose.get_bone_pos_joint(pose : Pose, bone_id : String) : Float3
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_pos(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_pos(..)
```lx
Pose.get_bone_pos(pose : Pose, bone_id : String) : Float3
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_up(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_up(..)
```lx
Pose.get_bone_up(pose : Pose, bone_id : String) : Float3
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_forward(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_forward(..)
```lx
Pose.get_bone_forward(pose : Pose, bone_id : String) : Float3
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_right(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_right(..)
```lx
Pose.get_bone_right(pose : Pose, bone_id : String) : Float3
```
> no docs found   


## PoseGraph
```lx
import "luxe: render" for PoseGraph
```
> no docs found

<endpoint module="luxe: render" class="PoseGraph" signature="create(skeleton : Skeleton)"></endpoint>
### PoseGraph.create(.)
```lx
PoseGraph.create(skeleton : Skeleton) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="destroy(graph : PoseGraph)"></endpoint>
### PoseGraph.destroy(.)
```lx
PoseGraph.destroy(graph : PoseGraph) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="valid(graph : PoseGraph)"></endpoint>
### PoseGraph.valid(.)
```lx
PoseGraph.valid(graph : PoseGraph) : Bool
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="tick(graph : PoseGraph, delta : Num)"></endpoint>
### PoseGraph.tick(..)
```lx
PoseGraph.tick(graph : PoseGraph, delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="pose(graph : PoseGraph)"></endpoint>
### PoseGraph.pose(.)
```lx
PoseGraph.pose(graph : PoseGraph) : Pose
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="set_time(graph : PoseGraph, time : Num)"></endpoint>
### PoseGraph.set_time(..)
```lx
PoseGraph.set_time(graph : PoseGraph, time : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="get_time(graph : PoseGraph)"></endpoint>
### PoseGraph.get_time(.)
```lx
PoseGraph.get_time(graph : PoseGraph) : Num
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_add(graph : PoseGraph, node : PoseNode)"></endpoint>
### PoseGraph.node_add(..)
```lx
PoseGraph.node_add(graph : PoseGraph, node : PoseNode) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_remove(graph : PoseGraph, index : Num)"></endpoint>
### PoseGraph.node_remove(..)
```lx
PoseGraph.node_remove(graph : PoseGraph, index : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_at(graph : PoseGraph, index : Num)"></endpoint>
### PoseGraph.node_at(..)
```lx
PoseGraph.node_at(graph : PoseGraph, index : Num) : PoseNode
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_index(graph : PoseGraph, node : PoseNode)"></endpoint>
### PoseGraph.node_index(..)
```lx
PoseGraph.node_index(graph : PoseGraph, node : PoseNode) : Num
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_count(graph : PoseGraph)"></endpoint>
### PoseGraph.node_count(.)
```lx
PoseGraph.node_count(graph : PoseGraph) : Num
```
> no docs found   


## PoseNode
```lx
import "luxe: render" for PoseNode
```
> no docs found

<endpoint module="luxe: render" class="PoseNode" signature="create(node_type_id : String)"></endpoint>
### PoseNode.create(.)
```lx
PoseNode.create(node_type_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="destroy(node : PoseNode)"></endpoint>
### PoseNode.destroy(.)
```lx
PoseNode.destroy(node : PoseNode) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="valid(node : PoseNode)"></endpoint>
### PoseNode.valid(.)
```lx
PoseNode.valid(node : PoseNode) : Bool
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="pose(node : PoseNode)"></endpoint>
### PoseNode.pose(.)
```lx
PoseNode.pose(node : PoseNode) : Pose
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="block(node : PoseNode)"></endpoint>
### PoseNode.block(.)
```lx
PoseNode.block(node : PoseNode) : Block
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="input(node : PoseNode)"></endpoint>
### PoseNode.input(.)
```lx
PoseNode.input(node : PoseNode) : Any
```
> no docs found   


## Primitive
```lx
import "luxe: render" for Primitive
```
> no docs found

<endpoint module="luxe: render" class="Primitive" signature="point"></endpoint>
### Primitive.point
```lx
Primitive.point : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="line"></endpoint>
### Primitive.line
```lx
Primitive.line : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="line_strip"></endpoint>
### Primitive.line_strip
```lx
Primitive.line_strip : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="triangle"></endpoint>
### Primitive.triangle
```lx
Primitive.triangle : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="triangle_strip"></endpoint>
### Primitive.triangle_strip
```lx
Primitive.triangle_strip : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="from_string(value : Any)"></endpoint>
### Primitive.from_string(.)
```lx
Primitive.from_string(value : Any) : unknown
```
> no docs found   


## Render
```lx
import "luxe: render" for Render
```
> no docs found

<endpoint module="luxe: render" class="Render" signature="dispatch(library : String, function : String, x : Num, y : Num, z : Num)"></endpoint>
### Render.dispatch(.....)
```lx
Render.dispatch(library : String, function : String, x : Num, y : Num, z : Num) : None
```
> Dispatch a compute function directly (todo: doesn't have a way to get inputs atm)   

<endpoint module="luxe: render" class="Render" signature="submit(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats)"></endpoint>
### Render.submit(......)
```lx
Render.submit(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="submit_now(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats)"></endpoint>
### Render.submit_now(......)
```lx
Render.submit_now(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="submit_fn(set : RenderSet, target_path : String, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats, settings : Maps, fn : Fn)"></endpoint>
### Render.submit_fn(........)
```lx
Render.submit_fn(set : RenderSet, target_path : String, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats, settings : Maps, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_set()"></endpoint>
### Render.create_set(.)
```lx
Render.create_set() : RenderSet
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_set(set : RenderSet)"></endpoint>
### Render.destroy_set(.)
```lx
Render.destroy_set(set : RenderSet) : None
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_set(set : RenderSet)"></endpoint>
### Render.valid_set(.)
```lx
Render.valid_set(set : RenderSet) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_add(set : RenderSet, geo : Geometry)"></endpoint>
### Render.set_add(..)
```lx
Render.set_add(set : RenderSet, geo : Geometry) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_remove(set : RenderSet, geo : Geometry)"></endpoint>
### Render.set_remove(..)
```lx
Render.set_remove(set : RenderSet, geo : Geometry) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_get_geometry(set : RenderSet, into : List)"></endpoint>
### Render.set_get_geometry(..)
```lx
Render.set_get_geometry(set : RenderSet, into : List) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_get_count(set : RenderSet)"></endpoint>
### Render.set_get_count(.)
```lx
Render.set_get_count(set : RenderSet) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_path()"></endpoint>
### Render.create_path(.)
```lx
Render.create_path() : RenderPath
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_path(path : RenderPath)"></endpoint>
### Render.destroy_path(.)
```lx
Render.destroy_path(path : RenderPath) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_path(path : RenderPath)"></endpoint>
### Render.valid_path(.)
```lx
Render.valid_path(path : RenderPath) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="display_dpi()"></endpoint>
### Render.display_dpi(.)
```lx
Render.display_dpi() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="display_scale()"></endpoint>
### Render.display_scale(.)
```lx
Render.display_scale() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_w()"></endpoint>
### Render.window_w(.)
```lx
Render.window_w() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_h()"></endpoint>
### Render.window_h(.)
```lx
Render.window_h() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_state()"></endpoint>
### Render.window_state(.)
```lx
Render.window_state() : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_focus()"></endpoint>
### Render.window_focus(.)
```lx
Render.window_focus() : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_hide(state : Any)"></endpoint>
### Render.window_hide(.)
```lx
Render.window_hide(state : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_w()"></endpoint>
### Render.drawable_w(.)
```lx
Render.drawable_w() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_h()"></endpoint>
### Render.drawable_h(.)
```lx
Render.drawable_h() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_ratio()"></endpoint>
### Render.drawable_ratio(.)
```lx
Render.drawable_ratio() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_set_title(title : String)"></endpoint>
### Render.window_set_title(.)
```lx
Render.window_set_title(title : String) : None
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="get_path_vertices(into_pos : Any, offset_pos : Any, stride_pos : Any, into_color : Any, offset_color : Any, stride_color : Any, points : Any, color : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any)"></endpoint>
### Render.get_path_vertices(.............)
```lx
Render.get_path_vertices(into_pos : Any, offset_pos : Any, stride_pos : Any, into_color : Any, offset_color : Any, stride_color : Any, points : Any, color : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="get_path_vertex_count(points : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any)"></endpoint>
### Render.get_path_vertex_count(......)
```lx
Render.get_path_vertex_count(points : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="push_render_dest(dest : Any, into : Any)"></endpoint>
### Render.push_render_dest(..)
```lx
Render.push_render_dest(dest : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layers(path : Any, name : Any, layers_add : Any, layer : Any)"></endpoint>
### Render.path_add_render_layers(....)
```lx
Render.path_add_render_layers(path : Any, name : Any, layers_add : Any, layer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layers(path : Any, name : Any, layers_add : Any, layers_exclude : Any, layer : RenderLayerDesc)"></endpoint>
### Render.path_add_render_layers(.....)
```lx
Render.path_add_render_layers(path : Any, name : Any, layers_add : Any, layers_exclude : Any, layer : RenderLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layer(path : Any, name : Any, layer : RenderLayerDesc)"></endpoint>
### Render.path_add_render_layer(...)
```lx
Render.path_add_render_layer(path : Any, name : Any, layer : RenderLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_compute_layer(path : Any, compute_id : Any, display : Any, dimensions : Any, inputs : Any)"></endpoint>
### Render.path_add_compute_layer(.....)
```lx
Render.path_add_compute_layer(path : Any, compute_id : Any, display : Any, dimensions : Any, inputs : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_pass_layer(path : Any, name : Any, dest : Any, material : Any)"></endpoint>
### Render.path_add_pass_layer(....)
```lx
Render.path_add_pass_layer(path : Any, name : Any, dest : Any, material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_remove(path : Any, name : Any)"></endpoint>
### Render.path_remove(..)
```lx
Render.path_remove(path : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_update(path : Any, name : Any, layer : RenderLayerDesc)"></endpoint>
### Render.path_update(...)
```lx
Render.path_update(path : Any, name : Any, layer : RenderLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_compute(name : String, library : String, function : String, blocks : List)"></endpoint>
### Render.define_compute(....)
```lx
Render.define_compute(name : String, library : String, function : String, blocks : List) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_compute(name : Any)"></endpoint>
### Render.undefine_compute(.)
```lx
Render.undefine_compute(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_sampler_state(name : Any)"></endpoint>
### Render.undefine_sampler_state(.)
```lx
Render.undefine_sampler_state(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_sampler_state(name : Any, desc : Any)"></endpoint>
### Render.define_sampler_state(..)
```lx
Render.define_sampler_state(name : Any, desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_vertex_format(name : Any, desc : Any)"></endpoint>
### Render.define_vertex_format(..)
```lx
Render.define_vertex_format(name : Any, desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_vertex_format(name : Any)"></endpoint>
### Render.undefine_vertex_format(.)
```lx
Render.undefine_vertex_format(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_resource(name : Any, image : Any)"></endpoint>
### Render.define_resource(..)
```lx
Render.define_resource(name : Any, image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="resource_get_image(name : Any)"></endpoint>
### Render.resource_get_image(.)
```lx
Render.resource_get_image(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_resource(name : Any)"></endpoint>
### Render.undefine_resource(.)
```lx
Render.undefine_resource(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_vertex_buffer(data : Any, length : Any)"></endpoint>
### Render.create_vertex_buffer(..)
```lx
Render.create_vertex_buffer(data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_get_size(vertex_buffer : Any)"></endpoint>
### Render.vertex_buffer_get_size(.)
```lx
Render.vertex_buffer_get_size(vertex_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_get_data(vertex_buffer : Any, into : Any, length : Any, offset : Any)"></endpoint>
### Render.vertex_buffer_get_data(....)
```lx
Render.vertex_buffer_get_data(vertex_buffer : Any, into : Any, length : Any, offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_replace(vertex_buffer : Any, data : Any, length : Any)"></endpoint>
### Render.vertex_buffer_replace(...)
```lx
Render.vertex_buffer_replace(vertex_buffer : Any, data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_update(vertex_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any)"></endpoint>
### Render.vertex_buffer_update(.....)
```lx
Render.vertex_buffer_update(vertex_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_vertex_buffer(vertex_buffer : Any)"></endpoint>
### Render.destroy_vertex_buffer(.)
```lx
Render.destroy_vertex_buffer(vertex_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_index_buffer(data : Any, length : Any)"></endpoint>
### Render.create_index_buffer(..)
```lx
Render.create_index_buffer(data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_index_buffer32(data : Any, length : Any)"></endpoint>
### Render.create_index_buffer32(..)
```lx
Render.create_index_buffer32(data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_get_size(index_buffer : Any)"></endpoint>
### Render.index_buffer_get_size(.)
```lx
Render.index_buffer_get_size(index_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_get_data(index_buffer : Any, into : Any, length : Any, offset : Any)"></endpoint>
### Render.index_buffer_get_data(....)
```lx
Render.index_buffer_get_data(index_buffer : Any, into : Any, length : Any, offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_replace(index_buffer : Any, data : Any, length : Any)"></endpoint>
### Render.index_buffer_replace(...)
```lx
Render.index_buffer_replace(index_buffer : Any, data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_update(index_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any)"></endpoint>
### Render.index_buffer_update(.....)
```lx
Render.index_buffer_update(index_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_index_buffer(index_buffer : Any)"></endpoint>
### Render.destroy_index_buffer(.)
```lx
Render.destroy_index_buffer(index_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_text(material : Any, default_size : Any, default_font : Any, default_color : Any, render_set : Any)"></endpoint>
### Render.create_text(.....)
```lx
Render.create_text(material : Any, default_size : Any, default_font : Any, default_color : Any, render_set : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_text(text : Any)"></endpoint>
### Render.destroy_text(.)
```lx
Render.destroy_text(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_text(text : Any)"></endpoint>
### Render.valid_text(.)
```lx
Render.valid_text(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_attr_clear(text : Any)"></endpoint>
### Render.text_attr_clear(.)
```lx
Render.text_attr_clear(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_text_buffer(text : Any, string : Any)"></endpoint>
### Render.text_set_text_buffer(..)
```lx
Render.text_set_text_buffer(text : Any, string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_attr(text : Text, start : Num, length : Num, type : TextAttrType, key : String, value : Any)"></endpoint>
### Render.text_set_attr(......)
```lx
Render.text_set_attr(text : Text, start : Num, length : Num, type : TextAttrType, key : String, value : Any) : None
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_outline(text : Text, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### Render.text_set_outline(.....)
```lx
Render.text_set_outline(text : Text, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_shadow(text : Text, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### Render.text_set_shadow(.....)
```lx
Render.text_set_shadow(text : Text, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_pos(text : Any, x : Any, y : Any, z : Any)"></endpoint>
### Render.text_set_pos(....)
```lx
Render.text_set_pos(text : Any, x : Any, y : Any, z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_align(text : Any, align : Any, align_vertical : Any)"></endpoint>
### Render.text_set_align(...)
```lx
Render.text_set_align(text : Any, align : Any, align_vertical : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_bounds(text : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### Render.text_set_bounds(.....)
```lx
Render.text_set_bounds(text : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_commit(text : Any)"></endpoint>
### Render.text_commit(.)
```lx
Render.text_commit(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_geometry(text : Any)"></endpoint>
### Render.text_get_geometry(.)
```lx
Render.text_get_geometry(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_extents(text : Any, offset : Any, count : Any)"></endpoint>
### Render.text_get_extents(...)
```lx
Render.text_get_extents(text : Any, offset : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_extents(text : Any)"></endpoint>
### Render.text_get_extents(.)
```lx
Render.text_get_extents(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_character_bounds(text : Any, index : Any)"></endpoint>
### Render.text_get_character_bounds(..)
```lx
Render.text_get_character_bounds(text : Any, index : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_enable_markup(text : Text, enable : Bool)"></endpoint>
### Render.text_set_enable_markup(..)
```lx
Render.text_set_enable_markup(text : Text, enable : Bool) : None
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_enable_markup(text : Text)"></endpoint>
### Render.text_get_enable_markup(.)
```lx
Render.text_get_enable_markup(text : Text) : Bool
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_text(text : Any, string : Any)"></endpoint>
### Render.text_set_text(..)
```lx
Render.text_set_text(text : Any, string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kVertexAttributes"></endpoint>
### Render.kVertexAttributes
```lx
Render.kVertexAttributes : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kColorTargets"></endpoint>
### Render.kColorTargets
```lx
Render.kColorTargets : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialLayerTargets"></endpoint>
### Render.kMaterialLayerTargets
```lx
Render.kMaterialLayerTargets : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialInputs"></endpoint>
### Render.kMaterialInputs
```lx
Render.kMaterialInputs : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialReplace"></endpoint>
### Render.kMaterialReplace
```lx
Render.kMaterialReplace : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialPassUsage"></endpoint>
### Render.kMaterialPassUsage
```lx
Render.kMaterialPassUsage : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kStencilUnset"></endpoint>
### Render.kStencilUnset
```lx
Render.kStencilUnset : unknown
```
> no docs found   


## RenderDest
```lx
import "luxe: render" for RenderDest
```
> no docs found

<endpoint module="luxe: render" class="RenderDest" signature="target_region"></endpoint>
### RenderDest.target_region
```lx
RenderDest.target_region : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="color"></endpoint>
### RenderDest.color
```lx
RenderDest.color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="depth"></endpoint>
### RenderDest.depth
```lx
RenderDest.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="stencil"></endpoint>
### RenderDest.stencil
```lx
RenderDest.stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="color=(color : Any)"></endpoint>
### RenderDest.color
```lx
RenderDest.color=(color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="depth=(depth : Any)"></endpoint>
### RenderDest.depth
```lx
RenderDest.depth=(depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="stencil=(stencil : Any)"></endpoint>
### RenderDest.stencil
```lx
RenderDest.stencil=(stencil : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="new()"></endpoint>
### RenderDest.new(.)
```lx
RenderDest.new() : RenderDest
```
> no docs found   


## RenderDestColor
```lx
import "luxe: render" for RenderDestColor
```
> no docs found

<endpoint module="luxe: render" class="RenderDestColor" signature="render_target"></endpoint>
### RenderDestColor.render_target
```lx
RenderDestColor.render_target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="render_target=(render_target : Any)"></endpoint>
### RenderDestColor.render_target
```lx
RenderDestColor.render_target=(render_target : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="clear_color"></endpoint>
### RenderDestColor.clear_color
```lx
RenderDestColor.clear_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="clear_color=(clear_color : Any)"></endpoint>
### RenderDestColor.clear_color
```lx
RenderDestColor.clear_color=(clear_color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="load_action"></endpoint>
### RenderDestColor.load_action
```lx
RenderDestColor.load_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="load_action=(load_action : Any)"></endpoint>
### RenderDestColor.load_action
```lx
RenderDestColor.load_action=(load_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="store_action"></endpoint>
### RenderDestColor.store_action
```lx
RenderDestColor.store_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="store_action=(store_action : Any)"></endpoint>
### RenderDestColor.store_action
```lx
RenderDestColor.store_action=(store_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="level"></endpoint>
### RenderDestColor.level
```lx
RenderDestColor.level : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="level=(level : Any)"></endpoint>
### RenderDestColor.level
```lx
RenderDestColor.level=(level : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="slice"></endpoint>
### RenderDestColor.slice
```lx
RenderDestColor.slice : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="slice=(slice : Any)"></endpoint>
### RenderDestColor.slice
```lx
RenderDestColor.slice=(slice : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="depth"></endpoint>
### RenderDestColor.depth
```lx
RenderDestColor.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="depth=(depth : Any)"></endpoint>
### RenderDestColor.depth
```lx
RenderDestColor.depth=(depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="new()"></endpoint>
### RenderDestColor.new(.)
```lx
RenderDestColor.new() : RenderDestColor
```
> no docs found   


## RenderDestDepth
```lx
import "luxe: render" for RenderDestDepth
```
> no docs found

<endpoint module="luxe: render" class="RenderDestDepth" signature="render_target"></endpoint>
### RenderDestDepth.render_target
```lx
RenderDestDepth.render_target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="render_target=(render_target : Any)"></endpoint>
### RenderDestDepth.render_target
```lx
RenderDestDepth.render_target=(render_target : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="clear_depth"></endpoint>
### RenderDestDepth.clear_depth
```lx
RenderDestDepth.clear_depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="clear_depth=(clear_depth : Any)"></endpoint>
### RenderDestDepth.clear_depth
```lx
RenderDestDepth.clear_depth=(clear_depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="load_action"></endpoint>
### RenderDestDepth.load_action
```lx
RenderDestDepth.load_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="load_action=(load_action : Any)"></endpoint>
### RenderDestDepth.load_action
```lx
RenderDestDepth.load_action=(load_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="store_action"></endpoint>
### RenderDestDepth.store_action
```lx
RenderDestDepth.store_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="store_action=(store_action : Any)"></endpoint>
### RenderDestDepth.store_action
```lx
RenderDestDepth.store_action=(store_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="level"></endpoint>
### RenderDestDepth.level
```lx
RenderDestDepth.level : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="level=(level : Any)"></endpoint>
### RenderDestDepth.level
```lx
RenderDestDepth.level=(level : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="slice"></endpoint>
### RenderDestDepth.slice
```lx
RenderDestDepth.slice : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="slice=(slice : Any)"></endpoint>
### RenderDestDepth.slice
```lx
RenderDestDepth.slice=(slice : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="depth"></endpoint>
### RenderDestDepth.depth
```lx
RenderDestDepth.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="depth=(depth : Any)"></endpoint>
### RenderDestDepth.depth
```lx
RenderDestDepth.depth=(depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="new()"></endpoint>
### RenderDestDepth.new(.)
```lx
RenderDestDepth.new() : RenderDestDepth
```
> no docs found   


## RenderDestStencil
```lx
import "luxe: render" for RenderDestStencil
```
> no docs found

<endpoint module="luxe: render" class="RenderDestStencil" signature="render_target"></endpoint>
### RenderDestStencil.render_target
```lx
RenderDestStencil.render_target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="render_target=(render_target : Any)"></endpoint>
### RenderDestStencil.render_target
```lx
RenderDestStencil.render_target=(render_target : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="clear_stencil"></endpoint>
### RenderDestStencil.clear_stencil
```lx
RenderDestStencil.clear_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="clear_stencil=(clear_stencil : Any)"></endpoint>
### RenderDestStencil.clear_stencil
```lx
RenderDestStencil.clear_stencil=(clear_stencil : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="load_action"></endpoint>
### RenderDestStencil.load_action
```lx
RenderDestStencil.load_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="load_action=(load_action : Any)"></endpoint>
### RenderDestStencil.load_action
```lx
RenderDestStencil.load_action=(load_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="store_action"></endpoint>
### RenderDestStencil.store_action
```lx
RenderDestStencil.store_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="store_action=(store_action : Any)"></endpoint>
### RenderDestStencil.store_action
```lx
RenderDestStencil.store_action=(store_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="level"></endpoint>
### RenderDestStencil.level
```lx
RenderDestStencil.level : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="level=(level : Any)"></endpoint>
### RenderDestStencil.level
```lx
RenderDestStencil.level=(level : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="slice"></endpoint>
### RenderDestStencil.slice
```lx
RenderDestStencil.slice : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="slice=(slice : Any)"></endpoint>
### RenderDestStencil.slice
```lx
RenderDestStencil.slice=(slice : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="depth"></endpoint>
### RenderDestStencil.depth
```lx
RenderDestStencil.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="depth=(depth : Any)"></endpoint>
### RenderDestStencil.depth
```lx
RenderDestStencil.depth=(depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="new()"></endpoint>
### RenderDestStencil.new(.)
```lx
RenderDestStencil.new() : RenderDestStencil
```
> no docs found   


## RenderLayerDesc
```lx
import "luxe: render" for RenderLayerDesc
```
> no docs found

<endpoint module="luxe: render" class="RenderLayerDesc" signature="display_id"></endpoint>
### RenderLayerDesc.display_id
```lx
RenderLayerDesc.display_id : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="display_id=(display_id : Any)"></endpoint>
### RenderLayerDesc.display_id
```lx
RenderLayerDesc.display_id=(display_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="sort"></endpoint>
### RenderLayerDesc.sort
```lx
RenderLayerDesc.sort : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="sort=(sort : Any)"></endpoint>
### RenderLayerDesc.sort
```lx
RenderLayerDesc.sort=(sort : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="material_override"></endpoint>
### RenderLayerDesc.material_override
```lx
RenderLayerDesc.material_override : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="material_override=(material_override : Any)"></endpoint>
### RenderLayerDesc.material_override
```lx
RenderLayerDesc.material_override=(material_override : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="replace_tag"></endpoint>
### RenderLayerDesc.replace_tag
```lx
RenderLayerDesc.replace_tag : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="replace_tag=(replace_tag : Any)"></endpoint>
### RenderLayerDesc.replace_tag
```lx
RenderLayerDesc.replace_tag=(replace_tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="dest"></endpoint>
### RenderLayerDesc.dest
```lx
RenderLayerDesc.dest : RenderDest
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="dest=(dest : Any)"></endpoint>
### RenderLayerDesc.dest
```lx
RenderLayerDesc.dest=(dest : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="new()"></endpoint>
### RenderLayerDesc.new(.)
```lx
RenderLayerDesc.new() : RenderLayerDesc
```
> no docs found   


## RenderPathContext
```lx
import "luxe: render" for RenderPathContext
```
> no docs found

<endpoint module="luxe: render" class="RenderPathContext" signature="settings"></endpoint>
### RenderPathContext.settings
```lx
RenderPathContext.settings : Map
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="new(path : String, settings : Map)"></endpoint>
### RenderPathContext.new(..)
```lx
RenderPathContext.new(path : String, settings : Map) : RenderPathContext
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="path"></endpoint>
### RenderPathContext.path
```lx
RenderPathContext.path : String
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="change_path(path : String)"></endpoint>
### RenderPathContext.change_path(.)
```lx
RenderPathContext.change_path(path : String) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_render(name : String, render_layer_desc : RenderLayerDesc)"></endpoint>
### RenderPathContext.layer_render(..)
```lx
RenderPathContext.layer_render(name : String, render_layer_desc : RenderLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layers_render(name : Any, layers_add : Any, render_layer_desc : Any)"></endpoint>
### RenderPathContext.layers_render(...)
```lx
RenderPathContext.layers_render(name : Any, layers_add : Any, render_layer_desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layers_render(name : Any, layers_add : Any, layers_exclude : Any, render_layer_desc : Any)"></endpoint>
### RenderPathContext.layers_render(....)
```lx
RenderPathContext.layers_render(name : Any, layers_add : Any, layers_exclude : Any, render_layer_desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_pass(pass_layer_desc : Any)"></endpoint>
### RenderPathContext.layer_pass(.)
```lx
RenderPathContext.layer_pass(pass_layer_desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_compute(compute_layer_desc : ComputeLayerDesc)"></endpoint>
### RenderPathContext.layer_compute(.)
```lx
RenderPathContext.layer_compute(compute_layer_desc : ComputeLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="get(key : Any, default : Any)"></endpoint>
### RenderPathContext.get(..)
```lx
RenderPathContext.get(key : Any, default : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="set(key : Any, value : Any)"></endpoint>
### RenderPathContext.set(..)
```lx
RenderPathContext.set(key : Any, value : Any) : unknown
```
> no docs found   


## RenderViewDesc
```lx
import "luxe: render" for RenderViewDesc
```
> no docs found

<endpoint module="luxe: render" class="RenderViewDesc" signature="target"></endpoint>
### RenderViewDesc.target
```lx
RenderViewDesc.target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="target=(v : Any)"></endpoint>
### RenderViewDesc.target
```lx
RenderViewDesc.target=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="target(v : Any)"></endpoint>
### RenderViewDesc.target(.)
```lx
RenderViewDesc.target(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path"></endpoint>
### RenderViewDesc.path
```lx
RenderViewDesc.path : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path=(v : Any)"></endpoint>
### RenderViewDesc.path
```lx
RenderViewDesc.path=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path(v : Any)"></endpoint>
### RenderViewDesc.path(.)
```lx
RenderViewDesc.path(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region"></endpoint>
### RenderViewDesc.region
```lx
RenderViewDesc.region : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region=(v : Any)"></endpoint>
### RenderViewDesc.region
```lx
RenderViewDesc.region=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region(v : Any)"></endpoint>
### RenderViewDesc.region(.)
```lx
RenderViewDesc.region(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings"></endpoint>
### RenderViewDesc.settings
```lx
RenderViewDesc.settings : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings=(v : Any)"></endpoint>
### RenderViewDesc.settings
```lx
RenderViewDesc.settings=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings(v : Any)"></endpoint>
### RenderViewDesc.settings(.)
```lx
RenderViewDesc.settings(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="new(target_resource : Any, target_path : Any, target_region : Any, target_settings : Any)"></endpoint>
### RenderViewDesc.new(....)
```lx
RenderViewDesc.new(target_resource : Any, target_path : Any, target_region : Any, target_settings : Any) : RenderViewDesc
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="new()"></endpoint>
### RenderViewDesc.new(.)
```lx
RenderViewDesc.new() : RenderViewDesc
```
> no docs found   


## SamplerAddressMode
```lx
import "luxe: render" for SamplerAddressMode
```
> no docs found

<endpoint module="luxe: render" class="SamplerAddressMode" signature="clamp_to_edge"></endpoint>
### SamplerAddressMode.clamp_to_edge
```lx
SamplerAddressMode.clamp_to_edge : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="repeat"></endpoint>
### SamplerAddressMode.repeat
```lx
SamplerAddressMode.repeat : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="mirror_repeat"></endpoint>
### SamplerAddressMode.mirror_repeat
```lx
SamplerAddressMode.mirror_repeat : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="from_string(value : Any)"></endpoint>
### SamplerAddressMode.from_string(.)
```lx
SamplerAddressMode.from_string(value : Any) : unknown
```
> no docs found   


## SamplerMinMagFilter
```lx
import "luxe: render" for SamplerMinMagFilter
```
> no docs found

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="nearest"></endpoint>
### SamplerMinMagFilter.nearest
```lx
SamplerMinMagFilter.nearest : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="linear"></endpoint>
### SamplerMinMagFilter.linear
```lx
SamplerMinMagFilter.linear : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="from_string(value : Any)"></endpoint>
### SamplerMinMagFilter.from_string(.)
```lx
SamplerMinMagFilter.from_string(value : Any) : unknown
```
> no docs found   


## SamplerMipFilter
```lx
import "luxe: render" for SamplerMipFilter
```
> no docs found

<endpoint module="luxe: render" class="SamplerMipFilter" signature="none"></endpoint>
### SamplerMipFilter.none
```lx
SamplerMipFilter.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="nearest"></endpoint>
### SamplerMipFilter.nearest
```lx
SamplerMipFilter.nearest : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="linear"></endpoint>
### SamplerMipFilter.linear
```lx
SamplerMipFilter.linear : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="from_string(value : Any)"></endpoint>
### SamplerMipFilter.from_string(.)
```lx
SamplerMipFilter.from_string(value : Any) : unknown
```
> no docs found   


## SamplerState
```lx
import "luxe: render" for SamplerState
```
> no docs found

<endpoint module="luxe: render" class="SamplerState" signature="new()"></endpoint>
### SamplerState.new(.)
```lx
SamplerState.new() : SamplerState
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_r"></endpoint>
### SamplerState.address_r
```lx
SamplerState.address_r : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_r=(v : Any)"></endpoint>
### SamplerState.address_r
```lx
SamplerState.address_r=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_s"></endpoint>
### SamplerState.address_s
```lx
SamplerState.address_s : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_s=(v : Any)"></endpoint>
### SamplerState.address_s
```lx
SamplerState.address_s=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_t"></endpoint>
### SamplerState.address_t
```lx
SamplerState.address_t : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_t=(v : Any)"></endpoint>
### SamplerState.address_t
```lx
SamplerState.address_t=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_min"></endpoint>
### SamplerState.filter_min
```lx
SamplerState.filter_min : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_min=(v : Any)"></endpoint>
### SamplerState.filter_min
```lx
SamplerState.filter_min=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mag"></endpoint>
### SamplerState.filter_mag
```lx
SamplerState.filter_mag : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mag=(v : Any)"></endpoint>
### SamplerState.filter_mag
```lx
SamplerState.filter_mag=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mip"></endpoint>
### SamplerState.filter_mip
```lx
SamplerState.filter_mip : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mip=(v : Any)"></endpoint>
### SamplerState.filter_mip
```lx
SamplerState.filter_mip=(v : Any) : unknown
```
> no docs found   


## SortType
```lx
import "luxe: render" for SortType
```
> no docs found

<endpoint module="luxe: render" class="SortType" signature="front_to_back"></endpoint>
### SortType.front_to_back
```lx
SortType.front_to_back : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SortType" signature="back_to_front"></endpoint>
### SortType.back_to_front
```lx
SortType.back_to_front : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SortType" signature="sort_by_z"></endpoint>
### SortType.sort_by_z
```lx
SortType.sort_by_z : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SortType" signature="sort_by_z_reverse"></endpoint>
### SortType.sort_by_z_reverse
```lx
SortType.sort_by_z_reverse : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SortType" signature="none"></endpoint>
### SortType.none
```lx
SortType.none : unknown
```
> no docs found   


## StencilOperation
```lx
import "luxe: render" for StencilOperation
```
> no docs found

<endpoint module="luxe: render" class="StencilOperation" signature="keep"></endpoint>
### StencilOperation.keep
```lx
StencilOperation.keep : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="zero"></endpoint>
### StencilOperation.zero
```lx
StencilOperation.zero : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="replace"></endpoint>
### StencilOperation.replace
```lx
StencilOperation.replace : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="increment_clamp"></endpoint>
### StencilOperation.increment_clamp
```lx
StencilOperation.increment_clamp : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="decrement_clamp"></endpoint>
### StencilOperation.decrement_clamp
```lx
StencilOperation.decrement_clamp : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="invert"></endpoint>
### StencilOperation.invert
```lx
StencilOperation.invert : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="increment_wrap"></endpoint>
### StencilOperation.increment_wrap
```lx
StencilOperation.increment_wrap : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="decrement_wrap"></endpoint>
### StencilOperation.decrement_wrap
```lx
StencilOperation.decrement_wrap : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="invalid"></endpoint>
### StencilOperation.invalid
```lx
StencilOperation.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="from_string(value : Any)"></endpoint>
### StencilOperation.from_string(.)
```lx
StencilOperation.from_string(value : Any) : unknown
```
> no docs found   


## StoreAction
```lx
import "luxe: render" for StoreAction
```
> no docs found

<endpoint module="luxe: render" class="StoreAction" signature="dont_care"></endpoint>
### StoreAction.dont_care
```lx
StoreAction.dont_care : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StoreAction" signature="store"></endpoint>
### StoreAction.store
```lx
StoreAction.store : unknown
```
> no docs found   


## TextAlign
```lx
import "luxe: render" for TextAlign
```
> no docs found

<endpoint module="luxe: render" class="TextAlign" signature="left"></endpoint>
### TextAlign.left
```lx
TextAlign.left : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="center"></endpoint>
### TextAlign.center
```lx
TextAlign.center : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="right"></endpoint>
### TextAlign.right
```lx
TextAlign.right : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="top"></endpoint>
### TextAlign.top
```lx
TextAlign.top : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="bottom"></endpoint>
### TextAlign.bottom
```lx
TextAlign.bottom : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="from_string(value : Any)"></endpoint>
### TextAlign.from_string(.)
```lx
TextAlign.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="name(value : Any)"></endpoint>
### TextAlign.name(.)
```lx
TextAlign.name(value : Any) : unknown
```
> no docs found   


## TextAttrType
```lx
import "luxe: render" for TextAttrType
```
> no docs found

<endpoint module="luxe: render" class="TextAttrType" signature="unknown"></endpoint>
### TextAttrType.unknown
```lx
TextAttrType.unknown : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="handle32"></endpoint>
### TextAttrType.handle32
```lx
TextAttrType.handle32 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="handle64"></endpoint>
### TextAttrType.handle64
```lx
TextAttrType.handle64 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="number"></endpoint>
### TextAttrType.number
```lx
TextAttrType.number : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="string"></endpoint>
### TextAttrType.string
```lx
TextAttrType.string : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="color"></endpoint>
### TextAttrType.color
```lx
TextAttrType.color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="float2"></endpoint>
### TextAttrType.float2
```lx
TextAttrType.float2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="name(value : Any)"></endpoint>
### TextAttrType.name(.)
```lx
TextAttrType.name(value : Any) : unknown
```
> no docs found   


## TextWrapMode
```lx
import "luxe: render" for TextWrapMode
```
> no docs found

<endpoint module="luxe: render" class="TextWrapMode" signature="unknown"></endpoint>
### TextWrapMode.unknown
```lx
TextWrapMode.unknown : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="none"></endpoint>
### TextWrapMode.none
```lx
TextWrapMode.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="word"></endpoint>
### TextWrapMode.word
```lx
TextWrapMode.word : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="from_string(value : Any)"></endpoint>
### TextWrapMode.from_string(.)
```lx
TextWrapMode.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="name(value : Any)"></endpoint>
### TextWrapMode.name(.)
```lx
TextWrapMode.name(value : Any) : unknown
```
> no docs found   


## VertexAttr
```lx
import "luxe: render" for VertexAttr
```
> no docs found

<endpoint module="luxe: render" class="VertexAttr" signature="new(name : Any)"></endpoint>
### VertexAttr.new(.)
```lx
VertexAttr.new(name : Any) : VertexAttr
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="name"></endpoint>
### VertexAttr.name
```lx
VertexAttr.name : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="name=(v : Any)"></endpoint>
### VertexAttr.name
```lx
VertexAttr.name=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="format"></endpoint>
### VertexAttr.format
```lx
VertexAttr.format : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="format=(v : Any)"></endpoint>
### VertexAttr.format
```lx
VertexAttr.format=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="offset"></endpoint>
### VertexAttr.offset
```lx
VertexAttr.offset : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="offset=(v : Any)"></endpoint>
### VertexAttr.offset
```lx
VertexAttr.offset=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="buffer_index"></endpoint>
### VertexAttr.buffer_index
```lx
VertexAttr.buffer_index : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="buffer_index=(v : Any)"></endpoint>
### VertexAttr.buffer_index
```lx
VertexAttr.buffer_index=(v : Any) : unknown
```
> no docs found   


## VertexAttrFormat
```lx
import "luxe: render" for VertexAttrFormat
```
> no docs found

<endpoint module="luxe: render" class="VertexAttrFormat" signature="invalid"></endpoint>
### VertexAttrFormat.invalid
```lx
VertexAttrFormat.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool"></endpoint>
### VertexAttrFormat.bool
```lx
VertexAttrFormat.bool : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool2"></endpoint>
### VertexAttrFormat.bool2
```lx
VertexAttrFormat.bool2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool3"></endpoint>
### VertexAttrFormat.bool3
```lx
VertexAttrFormat.bool3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool4"></endpoint>
### VertexAttrFormat.bool4
```lx
VertexAttrFormat.bool4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int"></endpoint>
### VertexAttrFormat.int
```lx
VertexAttrFormat.int : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int2"></endpoint>
### VertexAttrFormat.int2
```lx
VertexAttrFormat.int2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int3"></endpoint>
### VertexAttrFormat.int3
```lx
VertexAttrFormat.int3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int4"></endpoint>
### VertexAttrFormat.int4
```lx
VertexAttrFormat.int4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint"></endpoint>
### VertexAttrFormat.uint
```lx
VertexAttrFormat.uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint2"></endpoint>
### VertexAttrFormat.uint2
```lx
VertexAttrFormat.uint2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint3"></endpoint>
### VertexAttrFormat.uint3
```lx
VertexAttrFormat.uint3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint4"></endpoint>
### VertexAttrFormat.uint4
```lx
VertexAttrFormat.uint4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float"></endpoint>
### VertexAttrFormat.float
```lx
VertexAttrFormat.float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float2"></endpoint>
### VertexAttrFormat.float2
```lx
VertexAttrFormat.float2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float3"></endpoint>
### VertexAttrFormat.float3
```lx
VertexAttrFormat.float3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float4"></endpoint>
### VertexAttrFormat.float4
```lx
VertexAttrFormat.float4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double"></endpoint>
### VertexAttrFormat.double
```lx
VertexAttrFormat.double : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double2"></endpoint>
### VertexAttrFormat.double2
```lx
VertexAttrFormat.double2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double3"></endpoint>
### VertexAttrFormat.double3
```lx
VertexAttrFormat.double3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double4"></endpoint>
### VertexAttrFormat.double4
```lx
VertexAttrFormat.double4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="mat4"></endpoint>
### VertexAttrFormat.mat4
```lx
VertexAttrFormat.mat4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="from_string(value : Any)"></endpoint>
### VertexAttrFormat.from_string(.)
```lx
VertexAttrFormat.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="size_of(value : Any)"></endpoint>
### VertexAttrFormat.size_of(.)
```lx
VertexAttrFormat.size_of(value : Any) : unknown
```
> no docs found   


## VertexFormat
```lx
import "luxe: render" for VertexFormat
```
> no docs found

<endpoint module="luxe: render" class="VertexFormat" signature="new()"></endpoint>
### VertexFormat.new(.)
```lx
VertexFormat.new() : VertexFormat
```
> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="attributes"></endpoint>
### VertexFormat.attributes
```lx
VertexFormat.attributes : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="attributes=(v : Any)"></endpoint>
### VertexFormat.attributes
```lx
VertexFormat.attributes=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="layouts"></endpoint>
### VertexFormat.layouts
```lx
VertexFormat.layouts : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="layouts=(v : Any)"></endpoint>
### VertexFormat.layouts
```lx
VertexFormat.layouts=(v : Any) : unknown
```
> no docs found   


## VertexInputRate
```lx
import "luxe: render" for VertexInputRate
```
> no docs found

<endpoint module="luxe: render" class="VertexInputRate" signature="vertex"></endpoint>
### VertexInputRate.vertex
```lx
VertexInputRate.vertex : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexInputRate" signature="instance"></endpoint>
### VertexInputRate.instance
```lx
VertexInputRate.instance : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexInputRate" signature="from_string(value : Any)"></endpoint>
### VertexInputRate.from_string(.)
```lx
VertexInputRate.from_string(value : Any) : unknown
```
> no docs found   


## VertexLayout
```lx
import "luxe: render" for VertexLayout
```
> no docs found

<endpoint module="luxe: render" class="VertexLayout" signature="new()"></endpoint>
### VertexLayout.new(.)
```lx
VertexLayout.new() : VertexLayout
```
> no docs found   

<endpoint module="luxe: render" class="VertexLayout" signature="stride"></endpoint>
### VertexLayout.stride
```lx
VertexLayout.stride : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexLayout" signature="stride=(v : Any)"></endpoint>
### VertexLayout.stride
```lx
VertexLayout.stride=(v : Any) : unknown
```
> no docs found   


## Winding
```lx
import "luxe: render" for Winding
```
> no docs found

<endpoint module="luxe: render" class="Winding" signature="clockwise"></endpoint>
### Winding.clockwise
```lx
Winding.clockwise : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Winding" signature="counter_clockwise"></endpoint>
### Winding.counter_clockwise
```lx
Winding.counter_clockwise : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Winding" signature="from_string(value : Any)"></endpoint>
### Winding.from_string(.)
```lx
Winding.from_string(value : Any) : unknown
```
> no docs found   

