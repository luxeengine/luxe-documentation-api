---
title: "luxe: regex"
description: API version 2025.11.1
---
## `luxe: regex{:lx}` module

- [RegexInfo](#regexinfo)   
- [RegexMatch](#regexmatch)   
- [RegexSubMatch](#regexsubmatch)   

---


### RegexInfo
`import "luxe: regex" for RegexInfo{:lx}`
> A regular expression result, containing one or more matches

- [matched](#RegexInfo.matched)
- [match](#RegexInfo.match)
- [[index : Num]](#RegexInfo.[index : Num])


---

<endpoint module="luxe: regex" class="RegexInfo" signature="matched"></endpoint>
<h4 class="signature_head">RegexInfo.matched</h4><a class="signature-arity" href="#RegexInfo.matched" title="Permanent link">1</a><signature id="RegexInfo.matched">

```lx
RegexInfo.matched : Bool
```
</signature>

> True if there was any match   

<endpoint module="luxe: regex" class="RegexInfo" signature="match"></endpoint>
<h4 class="signature_head">RegexInfo.match</h4><a class="signature-arity" href="#RegexInfo.match" title="Permanent link">1</a><signature id="RegexInfo.match">

```lx
RegexInfo.match : List
```
</signature>

> Returns the match results, a List of `RegexMatch`. Only valid if `matched` is true   

<endpoint module="luxe: regex" class="RegexInfo" signature="[index : Num]"></endpoint>
<h4 class="signature_head">RegexInfo [index : Num]</h4><a class="signature-arity" href="#RegexInfo.[index : Num]" title="Permanent link">1</a><signature id="RegexInfo.[index : Num]">

```lx
RegexInfo [index : Num] : RegexMatch
```
</signature>

> Convenience to access a specific match by index   


### RegexMatch
`import "luxe: regex" for RegexMatch{:lx}`
> A single match in a regular expression result.

- [subcount](#RegexMatch.subcount)
- [string](#RegexMatch.string)
- [offset](#RegexMatch.offset)
- [count](#RegexMatch.count)
- [index](#RegexMatch.index)
- [[index : Num]](#RegexMatch.[index : Num])


---

<endpoint module="luxe: regex" class="RegexMatch" signature="subcount"></endpoint>
<h4 class="signature_head">RegexMatch.subcount</h4><a class="signature-arity" href="#RegexMatch.subcount" title="Permanent link">1</a><signature id="RegexMatch.subcount">

```lx
RegexMatch.subcount : Num
```
</signature>

> Number of sub matches (groups), not including 0 which is the full match   

<endpoint module="luxe: regex" class="RegexMatch" signature="string"></endpoint>
<h4 class="signature_head">RegexMatch.string</h4><a class="signature-arity" href="#RegexMatch.string" title="Permanent link">1</a><signature id="RegexMatch.string">

```lx
RegexMatch.string : String
```
</signature>

> The matched string   

<endpoint module="luxe: regex" class="RegexMatch" signature="offset"></endpoint>
<h4 class="signature_head">RegexMatch.offset</h4><a class="signature-arity" href="#RegexMatch.offset" title="Permanent link">1</a><signature id="RegexMatch.offset">

```lx
RegexMatch.offset : Num
```
</signature>

> The offset of the match in the original string   

<endpoint module="luxe: regex" class="RegexMatch" signature="count"></endpoint>
<h4 class="signature_head">RegexMatch.count</h4><a class="signature-arity" href="#RegexMatch.count" title="Permanent link">1</a><signature id="RegexMatch.count">

```lx
RegexMatch.count : Num
```
</signature>

> The length of the match string   

<endpoint module="luxe: regex" class="RegexMatch" signature="index"></endpoint>
<h4 class="signature_head">RegexMatch.index</h4><a class="signature-arity" href="#RegexMatch.index" title="Permanent link">1</a><signature id="RegexMatch.index">

```lx
RegexMatch.index : Num
```
</signature>

> Index of this match in the match results   

<endpoint module="luxe: regex" class="RegexMatch" signature="[index : Num]"></endpoint>
<h4 class="signature_head">RegexMatch [index : Num]</h4><a class="signature-arity" href="#RegexMatch.[index : Num]" title="Permanent link">1</a><signature id="RegexMatch.[index : Num]">

```lx
RegexMatch [index : Num] : RegexSubMatch
```
</signature>

> Access to a specific group/sub match by index. 0 is the full match, groups are 1-indexed   


### RegexSubMatch
`import "luxe: regex" for RegexSubMatch{:lx}`
> A single group/sub match in a regular expression match.

- [count](#RegexSubMatch.count)
- [offset](#RegexSubMatch.offset)
- [string](#RegexSubMatch.string)
- [index](#RegexSubMatch.index)
- [[index : Num]](#RegexSubMatch.[index : Num])


---

<endpoint module="luxe: regex" class="RegexSubMatch" signature="count"></endpoint>
<h4 class="signature_head">RegexSubMatch.count</h4><a class="signature-arity" href="#RegexSubMatch.count" title="Permanent link">1</a><signature id="RegexSubMatch.count">

```lx
RegexSubMatch.count : Num
```
</signature>

> The length of the sub/group   

<endpoint module="luxe: regex" class="RegexSubMatch" signature="offset"></endpoint>
<h4 class="signature_head">RegexSubMatch.offset</h4><a class="signature-arity" href="#RegexSubMatch.offset" title="Permanent link">1</a><signature id="RegexSubMatch.offset">

```lx
RegexSubMatch.offset : Num
```
</signature>

> The offset of the sub/group in the original match   

<endpoint module="luxe: regex" class="RegexSubMatch" signature="string"></endpoint>
<h4 class="signature_head">RegexSubMatch.string</h4><a class="signature-arity" href="#RegexSubMatch.string" title="Permanent link">1</a><signature id="RegexSubMatch.string">

```lx
RegexSubMatch.string : String
```
</signature>

> The string of the sub/group   

<endpoint module="luxe: regex" class="RegexSubMatch" signature="index"></endpoint>
<h4 class="signature_head">RegexSubMatch.index</h4><a class="signature-arity" href="#RegexSubMatch.index" title="Permanent link">1</a><signature id="RegexSubMatch.index">

```lx
RegexSubMatch.index : Num
```
</signature>

> The index of this sub/group in the match   

<endpoint module="luxe: regex" class="RegexSubMatch" signature="[index : Num]"></endpoint>
<h4 class="signature_head">RegexSubMatch [index : Num]</h4><a class="signature-arity" href="#RegexSubMatch.[index : Num]" title="Permanent link">1</a><signature id="RegexSubMatch.[index : Num]">

```lx
RegexSubMatch [index : Num] : Any
```
</signature>

> Returns info about this sub match by index. 0 returns `count`, 1 returns `offset`, 2 returns `string`   

