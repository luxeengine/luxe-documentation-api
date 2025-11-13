---
title: "luxe: fuzzy"
description: API version 2025.11.1
---
## `luxe: fuzzy{:lx}` module

- [Fuzzy](#fuzzy)   
- [FuzzyResult](#fuzzyresult)   
- [FuzzyScore](#fuzzyscore)   

---


### Fuzzy
`import "luxe: fuzzy" for Fuzzy{:lx}`
> no docs found

- [sorted](#Fuzzy.sorted+2)(**pattern**: `String{:lx}`, **items**: `List{:lx}`)
- [matches](#Fuzzy.matches+2)(**pattern**: `String{:lx}`, **items**: `List{:lx}`)
- [matches](#Fuzzy.matches+3)(**pattern**: `String{:lx}`, **items**: `List{:lx}`, **fn**: `Fn{:lx}`)
- [match](#Fuzzy.match+2)(**pattern**: `String{:lx}`, **str**: `String{:lx}`)
- [match_at](#Fuzzy.match_at+4)(**pattern**: `List{:lx}`, **str**: `List{:lx}`, **pattern_idx**: `Any{:lx}`, **str_idx**: `Any{:lx}`)
- [match_simple](#Fuzzy.match_simple+2)(**pattern**: `String{:lx}`, **str**: `String{:lx}`)
- [is_camel_case](#Fuzzy.is_camel_case+2)(**c0**: `Num{:lx}`, **c1**: `Num{:lx}`)
- [match_recursive](#Fuzzy.match_recursive+10)(**pattern**: `List{:lx}`, **str**: `List{:lx}`, **pattern_idx**: `Num{:lx}`, **str_idx**: `Num{:lx}`, **srcMatches**: `List{:lx}`, **matches**: `List{:lx}`, **maxMatches**: `Num{:lx}`, **nextMatch**: `Num{:lx}`, **count**: `Num{:lx}`, **limit**: `Num{:lx}`)


---

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="sorted(pattern : String, items : List)"></endpoint>
<h4 class="signature_head">Fuzzy.sorted</h4><a class="signature-arity" href="#Fuzzy.sorted+2" title="Permanent link">2</a><signature id="Fuzzy.sorted+2">

```lx
Fuzzy.sorted(pattern : String, items : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="matches(pattern : String, items : List)"></endpoint>
<h4 class="signature_head">Fuzzy.matches</h4><a class="signature-arity" href="#Fuzzy.matches+2" title="Permanent link">2</a><signature id="Fuzzy.matches+2">

```lx
Fuzzy.matches(pattern : String, items : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="matches(pattern : String, items : List, fn : Fn)"></endpoint>
<h4 class="signature_head">Fuzzy.matches</h4><a class="signature-arity" href="#Fuzzy.matches+3" title="Permanent link">3</a><signature id="Fuzzy.matches+3">

```lx
Fuzzy.matches(pattern : String, items : List, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="match(pattern : String, str : String)"></endpoint>
<h4 class="signature_head">Fuzzy.match</h4><a class="signature-arity" href="#Fuzzy.match+2" title="Permanent link">2</a><signature id="Fuzzy.match+2">

```lx
Fuzzy.match(pattern : String, str : String) : Result
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="match_at(pattern : List, str : List, pattern_idx : Any, str_idx : Any)"></endpoint>
<h4 class="signature_head">Fuzzy.match_at</h4><a class="signature-arity" href="#Fuzzy.match_at+4" title="Permanent link">4</a><signature id="Fuzzy.match_at+4">

```lx
Fuzzy.match_at(pattern : List, str : List, pattern_idx : Any, str_idx : Any) : Bool
```
</signature>

> returns true if character at two positions is the same   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="match_simple(pattern : String, str : String)"></endpoint>
<h4 class="signature_head">Fuzzy.match_simple</h4><a class="signature-arity" href="#Fuzzy.match_simple+2" title="Permanent link">2</a><signature id="Fuzzy.match_simple+2">

```lx
Fuzzy.match_simple(pattern : String, str : String) : Bool
```
</signature>

> returns true if each character in pattern is found sequentially within str   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="is_camel_case(c0 : Num, c1 : Num)"></endpoint>
<h4 class="signature_head">Fuzzy.is_camel_case</h4><a class="signature-arity" href="#Fuzzy.is_camel_case+2" title="Permanent link">2</a><signature id="Fuzzy.is_camel_case+2">

```lx
Fuzzy.is_camel_case(c0 : Num, c1 : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="Fuzzy" signature="match_recursive(pattern : List, str : List, pattern_idx : Num, str_idx : Num, srcMatches : List, matches : List, maxMatches : Num, nextMatch : Num, count : Num, limit : Num)"></endpoint>
<h4 class="signature_head">Fuzzy.match_recursive</h4><a class="signature-arity" href="#Fuzzy.match_recursive+10" title="Permanent link">10</a><signature id="Fuzzy.match_recursive+10">

```lx
Fuzzy.match_recursive(pattern : List, str : List, pattern_idx : Num, str_idx : Num, srcMatches : List, matches : List, maxMatches : Num, nextMatch : Num, count : Num, limit : Num) : Result
```
</signature>

> no docs found   


### FuzzyResult
`import "luxe: fuzzy" for FuzzyResult{:lx}`
> no docs found

- [item](#FuzzyResult.item)
- [score](#FuzzyResult.score)
- [matches](#FuzzyResult.matches)
- [new](#FuzzyResult.new+3)(**item**: `String{:lx}`, **score**: `Num{:lx}`, **matches**: `List{:lx}`)


---

<endpoint module="luxe: fuzzy" class="FuzzyResult" signature="item"></endpoint>
<h4 class="signature_head">FuzzyResult.item</h4><a class="signature-arity" href="#FuzzyResult.item" title="Permanent link">1</a><signature id="FuzzyResult.item">

```lx
FuzzyResult.item : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyResult" signature="score"></endpoint>
<h4 class="signature_head">FuzzyResult.score</h4><a class="signature-arity" href="#FuzzyResult.score" title="Permanent link">1</a><signature id="FuzzyResult.score">

```lx
FuzzyResult.score : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyResult" signature="matches"></endpoint>
<h4 class="signature_head">FuzzyResult.matches</h4><a class="signature-arity" href="#FuzzyResult.matches" title="Permanent link">1</a><signature id="FuzzyResult.matches">

```lx
FuzzyResult.matches : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyResult" signature="new(item : String, score : Num, matches : List)"></endpoint>
<h4 class="signature_head">FuzzyResult.new</h4><a class="signature-arity" href="#FuzzyResult.new+3" title="Permanent link">3</a><signature id="FuzzyResult.new+3">

```lx
FuzzyResult.new(item : String, score : Num, matches : List) : FuzzyResult
```
</signature>

> no docs found   


### FuzzyScore
`import "luxe: fuzzy" for FuzzyScore{:lx}`
> no docs found

- [sequential_bonus](#FuzzyScore.sequential_bonus)
- [separator_bonus](#FuzzyScore.separator_bonus)
- [camel_bonus](#FuzzyScore.camel_bonus)
- [first_letter_bonus](#FuzzyScore.first_letter_bonus)
- [leading_letter_penalty](#FuzzyScore.leading_letter_penalty)
- [max_leading_letter_penalty](#FuzzyScore.max_leading_letter_penalty)
- [unmatched_letter_penalty](#FuzzyScore.unmatched_letter_penalty)


---

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="sequential_bonus"></endpoint>
<h4 class="signature_head">FuzzyScore.sequential_bonus</h4><a class="signature-arity" href="#FuzzyScore.sequential_bonus" title="Permanent link">1</a><signature id="FuzzyScore.sequential_bonus">

```lx
FuzzyScore.sequential_bonus : Num
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="separator_bonus"></endpoint>
<h4 class="signature_head">FuzzyScore.separator_bonus</h4><a class="signature-arity" href="#FuzzyScore.separator_bonus" title="Permanent link">1</a><signature id="FuzzyScore.separator_bonus">

```lx
FuzzyScore.separator_bonus : Num
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="camel_bonus"></endpoint>
<h4 class="signature_head">FuzzyScore.camel_bonus</h4><a class="signature-arity" href="#FuzzyScore.camel_bonus" title="Permanent link">1</a><signature id="FuzzyScore.camel_bonus">

```lx
FuzzyScore.camel_bonus : Num
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="first_letter_bonus"></endpoint>
<h4 class="signature_head">FuzzyScore.first_letter_bonus</h4><a class="signature-arity" href="#FuzzyScore.first_letter_bonus" title="Permanent link">1</a><signature id="FuzzyScore.first_letter_bonus">

```lx
FuzzyScore.first_letter_bonus : Num
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="leading_letter_penalty"></endpoint>
<h4 class="signature_head">FuzzyScore.leading_letter_penalty</h4><a class="signature-arity" href="#FuzzyScore.leading_letter_penalty" title="Permanent link">1</a><signature id="FuzzyScore.leading_letter_penalty">

```lx
FuzzyScore.leading_letter_penalty : Num
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="max_leading_letter_penalty"></endpoint>
<h4 class="signature_head">FuzzyScore.max_leading_letter_penalty</h4><a class="signature-arity" href="#FuzzyScore.max_leading_letter_penalty" title="Permanent link">1</a><signature id="FuzzyScore.max_leading_letter_penalty">

```lx
FuzzyScore.max_leading_letter_penalty : Num
```
</signature>

> no docs found   

<endpoint module="luxe: fuzzy" class="FuzzyScore" signature="unmatched_letter_penalty"></endpoint>
<h4 class="signature_head">FuzzyScore.unmatched_letter_penalty</h4><a class="signature-arity" href="#FuzzyScore.unmatched_letter_penalty" title="Permanent link">1</a><signature id="FuzzyScore.unmatched_letter_penalty">

```lx
FuzzyScore.unmatched_letter_penalty : Num
```
</signature>

> no docs found   

