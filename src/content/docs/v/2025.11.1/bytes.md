---
title: "luxe: bytes"
description: API version 2025.11.1
slug: "v/2025.11.1/bytes"
---
- [Byter](#byter)   
- [Bytes](#bytes)   
- [BytesReader](#bytesreader)   
- [BytesWriter](#byteswriter)   
- [Floats](#floats)   
- [Uint16](#uint16)   
- [Uint32](#uint32)   

---


## Byter
```lx
import "luxe: bytes" for Byter
```
> no docs found

<endpoint module="luxe: bytes" class="Byter" signature="pos"></endpoint>
### Byter.pos
```lx
Byter.pos : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="inner"></endpoint>
### Byter.inner
```lx
Byter.inner : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="new(size : Any)"></endpoint>
### Byter.new(.)
```lx
Byter.new(size : Any) : Byter
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="bytes()"></endpoint>
### Byter.bytes(.)
```lx
Byter.bytes() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_string(string : Any)"></endpoint>
### Byter.write_string(.)
```lx
Byter.write_string(string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_string(string : Any, length : Any)"></endpoint>
### Byter.write_string(..)
```lx
Byter.write_string(string : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_string_aligned4(string : Any)"></endpoint>
### Byter.write_string_aligned4(.)
```lx
Byter.write_string_aligned4(string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_string_aligned4(string : Any, length : Any)"></endpoint>
### Byter.write_string_aligned4(..)
```lx
Byter.write_string_aligned4(string : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_int8(value : Any)"></endpoint>
### Byter.write_int8(.)
```lx
Byter.write_int8(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_uint8(value : Any)"></endpoint>
### Byter.write_uint8(.)
```lx
Byter.write_uint8(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_int16(value : Any)"></endpoint>
### Byter.write_int16(.)
```lx
Byter.write_int16(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_int32(value : Any)"></endpoint>
### Byter.write_int32(.)
```lx
Byter.write_int32(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_int64(value : Any)"></endpoint>
### Byter.write_int64(.)
```lx
Byter.write_int64(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_uint16(value : Any)"></endpoint>
### Byter.write_uint16(.)
```lx
Byter.write_uint16(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_uint32(value : Any)"></endpoint>
### Byter.write_uint32(.)
```lx
Byter.write_uint32(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_uint64(value : Any)"></endpoint>
### Byter.write_uint64(.)
```lx
Byter.write_uint64(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_float32(value : Any)"></endpoint>
### Byter.write_float32(.)
```lx
Byter.write_float32(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_float64(value : Any)"></endpoint>
### Byter.write_float64(.)
```lx
Byter.write_float64(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Byter" signature="write_uuid(uuid : Any)"></endpoint>
### Byter.write_uuid(.)
```lx
Byter.write_uuid(uuid : Any) : unknown
```
> no docs found   


## Bytes
```lx
import "luxe: bytes" for Bytes
```
> no docs found

<endpoint module="luxe: bytes" class="Bytes" signature="new(elements : Any)"></endpoint>
### Bytes.new(.)
```lx
Bytes.new(elements : Any) : Bytes
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="length"></endpoint>
### Bytes.length
```lx
Bytes.length : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="[index : Any]"></endpoint>
### Bytes [index : Any](.)
```lx
Bytes [index : Any] : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="[index : Any]=(value : Any)"></endpoint>
### Bytes [index : Any](.)
```lx
Bytes [index : Any]=(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="from_string(string : Any)"></endpoint>
### Bytes.from_string(.)
```lx
Bytes.from_string(string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_from(other : Any)"></endpoint>
### Bytes.set_from(.)
```lx
Bytes.set_from(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="copy(other : Any, at : Any, length : Any)"></endpoint>
### Bytes.copy(...)
```lx
Bytes.copy(other : Any, at : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="copy(other : Any, to : Any, from : Any, length : Any)"></endpoint>
### Bytes.copy(....)
```lx
Bytes.copy(other : Any, to : Any, from : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_string(at : Any, value : Any)"></endpoint>
### Bytes.set_string(..)
```lx
Bytes.set_string(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_string(at : Any, value : Any, length : Any)"></endpoint>
### Bytes.set_string(...)
```lx
Bytes.set_string(at : Any, value : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_string(at : Any, length : Any)"></endpoint>
### Bytes.get_string(..)
```lx
Bytes.get_string(at : Any, length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_int8(at : Any, value : Any)"></endpoint>
### Bytes.set_int8(..)
```lx
Bytes.set_int8(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_int16(at : Any, value : Any)"></endpoint>
### Bytes.set_int16(..)
```lx
Bytes.set_int16(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_int32(at : Any, value : Any)"></endpoint>
### Bytes.set_int32(..)
```lx
Bytes.set_int32(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_int64(at : Any, value : Any)"></endpoint>
### Bytes.set_int64(..)
```lx
Bytes.set_int64(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_uint8(at : Any, value : Any)"></endpoint>
### Bytes.set_uint8(..)
```lx
Bytes.set_uint8(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_uint16(at : Any, value : Any)"></endpoint>
### Bytes.set_uint16(..)
```lx
Bytes.set_uint16(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_uint32(at : Any, value : Any)"></endpoint>
### Bytes.set_uint32(..)
```lx
Bytes.set_uint32(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_uint64(at : Any, value : Any)"></endpoint>
### Bytes.set_uint64(..)
```lx
Bytes.set_uint64(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_float32(at : Any, value : Any)"></endpoint>
### Bytes.set_float32(..)
```lx
Bytes.set_float32(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set_float64(at : Any, value : Any)"></endpoint>
### Bytes.set_float64(..)
```lx
Bytes.set_float64(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_int8(at : Any)"></endpoint>
### Bytes.get_int8(.)
```lx
Bytes.get_int8(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_int16(at : Any)"></endpoint>
### Bytes.get_int16(.)
```lx
Bytes.get_int16(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_int32(at : Any)"></endpoint>
### Bytes.get_int32(.)
```lx
Bytes.get_int32(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_int64(at : Any)"></endpoint>
### Bytes.get_int64(.)
```lx
Bytes.get_int64(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_uint8(at : Any)"></endpoint>
### Bytes.get_uint8(.)
```lx
Bytes.get_uint8(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_uint16(at : Any)"></endpoint>
### Bytes.get_uint16(.)
```lx
Bytes.get_uint16(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_uint32(at : Any)"></endpoint>
### Bytes.get_uint32(.)
```lx
Bytes.get_uint32(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_uint64(at : Any)"></endpoint>
### Bytes.get_uint64(.)
```lx
Bytes.get_uint64(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_float32(at : Any)"></endpoint>
### Bytes.get_float32(.)
```lx
Bytes.get_float32(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get_float64(at : Any)"></endpoint>
### Bytes.get_float64(.)
```lx
Bytes.get_float64(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="get(at : Any)"></endpoint>
### Bytes.get(.)
```lx
Bytes.get(at : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="set(at : Any, value : Any)"></endpoint>
### Bytes.set(..)
```lx
Bytes.set(at : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="bytes()"></endpoint>
### Bytes.bytes(.)
```lx
Bytes.bytes() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="clear()"></endpoint>
### Bytes.clear(.)
```lx
Bytes.clear() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="padding(length : Any, align : Any)"></endpoint>
### Bytes.padding(..)
```lx
Bytes.padding(length : Any, align : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="padding(length : Any)"></endpoint>
### Bytes.padding(.)
```lx
Bytes.padding(length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="iterate(iter : Any)"></endpoint>
### Bytes.iterate(.)
```lx
Bytes.iterate(iter : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Bytes" signature="iteratorValue(iter : Any)"></endpoint>
### Bytes.iteratorValue(.)
```lx
Bytes.iteratorValue(iter : Any) : unknown
```
> no docs found   


## BytesReader
```lx
import "luxe: bytes" for BytesReader
```
> no docs found

<endpoint module="luxe: bytes" class="BytesReader" signature="pos"></endpoint>
### BytesReader.pos
```lx
BytesReader.pos : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="pos=(v : Any)"></endpoint>
### BytesReader.pos
```lx
BytesReader.pos=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="bytes"></endpoint>
### BytesReader.bytes
```lx
BytesReader.bytes : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="new(source_bytes : Any)"></endpoint>
### BytesReader.new(.)
```lx
BytesReader.new(source_bytes : Any) : BytesReader
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="from_string(string : Any)"></endpoint>
### BytesReader.from_string(.)
```lx
BytesReader.from_string(string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="skip(count : Any)"></endpoint>
### BytesReader.skip(.)
```lx
BytesReader.skip(count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="check_bounds(to_read : Any)"></endpoint>
### BytesReader.check_bounds(.)
```lx
BytesReader.check_bounds(to_read : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_string(length : Any)"></endpoint>
### BytesReader.get_string(.)
```lx
BytesReader.get_string(length : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_int8()"></endpoint>
### BytesReader.get_int8(.)
```lx
BytesReader.get_int8() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_int16()"></endpoint>
### BytesReader.get_int16(.)
```lx
BytesReader.get_int16() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_int32()"></endpoint>
### BytesReader.get_int32(.)
```lx
BytesReader.get_int32() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_int64()"></endpoint>
### BytesReader.get_int64(.)
```lx
BytesReader.get_int64() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_uint8()"></endpoint>
### BytesReader.get_uint8(.)
```lx
BytesReader.get_uint8() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_uint16()"></endpoint>
### BytesReader.get_uint16(.)
```lx
BytesReader.get_uint16() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_uint32()"></endpoint>
### BytesReader.get_uint32(.)
```lx
BytesReader.get_uint32() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_uint64()"></endpoint>
### BytesReader.get_uint64(.)
```lx
BytesReader.get_uint64() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_float32()"></endpoint>
### BytesReader.get_float32(.)
```lx
BytesReader.get_float32() : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesReader" signature="get_float64()"></endpoint>
### BytesReader.get_float64(.)
```lx
BytesReader.get_float64() : unknown
```
> no docs found   


## BytesWriter
```lx
import "luxe: bytes" for BytesWriter
```
> no docs found

<endpoint module="luxe: bytes" class="BytesWriter" signature="pos"></endpoint>
### BytesWriter.pos
```lx
BytesWriter.pos : Num
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="pos=(v : Num)"></endpoint>
### BytesWriter.pos
```lx
BytesWriter.pos=(v : Num) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="count"></endpoint>
### BytesWriter.count
```lx
BytesWriter.count : Num
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="capacity"></endpoint>
### BytesWriter.capacity
```lx
BytesWriter.capacity : Num
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="bytes"></endpoint>
### BytesWriter.bytes
```lx
BytesWriter.bytes : String
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="inner"></endpoint>
### BytesWriter.inner
```lx
BytesWriter.inner : Bytes
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="new(initial_length : Num)"></endpoint>
### BytesWriter.new(.)
```lx
BytesWriter.new(initial_length : Num) : BytesWriter
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="resize(new_capacity : Num)"></endpoint>
### BytesWriter.resize(.)
```lx
BytesWriter.resize(new_capacity : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="ensure(write_length : Num)"></endpoint>
### BytesWriter.ensure(.)
```lx
BytesWriter.ensure(write_length : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_string(string : String, length : Num)"></endpoint>
### BytesWriter.write_string(..)
```lx
BytesWriter.write_string(string : String, length : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_string(string : String)"></endpoint>
### BytesWriter.write_string(.)
```lx
BytesWriter.write_string(string : String) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_string_aligned4(string : String, length : Num)"></endpoint>
### BytesWriter.write_string_aligned4(..)
```lx
BytesWriter.write_string_aligned4(string : String, length : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_string_aligned4(string : String)"></endpoint>
### BytesWriter.write_string_aligned4(.)
```lx
BytesWriter.write_string_aligned4(string : String) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_string_and_length(string : String, length : Num)"></endpoint>
### BytesWriter.write_string_and_length(..)
```lx
BytesWriter.write_string_and_length(string : String, length : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_string_and_length(string : String)"></endpoint>
### BytesWriter.write_string_and_length(.)
```lx
BytesWriter.write_string_and_length(string : String) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_int8(value : Num)"></endpoint>
### BytesWriter.write_int8(.)
```lx
BytesWriter.write_int8(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_uint8(value : Num)"></endpoint>
### BytesWriter.write_uint8(.)
```lx
BytesWriter.write_uint8(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_int16(value : Num)"></endpoint>
### BytesWriter.write_int16(.)
```lx
BytesWriter.write_int16(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_int32(value : Num)"></endpoint>
### BytesWriter.write_int32(.)
```lx
BytesWriter.write_int32(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_int64(value : Num)"></endpoint>
### BytesWriter.write_int64(.)
```lx
BytesWriter.write_int64(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_uint16(value : Num)"></endpoint>
### BytesWriter.write_uint16(.)
```lx
BytesWriter.write_uint16(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_uint32(value : Num)"></endpoint>
### BytesWriter.write_uint32(.)
```lx
BytesWriter.write_uint32(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_uint64(value : Num)"></endpoint>
### BytesWriter.write_uint64(.)
```lx
BytesWriter.write_uint64(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_float32(value : Num)"></endpoint>
### BytesWriter.write_float32(.)
```lx
BytesWriter.write_float32(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_float64(value : Num)"></endpoint>
### BytesWriter.write_float64(.)
```lx
BytesWriter.write_float64(value : Num) : None
```
> no docs found   

<endpoint module="luxe: bytes" class="BytesWriter" signature="write_uuid(uuid : String)"></endpoint>
### BytesWriter.write_uuid(.)
```lx
BytesWriter.write_uuid(uuid : String) : None
```
> no docs found   


## Floats
```lx
import "luxe: bytes" for Floats
```
> no docs found

<endpoint module="luxe: bytes" class="Floats" signature="new(elements : Any)"></endpoint>
### Floats.new(.)
```lx
Floats.new(elements : Any) : Floats
```
> Create a new Floats instance that can store the amount of elements specified.   

<endpoint module="luxe: bytes" class="Floats" signature="length"></endpoint>
### Floats.length
```lx
Floats.length : unknown
```
> Get the size of the array in bytes. Since a float is 4 bytes, this should always be `value.size * 4`.   

<endpoint module="luxe: bytes" class="Floats" signature="capacity"></endpoint>
### Floats.capacity
```lx
Floats.capacity : unknown
```
> Get the capacity of the underlying array. When resizing up to this amount of elements, the array does not need to be reallocated. You can ignore this most of the time.   

<endpoint module="luxe: bytes" class="Floats" signature="size"></endpoint>
### Floats.size
```lx
Floats.size : unknown
```
> Get the amount of elements in the array.   

<endpoint module="luxe: bytes" class="Floats" signature="[index : Any]"></endpoint>
### Floats [index : Any](.)
```lx
Floats [index : Any] : unknown
```
> Get the float value at a specific index.   

<endpoint module="luxe: bytes" class="Floats" signature="[index : Any]=(value : Any)"></endpoint>
### Floats [index : Any](.)
```lx
Floats [index : Any]=(value : Any) : unknown
```
> Set the float value at a specific index.   

<endpoint module="luxe: bytes" class="Floats" signature="resize(elements : Any)"></endpoint>
### Floats.resize(.)
```lx
Floats.resize(elements : Any) : unknown
```
> Resize array to new size.   

<endpoint module="luxe: bytes" class="Floats" signature="get(at : Any)"></endpoint>
### Floats.get(.)
```lx
Floats.get(at : Any) : unknown
```
> Get the float value at a specific index.   

<endpoint module="luxe: bytes" class="Floats" signature="set(at : Any, value : Any)"></endpoint>
### Floats.set(..)
```lx
Floats.set(at : Any, value : Any) : unknown
```
> Set the float value at a specific index.   

<endpoint module="luxe: bytes" class="Floats" signature="set(list : Any, at : Any, list_offset : Any, count : Any)"></endpoint>
### Floats.set(....)
```lx
Floats.set(list : Any, at : Any, list_offset : Any, count : Any) : unknown
```
> Copy a part of a list into this array. This will grow the array if nessecary.   

<endpoint module="luxe: bytes" class="Floats" signature="set(list : Any)"></endpoint>
### Floats.set(.)
```lx
Floats.set(list : Any) : unknown
```
> Set the array to have the contents of a list. The array will be resized to have the same count as the list   

<endpoint module="luxe: bytes" class="Floats" signature="ortho(left : Any, top : Any, right : Any, bottom : Any, near : Any, far : Any)"></endpoint>
### Floats.ortho(......)
```lx
Floats.ortho(left : Any, top : Any, right : Any, bottom : Any, near : Any, far : Any) : unknown
```
> Makes the array a 4x4 (16 elements) orthographic projection matrix for camera rendering.   

<endpoint module="luxe: bytes" class="Floats" signature="perspective(fov_vertical : Any, aspect : Any, near : Any, far : Any)"></endpoint>
### Floats.perspective(....)
```lx
Floats.perspective(fov_vertical : Any, aspect : Any, near : Any, far : Any) : unknown
```
> Makes the array a 4x4 (16 elements) perspective projection matrix for camera rendering.   

<endpoint module="luxe: bytes" class="Floats" signature="transform(px : Any, py : Any, pz : Any, rx : Any, ry : Any, rz : Any, sx : Any, sy : Any, sz : Any)"></endpoint>
### Floats.transform(.........)
```lx
Floats.transform(px : Any, py : Any, pz : Any, rx : Any, ry : Any, rz : Any, sx : Any, sy : Any, sz : Any) : unknown
```
> Makes the array a 4x4 (16 elements) model/transform matrix.   

<endpoint module="luxe: bytes" class="Floats" signature="iterate(iter : Any)"></endpoint>
### Floats.iterate(.)
```lx
Floats.iterate(iter : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Floats" signature="iteratorValue(iter : Any)"></endpoint>
### Floats.iteratorValue(.)
```lx
Floats.iteratorValue(iter : Any) : unknown
```
> no docs found   


## Uint16
```lx
import "luxe: bytes" for Uint16
```
> Tight uint16 array. Handeled internally as a C++ array, but will properly be deallocated by the wren garbage collector.

<endpoint module="luxe: bytes" class="Uint16" signature="new(elements : Any)"></endpoint>
### Uint16.new(.)
```lx
Uint16.new(elements : Any) : Uint16
```
> Create an array with the requested amount of elements   

<endpoint module="luxe: bytes" class="Uint16" signature="length"></endpoint>
### Uint16.length
```lx
Uint16.length : unknown
```
> Get the size of the array in bytes. This is twice the amount of elements it can hold since each element takes up 2 bytes.   

<endpoint module="luxe: bytes" class="Uint16" signature="[index : Any]"></endpoint>
### Uint16 [index : Any](.)
```lx
Uint16 [index : Any] : unknown
```
> Get the int value at a specific index.   

<endpoint module="luxe: bytes" class="Uint16" signature="[index : Any]=(value : Any)"></endpoint>
### Uint16 [index : Any](.)
```lx
Uint16 [index : Any]=(value : Any) : unknown
```
> Set the int value at a specific index.   

<endpoint module="luxe: bytes" class="Uint16" signature="get(at : Any)"></endpoint>
### Uint16.get(.)
```lx
Uint16.get(at : Any) : unknown
```
> Get the int value at a specific index.   

<endpoint module="luxe: bytes" class="Uint16" signature="set(at : Any, value : Any)"></endpoint>
### Uint16.set(..)
```lx
Uint16.set(at : Any, value : Any) : unknown
```
> Set the int value at a specific index.   

<endpoint module="luxe: bytes" class="Uint16" signature="set(list : Any, at : Any, list_offset : Any, count : Any)"></endpoint>
### Uint16.set(....)
```lx
Uint16.set(list : Any, at : Any, list_offset : Any, count : Any) : unknown
```
> Copy a part of a list into this array. This will fail if trying to write outside the array bounds.   

<endpoint module="luxe: bytes" class="Uint16" signature="set(list : Any)"></endpoint>
### Uint16.set(.)
```lx
Uint16.set(list : Any) : unknown
```
> Set the array to have the contents of a list. This will fail if trying to write outside the array bounds and will leave elements unchanged if list is shorter than array.   

<endpoint module="luxe: bytes" class="Uint16" signature="iterate(iter : Any)"></endpoint>
### Uint16.iterate(.)
```lx
Uint16.iterate(iter : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Uint16" signature="iteratorValue(iter : Any)"></endpoint>
### Uint16.iteratorValue(.)
```lx
Uint16.iteratorValue(iter : Any) : unknown
```
> no docs found   


## Uint32
```lx
import "luxe: bytes" for Uint32
```
> Tight uint32 array. Handeled internally as a C++ array, but will properly be deallocated by the wren garbage collector.

<endpoint module="luxe: bytes" class="Uint32" signature="new(elements : Any)"></endpoint>
### Uint32.new(.)
```lx
Uint32.new(elements : Any) : Uint32
```
> Create an array with the requested amount of elements   

<endpoint module="luxe: bytes" class="Uint32" signature="length"></endpoint>
### Uint32.length
```lx
Uint32.length : unknown
```
> Get the size of the array in bytes. This is twice the amount of elements it can hold since each element takes up 2 bytes.   

<endpoint module="luxe: bytes" class="Uint32" signature="[index : Any]"></endpoint>
### Uint32 [index : Any](.)
```lx
Uint32 [index : Any] : unknown
```
> Get the int value at a specific index.   

<endpoint module="luxe: bytes" class="Uint32" signature="[index : Any]=(value : Any)"></endpoint>
### Uint32 [index : Any](.)
```lx
Uint32 [index : Any]=(value : Any) : unknown
```
> Set the int value at a specific index.   

<endpoint module="luxe: bytes" class="Uint32" signature="get(at : Any)"></endpoint>
### Uint32.get(.)
```lx
Uint32.get(at : Any) : unknown
```
> Get the int value at a specific index.   

<endpoint module="luxe: bytes" class="Uint32" signature="set(at : Any, value : Any)"></endpoint>
### Uint32.set(..)
```lx
Uint32.set(at : Any, value : Any) : unknown
```
> Set the int value at a specific index.   

<endpoint module="luxe: bytes" class="Uint32" signature="set(list : Any, at : Any, list_offset : Any, count : Any)"></endpoint>
### Uint32.set(....)
```lx
Uint32.set(list : Any, at : Any, list_offset : Any, count : Any) : unknown
```
> Copy a part of a list into this array. This will fail if trying to write outside the array bounds.   

<endpoint module="luxe: bytes" class="Uint32" signature="set(list : Any)"></endpoint>
### Uint32.set(.)
```lx
Uint32.set(list : Any) : unknown
```
> Set the array to have the contents of a list. This will fail if trying to write outside the array bounds and will leave elements unchanged if list is shorter than array.   

<endpoint module="luxe: bytes" class="Uint32" signature="iterate(iter : Any)"></endpoint>
### Uint32.iterate(.)
```lx
Uint32.iterate(iter : Any) : unknown
```
> no docs found   

<endpoint module="luxe: bytes" class="Uint32" signature="iteratorValue(iter : Any)"></endpoint>
### Uint32.iteratorValue(.)
```lx
Uint32.iteratorValue(iter : Any) : unknown
```
> no docs found   

