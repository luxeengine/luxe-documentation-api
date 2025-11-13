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
```wren
import "luxe: render" for Atlas
```
> no docs found

<endpoint module="luxe: render" class="Atlas" signature="create(size : Any, material : Any)"></endpoint>
### Atlas.create(..)
```wren
Atlas.create(size : Any, material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="destroy(atlas : Any)"></endpoint>
### Atlas.destroy(.)
```wren
Atlas.destroy(atlas : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="valid(atlas : Any)"></endpoint>
### Atlas.valid(.)
```wren
Atlas.valid(atlas : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="get_size(atlas : Any)"></endpoint>
### Atlas.get_size(.)
```wren
Atlas.get_size(atlas : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="get_material(atlas : Any)"></endpoint>
### Atlas.get_material(.)
```wren
Atlas.get_material(atlas : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_add(atlas : Any, atlas_image_id : Any, frame : Any, rect : Any, rotated : Any)"></endpoint>
### Atlas.rect_add(.....)
```wren
Atlas.rect_add(atlas : Any, atlas_image_id : Any, frame : Any, rect : Any, rotated : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_remove(atlas : Any, atlas_image_id : Any)"></endpoint>
### Atlas.rect_remove(..)
```wren
Atlas.rect_remove(atlas : Any, atlas_image_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_frame(atlas : Any, atlas_image : Any)"></endpoint>
### Atlas.rect_get_frame(..)
```wren
Atlas.rect_get_frame(atlas : Any, atlas_image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_rect(atlas : Any, atlas_image : Any)"></endpoint>
### Atlas.rect_get_rect(..)
```wren
Atlas.rect_get_rect(atlas : Any, atlas_image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_get_rotated(atlas : Any, atlas_image : Any)"></endpoint>
### Atlas.rect_get_rotated(..)
```wren
Atlas.rect_get_rotated(atlas : Any, atlas_image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Atlas" signature="rect_exists(atlas : Any, atlas_image : Any)"></endpoint>
### Atlas.rect_exists(..)
```wren
Atlas.rect_exists(atlas : Any, atlas_image : Any) : unknown
```
> no docs found   


## BlendFactor
```wren
import "luxe: render" for BlendFactor
```
> no docs found

<endpoint module="luxe: render" class="BlendFactor" signature="zero"></endpoint>
### BlendFactor.zero
```wren
BlendFactor.zero : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one"></endpoint>
### BlendFactor.one
```wren
BlendFactor.one : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_color"></endpoint>
### BlendFactor.source_color
```wren
BlendFactor.source_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_source_color"></endpoint>
### BlendFactor.one_minus_source_color
```wren
BlendFactor.one_minus_source_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_alpha"></endpoint>
### BlendFactor.source_alpha
```wren
BlendFactor.source_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_source_alpha"></endpoint>
### BlendFactor.one_minus_source_alpha
```wren
BlendFactor.one_minus_source_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="destination_color"></endpoint>
### BlendFactor.destination_color
```wren
BlendFactor.destination_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_destination_color"></endpoint>
### BlendFactor.one_minus_destination_color
```wren
BlendFactor.one_minus_destination_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="destination_alpha"></endpoint>
### BlendFactor.destination_alpha
```wren
BlendFactor.destination_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_destination_alpha"></endpoint>
### BlendFactor.one_minus_destination_alpha
```wren
BlendFactor.one_minus_destination_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="source_alpha_saturated"></endpoint>
### BlendFactor.source_alpha_saturated
```wren
BlendFactor.source_alpha_saturated : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="blend_color"></endpoint>
### BlendFactor.blend_color
```wren
BlendFactor.blend_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_blend_color"></endpoint>
### BlendFactor.one_minus_blend_color
```wren
BlendFactor.one_minus_blend_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="blend_alpha"></endpoint>
### BlendFactor.blend_alpha
```wren
BlendFactor.blend_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="one_minus_blend_alpha"></endpoint>
### BlendFactor.one_minus_blend_alpha
```wren
BlendFactor.one_minus_blend_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="invalid"></endpoint>
### BlendFactor.invalid
```wren
BlendFactor.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendFactor" signature="from_string(value : Any)"></endpoint>
### BlendFactor.from_string(.)
```wren
BlendFactor.from_string(value : Any) : unknown
```
> no docs found   


## BlendOperation
```wren
import "luxe: render" for BlendOperation
```
> no docs found

<endpoint module="luxe: render" class="BlendOperation" signature="add"></endpoint>
### BlendOperation.add
```wren
BlendOperation.add : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="subtract"></endpoint>
### BlendOperation.subtract
```wren
BlendOperation.subtract : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="reverse_subtract"></endpoint>
### BlendOperation.reverse_subtract
```wren
BlendOperation.reverse_subtract : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="min"></endpoint>
### BlendOperation.min
```wren
BlendOperation.min : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="max"></endpoint>
### BlendOperation.max
```wren
BlendOperation.max : unknown
```
> no docs found   

<endpoint module="luxe: render" class="BlendOperation" signature="from_string(value : Any)"></endpoint>
### BlendOperation.from_string(.)
```wren
BlendOperation.from_string(value : Any) : unknown
```
> no docs found   


## Clip
```wren
import "luxe: render" for Clip
```
> no docs found

<endpoint module="luxe: render" class="Clip" signature="get_duration(clip : Clip)"></endpoint>
### Clip.get_duration(.)
```wren
Clip.get_duration(clip : Clip) : Num
```
> no docs found   


## ColorWriteMask
```wren
import "luxe: render" for ColorWriteMask
```
> no docs found

<endpoint module="luxe: render" class="ColorWriteMask" signature="none"></endpoint>
### ColorWriteMask.none
```wren
ColorWriteMask.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="red"></endpoint>
### ColorWriteMask.red
```wren
ColorWriteMask.red : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="green"></endpoint>
### ColorWriteMask.green
```wren
ColorWriteMask.green : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="blue"></endpoint>
### ColorWriteMask.blue
```wren
ColorWriteMask.blue : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="alpha"></endpoint>
### ColorWriteMask.alpha
```wren
ColorWriteMask.alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="all"></endpoint>
### ColorWriteMask.all
```wren
ColorWriteMask.all : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="invalid"></endpoint>
### ColorWriteMask.invalid
```wren
ColorWriteMask.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="from_map(value : Any)"></endpoint>
### ColorWriteMask.from_map(.)
```wren
ColorWriteMask.from_map(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ColorWriteMask" signature="from_string(value : Any)"></endpoint>
### ColorWriteMask.from_string(.)
```wren
ColorWriteMask.from_string(value : Any) : unknown
```
> no docs found   


## CompareFunction
```wren
import "luxe: render" for CompareFunction
```
> no docs found

<endpoint module="luxe: render" class="CompareFunction" signature="never"></endpoint>
### CompareFunction.never
```wren
CompareFunction.never : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="less"></endpoint>
### CompareFunction.less
```wren
CompareFunction.less : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="equal"></endpoint>
### CompareFunction.equal
```wren
CompareFunction.equal : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="less_equal"></endpoint>
### CompareFunction.less_equal
```wren
CompareFunction.less_equal : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="greater"></endpoint>
### CompareFunction.greater
```wren
CompareFunction.greater : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="not_equal"></endpoint>
### CompareFunction.not_equal
```wren
CompareFunction.not_equal : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="greater_equal"></endpoint>
### CompareFunction.greater_equal
```wren
CompareFunction.greater_equal : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="always"></endpoint>
### CompareFunction.always
```wren
CompareFunction.always : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CompareFunction" signature="from_string(value : Any)"></endpoint>
### CompareFunction.from_string(.)
```wren
CompareFunction.from_string(value : Any) : unknown
```
> no docs found   


## ComputeLayerDesc
```wren
import "luxe: render" for ComputeLayerDesc
```
> no docs found

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="new()"></endpoint>
### ComputeLayerDesc.new(.)
```wren
ComputeLayerDesc.new() : ComputeLayerDesc
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="display_id"></endpoint>
### ComputeLayerDesc.display_id
```wren
ComputeLayerDesc.display_id : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="display_id=(v : String)"></endpoint>
### ComputeLayerDesc.display_id
```wren
ComputeLayerDesc.display_id=(v : String) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="compute_id"></endpoint>
### ComputeLayerDesc.compute_id
```wren
ComputeLayerDesc.compute_id : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="compute_id=(v : String)"></endpoint>
### ComputeLayerDesc.compute_id
```wren
ComputeLayerDesc.compute_id=(v : String) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="dimensions"></endpoint>
### ComputeLayerDesc.dimensions
```wren
ComputeLayerDesc.dimensions : Float3
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="inputs"></endpoint>
### ComputeLayerDesc.inputs
```wren
ComputeLayerDesc.inputs : List
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="inputs=(v : List)"></endpoint>
### ComputeLayerDesc.inputs
```wren
ComputeLayerDesc.inputs=(v : List) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="x"></endpoint>
### ComputeLayerDesc.x
```wren
ComputeLayerDesc.x : Num
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="x=(v : Num)"></endpoint>
### ComputeLayerDesc.x
```wren
ComputeLayerDesc.x=(v : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="y"></endpoint>
### ComputeLayerDesc.y
```wren
ComputeLayerDesc.y : Num
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="y=(v : Num)"></endpoint>
### ComputeLayerDesc.y
```wren
ComputeLayerDesc.y=(v : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="z"></endpoint>
### ComputeLayerDesc.z
```wren
ComputeLayerDesc.z : Num
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerDesc" signature="z=(v : Num)"></endpoint>
### ComputeLayerDesc.z
```wren
ComputeLayerDesc.z=(v : Num) : unknown
```
> no docs found   


## ComputeLayerInput
```wren
import "luxe: render" for ComputeLayerInput
```
> no docs found

<endpoint module="luxe: render" class="ComputeLayerInput" signature="library"></endpoint>
### ComputeLayerInput.library
```wren
ComputeLayerInput.library : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="type"></endpoint>
### ComputeLayerInput.type
```wren
ComputeLayerInput.type : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="input"></endpoint>
### ComputeLayerInput.input
```wren
ComputeLayerInput.input : String
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="buffer"></endpoint>
### ComputeLayerInput.buffer
```wren
ComputeLayerInput.buffer : InputBuffer
```
> no docs found   

<endpoint module="luxe: render" class="ComputeLayerInput" signature="new(library : Any, type : String, input : String, buffer : InputBuffer)"></endpoint>
### ComputeLayerInput.new(....)
```wren
ComputeLayerInput.new(library : Any, type : String, input : String, buffer : InputBuffer) : ComputeLayerInput
```
> no docs found   


## CullMode
```wren
import "luxe: render" for CullMode
```
> no docs found

<endpoint module="luxe: render" class="CullMode" signature="none"></endpoint>
### CullMode.none
```wren
CullMode.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="front"></endpoint>
### CullMode.front
```wren
CullMode.front : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="back"></endpoint>
### CullMode.back
```wren
CullMode.back : unknown
```
> no docs found   

<endpoint module="luxe: render" class="CullMode" signature="from_string(value : Any)"></endpoint>
### CullMode.from_string(.)
```wren
CullMode.from_string(value : Any) : unknown
```
> no docs found   


## Geometry
```wren
import "luxe: render" for Geometry
```
> no docs found

<endpoint module="luxe: render" class="Geometry" signature="create(primitive : Any, material : Any, index_count : Any, index_type : Any, index_buffer : Any)"></endpoint>
### Geometry.create(.....)
```wren
Geometry.create(primitive : Any, material : Any, index_count : Any, index_type : Any, index_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="create(primitive : Any, material : Any, vert_count : Any)"></endpoint>
### Geometry.create(...)
```wren
Geometry.create(primitive : Any, material : Any, vert_count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="destroy(geo : Any)"></endpoint>
### Geometry.destroy(.)
```wren
Geometry.destroy(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="valid(geo : Any)"></endpoint>
### Geometry.valid(.)
```wren
Geometry.valid(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_world_matrix(geo : Any, world : Any)"></endpoint>
### Geometry.set_world_matrix(..)
```wren
Geometry.set_world_matrix(geo : Any, world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_vertex_buffer(geo : Any, index : Any, vertex_buffer : Any)"></endpoint>
### Geometry.set_vertex_buffer(...)
```wren
Geometry.set_vertex_buffer(geo : Any, index : Any, vertex_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_vertex_buffer(geo : Any, index : Any)"></endpoint>
### Geometry.get_vertex_buffer(..)
```wren
Geometry.get_vertex_buffer(geo : Any, index : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_index_buffer(geo : Any)"></endpoint>
### Geometry.get_index_buffer(.)
```wren
Geometry.get_index_buffer(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_instance_count(geo : Any, count : Any)"></endpoint>
### Geometry.set_instance_count(..)
```wren
Geometry.set_instance_count(geo : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_instance_count(geo : Any)"></endpoint>
### Geometry.get_instance_count(.)
```wren
Geometry.get_instance_count(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_vert_count(geo : Any, count : Any)"></endpoint>
### Geometry.set_vert_count(..)
```wren
Geometry.set_vert_count(geo : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_material(geo : Any, material : Any)"></endpoint>
### Geometry.set_material(..)
```wren
Geometry.set_material(geo : Any, material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_stencil_references(geo : Any, back : Any, front : Any)"></endpoint>
### Geometry.set_stencil_references(...)
```wren
Geometry.set_stencil_references(geo : Any, back : Any, front : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_stencil_reference(geo : Any, value : Any)"></endpoint>
### Geometry.set_stencil_reference(..)
```wren
Geometry.set_stencil_reference(geo : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="set_aabb(geo : Any, center_x : Any, center_y : Any, center_z : Any, radius_x : Any, radius_y : Any, radius_z : Any)"></endpoint>
### Geometry.set_aabb(.......)
```wren
Geometry.set_aabb(geo : Any, center_x : Any, center_y : Any, center_z : Any, radius_x : Any, radius_y : Any, radius_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_aabb(geo : Any)"></endpoint>
### Geometry.get_aabb(.)
```wren
Geometry.get_aabb(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_world_obb(geo : Any)"></endpoint>
### Geometry.get_world_obb(.)
```wren
Geometry.get_world_obb(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_vert_count(geo : Any)"></endpoint>
### Geometry.get_vert_count(.)
```wren
Geometry.get_vert_count(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="get_material(geo : Any)"></endpoint>
### Geometry.get_material(.)
```wren
Geometry.get_material(geo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="obb_intersect_ray(geo : Any, ray_x : Any, ray_y : Any, ray_z : Any, ray_dir_x : Any, ray_dir_y : Any, ray_dir_z : Any)"></endpoint>
### Geometry.obb_intersect_ray(.......)
```wren
Geometry.obb_intersect_ray(geo : Any, ray_x : Any, ray_y : Any, ray_z : Any, ray_dir_x : Any, ray_dir_y : Any, ray_dir_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_include_add(geo : Any, layer_id : Any)"></endpoint>
### Geometry.layer_include_add(..)
```wren
Geometry.layer_include_add(geo : Any, layer_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_include_remove(geo : Any, layer_id : Any)"></endpoint>
### Geometry.layer_include_remove(..)
```wren
Geometry.layer_include_remove(geo : Any, layer_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_exclude_add(geo : Any, layer_id : Any)"></endpoint>
### Geometry.layer_exclude_add(..)
```wren
Geometry.layer_exclude_add(geo : Any, layer_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Geometry" signature="layer_exclude_remove(geo : Any, layer_id : Any)"></endpoint>
### Geometry.layer_exclude_remove(..)
```wren
Geometry.layer_exclude_remove(geo : Any, layer_id : Any) : unknown
```
> no docs found   


## Image
```wren
import "luxe: render" for Image
```
> no docs found

<endpoint module="luxe: render" class="Image" signature="create(desc : Any)"></endpoint>
### Image.create(.)
```wren
Image.create(desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="redefine(image : Any, desc : Any)"></endpoint>
### Image.redefine(..)
```wren
Image.redefine(image : Any, desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="destroy(name : Any)"></endpoint>
### Image.destroy(.)
```wren
Image.destroy(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="valid(name : Any)"></endpoint>
### Image.valid(.)
```wren
Image.valid(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_resource(name : Any)"></endpoint>
### Image.get_resource(.)
```wren
Image.get_resource(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="generate_mipmaps(image : Any)"></endpoint>
### Image.generate_mipmaps(.)
```wren
Image.generate_mipmaps(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="update(image : Any, x : Any, y : Any, w : Any, h : Any, level : Any, slice : Any, bytes : Any)"></endpoint>
### Image.update(........)
```wren
Image.update(image : Any, x : Any, y : Any, w : Any, h : Any, level : Any, slice : Any, bytes : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_type(image : Any)"></endpoint>
### Image.get_type(.)
```wren
Image.get_type(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_width(image : Any)"></endpoint>
### Image.get_width(.)
```wren
Image.get_width(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_height(image : Any)"></endpoint>
### Image.get_height(.)
```wren
Image.get_height(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_depth(image : Any)"></endpoint>
### Image.get_depth(.)
```wren
Image.get_depth(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_pixel_format(image : Any)"></endpoint>
### Image.get_pixel_format(.)
```wren
Image.get_pixel_format(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_mipmap_levels(image : Any)"></endpoint>
### Image.get_mipmap_levels(.)
```wren
Image.get_mipmap_levels(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_array_length(image : Any)"></endpoint>
### Image.get_array_length(.)
```wren
Image.get_array_length(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_sample_count(image : Any)"></endpoint>
### Image.get_sample_count(.)
```wren
Image.get_sample_count(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Image" signature="get_bytes(image : Any, into_bytes : Any)"></endpoint>
### Image.get_bytes(..)
```wren
Image.get_bytes(image : Any, into_bytes : Any) : unknown
```
> no docs found   


## ImageDesc
```wren
import "luxe: render" for ImageDesc
```
> no docs found

<endpoint module="luxe: render" class="ImageDesc" signature="display_id"></endpoint>
### ImageDesc.display_id
```wren
ImageDesc.display_id : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="display_id=(v : Any)"></endpoint>
### ImageDesc.display_id
```wren
ImageDesc.display_id=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="type"></endpoint>
### ImageDesc.type
```wren
ImageDesc.type : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="type=(v : Any)"></endpoint>
### ImageDesc.type
```wren
ImageDesc.type=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="pixel_format"></endpoint>
### ImageDesc.pixel_format
```wren
ImageDesc.pixel_format : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="pixel_format=(v : Any)"></endpoint>
### ImageDesc.pixel_format
```wren
ImageDesc.pixel_format=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="width"></endpoint>
### ImageDesc.width
```wren
ImageDesc.width : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="width=(v : Any)"></endpoint>
### ImageDesc.width
```wren
ImageDesc.width=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="height"></endpoint>
### ImageDesc.height
```wren
ImageDesc.height : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="height=(v : Any)"></endpoint>
### ImageDesc.height
```wren
ImageDesc.height=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="depth"></endpoint>
### ImageDesc.depth
```wren
ImageDesc.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="depth=(v : Any)"></endpoint>
### ImageDesc.depth
```wren
ImageDesc.depth=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="mipmap_levels"></endpoint>
### ImageDesc.mipmap_levels
```wren
ImageDesc.mipmap_levels : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="mipmap_levels=(v : Any)"></endpoint>
### ImageDesc.mipmap_levels
```wren
ImageDesc.mipmap_levels=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="array_length"></endpoint>
### ImageDesc.array_length
```wren
ImageDesc.array_length : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="array_length=(v : Any)"></endpoint>
### ImageDesc.array_length
```wren
ImageDesc.array_length=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="sample_count"></endpoint>
### ImageDesc.sample_count
```wren
ImageDesc.sample_count : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="sample_count=(v : Any)"></endpoint>
### ImageDesc.sample_count
```wren
ImageDesc.sample_count=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="usage"></endpoint>
### ImageDesc.usage
```wren
ImageDesc.usage : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="usage=(v : Any)"></endpoint>
### ImageDesc.usage
```wren
ImageDesc.usage=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageDesc" signature="new()"></endpoint>
### ImageDesc.new(.)
```wren
ImageDesc.new() : ImageDesc
```
> no docs found   


## ImageType
```wren
import "luxe: render" for ImageType
```
> no docs found

<endpoint module="luxe: render" class="ImageType" signature="invalid"></endpoint>
### ImageType.invalid
```wren
ImageType.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image1D"></endpoint>
### ImageType.image1D
```wren
ImageType.image1D : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image1DArray"></endpoint>
### ImageType.image1DArray
```wren
ImageType.image1DArray : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2D"></endpoint>
### ImageType.image2D
```wren
ImageType.image2D : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2DArray"></endpoint>
### ImageType.image2DArray
```wren
ImageType.image2DArray : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image2DMultisample"></endpoint>
### ImageType.image2DMultisample
```wren
ImageType.image2DMultisample : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="imageCube"></endpoint>
### ImageType.imageCube
```wren
ImageType.imageCube : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="imageCubeArray"></endpoint>
### ImageType.imageCubeArray
```wren
ImageType.imageCubeArray : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="image3D"></endpoint>
### ImageType.image3D
```wren
ImageType.image3D : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="from_string(value : Any)"></endpoint>
### ImageType.from_string(.)
```wren
ImageType.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageType" signature="name(value : Any)"></endpoint>
### ImageType.name(.)
```wren
ImageType.name(value : Any) : unknown
```
> no docs found   


## ImageUsage
```wren
import "luxe: render" for ImageUsage
```
> no docs found

<endpoint module="luxe: render" class="ImageUsage" signature="unknown"></endpoint>
### ImageUsage.unknown
```wren
ImageUsage.unknown : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_read"></endpoint>
### ImageUsage.shader_read
```wren
ImageUsage.shader_read : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_write"></endpoint>
### ImageUsage.shader_write
```wren
ImageUsage.shader_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="shader_read_write"></endpoint>
### ImageUsage.shader_read_write
```wren
ImageUsage.shader_read_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="render_target"></endpoint>
### ImageUsage.render_target
```wren
ImageUsage.render_target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="pixel_format_view"></endpoint>
### ImageUsage.pixel_format_view
```wren
ImageUsage.pixel_format_view : unknown
```
> no docs found   

<endpoint module="luxe: render" class="ImageUsage" signature="stream"></endpoint>
### ImageUsage.stream
```wren
ImageUsage.stream : unknown
```
> no docs found   


## IndexType
```wren
import "luxe: render" for IndexType
```
> no docs found

<endpoint module="luxe: render" class="IndexType" signature="none"></endpoint>
### IndexType.none
```wren
IndexType.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="u16"></endpoint>
### IndexType.u16
```wren
IndexType.u16 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="u32"></endpoint>
### IndexType.u32
```wren
IndexType.u32 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="IndexType" signature="size_of(value : Any)"></endpoint>
### IndexType.size_of(.)
```wren
IndexType.size_of(value : Any) : unknown
```
> no docs found   


## InputBuffer
```wren
import "luxe: render" for InputBuffer
```
> no docs found

<endpoint module="luxe: render" class="InputBuffer" signature="create(library : String, type : String, input : String, N : Num)"></endpoint>
### InputBuffer.create(....)
```wren
InputBuffer.create(library : String, type : String, input : String, N : Num) : InputBuffer
```
> no docs found   

<endpoint module="luxe: render" class="InputBuffer" signature="set(buffer : InputBuffer, data : String)"></endpoint>
### InputBuffer.set(..)
```wren
InputBuffer.set(buffer : InputBuffer, data : String) : unknown
```
> no docs found   


## LayerCompute
```wren
import "luxe: render" for LayerCompute
```
> no docs found

<endpoint module="luxe: render" class="LayerCompute" signature="id"></endpoint>
### LayerCompute.id
```wren
LayerCompute.id : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="id=(v : Any)"></endpoint>
### LayerCompute.id
```wren
LayerCompute.id=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="new(desc : ComputeLayerDesc)"></endpoint>
### LayerCompute.new(.)
```wren
LayerCompute.new(desc : ComputeLayerDesc) : LayerCompute
```
> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="update(desc : ComputeLayerDesc)"></endpoint>
### LayerCompute.update(.)
```wren
LayerCompute.update(desc : ComputeLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerCompute" signature="queue(path : RenderPath)"></endpoint>
### LayerCompute.queue(.)
```wren
LayerCompute.queue(path : RenderPath) : unknown
```
> no docs found   


## LayerPass
```wren
import "luxe: render" for LayerPass
```
> no docs found

<endpoint module="luxe: render" class="LayerPass" signature="id"></endpoint>
### LayerPass.id
```wren
LayerPass.id : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="id=(v : Any)"></endpoint>
### LayerPass.id
```wren
LayerPass.id=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="new(pass : Any)"></endpoint>
### LayerPass.new(.)
```wren
LayerPass.new(pass : Any) : LayerPass
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="queue(path : Any)"></endpoint>
### LayerPass.queue(.)
```wren
LayerPass.queue(path : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="new(path : Any, pass : Any)"></endpoint>
### LayerPass.new(..)
```wren
LayerPass.new(path : Any, pass : Any) : LayerPass
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="create_dest(pass : Any)"></endpoint>
### LayerPass.create_dest(.)
```wren
LayerPass.create_dest(pass : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="update_material(desc : Any)"></endpoint>
### LayerPass.update_material(.)
```wren
LayerPass.update_material(desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LayerPass" signature="create_material(pass : PassLayerDesc)"></endpoint>
### LayerPass.create_material(.)
```wren
LayerPass.create_material(pass : PassLayerDesc) : unknown
```
> no docs found   


## LoadAction
```wren
import "luxe: render" for LoadAction
```
> no docs found

<endpoint module="luxe: render" class="LoadAction" signature="dont_care"></endpoint>
### LoadAction.dont_care
```wren
LoadAction.dont_care : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LoadAction" signature="load"></endpoint>
### LoadAction.load
```wren
LoadAction.load : unknown
```
> no docs found   

<endpoint module="luxe: render" class="LoadAction" signature="clear"></endpoint>
### LoadAction.clear
```wren
LoadAction.clear : unknown
```
> no docs found   


## Material
```wren
import "luxe: render" for Material
```
> no docs found

<endpoint module="luxe: render" class="Material" signature="create(basis_type : Any)"></endpoint>
### Material.create(.)
```wren
Material.create(basis_type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="clone(material : Any)"></endpoint>
### Material.clone(.)
```wren
Material.clone(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="destroy(material : Any)"></endpoint>
### Material.destroy(.)
```wren
Material.destroy(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="valid(material : Any)"></endpoint>
### Material.valid(.)
```wren
Material.valid(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="undefine(name : Any)"></endpoint>
### Material.undefine(.)
```wren
Material.undefine(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_source_id(material : Any)"></endpoint>
### Material.get_source_id(.)
```wren
Material.get_source_id(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_source_id(material : Any, source_id : Any)"></endpoint>
### Material.set_source_id(..)
```wren
Material.set_source_id(material : Any, source_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_stencil_references(material : Any, back : Any, front : Any)"></endpoint>
### Material.set_stencil_references(...)
```wren
Material.set_stencil_references(material : Any, back : Any, front : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_stencil_reference(material : Any, value : Any)"></endpoint>
### Material.set_stencil_reference(..)
```wren
Material.set_stencil_reference(material : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_list(material : Any)"></endpoint>
### Material.get_input_list(.)
```wren
Material.get_input_list(material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_image(material : Any, name : Any)"></endpoint>
### Material.get_input_image(..)
```wren
Material.get_input_image(material : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="has_input(material : Any, name : Any)"></endpoint>
### Material.has_input(..)
```wren
Material.has_input(material : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="get_input_type(material : Any, name : Any)"></endpoint>
### Material.get_input_type(..)
```wren
Material.get_input_type(material : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="is_input_array(material : Any, name : Any)"></endpoint>
### Material.is_input_array(..)
```wren
Material.is_input_array(material : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="set_input(material : Any, name : Any, value : Any)"></endpoint>
### Material.set_input(...)
```wren
Material.set_input(material : Any, name : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Material" signature="define(name : Any, desc : Any)"></endpoint>
### Material.define(..)
```wren
Material.define(name : Any, desc : Any) : unknown
```
> no docs found   


## MaterialDesc
```wren
import "luxe: render" for MaterialDesc
```
> no docs found

### Variables
```wren
var pass_usage : List = null
```
<endpoint module="luxe: render" class="MaterialDesc" signature="new()"></endpoint>
### MaterialDesc.new(.)
```wren
MaterialDesc.new() : MaterialDesc
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex_format"></endpoint>
### MaterialDesc.vertex_format
```wren
MaterialDesc.vertex_format : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex_format=(v : Any)"></endpoint>
### MaterialDesc.vertex_format
```wren
MaterialDesc.vertex_format=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex"></endpoint>
### MaterialDesc.vertex
```wren
MaterialDesc.vertex : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="vertex=(v : Any)"></endpoint>
### MaterialDesc.vertex
```wren
MaterialDesc.vertex=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="fragment"></endpoint>
### MaterialDesc.fragment
```wren
MaterialDesc.fragment : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="fragment=(v : Any)"></endpoint>
### MaterialDesc.fragment
```wren
MaterialDesc.fragment=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="geometry"></endpoint>
### MaterialDesc.geometry
```wren
MaterialDesc.geometry : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="geometry=(v : Any)"></endpoint>
### MaterialDesc.geometry
```wren
MaterialDesc.geometry=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_enabled"></endpoint>
### MaterialDesc.depth_bias_enabled
```wren
MaterialDesc.depth_bias_enabled : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_enabled=(v : Any)"></endpoint>
### MaterialDesc.depth_bias_enabled
```wren
MaterialDesc.depth_bias_enabled=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias"></endpoint>
### MaterialDesc.depth_bias
```wren
MaterialDesc.depth_bias : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias=(v : Any)"></endpoint>
### MaterialDesc.depth_bias
```wren
MaterialDesc.depth_bias=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_slope_scale"></endpoint>
### MaterialDesc.depth_bias_slope_scale
```wren
MaterialDesc.depth_bias_slope_scale : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_bias_slope_scale=(v : Any)"></endpoint>
### MaterialDesc.depth_bias_slope_scale
```wren
MaterialDesc.depth_bias_slope_scale=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_test"></endpoint>
### MaterialDesc.depth_test
```wren
MaterialDesc.depth_test : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_test=(v : Any)"></endpoint>
### MaterialDesc.depth_test
```wren
MaterialDesc.depth_test=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_write"></endpoint>
### MaterialDesc.depth_write
```wren
MaterialDesc.depth_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_write=(v : Any)"></endpoint>
### MaterialDesc.depth_write
```wren
MaterialDesc.depth_write=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_compare"></endpoint>
### MaterialDesc.depth_compare
```wren
MaterialDesc.depth_compare : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="depth_compare=(v : Any)"></endpoint>
### MaterialDesc.depth_compare
```wren
MaterialDesc.depth_compare=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_test"></endpoint>
### MaterialDesc.stencil_test
```wren
MaterialDesc.stencil_test : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_test=(v : Any)"></endpoint>
### MaterialDesc.stencil_test
```wren
MaterialDesc.stencil_test=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="write_mask"></endpoint>
### MaterialDesc.write_mask
```wren
MaterialDesc.write_mask : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="write_mask=(v : Any)"></endpoint>
### MaterialDesc.write_mask
```wren
MaterialDesc.write_mask=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blending"></endpoint>
### MaterialDesc.blending
```wren
MaterialDesc.blending : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blending=(v : Any)"></endpoint>
### MaterialDesc.blending
```wren
MaterialDesc.blending=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="alpha_blend"></endpoint>
### MaterialDesc.alpha_blend
```wren
MaterialDesc.alpha_blend : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="alpha_blend=(v : Any)"></endpoint>
### MaterialDesc.alpha_blend
```wren
MaterialDesc.alpha_blend=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="rgb_blend"></endpoint>
### MaterialDesc.rgb_blend
```wren
MaterialDesc.rgb_blend : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="rgb_blend=(v : Any)"></endpoint>
### MaterialDesc.rgb_blend
```wren
MaterialDesc.rgb_blend=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_alpha"></endpoint>
### MaterialDesc.src_alpha
```wren
MaterialDesc.src_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_alpha=(v : Any)"></endpoint>
### MaterialDesc.src_alpha
```wren
MaterialDesc.src_alpha=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_rgb"></endpoint>
### MaterialDesc.src_rgb
```wren
MaterialDesc.src_rgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="src_rgb=(v : Any)"></endpoint>
### MaterialDesc.src_rgb
```wren
MaterialDesc.src_rgb=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_alpha"></endpoint>
### MaterialDesc.dest_alpha
```wren
MaterialDesc.dest_alpha : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_alpha=(v : Any)"></endpoint>
### MaterialDesc.dest_alpha
```wren
MaterialDesc.dest_alpha=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_rgb"></endpoint>
### MaterialDesc.dest_rgb
```wren
MaterialDesc.dest_rgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="dest_rgb=(v : Any)"></endpoint>
### MaterialDesc.dest_rgb
```wren
MaterialDesc.dest_rgb=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blend_color"></endpoint>
### MaterialDesc.blend_color
```wren
MaterialDesc.blend_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blend_color=(v : Any)"></endpoint>
### MaterialDesc.blend_color
```wren
MaterialDesc.blend_color=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="cull"></endpoint>
### MaterialDesc.cull
```wren
MaterialDesc.cull : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="cull=(v : Any)"></endpoint>
### MaterialDesc.cull
```wren
MaterialDesc.cull=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="winding"></endpoint>
### MaterialDesc.winding
```wren
MaterialDesc.winding : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="winding=(v : Any)"></endpoint>
### MaterialDesc.winding
```wren
MaterialDesc.winding=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="layers"></endpoint>
### MaterialDesc.layers
```wren
MaterialDesc.layers : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="layers=(v : Any)"></endpoint>
### MaterialDesc.layers
```wren
MaterialDesc.layers=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="inputs"></endpoint>
### MaterialDesc.inputs
```wren
MaterialDesc.inputs : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="inputs=(v : Any)"></endpoint>
### MaterialDesc.inputs
```wren
MaterialDesc.inputs=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blocks"></endpoint>
### MaterialDesc.blocks
```wren
MaterialDesc.blocks : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="blocks=(v : Any)"></endpoint>
### MaterialDesc.blocks
```wren
MaterialDesc.blocks=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="replace"></endpoint>
### MaterialDesc.replace
```wren
MaterialDesc.replace : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="replace=(v : Any)"></endpoint>
### MaterialDesc.replace
```wren
MaterialDesc.replace=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_stencil"></endpoint>
### MaterialDesc.stencil_back_failure_stencil
```wren
MaterialDesc.stencil_back_failure_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_stencil=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_failure_stencil
```wren
MaterialDesc.stencil_back_failure_stencil=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_depth"></endpoint>
### MaterialDesc.stencil_back_failure_depth
```wren
MaterialDesc.stencil_back_failure_depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_failure_depth=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_failure_depth
```wren
MaterialDesc.stencil_back_failure_depth=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_pass_depth_stencil"></endpoint>
### MaterialDesc.stencil_back_pass_depth_stencil
```wren
MaterialDesc.stencil_back_pass_depth_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_pass_depth_stencil=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_pass_depth_stencil
```wren
MaterialDesc.stencil_back_pass_depth_stencil=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_compare"></endpoint>
### MaterialDesc.stencil_back_compare
```wren
MaterialDesc.stencil_back_compare : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_compare=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_compare
```wren
MaterialDesc.stencil_back_compare=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_read"></endpoint>
### MaterialDesc.stencil_back_mask_read
```wren
MaterialDesc.stencil_back_mask_read : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_read=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_mask_read
```wren
MaterialDesc.stencil_back_mask_read=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_write"></endpoint>
### MaterialDesc.stencil_back_mask_write
```wren
MaterialDesc.stencil_back_mask_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_mask_write=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_mask_write
```wren
MaterialDesc.stencil_back_mask_write=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_reference"></endpoint>
### MaterialDesc.stencil_back_reference
```wren
MaterialDesc.stencil_back_reference : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_back_reference=(v : Any)"></endpoint>
### MaterialDesc.stencil_back_reference
```wren
MaterialDesc.stencil_back_reference=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_stencil"></endpoint>
### MaterialDesc.stencil_front_failure_stencil
```wren
MaterialDesc.stencil_front_failure_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_stencil=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_failure_stencil
```wren
MaterialDesc.stencil_front_failure_stencil=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_depth"></endpoint>
### MaterialDesc.stencil_front_failure_depth
```wren
MaterialDesc.stencil_front_failure_depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_failure_depth=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_failure_depth
```wren
MaterialDesc.stencil_front_failure_depth=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_pass_depth_stencil"></endpoint>
### MaterialDesc.stencil_front_pass_depth_stencil
```wren
MaterialDesc.stencil_front_pass_depth_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_pass_depth_stencil=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_pass_depth_stencil
```wren
MaterialDesc.stencil_front_pass_depth_stencil=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_compare"></endpoint>
### MaterialDesc.stencil_front_compare
```wren
MaterialDesc.stencil_front_compare : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_compare=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_compare
```wren
MaterialDesc.stencil_front_compare=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_read"></endpoint>
### MaterialDesc.stencil_front_mask_read
```wren
MaterialDesc.stencil_front_mask_read : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_read=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_mask_read
```wren
MaterialDesc.stencil_front_mask_read=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_write"></endpoint>
### MaterialDesc.stencil_front_mask_write
```wren
MaterialDesc.stencil_front_mask_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_mask_write=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_mask_write
```wren
MaterialDesc.stencil_front_mask_write=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_reference"></endpoint>
### MaterialDesc.stencil_front_reference
```wren
MaterialDesc.stencil_front_reference : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialDesc" signature="stencil_front_reference=(v : Any)"></endpoint>
### MaterialDesc.stencil_front_reference
```wren
MaterialDesc.stencil_front_reference=(v : Any) : unknown
```
> no docs found   


## MaterialFunction
```wren
import "luxe: render" for MaterialFunction
```
> no docs found

<endpoint module="luxe: render" class="MaterialFunction" signature="library"></endpoint>
### MaterialFunction.library
```wren
MaterialFunction.library : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="library=(v : Any)"></endpoint>
### MaterialFunction.library
```wren
MaterialFunction.library=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="function"></endpoint>
### MaterialFunction.function
```wren
MaterialFunction.function : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="function=(v : Any)"></endpoint>
### MaterialFunction.function
```wren
MaterialFunction.function=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialFunction" signature="new()"></endpoint>
### MaterialFunction.new(.)
```wren
MaterialFunction.new() : MaterialFunction
```
> no docs found   


## MaterialInput
```wren
import "luxe: render" for MaterialInput
```
> no docs found

<endpoint module="luxe: render" class="MaterialInput" signature="name"></endpoint>
### MaterialInput.name
```wren
MaterialInput.name : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="name=(name : Any)"></endpoint>
### MaterialInput.name
```wren
MaterialInput.name=(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="type"></endpoint>
### MaterialInput.type
```wren
MaterialInput.type : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="type=(type : Any)"></endpoint>
### MaterialInput.type
```wren
MaterialInput.type=(type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="value"></endpoint>
### MaterialInput.value
```wren
MaterialInput.value : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="value=(value : Any)"></endpoint>
### MaterialInput.value
```wren
MaterialInput.value=(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="count"></endpoint>
### MaterialInput.count
```wren
MaterialInput.count : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="count=(count : Any)"></endpoint>
### MaterialInput.count
```wren
MaterialInput.count=(count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new()"></endpoint>
### MaterialInput.new(.)
```wren
MaterialInput.new() : MaterialInput
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new(name : Any, type : Any, value : Any, count : Any)"></endpoint>
### MaterialInput.new(....)
```wren
MaterialInput.new(name : Any, type : Any, value : Any, count : Any) : MaterialInput
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="new(name : Any, type : Any, value : Any)"></endpoint>
### MaterialInput.new(...)
```wren
MaterialInput.new(name : Any, type : Any, value : Any) : MaterialInput
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInput" signature="init(name : Any, type : Any, value : Any, count : Any)"></endpoint>
### MaterialInput.init(....)
```wren
MaterialInput.init(name : Any, type : Any, value : Any, count : Any) : unknown
```
> no docs found   


## MaterialInputBlock
```wren
import "luxe: render" for MaterialInputBlock
```
> no docs found

<endpoint module="luxe: render" class="MaterialInputBlock" signature="get_defined(name : Any)"></endpoint>
### MaterialInputBlock.get_defined(.)
```wren
MaterialInputBlock.get_defined(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="has_input(block : Any, name : Any)"></endpoint>
### MaterialInputBlock.has_input(..)
```wren
MaterialInputBlock.has_input(block : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="is_input_array(block : Any, name : Any)"></endpoint>
### MaterialInputBlock.is_input_array(..)
```wren
MaterialInputBlock.is_input_array(block : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set_floats(block : MaterialInputBlock, name : String, value : Floats)"></endpoint>
### MaterialInputBlock.set_floats(...)
```wren
MaterialInputBlock.set_floats(block : MaterialInputBlock, name : String, value : Floats) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set_bytes(block : MaterialInputBlock, name : String, value : Bytes)"></endpoint>
### MaterialInputBlock.set_bytes(...)
```wren
MaterialInputBlock.set_bytes(block : MaterialInputBlock, name : String, value : Bytes) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputBlock" signature="set(block : Any, name : Any, value : Any)"></endpoint>
### MaterialInputBlock.set(...)
```wren
MaterialInputBlock.set(block : Any, name : Any, value : Any) : unknown
```
> no docs found   


## MaterialInputImage
```wren
import "luxe: render" for MaterialInputImage
```
> no docs found

<endpoint module="luxe: render" class="MaterialInputImage" signature="image"></endpoint>
### MaterialInputImage.image
```wren
MaterialInputImage.image : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="image=(image : Any)"></endpoint>
### MaterialInputImage.image
```wren
MaterialInputImage.image=(image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="type"></endpoint>
### MaterialInputImage.type
```wren
MaterialInputImage.type : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="type=(type : Any)"></endpoint>
### MaterialInputImage.type
```wren
MaterialInputImage.type=(type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="sampler"></endpoint>
### MaterialInputImage.sampler
```wren
MaterialInputImage.sampler : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="sampler=(value : Any)"></endpoint>
### MaterialInputImage.sampler
```wren
MaterialInputImage.sampler=(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new()"></endpoint>
### MaterialInputImage.new(.)
```wren
MaterialInputImage.new() : MaterialInputImage
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new(in_image : Any, in_sampler : Any)"></endpoint>
### MaterialInputImage.new(..)
```wren
MaterialInputImage.new(in_image : Any, in_sampler : Any) : MaterialInputImage
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputImage" signature="new(in_image : Any, in_sampler : Any, in_type : Any)"></endpoint>
### MaterialInputImage.new(...)
```wren
MaterialInputImage.new(in_image : Any, in_sampler : Any, in_type : Any) : MaterialInputImage
```
> no docs found   


## MaterialInputType
```wren
import "luxe: render" for MaterialInputType
```
> no docs found

<endpoint module="luxe: render" class="MaterialInputType" signature="invalid"></endpoint>
### MaterialInputType.invalid
```wren
MaterialInputType.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool"></endpoint>
### MaterialInputType.bool
```wren
MaterialInputType.bool : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool2"></endpoint>
### MaterialInputType.bool2
```wren
MaterialInputType.bool2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="bool4"></endpoint>
### MaterialInputType.bool4
```wren
MaterialInputType.bool4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int"></endpoint>
### MaterialInputType.int
```wren
MaterialInputType.int : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int2"></endpoint>
### MaterialInputType.int2
```wren
MaterialInputType.int2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="int4"></endpoint>
### MaterialInputType.int4
```wren
MaterialInputType.int4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint"></endpoint>
### MaterialInputType.uint
```wren
MaterialInputType.uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint2"></endpoint>
### MaterialInputType.uint2
```wren
MaterialInputType.uint2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="uint4"></endpoint>
### MaterialInputType.uint4
```wren
MaterialInputType.uint4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float"></endpoint>
### MaterialInputType.float
```wren
MaterialInputType.float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float2"></endpoint>
### MaterialInputType.float2
```wren
MaterialInputType.float2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="float4"></endpoint>
### MaterialInputType.float4
```wren
MaterialInputType.float4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="mat4"></endpoint>
### MaterialInputType.mat4
```wren
MaterialInputType.mat4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="image"></endpoint>
### MaterialInputType.image
```wren
MaterialInputType.image : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="from_string(value : Any)"></endpoint>
### MaterialInputType.from_string(.)
```wren
MaterialInputType.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="name(value : Any)"></endpoint>
### MaterialInputType.name(.)
```wren
MaterialInputType.name(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="size_of(value : Any)"></endpoint>
### MaterialInputType.size_of(.)
```wren
MaterialInputType.size_of(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialInputType" signature="default_of(value : Any)"></endpoint>
### MaterialInputType.default_of(.)
```wren
MaterialInputType.default_of(value : Any) : unknown
```
> no docs found   


## MaterialReplace
```wren
import "luxe: render" for MaterialReplace
```
> no docs found

<endpoint module="luxe: render" class="MaterialReplace" signature="tag"></endpoint>
### MaterialReplace.tag
```wren
MaterialReplace.tag : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="tag=(v : Any)"></endpoint>
### MaterialReplace.tag
```wren
MaterialReplace.tag=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="basis"></endpoint>
### MaterialReplace.basis
```wren
MaterialReplace.basis : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="basis=(v : Any)"></endpoint>
### MaterialReplace.basis
```wren
MaterialReplace.basis=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="MaterialReplace" signature="new()"></endpoint>
### MaterialReplace.new(.)
```wren
MaterialReplace.new() : MaterialReplace
```
> no docs found   


## PassLayerDesc
```wren
import "luxe: render" for PassLayerDesc
```
> no docs found

### Variables
```wren
var display_id : String = "Pass Layer"
var pass_usage : List = null
```
<endpoint module="luxe: render" class="PassLayerDesc" signature="new()"></endpoint>
### PassLayerDesc.new(.)
```wren
PassLayerDesc.new() : PassLayerDesc
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="dest"></endpoint>
### PassLayerDesc.dest
```wren
PassLayerDesc.dest : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="dest=(v : Any)"></endpoint>
### PassLayerDesc.dest
```wren
PassLayerDesc.dest=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="basis"></endpoint>
### PassLayerDesc.basis
```wren
PassLayerDesc.basis : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="basis=(v : Any)"></endpoint>
### PassLayerDesc.basis
```wren
PassLayerDesc.basis=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="inputs"></endpoint>
### PassLayerDesc.inputs
```wren
PassLayerDesc.inputs : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="inputs=(v : Any)"></endpoint>
### PassLayerDesc.inputs
```wren
PassLayerDesc.inputs=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="targets"></endpoint>
### PassLayerDesc.targets
```wren
PassLayerDesc.targets : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="targets=(v : Any)"></endpoint>
### PassLayerDesc.targets
```wren
PassLayerDesc.targets=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="vertex=(v : Any)"></endpoint>
### PassLayerDesc.vertex
```wren
PassLayerDesc.vertex=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="vertex"></endpoint>
### PassLayerDesc.vertex
```wren
PassLayerDesc.vertex : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="fragment=(v : Any)"></endpoint>
### PassLayerDesc.fragment
```wren
PassLayerDesc.fragment=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="fragment"></endpoint>
### PassLayerDesc.fragment
```wren
PassLayerDesc.fragment : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_color"></endpoint>
### PassLayerDesc.clear_color
```wren
PassLayerDesc.clear_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_color=(v : Any)"></endpoint>
### PassLayerDesc.clear_color
```wren
PassLayerDesc.clear_color=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_depth"></endpoint>
### PassLayerDesc.clear_depth
```wren
PassLayerDesc.clear_depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="clear_depth=(v : Any)"></endpoint>
### PassLayerDesc.clear_depth
```wren
PassLayerDesc.clear_depth=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="blending"></endpoint>
### PassLayerDesc.blending
```wren
PassLayerDesc.blending : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="blending=(v : Any)"></endpoint>
### PassLayerDesc.blending
```wren
PassLayerDesc.blending=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="write_mask"></endpoint>
### PassLayerDesc.write_mask
```wren
PassLayerDesc.write_mask : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="write_mask=(v : Any)"></endpoint>
### PassLayerDesc.write_mask
```wren
PassLayerDesc.write_mask=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_test"></endpoint>
### PassLayerDesc.depth_test
```wren
PassLayerDesc.depth_test : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_test=(v : Any)"></endpoint>
### PassLayerDesc.depth_test
```wren
PassLayerDesc.depth_test=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_write"></endpoint>
### PassLayerDesc.depth_write
```wren
PassLayerDesc.depth_write : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_write=(v : Any)"></endpoint>
### PassLayerDesc.depth_write
```wren
PassLayerDesc.depth_write=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_compare"></endpoint>
### PassLayerDesc.depth_compare
```wren
PassLayerDesc.depth_compare : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PassLayerDesc" signature="depth_compare=(v : Any)"></endpoint>
### PassLayerDesc.depth_compare
```wren
PassLayerDesc.depth_compare=(v : Any) : unknown
```
> no docs found   


## PixelFormat
```wren
import "luxe: render" for PixelFormat
```
> no docs found

<endpoint module="luxe: render" class="PixelFormat" signature="invalid"></endpoint>
### PixelFormat.invalid
```wren
PixelFormat.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Unorm"></endpoint>
### PixelFormat.rgb8Unorm
```wren
PixelFormat.rgb8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Unorm_srgb"></endpoint>
### PixelFormat.rgb8Unorm_srgb
```wren
PixelFormat.rgb8Unorm_srgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Snorm"></endpoint>
### PixelFormat.rgb8Snorm
```wren
PixelFormat.rgb8Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Uint"></endpoint>
### PixelFormat.rgb8Uint
```wren
PixelFormat.rgb8Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb8Sint"></endpoint>
### PixelFormat.rgb8Sint
```wren
PixelFormat.rgb8Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Unorm"></endpoint>
### PixelFormat.rgb16Unorm
```wren
PixelFormat.rgb16Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Snorm"></endpoint>
### PixelFormat.rgb16Snorm
```wren
PixelFormat.rgb16Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Uint"></endpoint>
### PixelFormat.rgb16Uint
```wren
PixelFormat.rgb16Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Sint"></endpoint>
### PixelFormat.rgb16Sint
```wren
PixelFormat.rgb16Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb16Float"></endpoint>
### PixelFormat.rgb16Float
```wren
PixelFormat.rgb16Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Uint"></endpoint>
### PixelFormat.rgb32Uint
```wren
PixelFormat.rgb32Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Sint"></endpoint>
### PixelFormat.rgb32Sint
```wren
PixelFormat.rgb32Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgb32Float"></endpoint>
### PixelFormat.rgb32Float
```wren
PixelFormat.rgb32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Unorm"></endpoint>
### PixelFormat.rgba8Unorm
```wren
PixelFormat.rgba8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Unorm_srgb"></endpoint>
### PixelFormat.rgba8Unorm_srgb
```wren
PixelFormat.rgba8Unorm_srgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Snorm"></endpoint>
### PixelFormat.rgba8Snorm
```wren
PixelFormat.rgba8Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Uint"></endpoint>
### PixelFormat.rgba8Uint
```wren
PixelFormat.rgba8Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba8Sint"></endpoint>
### PixelFormat.rgba8Sint
```wren
PixelFormat.rgba8Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Unorm"></endpoint>
### PixelFormat.rgba16Unorm
```wren
PixelFormat.rgba16Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Snorm"></endpoint>
### PixelFormat.rgba16Snorm
```wren
PixelFormat.rgba16Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Uint"></endpoint>
### PixelFormat.rgba16Uint
```wren
PixelFormat.rgba16Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Sint"></endpoint>
### PixelFormat.rgba16Sint
```wren
PixelFormat.rgba16Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba16Float"></endpoint>
### PixelFormat.rgba16Float
```wren
PixelFormat.rgba16Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Uint"></endpoint>
### PixelFormat.rgba32Uint
```wren
PixelFormat.rgba32Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Sint"></endpoint>
### PixelFormat.rgba32Sint
```wren
PixelFormat.rgba32Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rgba32Float"></endpoint>
### PixelFormat.rgba32Float
```wren
PixelFormat.rgba32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r11g11b10Float"></endpoint>
### PixelFormat.r11g11b10Float
```wren
PixelFormat.r11g11b10Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bgra8Unorm"></endpoint>
### PixelFormat.bgra8Unorm
```wren
PixelFormat.bgra8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bgra8Unorm_srgb"></endpoint>
### PixelFormat.bgra8Unorm_srgb
```wren
PixelFormat.bgra8Unorm_srgb : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth16Unorm"></endpoint>
### PixelFormat.depth16Unorm
```wren
PixelFormat.depth16Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth32Float"></endpoint>
### PixelFormat.depth32Float
```wren
PixelFormat.depth32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="stencil8"></endpoint>
### PixelFormat.stencil8
```wren
PixelFormat.stencil8 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth24Unorm_stencil8"></endpoint>
### PixelFormat.depth24Unorm_stencil8
```wren
PixelFormat.depth24Unorm_stencil8 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="depth32Float_stencil8"></endpoint>
### PixelFormat.depth32Float_stencil8
```wren
PixelFormat.depth32Float_stencil8 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bc1_rgba"></endpoint>
### PixelFormat.bc1_rgba
```wren
PixelFormat.bc1_rgba : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="bc3_rgba"></endpoint>
### PixelFormat.bc3_rgba
```wren
PixelFormat.bc3_rgba : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Unorm"></endpoint>
### PixelFormat.r8Unorm
```wren
PixelFormat.r8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Snorm"></endpoint>
### PixelFormat.r8Snorm
```wren
PixelFormat.r8Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Uint"></endpoint>
### PixelFormat.r8Uint
```wren
PixelFormat.r8Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r8Sint"></endpoint>
### PixelFormat.r8Sint
```wren
PixelFormat.r8Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Unorm"></endpoint>
### PixelFormat.rg8Unorm
```wren
PixelFormat.rg8Unorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Snorm"></endpoint>
### PixelFormat.rg8Snorm
```wren
PixelFormat.rg8Snorm : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Uint"></endpoint>
### PixelFormat.rg8Uint
```wren
PixelFormat.rg8Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg8Sint"></endpoint>
### PixelFormat.rg8Sint
```wren
PixelFormat.rg8Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Uint"></endpoint>
### PixelFormat.r16Uint
```wren
PixelFormat.r16Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Sint"></endpoint>
### PixelFormat.r16Sint
```wren
PixelFormat.r16Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r16Float"></endpoint>
### PixelFormat.r16Float
```wren
PixelFormat.r16Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Uint"></endpoint>
### PixelFormat.rg16Uint
```wren
PixelFormat.rg16Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Sint"></endpoint>
### PixelFormat.rg16Sint
```wren
PixelFormat.rg16Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg16Float"></endpoint>
### PixelFormat.rg16Float
```wren
PixelFormat.rg16Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Uint"></endpoint>
### PixelFormat.r32Uint
```wren
PixelFormat.r32Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Sint"></endpoint>
### PixelFormat.r32Sint
```wren
PixelFormat.r32Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="r32Float"></endpoint>
### PixelFormat.r32Float
```wren
PixelFormat.r32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Uint"></endpoint>
### PixelFormat.rg32Uint
```wren
PixelFormat.rg32Uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Sint"></endpoint>
### PixelFormat.rg32Sint
```wren
PixelFormat.rg32Sint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="rg32Float"></endpoint>
### PixelFormat.rg32Float
```wren
PixelFormat.rg32Float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="from_string(value : Any)"></endpoint>
### PixelFormat.from_string(.)
```wren
PixelFormat.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PixelFormat" signature="name(value : Any)"></endpoint>
### PixelFormat.name(.)
```wren
PixelFormat.name(value : Any) : unknown
```
> no docs found   


## Pose
```wren
import "luxe: render" for Pose
```
> no docs found

<endpoint module="luxe: render" class="Pose" signature="create(skeleton : Skeleton)"></endpoint>
### Pose.create(.)
```wren
Pose.create(skeleton : Skeleton) : Pose
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="destroy(pose : Pose)"></endpoint>
### Pose.destroy(.)
```wren
Pose.destroy(pose : Pose) : None
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="reset(pose : Pose)"></endpoint>
### Pose.reset(.)
```wren
Pose.reset(pose : Pose) : None
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="copy(from : Pose, to : Pose)"></endpoint>
### Pose.copy(..)
```wren
Pose.copy(from : Pose, to : Pose) : None
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_pos_joint(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_pos_joint(..)
```wren
Pose.get_bone_pos_joint(pose : Pose, bone_id : String) : Float3
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_pos(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_pos(..)
```wren
Pose.get_bone_pos(pose : Pose, bone_id : String) : Float3
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_up(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_up(..)
```wren
Pose.get_bone_up(pose : Pose, bone_id : String) : Float3
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_forward(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_forward(..)
```wren
Pose.get_bone_forward(pose : Pose, bone_id : String) : Float3
```
> no docs found   

<endpoint module="luxe: render" class="Pose" signature="get_bone_right(pose : Pose, bone_id : String)"></endpoint>
### Pose.get_bone_right(..)
```wren
Pose.get_bone_right(pose : Pose, bone_id : String) : Float3
```
> no docs found   


## PoseGraph
```wren
import "luxe: render" for PoseGraph
```
> no docs found

<endpoint module="luxe: render" class="PoseGraph" signature="create(skeleton : Skeleton)"></endpoint>
### PoseGraph.create(.)
```wren
PoseGraph.create(skeleton : Skeleton) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="destroy(graph : PoseGraph)"></endpoint>
### PoseGraph.destroy(.)
```wren
PoseGraph.destroy(graph : PoseGraph) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="valid(graph : PoseGraph)"></endpoint>
### PoseGraph.valid(.)
```wren
PoseGraph.valid(graph : PoseGraph) : Bool
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="tick(graph : PoseGraph, delta : Num)"></endpoint>
### PoseGraph.tick(..)
```wren
PoseGraph.tick(graph : PoseGraph, delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="pose(graph : PoseGraph)"></endpoint>
### PoseGraph.pose(.)
```wren
PoseGraph.pose(graph : PoseGraph) : Pose
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="set_time(graph : PoseGraph, time : Num)"></endpoint>
### PoseGraph.set_time(..)
```wren
PoseGraph.set_time(graph : PoseGraph, time : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="get_time(graph : PoseGraph)"></endpoint>
### PoseGraph.get_time(.)
```wren
PoseGraph.get_time(graph : PoseGraph) : Num
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_add(graph : PoseGraph, node : PoseNode)"></endpoint>
### PoseGraph.node_add(..)
```wren
PoseGraph.node_add(graph : PoseGraph, node : PoseNode) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_remove(graph : PoseGraph, index : Num)"></endpoint>
### PoseGraph.node_remove(..)
```wren
PoseGraph.node_remove(graph : PoseGraph, index : Num) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_at(graph : PoseGraph, index : Num)"></endpoint>
### PoseGraph.node_at(..)
```wren
PoseGraph.node_at(graph : PoseGraph, index : Num) : PoseNode
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_index(graph : PoseGraph, node : PoseNode)"></endpoint>
### PoseGraph.node_index(..)
```wren
PoseGraph.node_index(graph : PoseGraph, node : PoseNode) : Num
```
> no docs found   

<endpoint module="luxe: render" class="PoseGraph" signature="node_count(graph : PoseGraph)"></endpoint>
### PoseGraph.node_count(.)
```wren
PoseGraph.node_count(graph : PoseGraph) : Num
```
> no docs found   


## PoseNode
```wren
import "luxe: render" for PoseNode
```
> no docs found

<endpoint module="luxe: render" class="PoseNode" signature="create(node_type_id : String)"></endpoint>
### PoseNode.create(.)
```wren
PoseNode.create(node_type_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="destroy(node : PoseNode)"></endpoint>
### PoseNode.destroy(.)
```wren
PoseNode.destroy(node : PoseNode) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="valid(node : PoseNode)"></endpoint>
### PoseNode.valid(.)
```wren
PoseNode.valid(node : PoseNode) : Bool
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="pose(node : PoseNode)"></endpoint>
### PoseNode.pose(.)
```wren
PoseNode.pose(node : PoseNode) : Pose
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="block(node : PoseNode)"></endpoint>
### PoseNode.block(.)
```wren
PoseNode.block(node : PoseNode) : Block
```
> no docs found   

<endpoint module="luxe: render" class="PoseNode" signature="input(node : PoseNode)"></endpoint>
### PoseNode.input(.)
```wren
PoseNode.input(node : PoseNode) : Any
```
> no docs found   


## Primitive
```wren
import "luxe: render" for Primitive
```
> no docs found

<endpoint module="luxe: render" class="Primitive" signature="point"></endpoint>
### Primitive.point
```wren
Primitive.point : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="line"></endpoint>
### Primitive.line
```wren
Primitive.line : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="line_strip"></endpoint>
### Primitive.line_strip
```wren
Primitive.line_strip : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="triangle"></endpoint>
### Primitive.triangle
```wren
Primitive.triangle : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="triangle_strip"></endpoint>
### Primitive.triangle_strip
```wren
Primitive.triangle_strip : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Primitive" signature="from_string(value : Any)"></endpoint>
### Primitive.from_string(.)
```wren
Primitive.from_string(value : Any) : unknown
```
> no docs found   


## Render
```wren
import "luxe: render" for Render
```
> no docs found

<endpoint module="luxe: render" class="Render" signature="dispatch(library : String, function : String, x : Num, y : Num, z : Num)"></endpoint>
### Render.dispatch(.....)
```wren
Render.dispatch(library : String, function : String, x : Num, y : Num, z : Num) : None
```
> Dispatch a compute function directly (todo: doesn't have a way to get inputs atm)   

<endpoint module="luxe: render" class="Render" signature="submit(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats)"></endpoint>
### Render.submit(......)
```wren
Render.submit(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="submit_now(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats)"></endpoint>
### Render.submit_now(......)
```wren
Render.submit_now(set : RenderSet, target_path : RenderPath, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="submit_fn(set : RenderSet, target_path : String, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats, settings : Maps, fn : Fn)"></endpoint>
### Render.submit_fn(........)
```wren
Render.submit_fn(set : RenderSet, target_path : String, target_resource : String, target_region : Float4, mat_proj : Floats, mat_view : Floats, settings : Maps, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_set()"></endpoint>
### Render.create_set(.)
```wren
Render.create_set() : RenderSet
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_set(set : RenderSet)"></endpoint>
### Render.destroy_set(.)
```wren
Render.destroy_set(set : RenderSet) : None
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_set(set : RenderSet)"></endpoint>
### Render.valid_set(.)
```wren
Render.valid_set(set : RenderSet) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_add(set : RenderSet, geo : Geometry)"></endpoint>
### Render.set_add(..)
```wren
Render.set_add(set : RenderSet, geo : Geometry) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_remove(set : RenderSet, geo : Geometry)"></endpoint>
### Render.set_remove(..)
```wren
Render.set_remove(set : RenderSet, geo : Geometry) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_get_geometry(set : RenderSet, into : List)"></endpoint>
### Render.set_get_geometry(..)
```wren
Render.set_get_geometry(set : RenderSet, into : List) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="set_get_count(set : RenderSet)"></endpoint>
### Render.set_get_count(.)
```wren
Render.set_get_count(set : RenderSet) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_path()"></endpoint>
### Render.create_path(.)
```wren
Render.create_path() : RenderPath
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_path(path : RenderPath)"></endpoint>
### Render.destroy_path(.)
```wren
Render.destroy_path(path : RenderPath) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_path(path : RenderPath)"></endpoint>
### Render.valid_path(.)
```wren
Render.valid_path(path : RenderPath) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="display_dpi()"></endpoint>
### Render.display_dpi(.)
```wren
Render.display_dpi() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="display_scale()"></endpoint>
### Render.display_scale(.)
```wren
Render.display_scale() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_w()"></endpoint>
### Render.window_w(.)
```wren
Render.window_w() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_h()"></endpoint>
### Render.window_h(.)
```wren
Render.window_h() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_state()"></endpoint>
### Render.window_state(.)
```wren
Render.window_state() : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_focus()"></endpoint>
### Render.window_focus(.)
```wren
Render.window_focus() : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_hide(state : Any)"></endpoint>
### Render.window_hide(.)
```wren
Render.window_hide(state : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_w()"></endpoint>
### Render.drawable_w(.)
```wren
Render.drawable_w() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_h()"></endpoint>
### Render.drawable_h(.)
```wren
Render.drawable_h() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="drawable_ratio()"></endpoint>
### Render.drawable_ratio(.)
```wren
Render.drawable_ratio() : Num
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="window_set_title(title : String)"></endpoint>
### Render.window_set_title(.)
```wren
Render.window_set_title(title : String) : None
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="get_path_vertices(into_pos : Any, offset_pos : Any, stride_pos : Any, into_color : Any, offset_color : Any, stride_color : Any, points : Any, color : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any)"></endpoint>
### Render.get_path_vertices(.............)
```wren
Render.get_path_vertices(into_pos : Any, offset_pos : Any, stride_pos : Any, into_color : Any, offset_color : Any, stride_color : Any, points : Any, color : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="get_path_vertex_count(points : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any)"></endpoint>
### Render.get_path_vertex_count(......)
```wren
Render.get_path_vertex_count(points : Any, thickness : Any, cap : Any, join : Any, closed : Any, miter_limit : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="push_render_dest(dest : Any, into : Any)"></endpoint>
### Render.push_render_dest(..)
```wren
Render.push_render_dest(dest : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layers(path : Any, name : Any, layers_add : Any, layer : Any)"></endpoint>
### Render.path_add_render_layers(....)
```wren
Render.path_add_render_layers(path : Any, name : Any, layers_add : Any, layer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layers(path : Any, name : Any, layers_add : Any, layers_exclude : Any, layer : RenderLayerDesc)"></endpoint>
### Render.path_add_render_layers(.....)
```wren
Render.path_add_render_layers(path : Any, name : Any, layers_add : Any, layers_exclude : Any, layer : RenderLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_render_layer(path : Any, name : Any, layer : RenderLayerDesc)"></endpoint>
### Render.path_add_render_layer(...)
```wren
Render.path_add_render_layer(path : Any, name : Any, layer : RenderLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_compute_layer(path : Any, compute_id : Any, display : Any, dimensions : Any, inputs : Any)"></endpoint>
### Render.path_add_compute_layer(.....)
```wren
Render.path_add_compute_layer(path : Any, compute_id : Any, display : Any, dimensions : Any, inputs : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_add_pass_layer(path : Any, name : Any, dest : Any, material : Any)"></endpoint>
### Render.path_add_pass_layer(....)
```wren
Render.path_add_pass_layer(path : Any, name : Any, dest : Any, material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_remove(path : Any, name : Any)"></endpoint>
### Render.path_remove(..)
```wren
Render.path_remove(path : Any, name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="path_update(path : Any, name : Any, layer : RenderLayerDesc)"></endpoint>
### Render.path_update(...)
```wren
Render.path_update(path : Any, name : Any, layer : RenderLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_compute(name : String, library : String, function : String, blocks : List)"></endpoint>
### Render.define_compute(....)
```wren
Render.define_compute(name : String, library : String, function : String, blocks : List) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_compute(name : Any)"></endpoint>
### Render.undefine_compute(.)
```wren
Render.undefine_compute(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_sampler_state(name : Any)"></endpoint>
### Render.undefine_sampler_state(.)
```wren
Render.undefine_sampler_state(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_sampler_state(name : Any, desc : Any)"></endpoint>
### Render.define_sampler_state(..)
```wren
Render.define_sampler_state(name : Any, desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_vertex_format(name : Any, desc : Any)"></endpoint>
### Render.define_vertex_format(..)
```wren
Render.define_vertex_format(name : Any, desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_vertex_format(name : Any)"></endpoint>
### Render.undefine_vertex_format(.)
```wren
Render.undefine_vertex_format(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="define_resource(name : Any, image : Any)"></endpoint>
### Render.define_resource(..)
```wren
Render.define_resource(name : Any, image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="resource_get_image(name : Any)"></endpoint>
### Render.resource_get_image(.)
```wren
Render.resource_get_image(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="undefine_resource(name : Any)"></endpoint>
### Render.undefine_resource(.)
```wren
Render.undefine_resource(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_vertex_buffer(data : Any, length : Any)"></endpoint>
### Render.create_vertex_buffer(..)
```wren
Render.create_vertex_buffer(data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_get_size(vertex_buffer : Any)"></endpoint>
### Render.vertex_buffer_get_size(.)
```wren
Render.vertex_buffer_get_size(vertex_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_get_data(vertex_buffer : Any, into : Any, length : Any, offset : Any)"></endpoint>
### Render.vertex_buffer_get_data(....)
```wren
Render.vertex_buffer_get_data(vertex_buffer : Any, into : Any, length : Any, offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_replace(vertex_buffer : Any, data : Any, length : Any)"></endpoint>
### Render.vertex_buffer_replace(...)
```wren
Render.vertex_buffer_replace(vertex_buffer : Any, data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="vertex_buffer_update(vertex_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any)"></endpoint>
### Render.vertex_buffer_update(.....)
```wren
Render.vertex_buffer_update(vertex_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_vertex_buffer(vertex_buffer : Any)"></endpoint>
### Render.destroy_vertex_buffer(.)
```wren
Render.destroy_vertex_buffer(vertex_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_index_buffer(data : Any, length : Any)"></endpoint>
### Render.create_index_buffer(..)
```wren
Render.create_index_buffer(data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_index_buffer32(data : Any, length : Any)"></endpoint>
### Render.create_index_buffer32(..)
```wren
Render.create_index_buffer32(data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_get_size(index_buffer : Any)"></endpoint>
### Render.index_buffer_get_size(.)
```wren
Render.index_buffer_get_size(index_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_get_data(index_buffer : Any, into : Any, length : Any, offset : Any)"></endpoint>
### Render.index_buffer_get_data(....)
```wren
Render.index_buffer_get_data(index_buffer : Any, into : Any, length : Any, offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_replace(index_buffer : Any, data : Any, length : Any)"></endpoint>
### Render.index_buffer_replace(...)
```wren
Render.index_buffer_replace(index_buffer : Any, data : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="index_buffer_update(index_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any)"></endpoint>
### Render.index_buffer_update(.....)
```wren
Render.index_buffer_update(index_buffer : Any, data : Any, length : Any, data_src_offset : Any, dest_offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_index_buffer(index_buffer : Any)"></endpoint>
### Render.destroy_index_buffer(.)
```wren
Render.destroy_index_buffer(index_buffer : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="create_text(material : Any, default_size : Any, default_font : Any, default_color : Any, render_set : Any)"></endpoint>
### Render.create_text(.....)
```wren
Render.create_text(material : Any, default_size : Any, default_font : Any, default_color : Any, render_set : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="destroy_text(text : Any)"></endpoint>
### Render.destroy_text(.)
```wren
Render.destroy_text(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="valid_text(text : Any)"></endpoint>
### Render.valid_text(.)
```wren
Render.valid_text(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_attr_clear(text : Any)"></endpoint>
### Render.text_attr_clear(.)
```wren
Render.text_attr_clear(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_text_buffer(text : Any, string : Any)"></endpoint>
### Render.text_set_text_buffer(..)
```wren
Render.text_set_text_buffer(text : Any, string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_attr(text : Text, start : Num, length : Num, type : TextAttrType, key : String, value : Any)"></endpoint>
### Render.text_set_attr(......)
```wren
Render.text_set_attr(text : Text, start : Num, length : Num, type : TextAttrType, key : String, value : Any) : None
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_outline(text : Text, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### Render.text_set_outline(.....)
```wren
Render.text_set_outline(text : Text, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_shadow(text : Text, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### Render.text_set_shadow(.....)
```wren
Render.text_set_shadow(text : Text, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_pos(text : Any, x : Any, y : Any, z : Any)"></endpoint>
### Render.text_set_pos(....)
```wren
Render.text_set_pos(text : Any, x : Any, y : Any, z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_align(text : Any, align : Any, align_vertical : Any)"></endpoint>
### Render.text_set_align(...)
```wren
Render.text_set_align(text : Any, align : Any, align_vertical : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_bounds(text : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### Render.text_set_bounds(.....)
```wren
Render.text_set_bounds(text : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_commit(text : Any)"></endpoint>
### Render.text_commit(.)
```wren
Render.text_commit(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_geometry(text : Any)"></endpoint>
### Render.text_get_geometry(.)
```wren
Render.text_get_geometry(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_extents(text : Any, offset : Any, count : Any)"></endpoint>
### Render.text_get_extents(...)
```wren
Render.text_get_extents(text : Any, offset : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_extents(text : Any)"></endpoint>
### Render.text_get_extents(.)
```wren
Render.text_get_extents(text : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_character_bounds(text : Any, index : Any)"></endpoint>
### Render.text_get_character_bounds(..)
```wren
Render.text_get_character_bounds(text : Any, index : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_enable_markup(text : Text, enable : Bool)"></endpoint>
### Render.text_set_enable_markup(..)
```wren
Render.text_set_enable_markup(text : Text, enable : Bool) : None
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_get_enable_markup(text : Text)"></endpoint>
### Render.text_get_enable_markup(.)
```wren
Render.text_get_enable_markup(text : Text) : Bool
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="text_set_text(text : Any, string : Any)"></endpoint>
### Render.text_set_text(..)
```wren
Render.text_set_text(text : Any, string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kVertexAttributes"></endpoint>
### Render.kVertexAttributes
```wren
Render.kVertexAttributes : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kColorTargets"></endpoint>
### Render.kColorTargets
```wren
Render.kColorTargets : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialLayerTargets"></endpoint>
### Render.kMaterialLayerTargets
```wren
Render.kMaterialLayerTargets : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialInputs"></endpoint>
### Render.kMaterialInputs
```wren
Render.kMaterialInputs : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialReplace"></endpoint>
### Render.kMaterialReplace
```wren
Render.kMaterialReplace : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kMaterialPassUsage"></endpoint>
### Render.kMaterialPassUsage
```wren
Render.kMaterialPassUsage : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Render" signature="kStencilUnset"></endpoint>
### Render.kStencilUnset
```wren
Render.kStencilUnset : unknown
```
> no docs found   


## RenderDest
```wren
import "luxe: render" for RenderDest
```
> no docs found

<endpoint module="luxe: render" class="RenderDest" signature="target_region"></endpoint>
### RenderDest.target_region
```wren
RenderDest.target_region : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="color"></endpoint>
### RenderDest.color
```wren
RenderDest.color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="depth"></endpoint>
### RenderDest.depth
```wren
RenderDest.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="stencil"></endpoint>
### RenderDest.stencil
```wren
RenderDest.stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="color=(color : Any)"></endpoint>
### RenderDest.color
```wren
RenderDest.color=(color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="depth=(depth : Any)"></endpoint>
### RenderDest.depth
```wren
RenderDest.depth=(depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="stencil=(stencil : Any)"></endpoint>
### RenderDest.stencil
```wren
RenderDest.stencil=(stencil : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDest" signature="new()"></endpoint>
### RenderDest.new(.)
```wren
RenderDest.new() : RenderDest
```
> no docs found   


## RenderDestColor
```wren
import "luxe: render" for RenderDestColor
```
> no docs found

<endpoint module="luxe: render" class="RenderDestColor" signature="render_target"></endpoint>
### RenderDestColor.render_target
```wren
RenderDestColor.render_target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="render_target=(render_target : Any)"></endpoint>
### RenderDestColor.render_target
```wren
RenderDestColor.render_target=(render_target : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="clear_color"></endpoint>
### RenderDestColor.clear_color
```wren
RenderDestColor.clear_color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="clear_color=(clear_color : Any)"></endpoint>
### RenderDestColor.clear_color
```wren
RenderDestColor.clear_color=(clear_color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="load_action"></endpoint>
### RenderDestColor.load_action
```wren
RenderDestColor.load_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="load_action=(load_action : Any)"></endpoint>
### RenderDestColor.load_action
```wren
RenderDestColor.load_action=(load_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="store_action"></endpoint>
### RenderDestColor.store_action
```wren
RenderDestColor.store_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="store_action=(store_action : Any)"></endpoint>
### RenderDestColor.store_action
```wren
RenderDestColor.store_action=(store_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="level"></endpoint>
### RenderDestColor.level
```wren
RenderDestColor.level : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="level=(level : Any)"></endpoint>
### RenderDestColor.level
```wren
RenderDestColor.level=(level : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="slice"></endpoint>
### RenderDestColor.slice
```wren
RenderDestColor.slice : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="slice=(slice : Any)"></endpoint>
### RenderDestColor.slice
```wren
RenderDestColor.slice=(slice : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="depth"></endpoint>
### RenderDestColor.depth
```wren
RenderDestColor.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="depth=(depth : Any)"></endpoint>
### RenderDestColor.depth
```wren
RenderDestColor.depth=(depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestColor" signature="new()"></endpoint>
### RenderDestColor.new(.)
```wren
RenderDestColor.new() : RenderDestColor
```
> no docs found   


## RenderDestDepth
```wren
import "luxe: render" for RenderDestDepth
```
> no docs found

<endpoint module="luxe: render" class="RenderDestDepth" signature="render_target"></endpoint>
### RenderDestDepth.render_target
```wren
RenderDestDepth.render_target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="render_target=(render_target : Any)"></endpoint>
### RenderDestDepth.render_target
```wren
RenderDestDepth.render_target=(render_target : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="clear_depth"></endpoint>
### RenderDestDepth.clear_depth
```wren
RenderDestDepth.clear_depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="clear_depth=(clear_depth : Any)"></endpoint>
### RenderDestDepth.clear_depth
```wren
RenderDestDepth.clear_depth=(clear_depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="load_action"></endpoint>
### RenderDestDepth.load_action
```wren
RenderDestDepth.load_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="load_action=(load_action : Any)"></endpoint>
### RenderDestDepth.load_action
```wren
RenderDestDepth.load_action=(load_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="store_action"></endpoint>
### RenderDestDepth.store_action
```wren
RenderDestDepth.store_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="store_action=(store_action : Any)"></endpoint>
### RenderDestDepth.store_action
```wren
RenderDestDepth.store_action=(store_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="level"></endpoint>
### RenderDestDepth.level
```wren
RenderDestDepth.level : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="level=(level : Any)"></endpoint>
### RenderDestDepth.level
```wren
RenderDestDepth.level=(level : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="slice"></endpoint>
### RenderDestDepth.slice
```wren
RenderDestDepth.slice : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="slice=(slice : Any)"></endpoint>
### RenderDestDepth.slice
```wren
RenderDestDepth.slice=(slice : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="depth"></endpoint>
### RenderDestDepth.depth
```wren
RenderDestDepth.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="depth=(depth : Any)"></endpoint>
### RenderDestDepth.depth
```wren
RenderDestDepth.depth=(depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestDepth" signature="new()"></endpoint>
### RenderDestDepth.new(.)
```wren
RenderDestDepth.new() : RenderDestDepth
```
> no docs found   


## RenderDestStencil
```wren
import "luxe: render" for RenderDestStencil
```
> no docs found

<endpoint module="luxe: render" class="RenderDestStencil" signature="render_target"></endpoint>
### RenderDestStencil.render_target
```wren
RenderDestStencil.render_target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="render_target=(render_target : Any)"></endpoint>
### RenderDestStencil.render_target
```wren
RenderDestStencil.render_target=(render_target : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="clear_stencil"></endpoint>
### RenderDestStencil.clear_stencil
```wren
RenderDestStencil.clear_stencil : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="clear_stencil=(clear_stencil : Any)"></endpoint>
### RenderDestStencil.clear_stencil
```wren
RenderDestStencil.clear_stencil=(clear_stencil : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="load_action"></endpoint>
### RenderDestStencil.load_action
```wren
RenderDestStencil.load_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="load_action=(load_action : Any)"></endpoint>
### RenderDestStencil.load_action
```wren
RenderDestStencil.load_action=(load_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="store_action"></endpoint>
### RenderDestStencil.store_action
```wren
RenderDestStencil.store_action : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="store_action=(store_action : Any)"></endpoint>
### RenderDestStencil.store_action
```wren
RenderDestStencil.store_action=(store_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="level"></endpoint>
### RenderDestStencil.level
```wren
RenderDestStencil.level : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="level=(level : Any)"></endpoint>
### RenderDestStencil.level
```wren
RenderDestStencil.level=(level : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="slice"></endpoint>
### RenderDestStencil.slice
```wren
RenderDestStencil.slice : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="slice=(slice : Any)"></endpoint>
### RenderDestStencil.slice
```wren
RenderDestStencil.slice=(slice : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="depth"></endpoint>
### RenderDestStencil.depth
```wren
RenderDestStencil.depth : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="depth=(depth : Any)"></endpoint>
### RenderDestStencil.depth
```wren
RenderDestStencil.depth=(depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderDestStencil" signature="new()"></endpoint>
### RenderDestStencil.new(.)
```wren
RenderDestStencil.new() : RenderDestStencil
```
> no docs found   


## RenderLayerDesc
```wren
import "luxe: render" for RenderLayerDesc
```
> no docs found

<endpoint module="luxe: render" class="RenderLayerDesc" signature="display_id"></endpoint>
### RenderLayerDesc.display_id
```wren
RenderLayerDesc.display_id : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="display_id=(display_id : Any)"></endpoint>
### RenderLayerDesc.display_id
```wren
RenderLayerDesc.display_id=(display_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="sort"></endpoint>
### RenderLayerDesc.sort
```wren
RenderLayerDesc.sort : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="sort=(sort : Any)"></endpoint>
### RenderLayerDesc.sort
```wren
RenderLayerDesc.sort=(sort : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="material_override"></endpoint>
### RenderLayerDesc.material_override
```wren
RenderLayerDesc.material_override : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="material_override=(material_override : Any)"></endpoint>
### RenderLayerDesc.material_override
```wren
RenderLayerDesc.material_override=(material_override : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="replace_tag"></endpoint>
### RenderLayerDesc.replace_tag
```wren
RenderLayerDesc.replace_tag : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="replace_tag=(replace_tag : Any)"></endpoint>
### RenderLayerDesc.replace_tag
```wren
RenderLayerDesc.replace_tag=(replace_tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="dest"></endpoint>
### RenderLayerDesc.dest
```wren
RenderLayerDesc.dest : RenderDest
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="dest=(dest : Any)"></endpoint>
### RenderLayerDesc.dest
```wren
RenderLayerDesc.dest=(dest : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderLayerDesc" signature="new()"></endpoint>
### RenderLayerDesc.new(.)
```wren
RenderLayerDesc.new() : RenderLayerDesc
```
> no docs found   


## RenderPathContext
```wren
import "luxe: render" for RenderPathContext
```
> no docs found

<endpoint module="luxe: render" class="RenderPathContext" signature="settings"></endpoint>
### RenderPathContext.settings
```wren
RenderPathContext.settings : Map
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="new(path : String, settings : Map)"></endpoint>
### RenderPathContext.new(..)
```wren
RenderPathContext.new(path : String, settings : Map) : RenderPathContext
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="path"></endpoint>
### RenderPathContext.path
```wren
RenderPathContext.path : String
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="change_path(path : String)"></endpoint>
### RenderPathContext.change_path(.)
```wren
RenderPathContext.change_path(path : String) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_render(name : String, render_layer_desc : RenderLayerDesc)"></endpoint>
### RenderPathContext.layer_render(..)
```wren
RenderPathContext.layer_render(name : String, render_layer_desc : RenderLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layers_render(name : Any, layers_add : Any, render_layer_desc : Any)"></endpoint>
### RenderPathContext.layers_render(...)
```wren
RenderPathContext.layers_render(name : Any, layers_add : Any, render_layer_desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layers_render(name : Any, layers_add : Any, layers_exclude : Any, render_layer_desc : Any)"></endpoint>
### RenderPathContext.layers_render(....)
```wren
RenderPathContext.layers_render(name : Any, layers_add : Any, layers_exclude : Any, render_layer_desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_pass(pass_layer_desc : Any)"></endpoint>
### RenderPathContext.layer_pass(.)
```wren
RenderPathContext.layer_pass(pass_layer_desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="layer_compute(compute_layer_desc : ComputeLayerDesc)"></endpoint>
### RenderPathContext.layer_compute(.)
```wren
RenderPathContext.layer_compute(compute_layer_desc : ComputeLayerDesc) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="get(key : Any, default : Any)"></endpoint>
### RenderPathContext.get(..)
```wren
RenderPathContext.get(key : Any, default : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderPathContext" signature="set(key : Any, value : Any)"></endpoint>
### RenderPathContext.set(..)
```wren
RenderPathContext.set(key : Any, value : Any) : unknown
```
> no docs found   


## RenderViewDesc
```wren
import "luxe: render" for RenderViewDesc
```
> no docs found

<endpoint module="luxe: render" class="RenderViewDesc" signature="target"></endpoint>
### RenderViewDesc.target
```wren
RenderViewDesc.target : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="target=(v : Any)"></endpoint>
### RenderViewDesc.target
```wren
RenderViewDesc.target=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="target(v : Any)"></endpoint>
### RenderViewDesc.target(.)
```wren
RenderViewDesc.target(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path"></endpoint>
### RenderViewDesc.path
```wren
RenderViewDesc.path : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path=(v : Any)"></endpoint>
### RenderViewDesc.path
```wren
RenderViewDesc.path=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="path(v : Any)"></endpoint>
### RenderViewDesc.path(.)
```wren
RenderViewDesc.path(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region"></endpoint>
### RenderViewDesc.region
```wren
RenderViewDesc.region : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region=(v : Any)"></endpoint>
### RenderViewDesc.region
```wren
RenderViewDesc.region=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="region(v : Any)"></endpoint>
### RenderViewDesc.region(.)
```wren
RenderViewDesc.region(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings"></endpoint>
### RenderViewDesc.settings
```wren
RenderViewDesc.settings : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings=(v : Any)"></endpoint>
### RenderViewDesc.settings
```wren
RenderViewDesc.settings=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="settings(v : Any)"></endpoint>
### RenderViewDesc.settings(.)
```wren
RenderViewDesc.settings(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="new(target_resource : Any, target_path : Any, target_region : Any, target_settings : Any)"></endpoint>
### RenderViewDesc.new(....)
```wren
RenderViewDesc.new(target_resource : Any, target_path : Any, target_region : Any, target_settings : Any) : RenderViewDesc
```
> no docs found   

<endpoint module="luxe: render" class="RenderViewDesc" signature="new()"></endpoint>
### RenderViewDesc.new(.)
```wren
RenderViewDesc.new() : RenderViewDesc
```
> no docs found   


## SamplerAddressMode
```wren
import "luxe: render" for SamplerAddressMode
```
> no docs found

<endpoint module="luxe: render" class="SamplerAddressMode" signature="clamp_to_edge"></endpoint>
### SamplerAddressMode.clamp_to_edge
```wren
SamplerAddressMode.clamp_to_edge : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="repeat"></endpoint>
### SamplerAddressMode.repeat
```wren
SamplerAddressMode.repeat : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="mirror_repeat"></endpoint>
### SamplerAddressMode.mirror_repeat
```wren
SamplerAddressMode.mirror_repeat : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerAddressMode" signature="from_string(value : Any)"></endpoint>
### SamplerAddressMode.from_string(.)
```wren
SamplerAddressMode.from_string(value : Any) : unknown
```
> no docs found   


## SamplerMinMagFilter
```wren
import "luxe: render" for SamplerMinMagFilter
```
> no docs found

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="nearest"></endpoint>
### SamplerMinMagFilter.nearest
```wren
SamplerMinMagFilter.nearest : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="linear"></endpoint>
### SamplerMinMagFilter.linear
```wren
SamplerMinMagFilter.linear : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMinMagFilter" signature="from_string(value : Any)"></endpoint>
### SamplerMinMagFilter.from_string(.)
```wren
SamplerMinMagFilter.from_string(value : Any) : unknown
```
> no docs found   


## SamplerMipFilter
```wren
import "luxe: render" for SamplerMipFilter
```
> no docs found

<endpoint module="luxe: render" class="SamplerMipFilter" signature="none"></endpoint>
### SamplerMipFilter.none
```wren
SamplerMipFilter.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="nearest"></endpoint>
### SamplerMipFilter.nearest
```wren
SamplerMipFilter.nearest : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="linear"></endpoint>
### SamplerMipFilter.linear
```wren
SamplerMipFilter.linear : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerMipFilter" signature="from_string(value : Any)"></endpoint>
### SamplerMipFilter.from_string(.)
```wren
SamplerMipFilter.from_string(value : Any) : unknown
```
> no docs found   


## SamplerState
```wren
import "luxe: render" for SamplerState
```
> no docs found

<endpoint module="luxe: render" class="SamplerState" signature="new()"></endpoint>
### SamplerState.new(.)
```wren
SamplerState.new() : SamplerState
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_r"></endpoint>
### SamplerState.address_r
```wren
SamplerState.address_r : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_r=(v : Any)"></endpoint>
### SamplerState.address_r
```wren
SamplerState.address_r=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_s"></endpoint>
### SamplerState.address_s
```wren
SamplerState.address_s : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_s=(v : Any)"></endpoint>
### SamplerState.address_s
```wren
SamplerState.address_s=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_t"></endpoint>
### SamplerState.address_t
```wren
SamplerState.address_t : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="address_t=(v : Any)"></endpoint>
### SamplerState.address_t
```wren
SamplerState.address_t=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_min"></endpoint>
### SamplerState.filter_min
```wren
SamplerState.filter_min : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_min=(v : Any)"></endpoint>
### SamplerState.filter_min
```wren
SamplerState.filter_min=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mag"></endpoint>
### SamplerState.filter_mag
```wren
SamplerState.filter_mag : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mag=(v : Any)"></endpoint>
### SamplerState.filter_mag
```wren
SamplerState.filter_mag=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mip"></endpoint>
### SamplerState.filter_mip
```wren
SamplerState.filter_mip : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SamplerState" signature="filter_mip=(v : Any)"></endpoint>
### SamplerState.filter_mip
```wren
SamplerState.filter_mip=(v : Any) : unknown
```
> no docs found   


## SortType
```wren
import "luxe: render" for SortType
```
> no docs found

<endpoint module="luxe: render" class="SortType" signature="front_to_back"></endpoint>
### SortType.front_to_back
```wren
SortType.front_to_back : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SortType" signature="back_to_front"></endpoint>
### SortType.back_to_front
```wren
SortType.back_to_front : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SortType" signature="sort_by_z"></endpoint>
### SortType.sort_by_z
```wren
SortType.sort_by_z : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SortType" signature="sort_by_z_reverse"></endpoint>
### SortType.sort_by_z_reverse
```wren
SortType.sort_by_z_reverse : unknown
```
> no docs found   

<endpoint module="luxe: render" class="SortType" signature="none"></endpoint>
### SortType.none
```wren
SortType.none : unknown
```
> no docs found   


## StencilOperation
```wren
import "luxe: render" for StencilOperation
```
> no docs found

<endpoint module="luxe: render" class="StencilOperation" signature="keep"></endpoint>
### StencilOperation.keep
```wren
StencilOperation.keep : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="zero"></endpoint>
### StencilOperation.zero
```wren
StencilOperation.zero : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="replace"></endpoint>
### StencilOperation.replace
```wren
StencilOperation.replace : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="increment_clamp"></endpoint>
### StencilOperation.increment_clamp
```wren
StencilOperation.increment_clamp : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="decrement_clamp"></endpoint>
### StencilOperation.decrement_clamp
```wren
StencilOperation.decrement_clamp : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="invert"></endpoint>
### StencilOperation.invert
```wren
StencilOperation.invert : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="increment_wrap"></endpoint>
### StencilOperation.increment_wrap
```wren
StencilOperation.increment_wrap : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="decrement_wrap"></endpoint>
### StencilOperation.decrement_wrap
```wren
StencilOperation.decrement_wrap : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="invalid"></endpoint>
### StencilOperation.invalid
```wren
StencilOperation.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StencilOperation" signature="from_string(value : Any)"></endpoint>
### StencilOperation.from_string(.)
```wren
StencilOperation.from_string(value : Any) : unknown
```
> no docs found   


## StoreAction
```wren
import "luxe: render" for StoreAction
```
> no docs found

<endpoint module="luxe: render" class="StoreAction" signature="dont_care"></endpoint>
### StoreAction.dont_care
```wren
StoreAction.dont_care : unknown
```
> no docs found   

<endpoint module="luxe: render" class="StoreAction" signature="store"></endpoint>
### StoreAction.store
```wren
StoreAction.store : unknown
```
> no docs found   


## TextAlign
```wren
import "luxe: render" for TextAlign
```
> no docs found

<endpoint module="luxe: render" class="TextAlign" signature="left"></endpoint>
### TextAlign.left
```wren
TextAlign.left : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="center"></endpoint>
### TextAlign.center
```wren
TextAlign.center : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="right"></endpoint>
### TextAlign.right
```wren
TextAlign.right : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="top"></endpoint>
### TextAlign.top
```wren
TextAlign.top : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="bottom"></endpoint>
### TextAlign.bottom
```wren
TextAlign.bottom : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="from_string(value : Any)"></endpoint>
### TextAlign.from_string(.)
```wren
TextAlign.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAlign" signature="name(value : Any)"></endpoint>
### TextAlign.name(.)
```wren
TextAlign.name(value : Any) : unknown
```
> no docs found   


## TextAttrType
```wren
import "luxe: render" for TextAttrType
```
> no docs found

<endpoint module="luxe: render" class="TextAttrType" signature="unknown"></endpoint>
### TextAttrType.unknown
```wren
TextAttrType.unknown : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="handle32"></endpoint>
### TextAttrType.handle32
```wren
TextAttrType.handle32 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="handle64"></endpoint>
### TextAttrType.handle64
```wren
TextAttrType.handle64 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="number"></endpoint>
### TextAttrType.number
```wren
TextAttrType.number : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="string"></endpoint>
### TextAttrType.string
```wren
TextAttrType.string : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="color"></endpoint>
### TextAttrType.color
```wren
TextAttrType.color : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="float2"></endpoint>
### TextAttrType.float2
```wren
TextAttrType.float2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextAttrType" signature="name(value : Any)"></endpoint>
### TextAttrType.name(.)
```wren
TextAttrType.name(value : Any) : unknown
```
> no docs found   


## TextWrapMode
```wren
import "luxe: render" for TextWrapMode
```
> no docs found

<endpoint module="luxe: render" class="TextWrapMode" signature="unknown"></endpoint>
### TextWrapMode.unknown
```wren
TextWrapMode.unknown : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="none"></endpoint>
### TextWrapMode.none
```wren
TextWrapMode.none : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="word"></endpoint>
### TextWrapMode.word
```wren
TextWrapMode.word : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="from_string(value : Any)"></endpoint>
### TextWrapMode.from_string(.)
```wren
TextWrapMode.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="TextWrapMode" signature="name(value : Any)"></endpoint>
### TextWrapMode.name(.)
```wren
TextWrapMode.name(value : Any) : unknown
```
> no docs found   


## VertexAttr
```wren
import "luxe: render" for VertexAttr
```
> no docs found

<endpoint module="luxe: render" class="VertexAttr" signature="new(name : Any)"></endpoint>
### VertexAttr.new(.)
```wren
VertexAttr.new(name : Any) : VertexAttr
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="name"></endpoint>
### VertexAttr.name
```wren
VertexAttr.name : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="name=(v : Any)"></endpoint>
### VertexAttr.name
```wren
VertexAttr.name=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="format"></endpoint>
### VertexAttr.format
```wren
VertexAttr.format : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="format=(v : Any)"></endpoint>
### VertexAttr.format
```wren
VertexAttr.format=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="offset"></endpoint>
### VertexAttr.offset
```wren
VertexAttr.offset : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="offset=(v : Any)"></endpoint>
### VertexAttr.offset
```wren
VertexAttr.offset=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="buffer_index"></endpoint>
### VertexAttr.buffer_index
```wren
VertexAttr.buffer_index : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttr" signature="buffer_index=(v : Any)"></endpoint>
### VertexAttr.buffer_index
```wren
VertexAttr.buffer_index=(v : Any) : unknown
```
> no docs found   


## VertexAttrFormat
```wren
import "luxe: render" for VertexAttrFormat
```
> no docs found

<endpoint module="luxe: render" class="VertexAttrFormat" signature="invalid"></endpoint>
### VertexAttrFormat.invalid
```wren
VertexAttrFormat.invalid : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool"></endpoint>
### VertexAttrFormat.bool
```wren
VertexAttrFormat.bool : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool2"></endpoint>
### VertexAttrFormat.bool2
```wren
VertexAttrFormat.bool2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool3"></endpoint>
### VertexAttrFormat.bool3
```wren
VertexAttrFormat.bool3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="bool4"></endpoint>
### VertexAttrFormat.bool4
```wren
VertexAttrFormat.bool4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int"></endpoint>
### VertexAttrFormat.int
```wren
VertexAttrFormat.int : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int2"></endpoint>
### VertexAttrFormat.int2
```wren
VertexAttrFormat.int2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int3"></endpoint>
### VertexAttrFormat.int3
```wren
VertexAttrFormat.int3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="int4"></endpoint>
### VertexAttrFormat.int4
```wren
VertexAttrFormat.int4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint"></endpoint>
### VertexAttrFormat.uint
```wren
VertexAttrFormat.uint : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint2"></endpoint>
### VertexAttrFormat.uint2
```wren
VertexAttrFormat.uint2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint3"></endpoint>
### VertexAttrFormat.uint3
```wren
VertexAttrFormat.uint3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="uint4"></endpoint>
### VertexAttrFormat.uint4
```wren
VertexAttrFormat.uint4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float"></endpoint>
### VertexAttrFormat.float
```wren
VertexAttrFormat.float : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float2"></endpoint>
### VertexAttrFormat.float2
```wren
VertexAttrFormat.float2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float3"></endpoint>
### VertexAttrFormat.float3
```wren
VertexAttrFormat.float3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="float4"></endpoint>
### VertexAttrFormat.float4
```wren
VertexAttrFormat.float4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double"></endpoint>
### VertexAttrFormat.double
```wren
VertexAttrFormat.double : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double2"></endpoint>
### VertexAttrFormat.double2
```wren
VertexAttrFormat.double2 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double3"></endpoint>
### VertexAttrFormat.double3
```wren
VertexAttrFormat.double3 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="double4"></endpoint>
### VertexAttrFormat.double4
```wren
VertexAttrFormat.double4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="mat4"></endpoint>
### VertexAttrFormat.mat4
```wren
VertexAttrFormat.mat4 : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="from_string(value : Any)"></endpoint>
### VertexAttrFormat.from_string(.)
```wren
VertexAttrFormat.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexAttrFormat" signature="size_of(value : Any)"></endpoint>
### VertexAttrFormat.size_of(.)
```wren
VertexAttrFormat.size_of(value : Any) : unknown
```
> no docs found   


## VertexFormat
```wren
import "luxe: render" for VertexFormat
```
> no docs found

<endpoint module="luxe: render" class="VertexFormat" signature="new()"></endpoint>
### VertexFormat.new(.)
```wren
VertexFormat.new() : VertexFormat
```
> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="attributes"></endpoint>
### VertexFormat.attributes
```wren
VertexFormat.attributes : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="attributes=(v : Any)"></endpoint>
### VertexFormat.attributes
```wren
VertexFormat.attributes=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="layouts"></endpoint>
### VertexFormat.layouts
```wren
VertexFormat.layouts : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexFormat" signature="layouts=(v : Any)"></endpoint>
### VertexFormat.layouts
```wren
VertexFormat.layouts=(v : Any) : unknown
```
> no docs found   


## VertexInputRate
```wren
import "luxe: render" for VertexInputRate
```
> no docs found

<endpoint module="luxe: render" class="VertexInputRate" signature="vertex"></endpoint>
### VertexInputRate.vertex
```wren
VertexInputRate.vertex : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexInputRate" signature="instance"></endpoint>
### VertexInputRate.instance
```wren
VertexInputRate.instance : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexInputRate" signature="from_string(value : Any)"></endpoint>
### VertexInputRate.from_string(.)
```wren
VertexInputRate.from_string(value : Any) : unknown
```
> no docs found   


## VertexLayout
```wren
import "luxe: render" for VertexLayout
```
> no docs found

<endpoint module="luxe: render" class="VertexLayout" signature="new()"></endpoint>
### VertexLayout.new(.)
```wren
VertexLayout.new() : VertexLayout
```
> no docs found   

<endpoint module="luxe: render" class="VertexLayout" signature="stride"></endpoint>
### VertexLayout.stride
```wren
VertexLayout.stride : unknown
```
> no docs found   

<endpoint module="luxe: render" class="VertexLayout" signature="stride=(v : Any)"></endpoint>
### VertexLayout.stride
```wren
VertexLayout.stride=(v : Any) : unknown
```
> no docs found   


## Winding
```wren
import "luxe: render" for Winding
```
> no docs found

<endpoint module="luxe: render" class="Winding" signature="clockwise"></endpoint>
### Winding.clockwise
```wren
Winding.clockwise : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Winding" signature="counter_clockwise"></endpoint>
### Winding.counter_clockwise
```wren
Winding.counter_clockwise : unknown
```
> no docs found   

<endpoint module="luxe: render" class="Winding" signature="from_string(value : Any)"></endpoint>
### Winding.from_string(.)
```wren
Winding.from_string(value : Any) : unknown
```
> no docs found   

