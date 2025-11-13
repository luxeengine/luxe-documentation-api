---
title: "luxe: color"
description: API version 2025.11.1
slug: "v/2025.11.1/color"
---
- [Color](#color)   

---


## Color
```lx
import "luxe: color" for Color
```
> Access to color APIs. Note that this is not done at all.

<endpoint module="luxe: color" class="Color" signature="white"></endpoint>
### Color.white
```lx
Color.white : Color
```
> A constant for [1,1,1,1]. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="black"></endpoint>
### Color.black
```lx
Color.black : Color
```
> A constant for [0,0,0,1]. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="clear"></endpoint>
### Color.clear
```lx
Color.clear : Color
```
> A constant for [0,0,0,0]. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="pink"></endpoint>
### Color.pink
```lx
Color.pink : Color
```
> The luxe pink color used everywhere. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="red"></endpoint>
### Color.red
```lx
Color.red : Color
```
> The luxe red color. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="green"></endpoint>
### Color.green
```lx
Color.green : Color
```
> The luxe green color. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="blue"></endpoint>
### Color.blue
```lx
Color.blue : Color
```
> The luxe blue color. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="hex(value : Num)"></endpoint>
### Color.hex(.)
```lx
Color.hex(value : Num) : Color
```
> Returns a new color from the specified hex color value.
> 
>   ```js
>   var color = Color.hex(0xFF00AA)
>   ```   

<endpoint module="luxe: color" class="Color" signature="clone(other : Color, alpha : Num)"></endpoint>
### Color.clone(..)
```lx
Color.clone(other : Color, alpha : Num) : unknown
```
> Returns a new color from the specified color with a different alpha.
> 
>   ```js
>   var other = Color.hex(0xFF00AA)
>   var color = Color.clone(other, 0.5)
>   ```   

<endpoint module="luxe: color" class="Color" signature="hex_string(color : Color)"></endpoint>
### Color.hex_string(.)
```lx
Color.hex_string(color : Color) : String
```
> Returns a hex string from the specified color.
> 
>     Color.hex_string(Color.white) //#FFFFFF   

<endpoint module="luxe: color" class="Color" signature="hex_string(color : Color, alpha : Bool)"></endpoint>
### Color.hex_string(..)
```lx
Color.hex_string(color : Color, alpha : Bool) : String
```
> Returns a hex string from the specified color.
> If `alpha` is true, includes the alpha component.
> 
>     Color.hex_string(Color.white, true) //#FFFFFFFF   

<endpoint module="luxe: color" class="Color" signature="hex(value : Num, alpha : Num)"></endpoint>
### Color.hex(..)
```lx
Color.hex(value : Num, alpha : Num) : Color
```
> Returns a new color from the specified hex color value, with the specified alpha value.
> 
>     var color = Color.hex(0xFF00AA, 0.5)   

<endpoint module="luxe: color" class="Color" signature="hex_set(color : Color, hex : Num)"></endpoint>
### Color.hex_set(..)
```lx
Color.hex_set(color : Color, hex : Num) : unknown
```
> Set an existing color to the specified hex color value.
> 
>   ```js
>   var color = Color.hex_set(0xFF00AA)
>   ```   

<endpoint module="luxe: color" class="Color" signature="hex_color(color : Color)"></endpoint>
### Color.hex_color(.)
```lx
Color.hex_color(color : Color) : Num
```
> Get the hex color value of a color   

<endpoint module="luxe: color" class="Color" signature="hex_color(color : Color, include_alpha : Bool)"></endpoint>
### Color.hex_color(..)
```lx
Color.hex_color(color : Color, include_alpha : Bool) : Num
```
> Get the hex color value of a color, either 3 byte or 4 byte with alpha   

<endpoint module="luxe: color" class="Color" signature="linear_to_srgb(color : Color)"></endpoint>
### Color.linear_to_srgb(.)
```lx
Color.linear_to_srgb(color : Color) : Color
```
> Convert a linear color to sRGB (2.2 gamma)   

<endpoint module="luxe: color" class="Color" signature="srgb_to_linear(color : Color)"></endpoint>
### Color.srgb_to_linear(.)
```lx
Color.srgb_to_linear(color : Color) : Color
```
> Convert an sRGB color to linear (2.2 gamma)   

<endpoint module="luxe: color" class="Color" signature="lerp(from : Color, to : Color, t : Num)"></endpoint>
### Color.lerp(...)
```lx
Color.lerp(from : Color, to : Color, t : Num) : Color
```
> Linearly interpolate between two colors, using `t` as the distance between the two in 0...1 range.
> To blend two colors half and half, you'd use `lerp(from, to, 0.5)`. If `t` is `0`, `from` is returned
> and if `t` is `1`, `to` is returned.   

<endpoint module="luxe: color" class="Color" signature="lerp(from : Color, to : Color, t : Num, into : Color)"></endpoint>
### Color.lerp(....)
```lx
Color.lerp(from : Color, to : Color, t : Num, into : Color) : unknown
```
> Linearly interpolate between two colors, storing the result in the existing color `into`. 
> `t` is the distance between the two in 0...1 range. To blend two colors half and half, 
> you'd use `lerp(from, to, 0.5)`. If `t` is `0`, `from` is returned and if `t` is `1`, `to` is returned.   

<endpoint module="luxe: color" class="Color" signature="rgb2hsv(rgb : Color)"></endpoint>
### Color.rgb2hsv(.)
```lx
Color.rgb2hsv(rgb : Color) : Color
```
> Convert from an RGB format color to an HSV format.   

<endpoint module="luxe: color" class="Color" signature="hsv2rgb(hsv : Color)"></endpoint>
### Color.hsv2rgb(.)
```lx
Color.hsv2rgb(hsv : Color) : Color
```
> Convert an HSV format color to an RGB format.   

<endpoint module="luxe: color" class="Color" signature="color_from_hue(hue : Num)"></endpoint>
### Color.color_from_hue(.)
```lx
Color.color_from_hue(hue : Num) : Color
```
> Create a color from the given hue, in a 0...1 range. 
> Values outside 0...1 are wrapped into 0...1 range.   

<endpoint module="luxe: color" class="Color" signature="linear_srgb_to_oklab(r : Num, g : Num, b : Num)"></endpoint>
### Color.linear_srgb_to_oklab(...)
```lx
Color.linear_srgb_to_oklab(r : Num, g : Num, b : Num) : unknown
```
> no docs found   

<endpoint module="luxe: color" class="Color" signature="oklab_to_linear_srgb(L : Num, a : Num, b : Num)"></endpoint>
### Color.oklab_to_linear_srgb(...)
```lx
Color.oklab_to_linear_srgb(L : Num, a : Num, b : Num) : unknown
```
> no docs found   

<endpoint module="luxe: color" class="Color" signature="okhsl_to_srgb(h : Num, s : Num, l : Num)"></endpoint>
### Color.okhsl_to_srgb(...)
```lx
Color.okhsl_to_srgb(h : Num, s : Num, l : Num) : unknown
```
> no docs found   

<endpoint module="luxe: color" class="Color" signature="srgb_to_okhsl(r : Num, g : Num, b : Num)"></endpoint>
### Color.srgb_to_okhsl(...)
```lx
Color.srgb_to_okhsl(r : Num, g : Num, b : Num) : unknown
```
> no docs found   

<endpoint module="luxe: color" class="Color" signature="okhsv_to_srgb(h : Num, s : Num, v : Num)"></endpoint>
### Color.okhsv_to_srgb(...)
```lx
Color.okhsv_to_srgb(h : Num, s : Num, v : Num) : unknown
```
> no docs found   

<endpoint module="luxe: color" class="Color" signature="srgb_to_okhsv(r : Num, g : Num, b : Num)"></endpoint>
### Color.srgb_to_okhsv(...)
```lx
Color.srgb_to_okhsv(r : Num, g : Num, b : Num) : unknown
```
> no docs found   

<endpoint module="luxe: color" class="Color" signature="find_cusp(a : Any, b : Any)"></endpoint>
### Color.find_cusp(..)
```lx
Color.find_cusp(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: color" class="Color" signature="compute_max_saturation(a : Num, b : Num)"></endpoint>
### Color.compute_max_saturation(..)
```lx
Color.compute_max_saturation(a : Num, b : Num) : unknown
```
> no docs found   

<endpoint module="luxe: color" class="Color" signature="find_gamut_intersection(a : Any, b : Any, L1 : Any, C1 : Any, L0 : Any, cusp : Any)"></endpoint>
### Color.find_gamut_intersection(......)
```lx
Color.find_gamut_intersection(a : Any, b : Any, L1 : Any, C1 : Any, L0 : Any, cusp : Any) : unknown
```
> no docs found   

