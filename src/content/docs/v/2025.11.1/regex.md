---
title: "luxe: regex"
description: API version 2025.11.1
slug: "v/2025.11.1/regex"
---
- [RegexInfo](#regexinfo)   
- [RegexMatch](#regexmatch)   
- [RegexSubMatch](#regexsubmatch)   

---


## RegexInfo
```lx
import "luxe: regex" for RegexInfo
```
> A regular expression result, containing one or more matches

<endpoint module="luxe: regex" class="RegexInfo" signature="matched"></endpoint>
### RegexInfo.matched
```lx
RegexInfo.matched : Bool
```
> True if there was any match   

<endpoint module="luxe: regex" class="RegexInfo" signature="match"></endpoint>
### RegexInfo.match
```lx
RegexInfo.match : List
```
> Returns the match results, a List of `RegexMatch`. Only valid if `matched` is true   

<endpoint module="luxe: regex" class="RegexInfo" signature="[index : Num]"></endpoint>
### RegexInfo [index : Num](.)
```lx
RegexInfo [index : Num] : RegexMatch
```
> Convenience to access a specific match by index   


## RegexMatch
```lx
import "luxe: regex" for RegexMatch
```
> A single match in a regular expression result.

<endpoint module="luxe: regex" class="RegexMatch" signature="subcount"></endpoint>
### RegexMatch.subcount
```lx
RegexMatch.subcount : Num
```
> Number of sub matches (groups), not including 0 which is the full match   

<endpoint module="luxe: regex" class="RegexMatch" signature="string"></endpoint>
### RegexMatch.string
```lx
RegexMatch.string : String
```
> The matched string   

<endpoint module="luxe: regex" class="RegexMatch" signature="offset"></endpoint>
### RegexMatch.offset
```lx
RegexMatch.offset : Num
```
> The offset of the match in the original string   

<endpoint module="luxe: regex" class="RegexMatch" signature="count"></endpoint>
### RegexMatch.count
```lx
RegexMatch.count : Num
```
> The length of the match string   

<endpoint module="luxe: regex" class="RegexMatch" signature="index"></endpoint>
### RegexMatch.index
```lx
RegexMatch.index : Num
```
> Index of this match in the match results   

<endpoint module="luxe: regex" class="RegexMatch" signature="[index : Num]"></endpoint>
### RegexMatch [index : Num](.)
```lx
RegexMatch [index : Num] : RegexSubMatch
```
> Access to a specific group/sub match by index. 0 is the full match, groups are 1-indexed   


## RegexSubMatch
```lx
import "luxe: regex" for RegexSubMatch
```
> A single group/sub match in a regular expression match.

<endpoint module="luxe: regex" class="RegexSubMatch" signature="count"></endpoint>
### RegexSubMatch.count
```lx
RegexSubMatch.count : Num
```
> The length of the sub/group   

<endpoint module="luxe: regex" class="RegexSubMatch" signature="offset"></endpoint>
### RegexSubMatch.offset
```lx
RegexSubMatch.offset : Num
```
> The offset of the sub/group in the original match   

<endpoint module="luxe: regex" class="RegexSubMatch" signature="string"></endpoint>
### RegexSubMatch.string
```lx
RegexSubMatch.string : String
```
> The string of the sub/group   

<endpoint module="luxe: regex" class="RegexSubMatch" signature="index"></endpoint>
### RegexSubMatch.index
```lx
RegexSubMatch.index : Num
```
> The index of this sub/group in the match   

<endpoint module="luxe: regex" class="RegexSubMatch" signature="[index : Num]"></endpoint>
### RegexSubMatch [index : Num](.)
```lx
RegexSubMatch [index : Num] : Any
```
> Returns info about this sub match by index. 0 returns `count`, 1 returns `offset`, 2 returns `string`   

