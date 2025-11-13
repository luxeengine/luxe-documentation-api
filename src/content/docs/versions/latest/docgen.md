---
title: "luxe: docgen"
description: API version 2025.11.1
---
## `luxe: docgen{:lx}` module

- [DocGen](#docgen)   

---


### DocGen
`import "luxe: docgen" for DocGen{:lx}`
> no docs found

- [config](#DocGen.config)
- [new](#DocGen.new)(**in_config**: `Map{:lx}`)
- [get_param_string](#DocGen.get_param_string)(**parameters**: `Any{:lx}`)
- [get_param_string](#DocGen.get_param_string+2)(**parameters**: `Any{:lx}`, **display**: `Any{:lx}`)
- [generate_from_module](#DocGen.generate_from_module)(**module_path**: `String{:lx}`)
- [generate_from_module](#DocGen.generate_from_module+2)(**config**: `Map{:lx}`, **module_path**: `String{:lx}`)
- [get_ast_for_path](#DocGen.get_ast_for_path+2)(**module_prefix**: `String{:lx}`, **path**: `String{:lx}`)
- [generate](#DocGen.generate)()
- [generate_from_project](#DocGen.generate_from_project)(**config**: `Any{:lx}`)
- [expr_to_string](#DocGen.expr_to_string)(**expr**: `Expr{:lx}`)
- [generate_from_ast_nodes](#DocGen.generate_from_ast_nodes+2)(**config**: `Map{:lx}`, **nodes**: `Map{:lx}`)
- [format_docs](#DocGen.format_docs)(**meta_list**: `Any{:lx}`)
- [get_alias](#DocGen.get_alias+2)(**meta**: `Any{:lx}`, **name**: `Any{:lx}`)
- [arity](#DocGen.arity)(**args**: `Any{:lx}`)
- [signature_url](#DocGen.signature_url+3)(**name**: `Any{:lx}`, **args**: `Any{:lx}`, **setter**: `Any{:lx}`)
- [get_meta](#DocGen.get_meta)(**source_meta**: `Any{:lx}`)
- [convert_meta](#DocGen.convert_meta)(**in_meta**: `Any{:lx}`)


---

<endpoint module="luxe: docgen" class="DocGen" signature="config"></endpoint>
<h4 class="signature_head">DocGen.config</h4><a class="signature-arity" href="#DocGen.config" title="Permanent link">1</a><signature id="DocGen.config">

```lx
DocGen.config : Map
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="new(in_config : Map)"></endpoint>
<h4 class="signature_head">DocGen.new</h4><a class="signature-arity" href="#DocGen.new" title="Permanent link">1</a><signature id="DocGen.new">

```lx
DocGen.new(in_config : Map) : DocGen
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="get_param_string(parameters : Any)"></endpoint>
<h4 class="signature_head">DocGen.get_param_string</h4><a class="signature-arity" href="#DocGen.get_param_string" title="Permanent link">1</a><signature id="DocGen.get_param_string">

```lx
DocGen.get_param_string(parameters : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="get_param_string(parameters : Any, display : Any)"></endpoint>
<h4 class="signature_head">DocGen.get_param_string</h4><a class="signature-arity" href="#DocGen.get_param_string+2" title="Permanent link">2</a><signature id="DocGen.get_param_string+2">

```lx
DocGen.get_param_string(parameters : Any, display : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="generate_from_module(module_path : String)"></endpoint>
<h4 class="signature_head">DocGen.generate_from_module</h4><a class="signature-arity" href="#DocGen.generate_from_module" title="Permanent link">1</a><signature id="DocGen.generate_from_module">

```lx
DocGen.generate_from_module(module_path : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="generate_from_module(config : Map, module_path : String)"></endpoint>
<h4 class="signature_head">DocGen.generate_from_module</h4><a class="signature-arity" href="#DocGen.generate_from_module+2" title="Permanent link">2</a><signature id="DocGen.generate_from_module+2">

```lx
DocGen.generate_from_module(config : Map, module_path : String) : unknown
```
</signature>

> takes a raw path for a module and tries to generate documentation for it   

<endpoint module="luxe: docgen" class="DocGen" signature="get_ast_for_path(module_prefix : String, path : String)"></endpoint>
<h4 class="signature_head">DocGen.get_ast_for_path</h4><a class="signature-arity" href="#DocGen.get_ast_for_path+2" title="Permanent link">2</a><signature id="DocGen.get_ast_for_path+2">

```lx
DocGen.get_ast_for_path(module_prefix : String, path : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="generate()"></endpoint>
<h4 class="signature_head">DocGen.generate</h4><a class="signature-arity" href="#DocGen.generate" title="Permanent link">1</a><signature id="DocGen.generate">

```lx
DocGen.generate() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="generate_from_project(config : Any)"></endpoint>
<h4 class="signature_head">DocGen.generate_from_project</h4><a class="signature-arity" href="#DocGen.generate_from_project" title="Permanent link">1</a><signature id="DocGen.generate_from_project">

```lx
DocGen.generate_from_project(config : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="expr_to_string(expr : Expr)"></endpoint>
<h4 class="signature_head">DocGen.expr_to_string</h4><a class="signature-arity" href="#DocGen.expr_to_string" title="Permanent link">1</a><signature id="DocGen.expr_to_string">

```lx
DocGen.expr_to_string(expr : Expr) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="generate_from_ast_nodes(config : Map, nodes : Map)"></endpoint>
<h4 class="signature_head">DocGen.generate_from_ast_nodes</h4><a class="signature-arity" href="#DocGen.generate_from_ast_nodes+2" title="Permanent link">2</a><signature id="DocGen.generate_from_ast_nodes+2">

```lx
DocGen.generate_from_ast_nodes(config : Map, nodes : Map) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="format_docs(meta_list : Any)"></endpoint>
<h4 class="signature_head">DocGen.format_docs</h4><a class="signature-arity" href="#DocGen.format_docs" title="Permanent link">1</a><signature id="DocGen.format_docs">

```lx
DocGen.format_docs(meta_list : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="get_alias(meta : Any, name : Any)"></endpoint>
<h4 class="signature_head">DocGen.get_alias</h4><a class="signature-arity" href="#DocGen.get_alias+2" title="Permanent link">2</a><signature id="DocGen.get_alias+2">

```lx
DocGen.get_alias(meta : Any, name : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="arity(args : Any)"></endpoint>
<h4 class="signature_head">DocGen.arity</h4><a class="signature-arity" href="#DocGen.arity" title="Permanent link">1</a><signature id="DocGen.arity">

```lx
DocGen.arity(args : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="signature_url(name : Any, args : Any, setter : Any)"></endpoint>
<h4 class="signature_head">DocGen.signature_url</h4><a class="signature-arity" href="#DocGen.signature_url+3" title="Permanent link">3</a><signature id="DocGen.signature_url+3">

```lx
DocGen.signature_url(name : Any, args : Any, setter : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="get_meta(source_meta : Any)"></endpoint>
<h4 class="signature_head">DocGen.get_meta</h4><a class="signature-arity" href="#DocGen.get_meta" title="Permanent link">1</a><signature id="DocGen.get_meta">

```lx
DocGen.get_meta(source_meta : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: docgen" class="DocGen" signature="convert_meta(in_meta : Any)"></endpoint>
<h4 class="signature_head">DocGen.convert_meta</h4><a class="signature-arity" href="#DocGen.convert_meta" title="Permanent link">1</a><signature id="DocGen.convert_meta">

```lx
DocGen.convert_meta(in_meta : Any) : unknown
```
</signature>

> no docs found   

