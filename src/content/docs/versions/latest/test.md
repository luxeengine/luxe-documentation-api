---
title: "luxe: test"
description: API version 2025.11.1
---
## `luxe: test{:lx}` module

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


### BaseMatchers
`import "luxe: test" for BaseMatchers{:lx}`
> no docs found

- [new](#BaseMatchers.new)(**value**: `Any{:lx}`)
- [value](#BaseMatchers.value)
- [not](#BaseMatchers.not)
- [toBe](#BaseMatchers.toBe)(**klass**: `Any{:lx}`)
- [toBeFalse](#BaseMatchers.toBeFalse)
- [toBeTrue](#BaseMatchers.toBeTrue)
- [toBeNull](#BaseMatchers.toBeNull)
- [toEqual](#BaseMatchers.toEqual)(**other**: `Any{:lx}`)
- [toEqualDeeply](#BaseMatchers.toEqualDeeply)(**other**: `Any{:lx}`)


---

<endpoint module="luxe: test" class="BaseMatchers" signature="new(value : Any)"></endpoint>
<h4 class="signature_head">BaseMatchers.new</h4><a class="signature-arity" href="#BaseMatchers.new" title="Permanent link">1</a><signature id="BaseMatchers.new">

```lx
BaseMatchers.new(value : Any) : BaseMatchers
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="value"></endpoint>
<h4 class="signature_head">BaseMatchers.value</h4><a class="signature-arity" href="#BaseMatchers.value" title="Permanent link">1</a><signature id="BaseMatchers.value">

```lx
BaseMatchers.value : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="not"></endpoint>
<h4 class="signature_head">BaseMatchers.not</h4><a class="signature-arity" href="#BaseMatchers.not" title="Permanent link">1</a><signature id="BaseMatchers.not">

```lx
BaseMatchers.not : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toBe(klass : Any)"></endpoint>
<h4 class="signature_head">BaseMatchers.toBe</h4><a class="signature-arity" href="#BaseMatchers.toBe" title="Permanent link">1</a><signature id="BaseMatchers.toBe">

```lx
BaseMatchers.toBe(klass : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toBeFalse"></endpoint>
<h4 class="signature_head">BaseMatchers.toBeFalse</h4><a class="signature-arity" href="#BaseMatchers.toBeFalse" title="Permanent link">1</a><signature id="BaseMatchers.toBeFalse">

```lx
BaseMatchers.toBeFalse : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toBeTrue"></endpoint>
<h4 class="signature_head">BaseMatchers.toBeTrue</h4><a class="signature-arity" href="#BaseMatchers.toBeTrue" title="Permanent link">1</a><signature id="BaseMatchers.toBeTrue">

```lx
BaseMatchers.toBeTrue : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toBeNull"></endpoint>
<h4 class="signature_head">BaseMatchers.toBeNull</h4><a class="signature-arity" href="#BaseMatchers.toBeNull" title="Permanent link">1</a><signature id="BaseMatchers.toBeNull">

```lx
BaseMatchers.toBeNull : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toEqual(other : Any)"></endpoint>
<h4 class="signature_head">BaseMatchers.toEqual</h4><a class="signature-arity" href="#BaseMatchers.toEqual" title="Permanent link">1</a><signature id="BaseMatchers.toEqual">

```lx
BaseMatchers.toEqual(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="BaseMatchers" signature="toEqualDeeply(other : Any)"></endpoint>
<h4 class="signature_head">BaseMatchers.toEqualDeeply</h4><a class="signature-arity" href="#BaseMatchers.toEqualDeeply" title="Permanent link">1</a><signature id="BaseMatchers.toEqualDeeply">

```lx
BaseMatchers.toEqualDeeply(other : Any) : unknown
```
</signature>

> no docs found   


### ConsoleReporter
`import "luxe: test" for ConsoleReporter{:lx}`
> no docs found

- [new](#ConsoleReporter.new)()
- [print_colors](#ConsoleReporter.print_colors=)=(v : Any)
- [epilogue](#ConsoleReporter.epilogue)()
- [runnableSkipped](#ConsoleReporter.runnableSkipped)(**skippable**: `Any{:lx}`)
- [suiteStart](#ConsoleReporter.suiteStart)(**title**: `Any{:lx}`)
- [suiteEnd](#ConsoleReporter.suiteEnd)(**title**: `Any{:lx}`)
- [testStart](#ConsoleReporter.testStart)(**runnable**: `Any{:lx}`)
- [testEnd](#ConsoleReporter.testEnd)(**runnable**: `Any{:lx}`)
- [testPassed](#ConsoleReporter.testPassed)(**runnable**: `Any{:lx}`)
- [testFailed](#ConsoleReporter.testFailed)(**runnable**: `Any{:lx}`)
- [testError](#ConsoleReporter.testError)(**runnable**: `Any{:lx}`)


---

<endpoint module="luxe: test" class="ConsoleReporter" signature="new()"></endpoint>
<h4 class="signature_head">ConsoleReporter.new</h4><a class="signature-arity" href="#ConsoleReporter.new" title="Permanent link">1</a><signature id="ConsoleReporter.new">

```lx
ConsoleReporter.new() : ConsoleReporter
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="print_colors=(v : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.print_colors</h4><a class="signature-arity" href="#ConsoleReporter.print_colors=" title="Permanent link">1</a><signature id="ConsoleReporter.print_colors=">

```lx
ConsoleReporter.print_colors=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="epilogue()"></endpoint>
<h4 class="signature_head">ConsoleReporter.epilogue</h4><a class="signature-arity" href="#ConsoleReporter.epilogue" title="Permanent link">1</a><signature id="ConsoleReporter.epilogue">

```lx
ConsoleReporter.epilogue() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="runnableSkipped(skippable : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.runnableSkipped</h4><a class="signature-arity" href="#ConsoleReporter.runnableSkipped" title="Permanent link">1</a><signature id="ConsoleReporter.runnableSkipped">

```lx
ConsoleReporter.runnableSkipped(skippable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="suiteStart(title : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.suiteStart</h4><a class="signature-arity" href="#ConsoleReporter.suiteStart" title="Permanent link">1</a><signature id="ConsoleReporter.suiteStart">

```lx
ConsoleReporter.suiteStart(title : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="suiteEnd(title : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.suiteEnd</h4><a class="signature-arity" href="#ConsoleReporter.suiteEnd" title="Permanent link">1</a><signature id="ConsoleReporter.suiteEnd">

```lx
ConsoleReporter.suiteEnd(title : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testStart(runnable : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.testStart</h4><a class="signature-arity" href="#ConsoleReporter.testStart" title="Permanent link">1</a><signature id="ConsoleReporter.testStart">

```lx
ConsoleReporter.testStart(runnable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testEnd(runnable : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.testEnd</h4><a class="signature-arity" href="#ConsoleReporter.testEnd" title="Permanent link">1</a><signature id="ConsoleReporter.testEnd">

```lx
ConsoleReporter.testEnd(runnable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testPassed(runnable : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.testPassed</h4><a class="signature-arity" href="#ConsoleReporter.testPassed" title="Permanent link">1</a><signature id="ConsoleReporter.testPassed">

```lx
ConsoleReporter.testPassed(runnable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testFailed(runnable : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.testFailed</h4><a class="signature-arity" href="#ConsoleReporter.testFailed" title="Permanent link">1</a><signature id="ConsoleReporter.testFailed">

```lx
ConsoleReporter.testFailed(runnable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="ConsoleReporter" signature="testError(runnable : Any)"></endpoint>
<h4 class="signature_head">ConsoleReporter.testError</h4><a class="signature-arity" href="#ConsoleReporter.testError" title="Permanent link">1</a><signature id="ConsoleReporter.testError">

```lx
ConsoleReporter.testError(runnable : Any) : unknown
```
</signature>

> no docs found   


### Expectation
`import "luxe: test" for Expectation{:lx}`
> no docs found

- [new](#Expectation.new+2)(**passed**: `Any{:lx}`, **message**: `Any{:lx}`)
- [passed](#Expectation.passed)
- [message](#Expectation.message)


---

<endpoint module="luxe: test" class="Expectation" signature="new(passed : Any, message : Any)"></endpoint>
<h4 class="signature_head">Expectation.new</h4><a class="signature-arity" href="#Expectation.new+2" title="Permanent link">2</a><signature id="Expectation.new+2">

```lx
Expectation.new(passed : Any, message : Any) : Expectation
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Expectation" signature="passed"></endpoint>
<h4 class="signature_head">Expectation.passed</h4><a class="signature-arity" href="#Expectation.passed" title="Permanent link">1</a><signature id="Expectation.passed">

```lx
Expectation.passed : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Expectation" signature="message"></endpoint>
<h4 class="signature_head">Expectation.message</h4><a class="signature-arity" href="#Expectation.message" title="Permanent link">1</a><signature id="Expectation.message">

```lx
Expectation.message : unknown
```
</signature>

> no docs found   


### FiberMatchers
`import "luxe: test" for FiberMatchers{:lx}`
> no docs found

- [new](#FiberMatchers.new)(**value**: `Any{:lx}`)
- [toBeARuntimeError](#FiberMatchers.toBeARuntimeError)
- [toBeARuntimeError](#FiberMatchers.toBeARuntimeError)(**errorMessage**: `Any{:lx}`)
- [toBeDone](#FiberMatchers.toBeDone)


---

<endpoint module="luxe: test" class="FiberMatchers" signature="new(value : Any)"></endpoint>
<h4 class="signature_head">FiberMatchers.new</h4><a class="signature-arity" href="#FiberMatchers.new" title="Permanent link">1</a><signature id="FiberMatchers.new">

```lx
FiberMatchers.new(value : Any) : FiberMatchers
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="FiberMatchers" signature="toBeARuntimeError"></endpoint>
<h4 class="signature_head">FiberMatchers.toBeARuntimeError</h4><a class="signature-arity" href="#FiberMatchers.toBeARuntimeError" title="Permanent link">1</a><signature id="FiberMatchers.toBeARuntimeError">

```lx
FiberMatchers.toBeARuntimeError : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="FiberMatchers" signature="toBeARuntimeError(errorMessage : Any)"></endpoint>
<h4 class="signature_head">FiberMatchers.toBeARuntimeError</h4><a class="signature-arity" href="#FiberMatchers.toBeARuntimeError" title="Permanent link">1</a><signature id="FiberMatchers.toBeARuntimeError">

```lx
FiberMatchers.toBeARuntimeError(errorMessage : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="FiberMatchers" signature="toBeDone"></endpoint>
<h4 class="signature_head">FiberMatchers.toBeDone</h4><a class="signature-arity" href="#FiberMatchers.toBeDone" title="Permanent link">1</a><signature id="FiberMatchers.toBeDone">

```lx
FiberMatchers.toBeDone : unknown
```
</signature>

> no docs found   


### Matchers
`import "luxe: test" for Matchers{:lx}`
> no docs found

- [new](#Matchers.new)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: test" class="Matchers" signature="new(value : Any)"></endpoint>
<h4 class="signature_head">Matchers.new</h4><a class="signature-arity" href="#Matchers.new" title="Permanent link">1</a><signature id="Matchers.new">

```lx
Matchers.new(value : Any) : Matchers
```
</signature>

> no docs found   


### NumMatchers
`import "luxe: test" for NumMatchers{:lx}`
> no docs found

- [new](#NumMatchers.new)(**value**: `Any{:lx}`)
- [toBeGreaterThan](#NumMatchers.toBeGreaterThan)(**other**: `Any{:lx}`)
- [toBeLessThan](#NumMatchers.toBeLessThan)(**other**: `Any{:lx}`)
- [toBeBetween](#NumMatchers.toBeBetween+2)(**min**: `Any{:lx}`, **max**: `Any{:lx}`)


---

<endpoint module="luxe: test" class="NumMatchers" signature="new(value : Any)"></endpoint>
<h4 class="signature_head">NumMatchers.new</h4><a class="signature-arity" href="#NumMatchers.new" title="Permanent link">1</a><signature id="NumMatchers.new">

```lx
NumMatchers.new(value : Any) : NumMatchers
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="NumMatchers" signature="toBeGreaterThan(other : Any)"></endpoint>
<h4 class="signature_head">NumMatchers.toBeGreaterThan</h4><a class="signature-arity" href="#NumMatchers.toBeGreaterThan" title="Permanent link">1</a><signature id="NumMatchers.toBeGreaterThan">

```lx
NumMatchers.toBeGreaterThan(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="NumMatchers" signature="toBeLessThan(other : Any)"></endpoint>
<h4 class="signature_head">NumMatchers.toBeLessThan</h4><a class="signature-arity" href="#NumMatchers.toBeLessThan" title="Permanent link">1</a><signature id="NumMatchers.toBeLessThan">

```lx
NumMatchers.toBeLessThan(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="NumMatchers" signature="toBeBetween(min : Any, max : Any)"></endpoint>
<h4 class="signature_head">NumMatchers.toBeBetween</h4><a class="signature-arity" href="#NumMatchers.toBeBetween+2" title="Permanent link">2</a><signature id="NumMatchers.toBeBetween+2">

```lx
NumMatchers.toBeBetween(min : Any, max : Any) : unknown
```
</signature>

> no docs found   


### RangeMatchers
`import "luxe: test" for RangeMatchers{:lx}`
> no docs found

- [new](#RangeMatchers.new)(**value**: `Any{:lx}`)
- [toContain](#RangeMatchers.toContain)(**other**: `Any{:lx}`)
- [toBeContainedBy](#RangeMatchers.toBeContainedBy)(**other**: `Any{:lx}`)


---

<endpoint module="luxe: test" class="RangeMatchers" signature="new(value : Any)"></endpoint>
<h4 class="signature_head">RangeMatchers.new</h4><a class="signature-arity" href="#RangeMatchers.new" title="Permanent link">1</a><signature id="RangeMatchers.new">

```lx
RangeMatchers.new(value : Any) : RangeMatchers
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="RangeMatchers" signature="toContain(other : Any)"></endpoint>
<h4 class="signature_head">RangeMatchers.toContain</h4><a class="signature-arity" href="#RangeMatchers.toContain" title="Permanent link">1</a><signature id="RangeMatchers.toContain">

```lx
RangeMatchers.toContain(other : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="RangeMatchers" signature="toBeContainedBy(other : Any)"></endpoint>
<h4 class="signature_head">RangeMatchers.toBeContainedBy</h4><a class="signature-arity" href="#RangeMatchers.toBeContainedBy" title="Permanent link">1</a><signature id="RangeMatchers.toBeContainedBy">

```lx
RangeMatchers.toBeContainedBy(other : Any) : unknown
```
</signature>

> no docs found   


### Reporter
`import "luxe: test" for Reporter{:lx}`
> no docs found

- [epilogue](#Reporter.epilogue)()
- [runnableSkipped](#Reporter.runnableSkipped)(**skippable**: `Any{:lx}`)
- [suiteStart](#Reporter.suiteStart)(**title**: `Any{:lx}`)
- [suiteEnd](#Reporter.suiteEnd)(**title**: `Any{:lx}`)
- [testStart](#Reporter.testStart)(**runnable**: `Any{:lx}`)
- [testPassed](#Reporter.testPassed)(**runnable**: `Any{:lx}`)
- [testFailed](#Reporter.testFailed)(**runnable**: `Any{:lx}`)
- [testError](#Reporter.testError)(**runnable**: `Any{:lx}`)
- [testEnd](#Reporter.testEnd)(**runnable**: `Any{:lx}`)


---

<endpoint module="luxe: test" class="Reporter" signature="epilogue()"></endpoint>
<h4 class="signature_head">Reporter.epilogue</h4><a class="signature-arity" href="#Reporter.epilogue" title="Permanent link">1</a><signature id="Reporter.epilogue">

```lx
Reporter.epilogue() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="runnableSkipped(skippable : Any)"></endpoint>
<h4 class="signature_head">Reporter.runnableSkipped</h4><a class="signature-arity" href="#Reporter.runnableSkipped" title="Permanent link">1</a><signature id="Reporter.runnableSkipped">

```lx
Reporter.runnableSkipped(skippable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="suiteStart(title : Any)"></endpoint>
<h4 class="signature_head">Reporter.suiteStart</h4><a class="signature-arity" href="#Reporter.suiteStart" title="Permanent link">1</a><signature id="Reporter.suiteStart">

```lx
Reporter.suiteStart(title : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="suiteEnd(title : Any)"></endpoint>
<h4 class="signature_head">Reporter.suiteEnd</h4><a class="signature-arity" href="#Reporter.suiteEnd" title="Permanent link">1</a><signature id="Reporter.suiteEnd">

```lx
Reporter.suiteEnd(title : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testStart(runnable : Any)"></endpoint>
<h4 class="signature_head">Reporter.testStart</h4><a class="signature-arity" href="#Reporter.testStart" title="Permanent link">1</a><signature id="Reporter.testStart">

```lx
Reporter.testStart(runnable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testPassed(runnable : Any)"></endpoint>
<h4 class="signature_head">Reporter.testPassed</h4><a class="signature-arity" href="#Reporter.testPassed" title="Permanent link">1</a><signature id="Reporter.testPassed">

```lx
Reporter.testPassed(runnable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testFailed(runnable : Any)"></endpoint>
<h4 class="signature_head">Reporter.testFailed</h4><a class="signature-arity" href="#Reporter.testFailed" title="Permanent link">1</a><signature id="Reporter.testFailed">

```lx
Reporter.testFailed(runnable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testError(runnable : Any)"></endpoint>
<h4 class="signature_head">Reporter.testError</h4><a class="signature-arity" href="#Reporter.testError" title="Permanent link">1</a><signature id="Reporter.testError">

```lx
Reporter.testError(runnable : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Reporter" signature="testEnd(runnable : Any)"></endpoint>
<h4 class="signature_head">Reporter.testEnd</h4><a class="signature-arity" href="#Reporter.testEnd" title="Permanent link">1</a><signature id="Reporter.testEnd">

```lx
Reporter.testEnd(runnable : Any) : unknown
```
</signature>

> no docs found   


### Runnable
`import "luxe: test" for Runnable{:lx}`
> no docs found

- [new](#Runnable.new+4)(**title**: `Any{:lx}`, **beforeEaches**: `Any{:lx}`, **afterEaches**: `Any{:lx}`, **fn**: `Any{:lx}`)
- [duration](#Runnable.duration)
- [error](#Runnable.error)
- [expectations](#Runnable.expectations)
- [hasRun](#Runnable.hasRun)
- [run](#Runnable.run)()
- [title](#Runnable.title)


---

<endpoint module="luxe: test" class="Runnable" signature="new(title : Any, beforeEaches : Any, afterEaches : Any, fn : Any)"></endpoint>
<h4 class="signature_head">Runnable.new</h4><a class="signature-arity" href="#Runnable.new+4" title="Permanent link">4</a><signature id="Runnable.new+4">

```lx
Runnable.new(title : Any, beforeEaches : Any, afterEaches : Any, fn : Any) : Runnable
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="duration"></endpoint>
<h4 class="signature_head">Runnable.duration</h4><a class="signature-arity" href="#Runnable.duration" title="Permanent link">1</a><signature id="Runnable.duration">

```lx
Runnable.duration : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="error"></endpoint>
<h4 class="signature_head">Runnable.error</h4><a class="signature-arity" href="#Runnable.error" title="Permanent link">1</a><signature id="Runnable.error">

```lx
Runnable.error : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="expectations"></endpoint>
<h4 class="signature_head">Runnable.expectations</h4><a class="signature-arity" href="#Runnable.expectations" title="Permanent link">1</a><signature id="Runnable.expectations">

```lx
Runnable.expectations : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="hasRun"></endpoint>
<h4 class="signature_head">Runnable.hasRun</h4><a class="signature-arity" href="#Runnable.hasRun" title="Permanent link">1</a><signature id="Runnable.hasRun">

```lx
Runnable.hasRun : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="run()"></endpoint>
<h4 class="signature_head">Runnable.run</h4><a class="signature-arity" href="#Runnable.run" title="Permanent link">1</a><signature id="Runnable.run">

```lx
Runnable.run() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Runnable" signature="title"></endpoint>
<h4 class="signature_head">Runnable.title</h4><a class="signature-arity" href="#Runnable.title" title="Permanent link">1</a><signature id="Runnable.title">

```lx
Runnable.title : unknown
```
</signature>

> no docs found   


### Skippable
`import "luxe: test" for Skippable{:lx}`
> no docs found

- [new](#Skippable.new)(**title**: `Any{:lx}`)
- [run](#Skippable.run)
- [title](#Skippable.title)


---

<endpoint module="luxe: test" class="Skippable" signature="new(title : Any)"></endpoint>
<h4 class="signature_head">Skippable.new</h4><a class="signature-arity" href="#Skippable.new" title="Permanent link">1</a><signature id="Skippable.new">

```lx
Skippable.new(title : Any) : Skippable
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Skippable" signature="run"></endpoint>
<h4 class="signature_head">Skippable.run</h4><a class="signature-arity" href="#Skippable.run" title="Permanent link">1</a><signature id="Skippable.run">

```lx
Skippable.run : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Skippable" signature="title"></endpoint>
<h4 class="signature_head">Skippable.title</h4><a class="signature-arity" href="#Skippable.title" title="Permanent link">1</a><signature id="Skippable.title">

```lx
Skippable.title : unknown
```
</signature>

> no docs found   


### Stub
`import "luxe: test" for Stub{:lx}`
> no docs found

- [new](#Stub.new)(**name**: `Any{:lx}`)
- [new](#Stub.new+2)(**name**: `Any{:lx}`, **fakeFn**: `Any{:lx}`)
- [andCallFake](#Stub.andCallFake+2)(**name**: `Any{:lx}`, **fakeFn**: `Any{:lx}`)
- [andReturnValue](#Stub.andReturnValue+2)(**name**: `Any{:lx}`, **returnValue**: `Any{:lx}`)
- [called](#Stub.called)
- [calls](#Stub.calls)
- [firstCall](#Stub.firstCall)
- [mostRecentCall](#Stub.mostRecentCall)
- [name](#Stub.name)
- [reset](#Stub.reset)
- [call](#Stub.call)
- [call](#Stub.call)()
- [call](#Stub.call)(**a**: `Any{:lx}`)
- [call](#Stub.call+2)(**a**: `Any{:lx}`, **b**: `Any{:lx}`)
- [call](#Stub.call+3)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`)
- [call](#Stub.call+4)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`)
- [call](#Stub.call+5)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`)
- [call](#Stub.call+6)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`)
- [call](#Stub.call+7)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`)
- [call](#Stub.call+8)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`)
- [call](#Stub.call+9)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`, **i**: `Any{:lx}`)
- [call](#Stub.call+10)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`, **i**: `Any{:lx}`, **j**: `Any{:lx}`)
- [call](#Stub.call+11)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`, **i**: `Any{:lx}`, **j**: `Any{:lx}`, **k**: `Any{:lx}`)
- [call](#Stub.call+12)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`, **i**: `Any{:lx}`, **j**: `Any{:lx}`, **k**: `Any{:lx}`, **l**: `Any{:lx}`)
- [call](#Stub.call+13)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`, **i**: `Any{:lx}`, **j**: `Any{:lx}`, **k**: `Any{:lx}`, **l**: `Any{:lx}`, **m**: `Any{:lx}`)
- [call](#Stub.call+14)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`, **i**: `Any{:lx}`, **j**: `Any{:lx}`, **k**: `Any{:lx}`, **l**: `Any{:lx}`, **m**: `Any{:lx}`, **n**: `Any{:lx}`)
- [call](#Stub.call+15)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`, **i**: `Any{:lx}`, **j**: `Any{:lx}`, **k**: `Any{:lx}`, **l**: `Any{:lx}`, **m**: `Any{:lx}`, **n**: `Any{:lx}`, **o**: `Any{:lx}`)
- [call](#Stub.call+16)(**a**: `Any{:lx}`, **b**: `Any{:lx}`, **c**: `Any{:lx}`, **d**: `Any{:lx}`, **e**: `Any{:lx}`, **f**: `Any{:lx}`, **g**: `Any{:lx}`, **h**: `Any{:lx}`, **i**: `Any{:lx}`, **j**: `Any{:lx}`, **k**: `Any{:lx}`, **l**: `Any{:lx}`, **m**: `Any{:lx}`, **n**: `Any{:lx}`, **o**: `Any{:lx}`, **p**: `Any{:lx}`)


---

<endpoint module="luxe: test" class="Stub" signature="new(name : Any)"></endpoint>
<h4 class="signature_head">Stub.new</h4><a class="signature-arity" href="#Stub.new" title="Permanent link">1</a><signature id="Stub.new">

```lx
Stub.new(name : Any) : Stub
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="new(name : Any, fakeFn : Any)"></endpoint>
<h4 class="signature_head">Stub.new</h4><a class="signature-arity" href="#Stub.new+2" title="Permanent link">2</a><signature id="Stub.new+2">

```lx
Stub.new(name : Any, fakeFn : Any) : Stub
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="andCallFake(name : Any, fakeFn : Any)"></endpoint>
<h4 class="signature_head">Stub.andCallFake</h4><a class="signature-arity" href="#Stub.andCallFake+2" title="Permanent link">2</a><signature id="Stub.andCallFake+2">

```lx
Stub.andCallFake(name : Any, fakeFn : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="andReturnValue(name : Any, returnValue : Any)"></endpoint>
<h4 class="signature_head">Stub.andReturnValue</h4><a class="signature-arity" href="#Stub.andReturnValue+2" title="Permanent link">2</a><signature id="Stub.andReturnValue+2">

```lx
Stub.andReturnValue(name : Any, returnValue : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="called"></endpoint>
<h4 class="signature_head">Stub.called</h4><a class="signature-arity" href="#Stub.called" title="Permanent link">1</a><signature id="Stub.called">

```lx
Stub.called : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="calls"></endpoint>
<h4 class="signature_head">Stub.calls</h4><a class="signature-arity" href="#Stub.calls" title="Permanent link">1</a><signature id="Stub.calls">

```lx
Stub.calls : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="firstCall"></endpoint>
<h4 class="signature_head">Stub.firstCall</h4><a class="signature-arity" href="#Stub.firstCall" title="Permanent link">1</a><signature id="Stub.firstCall">

```lx
Stub.firstCall : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="mostRecentCall"></endpoint>
<h4 class="signature_head">Stub.mostRecentCall</h4><a class="signature-arity" href="#Stub.mostRecentCall" title="Permanent link">1</a><signature id="Stub.mostRecentCall">

```lx
Stub.mostRecentCall : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="name"></endpoint>
<h4 class="signature_head">Stub.name</h4><a class="signature-arity" href="#Stub.name" title="Permanent link">1</a><signature id="Stub.name">

```lx
Stub.name : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="reset"></endpoint>
<h4 class="signature_head">Stub.reset</h4><a class="signature-arity" href="#Stub.reset" title="Permanent link">1</a><signature id="Stub.reset">

```lx
Stub.reset : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call" title="Permanent link">1</a><signature id="Stub.call">

```lx
Stub.call : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call()"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call" title="Permanent link">1</a><signature id="Stub.call">

```lx
Stub.call() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call" title="Permanent link">1</a><signature id="Stub.call">

```lx
Stub.call(a : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+2" title="Permanent link">2</a><signature id="Stub.call+2">

```lx
Stub.call(a : Any, b : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+3" title="Permanent link">3</a><signature id="Stub.call+3">

```lx
Stub.call(a : Any, b : Any, c : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+4" title="Permanent link">4</a><signature id="Stub.call+4">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+5" title="Permanent link">5</a><signature id="Stub.call+5">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+6" title="Permanent link">6</a><signature id="Stub.call+6">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+7" title="Permanent link">7</a><signature id="Stub.call+7">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+8" title="Permanent link">8</a><signature id="Stub.call+8">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+9" title="Permanent link">9</a><signature id="Stub.call+9">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+10" title="Permanent link">10</a><signature id="Stub.call+10">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+11" title="Permanent link">11</a><signature id="Stub.call+11">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+12" title="Permanent link">12</a><signature id="Stub.call+12">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+13" title="Permanent link">13</a><signature id="Stub.call+13">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+14" title="Permanent link">14</a><signature id="Stub.call+14">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any, o : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+15" title="Permanent link">15</a><signature id="Stub.call+15">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any, o : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Stub" signature="call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any, o : Any, p : Any)"></endpoint>
<h4 class="signature_head">Stub.call</h4><a class="signature-arity" href="#Stub.call+16" title="Permanent link">16</a><signature id="Stub.call+16">

```lx
Stub.call(a : Any, b : Any, c : Any, d : Any, e : Any, f : Any, g : Any, h : Any, i : Any, j : Any, k : Any, l : Any, m : Any, n : Any, o : Any, p : Any) : unknown
```
</signature>

> no docs found   


### StubMatchers
`import "luxe: test" for StubMatchers{:lx}`
> no docs found

- [new](#StubMatchers.new)(**value**: `Any{:lx}`)
- [toHaveBeenCalled](#StubMatchers.toHaveBeenCalled)
- [toHaveBeenCalled](#StubMatchers.toHaveBeenCalled)(**times**: `Any{:lx}`)
- [toHaveBeenCalledWith](#StubMatchers.toHaveBeenCalledWith)(**args**: `Any{:lx}`)


---

<endpoint module="luxe: test" class="StubMatchers" signature="new(value : Any)"></endpoint>
<h4 class="signature_head">StubMatchers.new</h4><a class="signature-arity" href="#StubMatchers.new" title="Permanent link">1</a><signature id="StubMatchers.new">

```lx
StubMatchers.new(value : Any) : StubMatchers
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="StubMatchers" signature="toHaveBeenCalled"></endpoint>
<h4 class="signature_head">StubMatchers.toHaveBeenCalled</h4><a class="signature-arity" href="#StubMatchers.toHaveBeenCalled" title="Permanent link">1</a><signature id="StubMatchers.toHaveBeenCalled">

```lx
StubMatchers.toHaveBeenCalled : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="StubMatchers" signature="toHaveBeenCalled(times : Any)"></endpoint>
<h4 class="signature_head">StubMatchers.toHaveBeenCalled</h4><a class="signature-arity" href="#StubMatchers.toHaveBeenCalled" title="Permanent link">1</a><signature id="StubMatchers.toHaveBeenCalled">

```lx
StubMatchers.toHaveBeenCalled(times : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="StubMatchers" signature="toHaveBeenCalledWith(args : Any)"></endpoint>
<h4 class="signature_head">StubMatchers.toHaveBeenCalledWith</h4><a class="signature-arity" href="#StubMatchers.toHaveBeenCalledWith" title="Permanent link">1</a><signature id="StubMatchers.toHaveBeenCalledWith">

```lx
StubMatchers.toHaveBeenCalledWith(args : Any) : unknown
```
</signature>

> no docs found   


### Suite
`import "luxe: test" for Suite{:lx}`
> no docs found

- [new](#Suite.new+2)(**name**: `Any{:lx}`, **block**: `Any{:lx}`)
- [new](#Suite.new+4)(**name**: `Any{:lx}`, **beforeEaches**: `Any{:lx}`, **afterEaches**: `Any{:lx}`, **block**: `Any{:lx}`)
- [afterEach](#Suite.afterEach)
- [afterEach](#Suite.afterEach)(**block**: `Any{:lx}`)
- [beforeEach](#Suite.beforeEach)
- [beforeEach](#Suite.beforeEach)(**block**: `Any{:lx}`)
- [run](#Suite.run)(**reporter**: `Any{:lx}`)
- [should](#Suite.should)(**name**: `Any{:lx}`)
- [should](#Suite.should+2)(**name**: `Any{:lx}`, **block**: `Any{:lx}`)
- [skip](#Suite.skip)(**block**: `Any{:lx}`)
- [suite](#Suite.suite)(**name**: `Any{:lx}`)
- [suite](#Suite.suite+2)(**name**: `Any{:lx}`, **block**: `Any{:lx}`)
- [title](#Suite.title)


---

<endpoint module="luxe: test" class="Suite" signature="new(name : Any, block : Any)"></endpoint>
<h4 class="signature_head">Suite.new</h4><a class="signature-arity" href="#Suite.new+2" title="Permanent link">2</a><signature id="Suite.new+2">

```lx
Suite.new(name : Any, block : Any) : Suite
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="new(name : Any, beforeEaches : Any, afterEaches : Any, block : Any)"></endpoint>
<h4 class="signature_head">Suite.new</h4><a class="signature-arity" href="#Suite.new+4" title="Permanent link">4</a><signature id="Suite.new+4">

```lx
Suite.new(name : Any, beforeEaches : Any, afterEaches : Any, block : Any) : Suite
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="afterEach"></endpoint>
<h4 class="signature_head">Suite.afterEach</h4><a class="signature-arity" href="#Suite.afterEach" title="Permanent link">1</a><signature id="Suite.afterEach">

```lx
Suite.afterEach : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="afterEach(block : Any)"></endpoint>
<h4 class="signature_head">Suite.afterEach</h4><a class="signature-arity" href="#Suite.afterEach" title="Permanent link">1</a><signature id="Suite.afterEach">

```lx
Suite.afterEach(block : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="beforeEach"></endpoint>
<h4 class="signature_head">Suite.beforeEach</h4><a class="signature-arity" href="#Suite.beforeEach" title="Permanent link">1</a><signature id="Suite.beforeEach">

```lx
Suite.beforeEach : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="beforeEach(block : Any)"></endpoint>
<h4 class="signature_head">Suite.beforeEach</h4><a class="signature-arity" href="#Suite.beforeEach" title="Permanent link">1</a><signature id="Suite.beforeEach">

```lx
Suite.beforeEach(block : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="run(reporter : Any)"></endpoint>
<h4 class="signature_head">Suite.run</h4><a class="signature-arity" href="#Suite.run" title="Permanent link">1</a><signature id="Suite.run">

```lx
Suite.run(reporter : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="should(name : Any)"></endpoint>
<h4 class="signature_head">Suite.should</h4><a class="signature-arity" href="#Suite.should" title="Permanent link">1</a><signature id="Suite.should">

```lx
Suite.should(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="should(name : Any, block : Any)"></endpoint>
<h4 class="signature_head">Suite.should</h4><a class="signature-arity" href="#Suite.should+2" title="Permanent link">2</a><signature id="Suite.should+2">

```lx
Suite.should(name : Any, block : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="skip(block : Any)"></endpoint>
<h4 class="signature_head">Suite.skip</h4><a class="signature-arity" href="#Suite.skip" title="Permanent link">1</a><signature id="Suite.skip">

```lx
Suite.skip(block : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="suite(name : Any)"></endpoint>
<h4 class="signature_head">Suite.suite</h4><a class="signature-arity" href="#Suite.suite" title="Permanent link">1</a><signature id="Suite.suite">

```lx
Suite.suite(name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="suite(name : Any, block : Any)"></endpoint>
<h4 class="signature_head">Suite.suite</h4><a class="signature-arity" href="#Suite.suite+2" title="Permanent link">2</a><signature id="Suite.suite+2">

```lx
Suite.suite(name : Any, block : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: test" class="Suite" signature="title"></endpoint>
<h4 class="signature_head">Suite.title</h4><a class="signature-arity" href="#Suite.title" title="Permanent link">1</a><signature id="Suite.title">

```lx
Suite.title : unknown
```
</signature>

> no docs found   

