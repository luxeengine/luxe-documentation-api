---
title: "luxe: assert"
description: API version 2025.11.1
slug: "v/2025.11.1/assert"
---
- [Assert](#assert)   

---


## Assert
```wren
import "luxe: assert" for Assert
```
> Simple assertions.
> 
> An assertion is a statement in code that is a strict rule.
> They prevent code from behaving in unexpected ways, by asserting that the code is acting in the way you intended.
> This can catch a lot of bugs, because it can enforce correct usage of code.
> 
> For example, if your function does not allow null for an argument, that is something you can assert.
> Then the user of your code knows that they've used your API incorrectly and can correct the issue.
> 
> An assertion calls `Fiber.abort()`, ending execution (unless handled higher up).

<endpoint module="luxe: assert" class="Assert" signature="is_true(condition : Bool)"></endpoint>
### Assert.is_true(.)
```wren
Assert.is_true(condition : Bool) : None
```
> Assert that a particular condition is true.
> 
>   ```js
>   //In this code, we expect that the player
>   //should never be here if they are not flying.
>   Assert.is_true(player.flying)
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="is_true(condition : Bool, message : String)"></endpoint>
### Assert.is_true(..)
```wren
Assert.is_true(condition : Bool, message : String) : None
```
> Assert that a particular condition is true, and display a message on abort.
> 
>   ```js
>   //In this code, we expect that the player
>   //should never be here if they are not flying.
>   Assert.is_true(player.flying, "Expected player to be in a flying state")
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="is_false(condition : Bool)"></endpoint>
### Assert.is_false(.)
```wren
Assert.is_false(condition : Bool) : None
```
> Assert that a particular condition is false.
> 
>   ```js
>   Assert.is_false(player.flying)
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="is_false(condition : Bool, message : String)"></endpoint>
### Assert.is_false(..)
```wren
Assert.is_false(condition : Bool, message : String) : None
```
> Assert that a particular condition is false, and display a message on abort.
> 
>   ```js
>   Assert.is_false(player.flying, "Expected player NOT to be in a flying state")
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="not_null(value : Any)"></endpoint>
### Assert.not_null(.)
```wren
Assert.not_null(value : Any) : None
```
> Assert that a particular statement is not null.
> 
>   ```js
>   //We require a valid player in this code
>   Assert.not_null(player)
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="not_null(value : Any, message : String)"></endpoint>
### Assert.not_null(..)
```wren
Assert.not_null(value : Any, message : String) : None
```
> Assert that a particular statement is not null.
> 
>   ```js
>   Assert.not_null(player, "A valid player is required")
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="is_null(value : Any)"></endpoint>
### Assert.is_null(.)
```wren
Assert.is_null(value : Any) : None
```
> Assert that a particular statement is null.
> 
>   ```js
>   //We assume the player is not holding something.
>   Assert.is_null(player.item_in_hand)
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="is_null(value : Any, message : String)"></endpoint>
### Assert.is_null(..)
```wren
Assert.is_null(value : Any, message : String) : None
```
> Assert that a particular statement is null, and display a message on abort.
> 
>   ```js
>   Assert.is_null(player.item_in_hand, "Player must not have an item in hand when calling this")
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="equal(one : Any, other : Any)"></endpoint>
### Assert.equal(..)
```wren
Assert.equal(one : Any, other : Any) : None
```
> Assert that a two values are the same.
> (mind that this uses a regular ==, which counts references with the same values as different and can be overridden)
> 
>   ```js
>   Assert.equal(account.name, player.name)
>   ```   

<endpoint module="luxe: assert" class="Assert" signature="equal(one : Any, other : Any, message : String)"></endpoint>
### Assert.equal(...)
```wren
Assert.equal(one : Any, other : Any, message : String) : None
```
> Assert that a two values are the same, and display a message on abort.
> (mind that this uses a regular ==, which counts references with the same values as different and can be overridden)
> 
>   ```js
>   Assert.equal(account.name, player.name, "account and player should always have the same name")
>   ```   

