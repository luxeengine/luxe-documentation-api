---
title: "luxe: test"
description: API version 2025.11.1
slug: "v/2025.11.1/test"
---
- [BaseMatchers](#basematchers)   
- [ConsoleReporter](#consolereporter)   
- [Expectation](#expectation)   
- [FiberMatchers](#fibermatchers)   
- [Matchers](#matchers)   
- [NumMatchers](#nummatchers)   
- [RangeMatchers](#rangematchers)   
- [Reporter](#reporter)   
- [Runnable](#runnable)   
- [Skippable](#skippable)   
- [Stub](#stub)   
- [StubMatchers](#stubmatchers)   
- [Suite](#suite)   

---


## BaseMatchers
```lx
import "luxe: test" for BaseMatchers
```
> no docs found

<endpoint module="luxe: test" class="BaseMatchers" signature="new(value : Any)"></endpoint>
### BaseMatchers.new(.)
```lx
BaseMatchers.new(value : Any) : BaseMatchers
```
> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="value"></endpoint>
### BaseMatchers.value
```lx
BaseMatchers.value : unknown
```
> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="not"></endpoint>
### BaseMatchers.not
```lx
BaseMatchers.not : unknown
```
> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toBe(klass : Any)"></endpoint>
### BaseMatchers.toBe(.)
```lx
BaseMatchers.toBe(klass : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toBeFalse"></endpoint>
### BaseMatchers.toBeFalse
```lx
BaseMatchers.toBeFalse : unknown
```
> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toBeTrue"></endpoint>
### BaseMatchers.toBeTrue
```lx
BaseMatchers.toBeTrue : unknown
```
> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toBeNull"></endpoint>
### BaseMatchers.toBeNull
```lx
BaseMatchers.toBeNull : unknown
```
> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toEqual(other : Any)"></endpoint>
### BaseMatchers.toEqual(.)
```lx
BaseMatchers.toEqual(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toEqualDeeply(other : Any)"></endpoint>
### BaseMatchers.toEqualDeeply(.)
```lx
BaseMatchers.toEqualDeeply(other : Any) : unknown
```
> no docs found   


## ConsoleReporter
```lx
import "luxe: test" for ConsoleReporter
```
> no docs found

<endpoint module="luxe: test" class="ConsoleReporter" signature="new()"></endpoint>
### ConsoleReporter.new(.)
```lx
ConsoleReporter.new() : ConsoleReporter
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="print_colors=(v : Any)"></endpoint>
### ConsoleReporter.print_colors
```lx
ConsoleReporter.print_colors=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="epilogue()"></endpoint>
### ConsoleReporter.epilogue(.)
```lx
ConsoleReporter.epilogue() : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="runnableSkipped(skippable : Any)"></endpoint>
### ConsoleReporter.runnableSkipped(.)
```lx
ConsoleReporter.runnableSkipped(skippable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="suiteStart(title : Any)"></endpoint>
### ConsoleReporter.suiteStart(.)
```lx
ConsoleReporter.suiteStart(title : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="suiteEnd(title : Any)"></endpoint>
### ConsoleReporter.suiteEnd(.)
```lx
ConsoleReporter.suiteEnd(title : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testStart(runnable : Any)"></endpoint>
### ConsoleReporter.testStart(.)
```lx
ConsoleReporter.testStart(runnable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testEnd(runnable : Any)"></endpoint>
### ConsoleReporter.testEnd(.)
```lx
ConsoleReporter.testEnd(runnable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testPassed(runnable : Any)"></endpoint>
### ConsoleReporter.testPassed(.)
```lx
ConsoleReporter.testPassed(runnable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testFailed(runnable : Any)"></endpoint>
### ConsoleReporter.testFailed(.)
```lx
ConsoleReporter.testFailed(runnable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testError(runnable : Any)"></endpoint>
### ConsoleReporter.testError(.)
```lx
ConsoleReporter.testError(runnable : Any) : unknown
```
> no docs found   


## Expectation
```lx
import "luxe: test" for Expectation
```
> no docs found

<endpoint module="luxe: test" class="Expectation" signature="new(passed : Any, message : Any)"></endpoint>
### Expectation.new(..)
```lx
Expectation.new(passed : Any, message : Any) : Expectation
```
> no docs found   

<endpoint module="luxe: test" class="Expectation" signature="passed"></endpoint>
### Expectation.passed
```lx
Expectation.passed : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Expectation" signature="message"></endpoint>
### Expectation.message
```lx
Expectation.message : unknown
```
> no docs found   


## FiberMatchers
```lx
import "luxe: test" for FiberMatchers
```
> no docs found

<endpoint module="luxe: test" class="FiberMatchers" signature="new(value : Any)"></endpoint>
### FiberMatchers.new(.)
```lx
FiberMatchers.new(value : Any) : FiberMatchers
```
> no docs found   

<endpoint module="luxe: test" class="FiberMatchers" signature="toBeARuntimeError"></endpoint>
### FiberMatchers.toBeARuntimeError
```lx
FiberMatchers.toBeARuntimeError : unknown
```
> no docs found   

<endpoint module="luxe: test" class="FiberMatchers" signature="toBeARuntimeError(errorMessage : Any)"></endpoint>
### FiberMatchers.toBeARuntimeError(.)
```lx
FiberMatchers.toBeARuntimeError(errorMessage : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="FiberMatchers" signature="toBeDone"></endpoint>
### FiberMatchers.toBeDone
```lx
FiberMatchers.toBeDone : unknown
```
> no docs found   


## Matchers
```lx
import "luxe: test" for Matchers
```
> no docs found

<endpoint module="luxe: test" class="Matchers" signature="new(value : Any)"></endpoint>
### Matchers.new(.)
```lx
Matchers.new(value : Any) : Matchers
```
> no docs found   


## NumMatchers
```lx
import "luxe: test" for NumMatchers
```
> no docs found

<endpoint module="luxe: test" class="NumMatchers" signature="new(value : Any)"></endpoint>
### NumMatchers.new(.)
```lx
NumMatchers.new(value : Any) : NumMatchers
```
> no docs found   

<endpoint module="luxe: test" class="NumMatchers" signature="toBeGreaterThan(other : Any)"></endpoint>
### NumMatchers.toBeGreaterThan(.)
```lx
NumMatchers.toBeGreaterThan(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="NumMatchers" signature="toBeLessThan(other : Any)"></endpoint>
### NumMatchers.toBeLessThan(.)
```lx
NumMatchers.toBeLessThan(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="NumMatchers" signature="toBeBetween(min : Any, max : Any)"></endpoint>
### NumMatchers.toBeBetween(..)
```lx
NumMatchers.toBeBetween(min : Any, max : Any) : unknown
```
> no docs found   


## RangeMatchers
```lx
import "luxe: test" for RangeMatchers
```
> no docs found

<endpoint module="luxe: test" class="RangeMatchers" signature="new(value : Any)"></endpoint>
### RangeMatchers.new(.)
```lx
RangeMatchers.new(value : Any) : RangeMatchers
```
> no docs found   

<endpoint module="luxe: test" class="RangeMatchers" signature="toContain(other : Any)"></endpoint>
### RangeMatchers.toContain(.)
```lx
RangeMatchers.toContain(other : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="RangeMatchers" signature="toBeContainedBy(other : Any)"></endpoint>
### RangeMatchers.toBeContainedBy(.)
```lx
RangeMatchers.toBeContainedBy(other : Any) : unknown
```
> no docs found   


## Reporter
```lx
import "luxe: test" for Reporter
```
> no docs found

<endpoint module="luxe: test" class="Reporter" signature="epilogue()"></endpoint>
### Reporter.epilogue(.)
```lx
Reporter.epilogue() : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="runnableSkipped(skippable : Any)"></endpoint>
### Reporter.runnableSkipped(.)
```lx
Reporter.runnableSkipped(skippable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="suiteStart(title : Any)"></endpoint>
### Reporter.suiteStart(.)
```lx
Reporter.suiteStart(title : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="suiteEnd(title : Any)"></endpoint>
### Reporter.suiteEnd(.)
```lx
Reporter.suiteEnd(title : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testStart(runnable : Any)"></endpoint>
### Reporter.testStart(.)
```lx
Reporter.testStart(runnable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testPassed(runnable : Any)"></endpoint>
### Reporter.testPassed(.)
```lx
Reporter.testPassed(runnable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testFailed(runnable : Any)"></endpoint>
### Reporter.testFailed(.)
```lx
Reporter.testFailed(runnable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testError(runnable : Any)"></endpoint>
### Reporter.testError(.)
```lx
Reporter.testError(runnable : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testEnd(runnable : Any)"></endpoint>
### Reporter.testEnd(.)
```lx
Reporter.testEnd(runnable : Any) : unknown
```
> no docs found   


## Runnable
```lx
import "luxe: test" for Runnable
```
> no docs found

<endpoint module="luxe: test" class="Runnable" signature="new(title : Any, beforeEaches : Any, afterEaches : Any, fn : Any)"></endpoint>
### Runnable.new(....)
```lx
Runnable.new(title : Any, beforeEaches : Any, afterEaches : Any, fn : Any) : Runnable
```
> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="duration"></endpoint>
### Runnable.duration
```lx
Runnable.duration : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="error"></endpoint>
### Runnable.error
```lx
Runnable.error : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="expectations"></endpoint>
### Runnable.expectations
```lx
Runnable.expectations : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="hasRun"></endpoint>
### Runnable.hasRun
```lx
Runnable.hasRun : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="run()"></endpoint>
### Runnable.run(.)
```lx
Runnable.run() : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="title"></endpoint>
### Runnable.title
```lx
Runnable.title : unknown
```
> no docs found   


## Skippable
```lx
import "luxe: test" for Skippable
```
> no docs found

<endpoint module="luxe: test" class="Skippable" signature="new(title : Any)"></endpoint>
### Skippable.new(.)
```lx
Skippable.new(title : Any) : Skippable
```
> no docs found   

<endpoint module="luxe: test" class="Skippable" signature="run"></endpoint>
### Skippable.run
```lx
Skippable.run : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Skippable" signature="title"></endpoint>
### Skippable.title
```lx
Skippable.title : unknown
```
> no docs found   


## Stub
```lx
import "luxe: test" for Stub
```
> no docs found

<endpoint module="luxe: test" class="Stub" signature="new(name : Any)"></endpoint>
### Stub.new(.)
```lx
Stub.new(name : Any) : Stub
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="new(name : Any, fakeFn : Any)"></endpoint>
### Stub.new(..)
```lx
Stub.new(name : Any, fakeFn : Any) : Stub
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="andCallFake(name : Any, fakeFn : Any)"></endpoint>
### Stub.andCallFake(..)
```lx
Stub.andCallFake(name : Any, fakeFn : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="andReturnValue(name : Any, returnValue : Any)"></endpoint>
### Stub.andReturnValue(..)
```lx
Stub.andReturnValue(name : Any, returnValue : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="called"></endpoint>
### Stub.called
```lx
Stub.called : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="calls"></endpoint>
### Stub.calls
```lx
Stub.calls : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="firstCall"></endpoint>
### Stub.firstCall
```lx
Stub.firstCall : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="mostRecentCall"></endpoint>
### Stub.mostRecentCall
```lx
Stub.mostRecentCall : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="name"></endpoint>
### Stub.name
```lx
Stub.name : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="reset"></endpoint>
### Stub.reset
```lx
Stub.reset : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call"></endpoint>
### Stub.call
```lx
Stub.call : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call()"></endpoint>
### Stub.call(.)
```lx
Stub.call() : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any)"></endpoint>
### Stub.call(.)
```lx
Stub.call(a : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any)"></endpoint>
### Stub.call(..)
```lx
Stub.call(a : Any, b : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any)"></endpoint>
### Stub.call(...)
```lx
Stub.call(a : Any, b : Any, c : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any)"></endpoint>
### Stub.call(....)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any)"></endpoint>
### Stub.call(.....)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any)"></endpoint>
### Stub.call(......)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any)"></endpoint>
### Stub.call(.......)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any)"></endpoint>
### Stub.call(........)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any)"></endpoint>
### Stub.call(.........)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any)"></endpoint>
### Stub.call(..........)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any)"></endpoint>
### Stub.call(...........)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any)"></endpoint>
### Stub.call(............)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any)"></endpoint>
### Stub.call(.............)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any)"></endpoint>
### Stub.call(..............)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any, o : Any)"></endpoint>
### Stub.call(...............)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any, o : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any, o : Any, p : Any)"></endpoint>
### Stub.call(................)
```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any, o : Any, p : Any) : unknown
```
> no docs found   


## StubMatchers
```lx
import "luxe: test" for StubMatchers
```
> no docs found

<endpoint module="luxe: test" class="StubMatchers" signature="new(value : Any)"></endpoint>
### StubMatchers.new(.)
```lx
StubMatchers.new(value : Any) : StubMatchers
```
> no docs found   

<endpoint module="luxe: test" class="StubMatchers" signature="toHaveBeenCalled"></endpoint>
### StubMatchers.toHaveBeenCalled
```lx
StubMatchers.toHaveBeenCalled : unknown
```
> no docs found   

<endpoint module="luxe: test" class="StubMatchers" signature="toHaveBeenCalled(times : Any)"></endpoint>
### StubMatchers.toHaveBeenCalled(.)
```lx
StubMatchers.toHaveBeenCalled(times : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="StubMatchers" signature="toHaveBeenCalledWith(args : Any)"></endpoint>
### StubMatchers.toHaveBeenCalledWith(.)
```lx
StubMatchers.toHaveBeenCalledWith(args : Any) : unknown
```
> no docs found   


## Suite
```lx
import "luxe: test" for Suite
```
> no docs found

<endpoint module="luxe: test" class="Suite" signature="new(name : Any, block : Any)"></endpoint>
### Suite.new(..)
```lx
Suite.new(name : Any, block : Any) : Suite
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="new(name : Any, beforeEaches : Any, afterEaches : Any, block : Any)"></endpoint>
### Suite.new(....)
```lx
Suite.new(name : Any, beforeEaches : Any, afterEaches : Any, block : Any) : Suite
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="afterEach"></endpoint>
### Suite.afterEach
```lx
Suite.afterEach : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="afterEach(block : Any)"></endpoint>
### Suite.afterEach(.)
```lx
Suite.afterEach(block : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="beforeEach"></endpoint>
### Suite.beforeEach
```lx
Suite.beforeEach : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="beforeEach(block : Any)"></endpoint>
### Suite.beforeEach(.)
```lx
Suite.beforeEach(block : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="run(reporter : Any)"></endpoint>
### Suite.run(.)
```lx
Suite.run(reporter : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="should(name : Any)"></endpoint>
### Suite.should(.)
```lx
Suite.should(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="should(name : Any, block : Any)"></endpoint>
### Suite.should(..)
```lx
Suite.should(name : Any, block : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="skip(block : Any)"></endpoint>
### Suite.skip(.)
```lx
Suite.skip(block : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="suite(name : Any)"></endpoint>
### Suite.suite(.)
```lx
Suite.suite(name : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="suite(name : Any, block : Any)"></endpoint>
### Suite.suite(..)
```lx
Suite.suite(name : Any, block : Any) : unknown
```
> no docs found   

<endpoint module="luxe: test" class="Suite" signature="title"></endpoint>
### Suite.title
```lx
Suite.title : unknown
```
> no docs found   

