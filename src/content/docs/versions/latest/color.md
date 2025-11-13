---
title: "luxe: color"
description: API version 2025.11.1
---
## `luxe: color{:lx}` module

- [Color](#color)   

---


### Color
`import "luxe: color" for Color{:lx}`
> Access to color APIs. Note that this is not done at all.

- [white](#Color.white)
- [black](#Color.black)
- [clear](#Color.clear)
- [pink](#Color.pink)
- [red](#Color.red)
- [green](#Color.green)
- [blue](#Color.blue)
- [hex](#Color.hex)(**value**: `Num{:lx}`)
- [clone](#Color.clone+2)(**other**: `Color{:lx}`, **alpha**: `Num{:lx}`)
- [hex_string](#Color.hex_string)(**color**: `Color{:lx}`)
- [hex_string](#Color.hex_string+2)(**color**: `Color{:lx}`, **alpha**: `Bool{:lx}`)
- [hex](#Color.hex+2)(**value**: `Num{:lx}`, **alpha**: `Num{:lx}`)
- [hex_set](#Color.hex_set+2)(**color**: `Color{:lx}`, **hex**: `Num{:lx}`)
- [hex_color](#Color.hex_color)(**color**: `Color{:lx}`)
- [hex_color](#Color.hex_color+2)(**color**: `Color{:lx}`, **include_alpha**: `Bool{:lx}`)
- [linear_to_srgb](#Color.linear_to_srgb)(**color**: `Color{:lx}`)
- [srgb_to_linear](#Color.srgb_to_linear)(**color**: `Color{:lx}`)
- [lerp](#Color.lerp+3)(**from**: `Color{:lx}`, **to**: `Color{:lx}`, **t**: `Num{:lx}`)
- [lerp](#Color.lerp+4)(**from**: `Color{:lx}`, **to**: `Color{:lx}`, **t**: `Num{:lx}`, **into**: `Color{:lx}`)
- [rgb2hsv](#Color.rgb2hsv)(**rgb**: `Color{:lx}`)
- [hsv2rgb](#Color.hsv2rgb)(**hsv**: `Color{:lx}`)
- [color_from_hue](#Color.color_from_hue)(**hue**: `Num{:lx}`)
- [linear_srgb_to_oklab](#Color.linear_srgb_to_oklab+3)(**r**: `Num{:lx}`, **g**: `Num{:lx}`, **b**: `Num{:lx}`)
- [oklab_to_linear_srgb](#Color.oklab_to_linear_srgb+3)(**L**: `Num{:lx}`, **a**: `Num{:lx}`, **b**: `Num{:lx}`)
- [okhsl_to_srgb](#Color.okhsl_to_srgb+3)(**h**: `Num{:lx}`, **s**: `Num{:lx}`, **l**: `Num{:lx}`)
- [srgb_to_okhsl](#Color.srgb_to_okhsl+3)(**r**: `Num{:lx}`, **g**: `Num{:lx}`, **b**: `Num{:lx}`)
- [okhsv_to_srgb](#Color.okhsv_to_srgb+3)(**h**: `Num{:lx}`, **s**: `Num{:lx}`, **v**: `Num{:lx}`)
- [srgb_to_okhsv](#Color.srgb_to_okhsv+3)(**r**: `Num{:lx}`, **g**: `Num{:lx}`, **b**: `Num{:lx}`)
- [find_cusp](#Color.find_cusp+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [compute_max_saturation](#Color.compute_max_saturation+2)(**a**: `Num{:lx}`, **b**: `Num{:lx}`)
- [find_gamut_intersection](#Color.find_gamut_intersection+6)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **L1**: `Any{:lx}`, **C1**: `Any{:lx}`, **L0**: `Any{:lx}`, **cusp**: `Any{:lx}`)


---

<endpoint module="luxe: color" class="Color" signature="white"></endpoint>
<h4 class="signature_head">Color.white</h4><a class="signature-arity" href="#Color.white" title="Permanent link">1</a><signature id="Color.white">

```lx
Color.white : Color
```
</signature>

> A constant for [1,1,1,1]. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="black"></endpoint>
<h4 class="signature_head">Color.black</h4><a class="signature-arity" href="#Color.black" title="Permanent link">1</a><signature id="Color.black">

```lx
Color.black : Color
```
</signature>

> A constant for [0,0,0,1]. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="clear"></endpoint>
<h4 class="signature_head">Color.clear</h4><a class="signature-arity" href="#Color.clear" title="Permanent link">1</a><signature id="Color.clear">

```lx
Color.clear : Color
```
</signature>

> A constant for [0,0,0,0]. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="pink"></endpoint>
<h4 class="signature_head">Color.pink</h4><a class="signature-arity" href="#Color.pink" title="Permanent link">1</a><signature id="Color.pink">

```lx
Color.pink : Color
```
</signature>

> The luxe pink color used everywhere. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="red"></endpoint>
<h4 class="signature_head">Color.red</h4><a class="signature-arity" href="#Color.red" title="Permanent link">1</a><signature id="Color.red">

```lx
Color.red : Color
```
</signature>

> The luxe red color. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="green"></endpoint>
<h4 class="signature_head">Color.green</h4><a class="signature-arity" href="#Color.green" title="Permanent link">1</a><signature id="Color.green">

```lx
Color.green : Color
```
</signature>

> The luxe green color. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="blue"></endpoint>
<h4 class="signature_head">Color.blue</h4><a class="signature-arity" href="#Color.blue" title="Permanent link">1</a><signature id="Color.blue">

```lx
Color.blue : Color
```
</signature>

> The luxe blue color. Note: don't modify the return value.   

<endpoint module="luxe: color" class="Color" signature="hex(value : Num)"></endpoint>
<h4 class="signature_head">Color.hex</h4><a class="signature-arity" href="#Color.hex" title="Permanent link">1</a><signature id="Color.hex">

```lx
Color.hex(value : Num) : Color
```
</signature>

> Returns a new color from the specified hex color value.
> 
>   ```js
>   var color = Color.hex(0xFF00AA)
>   ```   

<endpoint module="luxe: color" class="Color" signature="clone(other : Color, alpha : Num)"></endpoint>
<h4 class="signature_head">Color.clone</h4><a class="signature-arity" href="#Color.clone+2" title="Permanent link">2</a><signature id="Color.clone+2">

```lx
Color.clone(other : Color, alpha : Num) : unknown
```
</signature>

> Returns a new color from the specified color with a different alpha.
> 
>   ```js
>   var other = Color.hex(0xFF00AA)
>   var color = Color.clone(other, 0.5)
>   ```   

<endpoint module="luxe: color" class="Color" signature="hex_string(color : Color)"></endpoint>
<h4 class="signature_head">Color.hex_string</h4><a class="signature-arity" href="#Color.hex_string" title="Permanent link">1</a><signature id="Color.hex_string">

```lx
Color.hex_string(color : Color) : String
```
</signature>

> Returns a hex string from the specified color.
> 
>     Color.hex_string(Color.white) //#FFFFFF   

<endpoint module="luxe: color" class="Color" signature="hex_string(color : Color, alpha : Bool)"></endpoint>
<h4 class="signature_head">Color.hex_string</h4><a class="signature-arity" href="#Color.hex_string+2" title="Permanent link">2</a><signature id="Color.hex_string+2">

```lx
Color.hex_string(color : Color, alpha : Bool) : String
```
</signature>

> Returns a hex string from the specified color.
> If `alpha` is true, includes the alpha component.
> 
>     Color.hex_string(Color.white, true) //#FFFFFFFF   

<endpoint module="luxe: color" class="Color" signature="hex(value : Num, alpha : Num)"></endpoint>
<h4 class="signature_head">Color.hex</h4><a class="signature-arity" href="#Color.hex+2" title="Permanent link">2</a><signature id="Color.hex+2">

```lx
Color.hex(value : Num, alpha : Num) : Color
```
</signature>

> Returns a new color from the specified hex color value, with the specified alpha value.
> 
>     var color = Color.hex(0xFF00AA, 0.5)   

<endpoint module="luxe: color" class="Color" signature="hex_set(color : Color, hex : Num)"></endpoint>
<h4 class="signature_head">Color.hex_set</h4><a class="signature-arity" href="#Color.hex_set+2" title="Permanent link">2</a><signature id="Color.hex_set+2">

```lx
Color.hex_set(color : Color, hex : Num) : unknown
```
</signature>

> Set an existing color to the specified hex color value.
> 
>   ```js
>   var color = Color.hex_set(0xFF00AA)
>   ```   

<endpoint module="luxe: color" class="Color" signature="hex_color(color : Color)"></endpoint>
<h4 class="signature_head">Color.hex_color</h4><a class="signature-arity" href="#Color.hex_color" title="Permanent link">1</a><signature id="Color.hex_color">

```lx
Color.hex_color(color : Color) : Num
```
</signature>

> Get the hex color value of a color   

<endpoint module="luxe: color" class="Color" signature="hex_color(color : Color, include_alpha : Bool)"></endpoint>
<h4 class="signature_head">Color.hex_color</h4><a class="signature-arity" href="#Color.hex_color+2" title="Permanent link">2</a><signature id="Color.hex_color+2">

```lx
Color.hex_color(color : Color, include_alpha : Bool) : Num
```
</signature>

> Get the hex color value of a color, either 3 byte or 4 byte with alpha   

<endpoint module="luxe: color" class="Color" signature="linear_to_srgb(color : Color)"></endpoint>
<h4 class="signature_head">Color.linear_to_srgb</h4><a class="signature-arity" href="#Color.linear_to_srgb" title="Permanent link">1</a><signature id="Color.linear_to_srgb">

```lx
Color.linear_to_srgb(color : Color) : Color
```
</signature>

> Convert a linear color to sRGB (2.2 gamma)   

<endpoint module="luxe: color" class="Color" signature="srgb_to_linear(color : Color)"></endpoint>
<h4 class="signature_head">Color.srgb_to_linear</h4><a class="signature-arity" href="#Color.srgb_to_linear" title="Permanent link">1</a><signature id="Color.srgb_to_linear">

```lx
Color.srgb_to_linear(color : Color) : Color
```
</signature>

> Convert an sRGB color to linear (2.2 gamma)   

<endpoint module="luxe: color" class="Color" signature="lerp(from : Color, to : Color, t : Num)"></endpoint>
<h4 class="signature_head">Color.lerp</h4><a class="signature-arity" href="#Color.lerp+3" title="Permanent link">3</a><signature id="Color.lerp+3">

```lx
Color.lerp(from : Color, to : Color, t : Num) : Color
```
</signature>

> Linearly interpolate between two colors, using `t` as the distance between the two in 0...1 range.
> To blend two colors half and half, you'd use `lerp(from, to, 0.5)`. If `t` is `0`, `from` is returned
> and if `t` is `1`, `to` is returned.   

<endpoint module="luxe: color" class="Color" signature="lerp(from : Color, to : Color, t : Num, into : Color)"></endpoint>
<h4 class="signature_head">Color.lerp</h4><a class="signature-arity" href="#Color.lerp+4" title="Permanent link">4</a><signature id="Color.lerp+4">

```lx
Color.lerp(from : Color, to : Color, t : Num, into : Color) : unknown
```
</signature>

> Linearly interpolate between two colors, storing the result in the existing color `into`. 
> `t` is the distance between the two in 0...1 range. To blend two colors half and half, 
> you'd use `lerp(from, to, 0.5)`. If `t` is `0`, `from` is returned and if `t` is `1`, `to` is returned.   

<endpoint module="luxe: color" class="Color" signature="rgb2hsv(rgb : Color)"></endpoint>
<h4 class="signature_head">Color.rgb2hsv</h4><a class="signature-arity" href="#Color.rgb2hsv" title="Permanent link">1</a><signature id="Color.rgb2hsv">

```lx
Color.rgb2hsv(rgb : Color) : Color
```
</signature>

> Convert from an RGB format color to an HSV format.   

<endpoint module="luxe: color" class="Color" signature="hsv2rgb(hsv : Color)"></endpoint>
<h4 class="signature_head">Color.hsv2rgb</h4><a class="signature-arity" href="#Color.hsv2rgb" title="Permanent link">1</a><signature id="Color.hsv2rgb">

```lx
Color.hsv2rgb(hsv : Color) : Color
```
</signature>

> Convert an HSV format color to an RGB format.   

<endpoint module="luxe: color" class="Color" signature="color_from_hue(hue : Num)"></endpoint>
<h4 class="signature_head">Color.color_from_hue</h4><a class="signature-arity" href="#Color.color_from_hue" title="Permanent link">1</a><signature id="Color.color_from_hue">

```lx
Color.color_from_hue(hue : Num) : Color
```
</signature>

> Create a color from the given hue, in a 0...1 range. 
> Values outside 0...1 are wrapped into 0...1 range.   

<endpoint module="luxe: color" class="Color" signature="linear_srgb_to_oklab(r : Num, g : Num, b : Num)"></endpoint>
<h4 class="signature_head">Color.linear_srgb_to_oklab</h4><a class="signature-arity" href="#Color.linear_srgb_to_oklab+3" title="Permanent link">3</a><signature id="Color.linear_srgb_to_oklab+3">

```lx
Color.linear_srgb_to_oklab(r : Num, g : Num, b : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: color" class="Color" signature="oklab_to_linear_srgb(L : Num, a : Num, b : Num)"></endpoint>
<h4 class="signature_head">Color.oklab_to_linear_srgb</h4><a class="signature-arity" href="#Color.oklab_to_linear_srgb+3" title="Permanent link">3</a><signature id="Color.oklab_to_linear_srgb+3">

```lx
Color.oklab_to_linear_srgb(L : Num, a : Num, b : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: color" class="Color" signature="okhsl_to_srgb(h : Num, s : Num, l : Num)"></endpoint>
<h4 class="signature_head">Color.okhsl_to_srgb</h4><a class="signature-arity" href="#Color.okhsl_to_srgb+3" title="Permanent link">3</a><signature id="Color.okhsl_to_srgb+3">

```lx
Color.okhsl_to_srgb(h : Num, s : Num, l : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: color" class="Color" signature="srgb_to_okhsl(r : Num, g : Num, b : Num)"></endpoint>
<h4 class="signature_head">Color.srgb_to_okhsl</h4><a class="signature-arity" href="#Color.srgb_to_okhsl+3" title="Permanent link">3</a><signature id="Color.srgb_to_okhsl+3">

```lx
Color.srgb_to_okhsl(r : Num, g : Num, b : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: color" class="Color" signature="okhsv_to_srgb(h : Num, s : Num, v : Num)"></endpoint>
<h4 class="signature_head">Color.okhsv_to_srgb</h4><a class="signature-arity" href="#Color.okhsv_to_srgb+3" title="Permanent link">3</a><signature id="Color.okhsv_to_srgb+3">

```lx
Color.okhsv_to_srgb(h : Num, s : Num, v : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: color" class="Color" signature="srgb_to_okhsv(r : Num, g : Num, b : Num)"></endpoint>
<h4 class="signature_head">Color.srgb_to_okhsv</h4><a class="signature-arity" href="#Color.srgb_to_okhsv+3" title="Permanent link">3</a><signature id="Color.srgb_to_okhsv+3">

```lx
Color.srgb_to_okhsv(r : Num, g : Num, b : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: color" class="Color" signature="find_cusp(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">Color.find_cusp</h4><a class="signature-arity" href="#Color.find_cusp+2" title="Permanent link">2</a><signature id="Color.find_cusp+2">

```lx
Color.find_cusp(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: color" class="Color" signature="compute_max_saturation(a : Num, b : Num)"></endpoint>
<h4 class="signature_head">Color.compute_max_saturation</h4><a class="signature-arity" href="#Color.compute_max_saturation+2" title="Permanent link">2</a><signature id="Color.compute_max_saturation+2">

```lx
Color.compute_max_saturation(a : Num, b : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: color" class="Color" signature="find_gamut_intersection(a : Any, b : Any, L1 : Any, C1 : Any, L0 : Any, cusp : Any)"></endpoint>
<h4 class="signature_head">Color.find_gamut_intersection</h4><a class="signature-arity" href="#Color.find_gamut_intersection+6" title="Permanent link">6</a><signature id="Color.find_gamut_intersection+6">

```lx
Color.find_gamut_intersection(a : Any, b : Any, L1 : Any, C1 : Any, L0 : Any, cusp : Any) : unknown
```
</signature>

> no docs found   

