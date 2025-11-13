---
title: "luxe: fuzzy"
description: API version 2025.11.1
slug: "v/2025.11.1/fuzzy"
---
- [Fuzzy](#fuzzy)   
- [FuzzyResult](#fuzzyresult)   
- [FuzzyScore](#fuzzyscore)   

---


## Fuzzy
```lx
import "luxe: fuzzy" for Fuzzy
```
> no docs found

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="sorted(pattern : String, items : List)"></endpoint>
### Fuzzy.sorted(..)
```lx
Fuzzy.sorted(pattern : String, items : List) : unknown
```
> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="matches(pattern : String, items : List)"></endpoint>
### Fuzzy.matches(..)
```lx
Fuzzy.matches(pattern : String, items : List) : unknown
```
> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="matches(pattern : String, items : List, fn : Fn)"></endpoint>
### Fuzzy.matches(...)
```lx
Fuzzy.matches(pattern : String, items : List, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="match(pattern : String, str : String)"></endpoint>
### Fuzzy.match(..)
```lx
Fuzzy.match(pattern : String, str : String) : Result
```
> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="match_at(pattern : List, str : List, pattern_idx : Any, str_idx : Any)"></endpoint>
### Fuzzy.match_at(....)
```lx
Fuzzy.match_at(pattern : List, str : List, pattern_idx : Any, str_idx : Any) : Bool
```
> returns true if character at two positions is the same   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="match_simple(pattern : String, str : String)"></endpoint>
### Fuzzy.match_simple(..)
```lx
Fuzzy.match_simple(pattern : String, str : String) : Bool
```
> returns true if each character in pattern is found sequentially within str   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="is_camel_case(c0 : Num, c1 : Num)"></endpoint>
### Fuzzy.is_camel_case(..)
```lx
Fuzzy.is_camel_case(c0 : Num, c1 : Num) : unknown
```
> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="match_recursive(pattern : List, str : List, pattern_idx : Num, str_idx : Num, srcMatches : List, matches : List, maxMatches : Num, nextMatch : Num, count : Num, limit : Num)"></endpoint>
### Fuzzy.match_recursive(..........)
```lx
Fuzzy.match_recursive(pattern : List, str : List, pattern_idx : Num, str_idx : Num, srcMatches : List, matches : List, maxMatches : Num, nextMatch : Num, count : Num, limit : Num) : Result
```
> no docs found   


## FuzzyResult
```lx
import "luxe: fuzzy" for FuzzyResult
```
> no docs found

<endpoint module="luxe: fuzzy" class="FuzzyResult" signature="item"></endpoint>
### FuzzyResult.item
```lx
FuzzyResult.item : unknown
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyResult" signature="score"></endpoint>
### FuzzyResult.score
```lx
FuzzyResult.score : unknown
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyResult" signature="matches"></endpoint>
### FuzzyResult.matches
```lx
FuzzyResult.matches : unknown
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyResult" signature="new(item : String, score : Num, matches : List)"></endpoint>
### FuzzyResult.new(...)
```lx
FuzzyResult.new(item : String, score : Num, matches : List) : FuzzyResult
```
> no docs found   


## FuzzyScore
```lx
import "luxe: fuzzy" for FuzzyScore
```
> no docs found

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="sequential_bonus"></endpoint>
### FuzzyScore.sequential_bonus
```lx
FuzzyScore.sequential_bonus : Num
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="separator_bonus"></endpoint>
### FuzzyScore.separator_bonus
```lx
FuzzyScore.separator_bonus : Num
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="camel_bonus"></endpoint>
### FuzzyScore.camel_bonus
```lx
FuzzyScore.camel_bonus : Num
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="first_letter_bonus"></endpoint>
### FuzzyScore.first_letter_bonus
```lx
FuzzyScore.first_letter_bonus : Num
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="leading_letter_penalty"></endpoint>
### FuzzyScore.leading_letter_penalty
```lx
FuzzyScore.leading_letter_penalty : Num
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="max_leading_letter_penalty"></endpoint>
### FuzzyScore.max_leading_letter_penalty
```lx
FuzzyScore.max_leading_letter_penalty : Num
```
> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="unmatched_letter_penalty"></endpoint>
### FuzzyScore.unmatched_letter_penalty
```lx
FuzzyScore.unmatched_letter_penalty : Num
```
> no docs found   

