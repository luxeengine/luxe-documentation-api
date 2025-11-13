---
title: "luxe: semver"
description: API version 2025.11.1
---
## `luxe: semver{:lx}` module

- [Comparator](#comparator)   
- [SemVer](#semver)   
- [SemVerRange](#semverrange)   
- [SemVerSubset](#semversubset)   
- [SemVerSubsetInterval](#semversubsetinterval)   

---


### Comparator
`import "luxe: semver" for Comparator{:lx}`
> no docs found

- [value](#Comparator.value)
- [semver](#Comparator.semver)
- [operator](#Comparator.operator)
- [loose](#Comparator.loose)
- [any](#Comparator.any)
- [new](#Comparator.new)(**comp**: `Any{:lx}`)
- [new](#Comparator.new+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [create](#Comparator.create+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [inverted](#Comparator.inverted)()
- [test](#Comparator.test)(**version**: `Any{:lx}`)
- [parse](#Comparator.parse)(**comp**: `Any{:lx}`)
- [debug](#Comparator.debug)(**a**: `Any{:lx}`)
- [intersects](#Comparator.intersects)(**comp**: `Any{:lx}`)
- [intersects](#Comparator.intersects+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)


---

<endpoint module="luxe: semver" class="Comparator" signature="value"></endpoint>
<h4 class="signature_head">Comparator.value</h4><a class="signature-arity" href="#Comparator.value" title="Permanent link">1</a><signature id="Comparator.value">

```lx
Comparator.value : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="semver"></endpoint>
<h4 class="signature_head">Comparator.semver</h4><a class="signature-arity" href="#Comparator.semver" title="Permanent link">1</a><signature id="Comparator.semver">

```lx
Comparator.semver : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="operator"></endpoint>
<h4 class="signature_head">Comparator.operator</h4><a class="signature-arity" href="#Comparator.operator" title="Permanent link">1</a><signature id="Comparator.operator">

```lx
Comparator.operator : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="loose"></endpoint>
<h4 class="signature_head">Comparator.loose</h4><a class="signature-arity" href="#Comparator.loose" title="Permanent link">1</a><signature id="Comparator.loose">

```lx
Comparator.loose : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="any"></endpoint>
<h4 class="signature_head">Comparator.any</h4><a class="signature-arity" href="#Comparator.any" title="Permanent link">1</a><signature id="Comparator.any">

```lx
Comparator.any : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="new(comp : Any)"></endpoint>
<h4 class="signature_head">Comparator.new</h4><a class="signature-arity" href="#Comparator.new" title="Permanent link">1</a><signature id="Comparator.new">

```lx
Comparator.new(comp : Any) : Comparator
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="new(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">Comparator.new</h4><a class="signature-arity" href="#Comparator.new+2" title="Permanent link">2</a><signature id="Comparator.new+2">

```lx
Comparator.new(comp : Any, loose : Any) : Comparator
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="create(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">Comparator.create</h4><a class="signature-arity" href="#Comparator.create+2" title="Permanent link">2</a><signature id="Comparator.create+2">

```lx
Comparator.create(comp : Any, loose : Any) : Comparator
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="inverted()"></endpoint>
<h4 class="signature_head">Comparator.inverted</h4><a class="signature-arity" href="#Comparator.inverted" title="Permanent link">1</a><signature id="Comparator.inverted">

```lx
Comparator.inverted() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="test(version : Any)"></endpoint>
<h4 class="signature_head">Comparator.test</h4><a class="signature-arity" href="#Comparator.test" title="Permanent link">1</a><signature id="Comparator.test">

```lx
Comparator.test(version : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="parse(comp : Any)"></endpoint>
<h4 class="signature_head">Comparator.parse</h4><a class="signature-arity" href="#Comparator.parse" title="Permanent link">1</a><signature id="Comparator.parse">

```lx
Comparator.parse(comp : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="debug(a : Any)"></endpoint>
<h4 class="signature_head">Comparator.debug</h4><a class="signature-arity" href="#Comparator.debug" title="Permanent link">1</a><signature id="Comparator.debug">

```lx
Comparator.debug(a : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="intersects(comp : Any)"></endpoint>
<h4 class="signature_head">Comparator.intersects</h4><a class="signature-arity" href="#Comparator.intersects" title="Permanent link">1</a><signature id="Comparator.intersects">

```lx
Comparator.intersects(comp : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="intersects(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">Comparator.intersects</h4><a class="signature-arity" href="#Comparator.intersects+2" title="Permanent link">2</a><signature id="Comparator.intersects+2">

```lx
Comparator.intersects(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   


### SemVer
`import "luxe: semver" for SemVer{:lx}`
> no docs found

- [SPEC](#SemVer.SPEC)
- [loose](#SemVer.loose)
- [version](#SemVer.version)
- [major](#SemVer.major)
- [minor](#SemVer.minor)
- [patch](#SemVer.patch)
- [build](#SemVer.build)
- [prerelease](#SemVer.prerelease)
- [raw](#SemVer.raw)
- [new](#SemVer.new)(**version**: `Any{:lx}`)
- [new](#SemVer.new+2)(**version**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [create](#SemVer.create+2)(**version**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [format](#SemVer.format)()
- [!=](#SemVer.!=)(**other**: `Any{:lx}`)
- [==](#SemVer.==)(**other**: `Any{:lx}`)
- [<=](#SemVer.<=)(**other**: `Any{:lx}`)
- [>=](#SemVer.>=)(**other**: `Any{:lx}`)
- [>](#SemVer.>)(**other**: `Any{:lx}`)
- [<](#SemVer.<)(**other**: `Any{:lx}`)
- [inc](#SemVer.inc)(**release**: `Any{:lx}`)
- [inc](#SemVer.inc+2)(**release**: `Any{:lx}`, **identifier**: `Any{:lx}`)
- [compare](#SemVer.compare)(**other**: `Any{:lx}`)
- [inc](#SemVer.inc+2)(**version**: `Any{:lx}`, **release**: `Any{:lx}`)
- [inc](#SemVer.inc+3)(**version**: `Any{:lx}`, **release**: `Any{:lx}`, **identifier**: `Any{:lx}`)
- [inc](#SemVer.inc+4)(**version**: `Any{:lx}`, **release**: `Any{:lx}`, **loose**: `Any{:lx}`, **identifier**: `Any{:lx}`)
- [parse](#SemVer.parse)(**version**: `Any{:lx}`)
- [parse](#SemVer.parse+2)(**version**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [valid](#SemVer.valid)(**version**: `Any{:lx}`)
- [valid](#SemVer.valid+2)(**version**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [clean](#SemVer.clean)(**version**: `Any{:lx}`)
- [clean](#SemVer.clean+2)(**version**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [diff](#SemVer.diff+2)(**version1**: `Any{:lx}`, **version2**: `Any{:lx}`)
- [major](#SemVer.major)(**a**: `Any{:lx}`)
- [major](#SemVer.major+2)(**a**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [minor](#SemVer.minor)(**a**: `Any{:lx}`)
- [minor](#SemVer.minor+2)(**a**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [patch](#SemVer.patch)(**a**: `Any{:lx}`)
- [patch](#SemVer.patch+2)(**a**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [prerelease](#SemVer.prerelease)(**a**: `Any{:lx}`)
- [prerelease](#SemVer.prerelease+2)(**a**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [compare](#SemVer.compare+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [compare](#SemVer.compare+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [rcompare](#SemVer.rcompare+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [rcompare](#SemVer.rcompare+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [sort](#SemVer.sort)(**list**: `Any{:lx}`)
- [sort](#SemVer.sort+2)(**list**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [rsort](#SemVer.rsort)(**list**: `Any{:lx}`)
- [rsort](#SemVer.rsort+2)(**list**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [gt](#SemVer.gt+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [gt](#SemVer.gt+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [lt](#SemVer.lt+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [lt](#SemVer.lt+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [gte](#SemVer.gte+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [gte](#SemVer.gte+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [lte](#SemVer.lte+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [lte](#SemVer.lte+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [eq](#SemVer.eq+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [eq](#SemVer.eq+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [neq](#SemVer.neq+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [neq](#SemVer.neq+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [cmp](#SemVer.cmp+3)(**a**: `Any{:lx}`, **op**: `Any{:lx}`, **b**: `Any{:lx}`)
- [cmp](#SemVer.cmp+4)(**a**: `Any{:lx}`, **op**: `Any{:lx}`, **b**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [max_satisfying](#SemVer.max_satisfying+2)(**versions**: `Any{:lx}`, **range**: `Any{:lx}`)
- [max_satisfying](#SemVer.max_satisfying+3)(**versions**: `Any{:lx}`, **range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [min_satisfying](#SemVer.min_satisfying+2)(**versions**: `Any{:lx}`, **range**: `Any{:lx}`)
- [min_satisfying](#SemVer.min_satisfying+3)(**versions**: `Any{:lx}`, **range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [satisfies](#SemVer.satisfies+2)(**version**: `Any{:lx}`, **range**: `Any{:lx}`)
- [satisfies](#SemVer.satisfies+3)(**version**: `Any{:lx}`, **range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [valid_range](#SemVer.valid_range)(**range**: `Any{:lx}`)
- [valid_range](#SemVer.valid_range+2)(**range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [ltr](#SemVer.ltr+2)(**version**: `Any{:lx}`, **range**: `Any{:lx}`)
- [ltr](#SemVer.ltr+3)(**version**: `Any{:lx}`, **range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [gtr](#SemVer.gtr+2)(**version**: `Any{:lx}`, **range**: `Any{:lx}`)
- [gtr](#SemVer.gtr+3)(**version**: `Any{:lx}`, **range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [outside](#SemVer.outside+3)(**version**: `Any{:lx}`, **range**: `Any{:lx}`, **hilo**: `Any{:lx}`)
- [outside](#SemVer.outside+4)(**version**: `Any{:lx}`, **range**: `Any{:lx}`, **hilo**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [debug](#SemVer.debug)(**a**: `Any{:lx}`)
- [compare_main](#SemVer.compare_main)(**other**: `Any{:lx}`)
- [first_not_zero](#SemVer.first_not_zero+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [first_not_zero](#SemVer.first_not_zero+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`)
- [compare_pre](#SemVer.compare_pre)(**other**: `Any{:lx}`)
- [compare_identifiers](#SemVer.compare_identifiers+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)


---

<endpoint module="luxe: semver" class="SemVer" signature="SPEC"></endpoint>
<h4 class="signature_head">SemVer.SPEC</h4><a class="signature-arity" href="#SemVer.SPEC" title="Permanent link">1</a><signature id="SemVer.SPEC">

```lx
SemVer.SPEC : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="loose"></endpoint>
<h4 class="signature_head">SemVer.loose</h4><a class="signature-arity" href="#SemVer.loose" title="Permanent link">1</a><signature id="SemVer.loose">

```lx
SemVer.loose : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="version"></endpoint>
<h4 class="signature_head">SemVer.version</h4><a class="signature-arity" href="#SemVer.version" title="Permanent link">1</a><signature id="SemVer.version">

```lx
SemVer.version : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="major"></endpoint>
<h4 class="signature_head">SemVer.major</h4><a class="signature-arity" href="#SemVer.major" title="Permanent link">1</a><signature id="SemVer.major">

```lx
SemVer.major : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="minor"></endpoint>
<h4 class="signature_head">SemVer.minor</h4><a class="signature-arity" href="#SemVer.minor" title="Permanent link">1</a><signature id="SemVer.minor">

```lx
SemVer.minor : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="patch"></endpoint>
<h4 class="signature_head">SemVer.patch</h4><a class="signature-arity" href="#SemVer.patch" title="Permanent link">1</a><signature id="SemVer.patch">

```lx
SemVer.patch : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="build"></endpoint>
<h4 class="signature_head">SemVer.build</h4><a class="signature-arity" href="#SemVer.build" title="Permanent link">1</a><signature id="SemVer.build">

```lx
SemVer.build : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="prerelease"></endpoint>
<h4 class="signature_head">SemVer.prerelease</h4><a class="signature-arity" href="#SemVer.prerelease" title="Permanent link">1</a><signature id="SemVer.prerelease">

```lx
SemVer.prerelease : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="raw"></endpoint>
<h4 class="signature_head">SemVer.raw</h4><a class="signature-arity" href="#SemVer.raw" title="Permanent link">1</a><signature id="SemVer.raw">

```lx
SemVer.raw : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="new(version : Any)"></endpoint>
<h4 class="signature_head">SemVer.new</h4><a class="signature-arity" href="#SemVer.new" title="Permanent link">1</a><signature id="SemVer.new">

```lx
SemVer.new(version : Any) : SemVer
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="new(version : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.new</h4><a class="signature-arity" href="#SemVer.new+2" title="Permanent link">2</a><signature id="SemVer.new+2">

```lx
SemVer.new(version : Any, loose : Any) : SemVer
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="create(version : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.create</h4><a class="signature-arity" href="#SemVer.create+2" title="Permanent link">2</a><signature id="SemVer.create+2">

```lx
SemVer.create(version : Any, loose : Any) : SemVer
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="format()"></endpoint>
<h4 class="signature_head">SemVer.format</h4><a class="signature-arity" href="#SemVer.format" title="Permanent link">1</a><signature id="SemVer.format">

```lx
SemVer.format() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="!=(other : Any)"></endpoint>
<h4 class="signature_head">SemVer !=</h4><a class="signature-arity" href="#SemVer.!=" title="Permanent link">1</a><signature id="SemVer.!=">

```lx
SemVer !=(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="==(other : Any)"></endpoint>
<h4 class="signature_head">SemVer ==</h4><a class="signature-arity" href="#SemVer.==" title="Permanent link">1</a><signature id="SemVer.==">

```lx
SemVer ==(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="<=(other : Any)"></endpoint>
<h4 class="signature_head">SemVer <=</h4><a class="signature-arity" href="#SemVer.<=" title="Permanent link">1</a><signature id="SemVer.<=">

```lx
SemVer <=(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature=">=(other : Any)"></endpoint>
<h4 class="signature_head">SemVer >=</h4><a class="signature-arity" href="#SemVer.>=" title="Permanent link">1</a><signature id="SemVer.>=">

```lx
SemVer >=(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature=">(other : Any)"></endpoint>
<h4 class="signature_head">SemVer ></h4><a class="signature-arity" href="#SemVer.>" title="Permanent link">1</a><signature id="SemVer.>">

```lx
SemVer >(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="<(other : Any)"></endpoint>
<h4 class="signature_head">SemVer <</h4><a class="signature-arity" href="#SemVer.<" title="Permanent link">1</a><signature id="SemVer.<">

```lx
SemVer <(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(release : Any)"></endpoint>
<h4 class="signature_head">SemVer.inc</h4><a class="signature-arity" href="#SemVer.inc" title="Permanent link">1</a><signature id="SemVer.inc">

```lx
SemVer.inc(release : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(release : Any, identifier : Any)"></endpoint>
<h4 class="signature_head">SemVer.inc</h4><a class="signature-arity" href="#SemVer.inc+2" title="Permanent link">2</a><signature id="SemVer.inc+2">

```lx
SemVer.inc(release : Any, identifier : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare(other : Any)"></endpoint>
<h4 class="signature_head">SemVer.compare</h4><a class="signature-arity" href="#SemVer.compare" title="Permanent link">1</a><signature id="SemVer.compare">

```lx
SemVer.compare(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(version : Any, release : Any)"></endpoint>
<h4 class="signature_head">SemVer.inc</h4><a class="signature-arity" href="#SemVer.inc+2" title="Permanent link">2</a><signature id="SemVer.inc+2">

```lx
SemVer.inc(version : Any, release : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(version : Any, release : Any, identifier : Any)"></endpoint>
<h4 class="signature_head">SemVer.inc</h4><a class="signature-arity" href="#SemVer.inc+3" title="Permanent link">3</a><signature id="SemVer.inc+3">

```lx
SemVer.inc(version : Any, release : Any, identifier : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(version : Any, release : Any, loose : Any, identifier : Any)"></endpoint>
<h4 class="signature_head">SemVer.inc</h4><a class="signature-arity" href="#SemVer.inc+4" title="Permanent link">4</a><signature id="SemVer.inc+4">

```lx
SemVer.inc(version : Any, release : Any, loose : Any, identifier : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="parse(version : Any)"></endpoint>
<h4 class="signature_head">SemVer.parse</h4><a class="signature-arity" href="#SemVer.parse" title="Permanent link">1</a><signature id="SemVer.parse">

```lx
SemVer.parse(version : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="parse(version : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.parse</h4><a class="signature-arity" href="#SemVer.parse+2" title="Permanent link">2</a><signature id="SemVer.parse+2">

```lx
SemVer.parse(version : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="valid(version : Any)"></endpoint>
<h4 class="signature_head">SemVer.valid</h4><a class="signature-arity" href="#SemVer.valid" title="Permanent link">1</a><signature id="SemVer.valid">

```lx
SemVer.valid(version : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="valid(version : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.valid</h4><a class="signature-arity" href="#SemVer.valid+2" title="Permanent link">2</a><signature id="SemVer.valid+2">

```lx
SemVer.valid(version : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="clean(version : Any)"></endpoint>
<h4 class="signature_head">SemVer.clean</h4><a class="signature-arity" href="#SemVer.clean" title="Permanent link">1</a><signature id="SemVer.clean">

```lx
SemVer.clean(version : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="clean(version : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.clean</h4><a class="signature-arity" href="#SemVer.clean+2" title="Permanent link">2</a><signature id="SemVer.clean+2">

```lx
SemVer.clean(version : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="diff(version1 : Any, version2 : Any)"></endpoint>
<h4 class="signature_head">SemVer.diff</h4><a class="signature-arity" href="#SemVer.diff+2" title="Permanent link">2</a><signature id="SemVer.diff+2">

```lx
SemVer.diff(version1 : Any, version2 : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="major(a : Any)"></endpoint>
<h4 class="signature_head">SemVer.major</h4><a class="signature-arity" href="#SemVer.major" title="Permanent link">1</a><signature id="SemVer.major">

```lx
SemVer.major(a : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="major(a : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.major</h4><a class="signature-arity" href="#SemVer.major+2" title="Permanent link">2</a><signature id="SemVer.major+2">

```lx
SemVer.major(a : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="minor(a : Any)"></endpoint>
<h4 class="signature_head">SemVer.minor</h4><a class="signature-arity" href="#SemVer.minor" title="Permanent link">1</a><signature id="SemVer.minor">

```lx
SemVer.minor(a : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="minor(a : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.minor</h4><a class="signature-arity" href="#SemVer.minor+2" title="Permanent link">2</a><signature id="SemVer.minor+2">

```lx
SemVer.minor(a : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="patch(a : Any)"></endpoint>
<h4 class="signature_head">SemVer.patch</h4><a class="signature-arity" href="#SemVer.patch" title="Permanent link">1</a><signature id="SemVer.patch">

```lx
SemVer.patch(a : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="patch(a : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.patch</h4><a class="signature-arity" href="#SemVer.patch+2" title="Permanent link">2</a><signature id="SemVer.patch+2">

```lx
SemVer.patch(a : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="prerelease(a : Any)"></endpoint>
<h4 class="signature_head">SemVer.prerelease</h4><a class="signature-arity" href="#SemVer.prerelease" title="Permanent link">1</a><signature id="SemVer.prerelease">

```lx
SemVer.prerelease(a : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="prerelease(a : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.prerelease</h4><a class="signature-arity" href="#SemVer.prerelease+2" title="Permanent link">2</a><signature id="SemVer.prerelease+2">

```lx
SemVer.prerelease(a : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.compare</h4><a class="signature-arity" href="#SemVer.compare+2" title="Permanent link">2</a><signature id="SemVer.compare+2">

```lx
SemVer.compare(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare(a : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.compare</h4><a class="signature-arity" href="#SemVer.compare+3" title="Permanent link">3</a><signature id="SemVer.compare+3">

```lx
SemVer.compare(a : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="rcompare(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.rcompare</h4><a class="signature-arity" href="#SemVer.rcompare+2" title="Permanent link">2</a><signature id="SemVer.rcompare+2">

```lx
SemVer.rcompare(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="rcompare(a : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.rcompare</h4><a class="signature-arity" href="#SemVer.rcompare+3" title="Permanent link">3</a><signature id="SemVer.rcompare+3">

```lx
SemVer.rcompare(a : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="sort(list : Any)"></endpoint>
<h4 class="signature_head">SemVer.sort</h4><a class="signature-arity" href="#SemVer.sort" title="Permanent link">1</a><signature id="SemVer.sort">

```lx
SemVer.sort(list : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="sort(list : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.sort</h4><a class="signature-arity" href="#SemVer.sort+2" title="Permanent link">2</a><signature id="SemVer.sort+2">

```lx
SemVer.sort(list : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="rsort(list : Any)"></endpoint>
<h4 class="signature_head">SemVer.rsort</h4><a class="signature-arity" href="#SemVer.rsort" title="Permanent link">1</a><signature id="SemVer.rsort">

```lx
SemVer.rsort(list : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="rsort(list : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.rsort</h4><a class="signature-arity" href="#SemVer.rsort+2" title="Permanent link">2</a><signature id="SemVer.rsort+2">

```lx
SemVer.rsort(list : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gt(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.gt</h4><a class="signature-arity" href="#SemVer.gt+2" title="Permanent link">2</a><signature id="SemVer.gt+2">

```lx
SemVer.gt(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gt(a : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.gt</h4><a class="signature-arity" href="#SemVer.gt+3" title="Permanent link">3</a><signature id="SemVer.gt+3">

```lx
SemVer.gt(a : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="lt(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.lt</h4><a class="signature-arity" href="#SemVer.lt+2" title="Permanent link">2</a><signature id="SemVer.lt+2">

```lx
SemVer.lt(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="lt(a : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.lt</h4><a class="signature-arity" href="#SemVer.lt+3" title="Permanent link">3</a><signature id="SemVer.lt+3">

```lx
SemVer.lt(a : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gte(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.gte</h4><a class="signature-arity" href="#SemVer.gte+2" title="Permanent link">2</a><signature id="SemVer.gte+2">

```lx
SemVer.gte(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gte(a : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.gte</h4><a class="signature-arity" href="#SemVer.gte+3" title="Permanent link">3</a><signature id="SemVer.gte+3">

```lx
SemVer.gte(a : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="lte(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.lte</h4><a class="signature-arity" href="#SemVer.lte+2" title="Permanent link">2</a><signature id="SemVer.lte+2">

```lx
SemVer.lte(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="lte(a : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.lte</h4><a class="signature-arity" href="#SemVer.lte+3" title="Permanent link">3</a><signature id="SemVer.lte+3">

```lx
SemVer.lte(a : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="eq(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.eq</h4><a class="signature-arity" href="#SemVer.eq+2" title="Permanent link">2</a><signature id="SemVer.eq+2">

```lx
SemVer.eq(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="eq(a : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.eq</h4><a class="signature-arity" href="#SemVer.eq+3" title="Permanent link">3</a><signature id="SemVer.eq+3">

```lx
SemVer.eq(a : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="neq(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.neq</h4><a class="signature-arity" href="#SemVer.neq+2" title="Permanent link">2</a><signature id="SemVer.neq+2">

```lx
SemVer.neq(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="neq(a : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.neq</h4><a class="signature-arity" href="#SemVer.neq+3" title="Permanent link">3</a><signature id="SemVer.neq+3">

```lx
SemVer.neq(a : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="cmp(a : Any, op : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.cmp</h4><a class="signature-arity" href="#SemVer.cmp+3" title="Permanent link">3</a><signature id="SemVer.cmp+3">

```lx
SemVer.cmp(a : Any, op : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="cmp(a : Any, op : Any, b : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.cmp</h4><a class="signature-arity" href="#SemVer.cmp+4" title="Permanent link">4</a><signature id="SemVer.cmp+4">

```lx
SemVer.cmp(a : Any, op : Any, b : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="max_satisfying(versions : Any, range : Any)"></endpoint>
<h4 class="signature_head">SemVer.max_satisfying</h4><a class="signature-arity" href="#SemVer.max_satisfying+2" title="Permanent link">2</a><signature id="SemVer.max_satisfying+2">

```lx
SemVer.max_satisfying(versions : Any, range : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="max_satisfying(versions : Any, range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.max_satisfying</h4><a class="signature-arity" href="#SemVer.max_satisfying+3" title="Permanent link">3</a><signature id="SemVer.max_satisfying+3">

```lx
SemVer.max_satisfying(versions : Any, range : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="min_satisfying(versions : Any, range : Any)"></endpoint>
<h4 class="signature_head">SemVer.min_satisfying</h4><a class="signature-arity" href="#SemVer.min_satisfying+2" title="Permanent link">2</a><signature id="SemVer.min_satisfying+2">

```lx
SemVer.min_satisfying(versions : Any, range : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="min_satisfying(versions : Any, range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.min_satisfying</h4><a class="signature-arity" href="#SemVer.min_satisfying+3" title="Permanent link">3</a><signature id="SemVer.min_satisfying+3">

```lx
SemVer.min_satisfying(versions : Any, range : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="satisfies(version : Any, range : Any)"></endpoint>
<h4 class="signature_head">SemVer.satisfies</h4><a class="signature-arity" href="#SemVer.satisfies+2" title="Permanent link">2</a><signature id="SemVer.satisfies+2">

```lx
SemVer.satisfies(version : Any, range : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="satisfies(version : Any, range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.satisfies</h4><a class="signature-arity" href="#SemVer.satisfies+3" title="Permanent link">3</a><signature id="SemVer.satisfies+3">

```lx
SemVer.satisfies(version : Any, range : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="valid_range(range : Any)"></endpoint>
<h4 class="signature_head">SemVer.valid_range</h4><a class="signature-arity" href="#SemVer.valid_range" title="Permanent link">1</a><signature id="SemVer.valid_range">

```lx
SemVer.valid_range(range : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="valid_range(range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.valid_range</h4><a class="signature-arity" href="#SemVer.valid_range+2" title="Permanent link">2</a><signature id="SemVer.valid_range+2">

```lx
SemVer.valid_range(range : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="ltr(version : Any, range : Any)"></endpoint>
<h4 class="signature_head">SemVer.ltr</h4><a class="signature-arity" href="#SemVer.ltr+2" title="Permanent link">2</a><signature id="SemVer.ltr+2">

```lx
SemVer.ltr(version : Any, range : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="ltr(version : Any, range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.ltr</h4><a class="signature-arity" href="#SemVer.ltr+3" title="Permanent link">3</a><signature id="SemVer.ltr+3">

```lx
SemVer.ltr(version : Any, range : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gtr(version : Any, range : Any)"></endpoint>
<h4 class="signature_head">SemVer.gtr</h4><a class="signature-arity" href="#SemVer.gtr+2" title="Permanent link">2</a><signature id="SemVer.gtr+2">

```lx
SemVer.gtr(version : Any, range : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gtr(version : Any, range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.gtr</h4><a class="signature-arity" href="#SemVer.gtr+3" title="Permanent link">3</a><signature id="SemVer.gtr+3">

```lx
SemVer.gtr(version : Any, range : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="outside(version : Any, range : Any, hilo : Any)"></endpoint>
<h4 class="signature_head">SemVer.outside</h4><a class="signature-arity" href="#SemVer.outside+3" title="Permanent link">3</a><signature id="SemVer.outside+3">

```lx
SemVer.outside(version : Any, range : Any, hilo : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="outside(version : Any, range : Any, hilo : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVer.outside</h4><a class="signature-arity" href="#SemVer.outside+4" title="Permanent link">4</a><signature id="SemVer.outside+4">

```lx
SemVer.outside(version : Any, range : Any, hilo : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="debug(a : Any)"></endpoint>
<h4 class="signature_head">SemVer.debug</h4><a class="signature-arity" href="#SemVer.debug" title="Permanent link">1</a><signature id="SemVer.debug">

```lx
SemVer.debug(a : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare_main(other : Any)"></endpoint>
<h4 class="signature_head">SemVer.compare_main</h4><a class="signature-arity" href="#SemVer.compare_main" title="Permanent link">1</a><signature id="SemVer.compare_main">

```lx
SemVer.compare_main(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="first_not_zero(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.first_not_zero</h4><a class="signature-arity" href="#SemVer.first_not_zero+2" title="Permanent link">2</a><signature id="SemVer.first_not_zero+2">

```lx
SemVer.first_not_zero(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="first_not_zero(a : Any, b : Any, c : Any)"></endpoint>
<h4 class="signature_head">SemVer.first_not_zero</h4><a class="signature-arity" href="#SemVer.first_not_zero+3" title="Permanent link">3</a><signature id="SemVer.first_not_zero+3">

```lx
SemVer.first_not_zero(a : Any, b : Any, c : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare_pre(other : Any)"></endpoint>
<h4 class="signature_head">SemVer.compare_pre</h4><a class="signature-arity" href="#SemVer.compare_pre" title="Permanent link">1</a><signature id="SemVer.compare_pre">

```lx
SemVer.compare_pre(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare_identifiers(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVer.compare_identifiers</h4><a class="signature-arity" href="#SemVer.compare_identifiers+2" title="Permanent link">2</a><signature id="SemVer.compare_identifiers+2">

```lx
SemVer.compare_identifiers(a : Any, b : Any) : unknown
```
</signature>

> no docs found   


### SemVerRange
`import "luxe: semver" for SemVerRange{:lx}`
> no docs found

- [any](#SemVerRange.any)
- [empty](#SemVerRange.empty)
- [debug](#SemVerRange.debug)(**a**: `Any{:lx}`)
- [set](#SemVerRange.set)
- [loose](#SemVerRange.loose)
- [range](#SemVerRange.range)
- [raw](#SemVerRange.raw)
- [isEmpty](#SemVerRange.isEmpty)
- [isAny](#SemVerRange.isAny)
- [new](#SemVerRange.new)(**range**: `Any{:lx}`)
- [new](#SemVerRange.new+2)(**range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [create](#SemVerRange.create+2)(**range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [format](#SemVerRange.format)()
- [union](#SemVerRange.union)(**other**: `Any{:lx}`)
- [intersects](#SemVerRange.intersects)(**range**: `Any{:lx}`)
- [intersects](#SemVerRange.intersects+2)(**range**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [pick_not_infinite](#SemVerRange.pick_not_infinite+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [pick_infinite](#SemVerRange.pick_infinite+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [comparator_intersection](#SemVerRange.comparator_intersection+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [intersection](#SemVerRange.intersection)(**other**: `Any{:lx}`)
- [inverted](#SemVerRange.inverted)()
- [subset_contains](#SemVerRange.subset_contains)(**other**: `Any{:lx}`)
- [subset_contains](#SemVerRange.subset_contains+2)(**other**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [subset_of](#SemVerRange.subset_of)(**other**: `Any{:lx}`)
- [subset_of](#SemVerRange.subset_of+2)(**other**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [subset](#SemVerRange.subset+2)(**needle**: `Any{:lx}`, **haystack**: `Any{:lx}`)
- [subset](#SemVerRange.subset+3)(**needle**: `Any{:lx}`, **haystack**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [test](#SemVerRange.test)(**version**: `Any{:lx}`)
- [is_x](#SemVerRange.is_x)(**id**: `Any{:lx}`)
- [test_set](#SemVerRange.test_set+2)(**set**: `Any{:lx}`, **version**: `Any{:lx}`)
- [parse_range](#SemVerRange.parse_range)(**range**: `Any{:lx}`)
- [parse_comparator](#SemVerRange.parse_comparator+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [replace_carets](#SemVerRange.replace_carets+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [replace_caret](#SemVerRange.replace_caret+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [replace_tildes](#SemVerRange.replace_tildes+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [replace_tilde](#SemVerRange.replace_tilde+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [replace_x_ranges](#SemVerRange.replace_x_ranges+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [replace_x_range](#SemVerRange.replace_x_range+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [replace_stars](#SemVerRange.replace_stars+2)(**comp**: `Any{:lx}`, **loose**: `Any{:lx}`)


---

<endpoint module="luxe: semver" class="SemVerRange" signature="any"></endpoint>
<h4 class="signature_head">SemVerRange.any</h4><a class="signature-arity" href="#SemVerRange.any" title="Permanent link">1</a><signature id="SemVerRange.any">

```lx
SemVerRange.any : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="empty"></endpoint>
<h4 class="signature_head">SemVerRange.empty</h4><a class="signature-arity" href="#SemVerRange.empty" title="Permanent link">1</a><signature id="SemVerRange.empty">

```lx
SemVerRange.empty : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="debug(a : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.debug</h4><a class="signature-arity" href="#SemVerRange.debug" title="Permanent link">1</a><signature id="SemVerRange.debug">

```lx
SemVerRange.debug(a : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="set"></endpoint>
<h4 class="signature_head">SemVerRange.set</h4><a class="signature-arity" href="#SemVerRange.set" title="Permanent link">1</a><signature id="SemVerRange.set">

```lx
SemVerRange.set : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="loose"></endpoint>
<h4 class="signature_head">SemVerRange.loose</h4><a class="signature-arity" href="#SemVerRange.loose" title="Permanent link">1</a><signature id="SemVerRange.loose">

```lx
SemVerRange.loose : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="range"></endpoint>
<h4 class="signature_head">SemVerRange.range</h4><a class="signature-arity" href="#SemVerRange.range" title="Permanent link">1</a><signature id="SemVerRange.range">

```lx
SemVerRange.range : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="raw"></endpoint>
<h4 class="signature_head">SemVerRange.raw</h4><a class="signature-arity" href="#SemVerRange.raw" title="Permanent link">1</a><signature id="SemVerRange.raw">

```lx
SemVerRange.raw : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="isEmpty"></endpoint>
<h4 class="signature_head">SemVerRange.isEmpty</h4><a class="signature-arity" href="#SemVerRange.isEmpty" title="Permanent link">1</a><signature id="SemVerRange.isEmpty">

```lx
SemVerRange.isEmpty : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="isAny"></endpoint>
<h4 class="signature_head">SemVerRange.isAny</h4><a class="signature-arity" href="#SemVerRange.isAny" title="Permanent link">1</a><signature id="SemVerRange.isAny">

```lx
SemVerRange.isAny : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="new(range : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.new</h4><a class="signature-arity" href="#SemVerRange.new" title="Permanent link">1</a><signature id="SemVerRange.new">

```lx
SemVerRange.new(range : Any) : SemVerRange
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="new(range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.new</h4><a class="signature-arity" href="#SemVerRange.new+2" title="Permanent link">2</a><signature id="SemVerRange.new+2">

```lx
SemVerRange.new(range : Any, loose : Any) : SemVerRange
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="create(range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.create</h4><a class="signature-arity" href="#SemVerRange.create+2" title="Permanent link">2</a><signature id="SemVerRange.create+2">

```lx
SemVerRange.create(range : Any, loose : Any) : SemVerRange
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="format()"></endpoint>
<h4 class="signature_head">SemVerRange.format</h4><a class="signature-arity" href="#SemVerRange.format" title="Permanent link">1</a><signature id="SemVerRange.format">

```lx
SemVerRange.format() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="union(other : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.union</h4><a class="signature-arity" href="#SemVerRange.union" title="Permanent link">1</a><signature id="SemVerRange.union">

```lx
SemVerRange.union(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="intersects(range : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.intersects</h4><a class="signature-arity" href="#SemVerRange.intersects" title="Permanent link">1</a><signature id="SemVerRange.intersects">

```lx
SemVerRange.intersects(range : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="intersects(range : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.intersects</h4><a class="signature-arity" href="#SemVerRange.intersects+2" title="Permanent link">2</a><signature id="SemVerRange.intersects+2">

```lx
SemVerRange.intersects(range : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="pick_not_infinite(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.pick_not_infinite</h4><a class="signature-arity" href="#SemVerRange.pick_not_infinite+2" title="Permanent link">2</a><signature id="SemVerRange.pick_not_infinite+2">

```lx
SemVerRange.pick_not_infinite(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="pick_infinite(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.pick_infinite</h4><a class="signature-arity" href="#SemVerRange.pick_infinite+2" title="Permanent link">2</a><signature id="SemVerRange.pick_infinite+2">

```lx
SemVerRange.pick_infinite(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="comparator_intersection(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.comparator_intersection</h4><a class="signature-arity" href="#SemVerRange.comparator_intersection+2" title="Permanent link">2</a><signature id="SemVerRange.comparator_intersection+2">

```lx
SemVerRange.comparator_intersection(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="intersection(other : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.intersection</h4><a class="signature-arity" href="#SemVerRange.intersection" title="Permanent link">1</a><signature id="SemVerRange.intersection">

```lx
SemVerRange.intersection(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="inverted()"></endpoint>
<h4 class="signature_head">SemVerRange.inverted</h4><a class="signature-arity" href="#SemVerRange.inverted" title="Permanent link">1</a><signature id="SemVerRange.inverted">

```lx
SemVerRange.inverted() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset_contains(other : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.subset_contains</h4><a class="signature-arity" href="#SemVerRange.subset_contains" title="Permanent link">1</a><signature id="SemVerRange.subset_contains">

```lx
SemVerRange.subset_contains(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset_contains(other : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.subset_contains</h4><a class="signature-arity" href="#SemVerRange.subset_contains+2" title="Permanent link">2</a><signature id="SemVerRange.subset_contains+2">

```lx
SemVerRange.subset_contains(other : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset_of(other : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.subset_of</h4><a class="signature-arity" href="#SemVerRange.subset_of" title="Permanent link">1</a><signature id="SemVerRange.subset_of">

```lx
SemVerRange.subset_of(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset_of(other : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.subset_of</h4><a class="signature-arity" href="#SemVerRange.subset_of+2" title="Permanent link">2</a><signature id="SemVerRange.subset_of+2">

```lx
SemVerRange.subset_of(other : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset(needle : Any, haystack : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.subset</h4><a class="signature-arity" href="#SemVerRange.subset+2" title="Permanent link">2</a><signature id="SemVerRange.subset+2">

```lx
SemVerRange.subset(needle : Any, haystack : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset(needle : Any, haystack : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.subset</h4><a class="signature-arity" href="#SemVerRange.subset+3" title="Permanent link">3</a><signature id="SemVerRange.subset+3">

```lx
SemVerRange.subset(needle : Any, haystack : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="test(version : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.test</h4><a class="signature-arity" href="#SemVerRange.test" title="Permanent link">1</a><signature id="SemVerRange.test">

```lx
SemVerRange.test(version : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="is_x(id : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.is_x</h4><a class="signature-arity" href="#SemVerRange.is_x" title="Permanent link">1</a><signature id="SemVerRange.is_x">

```lx
SemVerRange.is_x(id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="test_set(set : Any, version : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.test_set</h4><a class="signature-arity" href="#SemVerRange.test_set+2" title="Permanent link">2</a><signature id="SemVerRange.test_set+2">

```lx
SemVerRange.test_set(set : Any, version : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="parse_range(range : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.parse_range</h4><a class="signature-arity" href="#SemVerRange.parse_range" title="Permanent link">1</a><signature id="SemVerRange.parse_range">

```lx
SemVerRange.parse_range(range : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="parse_comparator(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.parse_comparator</h4><a class="signature-arity" href="#SemVerRange.parse_comparator+2" title="Permanent link">2</a><signature id="SemVerRange.parse_comparator+2">

```lx
SemVerRange.parse_comparator(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_carets(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.replace_carets</h4><a class="signature-arity" href="#SemVerRange.replace_carets+2" title="Permanent link">2</a><signature id="SemVerRange.replace_carets+2">

```lx
SemVerRange.replace_carets(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_caret(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.replace_caret</h4><a class="signature-arity" href="#SemVerRange.replace_caret+2" title="Permanent link">2</a><signature id="SemVerRange.replace_caret+2">

```lx
SemVerRange.replace_caret(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_tildes(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.replace_tildes</h4><a class="signature-arity" href="#SemVerRange.replace_tildes+2" title="Permanent link">2</a><signature id="SemVerRange.replace_tildes+2">

```lx
SemVerRange.replace_tildes(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_tilde(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.replace_tilde</h4><a class="signature-arity" href="#SemVerRange.replace_tilde+2" title="Permanent link">2</a><signature id="SemVerRange.replace_tilde+2">

```lx
SemVerRange.replace_tilde(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_x_ranges(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.replace_x_ranges</h4><a class="signature-arity" href="#SemVerRange.replace_x_ranges+2" title="Permanent link">2</a><signature id="SemVerRange.replace_x_ranges+2">

```lx
SemVerRange.replace_x_ranges(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_x_range(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.replace_x_range</h4><a class="signature-arity" href="#SemVerRange.replace_x_range+2" title="Permanent link">2</a><signature id="SemVerRange.replace_x_range+2">

```lx
SemVerRange.replace_x_range(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_stars(comp : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerRange.replace_stars</h4><a class="signature-arity" href="#SemVerRange.replace_stars+2" title="Permanent link">2</a><signature id="SemVerRange.replace_stars+2">

```lx
SemVerRange.replace_stars(comp : Any, loose : Any) : unknown
```
</signature>

> no docs found   


### SemVerSubset
`import "luxe: semver" for SemVerSubset{:lx}`
> no docs found

- [subset](#SemVerSubset.subset+2)(**needle**: `Any{:lx}`, **haystack**: `Any{:lx}`)
- [subset](#SemVerSubset.subset+3)(**needle**: `Any{:lx}`, **haystack**: `Any{:lx}`, **loose**: `Any{:lx}`)
- [gen_interval](#SemVerSubset.gen_interval)(**comparators**: `Any{:lx}`)
- [orderEq](#SemVerSubset.orderEq+2)(**v1**: `Any{:lx}`, **v2**: `Any{:lx}`)
- [orderGt](#SemVerSubset.orderGt+2)(**v1**: `Any{:lx}`, **v2**: `Any{:lx}`)
- [orderLt](#SemVerSubset.orderLt+2)(**v1**: `Any{:lx}`, **v2**: `Any{:lx}`)
- [isSubset](#SemVerSubset.isSubset+2)(**needle**: `Any{:lx}`, **haystack**: `Any{:lx}`)


---

<endpoint module="luxe: semver" class="SemVerSubset" signature="subset(needle : Any, haystack : Any)"></endpoint>
<h4 class="signature_head">SemVerSubset.subset</h4><a class="signature-arity" href="#SemVerSubset.subset+2" title="Permanent link">2</a><signature id="SemVerSubset.subset+2">

```lx
SemVerSubset.subset(needle : Any, haystack : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="subset(needle : Any, haystack : Any, loose : Any)"></endpoint>
<h4 class="signature_head">SemVerSubset.subset</h4><a class="signature-arity" href="#SemVerSubset.subset+3" title="Permanent link">3</a><signature id="SemVerSubset.subset+3">

```lx
SemVerSubset.subset(needle : Any, haystack : Any, loose : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="gen_interval(comparators : Any)"></endpoint>
<h4 class="signature_head">SemVerSubset.gen_interval</h4><a class="signature-arity" href="#SemVerSubset.gen_interval" title="Permanent link">1</a><signature id="SemVerSubset.gen_interval">

```lx
SemVerSubset.gen_interval(comparators : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="orderEq(v1 : Any, v2 : Any)"></endpoint>
<h4 class="signature_head">SemVerSubset.orderEq</h4><a class="signature-arity" href="#SemVerSubset.orderEq+2" title="Permanent link">2</a><signature id="SemVerSubset.orderEq+2">

```lx
SemVerSubset.orderEq(v1 : Any, v2 : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="orderGt(v1 : Any, v2 : Any)"></endpoint>
<h4 class="signature_head">SemVerSubset.orderGt</h4><a class="signature-arity" href="#SemVerSubset.orderGt+2" title="Permanent link">2</a><signature id="SemVerSubset.orderGt+2">

```lx
SemVerSubset.orderGt(v1 : Any, v2 : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="orderLt(v1 : Any, v2 : Any)"></endpoint>
<h4 class="signature_head">SemVerSubset.orderLt</h4><a class="signature-arity" href="#SemVerSubset.orderLt+2" title="Permanent link">2</a><signature id="SemVerSubset.orderLt+2">

```lx
SemVerSubset.orderLt(v1 : Any, v2 : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="isSubset(needle : Any, haystack : Any)"></endpoint>
<h4 class="signature_head">SemVerSubset.isSubset</h4><a class="signature-arity" href="#SemVerSubset.isSubset+2" title="Permanent link">2</a><signature id="SemVerSubset.isSubset+2">

```lx
SemVerSubset.isSubset(needle : Any, haystack : Any) : unknown
```
</signature>

> no docs found   


### SemVerSubsetInterval
`import "luxe: semver" for SemVerSubsetInterval{:lx}`
> no docs found

- [left](#SemVerSubsetInterval.left)
- [right](#SemVerSubsetInterval.right)
- [leftValue](#SemVerSubsetInterval.leftValue)
- [rightValue](#SemVerSubsetInterval.rightValue)
- [new](#SemVerSubsetInterval.new+4)(**left**: `Any{:lx}`, **leftValue**: `Any{:lx}`, **rightValue**: `Any{:lx}`, **right**: `Any{:lx}`)


---

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="left"></endpoint>
<h4 class="signature_head">SemVerSubsetInterval.left</h4><a class="signature-arity" href="#SemVerSubsetInterval.left" title="Permanent link">1</a><signature id="SemVerSubsetInterval.left">

```lx
SemVerSubsetInterval.left : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="right"></endpoint>
<h4 class="signature_head">SemVerSubsetInterval.right</h4><a class="signature-arity" href="#SemVerSubsetInterval.right" title="Permanent link">1</a><signature id="SemVerSubsetInterval.right">

```lx
SemVerSubsetInterval.right : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="leftValue"></endpoint>
<h4 class="signature_head">SemVerSubsetInterval.leftValue</h4><a class="signature-arity" href="#SemVerSubsetInterval.leftValue" title="Permanent link">1</a><signature id="SemVerSubsetInterval.leftValue">

```lx
SemVerSubsetInterval.leftValue : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="rightValue"></endpoint>
<h4 class="signature_head">SemVerSubsetInterval.rightValue</h4><a class="signature-arity" href="#SemVerSubsetInterval.rightValue" title="Permanent link">1</a><signature id="SemVerSubsetInterval.rightValue">

```lx
SemVerSubsetInterval.rightValue : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="new(left : Any, leftValue : Any, rightValue : Any, right : Any)"></endpoint>
<h4 class="signature_head">SemVerSubsetInterval.new</h4><a class="signature-arity" href="#SemVerSubsetInterval.new+4" title="Permanent link">4</a><signature id="SemVerSubsetInterval.new+4">

```lx
SemVerSubsetInterval.new(left : Any, leftValue : Any, rightValue : Any, right : Any) : SemVerSubsetInterval
```
</signature>

> no docs found   

