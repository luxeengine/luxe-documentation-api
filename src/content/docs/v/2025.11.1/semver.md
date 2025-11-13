---
title: "luxe: semver"
description: API version 2025.11.1
slug: "v/2025.11.1/semver"
---
- [Comparator](#comparator)   
- [SemVer](#semver)   
- [SemVerRange](#semverrange)   
- [SemVerSubset](#semversubset)   
- [SemVerSubsetInterval](#semversubsetinterval)   

---


## Comparator
```lx
import "luxe: semver" for Comparator
```
> no docs found

<endpoint module="luxe: semver" class="Comparator" signature="value"></endpoint>
### Comparator.value
```lx
Comparator.value : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="semver"></endpoint>
### Comparator.semver
```lx
Comparator.semver : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="operator"></endpoint>
### Comparator.operator
```lx
Comparator.operator : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="loose"></endpoint>
### Comparator.loose
```lx
Comparator.loose : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="any"></endpoint>
### Comparator.any
```lx
Comparator.any : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="new(comp : Any)"></endpoint>
### Comparator.new(.)
```lx
Comparator.new(comp : Any) : Comparator
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="new(comp : Any, loose : Any)"></endpoint>
### Comparator.new(..)
```lx
Comparator.new(comp : Any, loose : Any) : Comparator
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="create(comp : Any, loose : Any)"></endpoint>
### Comparator.create(..)
```lx
Comparator.create(comp : Any, loose : Any) : Comparator
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="inverted()"></endpoint>
### Comparator.inverted(.)
```lx
Comparator.inverted() : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="test(version : Any)"></endpoint>
### Comparator.test(.)
```lx
Comparator.test(version : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="parse(comp : Any)"></endpoint>
### Comparator.parse(.)
```lx
Comparator.parse(comp : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="debug(a : Any)"></endpoint>
### Comparator.debug(.)
```lx
Comparator.debug(a : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="intersects(comp : Any)"></endpoint>
### Comparator.intersects(.)
```lx
Comparator.intersects(comp : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="Comparator" signature="intersects(comp : Any, loose : Any)"></endpoint>
### Comparator.intersects(..)
```lx
Comparator.intersects(comp : Any, loose : Any) : unknown
```
> no docs found   


## SemVer
```lx
import "luxe: semver" for SemVer
```
> no docs found

<endpoint module="luxe: semver" class="SemVer" signature="SPEC"></endpoint>
### SemVer.SPEC
```lx
SemVer.SPEC : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="loose"></endpoint>
### SemVer.loose
```lx
SemVer.loose : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="version"></endpoint>
### SemVer.version
```lx
SemVer.version : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="major"></endpoint>
### SemVer.major
```lx
SemVer.major : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="minor"></endpoint>
### SemVer.minor
```lx
SemVer.minor : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="patch"></endpoint>
### SemVer.patch
```lx
SemVer.patch : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="build"></endpoint>
### SemVer.build
```lx
SemVer.build : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="prerelease"></endpoint>
### SemVer.prerelease
```lx
SemVer.prerelease : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="raw"></endpoint>
### SemVer.raw
```lx
SemVer.raw : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="new(version : Any)"></endpoint>
### SemVer.new(.)
```lx
SemVer.new(version : Any) : SemVer
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="new(version : Any, loose : Any)"></endpoint>
### SemVer.new(..)
```lx
SemVer.new(version : Any, loose : Any) : SemVer
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="create(version : Any, loose : Any)"></endpoint>
### SemVer.create(..)
```lx
SemVer.create(version : Any, loose : Any) : SemVer
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="format()"></endpoint>
### SemVer.format(.)
```lx
SemVer.format() : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="!=(other : Any)"></endpoint>
### SemVer !=(.)
```lx
SemVer !=(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="==(other : Any)"></endpoint>
### SemVer ==(.)
```lx
SemVer ==(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="<=(other : Any)"></endpoint>
### SemVer <=(.)
```lx
SemVer <=(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature=">=(other : Any)"></endpoint>
### SemVer >=(.)
```lx
SemVer >=(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature=">(other : Any)"></endpoint>
### SemVer >(.)
```lx
SemVer >(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="<(other : Any)"></endpoint>
### SemVer <(.)
```lx
SemVer <(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(release : Any)"></endpoint>
### SemVer.inc(.)
```lx
SemVer.inc(release : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(release : Any, identifier : Any)"></endpoint>
### SemVer.inc(..)
```lx
SemVer.inc(release : Any, identifier : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare(other : Any)"></endpoint>
### SemVer.compare(.)
```lx
SemVer.compare(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(version : Any, release : Any)"></endpoint>
### SemVer.inc(..)
```lx
SemVer.inc(version : Any, release : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(version : Any, release : Any, identifier : Any)"></endpoint>
### SemVer.inc(...)
```lx
SemVer.inc(version : Any, release : Any, identifier : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="inc(version : Any, release : Any, loose : Any, identifier : Any)"></endpoint>
### SemVer.inc(....)
```lx
SemVer.inc(version : Any, release : Any, loose : Any, identifier : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="parse(version : Any)"></endpoint>
### SemVer.parse(.)
```lx
SemVer.parse(version : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="parse(version : Any, loose : Any)"></endpoint>
### SemVer.parse(..)
```lx
SemVer.parse(version : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="valid(version : Any)"></endpoint>
### SemVer.valid(.)
```lx
SemVer.valid(version : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="valid(version : Any, loose : Any)"></endpoint>
### SemVer.valid(..)
```lx
SemVer.valid(version : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="clean(version : Any)"></endpoint>
### SemVer.clean(.)
```lx
SemVer.clean(version : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="clean(version : Any, loose : Any)"></endpoint>
### SemVer.clean(..)
```lx
SemVer.clean(version : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="diff(version1 : Any, version2 : Any)"></endpoint>
### SemVer.diff(..)
```lx
SemVer.diff(version1 : Any, version2 : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="major(a : Any)"></endpoint>
### SemVer.major(.)
```lx
SemVer.major(a : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="major(a : Any, loose : Any)"></endpoint>
### SemVer.major(..)
```lx
SemVer.major(a : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="minor(a : Any)"></endpoint>
### SemVer.minor(.)
```lx
SemVer.minor(a : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="minor(a : Any, loose : Any)"></endpoint>
### SemVer.minor(..)
```lx
SemVer.minor(a : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="patch(a : Any)"></endpoint>
### SemVer.patch(.)
```lx
SemVer.patch(a : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="patch(a : Any, loose : Any)"></endpoint>
### SemVer.patch(..)
```lx
SemVer.patch(a : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="prerelease(a : Any)"></endpoint>
### SemVer.prerelease(.)
```lx
SemVer.prerelease(a : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="prerelease(a : Any, loose : Any)"></endpoint>
### SemVer.prerelease(..)
```lx
SemVer.prerelease(a : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare(a : Any, b : Any)"></endpoint>
### SemVer.compare(..)
```lx
SemVer.compare(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare(a : Any, b : Any, loose : Any)"></endpoint>
### SemVer.compare(...)
```lx
SemVer.compare(a : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="rcompare(a : Any, b : Any)"></endpoint>
### SemVer.rcompare(..)
```lx
SemVer.rcompare(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="rcompare(a : Any, b : Any, loose : Any)"></endpoint>
### SemVer.rcompare(...)
```lx
SemVer.rcompare(a : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="sort(list : Any)"></endpoint>
### SemVer.sort(.)
```lx
SemVer.sort(list : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="sort(list : Any, loose : Any)"></endpoint>
### SemVer.sort(..)
```lx
SemVer.sort(list : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="rsort(list : Any)"></endpoint>
### SemVer.rsort(.)
```lx
SemVer.rsort(list : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="rsort(list : Any, loose : Any)"></endpoint>
### SemVer.rsort(..)
```lx
SemVer.rsort(list : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gt(a : Any, b : Any)"></endpoint>
### SemVer.gt(..)
```lx
SemVer.gt(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gt(a : Any, b : Any, loose : Any)"></endpoint>
### SemVer.gt(...)
```lx
SemVer.gt(a : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="lt(a : Any, b : Any)"></endpoint>
### SemVer.lt(..)
```lx
SemVer.lt(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="lt(a : Any, b : Any, loose : Any)"></endpoint>
### SemVer.lt(...)
```lx
SemVer.lt(a : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gte(a : Any, b : Any)"></endpoint>
### SemVer.gte(..)
```lx
SemVer.gte(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gte(a : Any, b : Any, loose : Any)"></endpoint>
### SemVer.gte(...)
```lx
SemVer.gte(a : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="lte(a : Any, b : Any)"></endpoint>
### SemVer.lte(..)
```lx
SemVer.lte(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="lte(a : Any, b : Any, loose : Any)"></endpoint>
### SemVer.lte(...)
```lx
SemVer.lte(a : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="eq(a : Any, b : Any)"></endpoint>
### SemVer.eq(..)
```lx
SemVer.eq(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="eq(a : Any, b : Any, loose : Any)"></endpoint>
### SemVer.eq(...)
```lx
SemVer.eq(a : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="neq(a : Any, b : Any)"></endpoint>
### SemVer.neq(..)
```lx
SemVer.neq(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="neq(a : Any, b : Any, loose : Any)"></endpoint>
### SemVer.neq(...)
```lx
SemVer.neq(a : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="cmp(a : Any, op : Any, b : Any)"></endpoint>
### SemVer.cmp(...)
```lx
SemVer.cmp(a : Any, op : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="cmp(a : Any, op : Any, b : Any, loose : Any)"></endpoint>
### SemVer.cmp(....)
```lx
SemVer.cmp(a : Any, op : Any, b : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="max_satisfying(versions : Any, range : Any)"></endpoint>
### SemVer.max_satisfying(..)
```lx
SemVer.max_satisfying(versions : Any, range : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="max_satisfying(versions : Any, range : Any, loose : Any)"></endpoint>
### SemVer.max_satisfying(...)
```lx
SemVer.max_satisfying(versions : Any, range : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="min_satisfying(versions : Any, range : Any)"></endpoint>
### SemVer.min_satisfying(..)
```lx
SemVer.min_satisfying(versions : Any, range : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="min_satisfying(versions : Any, range : Any, loose : Any)"></endpoint>
### SemVer.min_satisfying(...)
```lx
SemVer.min_satisfying(versions : Any, range : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="satisfies(version : Any, range : Any)"></endpoint>
### SemVer.satisfies(..)
```lx
SemVer.satisfies(version : Any, range : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="satisfies(version : Any, range : Any, loose : Any)"></endpoint>
### SemVer.satisfies(...)
```lx
SemVer.satisfies(version : Any, range : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="valid_range(range : Any)"></endpoint>
### SemVer.valid_range(.)
```lx
SemVer.valid_range(range : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="valid_range(range : Any, loose : Any)"></endpoint>
### SemVer.valid_range(..)
```lx
SemVer.valid_range(range : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="ltr(version : Any, range : Any)"></endpoint>
### SemVer.ltr(..)
```lx
SemVer.ltr(version : Any, range : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="ltr(version : Any, range : Any, loose : Any)"></endpoint>
### SemVer.ltr(...)
```lx
SemVer.ltr(version : Any, range : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gtr(version : Any, range : Any)"></endpoint>
### SemVer.gtr(..)
```lx
SemVer.gtr(version : Any, range : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="gtr(version : Any, range : Any, loose : Any)"></endpoint>
### SemVer.gtr(...)
```lx
SemVer.gtr(version : Any, range : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="outside(version : Any, range : Any, hilo : Any)"></endpoint>
### SemVer.outside(...)
```lx
SemVer.outside(version : Any, range : Any, hilo : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="outside(version : Any, range : Any, hilo : Any, loose : Any)"></endpoint>
### SemVer.outside(....)
```lx
SemVer.outside(version : Any, range : Any, hilo : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="debug(a : Any)"></endpoint>
### SemVer.debug(.)
```lx
SemVer.debug(a : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare_main(other : Any)"></endpoint>
### SemVer.compare_main(.)
```lx
SemVer.compare_main(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="first_not_zero(a : Any, b : Any)"></endpoint>
### SemVer.first_not_zero(..)
```lx
SemVer.first_not_zero(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="first_not_zero(a : Any, b : Any, c : Any)"></endpoint>
### SemVer.first_not_zero(...)
```lx
SemVer.first_not_zero(a : Any, b : Any, c : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare_pre(other : Any)"></endpoint>
### SemVer.compare_pre(.)
```lx
SemVer.compare_pre(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVer" signature="compare_identifiers(a : Any, b : Any)"></endpoint>
### SemVer.compare_identifiers(..)
```lx
SemVer.compare_identifiers(a : Any, b : Any) : unknown
```
> no docs found   


## SemVerRange
```lx
import "luxe: semver" for SemVerRange
```
> no docs found

<endpoint module="luxe: semver" class="SemVerRange" signature="any"></endpoint>
### SemVerRange.any
```lx
SemVerRange.any : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="empty"></endpoint>
### SemVerRange.empty
```lx
SemVerRange.empty : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="debug(a : Any)"></endpoint>
### SemVerRange.debug(.)
```lx
SemVerRange.debug(a : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="set"></endpoint>
### SemVerRange.set
```lx
SemVerRange.set : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="loose"></endpoint>
### SemVerRange.loose
```lx
SemVerRange.loose : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="range"></endpoint>
### SemVerRange.range
```lx
SemVerRange.range : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="raw"></endpoint>
### SemVerRange.raw
```lx
SemVerRange.raw : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="isEmpty"></endpoint>
### SemVerRange.isEmpty
```lx
SemVerRange.isEmpty : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="isAny"></endpoint>
### SemVerRange.isAny
```lx
SemVerRange.isAny : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="new(range : Any)"></endpoint>
### SemVerRange.new(.)
```lx
SemVerRange.new(range : Any) : SemVerRange
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="new(range : Any, loose : Any)"></endpoint>
### SemVerRange.new(..)
```lx
SemVerRange.new(range : Any, loose : Any) : SemVerRange
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="create(range : Any, loose : Any)"></endpoint>
### SemVerRange.create(..)
```lx
SemVerRange.create(range : Any, loose : Any) : SemVerRange
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="format()"></endpoint>
### SemVerRange.format(.)
```lx
SemVerRange.format() : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="union(other : Any)"></endpoint>
### SemVerRange.union(.)
```lx
SemVerRange.union(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="intersects(range : Any)"></endpoint>
### SemVerRange.intersects(.)
```lx
SemVerRange.intersects(range : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="intersects(range : Any, loose : Any)"></endpoint>
### SemVerRange.intersects(..)
```lx
SemVerRange.intersects(range : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="pick_not_infinite(a : Any, b : Any)"></endpoint>
### SemVerRange.pick_not_infinite(..)
```lx
SemVerRange.pick_not_infinite(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="pick_infinite(a : Any, b : Any)"></endpoint>
### SemVerRange.pick_infinite(..)
```lx
SemVerRange.pick_infinite(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="comparator_intersection(a : Any, b : Any)"></endpoint>
### SemVerRange.comparator_intersection(..)
```lx
SemVerRange.comparator_intersection(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="intersection(other : Any)"></endpoint>
### SemVerRange.intersection(.)
```lx
SemVerRange.intersection(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="inverted()"></endpoint>
### SemVerRange.inverted(.)
```lx
SemVerRange.inverted() : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset_contains(other : Any)"></endpoint>
### SemVerRange.subset_contains(.)
```lx
SemVerRange.subset_contains(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset_contains(other : Any, loose : Any)"></endpoint>
### SemVerRange.subset_contains(..)
```lx
SemVerRange.subset_contains(other : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset_of(other : Any)"></endpoint>
### SemVerRange.subset_of(.)
```lx
SemVerRange.subset_of(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset_of(other : Any, loose : Any)"></endpoint>
### SemVerRange.subset_of(..)
```lx
SemVerRange.subset_of(other : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset(needle : Any, haystack : Any)"></endpoint>
### SemVerRange.subset(..)
```lx
SemVerRange.subset(needle : Any, haystack : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="subset(needle : Any, haystack : Any, loose : Any)"></endpoint>
### SemVerRange.subset(...)
```lx
SemVerRange.subset(needle : Any, haystack : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="test(version : Any)"></endpoint>
### SemVerRange.test(.)
```lx
SemVerRange.test(version : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="is_x(id : Any)"></endpoint>
### SemVerRange.is_x(.)
```lx
SemVerRange.is_x(id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="test_set(set : Any, version : Any)"></endpoint>
### SemVerRange.test_set(..)
```lx
SemVerRange.test_set(set : Any, version : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="parse_range(range : Any)"></endpoint>
### SemVerRange.parse_range(.)
```lx
SemVerRange.parse_range(range : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="parse_comparator(comp : Any, loose : Any)"></endpoint>
### SemVerRange.parse_comparator(..)
```lx
SemVerRange.parse_comparator(comp : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_carets(comp : Any, loose : Any)"></endpoint>
### SemVerRange.replace_carets(..)
```lx
SemVerRange.replace_carets(comp : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_caret(comp : Any, loose : Any)"></endpoint>
### SemVerRange.replace_caret(..)
```lx
SemVerRange.replace_caret(comp : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_tildes(comp : Any, loose : Any)"></endpoint>
### SemVerRange.replace_tildes(..)
```lx
SemVerRange.replace_tildes(comp : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_tilde(comp : Any, loose : Any)"></endpoint>
### SemVerRange.replace_tilde(..)
```lx
SemVerRange.replace_tilde(comp : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_x_ranges(comp : Any, loose : Any)"></endpoint>
### SemVerRange.replace_x_ranges(..)
```lx
SemVerRange.replace_x_ranges(comp : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_x_range(comp : Any, loose : Any)"></endpoint>
### SemVerRange.replace_x_range(..)
```lx
SemVerRange.replace_x_range(comp : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerRange" signature="replace_stars(comp : Any, loose : Any)"></endpoint>
### SemVerRange.replace_stars(..)
```lx
SemVerRange.replace_stars(comp : Any, loose : Any) : unknown
```
> no docs found   


## SemVerSubset
```lx
import "luxe: semver" for SemVerSubset
```
> no docs found

<endpoint module="luxe: semver" class="SemVerSubset" signature="subset(needle : Any, haystack : Any)"></endpoint>
### SemVerSubset.subset(..)
```lx
SemVerSubset.subset(needle : Any, haystack : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="subset(needle : Any, haystack : Any, loose : Any)"></endpoint>
### SemVerSubset.subset(...)
```lx
SemVerSubset.subset(needle : Any, haystack : Any, loose : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="gen_interval(comparators : Any)"></endpoint>
### SemVerSubset.gen_interval(.)
```lx
SemVerSubset.gen_interval(comparators : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="orderEq(v1 : Any, v2 : Any)"></endpoint>
### SemVerSubset.orderEq(..)
```lx
SemVerSubset.orderEq(v1 : Any, v2 : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="orderGt(v1 : Any, v2 : Any)"></endpoint>
### SemVerSubset.orderGt(..)
```lx
SemVerSubset.orderGt(v1 : Any, v2 : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="orderLt(v1 : Any, v2 : Any)"></endpoint>
### SemVerSubset.orderLt(..)
```lx
SemVerSubset.orderLt(v1 : Any, v2 : Any) : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubset" signature="isSubset(needle : Any, haystack : Any)"></endpoint>
### SemVerSubset.isSubset(..)
```lx
SemVerSubset.isSubset(needle : Any, haystack : Any) : unknown
```
> no docs found   


## SemVerSubsetInterval
```lx
import "luxe: semver" for SemVerSubsetInterval
```
> no docs found

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="left"></endpoint>
### SemVerSubsetInterval.left
```lx
SemVerSubsetInterval.left : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="right"></endpoint>
### SemVerSubsetInterval.right
```lx
SemVerSubsetInterval.right : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="leftValue"></endpoint>
### SemVerSubsetInterval.leftValue
```lx
SemVerSubsetInterval.leftValue : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="rightValue"></endpoint>
### SemVerSubsetInterval.rightValue
```lx
SemVerSubsetInterval.rightValue : unknown
```
> no docs found   

<endpoint module="luxe: semver" class="SemVerSubsetInterval" signature="new(left : Any, leftValue : Any, rightValue : Any, right : Any)"></endpoint>
### SemVerSubsetInterval.new(....)
```lx
SemVerSubsetInterval.new(left : Any, leftValue : Any, rightValue : Any, right : Any) : SemVerSubsetInterval
```
> no docs found   

